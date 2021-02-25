import React from 'react';
import ANDROID from '../../media/back/android.svg';
import C from '../../media/back/c.svg';
import FLUTTER from '../../media/back/flutter.svg';
import JAVA from '../../media/back/java.svg';
import MONGO from '../../media/back/mongo.svg';
import PYTHON from '../../media/back/python.svg';
import '../../style/intro.css';

class BackendPage extends React.Component{

  render() {
    return (
      <div className="back-page">
        <img className="icon-small" src={ANDROID} title="Android" alt="Android"/>
        <img className="icon-small" src={C} title="C" alt="C"/>
        <img className="icon-small" src={FLUTTER} title="Flutter" alt="Flutter"/>
        <img className="icon-small" src={MONGO} title="MongoDB" alt="MongoDB"/>
        <img className="icon-small" src={JAVA} title="Java" alt="Java"/>
        <img className="icon-small" src={PYTHON} title="Python" alt="Python"/>
      </div>
    )
  }
}

export default BackendPage;