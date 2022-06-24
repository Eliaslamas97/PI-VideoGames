import React from "react";
import { Link } from "react-router-dom"

export default function VideogameCard(props) {
//props que recibo id, name, image, genres, rating, releasedDate
return (
    <div>
        <Link to ={`/videogame/${props.id}`}>
            <img src={props.background_image} alt="Videogame img" />
            <h4>{props.name}</h4>
            <div>
                <div>
                    <h4>Genres:</h4>
                    {props.genres?.map((genre, i)=> {
                        return(
                            <div key={`${props.id} + ${1+i}`}>
                                <span>{genre.name}</span>
                            </div>
                        )
                    })}
                </div>
                {/* <div>
                    <h4>Release Date</h4>
                    <h3>{props.release_date}</h3>
                </div> */}
                <div>
                    <h4>Rating</h4>
                    <h3>{props.rating}</h3>
                </div>
            </div>
        </Link>
    </div>
)
}