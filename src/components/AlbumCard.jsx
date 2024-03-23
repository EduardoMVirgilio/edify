import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumCard = ({ id, name, images, url, release_date, tracks }) => {
  const nav = useNavigate();
  return (
    <li onClick={() => nav(`/albums/${id}`)}>
      <picture>
        <img src={images} alt={`Imagen de perfil de ${name}`} />
      </picture>
      <span>{release_date.toLocaleDateString()}</span>
      <span>{tracks}</span>
      <h2>{name}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer"></a>
    </li>
  );
};

export default AlbumCard;
