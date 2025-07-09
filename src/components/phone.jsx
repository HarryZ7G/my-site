import React, { useRef, useEffect } from "react";
import "./phone.css";
import MCG from "../media/MCG.png";
// import Star from "./star";
import ConsultingDay from "../media/ConsultingDay.jpg";
import CaseComp from "../media/CaseComp.jpg";

function Phone() {
  const phoneRef = useRef(null);
  const [display, setDisplay] = React.useState(false);
  const [time, setTime] = React.useState("10:08");
  const [calendar, setCalendar] = React.useState("Monday, April 1");
  const months = [
    "Janurary",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const checkTime = () => {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let weekday = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    let hourZero = hour < 10 ? "0" : "";
    let minuteZero = minute < 10 ? "0" : "";
    setTime(`${hourZero}${hour}:${minuteZero}${minute}`);
    setCalendar(`${weekdays[weekday]}, ${months[month]} ${date}`);
  }

  useEffect(() => {
    let t = setInterval(function() {
      checkTime();
    }, 500);
    const handlePhoneScroll = () => {
      let reference = phoneRef.current;
      let rect = reference.getBoundingClientRect();
      if (rect.top < rect.height / 2) {
        setDisplay(true);
      }
    };
    window.addEventListener("scroll", handlePhoneScroll);
    return () => {
      window.removeEventListener("scroll", handlePhoneScroll);
      if (t) clearInterval(t);
    };
  });

  return (
    <div className="phone-case" ref={phoneRef}>
      {/* <div className="lockscreen">
        <h2>
          Monday, April 1
        </h2>
        <h1>
          10:08
        </h1>
        <div className="home-bar" />
      </div> */}

      <div className="bezel" />
      <div className="notch" />
      <h2>{calendar}</h2>
      <h1>{time}</h1>

      <div className={`phone ${display ? `display-on` : ``}`}>
        {/* <div className="notch" /> */}
        <div className="status">
          <text className="time">{time}</text>
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
              <div className="circles">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="empty-circle" />
              </div>
              {/* <div className="stars">
              <Star fill="star" />
              <Star fill="star" />
              <Star fill="star" />
              <Star fill="star" />
              <Star fill="none" />
            </div> */}
            </div>
            <div className="divide" />
            <div className="area">
              <div className="practice">
                <text>Experience</text>
              </div>
              <div className="value-wrapper">
                <text className="value">8</text>
              </div>
              <div className="unit">
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
              <div className="unit">
                <text>consultations</text>
              </div>
            </div>
            <div className="divide" />
          </div>
          <div className="bottom-line" />
        </div>
        <div className="ea">
          <div className="ea-wrapper">
            <text>Events and Positions</text>
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
            <text className="duration">September 2022 - May 2023</text>
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
      </div>
      <div className={`home-bar ${display ? "home-bar-unlocked" : ""}`} />
    </div>
  );
}

export default Phone;
