import React from 'react';
import { Activity, Clock, Map, Users, HeartPulse, Stethoscope, Accessibility, Siren, Database, TrendingUp, CalendarCheck, ShieldCheck, Building2, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface HealthcareProps {
  onNavigate?: (page: 'contact') => void;
}

// --- Custom Illustrations ---

const HospitalIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="hospFloor" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
      <linearGradient id="hospPath" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" /> {/* Medical Green */}
        <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
      </linearGradient>
      <filter id="medGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Floor 1: Lobby & Reception */}
    <g transform="translate(300, 380)">
      <path d="M-200 0 L0 -100 L200 0 L0 100 Z" fill="white" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M-200 0 L0 -100 L200 0 L0 100 Z" fill="url(#hospFloor)" opacity="0.5" />
      {/* Reception Desk */}
      <path d="M-50 -20 L0 -45 L50 -20 L0 5 Z" fill="#e2e8f0" stroke="#94a3b8" />
      <text x="0" y="10" textAnchor="middle" fontSize="10" fill="#64748b" fontStyle="italic">Reception</text>
    </g>

    {/* Floor 2: OPD & Labs */}
    <g transform="translate(300, 240)">
      <path d="M-200 0 L0 -100 L200 0 L0 100 Z" fill="white" stroke="#cbd5e1" strokeWidth="2" opacity="0.9" />
      <path d="M-200 0 L0 -100 L200 0 L0 100 Z" fill="url(#hospFloor)" opacity="0.4" />
      {/* Rooms */}
      <path d="M-120 -10 L-80 -30 L-40 -10 L-80 10 Z" fill="#f1f5f9" stroke="#cbd5e1" />
      <text x="-80" y="5" textAnchor="middle" fontSize="10" fill="#64748b">Lab 01</text>
      
      <path d="M40 -10 L80 -30 L120 -10 L80 10 Z" fill="#f1f5f9" stroke="#cbd5e1" />
      <text x="80" y="5" textAnchor="middle" fontSize="10" fill="#64748b">OPD</text>
    </g>

    {/* Floor 3: Wards & ICU */}
    <g transform="translate(300, 100)">
      <path d="M-200 0 L0 -100 L200 0 L0 100 Z" fill="white" stroke="#cbd5e1" strokeWidth="2" opacity="0.95" />
      <path d="M-200 0 L0 -100 L200 0 L0 100 Z" fill="url(#hospFloor)" opacity="0.3" />
      {/* Beds Area */}
      <path d="M-60 -20 L0 -50 L60 -20 L0 10 Z" fill="#ecfdf5" stroke="#10b981" strokeWidth="0.5" />
      <text x="0" y="-10" textAnchor="middle" fontSize="10" fill="#059669" fontWeight="bold">Patient Ward</text>
    </g>

    {/* Elevator Shaft Connection */}
    <path d="M300 380 L300 100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />

    {/* Navigation Path */}
    <g filter="url(#medGlow)">
      {/* Floor 1 Path */}
      <path d="M150 455 L300 380" stroke="url(#hospPath)" strokeWidth="3" fill="none" strokeDasharray="6 4" className="animate-pulse" />
      {/* Vertical Transition */}
      <path d="M300 380 L300 240" stroke="url(#hospPath)" strokeWidth="2" fill="none" strokeDasharray="4 2" opacity="0.5" />
      {/* Floor 2 Path */}
      <path d="M300 240 L380 280" stroke="url(#hospPath)" strokeWidth="3" fill="none" strokeDasharray="6 4" className="animate-pulse" />
      
      {/* User Location Pin (Floor 1) */}
      <g transform="translate(150, 455)">
         <circle r="4" fill="#10b981" stroke="white" />
      </g>
      
      {/* Destination Pin (Floor 2 - OPD) */}
      <g transform="translate(380, 280)">
         <path d="M0 0 L-10 -20 L10 -20 Z" fill="#06b6d4" className="animate-bounce" />
         <circle cx="0" cy="-20" r="3" fill="white" />
      </g>
    </g>
  </svg>
);

const HeatmapDashboard = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full rounded-xl shadow-lg border border-slate-200 bg-white overflow-hidden">
    {/* Sidebar */}
    <rect x="0" y="0" width="60" height="250" fill="#f8fafc" />
    <rect x="15" y="20" width="30" height="30" rx="8" fill="#15476A" />
    <rect x="15" y="70" width="30" height="6" rx="3" fill="#cbd5e1" />
    <rect x="15" y="90" width="30" height="6" rx="3" fill="#cbd5e1" />
    <rect x="15" y="110" width="30" height="6" rx="3" fill="#cbd5e1" />

    {/* Header */}
    <rect x="60" y="0" width="340" height="50" fill="white" />
    <text x="80" y="30" fontSize="12" fontWeight="bold" fill="#1e293b">Emergency Ward • Real-time Occupancy</text>
    
    {/* Map Area */}
    <rect x="80" y="70" width="300" height="160" rx="8" fill="#f1f5f9" stroke="#e2e8f0" />
    
    {/* Floor Plan Lines */}
    <path d="M120 70 L120 230 M200 70 L200 230 M280 70 L280 230" stroke="#cbd5e1" strokeWidth="1" />
    <path d="M80 150 L380 150" stroke="#cbd5e1" strokeWidth="1" />

    {/* Heatmap Blobs */}
    <circle cx="160" cy="110" r="30" fill="#ef4444" opacity="0.4" filter="blur(8px)" />
    <circle cx="240" cy="190" r="25" fill="#f59e0b" opacity="0.4" filter="blur(8px)" />
    <circle cx="340" cy="110" r="20" fill="#22c55e" opacity="0.3" filter="blur(8px)" />

    {/* Data Tooltip */}
    <g transform="translate(160, 90)">
      <rect x="0" y="0" width="60" height="24" rx="4" fill="#1e293b" />
      <text x="30" y="16" textAnchor="middle" fontSize="10" fill="white">High Traffic</text>
    </g>
  </svg>
);

// --- Component ---

export const Healthcare: React.FC<HealthcareProps> = ({ onNavigate }) => {
  const problems = [
    { icon: Map, title: "Wayfinding Confusion", desc: "Patients getting lost in complex multi-block campuses." },
    { icon: Clock, title: "Appointment Delays", desc: "Late arrivals disrupting doctor schedules and OPD flow." },
    { icon: Building2, title: "Layout Complexity", desc: "Multi-floor confusion between diagnostics, labs, and wards." },
    { icon: Users, title: "Staff Inefficiency", desc: "Medical staff losing valuable time navigating between units." }
  ];

  const features = [
    { 
      icon: Stethoscope, 
      title: "Turn-by-Turn Navigation", 
      desc: "Precise guidance to OPD rooms, labs, wards, pharmacies, and billing counters."
    },
    { 
      icon: Users, 
      title: "Visitor Routing", 
      desc: "Direct routing to specific patient rooms with access-controlled paths for safety."
    },
    { 
      icon: Activity, 
      title: "Real-time Rerouting", 
      desc: "Instantly update paths during floor maintenance, cleaning, or emergencies."
    },
    { 
      icon: Accessibility, 
      title: "Accessibility Modes", 
      desc: "Prioritize elevators and ramps for wheelchairs, stretchers, and elderly patients."
    },
    { 
      icon: Siren, 
      title: "Emergency Response", 
      desc: "Fastest route calculation for Code Blue teams to reach ICU, OT, or ER."
    },
    { 
      icon: Database, 
      title: "System Integration", 
      desc: "Seamlessly sync with hospital ERP and appointment systems for smart scheduling."
    }
  ];

  const benefits = [
    {
      icon: CalendarCheck,
      title: "Reduced Late Arrivals",
      desc: "Ensure patients reach appointments on time, optimizing doctor utilization.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: HeartPulse,
      title: "Lower Patient Anxiety",
      desc: "Reduce the stress of navigating a hospital environment for patients and kin.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Staff Efficiency",
      desc: "Streamline movement for porters, nurses, and equipment transport.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: ShieldCheck,
      title: "Better Experience",
      desc: "Modernize your facility's image with state-of-the-art digital guidance.",
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 w-fit mb-6">
              <HeartPulse size={14} className="text-emerald-600" />
              <span className="text-xs font-bold text-emerald-700 tracking-wide uppercase">Industry Solution: Healthcare</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Smart Indoor Navigation for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Hospitals & Facilities</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              Pixomap reduces patient confusion, improves on-time arrivals, and streamlines staff movement across complex medical environments with precise indoor guidance.
            </p>
            <div className="flex gap-4">
              <Button className="!bg-emerald-600 hover:!bg-emerald-700" onClick={() => onNavigate?.('contact')}>Request Demo</Button>
              <Button variant="secondary" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50" onClick={() => onNavigate?.('contact')}>See Capabilities</Button>
            </div>
          </div>
          <div className="h-[450px] flex items-center justify-center">
             <HospitalIllustration />
          </div>
        </div>
      </section>

      {/* 2. Problem Highlight Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Healthcare Navigation Matters</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Large medical campuses can be overwhelming. We solve the friction points.</p>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((item, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 mx-auto mb-4">
                     <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 3. Feature Breakdown */}
      <section className="py-24 px-4 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Patient-Centric Features</h2>
               <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
               {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-5 group">
                     <div className="shrink-0 w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        <feature.icon size={28} />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="py-24 px-4 bg-slate-50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900">Designed for Care Outcomes</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {benefits.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                        <item.icon size={24} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                     <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Analytics & Insights */}
      <section className="py-24 px-4 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2">Hospital Intelligence</div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Operations at a Glance</h2>
               <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Provide hospital management with actionable data to optimize resources. View real-time patient flow heatmaps, analyze department congestion, and improve emergency team response times.
               </p>
               <ul className="space-y-4 mb-8">
                  {[
                     "Real-time patient flow heatmaps",
                     "Department congestion insights",
                     "Staff movement optimization",
                     "Time-to-reach analytics for ER teams"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">✓</div>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full bg-slate-100 rounded-2xl p-4 lg:p-8">
                <HeatmapDashboard />
                {/* Floating Elements */}
                <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce">
                   <div className="flex items-center gap-3">
                      <Clock className="text-emerald-500" size={20} />
                      <div>
                         <div className="text-xs text-slate-400 font-bold uppercase">Avg. Wait Time</div>
                         <div className="text-lg font-bold text-slate-900">-15% Improved</div>
                      </div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* 6. Use Cases */}
      <section className="py-20 px-4 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Trusted across the Healthcare Spectrum</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {["Multi-Block Hospitals", "Diagnostic Centers", "Emergency Care Units", "Medical Campuses", "Rehabilitation Centers"].map((tag, i) => (
                  <span key={i} className="px-6 py-3 bg-white rounded-full border border-slate-200 text-slate-600 font-medium shadow-sm">
                     {tag}
                  </span>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-24 px-4 bg-white">
         <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Transform Patient & Staff <br/> Experience with Pixomap</h2>
            <div className="flex justify-center relative z-10">
               <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-lg shadow-emerald-900/20 hover:scale-105" onClick={() => onNavigate?.('contact')}>
                  Request Demo <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};