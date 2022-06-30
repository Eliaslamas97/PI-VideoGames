//-------------------------------------ALL IMPORT-----------------------------------//
import axios from "axios";
import {
    GET_VIDEOGAMES,
    SEARCH_BY_NAME,
    GET_VIDEOGAME_DETAIL,
    GET_GENRES,
    FILTER_GENRES,
    SORT_ALPHABET,
    SORT_RATING,
    DB,
    API,
    ALL
  } from "../actions/actions";
  
  const initialState = {
    videogames: [],
    videogameDetail: [],
    videogamesToShow: [],
    genres: [],
    filteredVideogames: [],
  };
  
  function rootReducer(state = initialState, action, payload) {
    switch (action.type) {
      case GET_VIDEOGAMES:
        return {
          ...state,
          videogames: action.payload,
          videogamesToShow: action.payload,        
        };
      
      case GET_GENRES:
        return {
          ...state,
          genres: action.payload,     
        };

      case SEARCH_BY_NAME:
        return {
          ...state,
          videogames: action.payload,
          videogamesToShow: action.payload,
        };

      case GET_VIDEOGAME_DETAIL:
        return {
          ...state,
          videogameDetail: action.payload,
        };

      case SORT_ALPHABET:
        let orderedAlphabet
        if(state.filteredVideogames.length > 0) {
          orderedAlphabet = [...state.filteredVideogames]
        } else {
            orderedAlphabet = [...state.videogames]
        }
        if(action.payload === "A-Z") {
          orderedAlphabet = orderedAlphabet.sort((a, b) => {
            if(a.name < b.name) {
              return -1;
            }
            if(a.name > b.name) {
              return 1;
            }
            return 0;
          })
        } else if(action.payload === "Z-A") {
          orderedAlphabet = orderedAlphabet.sort((a, b) => {
            if(a.name < b.name) {
              return 1;
            }
            if(a.name > b.name) {
              return -1;
            }
            return 0;
          })
        }
        return {
          ...state,
          filteredVideogames: orderedAlphabet,  
        }
      
      case SORT_RATING:
        let orderedRating
        if(state.filteredVideogames.length > 0) {
          orderedRating = [...state.filteredVideogames]
        }else {
          orderedRating = [...state.videogames]
        }
        if(action.payload === "descendant") {
          orderedRating = orderedRating.sort((a, b) => {
            if(a.rating < b.rating) {
              return -1;
            }
            if(a.rating > b.rating) {
              return 1;
            }
            return 0
          })
        }else if(action.payload === "ascendant") {
          orderedRating = orderedRating.sort((a, b) => {
            if(a.rating < b.rating) {
              return 1;
            }
            if(a.rating > b.rating) {
              return -1;
            }
            return 0;
          })
        }
        return {
          ...state,
          filteredVideogames: orderedRating,
        }
        case DB:
          return {
            ...state,
            filteredVideogames: state.videogames.filter(e => isNaN(e.id))
          }

        case API: 
        return {
          ...state,
          filteredVideogames: state.videogames.filter(e => !e.createDb)
        }
        
        case ALL:
          return {
            ...state,
            filteredVideogames: state.videogames,
          }
        
        case FILTER_GENRES:
          let filteredGenres = [];
          state.videogames.map((game) => {
            game.genres.map((genres) => {
              if(genres.name === action.payload) {
                return filteredGenres.push(game)
              }
            })
          })
          return {
            ...state,
            filteredVideogames: filteredGenres,
          }


      default:
        return { ...state };
    }
  }
  
  export default rootReducer;