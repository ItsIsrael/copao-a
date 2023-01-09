import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div
    className="app__specialMenu flex__center section__padding"
    id="Servicios"
  >
    <div className="app__specialMenu-title">
      <SubHeading title="Proyectos" />
      <h1 className="headtext__cormorant">Nuestros servicios</h1>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <p className="app__specialMenu-menu_heading">DOCKER + WIREGUARD</p>
        <img src={images.arrow} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          WireGuard es una herramienta de VPN de código abierto que se utiliza
          para establecer conexiones seguras entre dispositivos a través de
          Internet. <br></br>Una forma de utilizar Docker y WireGuard juntos es
          crear un contenedor de Docker que ejecute WireGuard y utilice ese
          contenedor como un servidor VPN. De esta manera, puedes aprovechar la
          facilidad de uso y la portabilidad de Docker para configurar y
          administrar fácilmente tu servidor VPN.
        </p>
        <button type="button" className="custom__button">
          Más información
        </button>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__aboutus-content_about">
        <p className="app__specialMenu-menu_heading">DOCKER + NEXTCLOUD</p>
        <img src={images.arrow} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Una forma de utilizar Docker y Nextcloud juntos es crear un contenedor
          de Docker que ejecute Nextcloud y utilizar ese contenedor como tu
          plataforma de almacenamiento en la nube. De esta manera, puedes
          aprovechar la facilidad de uso y la portabilidad de Docker para
          configurar y administrar fácilmente tu plataforma de almacenamiento en
          la nube.
        </p>
        <button type="button" className="custom__button">
          Más información
        </button>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
