import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Cotize su proyecto</span>
          <span className="secondaryText">
           Reserve una cita con nosotros para cotizar un proyecto o servicio que requiera.
            <br />
           Soluciones Rapidas y efectivas
          </span>
          <button className="button" href>
            <a href="https://calendly.com/dardocantopalacios/1hora">reservar una cita</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
