import React from 'react'
import "./Footer.css"
import logo from '../assets/asflogo.png'

/**
 * Footer Component
 * 
 * Renders the main footer section of the Animal Solution Feed Mill website.
 * The footer is divided into three main sections:
 * 1. Logo and tagline
 * 2. Company information and navigation
 * 3. Copyright and legal information
 */
function Footer() {
    return (
        // Main footer container with fluid width
        <div className='container-fluid footer'>
            {/* Top Section: Logo and Tagline */}
            <div className='row'>
                {/* Logo Column */}
                <div className='col-lg-5 col-md-4 col-sm-12'>
                    <img src={logo} alt="Animal Feed Mill logo" className='footer-logo' />
                </div>
                {/* Tagline Column */}
                <div className='col-lg-7 col-md-8 col-sm-12 footersec1div2'>
                    <h3 className='footer-first-h3'>
                        Dedicated to nourishing livestock and enhancing agricultural growth in Nigeria.
                    </h3>
                </div>
            </div>

            {/* Middle Section: Company Description, Social Media, and Information */}
            <div className='row footer-second'>
                {/* Left Column: Company Description and Social Media Icons */}
                <div className='col col-lg-5 col-sm-12'>
                    <p className='footer-secondsec-p'>
                        At Animal Solution Feed Mill, we're committed to providing high-quality feed that supports healthier, more productive livestock. Join us in creating a sustainable future in agriculture.
                    </p>
                    {/* Social Media Links */}
                    <div className='footer-socials'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-x"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                {/* Right Column: Quick Links, Hours, and Location */}
                <div className='col-lg-7 col-sm-12'>
                    <div className='row'>
                        {/* Quick Links Navigation */}
                        <div className='col-lg-4 col-sm-12'>
                            <h3 className='footer-tabHead'>Quick Links</h3>
                            <p><a href="http://">Home</a></p>
                            <p><a href="http://">Our Products</a></p>
                            <p><a href="http://">Contact Us</a></p>
                        </div>
                        {/* Business Hours */}
                        <div className='col-lg-4 col-sm-12'>
                            <h3 className='footer-tabHead'>Operating Hours</h3>
                            <p>Mon - Fri: 9:00am - 6:00pm</p>
                            <p>Saturday: 10:00am - 4:00pm</p>
                            <p>Sunday: Closed</p>
                        </div>
                        {/* Office Location */}
                        <div className='col-lg-4 col-sm-12'>
                            <h3 className='footer-tabHead'>Our Office</h3>
                            <p>Animal Feed Mill Headquarters<br />
                               256 Old Westbury, New York,<br />
                               11201, United States</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Section: Copyright and Legal Information */}
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