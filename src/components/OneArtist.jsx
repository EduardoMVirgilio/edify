import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "../styles/OneArtist.module.css";
const OneArtist = ({ name, image, link, id }) => {
  const nav = useNavigate();
  return (
    <section onClick={() => nav(`/artist/${id}`)} className={Style.artist}>
      <picture className={Style.image}>
        <img src={image} alt={`Imagen de perfil de ${name}`} />
      </picture>
      <h2 className={Style.name}>{name}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer"></a>
    </section>
  );
};

export default OneArtist;
