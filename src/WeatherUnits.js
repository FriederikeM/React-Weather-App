import React, { useState } from "react";
import "./WeatherUnits.css";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <h2>
          <span id="current-temperature">{Math.round(props.celsius)}</span>
          <span className="units">
            {" "}
            °C |
            <a href="/" onClick={showFahrenheit}>
              {" "}
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherUnits">
        <h2>
          <span id="current-temperature">{Math.round(fahrenheit)}</span>
          <span className="units">
            <a href="/" onClick={showCelsius}>
              {" "}
              °C{" "}
            </a>
            | °F
          </span>
        </h2>
      </div>
    );
  }
}
