import React from "react";
import "./Pagebox.css";

function Pagebox() {
  return (
    <div className="container-box">
      <div className="Header">
        <div className="head">
          <img src="assets/Email_icon.jpg" alt="Logo" class="logo" />
          <div className="title">Mail us 24/7</div>
        </div>
      </div>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Pagebox;
