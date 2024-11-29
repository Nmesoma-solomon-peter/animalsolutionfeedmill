import React from 'react'; // Import React library
import Map from './Map'; // Import the Map component
import Marque from './Marque'; // Import the Marque component
import OtherHero from './OtherHero'; // Import the OtherHero component
import Contactsec from './Contactsec'; // Import the Contactsec component
import ContactusForm from './ContactusForm'; // Import the ContactusForm component

// Main component for the "Contact Us" page
function Contactus() {
  return (
    <>
      {/* Hero section with a title and subtitle */}
      <OtherHero h4={"Contact us"} p={"contact"} /> 
      
      {/* Section displaying contact information */}
      <Contactsec />
      
      {/* Form for users to submit inquiries */}
      <ContactusForm />
      
      {/* Scrolling marque section for additional highlights */}
      <Marque />
      
      {/* Map component to display location */}
      <Map />
    </>
  );
}

export default Contactus; // Export the Contactus component as default
