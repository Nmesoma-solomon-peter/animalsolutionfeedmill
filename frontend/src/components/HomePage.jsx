import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Marque from "./Marque";
import Whatwedobrief from "./Whatwedobrief";
import Pagebox from "./PageBox";

function HomePage() {
  return (
    <>
      <Hero />
      {/* <Marque /> */}
      <Whatwedobrief />
      <Pagebox />
    </>
  );
}

export default HomePage;
