import React from "react";
import { Link } from "react-router-dom";
import miImagen from "../assets/header-img.png";
import "./_Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-img">
        <img src={miImagen} alt="a" />
      </div>
      <div className="header-text">
        <h1 className="titulo">Tarjetas virtuales</h1>
        <p className="header-p">
          ¿Estás listo para revolucionar la forma en que invitas a eventos y cumpleaños?
        </p>
        <p className="header-p2">
          ¡Con nuestras increíbles tarjetas de cumpleaños virtuales, la fiesta comienza desde el primer clic! 🚀
        </p>
        <Link to="/Modelos" className="header-btn">
          Ver modelos
        </Link>
      </div>
    </div>
  );
};

export default Header;
