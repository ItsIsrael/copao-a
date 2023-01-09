import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <p className="p__opensans">Plaza San Juan, 6 31500 TUDELA (Navarra)</p>
        <p className="p__opensans">Localización GPS:</p>
        <p className="p__opensans">42º 3' 49,22" N</p>
        <p className="p__opensans">1º 36' 33,32" O</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="tittle-logo"> COPAOÑA </h1>
        <p className="p__opensans">
          &quot;¡Esperamos que hayas aprendido algo nuevo y te animamos a
          seguir explorando todo lo que esta computadora tiene para
          ofrecer!&quot;
        </p>
        <img
          src={images.arrow}
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt="arrow"
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Información adicional</h1>
        <p className="p__opensans">Teléfono</p>
        <p className="p__opensans">848431340 </p>
        <p className="p__opensans">Correo Electrónico</p>
        <p className="p__opensans">copaoña@proton.me</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        2022 <i>COPAOÑA</i> . Derechos reservados.
      </p>
    </div>
  </div>
);

export default Footer;
