import React from 'react';
import '../../style/title.css';
import 'animate.css';
import BackdropFilter from "react-backdrop-filter";

class Frost extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {seconds: 0};
  // }

  // componentDidMount() {
  //   this.count = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }

  // componentWillMount() {
  //   clearInterval(this.count);
  // }

  // tick() {
  //   if (this.state.seconds === 6) {
  //     document.getElementById("frost").innerHTML = `<h1 class="title animate__animated animate__fadeIn" id="hello">你好</h1>`;
  //     this.setState({seconds: 7});
  //   } else if (this.state.seconds === 12) {
  //     document.getElementById("frost").innerHTML = `<h1 class="title animate__animated animate__fadeIn" id="hello">Bonjour</h1>`;
  //     this.setState({seconds: 13});
  //   } else if (this.state.seconds === 18) {
  //     document.getElementById("frost").innerHTML = `<h1 class="title animate__animated animate__fadeIn" id="hello">Hola</h1>`;
  //     this.setState({seconds: 19});
  //   } else if (this.state.seconds === 24) {
  //     document.getElementById("frost").innerHTML = `<h1 class="title animate__animated animate__fadeIn" id="hello">Hello</h1>`;
  //     this.setState({seconds: 2});
  //   } else if (this.state.seconds < 24) {
  //     this.setState({seconds: this.state.seconds + 1});
  //   }
  // }

  render() {
    return (
      <BackdropFilter filter={"blur(15px)"} className="animate__animated animate__fadeIn animate__delay-2s">
        <div className="glass" id="frost">
          <h1 className="title animate__animated animate__fadeIn animate__delay-3s" id="hello">Hello</h1>
        </div>
      </BackdropFilter>
    );
  };
};

export default Frost;