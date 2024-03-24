import React from "react";
import { FaSpotify } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Style from "../styles/OneAlbum.module.css";
const OneAlbum = ({ name, artist, url, release_date, total_tracks, image }) => {
  return (
    <section className={Style.album}>
      <picture className={Style.image}>
        <img src={image} alt={`Portada del album ${name}`} />
      </picture>
      <header className={Style.info}>
        <h2>{name}</h2>
        <span>{release_date}</span>
        <span>{total_tracks} Canciones</span>
        <a
          href={url}
          className={Style.share}
          target="_blank"
          rel="noopener noreferer"
        >
          <FaSpotify />
        </a>
        <nav style={{ position: "relative" }}>
          <Link to={`/artist/${artist.id}`} className={Style.artist}>
            {artist.name}
          </Link>
          <a
            href={artist.url}
            className={Style.shareArtist}
            target="_blank"
            rel="noopener noreferer"
          >
            <FaSpotify />
          </a>
        </nav>
      </header>
    </section>
  );
};

export default OneAlbum;
