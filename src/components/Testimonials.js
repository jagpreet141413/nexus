import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    quote:
      "EquiCore Nexus’ analysis and modeling were spot on—instrumental in helping us secure $1M in seed funding. Their insights are invaluable.",
    author: "CEO, US Tech Startup",
  },
  {
    quote:
      "The incredible detail and strategic thinking in their M&A advisory work have made EquiCore Nexus our go-to finance partner.",
    author: "Managing Director, Global PE Firm",
  },
  {
    quote:
      "Their financial models gave us the clarity and confidence to close our Series A round successfully.",
    author: "Founder, Fintech Startup",
  },
  {
    quote:
      "A trusted partner in our growth journey — their advisory has been top-notch and timely.",
    author: "CFO, SaaS Company",
  },
  {
    quote:
      "Thanks to their insights, we optimized our fundraising strategy and exceeded our goals.",
    author: "Investor Relations Head, Healthcare Startup",
  },
  {
    quote:
      "Professional, insightful, and extremely reliable — EquiCore Nexus is our preferred financial consultant.",
    author: "Managing Partner, Venture Capital Firm",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false, // important for consistent height
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: false,
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24"
      style={{
        background: 'radial-gradient(ellipse at center, #444444 0%, #000000 100%)',
        color: 'black',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
            Trusted by Leaders
          </h2>
          <p className="text-lg text-white/80 text-white">
            Our clients' success stories are a testament to our commitment and expertise.
          </p>
        </div>

        <Slider {...settings} className="max-w-5xl mx-auto">
          {testimonials.map(({ quote, author }, idx) => (
            <div key={idx}>
              <div
                className="mx-4 p-8 rounded-xl shadow-xl bg-white transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
                style={{ color: 'black', minHeight: '240px' }} // fixed height for uniformity
              >
                <blockquote className="text-xl italic mb-6 flex-grow">“{quote}”</blockquote>
                <p className="font-semibold mt-4">– {author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
