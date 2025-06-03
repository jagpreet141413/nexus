import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    quote:
      "EquiCore Nexus’ analysis and modeling were spot on—instrumental in helping us secure seed funding. Their insights are invaluable.",
    author: "CEO, US Tech Startup",
  },
  {
    quote:
      "The incredible due diligence and sharp ability to uncover transaction insights from audit figures were critical in strengthening our deal negotiations.",
    author: "Managing Director, Private Equity Fund",
  },
  {
    quote:
      "Their financial models gave us the clarity and confidence to close our Series A round successfully.",
    author: "Founder, Fintech Startup",
  },
  {
    quote:
      "Quick modeling turnaround with detailed revenue and operational KPIs built into the model—intuitive to operate and instrumental in driving better decisions.",
    author: "Chief Financial Officer, SaaS Company",
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
  // New testimonials from the presentation
  {
    quote:
      "The team has been of great help and support. He has an eye for detail and analyzes even new business concepts nicely. I Recommend working with him. I will hire him again in the future.",
    author: "Investment Platform CEO",
  },
  {
    quote:
      "Hi Shubham the Model was very good, Great Job It was approved by the client. Happy to build a long-term relationship.",
    author: "Investment Banking Founder",
  },
  {
    quote:
      "Thank you for your great help with the acquisition modeling and Due diligence service to help us make better decisions.",
    author: "PE Firm General Partner",
  },
  {
    quote:
      "He is a reliable partner for executing deals and delivering impactful pitch decks and financial models.",
    author: "Fintech Business Owner",
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
    adaptiveHeight: false, // Keep this false for fixed height
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
                style={{ color: 'black', minHeight: '280px', maxHeight: '280px' }} // Increased and fixed height
              >
                <blockquote
                  className="text-xl italic mb-6 flex-grow overflow-y-auto pr-2" // Added flex-grow and overflow-y-auto
                  style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #f1f1f1' }} // Custom scrollbar for Firefox
                >
                  “{quote}”
                </blockquote>
                <p className="font-semibold mt-4 flex-shrink-0">– {author}</p> {/* Added flex-shrink-0 */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
