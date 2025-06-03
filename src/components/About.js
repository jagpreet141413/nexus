import React, { useState, useEffect } from "react";

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .about-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    padding: 40px 32px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    max-width: 90%;
    margin: -80px auto -80px auto;  /* negative bottom margin added */
    position: relative;
    z-index: 10;
    transition: transform 0.4s ease;
    min-height: 300px;
  }

        .about-section.scrolled {
          transform: translateY(-40px);
        }

        .about-image {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          border-radius: 12px;
          max-width: 100%;
          height: auto;
          object-fit: cover;
          max-height: 280px;
        }

        .about-image:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 30px #ffc34d;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .about-section {
            flex-direction: column;
            padding: 24px 16px;
            text-align: center;
          }

          .about-image {
            max-height: 200px;

          }

          .about-text h2 {
            font-size: 20px;
          }

          .about-text p {
            font-size: 16px;
          }
        }
      `}</style>

      <section id="about"
        className={`about-section ${isScrolled ? "scrolled" : ""}`}
      >
        {/* Left text content */}
        <div className="about-text" style={{ flex: 1, }} >
          <h2 style={{ marginBottom: "16px", fontSize: "24px",textAlign:'center' }}>About Us</h2>
         <p style={{ lineHeight: 1.6, fontSize: "18px", textAlign: 'center' }}>
  EquiCore Nexus is a strategic finance and investment advisory firm led by Chartered Accountants, CFAs, and MBAs with 15+ years of combined experience across Indian and global markets. <br /><br />
  We empower startups, scale-ups, and investors in high-growth sectors with sharp financial modeling, tailored investment strategies, and deep industry insights. Our expertise spans SaaS, EV, Logistics, Manufacturing, and Consumer sectors. <br /><br />
  Our mission is to support ambitious entrepreneurs and discerning investors with clarity, speed, and strategic foresight—helping them unlock long-term value in a complex financial landscape.
</p>

        </div>

        {/* Right floating image */}
        <div style={{ flex: 1, display: "flex", justifyContent: 'center' }}>
          <img
            src="/images/stock-bg.jpg"
            alt="About EquiCore Nexus"
            className="about-image"
            style={{}}
          />
        </div>
      </section>
    </>
  );
};

export default About;
