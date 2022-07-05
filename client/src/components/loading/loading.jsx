import React from "react"; 
import gif2 from "../../images/gif3.gif"
import s from "./loading.module.css"

export default function Loading(props) {
    return(
    <div className={s.container}>
        <div>
            <img className={s.img} src={gif2}></img>
        </div>
        <div>
            {setTimeout(() => {
                props.setLoading(false)
            }, 5000)}
        </div>
    </div>
    )
}