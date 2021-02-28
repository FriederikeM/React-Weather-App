import React from "react";
import FormattedDayTime from "./FormattedDayTime";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm">
          <h1 id="city">{props.data.city}</h1>
          <h2>
            <span id="current-temperature">
              {Math.round(props.data.temperature)}
            </span>
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
              <FormattedDayTime date={props.data.date} />
              <span id="complete-date">
                <FormattedDate date={props.data.date} />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="Description">
            <p className="conditions">
              <span id="current-description">{props.data.description}</span>
              <br />
              <i className="fas fa-wind"></i> wind: <span id="wind"></span>
              <span className="speedUnit">
                {" "}
                {Math.round(props.data.wind)}km/h
              </span>
              <br />
              <i className="fas fa-tint"></i> humidity:{" "}
              <span id="humidity">{props.data.humidity}</span>%
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
