import React from "react";
import styles from "./arrow.module.css";

function Arrow(props) {
  const [arrowStyle, setArrowStyle] = React.useState("");

  React.useEffect(() => {
    if (props.style === "section") {
      setArrowStyle("section-arrow");
    } else if (props.style === "plank") {
      setArrowStyle("plank-arrow");
    } else if (props.style === "uni") {
      setArrowStyle("uni-arrow");
    }
  }, []);

  return (
    <div className={styles["arrow"] + " " + styles[arrowStyle]}>
      <div
        className={
          styles["right-stroke"] + " " + styles[arrowStyle + "-right-stroke"]
        }
      ></div>
      <div
        className={
          styles["bottom-stroke"] + " " + styles[arrowStyle + "-bottom-stroke"]
        }
      ></div>
      <div
        className={
          styles["diagonal-stroke"] +
          " " +
          styles[arrowStyle + "-diagonal-stroke"]
        }
      ></div>
    </div>
  );
}

export default Arrow;
