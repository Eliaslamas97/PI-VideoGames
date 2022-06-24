import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getVideogameDetail } from "../../redux/actions/actions";


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
         <div>              
                  <div> 
                          <img src={Videogame.background_image} width="480" height="250" alt=""/>
                          <div> 
                          <div ><p>Name:</p><p>{Videogame.name}</p></div>
                          <div ><p>Genres:</p><p>{Videogame.genres}</p></div>
                          <div ><p>Platforms:</p><p>{Videogame.platforms?.map(plat => plat).join(', ')}</p></div>
                          <div ><p>Release Date:</p><p>{Videogame.releaseDate}</p></div>
                          <div ><p>Rating:</p><p>{Videogame.rating}</p></div> 
                          <p>Description:</p>
                          <div dangerouslySetInnerHTML={{ __html: Videogame.description}}></div>
                          </div>
                 </div>
              <div>                    
                           <Link to='/videogames'>
                       <button>Back</button>
                           </Link>
        
                  </div>
           </div>
      </div>
    )
}