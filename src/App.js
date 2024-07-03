import React, { useState, useRef } from 'react';
import './App.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  const toggleTimer = () => {
    if (isActive) {
      clearInterval(timerRef.current);
      setIsActive(false);
    } else {
      setIsActive(true);
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10); 
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return `Time: ${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time-display">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={toggleTimer}>
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
