import React from "react";
import "./Contempt.css";
// import Shadow from "../components/v2/shadow";
import Experience from "../components/v2/experience";
import Sectionv2 from "../components/v2/sectionv2";
import University from "../components/v2/bauhaus/university";
import Landing from "../components/v2/landing";

function Contempt() {
  return (
    <div className="contempt">
      {/* <div className="anchor-line" /> */}
      {/* <div className="anchor" /> */}
      <Landing />

      {/* <div className="seeking-cluster">
        <Shadow custom="first-shadow" />
        <div className="main-cluster">
          <h1>Seeking</h1>
          <Shadow custom="second-shadow" />
          <h2>Frontend</h2>
          <h2>Full Stack</h2>
        </div>
        <Shadow custom="third-shadow" />
      </div> */}

      <Sectionv2 title="Experience" />

      <Experience
        title="Feature Analyst"
        company="Google"
        skills="JavaScript Python SQL"
      />
      <Experience
        title="TechOps Engineer"
        company="Binance"
        skills="HTML CSS JavaScript"
      />
      <Experience
        title="Backend Developer"
        company="IBM"
        skills="Java Kafka SQL DB2 Oracle"
      />
      <Experience
        title="IT Director"
        company="MCG"
        skills="HTML CSS JavaScript React.js"
      />

      <Sectionv2 title="Education" />

      <University />
    </div>
  );
}

export default Contempt;
