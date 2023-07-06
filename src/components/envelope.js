import React from "react";
import "./envelope.css";
import UofT from "../media/UofT.png";

function Envelope() {
  return (
    <div className="envelope">
      <div className="outside">
        <img src={UofT} className="emblem" alt={UofT} />
        <div className="text-wrapper">
          <text className="title">{`Convocation Hall\n`}</text>
          <text className="subtitle">{`31 King's College Cir\n`}</text>
          <text className="subtitle">{`Toronto, ON, M5S 1A1`}</text>
        </div>
      </div>
      <div className="window">
        <div className="text-wrapper">
          <text className="title">{`University of Toronto - Class of 2023\n\n`}</text>
          <text className="title">{`Honours Bachelor of Science Degree\n`}</text>
          <text className="subtitle">{`Specialist Program in Computer Science\n`}</text>
          <text className="subtitle">{`Software Engineering Stream`}</text>
        </div>
      </div>
    </div>
  );
}

export default Envelope;
