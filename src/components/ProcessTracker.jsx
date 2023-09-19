import React from "react";
import "./ProcessTracker.css";
const ProcessTracker = ({ progress }) => {
  return (
    <div className="process-tracker">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProcessTracker;
