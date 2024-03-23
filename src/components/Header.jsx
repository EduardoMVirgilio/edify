import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "../styles/Header.module.css";
const Header = () => {
  const nav = useNavigate();
  return (
    <header className={Style.mainHeader}>
      <h1 onClick={() => nav("/")}>Edify</h1>
      <p>Conoce algunos de mis artistas favoritos</p>
    </header>
  );
};

export default Header;
