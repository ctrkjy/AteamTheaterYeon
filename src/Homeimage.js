import logo from "./logo.svg";
import profileLogo from "./Profile.svg";
import "./App.css";
import img1 from "./AteamLogo.png";
import React, { useState } from "react";
import SpeedyemeButton from "./SpeedyemeButton.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function Homeimage(){
    return(
        <div className="Homeimage">
      <div className="main-page">
        <div className="main-image">
          <img src={img1}></img>
        </div>
        <i className="copy">가장 몰입되는 공간, 에이팀씨어터</i>
        <span>
          <SpeedyemeButton />
        </span>
      </div>
      <div className="temp"></div>
    </div>

    );
}

export default Homeimage;
