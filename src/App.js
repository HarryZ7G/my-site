import React from 'react';
import About from './Components/About/index.js';
import Frost from './Components/FrostedGlass/index.js';
import ProfileImg from './Components/ProfileImg/index.js';
import RefreshMsg from './Components/RefreshMsg/index.js';
import ScrollMsg from './Components/ScrollMsg/index.js';
import Skills from './Components/Skills/index.js';
import 'animate.css';
import './App.css'

class App extends React.Component {

  componentDidMount = () => {
    window.addEventListener('scroll', function(){
      if (window.pageYOffset < window.innerHeight / 2) {
        document.getElementById("back").style.filter = `blur(${window.pageYOffset / (window.innerHeight/2) * 15}px)`;
      } else {
        document.getElementById("back").style.filter = "blur(15px)";
      }
    });
  };

  render() {
    return (
      <div className="root" id="root">
        <div className="background animate__animated animate__fadeIn animate__delay-1s" id="back"></div>
        <div className="title-back">
          <RefreshMsg/>
          <Frost/>
          <ScrollMsg/>
        </div>
        <div className="intro animate__animated animate__fadeIn animate__delay-2s">
          <ProfileImg/>
          <About/>
          <Skills/>
        </div>
      </div>
    );
  }
}

export default App;
