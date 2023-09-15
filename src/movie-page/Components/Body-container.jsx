import React from "react"
import "./Body.css"
import ImageGrid from "../images/image grid.png"
export default function Body(props) {
    console.log(props)
    return (
        <section className="body">
       <div className="video-container"></div>
       <div className="body-bottom">
        <div className="bottom-left">
            <div className="info">
                <h3 className="title" data-testid="movie-title">{props.title} </h3>
                <h3>{props.release_date}</h3>
                <h3>PG-13</h3>
                <h3>2h 10m</h3>

                <p className="genre">Action</p>
                <p className="genre">Drama</p>
                 </div>

                 <p>{props.overview}</p>
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