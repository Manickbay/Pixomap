
import React from 'react';
import { Layers, Search, RefreshCw, Smartphone, Map, CheckCircle2, ArrowRight, MousePointer2, PencilRuler, Globe } from 'lucide-react';
import { Button } from './Button';

interface IndoorMappingPlatformProps {
  onNavigate?: (page: 'contact') => void;
}

const DigitizationIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="blueprintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
      <linearGradient id="holoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#15476A" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>

    {/* Physical Paper Blueprint (Bottom) */}
    <g transform="translate(300, 400)">
      <path d="M-220 0 L0 -110 L220 0 L0 110 Z" fill="white" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M-200 -10 L-200 10 M-180 -20 L-180 20" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />
      <path d="M-150 -30 L-50 -80 L50 -30 L-50 20 Z" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
      <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#94a3b8" fontWeight="bold" opacity="0.6">PHYSICAL BLUEPRINT</text>
    </g>

    {/* Connecting Light Beams */}
    <g opacity="0.3">
      <path d="M80 400 L80 150" stroke="url(#holoGrad)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M520 400 L520 150" stroke="url(#holoGrad)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M300 290 L300 100" stroke="url(#holoGrad)" strokeWidth="2" strokeDasharray="8 4" />
    </g>

    {/* Digital Map (Top) */}
    <g transform="translate(300, 150)">
      <path d="M-220 0 L0 -110 L220 0 L0 110 Z" fill="white" fillOpacity="0.8" stroke="#15476A" strokeWidth="2" className="backdrop-blur-md" />
      <path d="M-220 0 L0 -110 L220 0 L0 110 Z" fill="url(#holoGrad)" fillOpacity="0.05" />
      
      {/* Interactive POI Markers */}
      <circle cx="-60" cy="-30" r="6" fill="#06b6d4" className="animate-pulse" />
      <circle cx="80" cy="-10" r="6" fill="#15476A" className="animate-pulse" style={{animationDelay: '0.5s'}} />
      <circle cx="20" cy="40" r="6" fill="#06b6d4" className="animate-pulse" style={{animationDelay: '1s'}} />
      
      {/* 3D Walls Projection */}
      <path d="M-100 -20 L-100 -50 L-20 -90 L-20 -60 Z" fill="#15476A" fillOpacity="0.2" stroke="#15476A" />
      <path d="M40 10 L40 -20 L120 -60 L120 -30 Z" fill="#15476A" fillOpacity="0.2" stroke="#15476A" />
      
      <text x="0" y="-130" textAnchor="middle" fontSize="12" fill="#15476A" fontWeight="bold">DIGITAL TWIN V2.0</text>
    </g>

    {/* Scanning Bar */}
    <g transform="translate(300, 275)">
      <rect x="-240" y="-2" width="480" height="4" rx="2" fill="#06b6d4" fillOpacity="0.4">
        <animate attributeName="y" values="-150; 150; -150" dur="4s" repeatCount="indefinite" />
      </rect>
    </g>
  </svg>
);

export const IndoorMappingPlatform: React.FC<IndoorMappingPlatformProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      icon: Layers,
      title: "Floor Plan Conversion",
      desc: "Convert static blueprints, PDFs, or CAD files into high-fidelity interactive digital maps."
    },
    {
      icon: Map,
      title: "Multi-Floor Mastery",
      desc: "Seamlessly manage complex multi-building and multi-level layouts from a single source of truth."
    },
    {
      icon: Search,
      title: "Intelligent POIs",
      desc: "Create and manage searchable Points of Interest with metadata, photos, and live availability tags."
    },
    {
      icon: RefreshCw,
      title: "Dynamic Updates",
      desc: "Support for frequent layout changes. Update a room or close a corridor and sync instantly across all devices."
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Ready",
      desc: "Deliver cross-platform experiences with responsive SDKs for web, iOS, and Android applications."
    },
    {
      icon: Globe,
      title: "Cloud Delivery",
      desc: "Instantly deploy map updates globally through our high-speed content delivery network."
    }
  ];

  const benefits = [
    { title: "Faster visitor navigation", color: "bg-blue-500" },
    { title: "Improved spatial clarity", color: "bg-cyan-500" },
    { title: "Reduced on-site assistance", color: "bg-indigo-500" },
    { title: "Centralized map management", color: "bg-brand" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 w-fit mb-6">
              <PencilRuler size={14} className="text-brand" />
              <span className="text-xs font-bold text-brand tracking-wide uppercase">Mapping Core Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Digitize Your World <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">With Precision.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              PixoMaps provides a powerful indoor mapping platform to digitize, manage, and maintain complex indoor environments with unparalleled precision.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => onNavigate?.('contact')}>Start Mapping</Button>
              <Button variant="secondary" onClick={() => onNavigate?.('contact')}>Platform Tour</Button>
            </div>
          </div>
          
          <div className="h-[450px] flex items-center justify-center">
             <DigitizationIllustration />
          </div>
        </div>
      </section>

      {/* What It Does Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What It Does</h2>
            <div className="h-1 w-20 bg-brand rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-brand/20 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand mb-6 shadow-sm group-hover:bg-brand group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 backdrop-blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Unlock the Full Potential <br/> of Your Indoor Space</h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className={`w-10 h-10 rounded-full ${benefit.color} flex items-center justify-center text-white shrink-0`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col gap-6">
                <div className="flex items-center gap-4 mb-2">
                   <div className="w-10 h-10 rounded-xl bg-brand/5 flex items-center justify-center text-brand">
                      <MousePointer2 size={20} />
                   </div>
                   <h3 className="font-bold text-slate-900">Map Editor v2.0</h3>
                </div>
                <div className="space-y-4">
                   <div className="h-4 w-3/4 bg-slate-100 rounded-full" />
                   <div className="h-4 w-full bg-slate-100 rounded-full" />
                   <div className="h-24 w-full bg-slate-50 border border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-sm italic">
                      Drag & Drop Floor Plans Here
                   </div>
                   <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 bg-slate-100 rounded-lg" />
                      <div className="h-10 bg-brand rounded-lg flex items-center justify-center">
                         <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                      </div>
                      <div className="h-10 bg-slate-100 rounded-lg" />
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand/20 rounded-full blur-[100px]" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to Digitize Your <br/> Environment?</h2>
          <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto relative z-10">Get a specialized walkthrough of our mapping platform and see how easy it is to launch your digital twin.</p>
          <div className="flex justify-center relative z-10">
            <button className="bg-brand hover:bg-brand-light text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-lg hover:scale-105" onClick={() => onNavigate?.('contact')}>
              Request Demo <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
