import React from "react";
import "./AboutUs.css";
import Footer from "./Footer";
import EmmanuelOlatejo from "../assets/EmmanuelOladejo.jpg";
import GeneralManager from "../assets/Generalmanager.jpg";
import OladejoIsreal from "../assets/OladejoIsrael.png";

function Aboutus() {
  return (

    <>
      <div className="container-fluid about pt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                <img className="img-fluid mt-auto mx-auto" src="https://i.redd.it/xstugfqgnl3c1.jpeg" alt="About Us" />
              </div>
            </div>
            <div className="col-lg-6 pb-5">
              <div className="mb-3 pb-2">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5">Enhancing Livestock Production with Quality Feed</h1>
              </div>
              <p className="mb-4">
                Animal Solution Feedmill (ASF) produces high-quality, animal-specific feed designed to enhance livestock 
                production among small, medium, and large-scale farmers in Nigeria at affordable prices. ASF provides 
                technical expertise and consultation services to help farmers with optimal feed formulation and nutrient 
                composition, supporting maximum livestock yield and growth. Our services help reduce high mortality 
                rates, increase productivity, and improve returns on investment in livestock production.
              </p>
              <div className="row gx-5 gy-4">
                <div className="col-sm-6">
                  <i className="fa fa-tractor display-1 text-secondary"></i>
                  <h4>Expert Consultation</h4>
                  <p className="mb-0">
                    We offer technical guidance to ensure farmers achieve optimal results through effective nutrition.
                  </p>
                </div>
                <div className="col-sm-6">
                  <i className="fa fa-apple-alt display-1 text-secondary"></i>
                  <h4>Affordable Pricing</h4>
                  <p className="mb-0">
                    Our affordable solutions make high-quality livestock feed accessible to all farmers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary facts py-5 mb-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: '600px' }}>
            <h6 className="text-white text-uppercase">Our Mission</h6>
            <h1 className="display-5 text-white">To Produce High-Quality, Affordable Feed</h1>
            <p className="text-white">
              Supporting the growth and health of livestock while enabling farmers to achieve maximum productivity 
              and profitability through innovation and sustainability.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
            <h6 className="text-primary text-uppercase">Our Vision</h6>
            <h1 className="display-5">Empowering Farmers Through Innovation</h1>
            <p>
              To be the leading provider of innovative, high-quality animal feed solutions that empower Nigerian 
              farmers to achieve sustainable, profitable, and responsible livestock production, supported by expert 
              technical advisory services.
            </p>
          </div>
        </div>
      </div>

      {/* -------------team */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
            <h6 className="text-primary text-uppercase">The Team</h6>
            <h1 className="display-5">We Are Professional Organic Farmers</h1>
          </div>
          <div className="row g-5">
            {[EmmanuelOlatejo, GeneralManager, OladejoIsreal].map((image, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="row g-0">
                  <div className="col-10">
                    <div className="position-relative">
                      <img className="img-fluid w-100" src={image} alt={`Team ${index + 1}`} />
                      <div
                        className="position-absolute start-0 bottom-0 w-100 py-3 px-4"
                        style={{ background: 'rgba(52, 173, 84, 0.85)' }}
                      >
                        <h4 className="text-white">Farmer Name</h4>
                        <span className="text-white">Designation</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                      {['twitter', 'facebook-f', 'linkedin-in', 'instagram'].map((social, idx) => (
                        <a
                          className="btn btn-square rounded-circle bg-white"
                          href="#"
                          key={idx}
                        >
                          <i className={`fab fa-${social} text-secondary`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>


  );
}

export default Aboutus;
