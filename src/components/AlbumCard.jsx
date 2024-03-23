import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "../styles/AlbumCard.module.css";
const AlbumCard = ({ id, name, images, url, release_date, tracks }) => {
  const nav = useNavigate();
  return (
    <li onClick={() => nav(`/albums/${id}`)} className={Style.album}>
      <picture className={Style.image}>
        <img src={images} alt={`Imagen de perfil de ${name}`} />
      </picture>
      <span className={Style.date}>{release_date.toLocaleDateString()}</span>
      <span className={Style.tracks}>{tracks}</span>
      <h2 className={Style.name}>{name}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer"></a>
    </li>
  );
};

export default AlbumCard;
