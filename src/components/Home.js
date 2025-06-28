import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import EquiCoreEdge from "../components/EquiCoreEdge";
export default function () {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <EquiCoreEdge />
      <Contact />
      <Footer />
    </div>
  );
}
