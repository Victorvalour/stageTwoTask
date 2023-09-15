import React from "react";
import "./sidebar.css"
import Tvlogo from "../images/tv.png"
import HomeIcon from "../images/Home.png"
import CameraIcon from "../images/Movie-Projector.png"
import TvIcon from "../images/Tv-Show.png";
import Calender from "../images/Calender.png"
import LogOut from "../images/Logout.png"


export default function Sidebar() {
    return (
        <section className="sidebar">
            <div className="head">
              
            <img src={Tvlogo} alt="TV logo" />
                <h3>MovieBox</h3>
            </div>
            <div className="nav">
                <div><img src={HomeIcon} alt="Home Icon" />
                <p>Home</p></div>
                <div><img src={CameraIcon} alt="Camera Icon" /><p>Movies</p></div>
              
                <div><img src={TvIcon} alt="TV Icon" /><p>TV Series</p></div>
                <div><img src={Calender} alt="Calender Icon" /><p>Upcoming</p></div>
            </div>
            <div className="bottom-box">
                <h4>Play movie quizes and earn free tickets</h4>
                <p>50k people are playing now</p>
                <button>Start playing</button>
            </div>
            
            <div className="log-out">
                <img src={LogOut} alt="" />
                <h4>Log out</h4>
            </div>
        </section>
    )
    
}