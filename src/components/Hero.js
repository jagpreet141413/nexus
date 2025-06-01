import React from "react";

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1 style={{color:'white'}}>EquiCore Nexus</h1>
      <p>
        We empower startups and venture capital firms with strategic financial planning,
        investment advisory, and capital structuring to fuel innovation and growth. Whether
        you're scaling your startup or investing in the next big idea
      </p>
    </div>

    <style jsx>{`
      .hero {
        background-image: url("/images/plant-bg.jpg");
        background-size: cover;
        background-position: center;
        color: white;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 24px;
      }

      .hero-content {
        max-width: 800px;
      }

      .hero h1 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
      }

      .hero p {
        font-size: 1.25rem;
        line-height: 1.8;
      }

      @media (max-width: 768px) {
        .hero h1 {
          font-size: 2.2rem;
        }

        .hero p {
          font-size: 1rem;
          line-height: 1.6;
        }
      }
    `}</style>
  </section>
);

export default Hero;
