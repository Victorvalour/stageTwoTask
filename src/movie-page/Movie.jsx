import React from "react";
import { useState, useEffect } from "react"
import Sidebar from "./Components/Sidebar-container.jsx"
import Body from "./Components/Body-container.jsx"
import "./Movie.css" 
import { useParams } from "react-router-dom";


//id:346698
export default function Movie() {

    const { movieId } = useParams()


const [movieDetails, setMovieDetails] = useState([]);

useEffect(() => {
    const APILINK = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c7b552ce1905e33d449f8146cc3c557c`

fetch(APILINK).then(res => res.json()).then(data => {
    setMovieDetails(data)

    console.log(data)
}
)
}, [])
   
    return (
        <div className="movie">
            <Sidebar />
         <Body key={movieDetails.id} 
         {...movieDetails}/>
           
        </div>
    )
    
}
