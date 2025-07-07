import React, { useEffect } from "react";
import styles from "./bauhaus.module.css";

function Baseline(props) {
  const [colours, setColours] = React.useState([]);

  useEffect(() => {
    if (props.theme === "Google") {
      setColours([
        <div
          className={styles["baseline-colour"] + " " + styles["google-blue"]}
          key="1"
        />,
        <div
          className={styles["baseline-colour"] + " " + styles["google-green"]}
          key="2"
        />,
        <div
          className={styles["baseline-colour"] + " " + styles["google-yellow"]}
          key="3"
        />,
        <div
          className={styles["baseline-colour"] + " " + styles["google-red"]}
          key="4"
        />,
      ]);
    } else if (props.theme === "Binance") {
      setColours([
        <div
          className={styles["baseline-colour"] + " " + styles["black"]}
          key="1"
        />,
        <div
          className={styles["baseline-colour"] + " " + styles["binance-yellow"]}
          key="2"
        />,
      ]);
    } else if (props.theme === "IBM") {
      setColours([
        <div
          className={styles["baseline-colour"] + " " + styles["ibm-blue"]}
          key="1"
        />,
        <div
          className={styles["baseline-colour"] + " " + styles["ibm-cyan"]}
          key="2"
        />,
        <div
          className={styles["baseline-colour"] + " " + styles["ibm-purple"]}
          key="3"
        />,
        <div
          className={styles["baseline-colour"] + " " + styles["ibm-red"]}
          key="4"
        />,
        <div
          className={styles["baseline-colour"] + " " + styles["ibm-green"]}
          key="5"
        />,
      ]);
    } else if (props.theme === "MCG") {
      setColours([
        <div
          className={styles["baseline-colour"] + " " + styles["black"]}
          key="1"
        />,
        <div
          className={styles["baseline-colour"] + " " + styles["mcg-purple"]}
          key="2"
        />,
      ]);
    }
  }, []);
  return <div className={styles["baseline-container"]}>{colours}</div>;
}

export default Baseline;
