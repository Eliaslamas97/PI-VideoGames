import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGenres, postGame } from "../../redux/actions/actions";

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
        setNewGame({...newGame, genres:[...newGame.genres,e.target.value]})
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
        <div>
            <form name="formAct" onSubmit={e => handleSubmit(e)}>
                <h1>Create Game</h1>
                <input name="name" autoComplete="off" placeholder="Game name..." onChange={e => HandleGame(e)}/>
                <p>{errorsValue.name}</p>
                <div>
                    <textarea name="description" autoComplete="off" placeholder="Game description" rows="5" cols= "50" onChange={e=> HandleGame(e)}/>
                    <p>{errorsValue.description}</p>
                </div>
                <div>
                    <label>Release Date: </label>
                    <br/>
                    <input name="releaseDate" type="date" onChange={e => HandleGame(e)}/>
                </div>
                <br/>
                <div>
                    <select name="rating" onChange={e => HandleGame(e)}>
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
                    <label>Platforms: </label>
                    <div>
                        <label>Android</label>
                        <input name="platforms" type="checkbox" value="Android"  onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label>iOS</label>
                        <input name="platforms" type="checkbox" value="iOS"  onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label>PC</label>
                        <input name="platforms" type="checkbox" value="PC" onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label>PlayStation 4</label>
                        <input name="platforms" type="checkbox" value="PlayStation 4" onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label>PlayStation 5</label>
                        <input name="platforms" type="checkbox" value="PlayStation 5" onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label>XBOX</label>
                        <input name="platforms" type="checkbox" value="XBOX"  onChange= {e => HandlePlatforms(e)}/>
                    </div>
                    <div>
                        <label>PS Vita</label>
                        <input name="platforms" type="checkbox" value="PS Vita" onChange= {e => HandlePlatforms(e)}/>
                    </div>
                </div>
                <br/>
                <div>
                    <select onChange={(e) => {
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
                    <span key={e}>
                    <span>{e} </span>
                    <button onClick={()=> handleDelete(e)}>x</button>
                    </span>
                    )}
                </div>
                <div>
                <button type="submit">Create Game</button>
                    {console.log(newGame)}
                </div>
            </form>
        </div>
        <Link to={"/videogames"} >
        <button className="mainPageButton">Go to Main Page</button>
        </Link>
        </>
    )   
} 