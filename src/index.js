import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "./Movie";
import Header from "./Header";
import Footer from "./Footer";
import Homeimage from "./Homeimage";
import Theater from "./Theater";
import Yeme from "./Yeme";
import Timetable from "./Timetable";
import Mypage from "./Mypage";
/*<Route path="/movie">
          <Movie/>
                <Route exact to="/movie" component={Movie} />
        </Route>
        
        
        <Route path="/movie">
          <Movie/>
        </Route>
        
        */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homeimage />
        </Route>
        <Route exact path="/movie">
          <Movie />
        </Route>
        <Route exact path="/yeme">
          <Yeme />
        </Route>
        <Route exact path="/theater">
          <Theater />
        </Route>
        <Route exact path="/timetable">
          <Timetable />
        </Route>
        <Route exact path="/mypage">
          <Mypage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
