import React from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({ minutes, seconds }) => {
  return (
    <div className="break-timer">
      <div className="row">
        <div className="one column middle centered aligned">
          <div className="row">
            <h1 className="header">Break Time Remaining:</h1>
          </div>
          <div className="row">{minutes} Minutes</div>
          <div className="row">{seconds} Seconds</div>
        </div>
      </div>
    </div>
  );
};

const BreakTimer = ({ date, onComplete }) => {
  return <Countdown date={date} onComplete={onComplete} renderer={renderer} />;
};

export default BreakTimer;
