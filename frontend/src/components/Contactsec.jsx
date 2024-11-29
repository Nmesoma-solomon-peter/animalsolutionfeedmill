import React from 'react';
import './Contactsec.css';
// import callicon from '../assets/callicon.png' // Uncomment if using custom call icon
// import emailicon from '../assets/emailicon.png' // Uncomment if using custom email icon
// import locationicon from '../assets/locationicon.png' // Uncomment if using custom location icon

function Contactsec() {
    return (
        <div className='cont-fluid content-parent'> {/* Container for the contact section */}
            <div className='row justify-content-between'> {/* Row for layout with evenly spaced columns */}
                {/* Call Section */}
                <div className='col col-lg-4 col-sm-6 text-center contactsec__col'> {/* Responsive column for "Give us a call" */}
                    <div className='mb-3 contactIcon-box'> {/* Icon container */}
                        {/* Placeholder for call icon */}
                        {/* <img src={callicon} alt="call icon" /> */} {/* Uncomment to use custom icon */}
                        <i className="fa-solid fa-phone contactIcon"></i> {/* FontAwesome call icon */}
                    </div>
                    <div>
                        <a href="tel: +25078-830-3572" className='contactsec-in'> {/* Link to make a call */}
                            <h3 className='mb-4'>Give us a call</h3> {/* Heading for call */}
                            <p>(+234)8164515180</p> {/* Contact phone number */}
                        </a>
                    </div>
                </div>

                {/* Email Section */}
                <div className='col col-md-6 col-lg-4 text-center contactsec__col'> {/* Responsive column for "Drop us a line" */}
                    <div className='mb-3 contactIcon-box'> {/* Icon container */}
                        {/* Placeholder for email icon */}
                        {/* <img src={emailicon} alt="email icon" /> */} {/* Uncomment to use custom icon */}
                        <i className="fa-solid fa-envelope contactIcon"></i> {/* FontAwesome email icon */}
                    </div>
                    <div>
                        <a href='mailto:info@academicbridge.xyz' className='contactsec-in'> {/* Link to send email */}
                            <h3 className='mb-4'>Drop us a line</h3> {/* Heading for email */}
                            <p>animalsolutionfeedmill@gmail.com</p> {/* Contact email address */}
                        </a>
                    </div>
                </div>

                {/* Location Section */}
                <div className='col col-md-6 col-lg-4 text-center contactsec__col'> {/* Responsive column for "Visit our office" */}
                    <div className='mb-3 contactIcon-box'> {/* Icon container */}
                        {/* Placeholder for location icon */}
                        {/* <img src={locationicon} alt="location icon" /> */} {/* Uncomment to use custom icon */}
                        <i className="fa-solid fa-location-dot contactIcon"></i> {/* FontAwesome location icon */}
                    </div>
                    <div>
                        <h3 className='mb-4'>Visit our office</h3> {/* Heading for location */}
                        <p>4, Gbekuba-Araromi road, Apata, Ibadan, Nigeria</p> {/* Office address */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactsec;
