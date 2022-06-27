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
export const postGame = (payload) => {
    return dispatch => {
        try {
                axios.post(`http://localhost:3002/videogames/create`, payload)
                .then((res) => {
                    dispatch({
                        type: POST_GAME,
                        payload:res.data
                    })
                })
        } catch (e) {
            console.log(e)
        }
    }
}
//.................... GET GENRES.................
export function getGenres() {
    return function(dispatch) {
        return axios.get ('http://localhost:3002/genres')
        .then((response) => {
            dispatch({ 
                type: 'GET_GENRES',
                 payload: response.data
            });           
        })
    }
} 
//........Create Game...............
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const  POST_GAME = "POST_GAME";
export const GET_GENRES = "GET_GENRES"
//---------SERCH ------------------
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
//-------DETAIL GAME---------------
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL';