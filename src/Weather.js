import "./Weather.css";
import axios from "axios";
import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = "c3d15673f9179ab862ad1d46b1b4c163";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="form">
          <form id="city-search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="  Search for your city"
              id="exampleInputcity1"
              aria-describedby="cityHelp"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input className="button btn-go" type="submit" value="Go" />
            <input
              className="button"
              type="submit"
              id="current-location-button"
              value="Here"
            />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <img src="https://img.icons8.com/ios/50/000000/cloud-refresh--v2.png" />
    );
  }
}
