const router = require('express').Router();
const axios = require('axios');
const {YOUR_API_KEY} = require('./../db');
const { Genres } = require("./../db")

router.get('/', async(req, res) => {
    try {
    let genresBd = await Genres.findAll();
    if(genresBd.length > 0) return res.send(genresBd);
    let genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
    const genres = genresApi.data.results;
    genres.forEach(async g => {
        await Genres.findOrCreate({
            where: {name: g.name}
        })
    })
   } catch(error) {
    console.log(error);
   }
})
  
  module.exports = router;