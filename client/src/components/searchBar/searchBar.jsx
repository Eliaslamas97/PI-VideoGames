import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { searchByName, getVideoGames } from "../../redux/actions/actions";
import s from "./searchBar.module.css"

export default function SearchBar() {
  const [Game, setGame] = useState("");
  const dispatch = useDispatch();
  function search(game) {
    if(game === "") {
        dispatch(getVideoGames()) 
    } else {
        dispatch(searchByName(game))
    }
  }

  return (
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
  );
}