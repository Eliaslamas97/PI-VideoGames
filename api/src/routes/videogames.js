const router = require('express').Router();
const axios = require('axios');
const {YOUR_API_KEY} = require('./../db');
const { Videogames, Genres } = require("./../db")
const { Op } = require('sequelize');

router.get('/', async(req, res) => {
    const {name} = req.query;
    let page = 1;
    if(name)   
     {
        let gamesBd = await Videogames.findAll({
            where: {
                name: {[Op.iLike]: `%${name}%`}
            },
            include: [{model: Genres}]       
        })
        let gamesApi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}`)
        const game = gamesApi.data.results.map(g => {
            return {
                id: g.id,
                name: g.name,
                platforms: g.platforms.map((element) => {
                    return element.platform.name;
                }),
                releasedate: g.released,
                rating: g.rating,
                genres: g.genres.map(e=> {
                    return {
                        id:e.id,
                        name:e.name
                    };

                }),
                background_image: g.background_image,          
            }       
        })
        let index = 0
        while(gamesBd < 15){
            gamesBd.push(game[index])
            index ++
        }
        if(gamesBd && gamesBd.length > 0 ) {
            res.send(gamesBd)
        } else {
            res.send('No se encontraron resultados')
        }
    } else {
        let gamesBd = await Videogames.findAll({
            include: [{model: Genres}]       
        }) 
        let gamesApi = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=1`)



        let current = gamesApi.data;
        let apiInfo= current.results;
        while(page < 5 ){
            page ++;
            let nextPage = await axios.get(current.next)
            apiInfo = apiInfo.concat(nextPage.data.results);
            current = nextPage.data 
        }



        const game = apiInfo.map(g => {
            return {
                id: g.id,
                name: g.name,
                platforms: g.platforms.map((element) => {
                    return element.platform.name;
                }),
                releasedate: g.released,
                rating: g.rating,
                genres: g.genres.map(e=> {
                    return {
                        id:e.id,
                        name:e.name
                    };
                }),
                background_image: g.background_image,         
            }       
        })
        gamesBd = [...gamesBd, ...game] 
        if(gamesBd && gamesBd.length > 0 ) {
            res.send(gamesBd)
        } else {
            res.send('No se encontraron resultados')
        }
    }
});


router.post("/create", async function (req, res,next) {
    const {
      name,
      description,
      releaseDate,
      rating,
      platforms,
      genres,
    } = req.body;
    try{
    const videogame = await Videogames.create({
      name,
      description,
      releaseDate,
      rating,
      background_image:'https://shortest.link/EL7',
      platforms,
    });
    const generos = await Genres.findAll({
        where: { name: genres },
    });
    videogame.addGenres(generos);

    // await videogame.addGenres(genres);
    res.status(201).send("Game successfully created");
    }
    catch(e){next(e)}
  });

  router.delete('/', async function(req, res) {
    try{
        const {name} = req.query;
        if(!name) {
            const game = await Videogames.findAll();
            return res.status(200).send(game);
        }
        if(!Videogames) {
           return res.status(200).send("No se encontraron Videojuegos")
        }else {
            const games = await Videogames.destroy({where:{name: [name]}})
            return res.status(200).send("Videogames Deleted")
        }
    } catch(e){
        console.log(e);
    }
  })


router.get("/myGames", async function(req, res){
    const myGames = await Videogames.findAll();
    res.status(200).send(myGames);
});

module.exports = router;