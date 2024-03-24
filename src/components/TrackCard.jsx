import React from "react";
import Style from "../styles/TrackCard.module.css";
import { useQuery } from "@tanstack/react-query";
import { getLyricBySong } from "../services/tracks.services";
const TrackCard = ({ name, duration, preview, track_number, artist }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["lyric", track_number],
    queryFn: () => getLyricBySong(name, artist.name),
  });
  console.log(data);
  return (
    <li className={Style.track}>
      <header>
        <span>{track_number}</span>
        <h2>{name}</h2>
        <p>{duration} min</p>
      </header>

      <audio
        src={preview}
        onPlay={(e) => (e.target.volume = 0.2)}
        controls
      ></audio>
    </li>
  );
};

export default TrackCard;
