import React from "react"
import "./Body.css"
import ImageGrid from "../images/image grid.png"
export default function Body(props) {
    console.log(props)
    let rating
    if (props.adult == false) {rating = "PG-13"} else {rating = "PG-18"}
    const Menuclick =() => {{style={display:"flex"}}}
    return (
        <section className="body">
           <div className="topnav">
          <div className="hamburger" onClick={Menuclick}> <div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
</div>
           </div>
       <div className="video-container"></div>
       <div className="body-bottom">
        <div className="bottom-left">
            <div className="info">
                <h3 className="title" data-testid="movie-title">{props.title} </h3>
                <h3 data-testid="movie-release-date">{props.release_date}</h3>
                <h3>{rating}</h3>
                <h3 data-testid="movie-runtime">{props.runtime}</h3> <h3>mins</h3>

                <p className="genre">Action</p>
                <p className="genre">Drama</p>
      
          
                 </div>

                 <p data-testid="movie-overview">{props.overview}</p>
                 <div className="creators">

                 <p>Director: <span className="names"> Joseph Kosinski</span></p>

                 <p>Writers: <span className="names"> Jim cash, Jack Epps Jr, Peter Craig </span></p>

                 <p>Stars: <span className="names"> Tom Cruise, Jennifer Connelly, Miles Teller </span></p>
                 </div>
                 <div className="bottom-bar">
                    <div className="top-rated">Top rated movie #65</div>
                    <div className="award">Award 9 nominations</div>
                 </div>
        </div>
        <div className="bottom-right">
            <div className="stat">8.5|350k</div>
            <button className="showtime">See Showimes</button>
            <button className="more-watch">More watch options</button>
            <img src={ImageGrid} alt="Image Grid" className="image-grid"/>
        </div>
       </div>
        </section>
    )
}