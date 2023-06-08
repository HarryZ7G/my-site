import React, { useEffect } from "react";
import "./App.css";

function App() {
  const [circle, setCircle] = React.useState(null);
  const [disable, setDisable] = React.useState(null);
  const [progress, setProgress] = React.useState(null);
  const [fill, setFill] = React.useState(null);
  // const [background, setBackground] = React.useState(null);
  const [circles, setCircles] = React.useState(["", "", "", "", "", ""]);

  useEffect(() => {
    setTimeout(() => {
      setCircle("animate-circle");
    }, 1000);
  }, []);

  return (
    <div className="root">
      <div className={`landing ${circles[0]}`}>
        <div
          className={`circle ${circle} ${disable}`}
          onClick={() => {
            setProgress("animate-progress");
            setFill("animate-fill");
            setTimeout(() => {
              setDisable("disabled");
            }, 100);
            setTimeout(() => {
              setCircles([
                "blue",
                "shadow-appear",
                "tall-shadow-appear",
                "inset-shadow-appear",
                "tall-inset-shadow-appear",
                "text-shadow",
              ]);
            }, 5000);
          }}
        />
        <div className="progress-container">
          <div className={`progress ${progress}`} />
          <div className={`fill ${fill}`} />
        </div>
        <div className={`top-outer-circle ${circles[2]}`}>
          <div className={`top-middle-circle ${circles[3]}`}>
            <div className={`top-inner-circle ${circles[3]}`}>
              <div className={`top-center-outer-circle ${circles[2]}`}>
                <div className={`top-center-middle-circle ${circles[2]}`}>
                  <div className={`top-center-inner-circle ${circles[4]}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`thick-dash ${circles[1]}`} />
        <div className={`thin-dash ${circles[2]}`} />
        <div className={`name-plate ${circles[3]}`}>
          <h1 className={`title ${circles[5]}`}>Hi, I'm Harry</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
