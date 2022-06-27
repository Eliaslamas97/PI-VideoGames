import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGenres, postGame } from "../../redux/actions/actions";

export default function CreateVideogames () {
    const [errorsValue, setErrorsValue] = useState({})
    const [newGame, setNewGame] = useState({name: "", description: "", releaseDate: "", rating: "", genres: [], platforms: ""})
    
    const dispatch = useDispatch();
    const allGenres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorsValue(validateValue(newGame))

        const error = validateValue(newGame)
        console.log(validateValue(newGame))

        if(Object.values(error).length === 0) {
            console.log('hola')
            dispatch(postGame(newGame))
            alert("Game created")
            document.formAct.reset();
        }
    }
    function onClose(e) {
        if(newGame.genres.length===1){
          newGame.genres.pop()
          setNewGame({...newGame,genres:[]})
        }
        let filtrados=newGame.genres.filter(c => { console.log("este es name "+ e.target.value)
      return c!== e.target.value})
        setNewGame({...newGame, genres:[filtrados]});       
    }
    
    // function onCloseP(e) {
    //     if(newGame.platforms.length===1){
    //       newGame.platforms.pop()
    //       setNewGame({...newGame,platforms:[]})
    //     }
    //     let filtrados=newGame.platforms.filter(c => { console.log("este es name "+ e.target.value)
    //   return c!== e.target.value})
    //     setNewGame({...newGame, platforms:[filtrados]});       
    // }

    // function repetidos(array) {
    //     return new Set(array).size !== array.length
    // }

    function validateValue({name, description, rating}) {
        let errors = {};
        if(!name){
            errors.name = "Name is required"
        }else if(name.length < 4){
            errors.name = "Name is invalid"
        }
        if (!description) errors.description = "Description is required";
        // if (platforms.length === 0)  errors.platforms = "Select at least one platform";
        if (rating !== "" && (rating<1 || rating>5))  errors.rating = "Rating is required";
         return errors;
    }
    function HandleGame(e){
        setNewGame({...newGame,[e.target.name]:e.target.value})
      }
      
    function HandleGenres(e){
        setNewGame({...newGame, genres:[...newGame.genres,e.target.value]})
      }
    // function HandlePlatforms(e){
    //     setNewGame({...newGame, platforms:[...newGame.platforms,e.target.value]})
    //   }

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
                {/* <div>
                    <label>Platforms: </label>
                    <div>
                        <label>Android</label>
                        <input name="platforms" type="checkbox" value="Android" onChange= {e => HandleGame(e)}/>
                    </div>
                    <div>
                        <label>iOS</label>
                        <input name="platforms" type="checkbox" value="iOS" onChange= {e => HandleGame(e)}/>
                    </div>
                    <div>
                        <label>PC</label>
                        <input name="platforms" type="checkbox" value="PC" onChange= {e => HandleGame(e)}/>
                    </div>
                    <div>
                        <label>PlayStation 4</label>
                        <input name="platforms" type="checkbox" value="PlayStation 4" onChange= {e => HandleGame(e)}/>
                    </div>
                    <div>
                        <label>PlayStation 5</label>
                        <input name="PlayStation 5" type="checkbox" onChange= {e => HandleGame(e)}/>
                    </div>
                    <div>
                        <label>XBOX</label>
                        <input name="XBOX" type="checkbox"  onChange= {e => HandleGame(e)}/>
                    </div>
                    <div>
                        <label>PS Vita</label>
                        <input name="PS Vita" type="checkbox" onChange= {e => HandleGame(e)}/>
                    </div>
                </div> */}

                <div>
                <select name="platforms" onChange={(e) => {
                        // e.preventDefault(e)
                        // HandlePlatforms(e)
                         HandleGame(e)
                    }}>
                    <option hidden>Platforms</option>
                    <option key="a" value="Android">Android</option>
                    <option key="b" value="iOS">iOS</option>
                    <option key="c" value="PC">PC</option>
                    <option key="d" value="PlayStation 4">PlayStation 4</option>
                    <option key="e" value="PlayStation">PlayStation 5</option>
                    <option key="f" value="XBOX">XBOX</option>
                    <option key="g" value="PS Vita">PS Vita</option>
                    </select>
                </div> 
                
                <div>
                <button type="submit">Create Game</button>
                    {console.log(newGame)}
                </div>
            </form>
            {
                <div>
                    <ul>
                        {
                            (
                                newGame.genres.length>0?
                                //true
                                newGame.genres.map((genres,index) => {
                                    return (
                                        <>
                                        <li key={index}><button value={genres} onClick={(e)=>onClose(e)}>X</button>{genres}</li>
                                        </>
                                    )
                                })
                                :
                                    //false
                                (
                                <h4>Agregar los Generos</h4>
                                )
                            )
        
                        }
                    </ul>
                </div>
            }

            {/* {
                <div>
                    <ul>
                        {
                            (
                                newGame.platforms.length>0?
                                //true
                                newGame.platforms.map((platforms,index) => {
                                    return (
                                        <>
                                        <li key={index}><button value={platforms} onClick={(e)=>onCloseP(e)}>X</button>{platforms}</li>
                                        </>
                                    )
                                })
                                :
                                    //false
                                (
                                <h4>Agrega las Plataformas</h4>
                                )
                            )
        
                        }
                    </ul>
                </div>
            } */}
        </div>
        </>
    )   
} 