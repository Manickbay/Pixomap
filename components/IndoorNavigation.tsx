
import React from 'react';
import { 
  Navigation, 
  Map, 
  Search, 
  Accessibility, 
  QrCode, 
  ArrowRight, 
  Plane, 
  Activity, 
  ShoppingBag, 
  GraduationCap,
  Layers,
  ChevronRight,
  MoveUp,
  // Fix: Added missing CheckCircle2 import
  CheckCircle2
} from 'lucide-react';
import { Button } from './Button';

interface IndoorNavigationProps {
  onNavigate?: (page: 'contact' | 'airports' | 'healthcare' | 'retail' | 'campuses') => void;
}

const NavigationIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="pathBlue" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#15476A" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>

    {/* Floors Backdrop */}
    <g opacity="0.1">
      <path d="M100 400 L300 300 L500 400 L300 500 Z" fill="#15476A" />
      <path d="M100 250 L300 150 L500 250 L300 350 Z" fill="#15476A" />
    </g>

    {/* Phone Body */}
    <rect x="180" y="50" width="240" height="420" rx="40" fill="url(#phoneGrad)" stroke="#334155" strokeWidth="4" />
    <rect x="195" y="75" width="210" height="370" rx="20" fill="white" />

    {/* Screen Content - Map View */}
    <g transform="translate(200, 100)">
       <rect x="0" y="0" width="200" height="320" rx="10" fill="#f8fafc" />
       
       {/* Map Grids */}
       <path d="M0 80 L200 80 M0 160 L200 160 M0 240 L200 240" stroke="#e2e8f0" strokeWidth="1" />
       <path d="M50 0 L50 320 M100 0 L100 320 M150 0 L150 320" stroke="#e2e8f0" strokeWidth="1" />
       
       {/* Animated Navigation Path */}
       <path d="M40 280 L40 120 L160 120 L160 40" fill="none" stroke="url(#pathBlue)" strokeWidth="6" strokeLinecap="round" strokeDasharray="12 8">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1.5s" repeatCount="indefinite" />
       </path>

       {/* Destination Pin */}
       <g transform="translate(160, 40)">
          <path d="M0 0 L-8 -15 A 8 8 0 1 1 8 -15 L0 0 Z" fill="#ef4444" />
          <circle cx="0" cy="-15" r="3" fill="white" />
       </g>

       {/* User Location Pulse */}
       <g transform="translate(40, 280)">
          <circle r="12" fill="#06b6d4" opacity="0.3">
             <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r="6" fill="#06b6d4" stroke="white" strokeWidth="2" />
       </g>
    </g>

    {/* Floating HUD Elements */}
    <g transform="translate(440, 120)" className="animate-float" style={{ animationDelay: '0.5s' }}>
       <rect x="0" y="0" width="100" height="40" rx="8" fill="white" shadow-lg="true" />
       <text x="12" y="24" fontSize="10" fontWeight="bold" fill="#15476A">Arrival: 2m</text>
       <path d="M80 20 L90 20" stroke="#15476A" strokeWidth="2" strokeLinecap="round" />
    </g>

    <g transform="translate(60, 240)" className="animate-float" style={{ animationDelay: '1s' }}>
       <rect x="0" y="0" width="120" height="40" rx="8" fill="#15476A" />
       <text x="15" y="24" fontSize="10" fontWeight="bold" fill="white">Turn Right In 5ft</text>
    </g>
  </svg>
);

export const IndoorNavigation: React.FC<IndoorNavigationProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      icon: Navigation,
      title: "Indoor turn-by-turn navigation",
      desc: "Provide real-time guidance with sub-meter accuracy to any destination."
    },
    {
      icon: Layers,
      title: "Multi-floor routing",
      desc: "Seamless transitions between levels with elevator and escalator awareness."
    },
    {
      icon: Search,
      title: "Destination discovery",
      desc: "Searchable directory of rooms, desks, and amenities with instant routing."
    },
    {
      icon: Accessibility,
      title: "Accessibility-friendly",
      desc: "Optimized routes for wheelchairs, strollers, and reduced mobility needs."
    },
    {
      icon: QrCode,
      title: "QR-based entry points",
      desc: "Launch navigation instantly from physical QR codes—no app download required."
    }
  ];

  const useCases = [
    { icon: Plane, label: "Airports", page: 'airports' as const, desc: "Guide passengers to gates and lounges." },
    { icon: Activity, label: "Hospitals", page: 'healthcare' as const, desc: "Patients find doctors and labs fast." },
    { icon: ShoppingBag, label: "Malls", page: 'retail' as const, desc: "Navigate to specific stores and offers." },
    { icon: GraduationCap, label: "Campuses", page: 'campuses' as const, desc: "Navigate across vast university grounds." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 w-fit mb-6">
              <Navigation size={14} className="text-brand" />
              <span className="text-xs font-bold text-brand tracking-wide uppercase">Indoor Navigation Engine</span>
            </div>
            <h1 className="text-4xl md:text-5 font-bold lg:text-7xl leading-tight tracking-tight text-slate-900 mb-6">
              Move Effortlessly <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">Inside the Great Indoors.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Enable users to navigate complex indoor environments with turn-by-turn guidance across multiple floors and buildings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => onNavigate?.('contact')}>Get Started</Button>
              <Button variant="secondary" onClick={() => onNavigate?.('contact')}>See Case Studies</Button>
            </div>
          </div>
          
          <div className="h-[500px] flex items-center justify-center">
             <NavigationIllustration />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Navigation Capabilities</h2>
            <p className="text-slate-500">Built for accuracy, speed, and inclusivity.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-brand/20 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand mb-8 shadow-sm group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Optimized for Your Industry</h2>
            <p className="text-slate-500">Tailored routing logic for unique environment needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <div 
                key={idx} 
                onClick={() => onNavigate?.(useCase.page)}
                className="group cursor-pointer bg-white p-8 rounded-3xl border border-slate-200 hover:border-brand/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand/5 rounded-xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                  <useCase.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{useCase.label}</h3>
                <p className="text-sm text-slate-500 mb-6">{useCase.desc}</p>
                <div className="flex items-center gap-2 text-brand font-bold text-sm">
                  Explore <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Illustration Section */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative">
              <div className="absolute inset-0 bg-brand/5 rounded-full blur-3xl" />
              <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 relative z-10">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white">
                          <MoveUp size={20} />
                       </div>
                       <span className="font-bold text-slate-900">Level Transition</span>
                    </div>
                    <span className="text-xs font-bold text-slate-400">Step 2 of 4</span>
                 </div>
                 <div className="space-y-6">
                    <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between">
                       <span className="text-slate-600">Take Elevator to Floor 4</span>
                       <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                          <Layers size={16} />
                       </div>
                    </div>
                    <div className="p-4 border-2 border-brand/10 border-dashed rounded-2xl text-center text-slate-400 text-sm">
                       Estimated time: 45s
                    </div>
                 </div>
              </div>
           </div>
           <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Seamless Multi-Floor Transitions</h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Pixomap doesn't just draw a flat map. Our engine understands the 3D topology of your building, providing intuitive guidance through elevators, stairs, and escalators for a truly multi-dimensional navigation experience.
              </p>
              <ul className="space-y-4">
                 {[
                   "Intelligent elevator wait-time estimation",
                   "Vertical floor-switching UI",
                   "Dynamic level detection (Blue-dot snapping)",
                   "Fire-exit and safety-first routing"
                 ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                       <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand text-xs">
                          <CheckCircle2 size={14} />
                       </div>
                       {item}
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand/30 rounded-full blur-[100px]" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">Ready to Guide Your Visitors?</h2>
          <p className="text-slate-400 mb-12 text-lg max-w-2xl mx-auto relative z-10">
            Empower your users with world-class indoor navigation. Get a tailored solution for your facility today.
          </p>
          <div className="flex justify-center relative z-10">
            <button 
              className="bg-brand hover:bg-brand-light text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-xl hover:scale-105" 
              onClick={() => onNavigate?.('contact')}
            >
              Request Free Demo <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
