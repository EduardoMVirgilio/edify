import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "../styles/ArtistCard.module.css";
import { FaSpotify } from "react-icons/fa6";
const ArtistCard = ({ name, image, link, id }) => {
  const nav = useNavigate();
  return (
    <li onClick={() => nav(`/artist/${id}`)} className={Style.artist}>
      <picture>
        <img
          className={Style.image}
          src={image}
          alt={`Imagen de perfil de ${name}`}
        />
      </picture>
      <h2 className={Style.name}>{name}</h2>
      <a
        href={link}
        className={Style.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify />
      </a>
    </li>
  );
};

export default ArtistCard;
