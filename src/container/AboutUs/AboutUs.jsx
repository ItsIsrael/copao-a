import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="acercade"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.R} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Acerca de nosotros</h1>
        <img src={images.arrow} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Somos <i>COPAOÑA</i> , una empresa dedicada a la creación de proyectos
          con Raspberry Pi. Fundada en 2021, nuestra misión es fomentar el
          aprendizaje y el uso de la tecnología en todos los ámbitos de la vida.
        </p>
        <button type="button" className="custom__button">
          Saber más
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.circuitos} alt="acerca de nosotros" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra historia</h1>
        <img src={images.arrow} alt="Nuestra historia" className="spoon__img" />
        <p className="p__opensans">
          Nuestro equipo está compuesto por expertos en Raspberry Pi y
          electrónica, con una amplia experiencia en el desarrollo de proyectos
          innovadores y creativos. Nos apasiona lo que hacemos y nos encanta
          compartir nuestro conocimiento y habilidades con aquellos que quieran
          aprender más sobre este fascinante campo.
        </p>
        <button type="button" className="custom__button">
          Saber más
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
