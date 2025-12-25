
import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  LayoutDashboard, 
  FileDown, 
  Target, 
  MousePointer2, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Layers,
  Activity
} from 'lucide-react';
import { Button } from './Button';

interface AnalyticsInsightsProps {
  onNavigate?: (page: 'contact') => void;
}

const AnalyticsIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#15476A" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <filter id="dataGlow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Dashboard Base */}
    <rect x="50" y="50" width="500" height="350" rx="20" fill="white" stroke="#e2e8f0" strokeWidth="2" />
    <rect x="50" y="50" width="500" height="60" rx="20" fill="#f8fafc" />
    <circle cx="85" cy="80" r="6" fill="#ef4444" />
    <circle cx="105" cy="80" r="6" fill="#f59e0b" />
    <circle cx="125" cy="80" r="6" fill="#10b981" />

    {/* Isometric Heatmap Floor */}
    <g transform="translate(300, 240) scale(0.8)">
      <path d="M-200 0 L0 -100 L200 0 L0 100 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
      {/* Grid Lines */}
      <path d="M-150 -25 L150 -25 M-100 -50 L100 -50 M-50 -75 L50 -75" stroke="#e2e8f0" strokeWidth="0.5" />
      <path d="M-150 25 L150 25 M-100 50 L100 50 M-50 75 L50 75" stroke="#e2e8f0" strokeWidth="0.5" />
      
      {/* Heatmap Blobs */}
      <circle cx="-60" cy="-20" r="40" fill="#ef4444" opacity="0.3" filter="url(#dataGlow)" />
      <circle cx="40" cy="30" r="50" fill="#f59e0b" opacity="0.3" filter="url(#dataGlow)" />
      <circle cx="100" cy="-40" r="30" fill="#06b6d4" opacity="0.2" filter="url(#dataGlow)" />
    </g>

    {/* Floating Bar Charts */}
    <g transform="translate(420, 150)" className="animate-float" style={{ animationDelay: '0.5s' }}>
      <rect x="0" y="0" width="100" height="120" rx="12" fill="white" shadow-xl="true" stroke="#e2e8f0" />
      <rect x="15" y="90" width="15" height="15" rx="2" fill="#15476A" />
      <rect x="42" y="50" width="15" height="55" rx="2" fill="#15476A" />
      <rect x="70" y="70" width="15" height="35" rx="2" fill="#06b6d4" />
      <text x="50" y="25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#64748b">PEAK HOURS</text>
    </g>

    {/* Metric Badge */}
    <g transform="translate(80, 180)" className="animate-float" style={{ animationDelay: '1.2s' }}>
      <rect x="0" y="0" width="120" height="60" rx="12" fill="#15476A" />
      <text x="15" y="25" fontSize="10" fontWeight="bold" fill="white" opacity="0.6">DWELL TIME</text>
      <text x="15" y="48" fontSize="22" fontWeight="black" fill="white">24.5m</text>
    </g>

    {/* Scanning Line Animation */}
    <g transform="translate(300, 240)">
      <line x1="-150" y1="0" x2="150" y2="0" stroke="#06b6d4" strokeWidth="2" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0 -80; 0 80; 0 -80" dur="5s" repeatCount="indefinite" />
      </line>
    </g>
  </svg>
);

export const AnalyticsInsights: React.FC<AnalyticsInsightsProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Activity,
      title: "Heatmaps & footfall analysis",
      desc: "Visualize high-traffic zones and pedestrian density to identify bottlenecks or popular hubs."
    },
    {
      icon: TrendingUp,
      title: "Movement patterns & trends",
      desc: "Track how people navigate your space over time to understand habitual behaviors."
    },
    {
      icon: Layers,
      title: "Space utilization metrics",
      desc: "Get granular data on room, desk, and amenity usage to optimize square footage."
    },
    {
      icon: Target,
      title: "Zone performance insights",
      desc: "Measure the effectiveness of specific layouts, end-caps, or seasonal displays."
    },
    {
      icon: FileDown,
      title: "Exportable reports",
      desc: "Generate professional PDFs or CSVs for stakeholder presentations and operational audits."
    },
    {
      icon: LayoutDashboard,
      title: "Live Command Center",
      desc: "Real-time dashboard for immediate operational awareness across all mapped facilities."
    }
  ];

  const valueProps = [
    {
      title: "Optimize Layouts",
      desc: "Redesign spaces based on actual movement data rather than guesswork.",
      icon: LayoutDashboard
    },
    {
      title: "Improve Crowd Flow",
      desc: "Proactively manage congestion to ensure a safe and pleasant environment.",
      icon: Users
    },
    {
      title: "Operational Efficiency",
      desc: "Scale cleaning and maintenance schedules based on real-world usage levels.",
      icon: Zap
    },
    {
      title: "Data-Driven Decisions",
      desc: "Support leasing, staffing, and expansion plans with concrete spatial intelligence.",
      icon: BarChart3
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
              <BarChart3 size={14} className="text-brand" />
              <span className="text-xs font-bold text-brand tracking-wide uppercase">Spatial Intelligence Suite</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Visualize the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">Invisible.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Gain deep insights into how people and assets move within your spaces to drive operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => onNavigate?.('contact')}>Explore Dashboard</Button>
              <Button variant="secondary" onClick={() => onNavigate?.('contact')}>Download Sample Report</Button>
            </div>
          </div>
          
          <div className="h-[500px] flex items-center justify-center">
             <AnalyticsIllustration />
          </div>
        </div>
      </section>

      {/* Analytics Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful Analytics Features</h2>
            <div className="h-1 w-20 bg-brand rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => (
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

      {/* Why It Matters Section */}
      <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 backdrop-blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Spatial Data Matters</h2>
            <p className="text-slate-400">Turn raw movement into actionable business strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((val, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-brand-light/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <val.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Insights Highlight */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                    <MousePointer2 size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900">Interactive Drill-down</h3>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Pixomap doesn't just show you static reports. Our interactive map interface allows you to click on any room, corridor, or desk to see its specific historical performance metrics.
              </p>
              <ul className="space-y-4">
                 {[
                   "Comparative floor performance",
                   "Real-time density thresholds",
                   "Predictive traffic modeling",
                   "Custom zone grouping"
                 ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                       <CheckCircle2 size={18} className="text-brand" />
                       {item}
                    </li>
                 ))}
              </ul>
           </div>
           <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Support Every <br/> Operational Move</h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                In a world where every square meter counts, spatial analytics provides the definitive answer to how your facility is truly being lived in. 
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-black text-brand mb-1">40%</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Space Optimization</div>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-black text-brand mb-1">15k+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Insights Generated</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Quantify Your Space?</h2>
          <p className="text-brand-100 mb-12 text-lg max-w-2xl mx-auto">
            Schedule a session with our spatial data experts to see how analytics can uncover hidden efficiencies in your specific facility.
          </p>
          <div className="flex justify-center">
            <button 
              className="bg-white text-brand px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-2xl hover:bg-brand-50 hover:scale-105" 
              onClick={() => onNavigate?.('contact')}
            >
              Request Insights Demo <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
