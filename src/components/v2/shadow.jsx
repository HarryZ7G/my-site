import React from "react";
import "./shadow.css";

function Shadow(props) {
  return (
    <div className={`diffuse-shadow ${props.custom}`}>
      <div className="shadow-blur-test"/>
      <div className="shadow-cluster">
        <div className="shadow-block" />
        <div className="shadow-block x-flip" />
      </div>
    </div>
  );
}

export default Shadow;
