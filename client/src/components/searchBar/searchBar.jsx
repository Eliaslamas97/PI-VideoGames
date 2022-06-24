import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { searchByName, getVideoGames } from "../../redux/actions/actions";

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
         type="text"
         placeholder= "Videogame..."
         value={Game}
         onChange={e => setGame(e.target.value)}
        />
        <input type="submit" value= "Search" />
    </form>
  );
}