import React, { useState } from 'react';

const initialPosts = [
  {
    title: '5 Red Flags in Early-Stage Fundraising',
    description:
      'Knowing what to avoid can significantly improve your chances of closing better deals with smarter positioning.',
    url: '/blog/5-red-flags',
    image:
      '/images/Gemini_Generated_Image_hwc0slhwc0slhwc0.png',
  },
  {
    title: 'Funding Strategies in 2025',
    description:
      'Explore innovative approaches to secure capital in a changing financial landscape.',
    url: '/blog/funding-strategies-2025',
    image:
        '/images/Gemini_Generated_Image_3dme6g3dme6g3dme.png',
  },
];

const extraPosts = [
  {
    title: 'How to Attract Investors in a Competitive Market',
    description:
      'Learn how startups are building trust and standing out in 2025’s crowded funding space.',
    url: 'https://www.forbes.com/sites/forbesfinancecouncil/2023/11/10/how-to-attract-investors-in-a-competitive-market/',
    image:
      '/images/ChatGPT Image Jun 18, 2025, 12_30_08 PM.png',
  },
  {
    title: 'Startup Financial Planning Guide',
    description:
      'From budgeting to forecasting — this guide helps founders understand how to control burn rate and scale efficiently.',
    url: 'https://hbr.org/2020/11/a-guide-to-financial-planning-for-startups',
    image:
        '/images/Gemini_Generated_Image_hwc0shhwc0shhwc0.png',
  },
];

const Blog = () => {
  const [showMore, setShowMore] = useState(false);
  const allPosts = showMore ? [...initialPosts, ...extraPosts] : initialPosts;

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

        <div className="grid gap-8 max-w-2xl mx-auto">
          {allPosts.map(({ title, description, url, image }, idx) => (
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#007a8a] hover:text-[#004f54] font-semibold self-start group-hover:underline transition-colors duration-300"
                >
                  Read More &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="inline-block border border-[#00acc1] text-[#00acc1] hover:bg-[#00acc1] hover:text-black transform hover:scale-105 transition-all duration-300 py-3 px-6 text-lg rounded-lg font-semibold"
            >
              View More Insights
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
