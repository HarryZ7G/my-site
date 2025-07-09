import React, { useEffect } from "react";
import "./Contempt.css";
// import Shadow from "../components/v2/shadow";
import Experience from "../components/v2/experience";
import Sectionv2 from "../components/v2/sectionv2";
import University from "../components/v2/bauhaus/university";

function Contempt() {
  const [cliff, setCliff] = React.useState("cliff-init");
  const [cliffText, setCliffText] = React.useState("hidden");
  const [firstCliffShadow, setFirstCliffShadow] = React.useState("hidden");
  const [secondCliffShadow, setSecondCliffShadow] = React.useState("hidden");
  const [thirdCliffShadow, setThirdCliffShadow] = React.useState("hidden");
  const [bookCover, setBookCover] = React.useState("book-cover-init hidden");
  const [bookTitle, setBookTitle] = React.useState("hidden");
  const [bookDescription, setBookDescription] = React.useState("hidden");
  const [firstBookFrame, setFirstBookFrame] = React.useState("hidden");
  const [secondBookFrame, setSecondBookFrame] = React.useState("hidden");
  const [thirdBookFrame, setThirdBookFrame] = React.useState("hidden");

  useEffect(() => {
    setTimeout(() => {
      setCliff("cliff-animate");
    }, 500);
    setTimeout(() => {
      setCliffText(null);
    }, 1500);
    setTimeout(() => {
      setThirdCliffShadow("third-ii");
      setTimeout(() => {
        setThirdCliffShadow("third");
      }, 1000);
    }, 1800);
    setTimeout(() => {
      setSecondCliffShadow("second-ii");
      setTimeout(() => {
        setSecondCliffShadow("second");
      }, 1000);
    }, 2200);
    setTimeout(() => {
      setFirstCliffShadow("first-ii");
      setTimeout(() => {
        setFirstCliffShadow("first");
      }, 1000);
    }, 2500);
    setTimeout(() => {
      setBookCover("book-cover-init");
      setTimeout(() => {
        setBookCover("book-cover-final");
      }, 200);
    }, 2500);
    setTimeout(() => {
      setBookTitle(null);
      setTimeout(() => {
        setBookDescription(null);
      }, 500);
    }, 3300);
    setTimeout(() => {
      setFirstBookFrame("first");
      setSecondBookFrame("second");
      setThirdBookFrame("third");
    }, 3800);
  }, []);

  return (
    <div className="contempt">
      {/* <div className="anchor-line" /> */}
      {/* <div className="anchor" /> */}
      <div className="landing-cluster">
        <div className="cliff-cluster">
          {/* <div className="anchor-pixel" /> */}
          <div className={`cliff ${cliff}`}>
            <h1 className={cliffText}>Hello</h1>
          </div>
          <div className={`cliff-shadow ${firstCliffShadow}`} />
          <div className={`cliff-shadow ${secondCliffShadow}`} />
          <div className={`cliff-shadow ${thirdCliffShadow}`} />
        </div>
        <div className="book-cluster">
          <div className={`book-cover ${bookCover}`}>
            <h2 className={`book-title ${bookTitle}`}>
              HARRY
              <br />
              GENG
            </h2>
            <h3 className={`book-description ${bookDescription}`}>
              A brief introduction
            </h3>
          </div>
          <div className={`book-frame ${firstBookFrame}`}>
            <div className="bookmark" />
          </div>
          <div className={`book-frame ${secondBookFrame}`} />
          <div className={`book-frame ${thirdBookFrame}`} />
        </div>
      </div>

      {/* <div className="seeking-cluster">
        <Shadow custom="first-shadow" />
        <div className="main-cluster">
          <h1>Seeking</h1>
          <Shadow custom="second-shadow" />
          <h2>Frontend</h2>
          <h2>Full Stack</h2>
        </div>
        <Shadow custom="third-shadow" />
      </div> */}

      <Sectionv2 title="Experience" />

      <Experience
        title="Feature Analyst"
        company="Google"
        skills="JavaScript Python SQL"
      />
      <Experience
        title="TechOps Engineer"
        company="Binance"
        skills="HTML CSS JavaScript"
      />
      <Experience
        title="Backend Developer"
        company="IBM"
        skills="Java Kafka SQL DB2 Oracle"
      />
      <Experience
        title="IT Director"
        company="MCG"
        skills="HTML CSS JavaScript React.js"
      />

      <Sectionv2 title="Education" />

      <University />
    </div>
  );
}

export default Contempt;
