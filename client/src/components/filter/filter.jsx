import React, { useEffect } from "react" 
import { useDispatch, useSelector } from "react-redux"
import { sortAlphabet, sortRating, filterGenres, getGenres, DB, API, ALL, filterOrigin } from "../../redux/actions/actions"
import s from "./filter.module.css"


const ASCENDANT = 'ascendant';
const DESCENDANT = 'descendant';
const A_Z = 'A-Z';
const Z_A = 'Z-A';
const db = 'DB';
const api = 'API';
const all = 'ALL';

export default function Filters () {
    const dispatch = useDispatch();
    const allGenres = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])
   
    function onSelectSortChange(e) {
        e.preventDefault();
        if(e.target.name === 'rating' && e.target.value !== 'Rating') {
            dispatch(sortRating(e.target.value))
        }
        if(e.target.name === 'alphabet' && e.target.value !== 'Alphabet') {
            dispatch(sortAlphabet(e.target.value))
        }
    }

    function onSelectFilterChange(e) {
        e.preventDefault();
        if(e.target.name === 'name' && e.target.value !== 'Name') {
            dispatch(filterOrigin(e.target.value))
        }
        if(e.target.name === 'genres' && e.target.value !== 'Genres') {
            dispatch(filterGenres(e.target.value))
        }
    }

    return (
        <div className={s.filterContainer}>
            <div className={s.containerForms}>
                <div className={s.containerOrderSelect}>
                    <label>Sort</label>
                    <select name="alphabet" onChange={onSelectSortChange}>
                        <option>Alphabet</option>
                        <option value={A_Z}>A-Z</option>
                        <option value={Z_A}>Z-A</option>
                    </select>
                    <select name="rating" onChange={onSelectSortChange}>
                        <option>Rating</option>
                        <option value={ASCENDANT}>Ascendant</option>
                        <option value={DESCENDANT}>Descendant</option>
                    </select>
                </div>
                <div className={s.containerFilterSelect}>
                    <label>Filter</label>
                    <select name="name" onChange={onSelectFilterChange}>
                        <option value={all}>All Games</option>
                        <option value={db}>Created by User</option>
                        <option value={api}>From Library</option>
                    </select>
                    <select name="genres" onChange={onSelectFilterChange}>
                        <option hidden>Genres</option>
                        {
                            allGenres?.map(c => {
                                return(
                                    <option key={c.name} value={c.name}>{c.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    )

}