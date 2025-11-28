import React from 'react';

const RobotLanding = () => {
  return (
    <>
      <style>{`
        /* Page Container */
        .landing-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
          text-align: center;
          overflow: hidden;
        }

        /* Robot Container & Animation */
        .robot-wrapper {
          width: 200px;
          height: 200px;
          margin-bottom: 2rem;
          animation: float 3s ease-in-out infinite;
        }

        /* Robot SVG Parts */
        .robot-body { fill: #e0e0e0; stroke: #333; stroke-width: 2; }
        .robot-primary { fill: #00d2ff; } /* Blue accents */
        .robot-eye { fill: #333; animation: blink 4s infinite; }
        .robot-antenna-ball { fill: #ff4757; }
        
        /* Speech Bubble */
        .speech-bubble {
          position: relative;
          background: #ffffff;
          border-radius: .4em;
          padding: 15px 25px;
          color: #333;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(10px);
          animation: fadePop 0.5s ease-out 0.5s forwards;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .speech-bubble:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top-color: #ffffff;
          border-bottom: 0;
          margin-left: -10px;
          margin-bottom: -10px;
        }

        /* Animations */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
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

      <div className="landing-container">
        {/* Speech Bubble */}
        <div className="speech-bubble">
          Hello partner, Whatspp up! 
        </div>

        {/* SVG Robot */}
        <div className="robot-wrapper">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Antenna */}
            <line x1="100" y1="50" x2="100" y2="30" stroke="#333" strokeWidth="4" />
            <circle cx="100" cy="25" r="8" className="robot-antenna-ball" />
            
            {/* Head */}
            <rect x="60" y="50" width="80" height="70" rx="10" className="robot-body" />
            
            {/* Eyes (Grouped for blinking center) */}
            <g style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
               <circle cx="85" cy="80" r="8" className="robot-eye" />
               <circle cx="115" cy="80" r="8" className="robot-eye" />
            </g>

            {/* Mouth */}
            <path d="M 85 100 Q 100 110 115 100" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />

            {/* Body */}
            <rect x="70" y="125" width="60" height="50" rx="5" className="robot-primary" />
            
            {/* Neck */}
            <rect x="90" y="120" width="20" height="5" fill="#666" />

            {/* Arms */}
            <path d="M 70 135 Q 50 150 40 130" fill="none" stroke="#e0e0e0" strokeWidth="8" strokeLinecap="round" />
            <path d="M 130 135 Q 150 150 160 130" fill="none" stroke="#e0e0e0" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>
        
        <p style={{ opacity: 0.7, marginTop: '1rem' }}>Welcome to my portfolio</p>
      </div>
    </>
  );
};

export default RobotLanding;