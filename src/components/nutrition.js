import React from "react";
import "./nutrition.css";

function Nutrition() {
  const [nutrition, setNutrition] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [content, setContent] = React.useState(null);

  return (
    <div className="food-wrapper">
      <div
        className={`nutrition ${nutrition}`}
        onClick={() => {
          setNutrition("animate-nutrition");
          setTitle("animate-title");
          setContent("animate-nutrition-content");
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
          <text className="small-bold margin-left flex-start">
            Amount per serving
          </text>
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
    </div>
  );
}

export default Nutrition;
