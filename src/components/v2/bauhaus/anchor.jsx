import React, { useEffect } from "react";
import styles from "./bauhaus.module.css";

function Anchor(props) {
  const [colours, setColours] = React.useState(["", "", "", ""]);

  useEffect(() => {
    if (props.theme === "Google") {
      setColours([
        "google-blue",
        "google-green",
        "google-yellow",
        "google-red",
      ]);
    } else if (props.theme === "Binance") {
      setColours([
        "binance-yellow",
        "binance-yellow",
        "binance-yellow",
        "binance-yellow",
      ]);
    } else if (props.theme === "IBM") {
      setColours(["ibm-cyan", "ibm-purple", "ibm-red", "ibm-green"]);
    } else if (props.theme === "MCG") {
      setColours(["mcg-purple", "mcg-purple", "mcg-purple", "mcg-purple"]);
    }
  }, []);
  return (
    <div className={styles["anchor-container"]}>
      <div
        className={
          styles["anchor-dot"] +
          " " +
          styles["top-left"] +
          " " +
          styles[colours[0]]
        }
      />
      <div
        className={
          styles["anchor-dot"] +
          " " +
          styles["top-right"] +
          " " +
          styles[colours[1]]
        }
      />
      <div
        className={
          styles["anchor-dot"] +
          " " +
          styles["bottom-left"] +
          " " +
          styles[colours[2]]
        }
        key="3"
      />
      <div
        className={
          styles["anchor-dot"] +
          " " +
          styles["bottom-right"] +
          " " +
          styles[colours[3]]
        }
        key="4"
      />
    </div>
  );
}

export default Anchor;
