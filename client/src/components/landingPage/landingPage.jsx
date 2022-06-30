import React from "react";
import { Link } from "react-router-dom";
import s from "./landingPage.module.css"

const Landingpage = () => {
    return (
        <div >
                <h1 className={s.title}>Videogames</h1>
            <div className={s.enter}>
                <Link to='/videogames' className={s.button}>Lets Play</Link>
            </div>
        </div>
    )
}

export default Landingpage;