import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="Servicios">
    <div className="app__specialMenu-title">
      <SubHeading title="Proyectos" />
      <h1 className="headtext__cormorant">Nuestros servicios</h1>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <p className="app__specialMenu-menu_heading">Docker + Wireguard-VPN</p>
        <img src={images.arrow} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Somos <i>COPAOÑA</i> , una empresa dedicada a la creación de proyectos
          con Raspberry Pi. Fundada en 2021, nuestra misión es fomentar el
          aprendizaje y el uso de la tecnología en todos los ámbitos de la vida.
        </p>
        <button type="button" className="custom__button">
          Más información
        </button>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__aboutus-content_about">
        <p className="app__specialMenu-menu_heading">Docker + Wireguard-VPN</p>
        <img src={images.arrow} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Somos <i>COPAOÑA</i> , una empresa dedicada a la creación de proyectos
          con Raspberry Pi. Fundada en 2021, nuestra misión es fomentar el
          aprendizaje y el uso de la tecnología en todos los ámbitos de la vida.
        </p>
        <button type="button" className="custom__button">
          Más información
        </button>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
