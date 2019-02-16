import './BreakTimer.css';
import React from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({ minutes, seconds }) => {
  return (
    <div className="ui container middle centered aligned one column grid">
      <div className="ui text container row">
        <h1 className="ui header">Break Time Remaining:</h1>
      </div>
      <div className="ui text container row">{minutes} Minutes</div>
      <div className="ui text container row">{seconds} Seconds</div>
    </div>
  );
};

const BreakTimer = props => {
  return (
    <div id="break-timer">
      <Countdown
        date={props.date}
        key={props.key}
        onComplete={props.onComplete}
        renderer={renderer}
      />
    </div>
  );
};

export default BreakTimer;