import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "../styles/AlbumCard.module.css";
import { FaSpotify } from "react-icons/fa6";
const AlbumCard = ({ id, name, image, url, release_date, tracks }) => {
  const nav = useNavigate();
  return (
    <li onClick={() => nav(`/album/${id}`)} className={Style.album}>
      <picture className={Style.image}>
        <img src={image} alt={`Imagen de perfil de ${name}`} />
      </picture>
      <span className={Style.date}>{release_date.toLocaleDateString()}</span>
      <span className={Style.tracks}>{tracks}</span>
      <h2 className={Style.name}>{name}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <FaSpotify />
      </a>
    </li>
  );
};

export default AlbumCard;
