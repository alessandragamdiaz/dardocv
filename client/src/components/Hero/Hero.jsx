import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
import CV from "../../../public/DARDOCV.pdf";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Contratista <br />
             Profesional
              <br /> de Obras
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Obtenga un presupuesto en el menor tiempo posible </span>
              
            <span>Obras terminadas en tiempo record</span>
          </div>

          <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1} end={50} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Trabajos Realizados</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1} end={100} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Clientes satisfechos</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} /> <span>Años+</span>
              </span>
              <span className="secondaryText">Experencia laboral</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >

       
    <img src="./perfilcurri.JPG" alt="houses" />

 
        
              
  
          </motion.div>
            <div style={{flex:1, flexDirection:'column'}}>   <a href={CV} download className='btn orangeText'>Descargar CV</a></div>
       
        </div>
          
      </div>
    </section>
  );
};

export default Hero;
