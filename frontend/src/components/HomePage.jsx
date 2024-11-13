import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Marque from './Marque'
import Whatwedobrief from './Whatwedobrief'
import Whowearesec from './Whowearesec'

function HomePage() {
  return (
    <>
        <Hero />
        <Whowearesec/>
        <Marque />
        <Whatwedobrief/>
    </>
  )
}

export default HomePage