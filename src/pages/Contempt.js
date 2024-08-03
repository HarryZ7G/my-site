import React from "react";
import "./Contempt.css";
import Shadow from "../components/v2/shadow";
import Experience from "../components/v2/experience";
import Arrow from "../components/v2/arrow";

function Contempt() {
  return (
    <div className="contempt">
      {/* <div className="anchor-line" /> */}
      {/* <div className="anchor" /> */}
      <div className="landing-cluster">
        <div className="cliff-cluster">
          {/* <div className="anchor-pixel" /> */}
          <div className="cliff">
            <h1>Hello</h1>
          </div>
          <div className="cliff-shadow first" />
          <div className="cliff-shadow second" />
          <div className="cliff-shadow third" />
        </div>
        <div className="book-cluster">
          <div className="book-cover">
            <h2 className="book-title">
              HARRY
              <br />
              GENG
            </h2>
            <h3 className="book-description">A brief introduction</h3>
          </div>
          <div className="book-frame first">
            <div className="bookmark" />
          </div>
          <div className="book-frame second" />
          <div className="book-frame third" />
        </div>
      </div>

      <div className="seeking-cluster">
        <Shadow custom="first-shadow" />
        <div className="main-cluster">
          <h1>Seeking</h1>
          <Shadow custom="" />
          <h2>Frontend</h2>
          <h2>Full Stack</h2>
        </div>
        <Shadow custom="third-shadow" />
      </div>

      <div className="section-v2">
        <div className="circle"></div>
        <h2 className="invert">Ex</h2>
        <h2>perience</h2>
        <Arrow />
      </div>

      <Experience
        title="TechOps Engineer"
        company="Binance"
        skills="HTML CSS JavaScript"
        theme="binance-theme"
      />
      <Experience
        title="Backend Developer"
        company="IBM"
        skills="Java Kafka SQL DB2 Oracle"
        theme="ibm-theme"
      />
      <Experience
        title="IT Director"
        company="MCG"
        skills="HTML CSS JavaScript React.js"
        theme="mcg-theme"
      />
    </div>
  );
}

export default Contempt;
