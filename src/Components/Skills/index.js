import React from 'react';
import Front from '../../images/FrontEnd.svg';
import Back from '../../images/BackEnd.svg';
import Fade from 'react-reveal/Fade';
import '../../style/title.css';

class Skills extends React.Component{
  render() {
    return (
      <div className="section" style={{marginTop: "4vw"}}>
        <Fade right delay={300}>
          <text className="section-title" style={{textAlign: "end"}}>
            My<br/>Skills
          </text>
        </Fade>
        <Fade delay={600}>
          <div className="v-line"></div>
        </Fade>
        <div className="section-content" style={{flexDirection: "row"}}>
          <Fade delay={600}>
            <div className="section-icon" style={{marginLeft: "5vw"}}>
              <div className="circle">
                <img className="icon-front" src={Front}/>
              </div>
              <text className="section-des">Frontend</text>
            </div>
          </Fade>
          <Fade delay={800}>
            <div className="h-line"></div>
          </Fade>
          <Fade delay={1000}>
            <div className="section-icon">
              <div className="circle">
                <img className="icon-back" src={Back}/>
              </div>
              <text className="section-des">Backend</text>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}

export default Skills;