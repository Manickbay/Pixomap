
import React from 'react';
import { 
  Zap, 
  MapPin, 
  History, 
  LayoutDashboard, 
  ShieldAlert, 
  DoorOpen, 
  Activity, 
  Shield, 
  Users, 
  Monitor, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from './Button';

interface RealTimeTrackingProps {
  onNavigate?: (page: 'contact') => void;
}

const RadarIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <radialGradient id="radarPulse" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#15476A" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Digital Grid Base */}
    <g transform="translate(300, 350)">
      <path d="M-250 0 L0 -125 L250 0 L0 125 Z" fill="url(#gridGrad)" stroke="#15476A" strokeWidth="1" strokeOpacity="0.3" />
      {/* Grid Lines */}
      <g stroke="#15476A" strokeWidth="0.5" strokeOpacity="0.2">
        <path d="M-200 -25 L200 -25 M-150 -50 L150 -50 M-100 -75 L100 -75" />
        <path d="M-200 25 L200 25 M-150 50 L150 50 M-100 75 L100 75" />
        <path d="M-200 -25 L-200 25 M-100 -75 L-100 75 M0 -125 L0 125 M100 -75 L100 75 M200 -25 L200 25" />
      </g>
    </g>

    {/* Sweeping Radar Line */}
    <g transform="translate(300, 350)">
      <line x1="0" y1="0" x2="0" y2="-125" stroke="#06b6d4" strokeWidth="2" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
      </line>
    </g>

    {/* Moving Targets (People/Objects) */}
    <g transform="translate(300, 350)">
      {/* Target 1 */}
      <g>
        <animateMotion dur="6s" repeatCount="indefinite" path="M-100 -20 L-20 -60 L60 -10 L120 -50" />
        <circle r="15" fill="url(#radarPulse)">
          <animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#06b6d4" stroke="white" strokeWidth="1.5" />
        <text x="8" y="-8" fontSize="10" fill="#15476A" fontWeight="bold">ID-402</text>
      </g>

      {/* Target 2 */}
      <g>
        <animateMotion dur="8s" repeatCount="indefinite" path="M150 20 L50 60 L-80 10 L-140 40" />
        <circle r="15" fill="url(#radarPulse)">
          <animate attributeName="r" values="12;24;12" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#15476A" stroke="white" strokeWidth="1.5" />
        <text x="8" y="-8" fontSize="10" fill="#15476A" fontWeight="bold">ASSET-09</text>
      </g>

      {/* Target 3 - Restricted Area Alert */}
      <g transform="translate(80, -40)">
        <circle r="20" fill="#ef4444" fillOpacity="0.1">
          <animate attributeName="fill-opacity" values="0.1;0.3;0.1" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle r="5" fill="#ef4444" stroke="white" strokeWidth="2" />
        <text x="10" y="-10" fontSize="10" fill="#ef4444" fontWeight="black">UNAUTHORIZED</text>
      </g>
    </g>

    {/* Floating Data UI */}
    <g transform="translate(450, 100)" className="animate-float">
      <rect x="0" y="0" width="120" height="60" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <text x="15" y="25" fontSize="11" fontWeight="bold" fill="#64748b">ACTIVE TAGS</text>
      <text x="15" y="45" fontSize="20" fontWeight="black" fill="#15476A">1,204</text>
    </g>
  </svg>
);

export const RealTimeTracking: React.FC<RealTimeTrackingProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      icon: MapPin,
      title: "Real-time indoor positioning",
      desc: "Instant live tracking of mobile assets and personnel with high-frequency updates."
    },
    {
      icon: ShieldAlert,
      title: "Zone-based monitoring",
      desc: "Define virtual fences and receive instant alerts when tags enter or exit restricted areas."
    },
    {
      icon: DoorOpen,
      title: "Entry / Exit detection",
      desc: "Automated logging of when people and equipment move between floors or buildings."
    },
    {
      icon: History,
      title: "Movement history tracking",
      desc: "Playback historical paths to analyze workflows, incident reports, or spatial efficiency."
    },
    {
      icon: LayoutDashboard,
      title: "Role-based dashboards",
      desc: "Custom visualization layers for security, clinical staff, or operational managers."
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      desc: "Optimized data pipeline ensuring what you see on screen is happening right now."
    }
  ];

  const useCases = [
    { 
      icon: Activity, 
      label: "Hospital Staff Coordination", 
      desc: "Know exactly where nurses and specialists are for faster clinical response." 
    },
    { 
      icon: Shield, 
      label: "Security Monitoring", 
      desc: "Track guard patrols and receive alerts for unauthorized area access." 
    },
    { 
      icon: Users, 
      label: "Workforce Visibility", 
      desc: "Optimize labor allocation by understanding live team distribution." 
    },
    { 
      icon: Monitor, 
      label: "Operational Control Rooms", 
      desc: "Centralized command centers for large-scale facility management." 
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 w-fit mb-6">
              <Zap size={14} className="text-brand" />
              <span className="text-xs font-bold text-brand tracking-wide uppercase">RTLS Engine v2.0</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Total Visibility. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">In Real-Time.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Track the real-time location of people or objects inside buildings to improve operational awareness and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => onNavigate?.('contact')}>Deploy Tracking</Button>
              <Button variant="secondary" onClick={() => onNavigate?.('contact')}>View Demo Dashboard</Button>
            </div>
          </div>
          
          <div className="h-[500px] flex items-center justify-center">
             <RadarIllustration />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tracking Capabilities</h2>
            <div className="h-1 w-20 bg-brand rounded-full mx-auto"></div>
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

      {/* Ideal For Section */}
      <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/10 backdrop-blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ideal For Any Complex Facility</h2>
            <p className="text-slate-400">Where operational awareness is non-negotiable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-light/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <useCase.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{useCase.label}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Highlight */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600">
                    <ShieldAlert size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900">Emergency Geofencing</h3>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Automate your safety protocols. If a technician enters a high-voltage zone without authorization, or a lone worker stops moving, Pixomap triggers instant alerts to your control room.
              </p>
              <ul className="space-y-4">
                 {[
                   "Zero-latency safety alerts",
                   "Lone worker 'Man Down' detection",
                   "Automated evacuation headcounts",
                   "Authorized-only area auditing"
                 ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                       <CheckCircle2 size={18} className="text-brand" />
                       {item}
                    </li>
                 ))}
              </ul>
           </div>
           <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Proactive Security <br/> & Operational Safety</h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Pixomap’s Real-Time Location System (RTLS) isn't just about dots on a map—it's about actionable data that saves lives and improves operational efficiency. 
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-black text-brand mb-1">99.9%</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Accuracy</div>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-black text-brand mb-1">&lt; 1s</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Latency</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-brand overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready for Ultimate Awareness?</h2>
          <p className="text-brand-100 mb-12 text-lg max-w-2xl mx-auto">
            Schedule a session with our RTLS experts to see how real-time tracking can transform your specific facility workflows.
          </p>
          <div className="flex justify-center">
            <button 
              className="bg-white text-brand px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-2xl hover:bg-brand-50 hover:scale-105" 
              onClick={() => onNavigate?.('contact')}
            >
              Request RTLS Demo <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
