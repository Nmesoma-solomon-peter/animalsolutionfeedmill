import React from 'react'
import Map from "./Map"
import Marque from './Marque'
import OtherHero from './OtherHero'
import Contactsec from './Contactsec'
import ContactusForm from './ContactusForm'

function Contactus() {
  return (
    <>
      <OtherHero h4={"Contact us"} p={"contact"}/>
      <Contactsec />
      <ContactusForm />
      <Marque />
      <Map />
    </>
  )
}

export default Contactus