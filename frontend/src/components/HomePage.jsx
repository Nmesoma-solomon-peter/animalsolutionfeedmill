import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Marque from './Marque'
// import Whatwedobrief from './Whatwedobrief'
import Whowearesec from './Whowearesec'
import Ourmission from './Ourmission'
import Aboutsec from './Aboutsec'
import OurTeam from './OurTeam'
import Ourvision from './Ourvision'

function HomePage() {
  return (
    <>
        <Hero />
        {/* <Whowearesec/> */}
        <Aboutsec />
        <Marque />
        {/* <Whatwedobrief/> */}
        <Ourmission />
        <Ourvision />
        <OurTeam />
    </>
  )
}

export default HomePage