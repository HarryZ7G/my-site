import React from "react";
import "./badge.css";
import QR from "./qr.js";
import IBM from "../media/IBM.png";
import Java from "../media/icons/Java.svg";
import Jenkins from "../media/icons/Jenkins.svg";
import Kafka from "../media/icons/Kafka.svg";
import Linux from "../media/icons/Linux.svg";
import Oracle from "../media/icons/Oracle.svg";

function Badge() {
  const [flip, setFlip] = React.useState("");
  const [backflip, setBackflip] = React.useState("");

  return (
    <div className="laminate">
      <div
        className={`badge ${flip}`}
        onClick={() => {
          if (flip === "") {
            setFlip("badge-flip");
            setBackflip("badge-backflip");
          } else {
            setFlip("");
            setBackflip("");
          }
        }}
      >
        <div className="cutout" />
        <div className="description">
          <text className="company">IBM Canada</text>
          <div className="detail">
            <text className="title">Backend Developer</text>
            <text className="duration">May 2021 - Apr 2022</text>
          </div>
        </div>
        <QR />
        <img className="ibm" src={IBM} alt="IBM" />
      </div>
      <div
        className={`badge-back ${backflip}`}
        onClick={() => {
          if (flip === "") {
            setFlip("badge-flip");
            setBackflip("badge-backflip");
          } else {
            setFlip("");
            setBackflip("");
          }
        }}
      >
        <div className="cutout" />
        <div className="strip" />
        <text className="division">InfoSphere</text>
        <text className="team">Data Replication Team</text>
        <div className="icons">
          <img src={Java} alt={Java} />
          <img src={Jenkins} alt={Jenkins} />
          <img src={Kafka} alt={Kafka} />
          <img src={Linux} alt={Linux} />
          <img src={Oracle} alt={Oracle} />
        </div>
      </div>
    </div>
  );
}

export default Badge;
