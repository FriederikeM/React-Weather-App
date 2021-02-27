import "./App.css";
import axios from "axios";
import React from "react";
import Form from "./Form";
import City from "./City";
import Temperature from "./Temperature";
import Time from "./Time";
import Description from "./Description";
import Icon from "./Icon";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="weather-app">
            <Form />
            <div className="row">
              <div className="col-sm">
                <City />
                <Temperature />
              </div>
              <div className="col">
                <Time />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Description />
              </div>
            </div>
            <Icon />
            <Forecast />
          </div>
        </div>
        <Footer />
        <script src="src/index.js"></script>
      </body>
    </div>
  );
}
