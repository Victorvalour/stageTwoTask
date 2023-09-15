import React from "react";
import {useState, useEffect} from "react"
import Card from "./Card.jsx";
import { useParams } from "react-router-dom";

const APILINK = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c7b552ce1905e33d449f8146cc3c557c';


export default function Body() {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch(APILINK).then((res) => res.json()).then(data=> {
            setMovies(data.results.slice(0, 10));
        })
    }, [])
   return ( <section>
         <h2>Top Rated Movie</h2>
    <div className="movieGrid">
        {movies.map((movieData)=><Card key={movieData.id} {...movieData}/>)}
    </div>

<footer></footer>

            <div></div>
    </section>
   )
}