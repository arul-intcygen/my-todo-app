// File: src/components/Pomodoro.jsx
import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 menit dalam detik
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      alert("Waktu fokus selesai! Istirahat dulu.");
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
  };

  // Format detik ke MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

    return (
    <div style={{textAlign: 'center'}}>
        <div className="pomodoro-display">{formatTime(timeLeft)}</div>
        <div className="pomodoro-controls">
        <button onClick={toggleTimer} className="btn-pomo">
            {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer} className="btn-pomo">Reset</button>
        </div>
    </div>
    );
};

export default Pomodoro;