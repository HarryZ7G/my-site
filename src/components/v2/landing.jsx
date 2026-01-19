import React, { useEffect } from "react";
import styles from "./landing.module.css";

function Landing() {
  const [cliff, setCliff] = React.useState("cliff-init");
  const [cliffText, setCliffText] = React.useState("hidden");
  const [firstCliffShadow, setFirstCliffShadow] = React.useState("hidden");
  const [secondCliffShadow, setSecondCliffShadow] = React.useState("hidden");
  const [thirdCliffShadow, setThirdCliffShadow] = React.useState("hidden");
  const [bookCover, setBookCover] = React.useState("book-cover-init");
  const [isBookCoverHidden, setIsBookCoverHidden] = React.useState(true);
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
      setIsBookCoverHidden(false);
      // setBookCover("book-cover-init"); // Already initialized
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
    <div className={styles['landing-cluster']}>
      <div className={styles['cliff-cluster']}>
        {/* <div className={styles['anchor-pixel']} /> */}
        <div className={`${styles.cliff} ${styles[cliff]}`}>
          <h1 className={styles[cliffText]}>Hello</h1>
        </div>
        <div className={`${styles['cliff-shadow']} ${styles[firstCliffShadow]}`} />
        <div className={`${styles['cliff-shadow']} ${styles[secondCliffShadow]}`} />
        <div className={`${styles['cliff-shadow']} ${styles[thirdCliffShadow]}`} />
      </div>
      <div className={styles['book-cluster']}>
        <div className={`${styles['book-cover']} ${styles[bookCover]} ${isBookCoverHidden ? styles.hidden : ''}`}>
          <h2 className={`${styles['book-title']} ${styles[bookTitle]}`}>
            HARRY
            <br />
            GENG
          </h2>
          <h3 className={`${styles['book-description']} ${styles[bookDescription]}`}>
            A brief introduction
          </h3>
        </div>
        <div className={`${styles['book-frame']} ${styles[firstBookFrame]}`}>
          <div className={styles.bookmark} />
        </div>
        <div className={`${styles['book-frame']} ${styles[secondBookFrame]}`} />
        <div className={`${styles['book-frame']} ${styles[thirdBookFrame]}`} />
      </div>
    </div>
  );
}

export default Landing;