import React, { Component } from 'react';
import Sound from 'react-sound';
import sound from './Bell.wav';

class Bell extends Component {
  render() {
    return <Sound url={sound} playStatus={Sound.status.PLAYING} />;
  }
}

export default Bell;
