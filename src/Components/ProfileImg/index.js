import React from 'react';
import Profile from '../../images/Profile.jpg';
import Fade from 'react-reveal/Fade';
import '../../style/intro.css';

class ProfileImg extends React.Component{
  render() {
    return (
      <Fade delay={300}>
        <div className="imgCon">
        <img src={Profile} alt="A picture of me" style={{width: "100%", 
                                                        height: "100%", 
                                                        objectFit: "cover",
                                                        borderRadius: "100%"}}/>
        </div>
      </Fade>
    )
  }
}

export default ProfileImg;