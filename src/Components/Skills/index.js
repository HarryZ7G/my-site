import React from 'react';
import '../../style/title.css';

class Skills extends React.Component{
  render() {
    return (
      <div className="section">
        <text className="section-title" style={{textAlign: "end", 
                                                marginRight: "80px", 
                                                marginLeft: "100px"}}>
          My<br/>Skills
        </text>
        <div class="v-line"></div>
        <div className="section-content">
          <text className="section-text">Front end</text>
        </div>
        <div class="v-line"></div>
        <div className="section-content">
          <text className="section-text">Back end</text>
        </div>
      </div>
    )
  }
}

export default Skills;