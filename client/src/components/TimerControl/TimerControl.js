import React, { Component } from 'react';
import axios from 'axios';
import Countdown from 'react-countdown-now';
import BreakTimer from '../BreakTimer/BreakTimer';
import WorkTimer from '../WorkTimer/WorkTimer';

class TimerControl extends Component {
  state = { serverMinutes: null, minutes: null, seconds: 10000, counter: 0 };

  // componentDidMount() {
  //   this.onLoad();
  // }

  // // Requests time data from server
  // onLoad = () => {
  //   axios
  //     .get('/time')
  //     .then(res => {
  //       let serverMinutes = res.data.mins;
  //       let minutes = this.convertMinutes(res.data.mins);
  //       let seconds = this.convertSeconds(res.data.secs);
  //       this.setState({ serverMinutes, minutes, seconds });
  //     })
  //     .catch(error => console.log(error.response));
  // };

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
    if (secs === 0) return -1;
    let seconds;
    seconds = 60 - secs;
    seconds = seconds * 1000;
    return seconds;
  };

  render() {
    // Conditional rendering - waiting for onLoad()
    // if (
    //   this.state.serverMinutes === null ||
    //   this.state.minutes === null ||
    //   this.state.seconds === null
    // ) {
    //   return <div>Loading...</div>;
    // }

    // Condition to determine when minutes === 0 (24th min or 59th min),
    // Which timer to activate next
    // if (this.state.minutes === 0 && this.state.serverMinutes <= 24) {
    //   return (
    //     <div>
    //       <Countdown
    //         date={Date.now() + this.state.minutes + this.state.seconds}
    //         key={this.state.counter}
    //         onComplete={() =>
    //           this.setState({
    //             minutes: 300000,
    //             seconds: 0,
    //             counter: this.state.counter + 1
    //           })
    //         }
    //       />
    //     </div>
    //   );
    // }

    if (this.state.minutes === 0) {
      return (
        <div id="PLEASE">
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

    // if (this.state.minutes >= 60000 && this.state.minutes <= 240000) {
    //   return (
    //     <div>
    //       <Countdown
    //         date={Date.now() + this.state.minutes + this.state.seconds}
    //         key={this.state.counter}
    //         onComplete={() =>
    //           this.setState({
    //             minutes: 1500000,
    //             seconds: 0,
    //             counter: this.state.counter + 1
    //           })
    //         }
    //       />
    //     </div>
    //   );
    // }

    return (
      <div>
        <BreakTimer
          date={Date.now() + this.state.minutes + this.state.seconds}
          key={this.state.counter}
          onComplete={() =>
            this.setState({
              minutes: 0,
              seconds: 10000,
              counter: this.state.counter + 1
            })
          }
        />
      </div>
    );
    // return (
    //   <div>
    //     <Countdown
    //       date={Date.now() + this.state.minutes + this.state.seconds}
    //       key={this.state.counter}
    //       onComplete={() =>
    //         this.setState({
    //           minutes: 300000,
    //           seconds: 0,
    //           counter: this.state.counter + 1
    //         })
    //       }
    //     />
    //   </div>
    // );
  }
}

export default TimerControl;
