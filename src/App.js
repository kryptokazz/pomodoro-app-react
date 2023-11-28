import React, { useState, useEffect } from 'react';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import './App.css';

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);



   useEffect(() => {
  let interval = null;

  if (isActive) {
    interval = setInterval(() => {
      setSeconds(seconds => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            return 0;
          } else {
            setMinutes(minutes => minutes - 1);
            return 59;
          }
        } else {
          return seconds - 1;
        }
      });
    }, 1000);
  } else {
    clearInterval(interval);
  }

  return () => clearInterval(interval);
}, [isActive, seconds, minutes]);


return (
    <div className="app">
      <TimerDisplay minutes={minutes} seconds={seconds} />
      <TimerControls 
        isActive={isActive} 
        onStartStop={() => setIsActive(!isActive)}
        onReset={() => {
          setMinutes(25);
          setSeconds(0);
          setIsActive(false);
        }}
      />
    </div>
  );
}

export default App;

