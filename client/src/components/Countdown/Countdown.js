import React from 'react';

const Countdown = props => {
  return (
    <div>
      {props.seconds} and {props.minutes}
    </div>
  );
};

export default Countdown;
