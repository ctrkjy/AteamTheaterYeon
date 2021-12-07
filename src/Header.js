import logo from "./logo.svg";
import profileLogo from "./Profile.svg";
import "./App.css";
import img1 from "./AteamLogo.png";
import React, { useState } from "react";
import SpeedyemeButton from "./SpeedyemeButton.js";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Movie from "./Movie";

function Header(){
    return(
        <header id="top" className="App-header">
          <div className="header-logo ">
            <Link to="/">
              <h1>AteamTheater</h1>
            </Link>
          </div>

          <div className="header-GNB">
            <ul>
              <li>
                <Link to="/movie">영화</Link>
              </li>
              <li>
                <Link to="/yeme">예매</Link>
              </li>
              <li>
                <Link to="/theater">극장</Link>
              </li>
              <li>
                <Link to="/timetable">상영시간표</Link>
              </li>
              <Link to="/mypage">
                <img src={profileLogo} className="profileLogo" />
              </Link>
            </ul>
          </div>
        </header>
    );
}


export default Header;