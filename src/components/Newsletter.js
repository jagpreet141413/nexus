import React from 'react';
import './Section.css';

const Newsletter = () => (
  <section className="section">
    <h2>Stay Updated</h2>
    <p>Stay updated with insights, strategies, and funding tips from the EquiCore team.</p>
    <input type="email" placeholder="Your email" />
    <button>Subscribe</button>
  </section>
);

export default Newsletter;
