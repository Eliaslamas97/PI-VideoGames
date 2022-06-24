import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/searchBar';
//import SearchBar from '../searchBar/searchBar';

const navBar = () => {
  return (
    <nav>
      <Link to='/'>Videogames App</Link>
      <ul>
        <li><Link to="/videogames">Home</Link></li>
        <li><Link to="/videogames/create">Create Videogame</Link></li>
      </ul>
      <SearchBar/>
    </nav>
  )
}

export default navBar