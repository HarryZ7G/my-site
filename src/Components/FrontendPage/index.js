import React from 'react';
import CSS from '../../media/front/css3.svg';
import EXP from '../../media/front/express.svg';
import FBASE from '../../media/front/firebase.svg';
import HTML from '../../media/front/html5.svg';
import JS from '../../media/front/js.svg';
import MUI from '../../media/front/mui.svg';
import NODE from '../../media/front/nodejs.svg';
import REACT from '../../media/front/react.svg';
import REDUX from '../../media/front/redux.svg';
import '../../style/intro.css';

class FrontendPage extends React.Component{

  render() {
    return (
      <div className="front-page">
        <img className="icon-small" src={CSS} title="CSS3" alt="CSS3"/>
        <img className="icon-small" src={EXP} title="Express" alt="Express"/>
        <img className="icon-small" src={FBASE} title="Firebase" alt="Firebase"/>
        <img className="icon-small" src={HTML} title="HTML5" alt="HTML5"/>
        <img className="icon-small" src={JS} title="JS" alt="JS"/>
        <img className="icon-small" src={MUI} title="Material-UI" alt="Material-UI"/>
        <img className="icon-small" src={NODE} title="Node.js" alt="Node.js"/>
        <img className="icon-small" src={REACT} title="React.js" alt="React.js"/>
        <img className="icon-small" src={REDUX} title="Redux" alt="Redux"/>
      </div>
    )
  }
}

export default FrontendPage;