import React from "react";
import Landing from "./components/landing.js";
import Section from "./components/section.js";
import Construction from "./components/construction.js";
import Portrait from "./media/Portrait Colour.jpeg";
import "./App.css";
import "./Content.css";

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
        <Section name="experience"/>
        <Construction />
      </div>
    </div>
  );
}

export default App;
