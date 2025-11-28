import React from 'react';

const RobotGreeting = () => {
  return (
    <div className="robot-widget-container">
      <style>{`
        /* Widget Container - Fits content only, transparent bg */
        .robot-widget-container {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          /* No background color here so it fits your existing page */
        }

        /* Robot Animation Wrapper */
        .robot-wrapper {
          width: 150px; /* Adjusted size to fit better in existing layouts */
          height: 150px;
          animation: float 3s ease-in-out infinite;
        }

        /* Robot SVG Styles */
        .robot-body { fill: #e0e0e0; stroke: #333; stroke-width: 2; }
        .robot-primary { fill: #00d2ff; } 
        .robot-eye { fill: #333; animation: blink 4s infinite; }
        .robot-antenna-ball { fill: #ff4757; }
        
        /* Speech Bubble */
        .speech-bubble {
          position: relative;
          background: #ffffff;
          border: 2px solid #333; /* Added border for contrast on any bg */
          border-radius: 15px;
          padding: 10px 20px;
          color: #333;
          font-family: sans-serif;
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 15px;
          opacity: 0;
          transform: translateY(10px);
          animation: fadePop 0.5s ease-out 0.5s forwards;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          white-space: nowrap; /* Keeps text on one line */
        }

        .speech-bubble:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top-color: #333; /* Matches border */
          border-bottom: 0;
          margin-left: -10px;
        }
        /* Inner white triangle for bubble border effect */
        .speech-bubble:before {
          content: '';
          position: absolute;
          bottom: -7px;
          left: 50%;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top-color: #ffffff;
          border-bottom: 0;
          margin-left: -10px;
          z-index: 1;
        }

        /* Animations */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        @keyframes fadePop {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* The Speech Bubble */}
      <div className="speech-bubble">
        Hello partner, WhatsApp!
      </div>

      {/* The Robot SVG */}
      <div className="robot-wrapper">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <line x1="100" y1="50" x2="100" y2="30" stroke="#333" strokeWidth="4" />
          <circle cx="100" cy="25" r="8" className="robot-antenna-ball" />
          <rect x="60" y="50" width="80" height="70" rx="10" className="robot-body" />
          <g style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
             <circle cx="85" cy="80" r="8" className="robot-eye" />
             <circle cx="115" cy="80" r="8" className="robot-eye" />
          </g>
          <path d="M 85 100 Q 100 110 115 100" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />
          <rect x="70" y="125" width="60" height="50" rx="5" className="robot-primary" />
          <rect x="90" y="120" width="20" height="5" fill="#666" />
          <path d="M 70 135 Q 50 150 40 130" fill="none" stroke="#e0e0e0" strokeWidth="8" strokeLinecap="round" />
          <path d="M 130 135 Q 150 150 160 130" fill="none" stroke="#e0e0e0" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default RobotGreeting;