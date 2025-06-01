import React from 'react';
import './Section.css';

const Footer = () => (
  <footer className="section">
    <p>&copy; {new Date().getFullYear()} EquiCore Nexus</p>
    <a href="https://www.termsfeed.com/live/7a3070ce-b686-44c0-8836-98314ea851d3" target="_blank" rel="noopener noreferrer">Privacy Policy</a> |
    <a href="https://www.termsfeed.com/live/cd73c641-8e59-49ca-acd4-fbc026e91f38" target="_blank" rel="noopener noreferrer"> Terms & Conditions</a>
  </footer>
);

export default Footer;