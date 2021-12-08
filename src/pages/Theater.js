//1줄 전체지점 모음 / 2줄 해당지점 대문짝 3줄 3갈래 나뉨 라우터 말고 그냥 버튼만 놓고 싱글페이지에 아이디로 스크롤 이동 기본 극장 정보 표시 상영시간표 표시, 상영시간표로 넘어갈 수 있게도 설정
// 한줄소개 시설안내 층별안내 교통 / 위치 안내 주차 안내 전화번호 안내
// 관람료랑 우대정보 안내

import "../styles/Theater.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import theaterbanner from "../theaterbanner.jpg";

const jijum = ["청량리", "압구정", "여의도", "종로", "안산"];
const siseol = [
  "대형주차장",
  "굿즈스토어",
  "남자화장실",
  "여자화장실",
  "관광시설",
  "장애인석",
  "일반상영관",
];
//반복문 왜 안되냐 ~!
//지점별 주소, 편의시설 연결 링크변경시 라우트 주소랑 편의시설 부분만 바뀌면 됨 
//지도추가?
//컴포넌트화 재사용 데이터 입력가능하게 
function Theater() {
  return (
    <div>
      <div className="jijumBanner">
        <div className="jijumBannerimg">
          <img src={theaterbanner}></img>
        </div>
        <div className="jijumList">
          <ul>
            <li>
              <Link>{jijum[0]}</Link>
            </li>
            <li>
              <Link>{jijum[1]}</Link>
            </li>
            <li>
              <Link>{jijum[2]}</Link>
            </li>
            <li>
              <Link>{jijum[3]}</Link>
            </li>
            <li>
              <Link>{jijum[4]}</Link>
            </li>
          </ul>
        </div>
        <h1 className="jijumtext">{jijum[0]}</h1>
      </div>
      <div className="jijumInfo">
        <a href="#info_1">
          <button>극장정보</button>
        </a>
        <a href="#info_2">
          <button>위치정보</button>
        </a>
        <a href="#info_3">
          <button>관람료</button>
        </a>
        <h2 id="info_1">시설안내</h2>
        <p>
          품격을 높여주는 최고급 쇼파에서 고급화된 인테리어의 안락함을
          즐겨보세요 전좌석 가죽시트, 핸드폰 충전이 가능한 '가장 진화한 컴포트관
          (COMFORT)' 보유시설
          <br />
          <br />
          가장 진화 된 입체음향, 차세대 영화관의 표준을 제시하는 MX관 (돌비
          애트모스, 마이어 사운드, 와이드 시트)
          <ul>
            <li>{siseol[0]}</li>

            <li>{siseol[1]}</li>

            <li>{siseol[2]}</li>

            <li>{siseol[3]}</li>

            <li>{siseol[4]}</li>

            <li>{siseol[5]}</li>
          </ul>
        </p>
        <h2 id="info_2">위치 및 교통 정보</h2>
        <p>서울특별시 동대문구 왕산로 214 </p>
        <h2 id="info_3">관람료</h2>
        <div class="table-wrap">
          <table class="data-table a-c">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">요일</th>
                <th scope="col">상영시간</th>
                <th scope="col">일반</th>
                <th scope="col">청소년</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="rowgroup" rowspan="3">
                  월~목
                </th>
                <td>조조 (06:00~)</td>
                <td>10,000</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>일반 (10:01~)</td>
                <td>10,000</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>심야 (24:00~)</td>
                <td>10,000</td>
                <td>10,000</td>
              </tr>
              <tr>
                <th scope="rowgroup" rowspan="3">
                  금~일
                  <br />
                  공휴일
                </th>
                <td>조조 (06:00~)</td>
                <td>10,000</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>일반 (10:01~)</td>
                <td>10,000</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>심야 (24:00~)</td>
                <td>10,000</td>
                <td>10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>요금제 </h3>
        <p>
          <ul>
            <li>
              청소년 요금 만7세~ 만18세 : 초등학생~고등학생(학생증, 교복,
              청소년증, 의료보험증, 주민등록 등/초본, 그 외 청소년 확인 가능
              서류)
            </li>
            <li>
              48개월 미만의 경우 증빙원(예 : 의료보험증, 주민등록 초/등본 등)
              지참 시에만 무료 관람 가능 우대적용
            </li>
          </ul>
        </p>
        <h3>우대사항</h3>
        <p>
          <ul>
            <li>
              국가유공자: 현장에서 국가유공자증을 소지한 본인 외 동반 1인까지
              적용
            </li>
            <li>
              장애인: 현장에서 복지카드를 소지한 장애인(중증까지 동반 1인까지
              적용 / 경증은 본인에 한함)
            </li>
            <li>경로: 만65세 이상 본인에 한함(신분증 확인)</li>
            <li>
              미취학아동 부모 동반한 만4세~ 만6세까지 본인(의료보험증, 주민등록
              초/등본 확인)
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Theater;
