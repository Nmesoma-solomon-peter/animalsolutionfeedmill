import React from 'react'
import "./Blogcard.css"
import feedplate from '../assets/feedplate.jpg'


function Blogcard(props) {
    
    return (
        <>
        
            <div className="col-lg-4">
                <div className='col-innerbox'>
                    <div className='cardimagebox'>
                        <img src={`${props.imageURL}`} alt="" className='cardimage' />
                    </div>
                    <div>
                        <div className='card-textbox'>
                            <div className='card-animalnamebox'>
                                <p className='card-animalname'>{props.animal}</p>
                            </div>
                            <div>
                                <h3 className='mb-4'>{props.title}</h3>
                            </div>
                            <div className='cardperson-group'>
                                <i class="fa-solid fa-user-tie"></i>
                                <p>{props.person}</p> .
                                <p>{props.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogcard