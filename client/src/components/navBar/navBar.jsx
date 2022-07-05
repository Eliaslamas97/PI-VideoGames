import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import s from './navBar.module.css'
import { useDispatch } from "react-redux";
import { getVideoGames } from "../../redux/actions/actions";


const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav className={s.nav}>
      <Link className={s.videogame} to='/'>Videogames App</Link>
        <Link className={s.home} onClick={()=> dispatch(getVideoGames())} to="/videogames">Home</Link>
        <Link className={s.create} to="/videogames/create">Create Videogame</Link> 
      <SearchBar/>
    </nav>
  )
}

export default NavBar