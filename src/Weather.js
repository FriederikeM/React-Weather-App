import "./Weather.css";
import axios from "axios";
import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-sm">
          <h1 id="city">Milan</h1>
          <h2>
            <span id="current-temperature">18</span>
            <span className="units">
              <a href="/" id="celsius" className="active">
                {" "}
                °C{" "}
              </a>
              |
              <a href="/" className="weak" id="fahrenheit">
                {" "}
                °F
              </a>
            </span>
          </h2>
        </div>
        <div className="col">
          <div className="time">
            <p className="dateTime">
              Last <span className="update">updated:</span>
              <br />
              <span id="week-day">Saturday</span>,<span id="time"> 23:00</span>
              <br />
              <span id="complete-date">13/02/2021</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="Description">
            <p className="conditions">
              <span id="current-description">Partly cloudy</span>
              <br />
              wind: <span id="wind"></span>
              <span className="speedUnit"> 3km/h</span>
              <br />
              humidity: <span id="humidity">3</span>%
            </p>
          </div>
        </div>
      </div>
      <div className="icon">
        <i className="fas fa-cloud" id="main-icon"></i>
        <hr />
      </div>
    </div>
  );
}
