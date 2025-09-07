import React from "react";
import "./Circles.css";
import "../Content.css";
import Landing from "../components/v1/landing.jsx";
import Section from "../components/v1/section.jsx";
import Portrait from "../media/Portrait Colour Compressed.jpeg";
import Badge from "../components/v1/badge.jsx";
import Phone from "../components/v1/phone.jsx";
import Envelope from "../components/v1/envelope.jsx";
import Nutrition from "../components/v1/nutrition.jsx";
import Construction from "../components/v1/construction.jsx";
import Binance from "../components/v1/binance.jsx";

function Circles() {
  const [content, setContent] = React.useState(null);

  return (
    <div className="root">
      <Landing content={setContent} />
      <div className={`content ${content}`}>
        <div className="portrait">
          <div className="top-big-bar">
            <div className="top-small-bar" />
          </div>
          <div className="frame">
            <img alt="Portrait" src={Portrait} />
          </div>
          <div className="bottom-big-bar">
            <div className="bottom-small-bar" />
          </div>
        </div>
        <Section name="Experience" />
        <Binance />
        <div className="items-grid">
          <Badge />
          <Phone />
        </div>
        <Section name="Education" />
        <Envelope />
        <Section name="Bonus content" />
        <Nutrition />
        <Construction />
      </div>
    </div>
  );
}

export default Circles;
