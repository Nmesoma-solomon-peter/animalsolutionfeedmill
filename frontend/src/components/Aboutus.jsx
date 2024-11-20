import React from "react";
import "./AboutUs.css";

function Aboutus() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        We are a passionate team dedicated to creating awesome web applications
        using the latest technologies. Our goal is to deliver high-quality
        solutions that help businesses grow and succeed in the digital world.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to build innovative and user-friendly websites that not
        only meet but exceed the expectations of our clients. We believe in
        continuous improvement and staying ahead of the curve in web development
        trends.
      </p>
      <h2>Meet the Team</h2>
      <ul>
        <li>John Doe - CEO</li>
        <li>Jane Smith - Lead Developer</li>
        <li>Bob Brown - UX/UI Designer</li>
      </ul>
    </div>
  );
}

export default Aboutus;
