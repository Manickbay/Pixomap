import React, { useEffect, useRef, useState } from 'react';
import { Plane, Activity, Package, ShoppingBag, GraduationCap, Ticket } from 'lucide-react';

interface IndustryCardProps {
  icon: React.ElementType;
  label: string;
  subtext: string;
  metric: string;
  position: string;
  delay: string;
  isVisible: boolean;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon: Icon, label, subtext, metric, position, delay, isVisible }) => (
  <div 
    className={`absolute ${position} transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
      isVisible 
        ? 'opacity-100 scale-100 translate-y-0' 
        : 'opacity-0 scale-50 translate-y-20'
    } ${delay}`}
  >
    <div className="bg-white/90 backdrop-blur-md border border-slate-200 p-5 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl hover:border-brand/20 transition-all duration-300 group w-48 md:w-56 cursor-default">
      {/* Card Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-brand/5 text-brand group-hover:text-white group-hover:bg-brand transition-colors">
          <Icon size={20} />
        </div>
        <span className="text-xs font-mono text-slate-400 group-hover:text-brand transition-colors">{metric}</span>
      </div>
      
      {/* Card Content */}
      <h3 className="text-slate-900 font-bold text-lg mb-1">{label}</h3>
      <p className="text-slate-500 text-sm text-xs">{subtext}</p>

      {/* Decorative Line */}
      <div className="w-full h-0.5 bg-slate-100 mt-4 overflow-hidden rounded-full">
        <div className="h-full bg-brand w-1/3 group-hover:w-full transition-all duration-700" />
      </div>
    </div>
  </div>
);

export const Industries: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      icon: Plane,
      label: "Airports",
      subtext: "Terminal wayfinding",
      metric: "98% On-time",
      position: "top-[5%] left-[5%] md:top-[15%] md:left-[20%]",
      delay: "delay-0"
    },
    {
      icon: Activity,
      label: "Hospitals",
      subtext: "Asset tracking",
      metric: "24/7 Active",
      position: "top-[15%] right-[5%] md:top-[10%] md:right-[20%]",
      delay: "delay-100"
    },
    {
      icon: ShoppingBag,
      label: "Retail",
      subtext: "Customer journey",
      metric: "Heatmaps",
      position: "bottom-[5%] right-[5%] md:bottom-[15%] md:right-[15%]",
      delay: "delay-200"
    },
    {
      icon: Package,
      label: "Warehouses",
      subtext: "Inventory flow",
      metric: "+40% Speed",
      position: "bottom-[15%] left-[5%] md:bottom-[20%] md:left-[15%]",
      delay: "delay-300"
    },
    {
      icon: GraduationCap,
      label: "Campuses",
      subtext: "Digital twin",
      metric: "10k+ Students",
      position: "top-[40%] left-[-2%] md:top-[45%] md:left-[8%]",
      delay: "delay-500"
    },
    {
      icon: Ticket,
      label: "Events",
      subtext: "Crowd control",
      metric: "Live Data",
      position: "top-[50%] right-[-2%] md:top-[50%] md:right-[8%]",
      delay: "delay-700"
    }
  ];

  return (
    <section id="industries" ref={sectionRef} className="relative min-h-[800px] py-32 flex items-center justify-center overflow-hidden bg-white">
      {/* Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto h-[600px] flex items-center justify-center">
        {/* Anchor Text */}
        <h2 className={`text-[15vw] md:text-[12vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-brand to-slate-900 select-none z-0 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          Industries
        </h2>

        {/* Floating Cards */}
        {cards.map((card, index) => (
          <IndustryCard key={index} {...card} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};