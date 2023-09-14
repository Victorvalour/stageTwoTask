import React from "react"
import "./Body.css"

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

                <h3 className="genre">Action</h3>
                <h3 className="genre">Drama</h3>
                 </div>

                 <p>{props.overview}</p>

                 <p>Director: Joseph Kosinski</p>

                 <p>Writers: Jim cash, Jack Epps Jr, Peter Craig</p>

                 <p>Stars: Tom Cruise, Jennifer Connelly, Miles Teller</p>

                 <div>
                    <div>Top rated movie #65</div>
                    <div>Award 9 nominations</div>
                 </div>
        </div>
        <div className="bottom-right">
            <div className="stat"></div>
            <button>See Showimes</button>
            <button>More watch options</button>

        </div>
       </div>
        </section>
    )
}