import React from 'react';
import { Plane, MapPin, Clock, Users, ShoppingBag, Smartphone, TrendingUp, Zap, Activity, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface AirportsProps {
  onNavigate?: (page: 'contact') => void;
}

// Custom Isometric Airport Illustration - Luggage Belt Concept
const AirportIllustration = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="beltGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
      <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#15476A" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Floor Shadow */}
    <ellipse cx="300" cy="300" rx="220" ry="80" fill="#f1f5f9" />

    {/* Conveyor Belt Loop */}
    <g transform="translate(300, 250)">
      {/* Outer Rim */}
      <path d="M-180 0 Q-180 60 0 60 Q180 60 180 0 Q180 -60 0 -60 Q-180 -60 -180 0 Z" 
            fill="none" stroke="#cbd5e1" strokeWidth="24" />
      {/* Moving Rubber Belt */}
      <path d="M-180 0 Q-180 60 0 60 Q180 60 180 0 Q180 -60 0 -60 Q-180 -60 -180 0 Z" 
            fill="none" stroke="url(#beltGradient)" strokeWidth="16" />
      
      {/* Belt Segment Detail Animation */}
       <path d="M-180 0 Q-180 60 0 60 Q180 60 180 0 Q180 -60 0 -60 Q-180 -60 -180 0 Z" 
            fill="none" stroke="#ffffff" strokeWidth="16" strokeDasharray="4 20" strokeOpacity="0.1" className="animate-[spin_8s_linear_infinite]" />
    </g>

    {/* Luggage on Belt */}
    <g transform="translate(420, 220)">
        <path d="M0 0 L-20 10 L-20 -15 L0 -25 Z" fill="#64748b" />
        <path d="M0 -25 L20 -15 L20 10 L0 0 Z" fill="#94a3b8" />
        <path d="M0 -25 L-20 -15 L0 -5 L20 -15 Z" fill="#cbd5e1" />
    </g>
    
    {/* Digital Navigation Path */}
    <g filter="url(#glow)">
        {/* Path line from left to the target bag */}
        <path d="M100 320 Q 150 320 200 280 T 260 220" 
              fill="none" stroke="url(#navGradient)" strokeWidth="4" 
              strokeLinecap="round" strokeDasharray="10 6">
             <animate attributeName="stroke-dashoffset" from="32" to="0" dur="1s" repeatCount="indefinite" />
        </path>
        
        {/* Start Point (User) */}
        <g transform="translate(100, 320)">
            <circle r="6" fill="#15476A" stroke="white" strokeWidth="2" />
            <circle r="12" fill="none" stroke="#15476A" strokeOpacity="0.5">
                <animate attributeName="r" values="8;16" dur="2s" repeatCount="indefinite" opacity="0" />
                <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
            </circle>
        </g>
    </g>

    {/* Target Bag (Highlighted) */}
    <g transform="translate(260, 220)">
        {/* Bag Body */}
        <path d="M0 0 L-25 12 L-25 -20 L0 -35 Z" fill="#15476A" />
        <path d="M0 -35 L25 -20 L25 12 L0 0 Z" fill="#2c6e91" />
        <path d="M0 -35 L-25 -20 L0 -5 L25 -20 Z" fill="#06b6d4" />
        {/* Handle */}
        <path d="M-5 -25 L-5 -35 L5 -35 L5 -25" fill="none" stroke="#0e334d" strokeWidth="2" />
        
        {/* AR Marker floating above */}
        <g transform="translate(0, -60)">
             <path d="M0 0 L-8 -10 L8 -10 Z" fill="#06b6d4" className="animate-bounce" />
             <rect x="-30" y="-34" width="60" height="24" rx="12" fill="#06b6d4" />
             <text x="0" y="-18" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">My Bag</text>
        </g>
    </g>

  </svg>
);

export const Airports: React.FC<AirportsProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: MapPin,
      title: "Turn-by-turn Indoor Navigation",
      desc: "Guide passengers from curbside to gate with precise, blue-dot wayfinding."
    },
    {
      icon: Clock,
      title: "Real-time Gate & Flight Updates",
      desc: "Integrate live flight data to reroute passengers if gates change instantly."
    },
    {
      icon: Users,
      title: "Queue & Crowd Monitoring",
      desc: "Detect congestion at security checkpoints and redirect flow dynamically."
    },
    {
      icon: ShieldCheck,
      title: "Accessibility Routes",
      desc: "Specialized routing for wheelchairs, strollers, and reduced mobility needs."
    },
    {
      icon: ShoppingBag,
      title: "Retail & F&B Discovery",
      desc: "Boost non-aero revenue by guiding users to nearby shops and lounges."
    },
    {
      icon: Smartphone,
      title: "Staff Operational Navigation",
      desc: "Optimize ground crew movement for cleaning, maintenance, and security."
    }
  ];

  const benefits = [
    {
      icon: Activity,
      title: "Enhanced Passenger Flow",
      desc: "Reduce bottlenecks and improve terminal throughput efficiency."
    },
    {
      icon: TrendingUp,
      title: "Increased Retail Revenue",
      desc: "Drive footfall to duty-free and dining with contextual promotions."
    },
    {
      icon: Zap,
      title: "Reduced Queue Congestion",
      desc: "Balance loads across security lanes and check-in counters."
    },
    {
      icon: Users,
      title: "Better Coordination",
      desc: "Align ground staff with real-time location intelligence."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 w-fit mb-6">
              <Plane size={14} className="text-brand" />
              <span className="text-xs font-bold text-brand tracking-wide uppercase">Industry Solution: Airports</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Indoor Navigation for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">Stress-Free Airport Movement</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              Pixomap helps passengers move effortlessly from check-in to boarding with precise guidance, real-time updates, and congestion insights.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => onNavigate?.('contact')}>Book a Demo</Button>
              <Button variant="secondary" onClick={() => onNavigate?.('contact')}>View Case Study</Button>
            </div>
          </div>
          
          <div className="h-[400px] flex items-center justify-center">
            <AirportIllustration />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Terminal Intelligence</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From the parking garage to the boarding gate, Pixomap powers every step of the passenger and staff journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Benefits for Airport Operators</h2>
            <p className="text-slate-500">Why leading aviation hubs choose Pixomap.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                 <div className="mb-6 inline-block p-3 rounded-full bg-brand/5 text-brand">
                    <item.icon size={24} />
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};