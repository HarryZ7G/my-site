import React from 'react';
import Frost from '../../Components/FrostedGlass/index.js';
import RefreshMsg from '../../Components/RefreshMsg/index.js';
import ScrollMsg from '../../Components/ScrollMsg/index.js';
import About from '../../Components/About/index.js';
import Skills from '../../Components/Skills/index.js';
import BackdropFilter from "react-backdrop-filter";
import Profile from '../../images/Profile.jpg';
import '../../style/title.css';
import 'animate.css';

class HomePage extends React.Component{
  render() {
    return (
      <div className="root animate__animated animate__fadeIn animate__delay-1s" id="root">
        <div className="title-back">
          <RefreshMsg/>
          <Frost/>
          <ScrollMsg/>
        </div>
        {/* <BackdropFilter filter={"blur(15px)"}> */}
          <div className="intro">
            <div className="imgCon">
              <img src={Profile} alt="A picture of me" style={{width: "100%", 
                                                               height: "100%", 
                                                               objectFit: "cover",
                                                               borderRadius: "100%"}}/>
            </div>
            <About/>
          </div>
        {/* </BackdropFilter> */}
      </div>
    )
  };
};

export default HomePage;