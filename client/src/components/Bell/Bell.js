import React, { Component } from 'react';
import sound from './Bell.wav';

class Bell extends Component {
  render() {
    return (
      <div>
        <audio autoPlay src={sound}/>
      </div>
    );
  }
}

export default Bell;
