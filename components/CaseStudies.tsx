import React, { useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface CaseStudy {
  id: number;
  date: string;
  category: string;
  title: string;
  imageColor: string;
}

export const CaseStudies: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Width of card + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const studies: CaseStudy[] = [
    {
      id: 1,
      date: "Oct 2025",
      category: "Airports",
      title: "Optimizing Terminal Flow at JFK International",
      imageColor: "bg-blue-100"
    },
    {
      id: 2,
      date: "Sep 2025",
      category: "Healthcare",
      title: "Asset Tracking Efficiency for Mount Sinai",
      imageColor: "bg-emerald-100"
    },
    {
      id: 3,
      date: "Aug 2025",
      category: "Retail",
      title: "Increasing Foot Traffic at Westfield Mall",
      imageColor: "bg-purple-100"
    },
    {
      id: 4,
      date: "Jul 2025",
      category: "Corporate",
      title: "Hybrid Workspace Management for Microsoft",
      imageColor: "bg-orange-100"
    },
    {
      id: 5,
      date: "Jun 2025",
      category: "Logistics",
      title: "Automated Pathfinding for Amazon Warehouses",
      imageColor: "bg-amber-100"
    },
    {
      id: 6,
      date: "May 2025",
      category: "Events",
      title: "Crowd Control Solutions for CES 2025",
      imageColor: "bg-rose-100"
    }
  ];

  return (
    <section className="py-32 px-4 bg-slate-50 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Our Case Studies</h1>
            <p className="text-lg text-slate-500 max-w-xl">
              Discover how leading organizations are using Pixomap to transform their indoor spaces.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand transition-all duration-300 hover:shadow-lg"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand transition-all duration-300 hover:shadow-lg"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {studies.map((study) => (
            <div 
              key={study.id} 
              className="min-w-[320px] md:min-w-[400px] bg-white rounded-3xl border border-slate-200 overflow-hidden snap-center hover:shadow-2xl hover:border-brand/20 transition-all duration-500 group flex flex-col"
            >
              {/* Thumbnail Area */}
              <div className={`h-64 ${study.imageColor} relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                 {/* Placeholder Pattern */}
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#15476A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 
                 <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-brand mb-3 uppercase tracking-wider">
                      {study.category}
                    </span>
                 </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                   <span className="text-slate-400 text-sm font-mono mb-2 block">{study.date}</span>
                   <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand transition-colors">
                     {study.title}
                   </h3>
                </div>
                
                <a href="#" className="inline-flex items-center gap-2 text-brand font-semibold text-sm group-hover:gap-3 transition-all mt-6">
                  Read Full Story <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};