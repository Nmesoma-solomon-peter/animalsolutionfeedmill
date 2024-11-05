import React from 'react'
import "./Footer.css"
import logo from '../assets/asflogo.png'

function Footer() {
    return (
        <div className='container-fluid footer'>
            <div className='row'>
                <div className='col-lg-5 col-md-4 col-sm-12'>
                    <img src={logo} alt="company logo" className='footer-logo' />
                </div>
                <div className='col-lg-7 col-md-8 col-sm-12 footersec1div2' >
                    <h3 className='footer-first-h3'> Professional & modern, a theme designed to help
                        your business stand out from the rest.</h3>
                </div>
            </div>

            <div className='row footer-second'>
                <div className='col col-lg-5 col-sm-12 '>
                    <p className='footer-secondsec-p'>Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus. In vitae sapien viverra est Duo ei ullum inani senserit.
                    </p>
                    <div className='footer-socials'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-x"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className='col-lg-7 col-sm-12'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-12'>
                            <h3 className='footer-tabHead'>Useful Link
                            </h3>
                            <p><a href="http://">company</a></p>
                            <p> <a href="http://">About</a></p>
                            <p><a href="http://">Contact</a></p>
                        </div>
                        <div className='col-lg-4 col-sm-12'>
                            <h3 className='footer-tabHead'>Working Time
                            </h3>
                            <p>Mon - Fri: 9.00am - 5.00pm</p>
                            <p>Saturday: 10.00am - 6.00pm</p>
                            <p>Sunday Closed</p>
                        </div>
                        <div className='col-lg-4 col-sm-12'>
                            <h3 className='footer-tabHead'>Our address
                            </h3>
                            <p>Old Westbury 256, New York
                                11201, United States</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5 '></div>
                <div className='col-lg-7'>
                    <div className='copyright-box'>
                        <div>Terms & Conditions |
                            Privacy Policy
                        </div>
                        <div>
                            Copyright © 2024 Agrimo, All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer