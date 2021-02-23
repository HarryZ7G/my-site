import React from 'react';
import '../../style/title.css';
import 'animate.css';

class ScrollMsg extends React.Component {
  render() {
    return (
      <div className="blackout animate__animated animate__fadeInUp animate__delay-3s">
        <h4 className="message animate__animated animate__fadeInDown animate__delay-4s" 
            id="message"
            style={{paddingTop: "5px"}}>Scroll down</h4>
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
    if (this.state.seconds === 7) {
      document.getElementById("message").classList.remove("animate__fadeInDown", "animate__delay-4s");
      document.getElementById("message").classList.add("animate__fadeOutDown", "animate__slow");
      this.setState({seconds: 8});
    } else if (this.state.seconds < 11) {
      this.setState({seconds: this.state.seconds + 1});
    } else if (this.state.seconds === 11) {
      document.getElementById("message").classList.remove("animate__fadeOutDown");
      document.getElementById("message").classList.add("animate__fadeInDown");
      this.setState({seconds: 4});
    }
  }
};

export default ScrollMsg;