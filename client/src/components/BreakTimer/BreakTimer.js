import React from 'react';
import Countdown from 'react-countdown-now';

const renderer = ({ minutes, seconds }) => {
  return (
    <div>
      <h1 className="ui header">Break Time Remaining:</h1>
      <span>
        {minutes}:{seconds}
      </span>
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
