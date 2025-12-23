import React from 'react';
import { ArrowRight } from 'lucide-react';

// --- Isometric Illustrations ---
const IsometricIllustration: React.FC<{ variant: 'nav' | 'deploy' | 'scale' | 'insights' }> = ({ variant }) => {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-40 drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2c6e91" /> {/* Brand Light */}
          <stop offset="100%" stopColor="#15476A" /> {/* Brand Main */}
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#15476A" />
          <stop offset="100%" stopColor="#0e334d" /> {/* Brand Dark */}
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan */}
          <stop offset="100%" stopColor="#2c6e91" />
        </linearGradient>
        <linearGradient id="gradDark" x1="0%" y1="0%" x2="100%" y2="100%">
           <stop offset="0%" stopColor="#0e334d" />
           <stop offset="100%" stopColor="#15476A" />
        </linearGradient>
      </defs>

      {variant === 'nav' && (
        <g transform="translate(100, 80)">
           {/* Map Base */}
           <path d="M0 40 L-70 5 L0 -30 L70 5 Z" fill="#e0f2fe" opacity="0.9" stroke="#15476A" strokeWidth="0.5" />
           
           {/* Path Lines */}
           <path d="M-40 10 L-10 -5 L20 10" fill="none" stroke="#15476A" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" className="animate-pulse" />
           
           {/* Location Pin */}
           <g transform="translate(20, 10)">
             <path d="M0 0 L-10 -20 A 10 10 0 1 1 10 -20 L0 0 Z" fill="url(#grad1)" />
             <circle cx="0" cy="-20" r="3" fill="white" />
           </g>
           
           {/* Start Point */}
           <circle cx="-40" cy="10" r="4" fill="#0e334d" stroke="#2c6e91" strokeWidth="2" />
        </g>
      )}

      {variant === 'deploy' && (
        <g transform="translate(100, 90)">
          {/* Base Ring */}
          <ellipse cx="0" cy="20" rx="45" ry="22" fill="none" stroke="url(#grad2)" strokeWidth="1.5" opacity="0.2" />
          <ellipse cx="0" cy="20" rx="30" ry="15" fill="#e0f2fe" opacity="0.5" />
          
          {/* Rocket Body */}
          <g transform="translate(0, -20) rotate(-10)">
             <path d="M0 -45 Q-18 -10 -18 15 L18 15 Q18 -10 0 -45 Z" fill="url(#grad1)" />
             {/* Fins */}
             <path d="M-18 15 L-28 28 L-10 22 Z" fill="#0e334d" />
             <path d="M18 15 L28 28 L10 22 Z" fill="#0e334d" />
             {/* Window */}
             <circle cx="0" cy="-15" r="6" fill="#0e334d" stroke="#e0f2fe" strokeWidth="1" />
          </g>
        </g>
      )}

      {variant === 'scale' && (
         <g transform="translate(100, 100)">
           {/* Left Building */}
           <g transform="translate(-35, 10)">
              <path d="M0 0 L-15 -8 L0 -16 L15 -8 Z" fill="url(#grad3)" />
              <path d="M-15 -8 L-15 15 L0 23 L0 0 Z" fill="url(#grad2)" />
              <path d="M0 0 L0 23 L15 15 L15 -8 Z" fill="#0e334d" />
           </g>
           {/* Right Building */}
           <g transform="translate(25, -5)">
              <path d="M0 0 L-15 -8 L0 -16 L15 -8 Z" fill="url(#grad3)" />
              <path d="M-15 -8 L-15 20 L0 28 L0 0 Z" fill="url(#grad2)" />
              <path d="M0 0 L0 28 L15 20 L15 -8 Z" fill="#0e334d" />
           </g>
           {/* Center Tall Building */}
           <g transform="translate(-5, -25)">
              <path d="M0 0 L-20 -10 L0 -20 L20 -10 Z" fill="url(#grad3)" />
              <path d="M-20 -10 L-20 35 L0 45 L0 0 Z" fill="url(#grad1)" />
              <path d="M0 0 L0 45 L20 35 L20 -10 Z" fill="#0e334d" />
           </g>
         </g>
      )}

      {variant === 'insights' && (
         <g transform="translate(100, 100)">
            {/* Platform */}
            <path d="M0 35 L-65 5 L0 -25 L65 5 Z" fill="#e0f2fe" stroke="#15476A" strokeWidth="0.5" />
            
            {/* Bar 1 */}
            <g transform="translate(-30, 5)">
               <path d="M0 0 L0 -15 L15 -7 L15 8 Z" fill="url(#grad2)" /> 
               <path d="M0 -15 L15 -22 L15 -7 L0 0 Z" fill="url(#grad3)" />
            </g>
            {/* Bar 2 */}
            <g transform="translate(-5, -5)">
               <path d="M0 0 L0 -25 L15 -17 L15 8 Z" fill="url(#grad1)" />
               <path d="M0 -25 L15 -32 L15 -17 L0 -10 Z" fill="url(#grad3)" />
            </g>
             {/* Bar 3 */}
             <g transform="translate(20, -20)">
               <path d="M0 0 L0 -30 L15 -22 L15 8 Z" fill="#0e334d" />
               <path d="M0 -30 L15 -37 L15 -22 L0 -15 Z" fill="url(#grad3)" />
            </g>
         </g>
      )}
    </svg>
  )
}

// --- Feature Card Component ---
interface FeatureCardProps {
  title: string;
  description: string;
  variant: 'nav' | 'deploy' | 'scale' | 'insights';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, variant }) => (
  <div className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand/5 hover:border-brand/20 transition-all duration-500 flex flex-col h-full overflow-hidden">
    
    <div className="relative z-10 mb-8">
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-6">{description}</p>
      <a href="#" className="inline-flex items-center gap-2 text-brand text-sm font-semibold group-hover:text-brand-light transition-colors">
        Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>

    <div className="mt-auto relative z-10 flex justify-center items-end pt-4">
       <IsometricIllustration variant={variant} />
    </div>
  </div>
);

// --- Main Features Section ---
export const Features: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      variant: 'nav',
      title: "Precise Navigation",
      description: "Help people find any room, desk, or zone in seconds with turn by turn indoor guidance."
    },
    {
      variant: 'deploy',
      title: "Easy Deployment",
      description: "Import floor plans, configure levels, and launch maps without heavy IT effort."
    },
    {
      variant: 'scale',
      title: "Scalable for Any Space",
      description: "From single offices to global campuses, manage every building in one place."
    },
    {
      variant: 'insights',
      title: "Actionable Insights",
      description: "See how spaces are used, optimize layouts, and improve workplace experience."
    }
  ];

  return (
    <section id="products" className="py-32 px-4 relative bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-brand/5 border border-brand/10 text-brand text-xs font-semibold tracking-wider uppercase mb-4">
            PixoMaps Platform Suite
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Get to know <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">PixoMaps</span>
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
            Replace outdated, complicated mapping tools with PixoMaps—the modern indoor-mapping platform built to give your teams clarity, speed, and complete spatial intelligence.
          </p>
        </div>

        {/* New 4-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};