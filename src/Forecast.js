import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row weather-forecast" id="forecast"></div>
    </div>
  );
}
