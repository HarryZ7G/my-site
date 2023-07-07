import React, { useEffect } from "react";
import Exclaim from "./exclaim.js";
import "./landing.css";

function Landing(props) {
  const [circle, setCircle] = React.useState(null);
  const [disable, setDisable] = React.useState(null);
  const [cover, setCover] = React.useState(null);
  const [wave, setWave] = React.useState(null);
  const [clicked, setClicked] = React.useState(null);
  const [push, setPush] = React.useState(null);
  const [outline, setOutline] = React.useState(null);
  const [pop, setPop] = React.useState(null);
  const [plop, setPlop] = React.useState(null);
  const [flop, setFlop] = React.useState(null);
  const [bass, setBass] = React.useState(null);
  const [hello, setHello] = React.useState(null);
  const [circles, setCircles] = React.useState(["", "", "", "", "", ""]);
  const [scroll, setScroll] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCircle("animate-circle");
      setPush("animate-push");
    }, 500);
  }, []);

  return (
    <div className={`landing ${scroll} ${circles[0]}`}>
      <div className={`cover ${cover}`} />
      <div className={`wave ${wave}`} />
      <div
        className={`circle ${circle} ${disable}`}
        onClick={() => {
          setDisable("disabled");
          setClicked("click-animate");
          setCover("cover-animate");
          setWave("wave-animate");
          setTimeout(() => {
            setPop("hidden");
            setOutline("fade-out");
          }, 1300);
          setTimeout(() => {
            setCircles([
              "",
              "shadow-appear",
              "tall-shadow-appear",
              "inset-shadow-appear",
              "tall-inset-shadow-appear",
              "text-shadow",
            ]);
            setPlop("plop-animate");
            setFlop("flop-animate");
            setBass("bass-animate");
            setHello("hello-animate");
            props.content("display-content");
            let remind = setInterval(() => {
              if (window.scrollY !== 0) {
                setScroll(null);
                clearInterval(remind);
              }
            }, 5000);
            setScroll("scroll-remind");
          }, 1900);
        }}
      >
        <text className={`push ${push}`}>Push</text>
        <div className={`visual-cue ${clicked}`}>
          <text className="happy">Click</text>
          <Exclaim className="exclaim" />
        </div>
      </div>
      <div className={`outline ${outline}`}>
        <text className={`bouncy ${pop}`}>Pop</text>
      </div>
      <div className={`top-outer-circle ${circles[2]}`}>
        <div className={`visual-cue plop ${plop}`}>
          <text className={`happy`}>Plop</text>
          <Exclaim className="exclaim" />
        </div>
        <div className={`top-middle-circle ${circles[3]}`}>
          <div className={`top-inner-circle ${circles[3]}`}>
            <div className={`top-center-outer-circle ${circles[2]}`}>
              <div className={`visual-cue flop ${flop}`}>
                <Exclaim className="exclaim" />
              </div>
              <div className={`top-center-middle-circle ${circles[2]}`}>
                <div className={`top-center-inner-circle ${circles[4]}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`middle-outer-circle ${circles[3]}`}>
        <div className={`visual-cue ${bass}`}>
          <Exclaim className="exclaim" />
        </div>
        <div className={`middle-inner-circle ${circles[3]}`} />
      </div>
      <div className={`name-plate ${circles[1]}`}>
        <div className={`visual-cue ${hello}`}>
          <Exclaim className="exclaim" />
          <text className="happy">Hello</text>
        </div>
        <h1 className={`title`}>Hi, I'm Harry</h1>
      </div>
    </div>
  );
}

export default Landing;
