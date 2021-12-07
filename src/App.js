import logo from "./logo.svg";
import profileLogo from "./Profile.svg";
import "./App.css";
import img1 from "./AteamLogo.png";
import React, { useState } from "react";
import SpeedyemeButton from "./SpeedyemeButton.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Movie from "./Movie";
import Footer from "./Footer";

function App() {
  return (<div>App</div>);
}

export default App;
//모두 컴포넌트화 각각  라우터 이동 자연스럽게
// 풋터를 앱 밖에 놓기만 하면 어마무시하게 깨짐

//반응형으로 모바일이랑 작은창 화면 최적화 (반응형으로 모바일시 헤더 없어지고 왼쪽상단 카테고리아이콘만 )
