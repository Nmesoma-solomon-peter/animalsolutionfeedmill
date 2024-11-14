import React from 'react'
import './OtherHero.css'

function OtherHero(props) {
  return (
    <div className='heroImage'>
        <div className='hero__text'>
            <h4 className='hero__h4'>{props.h4}</h4>
            <p><a href="/" className='hero__Homelink'>Home</a> | {props.p}</p>
        </div>
    </div>
  )
}

export default OtherHero