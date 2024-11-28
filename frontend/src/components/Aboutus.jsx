import React from "react";
import "./AboutUs.css";
import OtherHero from "./OtherHero";
import Ourmission from "./Ourmission";
import Aboutsec from "./Aboutsec";
import OurTeam from "./OurTeam";
import Ourvision from "./Ourvision";

function Aboutus() {
  return (

    <>
      <OtherHero h4={"About Us"} p={"About"}/>
      <Aboutsec />
      <Ourmission/>
      <Ourvision />
      {/* -------------team */}
      <OurTeam />
    </>


  );
}

export default Aboutus;
