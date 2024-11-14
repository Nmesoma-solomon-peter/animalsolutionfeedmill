import React from 'react'
import "./Marque.css"
import Marquee from "react-fast-marquee";


function Marque() {
    return (
        <>
            <Marquee className='marquee-Parent'>
                <h1  className='marquee-text'> <span className='star'>*</span> Agriculture  <span className='star'>*</span> Livestock  <span className='star'>*</span> Organic  <span className='star'>*</span> Feeds</h1>
            </Marquee>
        </>
    )
}

export default Marque