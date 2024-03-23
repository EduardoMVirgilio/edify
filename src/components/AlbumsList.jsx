import React from "react";
import AlbumCard from "./AlbumCard";

const AlbumsList = ({ albums }) => {
  return (
    <ul>
      {albums.map((album) => (
        <AlbumCard {...album} />
      ))}
    </ul>
  );
};

export default AlbumsList;
