import React from 'react'
import "./Header.css"
import logo from '../assets/asflogo.png'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="site logo" className='header-logo' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-NavLink active" aria-current="page" href="#">Home</a> */}
                                <NavLink to="/" className="nav-NavLink">Home</NavLink>

                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-NavLink" href="#">Services</a> */}
                                <NavLink to="/services" className="nav-NavLink">Services</NavLink>

                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-NavLink" href="#">About us</a> */}
                                <NavLink to="/aboutus" className="nav-NavLink">About us</NavLink>

                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-NavLink" href="#">Blog</a> */}
                                <NavLink to="/blog" className="nav-NavLink">Blog</NavLink>

                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-NavLink" href="#">Contact us</a> */}
                                <NavLink to="/contactus" className="nav-NavLink">Contact us</NavLink>

                            </li>
                        </ul>
                        <button type="button" className="btn btn-secondary btn-lg headerBtn">Get in Touch</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header