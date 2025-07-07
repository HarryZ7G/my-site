import React from "react";
import PlankArrow from "./plankArrow.jsx";
import Baseline from "./bauhaus/baseline.jsx";
import Bauhaus from "./bauhaus/bauhaus.jsx";
import Anchor from "./bauhaus/anchor.jsx";
import Plank from "./bauhaus/plank.jsx";
import "./experience.css";

function Experience(props) {
  return (
    <div className="experience">
      <Baseline theme={props.company} />
      <div className="bauhaus-section">
        <Bauhaus theme={props.company} rows={4}/>
        <Anchor theme={props.company} />
      </div>
      <h2>{props.title}</h2>
      <div className="platform">
        <h1>{props.company}</h1>
        <div className="plank-cluster">
          <PlankArrow />
          <Plank theme={props.company} />
        </div>
      </div>
      <h3>{props.skills}</h3>
    </div>
  );
}

export default Experience;
