// src/TimerControls.js
import React from 'react';

const TimerControls = ({ isActive, onStartStop, onReset }) => (
  <div className="row">
    <button onClick={onStartStop}>
      {isActive ? 'Pause' : 'Start'}
    </button>
    <button onClick={onReset}>Reset</button>
  </div>
);

export default TimerControls;

