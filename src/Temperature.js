import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
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
  );
}
