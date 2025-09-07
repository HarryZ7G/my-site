import React, { useRef, useEffect } from "react";
import BinanceLogo from "../../media/Binance.png";
import BinanceImage from "../../media/BinancePage.jpeg";
import "./binance.css";

function Binance() {
  const yubiRef = useRef(null);

  const [yubi, setYubi] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [plug, setPlug] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [move, setMove] = React.useState("");
  const [page, setPage] = React.useState("");
  const [bubble, setBubble] = React.useState("");
  const [tap, setTap] = React.useState("");

  const plugged = () => {
    setPlug("yubi-plug");
    setPhone("iphone-plug");
    setDisplay("screen-on");
    setMove("binance-move");
    setPage("binance-page-animate");
    setBubble("bubble-animate");
  };

  useEffect(() => {
    if (plug === "yubi-plug") {
      setYubi(true);
      setTap(false);
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setYubi(true);
          }
          setTap(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: "-20% 0% -20% 0%",
          threshold: 1.0,
        }
      );
      let reference = yubiRef.current;
      if (yubiRef.current) observer.observe(yubiRef.current);
      return () => {
        if (reference) observer.unobserve(reference);
      };
    }
  }, [yubiRef, plug]);

  return (
    <div className={`binance ${move}`}>
      <div
        className={`iphonef ${phone} ${yubi ? `yubi-appear` : ``}`}
        onClick={plugged}
      >
        <div className="top">
          <div className="speaker" />
          <div className="camera" />
        </div>
        <div className="screen-border">
          <div className={`screen ${display}`}>
            <div className="top-bar">
              <h2>Harry</h2>
            </div>
            <a
              className={`binance-page ${page}`}
              href="https://www.binance.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="binance-image" src={BinanceImage} alt="Binance" />
              <h2>World's Biggest Crypto Exchange</h2>
              <h3>binance.com</h3>
            </a>
            <div className={`bubble ${bubble}`}>
              <h2>TechOps Engineer since October 2023</h2>
            </div>
            <div className="chat">
              <h2>iMessage</h2>
              <div className="send" />
            </div>
          </div>
        </div>
        <div className="home-button">
          <div className="square" />
        </div>
      </div>
      <div className={`yubi ${plug}`} ref={yubiRef} onClick={plugged}>
        <div className="lightning">
          <div className="plastic">
            <div className="pins" />
            <div className="pins" />
            <div className="pins" />
            <div className="pins" />
            <div className="pins" />
            <div className="pins" />
            <div className="pins" />
            <div className="pins" />
          </div>
        </div>
        <div className="base">
          <div className="icon">
            <img
              className="binance-icon"
              src={BinanceLogo}
              alt="binance_logo"
            />
          </div>
          <div className="loop" />
        </div>
        <text className={`happy ${tap ? "happy-animate" : ""}`}>Tap me</text>
      </div>
    </div>
  );
}

export default Binance;
