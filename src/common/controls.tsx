import React, { useState } from "react";

import "./controls.scss";

interface IControlsProps {
  timelineRef: any;
}

function Controls({ timelineRef }: IControlsProps) {
  const [timelineValue, setTimelineValue] = useState(0);
  return (
    <div className="controls">
      <div className="timeline controls">
        <input
          className="progress"
          step=".001"
          type="range"
          min="0"
          max="100"
          value={timelineValue}
          onChange={(e) => {
            setTimelineValue(parseInt(e.target.value));
            timelineRef.current.seek(
              timelineRef.current.duration * (parseInt(e.target.value) / 100)
            );
          }}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          timelineRef.current.play();
        }}
      >
        Play
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          timelineRef.current.pause();
        }}
      >
        Pause
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          timelineRef.current.restart();
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default Controls;
