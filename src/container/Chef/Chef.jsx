import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img style={{
        borderRadius: 40
      }} src={images.ing} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Testimonio" />
      <h1 className="headtext__cormorant">Utilizó Wireguard VPN</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Después de evaluar varias opciones, decidimos utilizar WireGuard
            debido a su sencillez y rendimiento. 
          </p>
        </div>
        <p className="p__opensans">
          El proyecto resultó ser un éxito rotundo. Los empleados pudieron
          acceder a los recursos de la red interna de manera segura y sin
          problemas, y el rendimiento de la conexión VPN fue excelente. 
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Santiago Martínez - Dpt. Informática</p>
        <img style={{
          width: 160,
          height: 60
        }} src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
