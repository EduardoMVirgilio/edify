import React from "react";
import TrackCard from "./TrackCard";
import Style from "../styles/TracksList.module.css";

const TracksList = ({ tracks, artist }) => {
  return (
    <ul className={Style.list}>
      {tracks.map((track, index) => (
        <TrackCard key={index} {...track} artist={artist} />
      ))}
    </ul>
  );
};

export default TracksList;
