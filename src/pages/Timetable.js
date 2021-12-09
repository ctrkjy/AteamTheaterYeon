import "../App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import banner from "../TimeTable.png";
import "../styles/TimeTable.css";
import "../styles/styles.css";
import theaterico from "../ico-tab-theater.png";


const jijum = ["청량리", "압구정", "여의도", "종로", "안산"];

function Timetable() {
  return (
    <div>
      <div>
      <div className="timeTableBanner">
        <div className="timeTableBannerimg">
          <img src={banner}></img>
        </div>
        <h1 className="timeTableBannerText" >
          상영시간표
        </h1>
      </div>
      <div className="TTcontents">
        <div className="inner-wrap">
          <div className="time-table-page">
            <div className="movie-choice-area">
              <div className="tab-left-area">
                <img src={theaterico}></img>
                극장별
              </div>

              <div className="ltab-layer-wrap">
                <div id="masterBrch" className="ltab-layer-cont on">
                  <a href="" className="ir">
                    {" "}
                  </a>
                  <div className="wrap tab-area">
                    </div>
                    <div className="list-section">
                            <div
                              id="mCSB_4_container"
                              className="tab-right-area"
                              dir="ltr"
                            >
                              <ul className="list">
                                <li>
                                  <button
                                    type="button"
                                    className="btn on"
                                    data-area-cd="10"
                                    data-brch-no="1372"
                                  >
                                    {jijum[0]}
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="btn"
                                    data-area-cd="10"
                                    data-brch-no="0023"
                                  >
                                   {jijum[1]}
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="btn"
                                    data-area-cd="10"
                                    data-brch-no="1581"
                                  >
                                    {jijum[2]}
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="btn"
                                    data-area-cd="10"
                                    data-brch-no="1331"
                                  >
                                    {jijum[3]}
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    className="btn"
                                    data-area-cd="10"
                                    data-brch-no="1202"
                                  >
                                    {jijum[4]}
                                  </button>
                                </li>
                              </ul>
                          
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <h3 className="tit mt60">
              <span className="font-green">강남</span> 상영시간표
            </h3>
            <div className="time-schedule mb30">
              {" "}
              <div className="wrap">
                {" "}
                <button
                  type="button"
                  title="이전 날짜 보기"
                  className="btn-pre"
                  disabled="true"
                >
                  <i className="iconset ico-cld-pre"></i>
                  <em>이전</em>
                </button>{" "}
                <div className="date-list">
                  <div className="year-area">
                    {" "}
                    <div className="year">2021.12</div>
                    <div className="year"></div>
                  </div>{" "}
                  <div className="date-area">
                    <div className="wrap">
                      <button
                        className="disabled"
                        type="button"
                        date-data="2021.12.07"
                        month="11"
                        tabindex="-1"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          7<span className="ir">일</span>
                        </em>
                        <span className="day-kr">화</span>
                        <span className="day-en">Tue</span>
                      </button>
                      <button
                        className="on"
                        type="button"
                        date-data="2021.12.08"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          8<span className="ir">일</span>
                        </em>
                        <span className="day-kr">오늘</span>
                        <span className="day-en">Wed</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.09"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          9<span className="ir">일</span>
                        </em>
                        <span className="day-kr">내일</span>
                        <span className="day-en">Thu</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.10"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          10
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">금</span>
                        <span className="day-en">Fri</span>
                      </button>
                      <button
                        className="sat"
                        type="button"
                        date-data="2021.12.11"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          11
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">토</span>
                        <span className="day-en">Sat</span>
                      </button>

                      <button
                        className="holi"
                        type="button"
                        date-data="2021.12.12"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          12
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">일</span>
                        <span className="day-en">Sun</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.13"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          13
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">월</span>
                        <span className="day-en">Mon</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.14"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          14
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">화</span>
                        <span className="day-en">Tue</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.15"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          15
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">수</span>
                        <span className="day-en">Wed</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.16"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          16
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">목</span>
                        <span className="day-en">Thu</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.17"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          17
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">금</span>
                        <span className="day-en">Fri</span>
                      </button>
                      <button
                        className="sat"
                        type="button"
                        date-data="2021.12.18"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          18
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">토</span>
                        <span className="day-en">Sat</span>
                      </button>
                      <button
                        className="holi"
                        type="button"
                        date-data="2021.12.19"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          19
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">일</span>
                        <span className="day-en">Sun</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.20"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          20
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">월</span>
                        <span className="day-en">Mon</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.21"
                        month="11"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          21
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">화</span>
                        <span className="day-en">Tue</span>
                      </button>
                      <button
                        className="disabled"
                        type="button"
                        date-data="2021.12.22"
                        month="11"
                        tabindex="-1"
                      >
                        <span className="ir">2021년 12월</span>
                        <em>
                          22
                          <span className="ir">일</span>
                        </em>
                        <span className="day-kr">수</span>
                        <span className="day-en">Wed</span>
                      </button>
                    </div>
                  </div>{" "}
                </div>{" "}
                <button
                  type="button"
                  title="다음 날짜 보기"
                  className="btn-next"
                  disabled="true"
                >
                  {" "}
                  <i className="iconset ico-cld-next"></i> <em>다음</em>{" "}
                </button>{" "}
                <div className="bg-line">
                  <button
                    type="button"
                    className="btn-calendar-large"
                    title="달력보기"
                  >
                    {" "}
                    달력보기
                  </button>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="reserve theater-list-box">
              {" "}
              <div className="tab-block tab-layer mb30">
                <ul>
                  <li>
                    <a href="" className="btn" data-area-cd="30" title="경기 선택">
                      경기
                    </a>
                  </li>
                </ul>
              </div>
              <div className="theater-list">
                <div className="theater-tit">
                  {" "}
                  <p className="movie-grade age-15"></p>
                  <p>
                    <a
                      href="/movie-detail?rpstMovieNo=21086300"
                      title="돈 룩 업 상세보기"
                    >
                      돈 룩 업
                    </a>
                  </p>
                  <p className="infomation">
                    <span>상영중</span>/상영시간 139분
                  </p>
                </div>
                <div className="theater-type-box">
                  <div className="theater-type">
                    {" "}
                    <p className="theater-name">1관[백신패스관]</p>
                    <p className="chair">총 232석</p>
                  </div>{" "}
                  <div className="theater-time">
                    <div className="theater-type-area">2D(자막)</div>{" "}
                    <div className="theater-time-box">
                      <table className="time-list-table">
                        {" "}
                        <caption>상영시간을 보여주는 표 입니다.</caption>{" "}
                        <colgroup>
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>{" "}
                        <tbody>
                          <tr>
                            <td
                              className=""
                              brch-no="1372"
                              play-schdl-no="2112081372048"
                              rpst-movie-no="21086300"
                              theab-no="01"
                              play-de="20211208"
                              play-seq="6"
                            >
                              {" "}
                              <div className="td-ab">
                                <div className="txt-center">
                                  <a href="" title="영화예매하기">
                                    <div className="ico-box">
                                      <i className="iconset ico-off"></i>
                                    </div>
                                    <p className="time">22:20</p>{" "}
                                    <p className="chair">155석</p>
                                    <div className="play-time">
                                      <p>22:20~24:49</p>
                                      <p>6회차</p>{" "}
                                    </div>{" "}
                                  </a>
                                </div>{" "}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>{" "}
                    </div>
                  </div>
                </div>
                <div className="theater-type-box">
                  <div className="theater-type">
                    <p className="theater-name">7관[백신패스관]</p>
                    <p className="chair">총 104석</p>{" "}
                  </div>
                  <div className="theater-time">
                    <div className="theater-type-area">2D(자막)</div>
                    <div className="theater-time-box">
                      <table className="time-list-table">
                        <caption>상영시간을 보여주는 표 입니다.</caption>
                        <colgroup>
                          {" "}
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col /> <col />
                          <col />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td
                              className=""
                              brch-no="1372"
                              play-schdl-no="2112081372003"
                              rpst-movie-no="21086300"
                              theab-no="07"
                              play-de="20211208"
                              play-seq="2"
                            >
                              <div className="td-ab">
                                <div className="txt-center">
                                  <a href="" title="영화예매하기">
                                    {" "}
                                    <div className="ico-box">
                                      <i className="iconset ico-off"></i>
                                    </div>{" "}
                                    <p className="time">20:15</p>{" "}
                                    <p className="chair">65석</p>{" "}
                                    <div className="play-time">
                                      {" "}
                                      <p>20:15~22:44</p> <p>2회차</p>
                                    </div>{" "}
                                  </a>
                                </div>{" "}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theater-list">
                <div className="theater-tit">
                  {" "}
                  <p className="movie-grade age-15"></p>
                  <p>
                    <a
                      href="/movie-detail?rpstMovieNo=21075100"
                      title="유체이탈자 상세보기"
                    >
                      유체이탈자
                    </a>
                  </p>{" "}
                  <p className="infomation">
                    <span>상영중</span>/상영시간 108분
                  </p>
                </div>
                <div className="theater-type-box">
                  <div className="theater-type">
                    <p className="theater-name">6관[백신패스관]</p>
                    <p className="chair">총 103석</p>{" "}
                  </div>
                  <div className="theater-time">
                    <div className="theater-type-area">2D</div>
                    <div className="theater-time-box">
                      {" "}
                      <table className="time-list-table">
                        <caption>상영시간을 보여주는 표 입니다.</caption>
                        <colgroup>
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>{" "}
                        <tbody>
                          <tr>
                            <td
                              className=""
                              brch-no="1372"
                              play-schdl-no="2112081372005"
                              rpst-movie-no="21075100"
                              theab-no="06"
                              play-de="20211208"
                              play-seq="6"
                            >
                              <div className="td-ab">
                                <div className="txt-center">
                                  <a href="" title="영화예매하기">
                                    <div className="ico-box">
                                      <i className="iconset ico-off"></i>
                                    </div>
                                    <p className="time">20:15</p>
                                    <p className="chair">65석</p>
                                    <div className="play-time">
                                      <p>20:15~22:13</p>
                                      <p>6회차</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td
                              className=""
                              brch-no="1372"
                              play-schdl-no="2112081372004"
                              rpst-movie-no="21075100"
                              theab-no="06"
                              play-de="20211208"
                              play-seq="7"
                            >
                              <div className="td-ab">
                                <div className="txt-center">
                                  <a href="" title="영화예매하기">
                                    <div className="ico-box">
                                      <i className="iconset ico-off"></i>
                                    </div>
                                    <p className="time">22:30</p>
                                    <p className="chair">65석</p>
                                    <div className="play-time">
                                      <p>22:30~24:28</p>
                                      <p>7회차</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theater-list">
                <div className="theater-tit">
                  {" "}
                  <p className="movie-grade age-15"></p>
                  <p>
                    <a
                      href="/movie-detail?rpstMovieNo=21074900"
                      title="연애 빠진 로맨스 상세보기"
                    >
                      연애 빠진 로맨스
                    </a>
                  </p>
                  <p className="infomation">
                    <span>상영중</span>/상영시간 95분
                  </p>
                </div>
                <div className="theater-type-box">
                  <div className="theater-type">
                    <p className="theater-name">4관[백신패스관]</p>
                    <p className="chair">총 103석</p>
                  </div>{" "}
                  <div className="theater-time">
                    <div className="theater-type-area">2D</div>
                    <div className="theater-time-box">
                      <table className="time-list-table">
                        <caption>상영시간을 보여주는 표 입니다.</caption>
                        <colgroup>
                          <col />

                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                          <col />
                        </colgroup>{" "}
                        <tbody>
                          <tr>
                            <td
                              className=""
                              brch-no="1372"
                              play-schdl-no="2112081372016"
                              rpst-movie-no="21074900"
                              theab-no="04"
                              play-de="20211208"
                              play-seq="6"
                            >
                              <div className="td-ab">
                                <div className="txt-center">
                                  {" "}
                                  <a href="" title="영화예매하기">
                                    <div className="ico-box">
                                      <i className="iconset ico-off"></i>
                                    </div>{" "}
                                    <p className="time">20:35</p>
                                    <p className="chair">63석</p>
                                    <div className="play-time">
                                      <p>20:35~22:20</p>
                                      <p>6회차</p>
                                    </div>
                                  </a>
                                </div>{" "}
                              </div>
                            </td>
                            <td
                              className=""
                              brch-no="1372"
                              play-schdl-no="2112081372017"
                              rpst-movie-no="21074900"
                              theab-no="04"
                              play-de="20211208"
                              play-seq="7"
                            >
                              <div className="td-ab">
                                {" "}
                                <div className="txt-center">
                                  <a href="" title="영화예매하기">
                                    <div className="ico-box">
                                      <i className="iconset ico-off"></i>
                                    </div>
                                    <p className="time">22:40</p>
                                    <p className="chair">68석</p>
                                    <div className="play-time">
                                      <p>22:40~24:25</p>
                                      <p>7회차</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="warningInfo">
              <ul>
              <li>
                지연입장에 의한 관람불편을 최소화하고자 본 영화는 약 10분 후
                시작됩니다.
              </li>
              <li>
                쾌적한 관람 환경을 위해 상영시간 이전에 입장 부탁드립니다.
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timetable;
