import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGenres, postGame } from "../../redux/actions/actions";
import s from "./create.module.css"

export default function CreateVideogames () {
    const [errorsValue, setErrorsValue] = useState({})
    const [newGame, setNewGame] = useState({name: "", description: "", releaseDate: "", rating: "", genres: [], platforms: []})
    
    const dispatch = useDispatch();
    const allGenres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorsValue(validateValue(newGame))

        const error = validateValue(newGame)

        if(Object.values(error).length === 0) {
            dispatch(postGame(newGame))
            alert("Game created")
            document.formAct.reset();
        }
        // window.location.reload()
    }

    function validateValue({name, description, rating}) {
        let errors = {};
        if(!name){
            errors.name = "Name is required"
        }else if(name.length < 4){
            errors.name = "Name is invalid"
        }
        if (!description) errors.description = "Description is required";
        if (rating !== "" && (rating<1 || rating>5))  errors.rating = "Rating is required";
         return errors;
    }
    function HandleGame(e){
        setNewGame({...newGame,[e.target.name]:e.target.value})
      }
    function HandleGenres(e){
        if(newGame.genres.includes(e.target.value)) {
            setNewGame({...newGame, genres:[...newGame.genres]})
        } else {
        setNewGame({...newGame, genres:[...newGame.genres,e.target.value]})
        }
      }
    function HandlePlatforms(e){
        setNewGame({
            ...newGame,
            platforms: e.target.checked ? [...newGame.platforms, e.target.value]
                        : [...newGame.platforms.filter(p=> p !== e.target.value)]
        })
    }
    function handleDelete(e){
        setNewGame({
            ...newGame,
            genres: [...newGame.genres.filter(g=> g !== e)]
        })
    }

    return(
        <>
        <div className={s.container}>
            <form name="formAct" onSubmit={e => handleSubmit(e)}>
                <h1 className={s.title}>Create Game</h1>
                <input className={s.input} name="name" autoComplete="off" placeholder="Game name..." onChange={e => HandleGame(e)}/>
                <p>{errorsValue.name}</p>                
                    <textarea className={s.description} name="description" autoComplete="off" placeholder="Game description" rows="5" cols= "50" onChange={e=> HandleGame(e)}/>
                    <p>{errorsValue.description}</p>
        <div className={s.container3}>
             <div className={s.container2}>   
                <div>
                    <label className={s.textdate}>Release Date: </label>
                    <br/>
                    <input className={s.date} name="releaseDate" type="date" onChange={e => HandleGame(e)}/>
                </div>
                <br/>
                <div>
                    <select className={s.rating} name="rating" onChange={e => HandleGame(e)}>
                        <option>Rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <br/>              
                <div>
                    <select className={s.genres} onChange={(e) => {
                        e.preventDefault(e)
                        HandleGenres(e)
                    }}>
                        <option hidden>Genres</option>
                        {
                            allGenres?.map(c => {
                                return(
                                    <option key={c.name} value={c.name}>{c.name}</option>
                                )
                            })
                        }
                    </select>
                    <p>{errorsValue.genres}</p>
                </div>
                <div>
                    {newGame.genres.map(e => 
                    <span className={s.spn} key={e}>
                    <span>{e} </span>
                    <button className={s.btn} onClick={()=> handleDelete(e)}>x</button>
                    </span>
                    )}
                </div>
             </div>
                <br/>
                <div className={s.container4}>
                    <label className={s.textp}>Platforms: </label>
                    <div>
                        <label className={s.labelplat}>Android</label>
                        <input className={s.iplat} name="platforms" type="checkbox" value="Android"  onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label  className={s.labelplat}>iOS</label>
                        <input name="platforms" type="checkbox" value="iOS"  onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label  className={s.labelplat}>PC</label>
                        <input name="platforms" type="checkbox" value="PC" onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label  className={s.labelplat}>PlayStation 4</label>
                        <input name="platforms" type="checkbox" value="PlayStation 4" onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label  className={s.labelplat}>PlayStation 5</label>
                        <input name="platforms" type="checkbox" value="PlayStation 5" onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label  className={s.labelplat}>XBOX</label>
                        <input name="platforms" type="checkbox" value="XBOX"  onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label  className={s.labelplat}>PS Vita</label>
                        <input name="platforms" type="checkbox" value="PS Vita" onChange= {e => HandlePlatforms(e)}/>
                    </div>
                </div>
                <br/>
            </div> 
                <div>
                <button className={s.btn} type="submit">Create Game</button>
                    {console.log(newGame)}
                </div>
            </form>
        </div>
        <Link to={"/videogames"} >
        <button className={s.btnback} >Back to Home</button>
        </Link>
        <Link to={"/videogames/create/mygames"}>
            <button className={s.btnback}>Delete</button>
        </Link>
        </>
    )   
} 