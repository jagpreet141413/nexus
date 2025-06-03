import React, { useState } from 'react'; // Import useState

const projects = [
  {
    title: 'Financial Modeling & Pitch Deck',
    year: 2022,
    client: 'EV Manufacturing, India',
    description:
      'Prepared investment marketing documents for a roadshow, including investor selection and deal financing roadmap. ',
  },
    {
    title: 'Financial Modeling, Pitch Deck & IM',
    year: 2022,
    client: 'E-Commerce Platform, India',
    description:
      'Prepared investment marketing documents for a roadshow, including investor selection and deal financing roadmap. ',
  },
   {
    title: 'Lender Debt Model',
    year: 2024,
    client: 'Listed Oilfield Company, USA',
    description:
      'Provided a debt credit model with multiple financing structures for a roadshow. ',
  },
    {
    title: 'Financial Modeling & DCF Valuation',
    year: 2024,
    client: 'Real Estate Fund, USA',
    description:
      'Prepared a detailed financial model and DCF valuation for 10+ projects and fund calculation services.',
  },
    {
    title: 'Pitch Deck',
    year: 2024,
    client: 'E Mobility, Singapore',
    description:
      'Provided an investor committee deck for a VC firm and consumer store brand, focusing on return summary and exit strategy.',
  },
  {
    title: 'Business Plan Development',
    year: 2023,
    client: 'Alternative Investment Company, India',
    description:
      'Crafted a strategic business plan for an investment platform to support fundraising and operational planning.',
  },

  {
    title: 'Financial Modeling, Pitch Deck & IM',
    year: 2022,
    client: 'Logistics Firm $30 Mn, India',
    description:
      'Prepared investment marketing documents for a roadshow, including investor selection and deal financing roadmap. ',
  },
    {
    title: 'M&A Acquisition',
    year: 2024,
    client: 'Plumbing Business/PE Firm, USA',
    description:
      'Provided due diligence service to a Private Equity Firm for the acquisition of a Plumbing business. ',
  },
  {
    title: 'Investor Deck',
    year: 2023,
    client: 'Brand Store, UAE',
    description:
      'Provided an investor committee deck for a VC firm and consumer store brand, focusing on return summary and exit strategy. ',
  },
  {
    title: 'Corporate Information Memorandum',
    year: 2023,
    client: 'Industrial Supplier, USA',
    description:
      'Prepared a corporate information memorandum for the 100% strategic sale of a conglomerate of 4 companies. ',
  },
  {
    title: 'Pitch Deck Service',
    year: 2023,
    client: 'Fintech Business, India',
    description:
      'Crafted a pitch deck for a Fintech platform operating in banking and NBFC channels for fundraising. ',
  },
  {
    title: 'Financial Modeling',
    year: 2024,
    client: 'Landscaping Business, USA',
    description:
      'Prepared a detailed financial model for a roadshow, including investor selection and deal financing roadmap. ',
  },
  {
    title: 'Pitch Deck Service',
    year: 2024,
    client: 'Waffle Franchise, India',
    description:
      'Crafted a pitch deck for a Waffle Franchise to support growth strategy and Series B capital raising. ',
  },
  {
    title: 'Financial Modeling & DCF Valuation',
    year: 2024,
    client: 'Cloth Rental App, USA',
    description:
      'Prepared a detailed financial model and DCF valuation for a roadshow, including investor selection and deal financing roadmap. ',
  },
  {
    title: 'Market Valuation',
    year: 2024,
    client: 'Educational Institute, USA',
    description:
      'Provided a market approach valuation service using market transactions and comparable company valuations. ',
  },
  {
    title: 'Financial Model & Pitch Deck',
    year: 2024,
    client: 'Smart AI Chair Manufacturer, USA',
    description:
      'Prepared investment marketing documents for a roadshow, including investor selection and deal financing roadmap.',
  },
  {
    title: 'Financial Modeling & DCF Valuation',
    year: 2024,
    client: 'Fashion Marketplace, USA',
    description:
      'Prepared a detailed financial model and DCF valuation for a roadshow.',
  },
  {
    title: 'Financial Modeling',
    year: 2024,
    client: 'E-Commerce Platform, USA',
    description:
      'Provided a detailed financial model with DCF and multiple financing structures for a roadshow.',
  },
 
  {
    title: 'Financial Modeling & DCF Valuation',
    year: 2024,
    client: 'Fintech Business, USA',
    description:
      'Prepared a detailed financial model and DCF valuation for a roadshow. ',
  },
  {
    title: 'Financial Modeling & DCF Valuation',
    year: 2024,
    client: 'Real Estate Fund, USA',
    description:
      'Prepared a detailed financial model and DCF valuation for 10+ projects and fund calculation services. ',
  },
  {
    title: 'Financial Modeling',
    year: 2024,
    client: 'Luxury E-Commerce Platform, USA',
    description:
      'Provided a detailed financial model with DCF and multiple financing structures for a roadshow. ',
  },
  {
    title: 'Market Valuation',
    year: 2024,
    client: 'Oil & Gas, USA',
    description:
      'Provided a market approach valuation service.',
  },
  {
    title: 'Financial Modeling & DCF Valuation',
    year: 2024,
    client: 'Gaming App, USA',
    description:
      'Prepared a detailed financial model and DCF valuation for a roadshow. ',
  },
  {
    title: 'Information Memorandum',
    year: 2024,
    client: 'Esports Company, India',
    description:
      'Prepared an Information Memorandum for the strategic sell-off of the business.' ,
  },


  {
    title: 'Due Diligence, QoFE',
    year: 2024,
    client: 'Healthcare Business/PE Firm, USA',
    description:
      'Provided due diligence service to a Private Equity Firm for the acquisition of a Chiropractic Center. ',
  },

  // ... all your project data
];

const Portfolio = () => {
  const [visibleProjectCount, setVisibleProjectCount] = useState(6);
  const visibleProjects = projects.slice(0, visibleProjectCount);
  const remainingProjectsCount = projects.length - visibleProjectCount;

  const handleViewMore = () => {
    setVisibleProjectCount(projects.length); // Show all projects
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-700">
            Showcasing a selection of our impactful engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title} ({project.year})
                </h3>
                <h4 className="text-md text-gray-800 mb-1">{project.client}</h4>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {remainingProjectsCount > 0 && (
     <div className="text-center">
  <button
    style={{ backgroundColor: '#ffc34d' }}
    className="hover:bg-[#e6b347] text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
    onClick={handleViewMore}
  >
    View More ({remainingProjectsCount} +)
  </button>
</div>

        )}
      </div>
    </section>
  );
};

export default Portfolio;