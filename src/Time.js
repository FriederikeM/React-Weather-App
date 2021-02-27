import React from "react";
import "./Time.css";
import axios from "axios";

export default function Time() {
  return (
    <div className="time">
      <p className="dateTime">
        Last <span className="update">updated:</span>
        <br />
        <span id="week-day">Saturday</span>,<span id="time"> 23:00</span>
        <br />
        <span id="complete-date">13/02/2021</span>
      </p>
    </div>
  );
}
