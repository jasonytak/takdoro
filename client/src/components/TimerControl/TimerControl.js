import React, { Component } from 'react';
import axios from 'axios';
import Countdown from 'react-countdown-now';
import BreakTimer from '../BreakTimer/BreakTimer';
import WorkTimer from '../WorkTimer/WorkTimer';

class TimerControl extends Component {
  state = { minutes: null, seconds: null, counter: 0 };

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    axios
      .get('/time')
      .then(res => {
        let minutes = this.convertMinutes(res.data.mins);
        let seconds = this.convertSeconds(res.data.secs);
        this.setState({ minutes, seconds });
      })
      .catch(error => console.log(error.response));
  };

  convertMinutes = mins => {
    let minutes;
    if (mins >= 0 && mins < 5) {
      minutes = 4 - mins;
    }
    if (mins >= 5 && mins < 30) {
      minutes = 29 - mins;
    }
    if (mins >= 30 && mins < 35) {
      minutes = 34 - mins;
    }
    if (mins >= 35 && mins < 60) {
      minutes = 59 - mins;
    }
    return minutes * 60000;
  };

  convertSeconds = secs => {
    let seconds;
    seconds = 60 - secs;
    seconds = seconds * 1000;
    return seconds;
  };

  render() {
    if (this.state.seconds === null || this.state.minutes === null) {
      return <div>Loading...</div>;
    }

    if (this.state.minutes >= 60000 && this.state.minutes <= 240000) {
      return (
        <div>
          <Countdown
            date={Date.now() + this.state.minutes + this.state.seconds}
            key={this.state.counter}
            onComplete={() =>
              this.setState({
                minutes: 300000,
                seconds: 0,
                counter: this.state.counter + 1
              })
            }
          />
        </div>
      );
    }
    return (
      <div>
        <Countdown
          date={Date.now() + this.state.minutes + this.state.seconds}
          key={this.state.counter}
          onComplete={() =>
            this.setState({
              minutes: 1500000,
              seconds: 0,
              counter: this.state.counter + 1
            })
          }
        />
      </div>
    );
  }
}

export default TimerControl;
