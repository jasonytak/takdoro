import React, { Component } from 'react';
import axios from 'axios';
import Countdown from '../Countdown/Countdown';

class CountdownControl extends Component {
  state = { seconds: 2500 };

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    axios
      .get('/time')
      .then(res => {
        console.log(res.data.seconds);
        this.setState({ seconds: res.data.seconds });
      })
      .catch(error => console.log(error.response));
  };

  render() {
    if (this.state.seconds === null) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Countdown count={this.state.seconds} />
      </div>
    );
  }
}

export default CountdownControl;

// if (this.state.seconds === null) {
//   return <div>Loading...</div>;
// }

// if (this.state.seconds === 10) {
//   return (
//     <ReactCountdownClock seconds={10} onComplete={this.restartTimer} />
//   );
// }

// if (this.state.seconds === 15) {
//   return (
//     <ReactCountdownClock
//       seconds={this.state.seconds}
//       onComplete={this.resetFiveTimer}
//     />
//   );
// }

// if (this.state.seconds >= 0 && this.state.seconds < 1500) {
//   return (
//     <ReactCountdownClock
//       seconds={1500 - this.state.seconds}
//       onComplete={this.restartTimer}
//     />
//   );
// }

// if (this.state.seconds >= 1800 && this.state.seconds < 3300) {
//   return (
//     <ReactCountdownClock
//       seconds={3300 - this.state.seconds}
//       onComplete={this.resetFiveTimer}
//     />
//   );
// }

// if (this.state.seconds >= 3300 && this.state.seconds < 3600) {
//   return <ReactCountdownClock seconds={3600 - this.state.seconds} />;
// }
