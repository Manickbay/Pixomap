import React from 'react';
import { ShoppingBag, Search, MapPin, Navigation, Tag, Smartphone, Store, Coffee, TrendingUp, Users, Zap, LayoutGrid, ArrowRight, Car } from 'lucide-react';
import { Button } from './Button';

interface RetailProps {
  onNavigate?: (page: 'contact') => void;
}

// --- Custom Illustrations ---

const MallIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="mallFloor" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
      <linearGradient id="mallPath" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" /> {/* Violet */}
        <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
      </linearGradient>
      <filter id="retailGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Floor 1: Main Atrium & Electronics */}
    <g transform="translate(300, 380)">
      <path d="M-220 0 L0 -110 L220 0 L0 110 Z" fill="white" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M-220 0 L0 -110 L220 0 L0 110 Z" fill="url(#mallFloor)" opacity="0.5" />
      {/* Kiosk */}
      <path d="M-20 -10 L0 -20 L20 -10 L0 0 Z" fill="#e2e8f0" stroke="#94a3b8" />
      <text x="0" y="20" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="bold">Main Atrium</text>
      {/* Store Block Left */}
      <path d="M-150 -10 L-80 -45 L-40 -25 L-110 10 Z" fill="#f3e8ff" stroke="#d8b4fe" />
      <text x="-95" y="-10" textAnchor="middle" fontSize="9" fill="#7c3aed">Tech Store</text>
    </g>

    {/* Floor 2: Fashion & Apparel */}
    <g transform="translate(300, 240)">
      <path d="M-220 0 L0 -110 L220 0 L0 110 Z" fill="white" stroke="#cbd5e1" strokeWidth="2" opacity="0.9" />
      <path d="M-220 0 L0 -110 L220 0 L0 110 Z" fill="url(#mallFloor)" opacity="0.4" />
      {/* Stores */}
      <path d="M40 -20 L100 -50 L140 -30 L80 0 Z" fill="#fce7f3" stroke="#fbcfe8" />
      <text x="90" y="-15" textAnchor="middle" fontSize="9" fill="#db2777">Fashion</text>
      
      <path d="M-140 -20 L-80 -50 L-40 -30 L-100 0 Z" fill="#f1f5f9" stroke="#cbd5e1" />
    </g>

    {/* Floor 3: Food Court & Cinema */}
    <g transform="translate(300, 100)">
      <path d="M-220 0 L0 -110 L220 0 L0 110 Z" fill="white" stroke="#cbd5e1" strokeWidth="2" opacity="0.95" />
      <path d="M-220 0 L0 -110 L220 0 L0 110 Z" fill="url(#mallFloor)" opacity="0.3" />
      {/* Tables Area */}
      <circle cx="-50" cy="-10" r="10" fill="#e2e8f0" />
      <circle cx="50" cy="-20" r="10" fill="#e2e8f0" />
      <text x="0" y="-10" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="bold">Food Court</text>
    </g>

    {/* Escalator Connections */}
    <path d="M300 380 L300 240" stroke="#cbd5e1" strokeWidth="20" strokeLinecap="round" opacity="0.2" />
    <path d="M300 240 L300 100" stroke="#cbd5e1" strokeWidth="20" strokeLinecap="round" opacity="0.2" />

    {/* Navigation Path */}
    <g filter="url(#retailGlow)">
      {/* Floor 1 Path */}
      <path d="M80 490 L300 380" stroke="url(#mallPath)" strokeWidth="3" fill="none" strokeDasharray="6 4" className="animate-pulse" />
      {/* Escalator 1 */}
      <path d="M300 380 L300 240" stroke="url(#mallPath)" strokeWidth="2" fill="none" strokeDasharray="4 2" opacity="0.5" />
      {/* Floor 2 Path */}
      <path d="M300 240 L390 260" stroke="url(#mallPath)" strokeWidth="3" fill="none" strokeDasharray="6 4" className="animate-pulse" />
      
      {/* User Location Pin (Entrance) */}
      <g transform="translate(80, 490)">
         <circle r="4" fill="#8b5cf6" stroke="white" />
         <text x="0" y="20" textAnchor="middle" fontSize="10" fill="#475569" fontWeight="bold">Entrance</text>
      </g>
      
      {/* Destination Pin (Fashion Store) */}
      <g transform="translate(390, 260)">
         <path d="M0 0 L-10 -20 L10 -20 Z" fill="#db2777" className="animate-bounce" />
         <circle cx="0" cy="-20" r="12" fill="white" stroke="#db2777" strokeWidth="2" />
         <path d="M-5 -20 L0 -15 L5 -25" stroke="#db2777" strokeWidth="2" fill="none" transform="translate(0, 0)" />
      </g>
    </g>
    
    {/* Floating Offer Bubble */}
    <g transform="translate(180, 220)" className="animate-float" style={{ animationDelay: '1s' }}>
       <rect x="0" y="0" width="80" height="30" rx="6" fill="#8b5cf6" />
       <path d="M40 30 L35 38 L45 30 Z" fill="#8b5cf6" />
       <text x="40" y="18" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Sale -50%</text>
    </g>
  </svg>
);

const RetailAnalyticsDashboard = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full rounded-xl shadow-lg border border-slate-200 bg-white overflow-hidden">
    {/* Sidebar */}
    <rect x="0" y="0" width="60" height="250" fill="#f8fafc" />
    <rect x="15" y="20" width="30" height="30" rx="8" fill="#8b5cf6" />
    <circle cx="30" cy="80" r="4" fill="#cbd5e1" />
    <circle cx="30" cy="100" r="4" fill="#cbd5e1" />
    <circle cx="30" cy="120" r="4" fill="#cbd5e1" />

    {/* Header */}
    <rect x="60" y="0" width="340" height="50" fill="white" />
    <text x="80" y="30" fontSize="12" fontWeight="bold" fill="#1e293b">Store Performance • Heatmap</text>
    
    {/* Floor Plan */}
    <rect x="80" y="70" width="300" height="160" rx="4" fill="white" stroke="#e2e8f0" />
    
    {/* Shelves */}
    <rect x="100" y="90" width="40" height="120" rx="2" fill="#f1f5f9" stroke="#e2e8f0" />
    <rect x="160" y="90" width="40" height="80" rx="2" fill="#f1f5f9" stroke="#e2e8f0" />
    <rect x="220" y="90" width="40" height="120" rx="2" fill="#f1f5f9" stroke="#e2e8f0" />
    <rect x="320" y="90" width="40" height="60" rx="2" fill="#f1f5f9" stroke="#e2e8f0" />

    {/* Heatmap Overlay */}
    <circle cx="120" cy="150" r="25" fill="#ef4444" opacity="0.3" filter="blur(6px)" />
    <circle cx="240" cy="110" r="30" fill="#f59e0b" opacity="0.3" filter="blur(8px)" />
    <circle cx="340" cy="120" r="20" fill="#22c55e" opacity="0.3" filter="blur(6px)" />
    
    {/* Path Flow */}
    <path d="M300 230 C 300 200, 240 180, 240 150 S 180 150, 120 150" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

    {/* Tooltip */}
    <g transform="translate(230, 80)">
       <rect x="0" y="0" width="70" height="24" rx="4" fill="#1e293b" />
       <text x="35" y="16" textAnchor="middle" fontSize="9" fill="white">High Dwell Time</text>
    </g>
  </svg>
);

// --- Component ---

export const Retail: React.FC<RetailProps> = ({ onNavigate }) => {
  const problems = [
    { icon: Search, title: "Product Frustration", desc: "Shoppers leave when they can't locate specific items or brands." },
    { icon: Navigation, title: "Complex Layouts", desc: "Large multi-floor malls confuse visitors, reducing dwell time." },
    { icon: Car, title: "Parking Confusion", desc: "Visitors forgetting where they parked creates a poor exit experience." },
    { icon: Users, title: "Staff Availability", desc: "Associates hard to find when customers need help on the floor." }
  ];

  const features = [
    { 
      icon: Search, 
      title: "Product Search & Navigation", 
      desc: "Search for 'Running Shoes' and get a blue-dot path directly to the shelf."
    },
    { 
      icon: Tag, 
      title: "Proximity Marketing", 
      desc: "Trigger push notifications for offers when a customer walks past a specific aisle."
    },
    { 
      icon: Smartphone, 
      title: "App-less Experience", 
      desc: "Scan a QR code to launch the map instantly in the browser—no download needed."
    },
    { 
      icon: Car, 
      title: "Find My Car", 
      desc: "Save parking spots automatically and guide users back to their vehicle."
    },
    { 
      icon: Users, 
      title: "Staff Assignment", 
      desc: "Visualize staff distribution to ensure coverage in high-traffic zones."
    },
    { 
      icon: LayoutGrid, 
      title: "Planogram Management", 
      desc: "Update store layouts digitally in real-time without reprinting static maps."
    }
  ];

  const benefits = [
    {
      icon: ShoppingBag,
      title: "Increased Basket Size",
      desc: "Helping customers find what they want leads to higher conversion rates.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Higher Dwell Time",
      desc: "Stress-free navigation encourages visitors to explore more stores.",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      desc: "Optimize cleaning and security routes based on real-time footfall.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: Users,
      title: "Customer Loyalty",
      desc: "A premium, tech-forward experience keeps shoppers coming back.",
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 w-fit mb-6">
              <ShoppingBag size={14} className="text-purple-600" />
              <span className="text-xs font-bold text-purple-700 tracking-wide uppercase">Industry Solution: Retail</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Transform Shoppers into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">Buyers with Smart Maps</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              Pixomap guides customers directly to the products they want, increasing conversion and delivering a frictionless shopping experience.
            </p>
            <div className="flex gap-4">
              <Button className="!bg-purple-600 hover:!bg-purple-700" onClick={() => onNavigate?.('contact')}>Request Demo</Button>
              <Button variant="secondary" className="border-purple-200 text-purple-700 hover:bg-purple-50" onClick={() => onNavigate?.('contact')}>View Case Study</Button>
            </div>
          </div>
          <div className="h-[450px] flex items-center justify-center">
             <MallIllustration />
          </div>
        </div>
      </section>

      {/* 2. Problem Highlight Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Retail Needs Indoor GPS</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">The biggest friction in physical retail is simply finding things. We solve that.</p>
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
               <h2 className="text-3xl font-bold text-slate-900 mb-4">The Connected Store Experience</h2>
               <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
               {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-5 group">
                     <div className="shrink-0 w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
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
               <h2 className="text-3xl font-bold text-slate-900">ROI-Driven Outcomes</h2>
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
               <div className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2">Retail Analytics</div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Unlock Store Performance</h2>
               <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Understand exactly how customers move through your space. Identify cold zones, optimize planograms, and measure the effectiveness of end-cap displays.
               </p>
               <ul className="space-y-4 mb-8">
                  {[
                     "Customer journey heatmaps",
                     "Zone-based dwell time analysis",
                     "Conversion attribution by aisle",
                     "Peak hour traffic flow"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs">✓</div>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full bg-slate-100 rounded-2xl p-4 lg:p-8">
                <RetailAnalyticsDashboard />
                {/* Floating Elements */}
                <div className="absolute -left-4 top-1/2 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-bounce delay-100">
                   <div className="flex items-center gap-3">
                      <TrendingUp className="text-purple-500" size={20} />
                      <div>
                         <div className="text-xs text-slate-400 font-bold uppercase">Conversion</div>
                         <div className="text-lg font-bold text-slate-900">+18% vs L.Y.</div>
                      </div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* 6. Use Cases */}
      <section className="py-20 px-4 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Powering Retail Experiences For</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {["Shopping Malls", "Department Stores", "Supermarkets", "Duty-Free Zones", "Furniture Showrooms"].map((tag, i) => (
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
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Revolutionize Your <br/> In-Store Experience</h2>
            <div className="flex justify-center relative z-10">
               <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-lg shadow-purple-900/20 hover:scale-105" onClick={() => onNavigate?.('contact')}>
                  Request Demo <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};