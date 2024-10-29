import React from 'react'
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Value2 from "../components/Value2/Value";
import Value3 from "../components/value3/Value";
import Value4 from "../components/value4/Value";


const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>
    <Companies />
    <Residencies/>
    <Value/>
        <Value2/>
            <Value3/>
                <Value4/>
    <Contact/>
    <GetStarted/>
  </div>
  )
}

export default Website