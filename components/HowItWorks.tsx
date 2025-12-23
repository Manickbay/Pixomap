import React, { useState } from 'react';
import { Map, Navigation, Sparkles, TrendingUp } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Map,
      title: "Map your space",
      description: "Capture accurate layouts and build a digital foundation.",
    },
    {
      icon: Navigation,
      title: "Enable navigation",
      description: "Set up smooth, turn-by-turn movement across your premises.",
    },
    {
      icon: Sparkles,
      title: "Enhance experience",
      description: "Add contextual details to improve user engagement.",
    },
    {
      icon: TrendingUp,
      title: "Grow with intelligence",
      description: "Use insights and automation to continuously improve your environment.",
    }
  ];

  return (
    <section id="resources" className="py-32 px-4 relative bg-slate-50 overflow-hidden group">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How it works</h2>
          <p className="text-slate-500 text-lg">
            No complexity or guesswork—just a clear path to smarter indoor mapping.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Dynamic Isometric Illustration */}
          <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
            {/* Glow effect behind illustration */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-[100px] rounded-full pointer-events-none transition-colors duration-700 ${
              activeStep === 0 ? 'bg-brand/10' :
              activeStep === 1 ? 'bg-cyan-500/10' :
              activeStep === 2 ? 'bg-indigo-500/10' : 'bg-emerald-500/10'
            }`} />
            
            <svg viewBox="0 0 500 400" className="w-full max-w-[500px] drop-shadow-2xl animate-float transition-all duration-700">
              <defs>
                <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
              </defs>

              {/* Tablet Device - Static Base */}
              <g transform="translate(250, 200)">
                {/* Device Body */}
                <path d="M-160 -80 L0 -160 L160 -80 L0 0 Z" fill="#1e293b" transform="translate(0, 20)" /> 
                <path d="M-160 -80 L0 -160 L160 -80 L0 0 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                
                {/* Screen */}
                <path d="M-140 -80 L0 -150 L140 -80 L0 -10 Z" fill="url(#screenGrad)" stroke="#15476A" strokeWidth="0.5" />
                
                {/* Map Content on Screen (Base Layout) */}
                <g transform="translate(0, -10)">
                   <path d="M-100 -80 L0 -130 L100 -80 L0 -30 Z" fill="none" stroke="#15476A" strokeOpacity="0.1" strokeWidth="1" />
                   <path d="M-60 -80 L-60 -100 L0 -130" fill="none" stroke="#15476A" strokeOpacity="0.2" strokeWidth="2" />
                   <path d="M20 -40 L20 -70 L80 -100" fill="none" stroke="#15476A" strokeOpacity="0.2" strokeWidth="2" />
                   
                   {/* Dynamic Content: STEP 0 (Map Highlight) */}
                   <g style={{ opacity: activeStep === 0 ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                      <path d="M-40 -60 L0 -80 L40 -60 L0 -40 Z" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2" />
                      <path d="M-40 -60 L-40 -45 L0 -25 L0 -40 Z" fill="#d97706" fillOpacity="0.4" />
                      <path d="M0 -40 L0 -25 L40 -45 L40 -60 Z" fill="#b45309" fillOpacity="0.4" />
                   </g>

                   {/* Dynamic Content: STEP 1 (Navigation Path) */}
                   <g style={{ opacity: activeStep === 1 ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                      <path d="M-80 -100 L-20 -70 L40 -100 L20 -50" fill="none" stroke="#15476A" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 4">
                        <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
                      </path>
                      <circle cx="20" cy="-50" r="4" fill="#06b6d4">
                        <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                      {/* Start Pin */}
                      <path d="M-80 -100 L-80 -110" stroke="#15476A" strokeWidth="1" />
                      <circle cx="-80" cy="-100" r="3" fill="#15476A" stroke="#2c6e91" />
                   </g>

                   {/* Dynamic Content: STEP 2 (Experience/Sparkles) */}
                   <g style={{ opacity: activeStep === 2 ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                      {/* POI Icons popping up */}
                      <g transform="translate(-30, -90)">
                         <circle cx="0" cy="0" r="10" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" />
                         <path d="M-4 0 L4 0 M0 -4 L0 4" stroke="#ec4899" strokeWidth="2" />
                         <animateTransform attributeName="transform" type="translate" values="-30 -90; -30 -95; -30 -90" dur="3s" repeatCount="indefinite" />
                      </g>
                      <g transform="translate(50, -70)">
                         <rect x="-8" y="-8" width="16" height="16" rx="4" fill="#15476A" fillOpacity="0.2" stroke="#15476A" />
                         <animateTransform attributeName="transform" type="translate" values="50 -70; 50 -65; 50 -70" dur="2.5s" repeatCount="indefinite" />
                      </g>
                   </g>

                   {/* Dynamic Content: STEP 3 (Growth/Stats) */}
                   <g style={{ opacity: activeStep === 3 ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                      {/* Bar Charts */}
                      <path d="M-50 -90 L-30 -80 L-30 -40 L-50 -50 Z" fill="#10b981" fillOpacity="0.8" transform="translate(0, -20)" />
                      <path d="M-30 -80 L-10 -90 L-10 -50 L-30 -40 Z" fill="#059669" fillOpacity="0.8" transform="translate(0, -20)" />
                      <path d="M-50 -90 L-30 -100 L-10 -90 L-30 -80 Z" fill="#34d399" fillOpacity="0.9" transform="translate(0, -20)" />

                      <path d="M10 -60 L30 -50 L30 -10 L10 -20 Z" fill="#10b981" fillOpacity="0.8" transform="translate(0, -40)" />
                      <path d="M30 -50 L50 -60 L50 -20 L30 -10 Z" fill="#059669" fillOpacity="0.8" transform="translate(0, -40)" />
                      <path d="M10 -60 L30 -70 L50 -60 L30 -50 Z" fill="#34d399" fillOpacity="0.9" transform="translate(0, -40)" />
                   </g>
                </g>
              </g>

            </svg>
          </div>

          {/* Right Column: Steps List */}
          <div className="flex flex-col justify-center">
             <div className="relative space-y-12 pl-4">
                {/* Vertical connecting line */}
                <div className="absolute left-[29px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand/20 via-slate-200 to-transparent" />

                {steps.map((step, index) => {
                  const isActive = activeStep === index;
                  return (
                    <div 
                      key={index} 
                      className="relative flex gap-6 items-start group cursor-pointer"
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Icon Container */}
                      <div className={`
                        relative z-10 flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${isActive 
                          ? 'bg-brand border-brand shadow-[0_0_20px_rgba(21,71,106,0.4)] text-white scale-110 rotate-0' 
                          : 'bg-white border-slate-200 text-slate-400 hover:border-brand/50 hover:text-brand hover:scale-105 hover:rotate-3'
                        }
                      `}>
                        <step.icon size={24} className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100'}`} />
                      </div>

                      {/* Content */}
                      <div className="pt-2">
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
                          {step.title}
                        </h3>
                        <p className={`leading-relaxed max-w-md transition-colors duration-500 ${isActive ? 'text-slate-600' : 'text-slate-400'}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};