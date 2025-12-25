
import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Smartphone, 
  Layers, 
  Settings, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Boxes
} from 'lucide-react';
import { Button } from './Button';

interface IntegrationsAPIsProps {
  onNavigate?: (page: 'contact') => void;
}

const APIHubIllustration = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-2xl animate-float">
    <defs>
      <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#15476A" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <filter id="apiGlow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Central Hub Node */}
    <g transform="translate(300, 250)">
      <circle r="60" fill="url(#hubGrad)" filter="url(#apiGlow)" opacity="0.1" />
      <circle r="40" fill="url(#hubGrad)" stroke="white" strokeWidth="3" />
      <Terminal x="-12" y="-12" size={24} className="text-white" />
      <text x="0" y="60" textAnchor="middle" fontSize="14" fontWeight="black" fill="#15476A">PIXO_API_CORE</text>
    </g>

    {/* Peripheral Nodes & Data Paths */}
    <g transform="translate(300, 250)">
      {/* Node 1: Mobile SDK */}
      <g transform="translate(-180, -100)">
        <path d="M0 0 L180 100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        <circle r="30" fill="white" stroke="#e2e8f0" strokeWidth="2" />
        <Smartphone x="-10" y="-10" size={20} className="text-brand" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#64748b">MOBILE SDK</text>
      </g>

      {/* Node 2: Database / FMS */}
      <g transform="translate(180, -100)">
        <path d="M0 0 L-180 100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        <circle r="30" fill="white" stroke="#e2e8f0" strokeWidth="2" />
        <Database x="-10" y="-10" size={20} className="text-brand" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#64748b">FMS INTEGRATION</text>
      </g>

      {/* Node 3: Real-time RTLS */}
      <g transform="translate(-180, 100)">
        <path d="M0 0 L180 -100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        <circle r="30" fill="white" stroke="#e2e8f0" strokeWidth="2" />
        <Cpu x="-10" y="-10" size={20} className="text-brand" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#64748b">RTLS DATA</text>
      </g>

      {/* Node 4: Custom Dashboards */}
      <g transform="translate(180, 100)">
        <path d="M0 0 L-180 -100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        <circle r="30" fill="white" stroke="#e2e8f0" strokeWidth="2" />
        <Globe x="-10" y="-10" size={20} className="text-brand" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#64748b">WEB API</text>
      </g>

      {/* Moving Data Packets */}
      <circle r="4" fill="#06b6d4">
        <animateMotion dur="3s" repeatCount="indefinite" path="M-180 -100 L0 0" />
      </circle>
      <circle r="4" fill="#15476A">
        <animateMotion dur="4s" repeatCount="indefinite" path="M180 -100 L0 0" />
      </circle>
      <circle r="4" fill="#06b6d4">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M0 0 L-180 100" />
      </circle>
    </g>
  </svg>
);

export const IntegrationsAPIs: React.FC<IntegrationsAPIsProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      icon: Terminal,
      title: "APIs for maps, routing & location",
      desc: "Robust REST and GraphQL endpoints to query spatial data, calculate paths, and ingest live position updates."
    },
    {
      icon: Code2,
      title: "SDK support for web & mobile",
      desc: "Native-quality performance with lightweight SDKs for React, iOS, and Android to embed maps into your apps."
    },
    {
      icon: Settings,
      title: "Facility Management Systems",
      desc: "Bidirectional sync with industry leaders like IBM Maximo, ServiceNow, and custom internal FMS platforms."
    },
    {
      icon: Cpu,
      title: "Positioning Compatibility",
      desc: "Hardware-agnostic support for BLE, Wi-Fi, UWB, and LiDAR-based indoor positioning technologies."
    },
    {
      icon: ShieldCheck,
      title: "Custom Enterprise Support",
      desc: "Dedicated engineering assistance for complex legacy migrations and proprietary system integrations."
    },
    {
      icon: Zap,
      title: "Real-time Webhooks",
      desc: "Trigger external events instantly when an asset moves or a geofence threshold is crossed."
    }
  ];

  const targetUsers = [
    {
      title: "IT Teams",
      desc: "Secure, scalable infrastructure that fits into existing DevOps and security protocols.",
      icon: Terminal
    },
    {
      title: "Enterprise Deployments",
      desc: "Multi-site orchestration and global management of mapping assets for large corporations.",
      icon: Boxes
    },
    {
      title: "System Integrators",
      desc: "Developer-first documentation and tools to build bespoke solutions for specialized clients.",
      icon: Layers
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
              <Code2 size={14} className="text-brand" />
              <span className="text-xs font-bold text-brand tracking-wide uppercase">Developer Hub v4.1</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Connect Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-500">Spatial Ecosystem.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              PixoMaps is designed for seamless integration with existing platforms, enabling a unified view of your indoor operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => onNavigate?.('contact')}>Explore Documentation</Button>
              <Button variant="secondary" onClick={() => onNavigate?.('contact')}>Get API Key</Button>
            </div>
          </div>
          
          <div className="h-[500px] flex items-center justify-center">
             <APIHubIllustration />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Integration Capabilities</h2>
            <div className="h-1 w-20 bg-brand rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-brand/20 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand mb-8 shadow-sm group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designed For Section */}
      <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 backdrop-blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Designed for the Modern Tech Stack</h2>
            <p className="text-slate-400">PixoMaps empowers every tier of your technical organization.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetUsers.map((user, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group text-center">
                <div className="w-16 h-16 bg-brand-light/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <user.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{user.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{user.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Highlight */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="bg-slate-900 p-12 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-4 mb-10">
                 <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-cyan-400">
                    <Terminal size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-white tracking-tight">Developer-First Platform</h3>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-black/40 rounded-xl font-mono text-sm text-cyan-300 border border-white/5">
                  <span className="text-slate-500">// Fetch live asset coordinates</span><br/>
                  GET /api/v1/assets/live <br/>
                  <span className="text-pink-400">Authorization:</span> Bearer PIXO_TOKEN
                </div>
                <div className="space-y-4">
                  {[
                    "Swagger / OpenAPI documentation",
                    "Dedicated Sandbox environments",
                    "High-frequency 60Hz data streams",
                    "Single Sign-On (SSO) integration"
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                        <CheckCircle2 size={18} className="text-cyan-500" />
                        {item}
                     </div>
                  ))}
                </div>
              </div>
           </div>
           <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">Accelerate Your <br/> Digital Transformation</h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Pixomap’s extensible architecture means you never have to worry about vendor lock-in. We provide the hooks to build exactly what your facility needs, while handling the heavy lifting of spatial computation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-black text-brand mb-1">50+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connectors</div>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-black text-brand mb-1">99.99%</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">API Uptime</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Integrate?</h2>
          <p className="text-brand-100 mb-12 text-lg max-w-2xl mx-auto">
            Our engineers are ready to help you map out your integration strategy. Get in touch for a technical consultation.
          </p>
          <div className="flex justify-center">
            <button 
              className="bg-white text-brand px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-2xl hover:bg-brand-50 hover:scale-105" 
              onClick={() => onNavigate?.('contact')}
            >
              Contact Developer Support <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
