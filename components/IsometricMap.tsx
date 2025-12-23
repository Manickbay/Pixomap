import React from 'react';

export const IsometricMap: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center animate-float">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand/5 blur-[80px] rounded-full pointer-events-none" />

      <svg viewBox="0 0 500 500" className="w-full h-full max-w-[600px] drop-shadow-xl">
        <defs>
          <linearGradient id="floorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(21, 71, 106, 0.05)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
          </linearGradient>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#15476A" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floor 1 (Bottom) */}
        <g className="transform transition-transform hover:translate-y-2 duration-500">
          <path 
            d="M250 400 L100 325 L250 250 L400 325 Z" 
            fill="rgba(255,255,255,0.8)" 
            stroke="#15476A"
            strokeOpacity="0.1" 
            strokeWidth="1"
          />
           <path 
            d="M250 400 L100 325 L250 250 L400 325 Z" 
            fill="url(#floorGradient)" 
            className="mix-blend-multiply"
          />
          {/* Floor 1 Details */}
          <path d="M140 325 L140 305 M180 345 L180 325" stroke="#15476A" strokeOpacity="0.1" strokeWidth="1" />
          <circle cx="180" cy="325" r="3" fill="#cbd5e1" />
        </g>

        {/* Floor 2 (Middle) */}
        <g className="transform transition-transform hover:translate-y-1 duration-500">
          <path 
            d="M250 300 L100 225 L250 150 L400 225 Z" 
            fill="rgba(255,255,255,0.9)" 
            stroke="#15476A"
            strokeOpacity="0.2"
            strokeWidth="1"
            className="backdrop-blur-sm"
          />
          <path 
            d="M250 300 L100 225 L250 150 L400 225 Z" 
            fill="url(#floorGradient)" 
            className="mix-blend-multiply"
          />
           {/* Floor 2 Details - Rooms */}
           <path d="M150 250 L200 225 L200 175" stroke="#15476A" strokeOpacity="0.1" fill="none" />
           <rect x="0" y="0" width="20" height="20" fill="#15476A" fillOpacity="0.05" transform="translate(280 220) skewY(30) rotate(-30)" />
        </g>

        {/* Floor 3 (Top) */}
        <g className="transform transition-transform hover:-translate-y-2 duration-500">
          <path 
            d="M250 200 L100 125 L250 50 L400 125 Z" 
            fill="rgba(255,255,255,0.95)" 
            stroke="#15476A"
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
           <path 
            d="M250 200 L100 125 L250 50 L400 125 Z" 
            fill="url(#floorGradient)" 
            className="mix-blend-multiply"
          />
          {/* Floor 3 Details - Active Zone */}
          <path d="M230 140 L270 120 L310 140 L270 160 Z" fill="#15476A" fillOpacity="0.1" stroke="#15476A" strokeOpacity="0.5" />
        </g>

        {/* Navigation Path */}
        <path 
          d="M180 325 Q 200 300 250 250 T 280 220 Q 300 200 250 150 T 270 140" 
          fill="none" 
          stroke="url(#pathGradient)" 
          strokeWidth="3" 
          strokeDasharray="10,5"
          strokeLinecap="round"
          className="animate-[pulse_3s_infinite]"
        />

        {/* Waypoints */}
        <circle cx="180" cy="325" r="4" fill="#fff" stroke="#15476A" strokeWidth="1" />
        <circle cx="270" cy="140" r="6" fill="#15476A" stroke="#fff" strokeWidth="2">
           <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* Floating Label */}
        <g transform="translate(290, 120)">
            <rect x="0" y="0" width="80" height="24" rx="12" fill="#15476A" stroke="#white" />
            <text x="40" y="16" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter" fontWeight="600">Target Zone</text>
            <line x1="-5" y1="12" x2="-20" y2="20" stroke="#15476A" strokeWidth="2" />
        </g>

      </svg>
    </div>
  );
};