import React from "react"
import MovieImage from "../images/MovieImage.jpg"
import IMDBlogo from "../images/IMDBlogo.png"
import TomatoIcon from "../images/TomatoIcon.png"

const IMGPATH = 'https://image.tmdb.org/t/p/w500'

const  Card =({title, poster_path, popularity}) => {
   const pop = popularity.toFixed(1)
return (

 
         <div className="card">
         <img className="movieImage"src={IMGPATH+poster_path} alt="" />
         <p>USA, 2016 - Current</p>
         <h3>{title}</h3>
         <div className="stats"><img src={IMDBlogo} alt="IMDB Logo" /> <p>{pop}/100</p> <div><img src={TomatoIcon} alt="" /><p></p></div></div>
         <p>Action, Adventure, Horror</p>
     </div>
     ) 
}

export default Card