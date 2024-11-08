import React from 'react'
import "./Footer.css"
import logo from '../assets/asflogo.png'

function Footer() {
    return (
        <div className='container-fluid footer'>
            <div className='row'>
                <div className='col-lg-5 col-md-4 col-sm-12'>
                    <img src={logo} alt="Animal Feed Mill logo" className='footer-logo' />
                </div>
                <div className='col-lg-7 col-md-8 col-sm-12 footersec1div2'>
                    <h3 className='footer-first-h3'>
                        Dedicated to nourishing livestock and enhancing agricultural growth in Nigeria.
                    </h3>
                </div>
            </div>

            <div className='row footer-second'>
                <div className='col col-lg-5 col-sm-12'>
                    <p className='footer-secondsec-p'>
                        At Animal Solution Feed Mill, we’re committed to providing high-quality feed that supports healthier, more productive livestock. Join us in creating a sustainable future in agriculture.
                    </p>
                    <div className='footer-socials'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-x"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className='col-lg-7 col-sm-12'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-12'>
                            <h3 className='footer-tabHead'>Quick Links</h3>
                            <p><a href="http://">Home</a></p>
                            <p><a href="http://">Our Products</a></p>
                            <p><a href="http://">Contact Us</a></p>
                        </div>
                        <div className='col-lg-4 col-sm-12'>
                            <h3 className='footer-tabHead'>Operating Hours</h3>
                            <p>Mon - Fri: 9:00am - 6:00pm</p>
                            <p>Saturday: 10:00am - 4:00pm</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <div className='col-lg-4 col-sm-12'>
                            <h3 className='footer-tabHead'>Our Office</h3>
                            <p>Animal Feed Mill Headquarters<br />
                               256 Old Westbury, New York,<br />
                               11201, United States</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='row'>
                <div className='col-lg-5'></div>
                <div className='col-lg-7'>
                    <div className='copyright-box'>
                        <div>Terms & Conditions | Privacy Policy</div>
                        <div>Copyright © 2024 Animal Solution Feed Mill, All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
