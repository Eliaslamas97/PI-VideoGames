import React, { useEffect, useState } from "react";
import VideogameCard from "../videogameCard/videogameCard";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames } from "../../redux/actions/actions";
import s from "./home.module.css";
import  image  from "../../images/lafoto.jpg"

export default function Home(card) {
 const dispatch = useDispatch();
 const videogames = useSelector(state => state.videogames)
 const filtrados = useSelector(state => state.filteredVideogames)
 const [pageItems, setPageItems] = useState(0);
 const [currentPage, setCurrentPage] = useState(1);

 useEffect(() => {
    dispatch(getVideoGames())
 }, [dispatch]);

 const filterVideogames = () => {
    if(filtrados.length > 0) {
        if(currentPage === 1){
            return filtrados.slice(pageItems, pageItems + 15)
        }
        return filtrados.slice(pageItems - 1, pageItems + 14)
    }else{
        if(currentPage === 1){
            return videogames.slice(pageItems, pageItems + 15)
        }
        return videogames.slice(pageItems - 1, pageItems + 14)
    }
 }

 const NextHandler= () => {
    if(pageItems + 1 >= videogames.length) return;
    setPageItems(pageItems + 10)
    setCurrentPage(currentPage + 1)
 }
 const PrevHandler = () => {
    const prevPage = currentPage - 1
    if(prevPage <= 0) return;
    setPageItems(pageItems - 10)
    setCurrentPage(currentPage - 1)
 }

 return (
    <div >
            <div className={s.background}> 
                <img src={image} className={s.stretch} alt="" />
            </div>
            <br/>
            <br/>
            {/* <div className={s.paginado}>
                <button className={s.button} onClick={PrevHandler}>Prev</button>
                <span className={s.span}> {currentPage} </span>
                <button className={s.button} onClick={NextHandler}>Next</button>
            </div> */}
        <div  className={s.cards}>
        {filterVideogames()?.map((x) => {
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
        <div className={s.paginado}>
                <button className={s.button} onClick={PrevHandler}>Prev</button>
                <span className={s.span}> {currentPage} </span>
                <button className={s.button} onClick={NextHandler}>Next</button>
        </div>
    </div>
 )
}