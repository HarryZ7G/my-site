import React, { useEffect, useRef } from "react";
import "./nutrition.css";

function Nutrition() {
  const happyRef = useRef(null);

  const [nutrition, setNutrition] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [content, setContent] = React.useState(null);
  const [comic, setComic] = React.useState(null);
  const [happy, setHappy] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setHappy(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-20% 0 -20% 0",
        threshold: 1.0,
      }
    );
    let reference = happyRef.current;
    if (happyRef.current) observer.observe(happyRef.current);
    return () => {
      if (reference) observer.unobserve(reference);
    };
  }, [happyRef]);

  return (
    <div className="food-wrapper">
      <div
        className={`nutrition ${nutrition}`}
        ref={happyRef}
        onClick={() => {
          setNutrition("animate-nutrition");
          setTitle("animate-title");
          setContent("animate-nutrition-content");
          setComic("happy-disappear");
        }}
      >
        <text className={`title ${title}`}>Website facts</text>
        <div className={`nutrition-content ${content}`}>
          <div className="thin margin-bottom" />
          <text className="thin-large">1 serving per dev</text>
          <div className="wide-wrapper margin-bottom">
            <text className="mid-bold">Total hours spent</text>
            <text className="mid-bold">60 hours</text>
          </div>
          <div className="thick margin-bottom" />
          <text className="small-bold flex-start">Amount per serving</text>
          <div className="wide-wrapper">
            <text className="large-bold">Effort</text>
            <text className="exlarge-bold maximum">Maximum</text>
          </div>
          <div className="mid margin-bottom" />
          <text className="small-bold count small-margin-bottom">
            count/value*
          </text>
          <div className="thin small-margin-bottom" />
          <div className="wide-wrapper small-margin-bottom">
            <text className="small-bold">Total frameworks used</text>
            <text className="small-bold">1</text>
          </div>
          <div className="thin small-margin-bottom" />
          <div className="semi-wide-wrapper small-margin-bottom">
            <text className="small-thin">Create React App</text>
            <text className="small-bold">Yes</text>
          </div>
          <div className="thin small-margin-bottom" />
          <div className="semi-wide-wrapper small-margin-bottom">
            <text className="small-thin">Third-party frameworks</text>
            <text className="small-bold">No</text>
          </div>
          <div className="thin small-margin-bottom" />
          <div className="wide-wrapper small-margin-bottom">
            <text className="small-bold">CSS animations/transitions</text>
            <text className="small-bold">19</text>
          </div>
          <div className="thin small-margin-bottom" />
          <div className="wide-wrapper small-margin-bottom">
            <text className="small-bold">Reusable components</text>
            <text className="small-bold">11</text>
          </div>
          <div className="thin small-margin-bottom" />
          <div className="wide-wrapper small-margin-bottom">
            <text className="small-bold">Hidden features</text>
          </div>
          <div className="thin small-margin-bottom" />
          <div className="semi-wide-wrapper small-margin-bottom">
            <text className="small-thin">Auto detect dark mode</text>
            <text className="small-bold">Yes</text>
          </div>
          <div className="thin small-margin-bottom" />
          <div className="semi-wide-wrapper margin-bottom">
            <text className="small-thin">Open to work</text>
            <text className="small-bold">Yes</text>
          </div>
          <div className="thick margin-bottom" />
          <div className="wide-wrapper small-margin-bottom">
            <text className="small-thin">Total lines of code</text>
            <text className="small-thin">5348</text>
          </div>
          <div className="thin small-margin-bottom" />
          <div className="wide-wrapper margin-bottom">
            <text className="small-thin">Total commits</text>
            <text className="small-thin">27</text>
          </div>
          <div className="mid margin-bottom" />
          <text className="flex-start exsmall-thin margin-left">
            * Website was designed on Figma, developed with React.js, then
            deployed through GitHub pages.
          </text>
          <text className="flex-start exsmall-thin margin-left small-margin-bottom">
            ** Thank you for visiting my website.
          </text>
        </div>
      </div>
      <text className={`happy ${comic} ${happy ? "happy-animate" : ""}`}>
        Tap me
      </text>
    </div>
  );
}

export default Nutrition;
