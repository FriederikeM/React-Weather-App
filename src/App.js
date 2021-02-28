import "./App.css";
import axios from "axios";
import React from "react";
import Form from "./Form";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="weather-app">
            <Weather defaultCity="Milan" />
            <Forecast />
          </div>
        </div>
        <Footer />
        <script src="src/index.js"></script>
      </body>
    </div>
  );
}
