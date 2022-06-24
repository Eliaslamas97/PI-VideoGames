import React, { useEffect } from "react";
import VideogameCard from "../videogameCard/videogameCard";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames } from "../../redux/actions/actions";

export default function Home(card) {
 const dispatch = useDispatch();
 const videogames = useSelector(state => state.videogames)

 useEffect(() => {
    dispatch(getVideoGames())
 }, [dispatch]);
 return (
    <div>
        {videogames?.map((x) => {
            return (
                <VideogameCard
                key= {x.id}
                id= {x.id}
                name={x.name}
                background_image={x.background_image}
                genres= {x.genres}
                rating= {x.rating}
                
                />
            )
        })}
    </div>
 )
}