import React from "react";
import Iframe from "react-iframe";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Encuéntranos
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Pl. San Juan, 6, 31500 Tudela, Navarra
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Teléfono
        </p>
        <p className="p__opensans">848431340</p>
        <p className="p__opensans">copaoña@proton.me</p>
      </div>
      {/* <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        
      </button> */}
    </div>

    <div className="app__wrapper_img">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11848.179255974628!2d-1.6093153!3d42.0636588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd07d009364f0bada!2sCIP%20ETI%2C%20San%20Juan.%20Plaza%20San%20Juan%20N%C2%BA6!5e0!3m2!1ses!2ses!4v1673262123032!5m2!1ses!2ses"
        width="400"
        height="400"
        id="map"
        className=""
      />
    </div>
  </div>
);

export default FindUs;
