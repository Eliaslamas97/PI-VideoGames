import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/searchBar';
import s from './navBar.module.css'

const navBar = () => {
  return (
    <nav className={s.nav}>
      <Link className={s.videogame} to='/'>Videogames App</Link>
        <Link className={s.home} to="/videogames">Home</Link>
        <Link className={s.create} to="/videogames/create">Create Videogame</Link> 
      <SearchBar/>
    </nav>
  )
}

export default navBar