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
          <h1 className="timeTableBannerText">상영시간표</h1>
        </div>
        <div className="TTcontents">
          <div className="inner-wrap">
            <div className="time-table-page">
              <div className="movie-choice-area">
                <div className="tab-left-area">
                  <ul>
                    <li>
                      <img src={theaterico}></img>
                    </li>
                    <li>
                      <span>극장별</span>
                    </li>
                  </ul>
                </div>

                <div className="ltab-layer-wrap">
                  <div id="masterBrch" className="ltab-layer-cont on">
                    <a href="" className="ir">
                      {" "}
                    </a>
                    <div className="wrap tab-area"></div>
                    <div className="list-section">
                      <div className="tab-right-area">
                        <ul className="list">
                          <li>
                            <button>{jijum[0]}</button>
                          </li>
                          <li>
                            <button>{jijum[1]}</button>
                          </li>
                          <li>
                            <button>{jijum[2]}</button>
                          </li>
                          <li>
                            <button>{jijum[3]}</button>
                          </li>
                          <li>
                            <button>{jijum[4]}</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="TT-title">
              <span>{jijum[0]}</span> 상영시간표
            </h2>
            <div className="date-bar">
              <div className="wrap">
                {" "}
                <div className="date-list">
                  <div className="year-area">
                    {" "}
                    <div className="year">2021.12</div>
                    <div className="year"></div>
                  </div>{" "}
                  <div className="date-area">
                    <div className="wrap">
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.09"
                        month="11"
                      >
                        <em>9</em>
                        <br />
                        <span className="day-kr">목</span>
                        <br />
                        <span className="day-en">Thu</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.10"
                        month="11"
                      >
                        <em>10</em>
                        <br />
                        <span className="day-kr">금</span>
                        <br />
                        <span className="day-en">Fri</span>
                      </button>
                      <button
                        className="sat"
                        type="button"
                        date-data="2021.12.11"
                        month="11"
                      >
                        <em>11</em>
                        <br />
                        <span className="day-kr">토</span>
                        <br />
                        <span className="day-en">Sat</span>
                      </button>
                      <button
                        className="holi"
                        type="button"
                        date-data="2021.12.12"
                        month="11"
                      >
                        <em>12</em>
                        <br />
                        <span className="day-kr">일</span>
                        <br />
                        <span className="day-en">Sun</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.13"
                        month="11"
                      >
                        <em>13</em>
                        <br />
                        <span className="day-kr">월</span>
                        <br />
                        <span className="day-en">Mon</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.14"
                        month="11"
                      >
                        <em>14</em>
                        <br />
                        <span className="day-kr">화</span>
                        <br />
                        <span className="day-en">Tue</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.15"
                        month="11"
                      >
                        <em>15</em>
                        <br />
                        <span className="day-kr">수</span>
                        <br />
                        <span className="day-en">Wed</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.16"
                        month="11"
                      >
                        <em>16</em>
                        <br />
                        <span className="day-kr">목</span>
                        <br />
                        <span className="day-en">Thu</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.17"
                        month="11"
                      >
                        <em>17</em>
                        <br />
                        <span className="day-kr">금</span>
                        <br />
                        <span className="day-en">Fri</span>
                      </button>
                      <button
                        className="sat"
                        type="button"
                        date-data="2021.12.18"
                        month="11"
                      >
                        <em>18</em>
                        <br />
                        <span className="day-kr">토</span>
                        <br />
                        <span className="day-en">Sat</span>
                      </button>
                      <button
                        className="holi"
                        type="button"
                        date-data="2021.12.19"
                        month="11"
                      >
                        <em>19</em>
                        <br />
                        <span className="day-kr">일</span>
                        <br />
                        <span className="day-en">Sun</span>
                      </button>
                      <button
                        className=""
                        type="button"
                        date-data="2021.12.20"
                        month="11"
                      >
                        <em>20</em>
                        <br />
                        <span className="day-kr">월</span>
                        <br />
                        <span className="day-en">Mon</span>
                      </button>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="reserve theater-list-box">
              {" "}
              <div className="theater-list">
                <div className="theater-tit">
                  {" "}
                  <p className="real-tit">
                      돈 룩 업
                  </p>
                  <p className="infomation">
                    /상영시간 139분
                  </p>
                </div>
                <div className="theater-type-box">
                  <div className="theater-type">
                    {" "}
                    <p className="theater-name">1관</p>
                    <p className="chair">총 232석</p>
                  </div>{" "}
                  <div className="theater-time">
                    <div className="theater-type-area"></div>{" "}
                    <div className="theater-time-box">
                      <table className="time-list-table">
                        {" "}
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
                <br/>
                <div className="theater-type-box">
                  <div className="theater-type">
                    <p className="theater-name">7관</p>
                    <p className="chair">총 104석</p>{" "}
                  </div>
                  <div className="theater-time">
                    <div className="theater-type-area"></div>
                    <div className="theater-time-box">
                      <table className="time-list-table">
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
                  <p className="real-tit">
                      유체이탈자
                  </p>{" "}
                  <p className="infomation">/상영시간 108분
                  </p>
                </div>
                <div className="theater-type-box">
                  <div className="theater-type">
                    <p className="theater-name">6관</p>
                    <p className="chair">총 103석</p>{" "}
                  </div>
                  <div className="theater-time">
                    <div className="theater-type-area"></div>
                    <div className="theater-time-box">
                      {" "}
                      <table className="time-list-table">
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
                  <p className="real-tit" >
                      연애 빠진 로맨스
                  </p>
                  <p className="infomation">/상영시간 95분
                  </p>
                </div>
                <div className="theater-type-box">
                  <div className="theater-type">
                    <p className="theater-name">4관</p>
                    <p className="chair">총 103석</p>
                  </div>{" "}
                  <div className="theater-time">
                    <div className="theater-type-area"></div>
                    <div className="theater-time-box">
                      <table className="time-list-table">
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
