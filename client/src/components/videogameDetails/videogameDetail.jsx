import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getVideogameDetail } from "../../redux/actions/actions";
import s from "./detail.module.css"


export default function VideogameDetail() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const Videogame = useSelector(state=> state.videogameDetail);

    useEffect(() => {
        dispatch(getVideogameDetail(id));
    }, [dispatch, id])
     console.log(Videogame)
    return (        
        <div>
         <div >              
                  <div className={s.container}> 
                          <img className={s.img} src={Videogame.background_image} width="450" height="280" alt=""/>
                          <div> 
                          <div className={s.name}><p>Name:</p><p>{Videogame.name}</p></div>
                          <div className={s.genres}><p>Genres:</p><p>{Videogame.genres}</p></div>
                          <div className={s.platforms}><p>Platforms:</p><p>{Videogame.platforms?.map(plat => plat).join(', ')}</p></div>
                          <div className={s.date}><p>Release Date:</p><p>{Videogame.releaseDate}</p></div>
                          <div className={s.rating}><p>Rating:</p><p>{Videogame.rating}</p></div> 
                          
                          </div>          
                 </div>
                        <p className={s.description}>Description:</p>
                          <div className={s.description} dangerouslySetInnerHTML={{ __html: Videogame.description}}></div>
              <div>                    
                           <Link to='/videogames'>
                       <button>Back</button>
                           </Link>
        
                  </div>
           </div>
      </div>
    )
}