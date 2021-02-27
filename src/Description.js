import React from "react";
import "./Description.css";
import axios from "axios";

export default function Description() {
  return (
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
  );
}
