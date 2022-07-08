import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { searchByName, getVideoGames } from "../../redux/actions/actions";
import s from "./searchBar.module.css"

export default function SearchBar() {
  const [Game, setGame] = useState("");
  const dispatch = useDispatch();
  const error = useSelector(state => state.error)

  function search(game) {
    if(game === "") {
        dispatch(getVideoGames()) 
        dispatch(searchByName(""))
    } else {
        dispatch(searchByName(game))
    }
  }

  return (
    <>
    <form onSubmit={(e) => {
        e.preventDefault();
        search(Game);
        setGame("");
    }}>
        <input
        className={s.inputSearch}
         type="text"
         placeholder= "Buscar"
         value={Game}
         onChange={e => setGame(e.target.value)}
        />
        <input className={s.bottonSearch} type="submit" value= "Search"/>  
    </form>
    {error && typeof error==="string"? <p>{error}</p>:null}
    </>
  );
}