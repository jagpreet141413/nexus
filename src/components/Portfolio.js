import React from 'react';

const projects = [
  {
    title: 'Funding Strategies in 2025',
    description:
      'Explore innovative funding strategies that helped our clients secure capital in a competitive market.',
    image:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80', // replaced
  },
  {
    title: 'Startup Valuation Techniques',
    description:
      'Developed robust valuation models to accurately assess startup potential and attract investors.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', // replaced
  },
  {
    title: 'Building Investor-Ready Models',
    description:
      'Crafted detailed, investor-ready financial models to support fundraising and business planning.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', // replaced
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
            Impactful Engagements
          </h2>
          <p className="text-lg text-slate-600">
            Showcasing our success in delivering tangible results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 2).map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
          <img
            src={projects[2].image}
            alt={projects[2].title}
            className="w-full h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">
              {projects[2].title}
            </h3>
            <p className="text-slate-600">{projects[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
