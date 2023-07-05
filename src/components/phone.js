import React from "react";
import "./phone.css";
import MCG from "../media/MCG.png";
import Star from "./star";
import ConsultingDay from "../media/ConsultingDay.jpg";
import CaseComp from "../media/CaseComp.jpg";

function iPhone() {
  return (
    <div className="phone">
      <div className="notch" />
      <div className="status">
        <text className="time">10:08</text>
        <text className="sos">SOS Only</text>
      </div>

      <div className="header">
        <div className="icon">
          <img src={MCG} alt="mcg" />
        </div>
        <div className="title">
          <text className="name">
            {`UTSC - Management \n Consulting Group\n`}
          </text>
          <text className="description">Making meaningful impact</text>
          <a
            href="https://www.utscmcg.com/"
            target="_blank"
            rel="noreferrer"
            className="open"
          >
            OPEN
          </a>
        </div>
      </div>

      <div className="rating">
        <div className="top-line" />
        <div className="ratings">
          <div className="area">
            <div className="practice">
              <text>Practice Areas</text>
            </div>
            <div className="value-wrapper">
              <text className="value">4.0</text>
            </div>
            <div className="stars">
              <Star fill="star" />
              <Star fill="star" />
              <Star fill="star" />
              <Star fill="star" />
              <Star fill="none" />
            </div>
          </div>
          <div className="divide" />
          <div className="area">
            <div className="practice">
              <text>Experience</text>
            </div>
            <div className="value-wrapper">
              <text className="value">8</text>
            </div>
            <div className="stars">
              <text>years</text>
            </div>
          </div>
          <div className="divide" />
          <div className="area">
            <div className="practice">
              <text>Annual Clients</text>
            </div>
            <div className="value-wrapper">
              <text className="value">6</text>
            </div>
            <div className="stars">
              <text>consultations</text>
            </div>
          </div>
          <div className="divide" />
        </div>
        <div className="bottom-line" />
      </div>
      <div className="ea">
        <div className="ea-wrapper">
          <text>Event and Positions</text>
        </div>
        <text className="ea-time">Since July 2021</text>
        <div className="event">
          <div className="image-wrapper">
            <img src={ConsultingDay} alt="consulting day" />
            <div className="text-box">
              <text className="event-title">{`Consulting Day\n`}</text>
              <text className="event-description">
                Connect with industry professionals
              </text>
            </div>
          </div>
          <text className="title">{`IT Director\n`}</text>
          <text className="duration">Septemper 2022 - May 2023</text>
        </div>
        <div className="event">
          <div className="image-wrapper">
            <img src={CaseComp} alt="buddy program" />
            <div className="text-box">
              <text className="event-title">{`Buddy Program\n`}</text>
              <text className="event-description">
                Practice presentation skills with a partner
              </text>
            </div>
          </div>
          <text className="title">
            {`IT & Data Analytics Senior Partner\n`}
          </text>
          <text className="duration">July 2021 - August 2022</text>
        </div>
      </div>
      <div className="home-bar" />
    </div>
  );
}

export default iPhone;
