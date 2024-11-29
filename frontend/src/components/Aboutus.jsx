import React from "react";

// Importing necessary CSS and component files for the About Us page
import "./AboutUs.css";
import OtherHero from "./OtherHero";
import Ourmission from "./Ourmission";
import Aboutsec from "./Aboutsec";
import OurTeam from "./OurTeam";
import Ourvision from "./Ourvision";

// Define the Aboutus functional component
function Aboutus() {
  return (
    <>
      {/* Hero section with a title and subtitle */}
      <OtherHero h4={"About Us"} p={"About"} />
      
      {/* Section introducing the organization */}
      <Aboutsec />
      
      {/* Section for the organization's mission */}
      <Ourmission />
      
      {/* Section for the organization's vision */}
      <Ourvision />
      
      {/* Team section */}
      <OurTeam />
    </>
  );
}

// Export the Aboutus component for use in other parts of the application
export default Aboutus;
