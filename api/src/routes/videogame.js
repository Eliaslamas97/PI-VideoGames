const router = require('express').Router();
const axios = require('axios');
const {YOUR_API_KEY} = require('./../db');
const { Videogames, Genres } = require("./../db")
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');


router.get('/:idVideogame', async(req, res) => {
    const { idVideogame } = req.params;
    try {
        if(idVideogame.includes('-')) {
        let gameById = await Videogames.findOne({
            where:{
                id: idVideogame
            },
            include: Genres,
        });
        gameById = JSON.stringify(gameById); //JSON. stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
        gameById = JSON.parse(gameById); //JSON. parse() analiza una cadena de texto como JSON
        gameById.genres = gameById.genres.map(g => g.name)
         return res.send(gameById)
    }
        let gameApi = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${YOUR_API_KEY}`)
        let { name, background_image, genres, description, released: releaseDate, rating, platforms } = gameApi.data;
        genres = genres.map(g => g.name)
        platforms= platforms.map((element) => {
            return element.platform.name;
        }),
         res.json ({
            name,
            background_image,
            genres,
            description,
            releaseDate,
            rating,
            platforms,
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;