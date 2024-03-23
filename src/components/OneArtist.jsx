import React from "react";
import { useNavigate } from "react-router-dom";

const OneArtist = ({ name, image, link, id }) => {
  const nav = useNavigate();
  return (
    <section onClick={() => nav(`/artist/${id}`)}>
      <picture>
        <img src={image} alt={`Imagen de perfil de ${name}`} />
      </picture>
      <h2>{name}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer"></a>
    </section>
  );
};

export default OneArtist;
