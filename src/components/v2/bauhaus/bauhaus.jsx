import React from "react";
import Google from "./google.jsx";
import Binance from "./binance.jsx";
import IBM from "./ibm.jsx";
import IBM90 from "./ibmNinety.jsx";
import MCG from "./mcg.jsx";
import styles from "./bauhaus.module.css";

function Bauhaus(props) {
  const [bauhaus, setBauhaus] = React.useState([]);

  React.useEffect(() => {
    if (props.theme === "Google") {
      setBauhaus([
        // First row
        <Google theme="google-blue" />,
        <Google theme="google-blue" />,
        <Google theme="google-green" />,
        <Google theme="google-green" />,
        <Google theme="google-yellow" />,
        <Google theme="google-red" />,
        // Second row
        <Google theme="google-blue" />,
        <Google theme="google-green" />,
        <Google theme="google-green" />,
        <Google theme="google-yellow" />,
        <Google theme="google-yellow" />,
        <Google theme="google-red" />,
        // Third row
        <Google theme="google-blue" />,
        <Google theme="google-green" />,
        <Google theme="google-yellow" />,
        <Google theme="google-yellow" />,
        <Google theme="google-red" />,
        <Google theme="google-red" />,
      ]);
    } else if (props.theme === "Binance") {
      setBauhaus([
        // First row
        <Binance />,
        <Binance />,
        <Binance />,
        <Binance />,
        <Binance />,
        <Binance />,
        // Second row
        <Binance />,
        <Binance />,
        <Binance />,
        <Binance />,
        <Binance />,
        <Binance />,
        // Third row
        <Binance />,
        <Binance />,
        <Binance />,
        <Binance />,
        <Binance />,
        <Binance />,
      ]);
    } else if (props.theme === "IBM") {
      setBauhaus([
        // First row
        <IBM />,
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        // Second row
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        <IBM />,
        // Third row
        <IBM />,
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        // Fourth row
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        <IBM />,
        <IBM90 />,
        <IBM />,
      ]);
    } else if (props.theme === "MCG") {
      setBauhaus([
        // First row
        <MCG />,
        <MCG />,
        <MCG />,
        <MCG />,
        <MCG />,
        <MCG />,
        // Second row
        <MCG />,
        <MCG />,
        <MCG />,
        <MCG />,
        <MCG />,
        <MCG />,
        // Third row
        <MCG />,
        <MCG />,
        <MCG />,
        <MCG />,
        <MCG />,
        <MCG />,
      ]);
    }
  }, []);

  return (
    <div
      className={
        styles["bauhaus-container"] +
        (props.theme === "Google"
          ? " " + styles["google-bauhaus-container"]
          : "") +
        (props.theme === "IBM" ? " " + styles["ibm-bauhaus-container"] : "")
      }
    >
      {bauhaus}
    </div>
  );
}

export default Bauhaus;
