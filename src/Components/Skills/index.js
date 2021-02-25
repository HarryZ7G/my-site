import React from 'react';
import FrontendPage from '../../Components/FrontendPage/index.js';
import BackendPage from '../../Components/BackendPage/index.js';
import Front from '../../media/Frontend.svg';
import Back from '../../media/Backend.svg';
import Fade from 'react-reveal/Fade';
import '../../style/intro.css';

class Skills extends React.Component{

  render() {
    return (
      <div className="section" style={{marginTop: "4vw"}}>
        <Fade right delay={300}>
          <h2 className="section-title" style={{textAlign: "end"}}>
            My<br/>Skills
          </h2>
        </Fade>
        <Fade delay={600}>
          <div className="v-line"></div>
        </Fade>
        <div className="section-content" style={{flexDirection: "row"}}>
          <Fade delay={600}>
            <div className="section-icon" style={{marginLeft: "min(5vw, 7vh)"}}>
              <div className="circle1" id="front">
                <img className="icon-front" src={Front} alt=""/>
                <FrontendPage/>
              </div>
              <h2 className="section-des">Frontend</h2>
            </div>
          </Fade>
          <Fade delay={700}>
            <div className="h-line"></div>
          </Fade>
          <Fade delay={800}>
            <div className="section-icon">
              <div className="circle2">
                <img className="icon-back" src={Back} alt=""/>
                <BackendPage/>
              </div>
              <h2 className="section-des">Backend</h2>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

export default Skills;