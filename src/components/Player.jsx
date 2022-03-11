import React from "react";

const Player = () => {
  return (
    <div className="Player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range"></input>
        <p>End Time</p>
      </div>
      <div className="play-control"></div>
    </div>
  );
};

export default Player;
