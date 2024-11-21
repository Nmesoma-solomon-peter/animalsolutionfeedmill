import React from 'react'
import "./Marque.css"
import Marquee from "react-fast-marquee";


function Marque() {
    return (
        <>
            <Marquee className='marquee-Parent'>
                <h1  className='marquee-text'> <span className='star'>*</span> livestock <span className='star'> <span className='star'>*</span> Agriculture  <span className='star'>*</span> Livestock  <span className='star'>*</span> Quality  <span className='star'>*</span> Feeds  <span className='star'>*</span> Fish  <span className='star'></span> Feedmill</span></h1>
            </Marquee>
            {/*livestock , fish, feedmill, feeds,*/}
        </>
    )
}

export default Marque