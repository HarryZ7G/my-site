import React from "react";
import styles from "./bauhaus.module.css";

function Plank(props) {
  const [colours, setColours] = React.useState([]);

  React.useEffect(() => {
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
          className={styles["baseline-colour"] + " " + styles["binance-yellow"]}
          key="1"
        />,
      ]);
    } else if (props.theme === "IBM") {
      setColours([
        <div
          className={styles["baseline-colour"] + " " + styles["ibm-blue"]}
          key="1"
        />,
      ]);
    } else if (props.theme === "MCG") {
      setColours([
        <div
          className={styles["baseline-colour"] + " " + styles["mcg-purple"]}
          key="1"
        />,
      ]);
    }
  }, []);
  return <div className={styles["plank-container"]}>{colours}</div>;
}

export default Plank;
