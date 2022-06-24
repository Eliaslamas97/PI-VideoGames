import React, { useState } from "react";
import axios from "axios";

export default function CreateVideogames() {
    const [error, setError] = useState({ form: "complete form" });
    const [input, setInput] = useState({
        name: "",
        desciption: "",
        releaseDate: "",
        rating: 0, 
        genres: [],
        platforms: [],
    });

    const handleChange = (e) => {
        
    }
}