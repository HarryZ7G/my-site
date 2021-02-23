import React from 'react';
import '../../style/title.css';

class About extends React.Component{
  render() {
    return (
      <div className="section">
        <text className="section-title" style={{textAlign: "end", 
                                                marginRight: "80px"}}>
          About <br/>Me
        </text>
        <div class="v-line"></div>
        <div className="section-content">
          <text className="section-text">Currently studying at University of Toronto</text>
          <text className="section-text">Computer Science Specialist, Software Engineering Stream</text>
          <text className="section-text">4 years of software developing experience</text>
        </div>
      </div>
    )
  }
}

export default About;