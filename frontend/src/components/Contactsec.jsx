import React from 'react'
import './Contactsec.css'
// import callicon from '../assets/callicon.png'
// import emailicon from '../assets/emailicon.png'
// import locationicon from '../assets/locationicon.png'

function Contactsec() {
    return (
        <div className='cont-fluid content-parent'>
            <div className='row justify-content-between'>
                <div className='col col-lg-4 col-sm-6 text-center contactsec__col'>
                    <div className='mb-3 contactIcon-box'>
                        {/* <img src={callicon} alt="call icon" /> */}
                        <i class="fa-solid fa-phone contactIcon"></i>
                    </div>
                    <div>
                        <a href="tel: +25078-830-3572" className='contactsec-in'>
                            <h3 className='mb-4'>Give us a call</h3>
                            <p> (+234)8164515180</p>
                        </a>
                    </div>
                </div>
                <div className='col col-md-6 col-lg-4 text-center contactsec__col'>
                    <div className='mb-3 contactIcon-box'>
                        {/* <img src={emailicon} alt="call icon" /> */}
                        <i class="fa-solid fa-envelope contactIcon"></i>
                    </div>
                    <div >
                        <a href='mailto:info@academicbridge.xyz' className='contactsec-in'>
                            <h3 className='mb-4'>Drop us a line</h3>
                            <p> animalsolutionfeedmill@gmail.com </p>
                        </a>
                    </div>
                </div>
                <div className='col col-md-6 col-lg-4 text-center contactsec__col'>
                    <div className='mb-3  contactIcon-box'>
                        {/* <img src={locationicon} alt="call icon" /> */}
                        <i class="fa-solid fa-location-dot contactIcon"></i>
                    </div>
                    <div >
                        <h3 className='mb-4'>Visit our office</h3>
                        <p>4, Gbekuba-Araromi road, Apata, Ibadan, Nigeria</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactsec