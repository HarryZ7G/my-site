import React from 'react';
import Fade from 'react-reveal/Fade';
import '../../style/intro.css';

class About extends React.Component{
  render() {
    return (
      <div className="section">
        <Fade right delay={300}>
          <h1 className="section-title">
            About <br/>Me
          </h1>
        </Fade>
        <Fade delay={600}>
          <div className="v-line"></div>
          <div className="section-content">
            <h3 className="section-text">Currently studying at University of Toronto</h3>
            <h3 className="section-text">Computer Science Specialist, Software Engineering Stream</h3>
            <h3 className="section-text">4 years of software developing experience</h3>
          </div>
        </Fade>
      </div>
    )
  }
}

export default About;