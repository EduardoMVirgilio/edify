import React from "react";
import AlbumCard from "./AlbumCard";
import Style from "../styles/AlbumsList.module.css";

const AlbumsList = ({ albums }) => {
  return (
    <ul className={Style.list}>
      {albums.map((album) => (
        <AlbumCard {...album} />
      ))}
    </ul>
  );
};

export default AlbumsList;
