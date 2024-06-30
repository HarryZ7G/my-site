import React from "react";
import "./App.css";
import "./Content.css";
import Landing from "./components/landing.js";
import Section from "./components/section.js";
import Portrait from "./media/Portrait Colour Compressed.jpeg";
import Badge from "./components/badge.js";
import Phone from "./components/phone.js";
import Envelope from "./components/envelope";
import Nutrition from "./components/nutrition";
import Construction from "./components/construction.js";
import Binance from "./components/binance.js";

function App() {
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

export default App;
