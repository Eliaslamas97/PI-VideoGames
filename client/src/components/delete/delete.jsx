import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteVideogame, getMyGames, getVideoGames } from "../../redux/actions/actions";
import s from "./delete.module.css"
import { Link } from "react-router-dom";

export default function MyGames() {

const dispatch = useDispatch();
let myGames  = useSelector((state) => state.myGames)

useEffect(() => {
  dispatch(getMyGames())
}, [dispatch])

let juegosFiltrados = myGames.map((game) => {
    return game.name
})

function handleDelete(e){
    dispatch(deleteVideogame(e.target.value))
    juegosFiltrados.filter(g=> g !== e.target.value)
    window.location.reload()
}

const HandleDispatch=()=>{
  dispatch(getVideoGames())
}

return(
  <div>
    {/* <div className={s.background}> 
      <img src={image} className={s.stretch} alt="" />  
    </div> */}
   
    <div className={s.container}>
      {juegosFiltrados.length > 0 ? <h3 className={s.title}>Videogames Created</h3> : <h3 className={s.a}>No Videogames Found</h3>}
        <ul className={s.puntitos}>
          {juegosFiltrados.length > 0 &&
            juegosFiltrados.map((nameVideogame) => {
              return (
                <li key={nameVideogame} className={s.lista} >
                  {nameVideogame}<button className={s.closeButton} value={nameVideogame} onClick={(e)=> handleDelete(e)}>❌</button>
                </li> 
              )
            })
          }
        </ul>
    </div>
     <div>
      <Link to="/videogames"  onClick={()=> HandleDispatch()}><button className={s.btnback}>Go Home</button></Link>
    </div>
  </div>
)
}

