import React from "react";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Blog from "./Blog";
import { Router, Route, Routes } from "react-router-dom";
import Species from "./Species";
import Pig from "./Pig";
import Sheep from "./sheep";
import Cowfeed from "./Cowfeed";
import Goat from "./Goat";
import Fishfeed from "./Fishfeed";
import Poultryfeed from "./Poultryfeed";
import Rabbitfeed from "./Rabbitfeed";
import Snail from "./Snail";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/species" element={<Species />} />
        <Route path="/cowfeed" element={<Cowfeed />} />
        <Route path="/pig" element={<Pig />} />
        <Route path="/sheepfeed" element={<Sheep />} />
        <Route path="/goatfeed" element={<Goat />} />
        <Route path="/fishfeed" element={<Fishfeed />} />
        <Route path="/poultryfeed" element={<Poultryfeed />} />
        <Route path="/rabbitfeed" element={<Rabbitfeed />} />
        <Route path="/snailfeed" element={<Snail/>} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
