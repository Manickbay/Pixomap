import React from 'react';
import { Navigation, MapPin, BarChart3, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 bg-slate-50 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Grids/Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(21,71,106,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(21,71,106,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      {/* Animation Styles */}
      <style>{`
        @keyframes circle-pulse {
          0%, 10%, 15%, 100% { fill: white; stroke: #15476A; transform: scale(1); }
          12.5% { fill: #15476A; stroke: white; transform: scale(1.1); }
        }
        @keyframes icon-pulse {
          0%, 10%, 15%, 100% { color: #15476A; }
          12.5% { color: white; }
        }
        .node-circle {
          animation: circle-pulse 8s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        .node-icon {
          animation: icon-pulse 8s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: 2s; } /* 25% of 8s */
        .delay-2 { animation-delay: 4s; } /* 50% of 8s */
        .delay-3 { animation-delay: 6s; } /* 75% of 8s */
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand/30"></div>
              <span className="text-brand font-mono text-sm tracking-[0.2em] uppercase font-bold">Manifesto</span>
              <div className="h-[1px] w-12 bg-brand/30"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Why we built <span className="text-brand block">Pixomap</span>
            </h1>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              <p>
                We realized that while outdoor GPS had solved the problem of "How do I get there?" for the world, the moment you stepped inside a building, you were on your own.
              </p>
              <p>
                Complex facilities like hospitals, airports, and campuses were becoming black boxes. Visitors were lost, assets were misplaced, and data was invisible.
              </p>
              <p className="font-semibold text-slate-900">
                We built Pixomap to turn these physical blueprints into intelligent digital assets.
              </p>
              <p>
                Our platform isn't just about drawing lines on a map; it's about creating a living, breathing operating system for the indoors that guides people, tracks things, and optimizes spaces.
              </p>
            </div>
          </div>

          {/* Right Column: Technical Illustration */}
          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* SVG Hub & Spoke Animation */}
            <svg viewBox="0 0 600 600" className="w-full h-full max-w-[600px] drop-shadow-2xl">
              <defs>
                <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#15476A" />
                  <stop offset="100%" stopColor="#0e334d" />
                </radialGradient>
              </defs>

              {/* Background Orbits */}
              <g className="opacity-20">
                <circle cx="300" cy="300" r="100" fill="none" stroke="#15476A" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_60s_linear_infinite]" />
                <circle cx="300" cy="300" r="180" fill="none" stroke="#15476A" strokeWidth="1" strokeDasharray="8 4" className="animate-[spin_80s_linear_infinite_reverse]" />
                <circle cx="300" cy="300" r="260" fill="none" stroke="#15476A" strokeWidth="0.5" />
              </g>

              {/* Connecting Lines (Spokes) */}
              <g className="stroke-brand/20">
                <line x1="300" y1="260" x2="300" y2="120" strokeWidth="2" strokeDasharray="4 4" /> {/* Top */}
                <line x1="300" y1="340" x2="300" y2="480" strokeWidth="2" strokeDasharray="4 4" /> {/* Bottom */}
                <line x1="260" y1="300" x2="120" y2="300" strokeWidth="2" strokeDasharray="4 4" /> {/* Left */}
                <line x1="340" y1="300" x2="480" y2="300" strokeWidth="2" strokeDasharray="4 4" /> {/* Right */}
              </g>
              
              {/* Moving Signal Packet */}
              <circle r="6" fill="#06b6d4" filter="drop-shadow(0 0 4px #06b6d4)">
                <animateMotion 
                  dur="8s" 
                  repeatCount="indefinite"
                  path="M300 300 L300 120 L300 300 L480 300 L300 300 L300 480 L300 300 L120 300 L300 300 Z"
                  keyPoints="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                  keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                  calcMode="linear"
                />
              </circle>

              {/* Central Hub */}
              <g className="animate-float">
                <circle cx="300" cy="300" r="40" fill="url(#hubGradient)" stroke="white" strokeWidth="4" />
                <rect x="290" y="290" width="20" height="20" rx="4" fill="white" />
              </g>

              {/* Node 1: Wayfinding (Top) */}
              <g transform="translate(300, 120)" className="group cursor-default">
                <circle cx="0" cy="0" r="35" strokeWidth="2" className="node-circle delay-0" />
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex items-center justify-center w-full h-full node-icon delay-0">
                    <Navigation size={24} strokeWidth={2.5} />
                  </div>
                </foreignObject>
                <text x="0" y="55" textAnchor="middle" className="fill-slate-500 text-xs font-bold uppercase tracking-wider">Wayfinding</text>
              </g>

              {/* Node 2: API Core (Right) */}
              <g transform="translate(480, 300)" className="group cursor-default">
                <circle cx="0" cy="0" r="35" strokeWidth="2" className="node-circle delay-1" />
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex items-center justify-center w-full h-full node-icon delay-1">
                    <Code2 size={24} strokeWidth={2.5} />
                  </div>
                </foreignObject>
                <text x="0" y="55" textAnchor="middle" className="fill-slate-500 text-xs font-bold uppercase tracking-wider">API Core</text>
              </g>

              {/* Node 3: Analytics (Bottom) */}
              <g transform="translate(300, 480)" className="group cursor-default">
                <circle cx="0" cy="0" r="35" strokeWidth="2" className="node-circle delay-2" />
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex items-center justify-center w-full h-full node-icon delay-2">
                    <BarChart3 size={24} strokeWidth={2.5} />
                  </div>
                </foreignObject>
                <text x="0" y="55" textAnchor="middle" className="fill-slate-500 text-xs font-bold uppercase tracking-wider">Analytics</text>
              </g>

              {/* Node 4: Positioning (Left) */}
              <g transform="translate(120, 300)" className="group cursor-default">
                <circle cx="0" cy="0" r="35" strokeWidth="2" className="node-circle delay-3" />
                <foreignObject x="-20" y="-20" width="40" height="40">
                  <div className="flex items-center justify-center w-full h-full node-icon delay-3">
                    <MapPin size={24} strokeWidth={2.5} />
                  </div>
                </foreignObject>
                <text x="0" y="55" textAnchor="middle" className="fill-slate-500 text-xs font-bold uppercase tracking-wider">Positioning</text>
              </g>

            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};