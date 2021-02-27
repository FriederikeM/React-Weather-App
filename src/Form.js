import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="form">
      <form id="city-search">
        <input
          type="text"
          placeholder="  Search for your city"
          id="exampleInputcity1"
          aria-describedby="cityHelp"
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
  );
}
