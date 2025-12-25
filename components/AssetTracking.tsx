
import React from 'react';
import { 
  Package, 
  MapPin, 
  Search, 
  ShieldAlert, 
  Wrench, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Activity, 
  Warehouse, 
  GraduationCap, 
  ArrowRight,
  CheckCircle2,
  Tag,
  Laptop
} from 'lucide-react';
import { Button } from './Button';

interface AssetTrackingProps {
  onNavigate?: (page: 'contact' | 'healthcare' | 'warehousing' | 'campuses') => void;
}

const AssetTrackingIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="rackPillarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="shelfFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
      <filter id="glowGreen">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Shadow Base */}
    <ellipse cx="300" cy="420" rx="200" ry="60" fill="rgba(0,0,0,0.05)" />

    {/* Main Rack Structure */}
    <g transform="translate(300, 380)">
      {/* Back Pillars */}
      <rect x="-160" y="-300" width="10" height="320" rx="2" fill="url(#rackPillarGrad)" />
      <rect x="150" y="-300" width="10" height="320" rx="2" fill="url(#rackPillarGrad)" />
      
      {/* Front Pillars */}
      <rect x="-100" y="-240" width="12" height="320" rx="2" fill="#334155" />
      <rect x="90" y="-240" width="12" height="320" rx="2" fill="#334155" />

      {/* Shelves */}
      {/* Bottom Shelf */}
      <path d="M-155 -20 L-100 40 L95 40 L155 -20 Z" fill="url(#shelfFaceGrad)" stroke="#475569" strokeWidth="1" />
      {/* Middle Shelf */}
      <path d="M-155 -120 L-100 -60 L95 -60 L155 -120 Z" fill="url(#shelfFaceGrad)" stroke="#475569" strokeWidth="1" />
      {/* Top Shelf */}
      <path d="M-155 -220 L-100 -160 L95 -160 L155 -220 Z" fill="url(#shelfFaceGrad)" stroke="#475569" strokeWidth="1" />

      {/* Laptop Assets on Middle Shelf */}
      <g transform="translate(-70, -85)">
        {/* Laptop 1 */}
        <g transform="translate(0, 0)">
          <path d="M0 0 L15 10 L45 10 L30 0 Z" fill="#cbd5e1" stroke="#94a3b8" />
          <path d="M0 0 L0 -5 L15 5 L15 10 Z" fill="#64748b" />
          <path d="M15 10 L45 10 L45 5 L15 5 Z" fill="#475569" />
          <circle cx="22" cy="5" r="2" fill="#10b981" filter="url(#glowGreen)" />
        </g>
        {/* Laptop 2 */}
        <g transform="translate(60, -10)">
          <path d="M0 0 L15 10 L45 10 L30 0 Z" fill="#cbd5e1" stroke="#94a3b8" />
          <path d="M0 0 L0 -5 L15 5 L15 10 Z" fill="#64748b" />
          <path d="M15 10 L45 10 L45 5 L15 5 Z" fill="#475569" />
          <circle cx="22" cy="5" r="2" fill="#10b981" filter="url(#glowGreen)" />
        </g>
      </g>

      {/* Laptop Assets on Top Shelf */}
      <g transform="translate(-40, -185)">
        {/* Laptop 3 - Vertical Orientation */}
        <g transform="translate(0, 0)">
           <path d="M0 0 L8 20 L28 20 L20 0 Z" fill="#cbd5e1" stroke="#94a3b8" />
           <path d="M0 0 L0 -25 L20 -25 L20 0 Z" fill="#f8fafc" stroke="#cbd5e1" />
           <rect x="2" y="-23" width="16" height="20" fill="#15476A" opacity="0.1" />
           <circle cx="10" cy="-2" r="2" fill="#06b6d4" />
        </g>
        
        {/* Laptop 4 - Stacked */}
        <g transform="translate(80, -5)">
          <path d="M0 0 L15 10 L45 10 L30 0 Z" fill="#cbd5e1" stroke="#94a3b8" />
          <path d="M0 -3 L15 7 L45 7 L30 -3 Z" fill="#f1f5f9" stroke="#cbd5e1" />
          <circle cx="22" cy="5" r="2" fill="#ef4444" className="animate-pulse" />
        </g>
      </g>

      {/* Scanning Laser Line */}
      <g transform="translate(0, -140)">
        <line x1="-140" y1="0" x2="140" y2="0" stroke="#06b6d4" strokeWidth="1.5" opacity="0.6">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0 -100; 0 100; 0 -100" dur="4s" repeatCount="indefinite" />
        </line>
      </g>
    </g>

    {/* Floating Data Tags */}
    <g transform="translate(420, 120)" className="animate-float">
      <rect x="0" y="0" width="130" height="50" rx="10" fill="white" shadow-xl="true" stroke="#e2e8f0" strokeWidth="1" />
      <text x="15" y="20" fontSize="10" fontWeight="bold" fill="#64748b" uppercase="true">LAPTOP_MAC_04</text>
      <text x="15" y="40" fontSize="12" fontWeight="black" fill="#15476A">STATUS: IN USE</text>
      <circle cx="110" cy="25" r="4" fill="#10b981" />
    </g>

    <g transform="translate(80, 180)" className="animate-float" style={{ animationDelay: '1.5s' }}>
      <rect x="0" y="0" width="120" height="50" rx="10" fill="#15476A" />
      <text x="15" y="22" fontSize="10" fontWeight="bold" fill="white" opacity="0.6" uppercase="true">LOCATION</text>
      <text x="15" y="40" fontSize="12" fontWeight="black" fill="white">SHELF B • LVL 3</text>
    </g>
  </svg>
);

export const AssetTracking: React.FC<AssetTrackingProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      icon: MapPin,
      title: "Asset location visibility",
      desc: "Instant real-time visibility into the precise location of every tracked asset across your facility."
    },
    {
      icon: Tag,
      title: "Tag-based tracking support",
      desc: "Universal support for BLE, WiFi, and UWB tags to provide sub-meter accuracy in dense environments."
    },
    {
      icon: Activity,
      title: "Usage & dwell-time insights",
      desc: "Analyze how assets move and where they spend the most time to identify utilization bottlenecks."
    },
    {
      icon: ShieldAlert,
      title: "Loss & theft prevention",
      desc: "Receive immediate notifications when high-value assets leave designated safe zones or building exits."
    },
    {
      icon: Wrench,
      title: "Maintenance planning",
      desc: "Automate service schedules based on actual asset usage patterns and movement history."
    }
  ];

  const industries = [
    { 
      icon: Activity, 
      label: "Healthcare", 
      page: 'healthcare' as const,
      desc: "Track infusion pumps, wheelchairs, and critical diagnostic tools." 
    },
    { 
      icon: Warehouse, 
      label: "Warehousing", 
      page: 'warehousing' as const,
      desc: "Monitor pallet flow, high-value inventory, and material handling equipment." 
    },
    { 
      icon: GraduationCap, 
      label: "Campuses", 
      page: 'campuses' as const,
      desc: "Manage AV equipment, maintenance vehicles, and facility keys across blocks." 
    }
  ];

  const values = [
    { 
      title: "Reduced asset loss", 
      desc: "Eliminate the cost of replacing 'lost' equipment that is simply misplaced.",
      icon: ShieldCheck
    },
    { 
      title: "Faster asset retrieval", 
      desc: "Save thousands of staff hours spent manually searching for equipment.",
      icon: Clock
    },
    { 
      title: "Better asset utilization", 
      desc: "Optimize your inventory size by understanding real-world demand and usage.",
      icon: TrendingUp
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
              <Package size={14} className="text-brand" />
              <span className="text-xs font-bold text-brand tracking-wide uppercase">Asset Intelligence Suite</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Know Where Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">Assets Live.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              PixoMaps enables organizations to track critical assets inside facilities and optimize their usage with high-fidelity digital twins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => onNavigate?.('contact')}>Get Started</Button>
              <Button variant="secondary" onClick={() => onNavigate?.('contact')}>Platform Specs</Button>
            </div>
          </div>
          
          <div className="h-[500px] flex items-center justify-center">
             <AssetTrackingIllustration />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Tracking Capabilities</h2>
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

      {/* Business Value Section */}
      <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 backdrop-blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Measurable Business Value</h2>
            <p className="text-slate-400">Direct ROI through spatial intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-brand-light/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <val.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
                <p className="text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built for Challenging Environments</h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Whether it's a sterile hospital ward or a high-velocity fulfillment center, Pixomap provides the reliability and precision needed to manage your most critical physical assets.
              </p>
              <div className="space-y-6">
                {industries.map((ind, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => onNavigate?.(ind.page)}
                    className="flex items-center gap-5 p-6 rounded-2xl border border-slate-100 hover:border-brand/30 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-brand/5 rounded-xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                      <ind.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{ind.label}</h4>
                      <p className="text-sm text-slate-500">{ind.desc}</p>
                    </div>
                    <ArrowRight size={20} className="ml-auto text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
               <h3 className="text-2xl font-bold text-slate-900 mb-8">Asset Health Audit</h3>
               <div className="space-y-4">
                  {[
                    "Automated inventory counts",
                    "Battery level monitoring for tags",
                    "Geofence-based security alerts",
                    "Idle asset identification"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                       <CheckCircle2 size={18} className="text-brand" />
                       {item}
                    </div>
                  ))}
               </div>
               <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Mapped Assets</div>
                  <div className="text-4xl font-black text-brand">48,209</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Optimize Your Assets?</h2>
          <p className="text-brand-100 mb-12 text-lg max-w-2xl mx-auto">
            Get a tailored assessment of your facility and see how asset tracking can deliver immediate cost savings and operational gains.
          </p>
          <div className="flex justify-center">
            <button 
              className="bg-white text-brand px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-2xl hover:bg-brand-50 hover:scale-105" 
              onClick={() => onNavigate?.('contact')}
            >
              Request Custom Quote <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
