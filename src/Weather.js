import "./Weather.css";
import axios from "axios";
import React, { useState } from "react";
import FormattedDayTime from "./FormattedDayTime";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-sm">
            <h1 id="city">{weatherData.city}</h1>
            <h2>
              <span id="current-temperature">
                {Math.round(weatherData.temperature)}
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
                <FormattedDayTime date={weatherData.date} />
                <br />
                <span id="complete-date">
                  <FormattedDate date={weatherData.date} />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="Description">
              <p className="conditions">
                <span id="current-description">{weatherData.description}</span>
                <br />
                <i className="fas fa-wind"></i> wind: <span id="wind"></span>
                <span className="speedUnit">
                  {" "}
                  {Math.round(weatherData.wind)}km/h
                </span>
                <br />
                <i className="fas fa-tint"></i> humidity:{" "}
                <span id="humidity">{weatherData.humidity}</span>%
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
  } else {
    const apiKey = "c3d15673f9179ab862ad1d46b1b4c163";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <img src="https://img.icons8.com/ios/50/000000/cloud-refresh--v2.png" />
    );
  }
}
