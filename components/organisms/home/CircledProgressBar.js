import React from 'react';
import { CircledProgressBarWrapper } from 'styles/CircledProgressBar.style';
import { globalColor } from 'styles/global_styles/Global.styles';

const CircledProgressBar = ({
  radius = 18,
  timeLeft,
  interval,
  clickHandler,
  isTimerStopped,
  width = 40,
  height = 40,
  color = globalColor.blue.skyBlue,
  lineWidth = 1.5,
}) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / interval) * circumference;

  return (
    <CircledProgressBarWrapper
      onClick={clickHandler}
      $isPaused={isTimerStopped}
    >
      <svg
        width={`${width}`}
        height={`${height}`}
        viewBox={`0 0 ${width} ${height}`}
        className="circle"
      >
        <circle
          cx={`${width / 2}`}
          cy={`${height / 2}`}
          r={radius}
          stroke={color}
          strokeWidth={lineWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90, 20, 20)"
        />
      </svg>
      <span className="time">{timeLeft}</span>
    </CircledProgressBarWrapper>
  );
};

export default CircledProgressBar;
