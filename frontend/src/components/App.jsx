import HomePage from "./HomePage";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Blog from "./Blog";
import { Route, Routes } from "react-router-dom";
import Species from "./Species";
import Pig from "./Pig";
import Sheep from "./sheep";
import Cowfeed from "./Cowfeed";
import Goat from "./Goat";
import Fishfeed from "./Fishfeed";
import Poultryfeed from "./Poultryfeed";
import Rabbitfeed from "./Rabbitfeed";
import Snail from "./Snail";
import Dashboard from "./Dashboard/Dashboard";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";

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
        <Route path="/snailfeed" element={<Snail />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
