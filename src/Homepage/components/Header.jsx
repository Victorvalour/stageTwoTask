import React from "react";
import ReactDOM from "react-dom";
import Tvlogo from "../images/tv.png"
import Menu from "../images/Menu.png"
import IMDBlogo from "../images/IMDBlogo.png"
import TomatoIcon from "../images/TomatoIcon.png"


export default function Header() {
   return ( <div className="header-container">
      <nav className="home-nav">
         <div className="name"><img src={Tvlogo} alt="" /> <h3>MovieBox</h3></div>
         <div><input type="text" placeholder="Search..."/></div>
         <div className="menu"><h3>Sign In</h3><img src={Menu} alt="" /></div>
      </nav>
      <div>
         <div className="description">
       <h3>John Wick 3: <br /> Parabellum</h3>
       <div className="stats"><img src={IMDBlogo} alt="IMDB Logo" className="imdm"/> <p>86.6/100</p> <div className="tomato"><img src={TomatoIcon} alt="" /><p>97%</p></div></div>
       <p>John Wick is on the run after killing a member of the international assasins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
       <button><i class="fa fa-play-circle" style={{color:"white"}}></i>   Watch trailer</button>
         </div>
      </div>
    </div>
   )
}
