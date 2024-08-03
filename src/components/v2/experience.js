import React from "react";
import PlankArrow from "./plankArrow.js";
import "./experience.css";

function Experience(props) {
  return (
    <div className="experience">
      <div className="top-bar">
        <div className="black" />
        <div className={`colour ${props.theme}`} />
      </div>
      <div className="bauhaus-section">
        <div className={`bauhaus ${props.theme}`}></div>
        <div className="anchor-points">
          <div className="anchor-row">
            <div className={`anchor-dot ${props.theme}`}></div>
            <div className={`anchor-dot ${props.theme}`}></div>
          </div>
          <div className="anchor-row">
            <div className={`anchor-dot ${props.theme}`}></div>
            <div className={`anchor-dot ${props.theme}`}></div>
          </div>
        </div>
      </div>
      <h2>{props.title}</h2>
      <div className="platform">
        <h1>{props.company}</h1>
        <div className="plank-cluster">
          <PlankArrow />
          <div className={`plank ${props.theme}`} />
        </div>
      </div>
      <h3>{props.skills}</h3>
    </div>
  );
}

export default Experience;
