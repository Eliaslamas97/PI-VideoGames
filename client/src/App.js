import './App.css';
import React from "react"
import {Route} from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import NavBar from "./components/navBar/NavBar";
import VideogameDetail from "./components/videogameDetails/VideogameDetail";
import CreateVideogames from "./components/createVideogames/CreateVideogames";
import Home from "./components/home/Home";
import Filters from './components/filter/Filter';

const App = () => {
  return (

    <>
    <Route path="/videogames" component={NavBar} />
    <Route path="/videogame" component={NavBar} />
    <Route exact path="/videogames" component={Filters}/>
    <Route exact path="/videogames" component={Home}/>
    <Route exact path="/videogame/:id" component={VideogameDetail} />
    <Route exact path="/videogames/create" component={CreateVideogames} />
    <Route exact path="/" component={LandingPage} />
  </>
  )
}

export default App