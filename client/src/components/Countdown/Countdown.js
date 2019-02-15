import React, { Component } from 'react';
import axios from 'axios';
import CountdownTimer from 'react-component-countdown-timer';

const Countdown = props => {
  return (
    <div>
      <CountdownTimer count={props.count} />
    </div>
  );
};

export default Countdown;

// class Countdown extends Component {
//   state = { seconds: null };

//   componentDidMount() {
//     this.onLoad();
//   }

//   onLoad = () => {
//     axios
//       .get('/time')
//       .then(res => {
//         console.log(res.data.seconds);
//         this.setState({ seconds: res.data.seconds });
//       })
//       .catch(error => console.log(error.response));
//   };

//   render() {

//     if (this.state.seconds === null) {
//       return <div>Loading...</div>
//     }

//     if (this.state.seconds >= 1800 && this.state.seconds < 3300) {
//       return (
//         <CountdownTimer minuteTitle={'YES'} count={3300 - this.state.seconds} />
//       )
//     }
//     if (this.state.seconds >= 3300 && this.state.seconds < 3600) {
//       return <CountdownTimer showTitle minuteTitle={'YES'} count={3600 - this.state.seconds} />;
//     }
//   }
// }

// export default Countdown;
