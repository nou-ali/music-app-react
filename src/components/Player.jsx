import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range"></input>
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-music-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="skip-music-forward" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
