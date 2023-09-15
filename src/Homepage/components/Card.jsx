import React from "react"
import MovieImage from "../images/MovieImage.jpg"
import IMDBlogo from "../images/IMDBlogo.png"
import TomatoIcon from "../images/TomatoIcon.png"
import Heart from    "../images/Heart.png"
import { Link } from "react-router-dom"

const IMGPATH = 'https://image.tmdb.org/t/p/w500'

const  Card =({title, poster_path, popularity, id, release_date, production_countries,  genres}) => {
   const pop = popularity.toFixed(1)
   const handleClick =() => {
    
      alert("Added to Favourites")}
return (

 
         <Link to={`/Movie/${id}`} style={{textDecoration: 'none'}} 
       >
         <div className="card" data-testid="movie-card">

<div className="favourite" onClick={handleClick}><img src={Heart} alt="" /></div>

         <img className="movieImage"src={IMGPATH+poster_path} alt="Image Poster" data-testid="movie-poster"/>

         <div className="country-date">
            <p className="country">USA
</p>
            <p data-testid="movie-release-date">{release_date
}</p>
            </div>

         <h3 className="movie-title" data-testid="movie-title">{title}</h3>

         <div className="stats"><img src={IMDBlogo} alt="IMDB Logo" /> <p>{pop}/100</p> <div><img src={TomatoIcon} alt="" /><p></p></div></div>
         <p>Action, adventure</p>
         </div>
     </Link>
     ) 
}

export default Card