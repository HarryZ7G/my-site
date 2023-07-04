import React from "react";
import "./section.css";

function Section(props) {
  return (
    <div className="section-wrapper">
      <div className="section">
        <h2>{props.name}</h2>
        <div className="plate-cutout">
          <div className="hinge" />
        </div>
      </div>
      <div className="arm" />
      <div className="base" />
    </div>
  );
}

export default Section;
