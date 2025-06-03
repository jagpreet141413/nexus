import React from 'react';
import './Section.css';
import {
  FaHandshake,
  FaUserTie,
  FaChartBar,
  FaFileAlt,
  FaMoneyBillWave,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="section bg-[#f8f9fa] text-center py-6">
    <div className="text-sm mb-3 text-gray-700">
      &copy; {new Date().getFullYear()} EquiCore Nexus
    </div>

    <div className="flex justify-center flex-wrap gap-6 mb-4 text-gray-600 text-[15px]">
      <a
        href="https://www.facebook.com/share/1GEsbBkGKC/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#4267B2] transition-colors"
      >
        <FaHandshake />
        Facebook
      </a>

      <a
        href="https://www.linkedin.com/search/results/companies/?keywords=equicore%20nexus"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#0077B5] transition-colors"
      >
        <FaUserTie />
        LinkedIn
      </a>

      <a
        href="https://www.termsfeed.com/live/cd73c641-8e59-49ca-acd4-fbc026e91f38"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#4CAF50] transition-colors"
      >
        <FaFileAlt />
        Terms & Conditions
      </a>

      <a
        href="https://www.termsfeed.com/live/7a3070ce-b686-44c0-8836-98314ea851d3"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#FF9800] transition-colors"
      >
        <FaChartBar />
        Privacy Policy
      </a>
    </div>

    {/* <div className="text-sm text-gray-600 flex justify-center items-center gap-2">
      <span>Built with</span>
      <FaMoneyBillWave className="text-green-600" />
    </div> */}
  </footer>
);

export default Footer;
