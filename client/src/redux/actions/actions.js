import axios from 'axios';


// ------------ACTIONS---CREATORS--------------//
export function getVideoGames() {
    return function(dispatch) {
        return axios.get ('http://localhost:3002/videogames')
        .then((response) => {
            dispatch({ 
                type: 'GET_VIDEOGAMES',
                 payload: response.data
            });           
        })
    }
} 
//............SEARCH NAME FUNCTION..............
export function searchByName(name) {
    return  function (dispatch) {
       return axios.get(`http://localhost:3002/videogames?name=${name}`)
       .then((response) => {
         dispatch({
             type:'SEARCH_BY_NAME', 
             payload: response.data,
         })
    })}
} 
//...............DETAIL GAME....................
export function getVideogameDetail(id){
    return function (dispatch) {
        return fetch(`http://localhost:3002/videogame/${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({type:"GET_VIDEOGAME_DETAIL", payload:json})
        });
    };
}
//.................... POST CREATE GAME.................
export function postGame(payload) {
    console.log(payload)
    return async function(dispatch) {
        const post = await axios.post('http://localhost:3002/videogames/create', payload)
        return {
            type:POST_GAME, 
            post
        }
    }
}
//........Create Game...............
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const  POST_GAME = "POST_GAME";
//---------SERCH ------------------
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
//-------DETAIL GAME---------------
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL';