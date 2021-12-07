import logo from "./logo.svg";
import profileLogo from "./Profile.svg";
import "./App.css";
import img1 from "./AteamLogo.png";
import React, { useState } from "react";
import SpeedyemeButton from "./SpeedyemeButton.js";
import Footer from "./Footer";
//id로 위치선언 href=#으로 위치이동
function App() {
  return (
    <div className="App">
      <header id="top" className="App-header">
        <div className="header-logo ">
          <a href="#">
            <h1>AteamTheater</h1>
          </a>
        </div>

        <div className="header-GNB">
          <ul>
            <li>
              <a href="#">영화</a>
            </li>
            <li>
              <a href="#">예매</a>
            </li>
            <li>
              <a href="#">극장</a>
            </li>
            <li>
              <a href="#">상영시간표</a>
            </li>
            <a href="#">
              <img src={profileLogo} className="profileLogo" />
            </a>
          </ul>
        </div>
      </header>

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
      <Footer/>

      
    </div>
  );
}

export default App;
//테일윈드 css 공부
//footer 정보 달기
//마이페이지 헤더 우측 상단
//왼쪽 상단에 카테고리 아이콘
//페이지 나누기 페이지 이동 만들기
//로그인 페이지 연결 받기 ..
//로그인페이지 마이페이지 만들기
//백이랑 연결, 로그인 연결 깃허브랑 잘 연결되게 자유롭게

// 빠른예매에 href는 결국 예매로 연결
//반응형으로 모바일이랑 작은창 화면 최적화 (반응형으로 모바일시 헤더 없어지고 왼쪽상단 카테고리아이콘만 )
//애니메이션 (마우스가 닿았을때 동동거리기 또는 색 진하게 등등 )달기
//박스오피스 밑에 달아주기
//검색기능?

//각 박스들 클래스 화 해서 따로 따로 저장
//<img src={logo} className="App-logo" alt="logo" />
/*
<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/
