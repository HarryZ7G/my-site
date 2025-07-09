import React from "react";
import "./weather.css";

function Weather(props) {
  return (
    <div className="weather">
      <div className="cutout" />
      <div className="circle-cutout" />
      <div className="housing">
        <div className="button">
          <text className="press">Press</text>
          <div className="bar"></div>
          <text className="description">Weather</text>
        </div>
      </div>
    </div>
  );
}

export default Weather;
