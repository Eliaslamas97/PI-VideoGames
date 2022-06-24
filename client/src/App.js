import './App.css';
import React from "react"
import {Route} from "react-router-dom";
import landingPage from "./components/landingPage/landingPage";
import navBar from "./components/navBar/navBar";
import videogameDetail from "./components/videogameDetails/videogameDetail";
import createVideogames from "./components/createVideogames/createVideogames";
import home from "./components/home/home";

const App = () => {
  return (

    <>
    <Route path="/videogames" component={navBar} />
    <Route path="/videogame" component={navBar} />
    <Route exact path="/videogames" component={home}/>
    <Route exact path="/videogame/:id" component={videogameDetail} />
    <Route exact path="/videogames/create" component={createVideogames} />
    <Route exact path="/" component={landingPage} />
  </>
  )
}

export default App