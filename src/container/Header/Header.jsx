import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Raspberry Pi 4" />
      <h1 className="app__header-h1">Raspberry Pi: el cerebro detrás de tus proyectos de tecnología</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Somos estudiantes de informatica y tenemos 2 proyectos para presentaros.
      </p>
      <a href="#acercade" className="custom__button">
        Conocer más
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img"  style={{
        borderRadius: '30px'
      }} />
    </div>
  </div>
);

export default Header;
