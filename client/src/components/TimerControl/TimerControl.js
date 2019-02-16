import React, { Component } from 'react';
import axios from 'axios';
import Countdown from 'react-countdown-now';
import BreakTimer from '../BreakTimer/BreakTimer';
import WorkTimer from '../WorkTimer/WorkTimer';

class TimerControl extends Component {
  state = { serverMinutes: null, minutes: null, seconds: null, counter: 0 };

  componentDidMount() {
    this.onLoad();
  }

  // Requests time data from server
  onLoad = () => {
    axios
      .get('/time')
      .then(res => {
        let serverMinutes = res.data.mins;
        let minutes = this.convertMinutes(res.data.mins);
        let seconds = this.convertSeconds(res.data.secs);
        this.setState({ serverMinutes, minutes, seconds });
      })
      .catch(error => console.log(error.response));
  };

  // Converts minutes sent from server to proper milliseconds for timer
  convertMinutes = mins => {
    let minutes;
    if (mins >= 0 && mins <= 24) {
      minutes = 24 - mins;
    }
    if (mins >= 25 && mins <= 29) {
      minutes = 29 - mins;
    }
    if (mins >= 30 && mins <= 54) {
      minutes = 54 - mins;
    }
    if (mins >= 55 && mins <= 59) {
      minutes = 59 - mins;
    }
    return minutes * 60000;
  };

  // Converts seconds from server to proper milliseconds for timer
  convertSeconds = secs => {
    // Handles edge case when user starts at exactly 12:00
    if (secs === 0) return 1;
    let seconds;
    seconds = 60 - secs;
    seconds = seconds * 1000;
    return seconds;
  };

  render() {
    //Conditional rendering - waiting for onLoad()
    if (this.state.minutes === null || this.state.seconds === null) {
      return <div>Loading...</div>;
    }

    if (this.state.serverMinutes >= 25 && this.state.serverMinutes <= 29) {
      return (
        <div>
          <BreakTimer
            date={Date.now() + this.state.minutes + this.state.seconds}
            key={this.state.counter}
            onComplete={() =>
              this.setState({
                serverMinutes: null,
                minutes: 1500000,
                seconds: 0,
                counter: this.state.counter + 1
              })
            }
          />
        </div>
      );
    }

    if (this.state.serverMinutes >= 55 && this.state.serverMinutes <= 59) {
      return (
        <div>
          <BreakTimer
            date={Date.now() + this.state.minutes + this.state.seconds}
            key={this.state.counter}
            onComplete={() =>
              this.setState({
                serverMinutes: null,
                minutes: 1500000,
                seconds: 0,
                counter: this.state.counter + 1
              })
            }
          />
        </div>
      );
    }

    if (this.state.serverMinutes === null && this.state.minutes === 300000) {
      return (
        <div>
          <BreakTimer
            date={Date.now() + this.state.minutes + this.state.seconds}
            key={this.state.counter}
            onComplete={() =>
              this.setState({
                serverMinutes: null,
                minutes: 1500000,
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
        <WorkTimer
          date={Date.now() + this.state.minutes + this.state.seconds}
          key={this.state.counter}
          onComplete={() =>
            this.setState({
              serverMinutes: null,
              minutes: 300000,
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
