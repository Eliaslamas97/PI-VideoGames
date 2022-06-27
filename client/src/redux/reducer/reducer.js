//-------------------------------------ALL IMPORT-----------------------------------//
import {
    GET_VIDEOGAMES,
    SEARCH_BY_NAME,
    GET_VIDEOGAME_DETAIL,
    GET_GENRES,
  } from "../actions/actions";
  
  const initialState = {
    videogames: [],
    videogameDetail: [],
    videogamesToShow: [],
    genres: [],
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
  
        
      // ---------------------SEARCH NAME-----------------
      case SEARCH_BY_NAME:
        return {
          ...state,
          videogames: action.payload,
          videogamesToShow: action.payload,
        };
      //-------------------- DETAIL GAME------------------
      case GET_VIDEOGAME_DETAIL:
        return {
          ...state,
          videogameDetail: action.payload,
        };           
      default:
        return { ...state };
    }
  }
  
  export default rootReducer;