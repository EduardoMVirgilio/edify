import React from "react";
import ArtistCard from "./ArtistCard";
import Style from "../styles/ArtistList.module.css";
const ArtistList = ({ artists }) => {
  return (
    <ul className={Style.list}>
      {artists.map(({ id, name, images, external_urls }) => (
        <ArtistCard
          key={id}
          name={name}
          image={images[0].url}
          id={id}
          link={external_urls?.spotify}
        />
      ))}
    </ul>
  );
};

export default ArtistList;
