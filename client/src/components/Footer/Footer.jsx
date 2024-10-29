import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
           Mi vision es hacer mi trabajo con pasion y responsabilidad
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Informacion</span>
          <span className="secondaryText">La plata,Buenos aires, Argentina</span>
          <div className="flexCenter f-menu">
            <span>Proyectos</span>
            <span>Servicios</span>
           <span>Acerca de mi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
