// import './App.css';
import React from "react"
import {Route} from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage.jsx";
import NavBar from "./components/navBar/navBar.jsx";
import VideogameDetail from "./components/videogameDetails/videogameDetail.jsx";
import CreateVideogames from "./components/createVideogames/createVideogames.jsx";
import Home from "./components/home/home.jsx";
import Filters from './components/filter/filter.jsx';

export default function App () {
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