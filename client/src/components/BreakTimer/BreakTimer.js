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

const BreakTimer = ({ date, onComplete }) => {
  return (
    <div className="break-timer">
      <Countdown
        date={date}
        onComplete={onComplete}
        renderer={renderer}
      />
    </div>
  );
};

export default BreakTimer;
