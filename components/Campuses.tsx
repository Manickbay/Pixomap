import React from 'react';
import { GraduationCap, Map, Calendar, Users, Shield, Building, Library, Coffee, BookOpen, Clock, Activity, ArrowRight, Zap, MapPin } from 'lucide-react';
import { Button } from './Button';

interface CampusesProps {
  onNavigate?: (page: 'contact') => void;
}

// --- Custom Illustrations ---

const CampusIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="campusFloor" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
      <linearGradient id="campusPath" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4f46e5" /> {/* Indigo */}
        <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
      </linearGradient>
      <filter id="indigoGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Greenery / Base */}
    <ellipse cx="300" cy="400" rx="250" ry="80" fill="#f1f5f9" opacity="0.8" />

    {/* Main Library Building */}
    <g transform="translate(300, 320)">
      <path d="M-100 0 L0 -50 L100 0 L0 50 Z" fill="white" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M-100 0 L0 -50 L100 0 L0 50 Z" fill="url(#campusFloor)" opacity="0.5" />
      <path d="M-80 -40 L-80 60 L0 110 L0 10 Z" fill="#6366f1" opacity="0.9" transform="translate(0, -50)" />
      <path d="M0 10 L0 110 L80 60 L80 -40 Z" fill="#4f46e5" transform="translate(0, -50)" />
      <text x="0" y="-10" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Main Library</text>
    </g>

    {/* Science Block */}
    <g transform="translate(150, 220)">
      <path d="M-60 0 L0 -30 L60 0 L0 30 Z" fill="white" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M-60 -20 L-60 20 L0 50 L0 10 Z" fill="#94a3b8" />
      <path d="M0 10 L0 50 L60 20 L60 -20 Z" fill="#64748b" />
      <text x="0" y="-10" textAnchor="middle" fontSize="9" fill="#475569">Science Hall</text>
    </g>

    {/* Student Center */}
    <g transform="translate(450, 240)">
      <path d="M-50 0 L0 -25 L50 0 L0 25 Z" fill="white" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M-50 -10 L-50 20 L0 45 L0 15 Z" fill="#e2e8f0" />
      <path d="M0 15 L0 45 L50 20 L50 -10 Z" fill="#cbd5e1" />
      <text x="0" y="-5" textAnchor="middle" fontSize="9" fill="#475569">Hub</text>
    </g>

    {/* Connecting Paths */}
    <g filter="url(#indigoGlow)">
      {/* Entrance to Library */}
      <path d="M100 450 L300 320" stroke="url(#campusPath)" strokeWidth="3" fill="none" strokeDasharray="6 4" className="animate-pulse" />
      {/* Library to Science Hall */}
      <path d="M300 320 L150 220" stroke="url(#campusPath)" strokeWidth="2" fill="none" strokeDasharray="4 2" opacity="0.4" />
      
      {/* User Pin */}
      <g transform="translate(100, 450)">
         <circle r="5" fill="#4f46e5" stroke="white" strokeWidth="2" />
      </g>
      
      {/* Destination Marker */}
      <g transform="translate(150, 220)">
         <path d="M0 0 L-8 -16 L8 -16 Z" fill="#06b6d4" className="animate-bounce" />
         <circle cx="0" cy="-16" r="3" fill="white" />
      </g>
    </g>
  </svg>
);

const CampusAnalytics = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full rounded-xl shadow-lg border border-slate-200 bg-white overflow-hidden">
    <rect x="0" y="0" width="400" height="50" fill="#f8fafc" />
    <text x="20" y="30" fontSize="12" fontWeight="bold" fill="#1e293b">Facility Utilization • Live</text>
    
    {/* Utilization Bars */}
    <g transform="translate(20, 70)">
       <text x="0" y="15" fontSize="10" fill="#64748b">Auditorium</text>
       <rect x="80" y="5" width="280" height="12" rx="6" fill="#f1f5f9" />
       <rect x="80" y="5" width="220" height="12" rx="6" fill="#4f46e5" />
       <text x="330" y="15" fontSize="10" fontWeight="bold" fill="#4f46e5">85%</text>

       <text x="0" y="45" fontSize="10" fill="#64748b">Cafeteria</text>
       <rect x="80" y="35" width="280" height="12" rx="6" fill="#f1f5f9" />
       <rect x="80" y="35" width="140" height="12" rx="6" fill="#06b6d4" />
       <text x="330" y="45" fontSize="10" fontWeight="bold" fill="#06b6d4">40%</text>

       <text x="0" y="75" fontSize="10" fill="#64748b">Study Hall</text>
       <rect x="80" y="65" width="280" height="12" rx="6" fill="#f1f5f9" />
       <rect x="80" y="65" width="260" height="12" rx="6" fill="#10b981" />
       <text x="330" y="75" fontSize="10" fontWeight="bold" fill="#10b981">92%</text>
    </g>

    {/* Bottom Graph Area */}
    <path d="M20 220 L380 220" stroke="#e2e8f0" strokeWidth="1" />
    <path d="M20 220 Q 100 150, 200 180 T 380 140" fill="none" stroke="#4f46e5" strokeWidth="2" opacity="0.6" />
    <circle cx="200" cy="180" r="4" fill="#4f46e5" />
  </svg>
);

// --- Component ---

export const Campuses: React.FC<CampusesProps> = ({ onNavigate }) => {
  const problems = [
    { icon: Map, title: "Sprawling Layouts", desc: "Students and new staff frequently get lost between multiple blocks and annexes." },
    { icon: Clock, title: "Class Tardiness", desc: "Finding the right lecture hall or lab in time for sessions is a daily friction point." },
    { icon: Calendar, title: "Event Confusion", desc: "One-off workshops and seminars in temporary spaces are hard to locate." },
    { icon: Shield, title: "Safety Gaps", desc: "Locating help or emergency exits in vast facilities can be critical in high-stress moments." }
  ];

  const features = [
    { 
      icon: BookOpen, 
      title: "Schedule Integration", 
      desc: "Connect to the LMS to provide 'Next Class' navigation directly from student calendars."
    },
    { 
      icon: Library, 
      title: "Multi-Floor Mapping", 
      desc: "Detailed views of libraries, dorms, and labs with level-by-level floor switching."
    },
    { 
      icon: Coffee, 
      title: "Amenity Discovery", 
      desc: "Find open dining halls, quiet study zones, and available printers in real-time."
    },
    { 
      icon: Users, 
      title: "Collaborative Wayfinding", 
      desc: "Share your live location with group members for meetups at 'The Quad' or 'Library Lab B'."
    },
    { 
      icon: Activity, 
      title: "Asset Management", 
      desc: "Track AV equipment, lab tools, and maintenance vehicles across the entire campus."
    },
    { 
      icon: MapPin, 
      title: "Outdoor-Indoor Sync", 
      desc: "Seamless transition from campus gate GPS to building-specific blue-dot navigation."
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Better Onboarding",
      desc: "Empower freshmen and visitors to navigate with confidence from day one.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: Zap,
      title: "Improved Safety",
      desc: "Real-time emergency routing and facility alerts for all campus occupants.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Building,
      title: "Facility Optimization",
      desc: "Analyze data to see which lecture halls and study spaces are underutilized.",
      color: "bg-slate-50 text-slate-600"
    },
    {
      icon: Users,
      title: "Unified Experience",
      desc: "A single digital interface for parking, classrooms, events, and support.",
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 w-fit mb-6">
              <GraduationCap size={14} className="text-indigo-600" />
              <span className="text-xs font-bold text-indigo-700 tracking-wide uppercase">Industry Solution: Campuses</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              A Living Map for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Smart Campuses</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              From historic universities to modern corporate HQs, Pixomap turns complex sprawling facilities into easy-to-navigate digital ecosystems.
            </p>
            <div className="flex gap-4">
              <Button className="!bg-indigo-600 hover:!bg-indigo-700" onClick={() => onNavigate?.('contact')}>Explore Platform</Button>
              <Button variant="secondary" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50" onClick={() => onNavigate?.('contact')}>View Demo</Button>
            </div>
          </div>
          <div className="h-[450px] flex items-center justify-center">
             <CampusIllustration />
          </div>
        </div>
      </section>

      {/* 2. Problem Highlight */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Campus Challenge</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Vast grounds, hundreds of rooms, and constant scheduling changes. We bring order to the chaos.</p>
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
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Student & Staff Centric Tools</h2>
               <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
               {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-5 group">
                     <div className="shrink-0 w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
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
               <h2 className="text-3xl font-bold text-slate-900">Institutional Impact</h2>
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
               <div className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2">Campus Intelligence</div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Actionable Data for Administrators</h2>
               <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Understand campus dynamics like never before. Monitor the usage of public spaces, identify high-traffic corridors, and optimize facility maintenance based on real occupancy data.
               </p>
               <ul className="space-y-4 mb-8">
                  {[
                     "Building-level occupancy heatmaps",
                     "Peak-time corridor analysis",
                     "Study space utilization reports",
                     "Safety response time benchmarks"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs">✓</div>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full bg-slate-100 rounded-2xl p-4 lg:p-8">
                <CampusAnalytics />
                {/* Floating Elements */}
                <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce">
                   <div className="flex items-center gap-3">
                      <Clock className="text-indigo-500" size={20} />
                      <div>
                         <div className="text-xs text-slate-400 font-bold uppercase">Space Saved</div>
                         <div className="text-lg font-bold text-slate-900">+22% Efficiency</div>
                      </div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* 6. Use Cases */}
      <section className="py-20 px-4 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Tailored for Every Type of Campus</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {["University Campuses", "Corporate HQs", "Research Parks", "Government Complexes", "Smart Cities"].map((tag, i) => (
                  <span key={i} className="px-6 py-3 bg-white rounded-full border border-slate-200 text-slate-600 font-medium shadow-sm">
                     {tag}
                  </span>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-24 px-4 bg-white">
         <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Modernize Your Campus <br/> Experience with Pixomap</h2>
            <div className="flex justify-center relative z-10">
               <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-lg shadow-indigo-900/20 hover:scale-105" onClick={() => onNavigate?.('contact')}>
                  Request Institutional Demo <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};