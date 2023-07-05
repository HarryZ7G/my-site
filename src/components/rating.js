import React from "react";
import "./rating.css";

function Rating(props) {
  return (
    <div className="area">
      <div className="practice">
        <text>{props.top}</text>
      </div>
      <div className="value-wrapper">
        <text className="value">{props.middle}</text>
      </div>
      <div className="stars">
        {props.bottom}
      </div>
    </div>
  )
}

export default Rating;