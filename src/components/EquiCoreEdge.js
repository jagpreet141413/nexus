import React from "react";
import {
  FaSearch,
  FaCogs,
  FaRobot,
  FaChartBar,
  FaGlobe,
  FaFileAlt,
  FaHandshake,
  FaArrowUp,
} from "react-icons/fa";

const EquiCoreEdge = () => {
  return (
    <>
      <style>{`
        .edge-section {
          background: #ffffff;
          padding: 40px 32px;
          border-radius: 16px;
          max-width: 90%;
          margin: 40px auto;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .edge-section h2 {
          text-align: center;
          font-size: 28px;
          margin-bottom: 32px;
          color: #ffc34d;
        }

        .edge-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .edge-card {
          background-color: #f9f9f9;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease;
        }

        .edge-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(220, 175, 14, 0.3);
        }

        .edge-card h3 {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          color: #333;
          font-size: 18px;
        }

        .edge-card p {
          color: #555;
          font-size: 16px;
          line-height: 1.5;
        }

        .edge-card h3 svg {
          margin-right: 8px;
          color: #ffc34d; /* One color for all icons */
        }

        @media (max-width: 768px) {
          .edge-grid {
            grid-template-columns: 1fr;
          }

          .edge-section h2 {
            font-size: 22px;
          }
        }
      `}</style>

      <section className="edge-section" id="EquiCore">
        <h2>The EquiCore Edge</h2>
        <div className="edge-grid">
          <div className="edge-card">
            <h3><FaSearch /> Industry Deep Dive</h3>
            <p>From manufacturing floors to deep-tech corridors — we understand what drives your industry.</p>
          </div>
          <div className="edge-card">
            <h3><FaCogs /> Finance + Ops Intelligence</h3>
            <p>We bridge business strategy with numbers through integrated operational and financial models.</p>
          </div>
          <div className="edge-card">
            <h3><FaRobot /> AI-Powered, Human-Led</h3>
            <p>Our models leverage AI tools for speed, but decisions are always rooted in expert judgment.</p>
          </div>
          <div className="edge-card">
            <h3><FaChartBar /> Premium Research Stack</h3>
            <p>We subscribe to top-tier research and databases for unbeatable market intelligence.</p>
          </div>
          <div className="edge-card">
            <h3><FaGlobe /> Global Experience, Local Nuance</h3>
            <p>15+ man-years across India and global markets, with real investor expectations in mind.</p>
          </div>
          <div className="edge-card">
            <h3><FaFileAlt /> Investor-Ready Modeling</h3>
            <p>Be it LBOs, ESOPs, cap tables, or exits — we handle complexity with clarity.</p>
          </div>
          <div className="edge-card">
            <h3><FaHandshake /> Connected to Capital</h3>
            <p>Tied into investor ecosystems, accelerators, and VCs — we help deals get done.</p>
          </div>
          <div className="edge-card">
            <h3><FaArrowUp /> Beyond Advice — Full Execution</h3>
            <p>From planning to post-deal integration, we offer end-to-end strategic finance leadership.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EquiCoreEdge;
