import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contacto Directo</span>
          <span className="primaryText">Respuestas instantaneas</span>
          <span className="secondaryText">
Estoy  siempre preparado para nuevos proyectos ,
Siempre listo para ofrecerle el mejor servicio en tiempo record.{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Llamar</span>
                
  <span className="secondaryText">+5492215449934</span>

                 
                  </div>
                </div>
                   <a href="tel:+5492215449934" className="flexCenter button"> <div className="flexCenter button">Llamar ahora</div></a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">Whatsapp</span>
                  </div>
                </div>
                <a
        href="https://wa.me/5492215449934" className="flexCenter button"><div className="flexCenter button">Chat now</div> </a>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Linkendin</span>
                    <span className="secondaryText">Dardo canto</span>
                  </div>
                </div>
                          <a
        href="https://www.linkedin.com/in/dardo-edgar-canto-palacios-a096b548" className="flexCenter button"><div className="flexCenter button">VER</div> </a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">TIKTOK</span>
                    <span className="secondaryText">Dardo Canto</span>
                  </div>
                </div>
        <a href="https://www.tiktok.com/@dardocanto" className="flexCenter button"><div className="flexCenter button">ver</div> </a>
              </div>



           </div>

           <div className="flexStart row">

             <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Youtube</span>
                    <span className="secondaryText">Dardo Canto palacios</span>
                  </div>
                </div>
                <a href="https://www.youtube.com/@DardoEdgarCantoPalacios" className="flexCenter button"><div className="flexCenter button">ver</div> </a>
              </div>
           </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./perfiltrabajo.JPG" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
