// src/TimerDisplay.js
import React from 'react';

const TimerDisplay = ({ minutes, seconds }) => (
  <div className="time">
    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
  </div>
);

export default TimerDisplay;

