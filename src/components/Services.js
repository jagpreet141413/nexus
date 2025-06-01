import React from 'react';
import Slider from 'react-slick';
import {
  FaChartLine,
  FaUserTie,
  FaBriefcase,
  FaHandshake,
  FaCalculator,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaChartLine size={50} color="#00acc1" />,
    title: 'Financial Modeling & Valuation',
    description:
      'Dynamic models for valuation, fundraising, and decision-making that drive business growth.',
  },
  {
    icon: <FaUserTie size={50} color="#00acc1" />,
    title: 'Investment Advisory',
    description:
      'Expert advice to align your investments with risk appetite, timelines, and financial goals.',
  },
  {
    icon: <FaBriefcase size={50} color="#00acc1" />,
    title: 'Business Planning',
    description:
      'Strategic plans tailored to your goals, market dynamics, and operational capabilities.',
  },
  {
    icon: <FaHandshake size={50} color="#00acc1" />,
    title: 'Deal Support for Startups & VCs',
    description:
      'Comprehensive assistance throughout fundraising and M&A deals to ensure successful closures.',
  },
  {
    icon: <FaCalculator size={50} color="#00acc1" />,
    title: 'CFO-as-a-Service',
    description:
      'On-demand CFO expertise to optimize finances, reporting, budgeting, and investor communication.',
  },
];

const sectionStyle = {
  background: 'radial-gradient(ellipse at center, #444444 0%, #000000 100%)',
  color: 'white',
  minHeight: '700px',
  padding: '100px 20px',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
};

const subheadingStyle = {
  fontSize: '1.1rem',
  color: '#cccccc',
  marginBottom: '40px',
};

const sliderWrapperStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  color: '#333',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  padding: '30px 20px',
  margin: '10px',
  textAlign: 'center',
  transition: 'transform 0.4s ease',
  height: '320px',           // fixed height for all cards
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',  // evenly space icon, title, description
};

const iconWrapperStyle = {
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
};

const titleStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  flexShrink: 0,
};

const descriptionStyle = {
  fontSize: '1rem',
  lineHeight: '1.6',
  flexGrow: 1,
};

const SlideWrapper = ({ children, isCenter }) => {
  const scale = isCenter ? 1.1 : 0.9;
  return (
    <div style={{ transform: `scale(${scale})`, transition: 'transform 0.4s ease' ,  padding: '10px', 
        overflow: 'visible', }}>
      {children}
    </div>
  );
};

const Services = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section id="services" style={sectionStyle}>
      <h2 style={headingStyle}>Our Core Expertise</h2>
      <p style={subheadingStyle}>
        Tailored financial services designed to elevate your business.
      </p>

      <div style={sliderWrapperStyle}>
        <Slider {...sliderSettings}>
          {services.map((service, index) => {
            // Calculate which slide is center for zoom effect
            const isCenter = index === currentSlide % services.length;
            return (
              <SlideWrapper key={index} isCenter={isCenter}>
                <div style={cardStyle}>
                  <div style={iconWrapperStyle}>{service.icon}</div>
                  <h3 style={titleStyle}>{service.title}</h3>
                  <p style={descriptionStyle}>{service.description}</p>
                </div>
              </SlideWrapper>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
