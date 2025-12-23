import React from 'react';
import { Ticket, Map, Zap, Users, Shield, Calendar, Mic, Presentation, Navigation, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface EventsProps {
  onNavigate?: (page: 'contact') => void;
}

// --- Custom Illustrations ---

const EventIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="boothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
      <linearGradient id="eventPath" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ec4899" /> {/* Pink */}
        <stop offset="100%" stopColor="#8b5cf6" /> {/* Violet */}
      </linearGradient>
    </defs>

    {/* Stage Area */}
    <g transform="translate(300, 100)">
       <path d="M-250 0 L0 -60 L250 0 L0 60 Z" fill="#1e293b" />
       <rect x="-20" y="-80" width="40" height="60" fill="#334155" />
       <text x="0" y="-30" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">MAIN STAGE</text>
       <circle cx="0" cy="0" r="10" fill="#ec4899" opacity="0.5" className="animate-ping" />
    </g>

    {/* Exhibition Floor */}
    <g transform="translate(300, 320)">
       <path d="M-250 0 L0 -150 L250 0 L0 150 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
       
       {/* Booths Grid */}
       <g transform="translate(-150, -50)">
          <rect x="0" y="0" width="60" height="40" rx="4" fill="white" stroke="#cbd5e1" />
          <text x="30" y="25" textAnchor="middle" fontSize="10" fill="#64748b">Booth A</text>
       </g>
       <g transform="translate(90, -50)">
          <rect x="0" y="0" width="60" height="40" rx="4" fill="white" stroke="#cbd5e1" />
          <text x="30" y="25" textAnchor="middle" fontSize="10" fill="#64748b">Booth B</text>
       </g>
       <g transform="translate(-30, 20)">
          <rect x="0" y="0" width="60" height="40" rx="4" fill="#ec4899" fillOpacity="0.1" stroke="#ec4899" />
          <text x="30" y="25" textAnchor="middle" fontSize="10" fill="#ec4899" fontWeight="bold">Booth C</text>
          <path d="M30 -10 L30 -20" stroke="#ec4899" strokeWidth="2" />
          <circle cx="30" cy="-25" r="3" fill="#ec4899" />
       </g>
    </g>

    {/* Attendee Path */}
    <path d="M100 450 L270 340 L270 100" fill="none" stroke="url(#eventPath)" strokeWidth="4" strokeDasharray="8 4" className="animate-pulse" />
    
    <g transform="translate(100, 450)">
       <circle r="6" fill="#ec4899" stroke="white" strokeWidth="2" />
       <text x="0" y="20" textAnchor="middle" fontSize="10" fill="#475569">Current Location</text>
    </g>
  </svg>
);

const CrowdHeatmap = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full rounded-xl shadow-lg border border-slate-200 bg-white overflow-hidden">
     <rect x="0" y="0" width="400" height="40" fill="#f8fafc" />
     <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#1e293b">Live Crowd Density • Hall 3</text>
     
     {/* Hall Layout */}
     <rect x="20" y="60" width="360" height="170" rx="8" fill="#f1f5f9" stroke="#e2e8f0" />
     
     {/* Crowd Blobs */}
     <circle cx="100" cy="140" r="40" fill="#ef4444" opacity="0.4" filter="blur(12px)" />
     <circle cx="280" cy="110" r="30" fill="#f59e0b" opacity="0.4" filter="blur(10px)" />
     <circle cx="200" cy="180" r="25" fill="#22c55e" opacity="0.3" filter="blur(8px)" />
     
     {/* Alert Tooltip */}
     <g transform="translate(100, 100)">
        <rect x="-40" y="-30" width="80" height="20" rx="4" fill="#1e293b" />
        <text x="0" y="-17" textAnchor="middle" fontSize="9" fill="white">Heavy Congestion</text>
     </g>
  </svg>
);

export const Events: React.FC<EventsProps> = ({ onNavigate }) => {
  const problems = [
    { icon: Users, title: "Crowd Bottlenecks", desc: "Narrow aisles and popular booths causing safety risks and visitor frustration." },
    { icon: Map, title: "Booth Discovery", desc: "Attendees failing to find exhibitors they specifically came to see in massive halls." },
    { icon: Calendar, title: "Schedule Overlap", desc: "Difficulty navigating between different talk tracks across far-flung rooms." },
    { icon: Shield, title: "Emergency Routing", desc: "Slow evacuation or help response in high-density, temporary layouts." }
  ];

  const features = [
    { icon: Navigation, title: "Exhibitor Finder", desc: "Integrated search for brands with a direct path from current location to booth." },
    { icon: Users, title: "Live Crowd Heatmaps", desc: "Real-time density visualization for organizers to manage crowd flow." },
    { icon: Mic, title: "Session Wayfinding", desc: "Guidance to keynote halls based on the attendee's personal event schedule." },
    { icon: MessageSquare, title: "Location-Based Alerts", desc: "Push notifications for session starts or nearby exhibitor demos." },
    { icon: Zap, title: "Dynamic Rerouting", desc: "Instantly update paths if an aisle is closed for a VIP or a performance." },
    { icon: Presentation, title: "Lead Retargeting", desc: "Provide exhibitors with data on footfall and dwell time around their booth." }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Higher Lead Gen", desc: "Improved wayfinding leads to more booth visits and longer engagement.", color: "bg-pink-50 text-pink-600" },
    { icon: Users, title: "Better UX", desc: "Remove the 'lost' feeling at trade shows, keeping energy levels high.", color: "bg-violet-50 text-violet-600" },
    { icon: Shield, title: "Operational Safety", desc: "Monitor hall density to comply with fire safety and health regulations.", color: "bg-emerald-50 text-emerald-600" },
    { icon: Mic, title: "Content Engagement", desc: "Ensure attendees reach talk tracks on time, maximizing speaker ROI.", color: "bg-blue-50 text-blue-600" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <section className="relative pt-32 pb-20 px-4 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 w-fit mb-6">
              <Ticket size={14} className="text-pink-600" />
              <span className="text-xs font-bold text-pink-700 tracking-wide uppercase">Industry Solution: Events & Exhibits</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Smarter Navigation for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600">Events & Conferences</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              Turn confusing trade show floors into a guided digital experience. Manage crowds, boost exhibitor visibility, and improve attendee satisfaction.
            </p>
            <div className="flex gap-4">
              <Button className="!bg-pink-600 hover:!bg-pink-700" onClick={() => onNavigate?.('contact')}>Get Event Pricing</Button>
              <Button variant="secondary" className="border-pink-200 text-pink-700 hover:bg-pink-50" onClick={() => onNavigate?.('contact')}>View Sample Map</Button>
            </div>
          </div>
          <div className="h-[450px] flex items-center justify-center">
             <EventIllustration />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Navigating the Modern Event</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Temporary facilities, high density, and tight schedules require real-time location intelligence.</p>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((item, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Engagement Features</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
               {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-5 group">
                     <div className="shrink-0 w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
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
               <h2 className="text-3xl font-bold text-slate-900">Impact for Organizers</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {benefits.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform">
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

      <section className="py-24 px-4 bg-white">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="text-pink-600 font-bold uppercase text-sm mb-2">Crowd Intelligence</div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Real-Time Hall Dynamics</h2>
               <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Monitor visitor flow across your venue. Identify hot spots and cold zones instantly to optimize hall layouts and increase exhibitor satisfaction.
               </p>
               <ul className="space-y-4 mb-8">
                  {[
                     "Real-time hall occupancy heatmaps",
                     "Traffic density analysis for main aisles",
                     "Average dwell time per exhibition booth",
                     "Historical flow playback for future planning"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-xs">✓</div>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="h-[300px] md:h-[400px]">
               <CrowdHeatmap />
            </div>
         </div>
      </section>

      <section className="py-24 px-4 bg-white">
         <div className="max-w-5xl mx-auto bg-gradient-to-br from-pink-900 to-pink-800 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Modernize Your Event <br/> Journey with Pixomap</h2>
            <div className="flex justify-center relative z-10">
               <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all" onClick={() => onNavigate?.('contact')}>
                  Request Event Proposal <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};