import React from "react";
import { Link } from "react-router-dom"
import s from "./videogameCard.module.css"

export default function VideogameCard(props) {
//props que recibo id, name, image, genres, rating, releasedDate
return (
   <div className={s.videogame}>
    <div >
        <Link to ={`/videogame/${props.id}`}>
            <img src={props.background_image} alt="Videogame img" className={s.image}/>
            <h4 className={s.videogameTitle}>{props.name}</h4>
            <div>
                <div>
                    <h4 className={s.info} >Genres:</h4>
                    {props.genres?.map((genre, i)=> {
                        return(
                            <div  className={s.info} key={`${props.id} + ${1+i}`}>
                                <span>{genre.name}</span>
                            </div>
                        )
                    })}
                </div>
                <div className={s.info}>
                    <h4>Rating: </h4>
                    <h3> {props.rating}</h3>
                </div>
            </div>
        </Link>
    </div>
    </div> 
)
}