import logo from "./logo.svg";
import profileLogo from "./Profile.svg";
import "./App.css";
import img1 from "./AteamLogo.png";
import React, { useState } from "react";

//id로 위치선언 href=#으로 위치이동
function App() {
  function Button() {
    const [btncl, setBtncl] = useState(false);
    /*function changecolor() {
      console.log("마우스커서가왔다갔다 ");
      console.log(btncl);
    }*/
    return (
      <a
        onMouseOver={() => setBtncl(true)}
        onMouseOut={() => setBtncl(false)}
        style={{ borderColor: btncl ? "white" : "" }}
        className="speed-yeme"
        href="#"
      >
        <button>빠른예매</button>
      </a>
    );
  }

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
          <Button />
        </span>
      </div>
      <div className="temp"></div>

      <footer className="footer">
        <a className="scrollup" href="#top">
          TOP↑
        </a>
        <div className="footerBox">
          <img src={img1} className="footerLogo"></img>
          <div className="footerInfo">
            <div>
      
              <a>고객센터</a> 
              <a>자주묻는질문</a>
              <a>1:1문의</a>
              <a>법적고지</a>
              <a>회사소개</a>
              <a>인재채용</a> 
              <a>이용약관</a> 
              <a>개인정보처리방침</a>
            </div>
            
            
              에이팀씨어터 안내 : 고객 센터로 전화 또는 이메일 문의를 주실 경우 상담을 도와 드리도록 하겠습니다 Tel:010 - 5872 - 6303 | E-mail:ctrkjy@naver.com 
              
              현금 등 구매에 관하여 구매안전(에스크로)서비스에 가입하여 고객님의 안전한 거래를 보장하고 있습니다.
              경기도 안산시 상록구 한양대학로 55 학연산클러스터지원센터 Tel.031-400-4677 
              대표자명 김정연 · 개인정보보호책임자 김정연 · 사업자등록번호 2001-12-26 · 통신판매업신고번호 제 1004호 COPYRIGHT © AteamTheater, Inc. All rights reserved
            
          </div>
        </div>
      </footer>
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
