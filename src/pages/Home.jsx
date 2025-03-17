// home section

import React from "react";
import Hero from "../components/Hero";
import HeroService from "../components/HeroService";
import Footer from "../components/Footer";
import HeroTestimonial from "../components/HeroTestimonial";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div>
      <Hero />
      <HeroService />
      <HeroTestimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
