import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  FaChartLine,
  FaUserTie,
  FaBriefcase,
  FaHandshake,
  FaCalculator,
  FaSearch,
  FaBullseye,
  FaChartBar,
  FaFileAlt,
  FaMoneyBillWave,
} from 'react-icons/fa';

// Import slick-carousel CSS (you'll need to install react-slick and slick-carousel)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const services = [
  // --- For Founders and Owners ---
  {
    icon: <FaChartLine size={50} color="#ffc34d" />,
    title: 'Valuation & Financial Modeling',
    description:
      'Dynamic models for valuation, fundraising, and decision-making that drive business growth.',
    fullDescription: `
      <ul>
        <li>Valuation (DCF, SOTP, relative, LBO, Merger models)</li>
        <li>Correlation and Regression analysis/ multiple analysis</li>
        <li>Football field Analysis</li>
        <li>Financial/ Industry Benchmarking</li>
        <li>Quality of Earnings</li>
        <li>Profiles – company, country, commodity</li>
      </ul>
    `,
  },
  {
    icon: <FaFileAlt size={50} color="#ffc34d" />,
    title: 'Pitch Deck & IM Preparation',
    description:
      'Crafting compelling pitch decks and information memorandums for fundraising and deals.',
    fullDescription: `
      <ul>
        <li>Pitch Deck creation</li>
        <li>Information Memorandum development</li>
        <li>Newsletters/periodicals</li>
        <li>Industry research</li>
        <li>Pitchbook Support</li>
      </ul>
    `,
  },
  {
    icon: <FaSearch size={50} color="#ffc34d" />,
    title: 'Due Diligence',
    description:
      'Thorough examination of financial records, contracts, and risks for informed decisions.',
    fullDescription: `
      <ul>
        <li>Comprehensive Due Diligence services</li>
        <li>Quality of Earnings (QoE) assessment</li>
      </ul>
    `,
  },
  {
    icon: <FaBriefcase size={50} color="#ffc34d" />,
    title: 'M&A Support',
    description:
      'Assistance with mergers and acquisitions, from strategy to execution.',
    fullDescription: `
      <ul>
        <li>Deal Screening</li>
        <li>M&A Support throughout the process</li>
        <li>Origination and Marketing Support</li>
        <li>Execution Support</li>
      </ul>
    `,
  },
  {
   icon: <FaMoneyBillWave size={50} color="#ffc34d" />,
    title: 'Debt Capital Markets (DCM)',
    description:
      'Advisory on debt structures, issuance, and related financial instruments.',
    fullDescription: `
      <ul>
        <li>Capital Structure Analysis</li>
        <li>Covenant and Headroom Analysis</li>
        <li>New Issuance Tracking</li>
        <li>LBO Modeling</li>
        <li>Yield and Liquidity Analysis</li>
        <li>Debt Capital Market overviews/ updates</li>
        <li>Newsletters and Debt Profiles</li>
        <li>Credit Memos</li>
        <li>Industry Research</li>
        <li>Indenture Screening and Overviews</li>
      </ul>
    `,
  },

  // --- For PE and VC Firms ---
  {
    icon: <FaBullseye size={50} color="#ffc34d" />,
    title: 'Deal Sourcing',
    description:
      'Identifying and evaluating potential investment targets.',
    fullDescription: `
      <ul>
        <li>Identify targets that meet investment criteria</li>
        <li>Identifying the most suitable investment targets</li>
        <li>Data collection and outreach</li>
        <li>Leveraging a spread of information sources:</li>
        <ul>
          <li>Paid databases</li>
          <li>Desk research</li>
          <li>Non-traditional research</li>
          <li>New age tools (e.g., Chat GPT)</li>
        </ul>
      </ul>
    `,
  },
  {
    icon: <FaChartBar size={50} color="#ffc34d" />,
    title: 'Target Evaluation',
    description:
      'Industry analysis, market sizing, competitive positioning, and valuation.',
    fullDescription: `
      <ul>
        <li>Support PE/VCs in target company evaluation</li>
        <li>Industry deep-dives</li>
        <li>Market sizing</li>
        <li>Due diligence support</li>
        <li>Competitive positioning</li>
        <li>Business model evaluation</li>
        <li>Peer group benchmarking</li>
        <li>Financial modeling</li>
        <li>Valuation (absolute & relative)</li>
      </ul>
    `,
  },
  {
    icon: <FaUserTie size={50} color="#ffc34d" />,
    title: 'Investment Review',
    description:
      'KPI dashboards, model audits, quality of earnings reports, and performance tracking.',
    fullDescription: `
      <ul>
        <li>Support GPs in monitoring portfolio companies</li>
        <li>Dynamic KPI dashboard</li>
        <li>Model review/audit</li>
        <li>Quality of Earnings Report</li>
        <li>13-Week cash flow model</li>
        <li>Financial modeling</li>
        <li>KPIs assessment</li>
        <li>Waterfall analysis</li>
        <li>Capital structure analysis</li>
      </ul>
    `,
  },
  {
    icon: <FaCalculator size={50} color="#ffc34d" />,
    title: 'Financial Planning & Analysis (FP&A)',
    description:
      'Budgeting, forecasting, performance reporting, and variance analysis.',
    fullDescription: `
      <ul>
        <li>Budgeting & forecasting support</li>
        <li>Preparation of periodic financial and operating performance reports</li>
        <li>Trend, variance and scenario analysis</li>
        <li>Performance tracking</li>
        <li>Industry benchmarking reports</li>
      </ul>
    `,
  },
  {
    icon: <FaHandshake size={50} color="#ffc34d" />,
    title: 'Deal Advisory',
    description:
      'M&A synergy analysis, restructuring support, and capital raising.',
    fullDescription: `
      <ul>
        <li>M&A synergy analysis and modeling</li>
        <li>Scenario analysis and funds flow structure</li>
        <li>Restructuring & turnaround support</li>
        <li>Capital raising support for start-ups</li>
        <li>Pre-deal review and evaluation for strategic investment in a business</li>
      </ul>
    `,
  },
  {
    icon: <FaCalculator size={50} color="#ffc34d" />,
    title: 'Accounting Support',
    description:
      'Intercompany accounting, reconciliations, and reporting process review.',
    fullDescription: `
      <ul>
        <li>Intercompany accounting and financial reporting</li>
        <li>Account reconciliation</li>
        <li>AR/AP aging analysis</li>
        <li>Inventory management and reconciliation</li>
        <li>Review & finalization of periodic reporting</li>
        <li>Review of critical accounting processes & controls</li>
      </ul>
    `,
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
  cursor: 'pointer', // Make cards clickable
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

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
            const isCenter = index === currentSlide % services.length;
            return (
              <SlideWrapper key={index} isCenter={isCenter}>
                <div
                  style={cardStyle}
                  onClick={() => handleCardClick(service)}
                >
                  <div style={iconWrapperStyle}>{service.icon}</div>
                  <h3 style={titleStyle}>{service.title}</h3>
                  <p style={descriptionStyle}>{service.description}</p>
                </div>
              </SlideWrapper>
            );
          })}
        </Slider>
      </div>

      {/* Service Details Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {selectedService.title}
            </h3>
            {/* Render HTML content from fullDescription */}
            <div
              className="text-gray-700 leading-relaxed text-left"
              dangerouslySetInnerHTML={{ __html: selectedService.fullDescription }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
