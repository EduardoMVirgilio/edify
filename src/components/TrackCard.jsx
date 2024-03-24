import React from "react";
import Style from "../styles/TrackCard.module.css";
const TrackCard = ({ name, duration, preview, track_number }) => {
  return (
    <li className={Style.track}>
      <header>
        <span>{track_number}</span>
        <h2>{name}</h2>
        <p>{duration} min</p>
      </header>
      <audio src={preview} controls></audio>
    </li>
  );
};

export default TrackCard;
