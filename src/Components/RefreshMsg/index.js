import React from 'react';
import '../../style/title.css';
import 'animate.css';

class RefreshMsg extends React.Component {
  render() {
    return (
      <div className="refresh-glass animate__animated animate__fadeInDown animate__delay-3s" id="ref">
        <h4 className="message">Refresh to change the picture</h4>
      </div>
    )
  };
  
  constructor(props) {
    super(props);
    this.state = {seconds: 0};
  }

  componentDidMount() {
    this.count = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount() {
    clearInterval(this.count);
  }

  tick() {
    if (this.state.seconds === 8) {
      document.getElementById("ref").classList.remove("animate__fadeInDown", "animate__delay-3s");
      document.getElementById("ref").classList.add("animate__fadeOutUp");
      this.setState({seconds: 9});
    } else if (this.state.seconds < 8) {
      this.setState({seconds: this.state.seconds + 1});
    }
  }
};

export default RefreshMsg;