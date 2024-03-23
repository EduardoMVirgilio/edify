import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <header>
      <h1 onClick={() => nav("/")}>Edify</h1>
    </header>
  );
};

export default Header;
