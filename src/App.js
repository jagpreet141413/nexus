import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio/>
   
      {/* <Newsletter /> */}
      <Testimonials/>
         <Blog />
      <Contact />
      <Footer />
      {/* <HomePage/> */}
    </div>
  );
}

export default App;