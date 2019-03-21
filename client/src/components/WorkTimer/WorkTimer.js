import './WorkTimer.css';
import React from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({ minutes, seconds }) => {
  return (
    <div className="centered aligned row">
      <div className="one column middle centered aligned">
        <div className="row">
          <h1 className="header">Work Time Remaining:</h1>
        </div>
        <div className="row">{minutes} Minutes</div>
        <div className="row">{seconds} Seconds</div>
      </div>
    </div>
  );
};

const WorkTimer = ({ date, onComplete }) => {
  return <Countdown date={date} onComplete={onComplete} renderer={renderer} />;
};

export default WorkTimer;
