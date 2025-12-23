import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Zap } from 'lucide-react';

interface BlogPost {
  id: number;
  date: string;
  category: string;
  title: string;
  description: string;
  gradient: string;
}

export const Blog: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const posts: BlogPost[] = [
    {
      id: 1,
      date: "Nov 18, 2025",
      category: "Institutional",
      title: "Revolut integrates Pixomap for Payments, Trading and Staking",
      description: "Revolut, Europe's largest neobank and one of the world's fastest-growing fintech platforms, has integrated with Pixomap as its go-to stack for stablecoin transfers, payments, and trading.",
      gradient: "bg-gradient-to-br from-[#15476A] to-cyan-600"
    },
    {
      id: 2,
      date: "Nov 15, 2025",
      category: "Retail",
      title: "Mall of America selects Pixomap to power verified store navigation",
      description: "Enhancing the shopping experience with real-time blue-dot navigation and personalized offers based on location context, resulting in a 15% increase in foot traffic retention.",
      gradient: "bg-gradient-to-br from-purple-600 to-indigo-600"
    },
    {
      id: 3,
      date: "Nov 12, 2025",
      category: "Education",
      title: "Harvard brings global campus distribution onchain with Pixomap",
      description: "A revolutionary approach to campus management allowing remote facility managers to monitor asset utilization and energy efficiency across 500+ buildings in real-time.",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900"
    },
    {
      id: 4,
      date: "Oct 28, 2025",
      category: "Healthcare",
      title: "Mayo Clinic launches asset tracking v2 with Blue Dot technology",
      description: "Critical equipment tracking has never been easier. Mayo Clinic reports saving 4,000 nursing hours per year by automating the search for wheelchairs and infusion pumps.",
      gradient: "bg-gradient-to-br from-emerald-600 to-teal-500"
    },
    {
      id: 5,
      date: "Oct 15, 2025",
      category: "Events",
      title: "CES 2025 optimizes crowd flow using real-time heatmaps",
      description: "Managing over 180,000 attendees required a new level of intelligence. Pixomap provided live density data to redirect crowds and prevent bottlenecks before they happened.",
      gradient: "bg-gradient-to-br from-pink-600 to-rose-500"
    },
    {
      id: 6,
      date: "Oct 01, 2025",
      category: "Logistics",
      title: "Amazon Logistics integrates API for automated robot pathfinding",
      description: "Seamlessly connecting automated guided vehicles (AGVs) with the building's digital twin to optimize pick-and-pack routes and reduce collision incidents by 99%.",
      gradient: "bg-gradient-to-br from-amber-600 to-orange-500"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const currentPost = posts[currentIndex];

  return (
    <section className="h-full pt-28 pb-4 px-4 bg-slate-50 flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex flex-col h-full">
        
        {/* Page Header - Fixed Height */}
        <div className="flex-none mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">Pixomap's Blog</h1>
          <div className="flex items-center gap-2 text-brand font-semibold text-base animate-in fade-in slide-in-from-left-4 duration-700">
             <Zap className="fill-current" size={18} />
             <span>Trending articles</span>
          </div>
        </div>

        {/* Featured Slider Component - Flexible but Constrained */}
        <div className="flex-1 min-h-0 relative group flex flex-col justify-center">
           
           {/* Desktop Nav Button Left */}
           <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden xl:flex w-12 h-12 rounded-full border border-slate-200 bg-white items-center justify-center text-slate-400 hover:text-brand hover:border-brand transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-110 z-10"
              aria-label="Previous article"
           >
              <ArrowLeft size={20} />
           </button>

           {/* Desktop Nav Button Right */}
           <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden xl:flex w-12 h-12 rounded-full border border-slate-200 bg-white items-center justify-center text-slate-400 hover:text-brand hover:border-brand transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-110 z-10"
              aria-label="Next article"
           >
              <ArrowRight size={20} />
           </button>

           {/* Main Card - Fixed Height on Desktop for Consistency */}
           <div className="w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row lg:h-[480px] transition-all duration-500">
              
              {/* Image Side */}
              <div className={`w-full lg:w-1/2 h-48 lg:h-full ${currentPost.gradient} relative p-8 lg:p-12 flex items-center justify-center overflow-hidden flex-shrink-0`}>
                   {/* Abstract Background Element */}
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50" />
                   <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                   
                   {/* Brand/Logo Placeholder */}
                   <div className="relative z-10 text-white text-3xl lg:text-4xl font-bold opacity-30 tracking-[0.5em] mix-blend-overlay rotate-[-5deg]">
                      PIXOMAP
                   </div>
              </div>
              
              {/* Content Side - Scrollable if content overflows */}
              <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col bg-white relative overflow-y-auto">
                 <div className="flex-none flex items-center gap-3 text-xs font-mono text-slate-400 mb-4 uppercase tracking-wider font-semibold">
                    <span>{currentPost.date}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-brand">{currentPost.category}</span>
                 </div>

                 <h2 className="flex-none text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight line-clamp-3 lg:line-clamp-none">
                    {currentPost.title}
                 </h2>

                 <p className="flex-1 text-base lg:text-lg text-slate-500 leading-relaxed mb-6 line-clamp-4 lg:line-clamp-none">
                    {currentPost.description}
                 </p>
                 
                 {/* Mobile Navigation Controls */}
                 <div className="flex-none flex xl:hidden gap-4 pt-4 border-t border-slate-50 mt-auto">
                      <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                        <ArrowLeft size={18}/>
                      </button>
                      <button onClick={handleNext} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                        <ArrowRight size={18}/>
                      </button>
                  </div>
              </div>
           </div>

           {/* Pagination Dots */}
           <div className="flex-none flex justify-center gap-2 mt-6 lg:mt-8">
              {posts.map((_, idx) => (
                  <button 
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                        idx === currentIndex 
                          ? 'w-8 bg-brand' 
                          : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                  />
              ))}
           </div>

        </div>
      </div>
    </section>
  );
};