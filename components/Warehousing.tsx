import React from 'react';
import { Package, Map, Zap, TrendingUp, Clock, Shield, Box, Truck, BarChart, Navigation, Layers, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface WarehousingProps {
  onNavigate?: (page: 'contact') => void;
}

// --- Custom Illustrations ---

const WarehouseIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="shelfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <linearGradient id="warePath" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f59e0b" /> {/* Amber */}
        <stop offset="100%" stopColor="#ef4444" /> {/* Red */}
      </linearGradient>
    </defs>

    {/* Floor */}
    <path d="M100 400 L300 300 L500 400 L300 500 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />

    {/* Shelving Unit Left */}
    <g transform="translate(180, 320)">
       {/* Support */}
       <rect x="-5" y="-120" width="10" height="150" fill="url(#shelfGrad)" />
       <rect x="75" y="-120" width="10" height="150" fill="url(#shelfGrad)" />
       {/* Shelves */}
       <rect x="0" y="-100" width="80" height="4" fill="#64748b" />
       <rect x="0" y="-60" width="80" height="4" fill="#64748b" />
       <rect x="0" y="-20" width="80" height="4" fill="#64748b" />
       
       {/* Boxes */}
       <rect x="10" y="-115" width="25" height="15" rx="2" fill="#fde68a" />
       <rect x="45" y="-115" width="25" height="15" rx="2" fill="#fde68a" />
       <rect x="15" y="-75" width="20" height="15" rx="2" fill="#fbbf24" />
       <rect x="10" y="-35" width="30" height="15" rx="2" fill="#d97706" />
    </g>

    {/* Shelving Unit Right */}
    <g transform="translate(340, 320)">
       <rect x="-5" y="-120" width="10" height="150" fill="url(#shelfGrad)" />
       <rect x="75" y="-120" width="10" height="150" fill="url(#shelfGrad)" />
       <rect x="0" y="-100" width="80" height="4" fill="#64748b" />
       <rect x="0" y="-60" width="80" height="4" fill="#64748b" />
       
       <rect x="20" y="-115" width="40" height="15" rx="2" fill="#fde68a" />
       <rect x="10" y="-75" width="20" height="15" rx="2" fill="#fbbf24" className="animate-pulse" stroke="#f59e0b" strokeWidth="1" />
    </g>

    {/* AGV / Picking Robot */}
    <g transform="translate(300, 440)" className="animate-[bounce_2s_infinite]">
       <rect x="-20" y="-10" width="40" height="15" rx="4" fill="#1e293b" />
       <rect x="-15" y="-25" width="30" height="20" rx="2" fill="#f59e0b" />
       <circle cx="0" cy="-18" r="4" fill="white" opacity="0.8" />
    </g>

    {/* Optimized Path */}
    <path d="M150 480 L300 440 L380 305" fill="none" stroke="url(#warePath)" strokeWidth="4" strokeDasharray="10 5" strokeLinecap="round">
       <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1s" repeatCount="indefinite" />
    </path>

    {/* Destination Marker */}
    <g transform="translate(380, 305)">
       <path d="M0 0 L-8 -16 L8 -16 Z" fill="#ef4444" className="animate-bounce" />
       <text x="0" y="-25" textAnchor="middle" fontSize="10" fill="#ef4444" fontWeight="bold">Pick Item #24</text>
    </g>
  </svg>
);

const WarehousingStats = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full rounded-xl shadow-lg border border-slate-200 bg-white overflow-hidden">
     <rect x="0" y="0" width="400" height="40" fill="#f8fafc" />
     <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#1e293b">Inventory Velocity • Heatmap</text>
     
     {/* Grid layout */}
     <g transform="translate(40, 60)">
        {[0, 1, 2, 3, 4].map(y => [0, 1, 2, 3, 4, 5, 6].map(x => {
           const intensity = Math.random();
           const color = intensity > 0.8 ? '#ef4444' : intensity > 0.5 ? '#f59e0b' : '#10b981';
           return <rect key={`${x}-${y}`} x={x*45} y={y*30} width="35" height="20" rx="2" fill={color} opacity={intensity * 0.8 + 0.2} />;
        }))}
     </g>
     
     <g transform="translate(20, 220)">
        <text x="0" y="10" fontSize="9" fill="#94a3b8">Low Activity</text>
        <rect x="60" y="2" width="20" height="8" fill="#10b981" rx="1" />
        <rect x="85" y="2" width="20" height="8" fill="#f59e0b" rx="1" />
        <rect x="110" y="2" width="20" height="8" fill="#ef4444" rx="1" />
        <text x="140" y="10" fontSize="9" fill="#94a3b8">Hot Zone</text>
     </g>
  </svg>
);

export const Warehousing: React.FC<WarehousingProps> = ({ onNavigate }) => {
  const problems = [
    { icon: Navigation, title: "Inefficient Pick Paths", desc: "Pickers spending 60% of their time walking instead of picking items." },
    { icon: Package, title: "Lost Inventory", desc: "Difficulty locating misplaced pallets or specific SKUs in massive facilities." },
    { icon: Box, title: "Congestion", desc: "Forklift bottlenecks at busy junctions reducing throughput speed." },
    { icon: Clock, title: "Onboarding Lag", desc: "New seasonal staff taking weeks to learn the warehouse layout." }
  ];

  const features = [
    { icon: Zap, title: "Optimized Picking Routes", desc: "Calculate the fastest sequence for orders to minimize travel distance." },
    { icon: Layers, title: "3D Digital Twin", desc: "A high-fidelity 3D map of racks, bins, and loading docks." },
    { icon: Box, title: "Real-time Asset Tracking", desc: "Live location of forklifts, pallets, and automated robots (AGVs)." },
    { icon: Navigation, title: "AR Guided Picking", desc: "Overlay visual arrows for pickers to reach the exact bin without searching." },
    { icon: BarChart, title: "Slotting Optimization", desc: "Analyze heatmaps to move fast-moving items closer to dispatch areas." },
    { icon: Shield, title: "Safe Zones & Alerts", desc: "Trigger alerts if equipment enters restricted or hazardous pedestrian zones." }
  ];

  const benefits = [
    { icon: TrendingUp, title: "+35% Picking Efficiency", desc: "Drastically reduce walking time per order.", color: "bg-amber-50 text-amber-600" },
    { icon: Clock, title: "-50% Training Time", desc: "New staff are productive from hour one with digital guidance.", color: "bg-blue-50 text-blue-600" },
    { icon: Truck, title: "Faster Dispatch", desc: "Streamline the flow from shelf to loading dock.", color: "bg-emerald-50 text-emerald-600" },
    { icon: Shield, title: "Enhanced Safety", desc: "Reduce collision risks between automated and human workflows.", color: "bg-red-50 text-red-600" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <section className="relative pt-32 pb-20 px-4 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 w-fit mb-6">
              <Truck size={14} className="text-amber-600" />
              <span className="text-xs font-bold text-amber-700 tracking-wide uppercase">Industry Solution: Warehousing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Speed Up Logistics with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">Dynamic Wayfinding</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              Optimize travel paths, track critical assets, and maximize facility throughput with Pixomap's industrial-grade indoor navigation.
            </p>
            <div className="flex gap-4">
              <Button className="!bg-amber-600 hover:!bg-amber-700" onClick={() => onNavigate?.('contact')}>Explore Platform</Button>
              <Button variant="secondary" className="border-amber-200 text-amber-700 hover:bg-amber-50" onClick={() => onNavigate?.('contact')}>View Live Demo</Button>
            </div>
          </div>
          <div className="h-[450px] flex items-center justify-center">
             <WarehouseIllustration />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Solving Logistics Complexity</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Modern warehouses are too large to navigate manually. Digital intelligence is the only way to scale.</p>
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

      <section className="py-24 px-4 bg-white">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Enterprise Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
               {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-5 group">
                     <div className="shrink-0 w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
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

      <section className="py-24 px-4 bg-slate-50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900">Measureable ROI</h2>
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
               <div className="text-amber-600 font-bold uppercase text-sm mb-2">Space Intelligence</div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Optimize Every Square Meter</h2>
               <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Data-driven warehousing is about more than just speed—it's about understanding the "velocity" of your facility.
               </p>
               <ul className="space-y-4 mb-8">
                  {[
                     "Bin-level activity heatmaps",
                     "Traffic density analysis for forklifts",
                     "Historical pick-path playback",
                     "Seasonal layout adjustment suggestions"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">✓</div>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="h-[300px] md:h-[400px]">
               <WarehousingStats />
            </div>
         </div>
      </section>

      <section className="py-24 px-4 bg-white">
         <div className="max-w-5xl mx-auto bg-gradient-to-br from-amber-900 to-amber-800 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Streamline Your Logistics <br/> Today with Pixomap</h2>
            <div className="flex justify-center relative z-10">
               <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all" onClick={() => onNavigate?.('contact')}>
                  Request Warehouse Audit <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};