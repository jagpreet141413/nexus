import React from 'react';

const posts = [
  {
    title: '5 Red Flags in Early-Stage Fundraising',
    description:
      'Knowing what to avoid can significantly improve your chances of closing better deals with smarter positioning.',
    url: '/blog/5-red-flags',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Funding Strategies in 2025',
    description:
      'Explore innovative approaches to secure capital in a changing financial landscape.',
    url: '/blog/funding-strategies-2025',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
            Latest Financial Insights
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Stay informed with our expert analysis on market trends and strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {posts.map(({ title, description, url, image }, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl shadow-lg transition-shadow duration-300 overflow-hidden group flex flex-col md:flex-row transform hover:scale-[1.03] hover:shadow-2xl"
            >
              <img
                src={image}
                alt={title}
                className="w-full md:w-1/3 h-48 md:h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{description}</p>
                <a
                  href={url}
                  className="text-[#007a8a] hover:text-[#004f54] font-semibold self-start group-hover:underline transition-colors duration-300"
                >
                  Read More &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-block border border-[#00acc1] text-[#00acc1] hover:bg-[#00acc1] hover:text-black transform hover:scale-105 transition-all duration-300 py-3 px-6 text-lg rounded-lg font-semibold"
            style={{ backdropFilter: 'none' }}
          >
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
