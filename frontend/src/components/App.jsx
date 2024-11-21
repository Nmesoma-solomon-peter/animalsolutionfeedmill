import HomePage from "./HomePage";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Blog from "./Blog";
import { Route, Routes } from "react-router-dom";
import Species from "./species";
import CowFeeds from "./cowFeeds";
import Sheep from "./Sheep";

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
        <Route path="/cowFeeds" element={<CowFeeds />} />
        <Route path="/sheep" element={<Sheep />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
