import axios from 'axios';


// ------------ACTIONS---CREATORS--------------//
export function getVideoGames() {
    return function(dispatch) {
        return axios.get ('/videogames')
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
       return axios.get(`/videogames?name=${name}`)
       .then((response) => {
         dispatch({
             type:'SEARCH_BY_NAME', 
             payload: response.data,
         })
    })
        
}
} 
//...............DETAIL GAME....................
export function getVideogameDetail(id){
    return function (dispatch) {
        return axios.get(`/videogame/${id}`)
        .then((response) => {
            dispatch({
                type:'GET_VIDEOGAME_DETAIL',
                payload: response.data,
            })
        })
    };
}
//.................... POST CREATE GAME.................
export function postGame(payload){
    return dispatch => {
        try {
                axios.post(`/videogames/create`, payload)
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
        return axios.get ('/genres')
        .then((response) => {
            dispatch({ 
                type: GET_GENRES,
                 payload: response.data
            });           
        })
    }
}

export const deleteVideogame = (name) => async dispatch => {
    const res= await axios.delete(`/videogames?name=${name}`)
    dispatch({
      type:DELETE_VIDEOGAME,
      payload:res.data,
    })
  }

export function getMyGames() {
    return function(dispatch){
        return axios.get('/videogames/myGames')
        .then((myGames) => {
            dispatch(setMyGames(myGames.data))
        })
        .catch((e)=> {
            console.log(e);
        })
    }
}

function setMyGames(payload) {
    return {
        type: GET_MYGAMES,
        payload,
    }
}


export function filterGenres(type) {
    return {
        type: FILTER_GENRES,
        payload: type,
    };
}

export function sortRating(type) {
    return {
        type: SORT_RATING,
        payload: type,
    };
}

export function sortAlphabet(type) {
    return {
        type: SORT_ALPHABET,
        payload: type,
    };
}

export function filterOrigin(value) {
    if(value === 'DB') {
        return {
            type: 'DB',
        }
    } else if (value ==='API') {
        return {
            type: 'API',
        }
    } else if (value === 'ALL') {
        return {
            type: 'ALL'
        }
    }
}

export function filterReleaseDate(type) {
    return {
        type: FILTER_RELEASEDATE,
        payload:type
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
//-------DELETE------------------
export const DELETE_VIDEOGAME = 'DELETE_VIDEOGAME';
export const GET_MYGAMES = 'GET_MYGAMES'
//-------FILTERS-------------------
export const FILTER_GENRES = 'FILTER_GENRES';
export const SORT_ALPHABET = 'SORT_ALPHABET';
export const SORT_RATING = 'SORT_RATING';
export const DB = "DB";
export const ALL = "ALL";
export const API = "API";
export const FILTER_RELEASEDATE = "FILTER_RELEASEDATE"