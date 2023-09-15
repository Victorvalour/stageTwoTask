import React from "react";
import {useState, useEffect} from "react"
import Card from "./Card.jsx";
import { useParams } from "react-router-dom";

import facebook from "../images/facebook-logo.png"
import instagram from "../images/instagram-logo.png"
import twitter from "../images/twitter-logo.png"
import youtube from "../images/youtube-logo.png"

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

<footer>
    <div className="logos">
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={twitter} alt="twitter logo" />
        <img src={youtube} alt="youtube logo" />
    </div>
    <div className="conditions">
        <p>Conditions of use</p>
        <p>Privacy & Policy</p>
        <p>Press Rooms</p>
    </div>
    <p> &copy; 2023 MovieBox by Eweh Victor E.</p>
</footer>

    
    </section>
   )
}