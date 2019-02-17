import './WorkTimer.css';
import React from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({ minutes, seconds }) => {
  return (
    <div className="ui container middle centered aligned one column grid">
      <div className="ui text container row">
        <h1 className="ui header">Work Time Remaining:</h1>
      </div>
      <div className="ui text container row">{minutes} Minutes</div>
      <div className="ui text container row">{seconds} Seconds</div>
    </div>
  );
};

const WorkTimer = ({ date, key, onComplete }) => {
  return (
    <div className="work-timer">
      <Countdown
        date={date}
        key={key}
        onComplete={onComplete}
        renderer={renderer}
      />
    </div>
  );
};

export default WorkTimer;
