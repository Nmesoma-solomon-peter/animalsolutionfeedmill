import React from "react";
import "./AboutUs.css";
import Footer from "./Footer";
import EmmanuelOlatejo from "../assets/EmmanuelOladejo.jpg";
import GeneralManager from "../assets/Generalmanager.jpg";
import OladejoIsreal from "../assets/OladejoIsrael.png";

function Aboutus() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <h2>Brief background</h2>
      <p>
        Animal Solution Feedmill (ASF) produces high-quality, animal-specific
        feed designed to enhance livestock production among small, medium, and
        large-scale farmers in Nigeria at affordable prices. The company
        provides technical expertise and consultation services to help farmers
        with optimal feed formulation (ingredient mixtures) and nutrient
        composition, supporting maximum livestock yield and growth. Through
        effective nutrition, ASF's services help to reduce high mortality rates,
        increase productivity, and improve returns on investment in livestock
        production.
      </p>
      <h2>Our Mission</h2>
      <p>
        To produce high-quality, affordable animal feed that supports the growth
        and health of livestock, enabling farmers to achieve maximum
        productivity and profitability. We are committed to innovation,
        sustainability, and providing expert guidance to help farmers thrive in
        a competitive agricultural environment.
      </p>
      <h2>Our Vision</h2>
      <p>
        To be the leading provider of innovative, high-quality animal feed
        solutions that empower Nigerian farmers to achieve sustainable,
        profitable, and responsible livestock production, supported by expert
        technical advisory services.
      </p>
      <h2>Meet the Team</h2>
      <div className="card-container">
        <div className="card">
          <img src={EmmanuelOlatejo} alt="Emmanuel Oladejo" />
          <div className="card-overlay">
            <h2 className="card-title">
              <b>Emmanuel OLADEJO</b>
            </h2>
            <p className="card-description">
              Emmanuel Oladejo, PhD Co-founder/ Director of Technical Services
            </p>
          </div>
        </div>
        <div className="card1">
          <img src={OladejoIsreal} alt=" Israel Oladejo" />
          <div className="card-overlay">
            <h2 className="card-title">
              <b>Israel OLADEJO</b>
            </h2>
            <p className="card-description">
              Mr. Israel Oladejo Cofounder/Operations and Strategy Lead
            </p>
          </div>
        </div>
        <div className="card2">
          <img src={GeneralManager} alt="General Manager" />
          <div className="card-overlay">
            <h2 className="card-title">
              <b>Gen. Manager</b>
            </h2>
            <p className="card-description">
              General manager and Supply Chain Lead
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
