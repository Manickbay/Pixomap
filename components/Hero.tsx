import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './Button';
import { IsometricMap } from './IsometricMap';

interface HeroProps {
  onNavigate?: (page: 'contact') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Spotlights */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8 z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 w-fit backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-xs font-medium text-brand-light tracking-wide uppercase">V2.0 Is Live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-900">
            Map the Indoors. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-cyan-500">
              Move Smarter.
            </span>
          </h1>
          
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            PixoMaps transforms complex spaces into seamless, intelligent navigation experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="group" onClick={() => onNavigate?.('contact')}>
              Start Mapping
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="group" onClick={() => onNavigate?.('contact')}>
              <Play size={16} className="fill-current mr-1" />
              Watch Demo
            </Button>
          </div>

          <div className="pt-8 border-t border-slate-100 flex items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-slate-900">10M+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Sq. Ft. Mapped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">99.9%</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Uptime</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center order-1 lg:order-2">
            <IsometricMap />
        </div>

      </div>
    </section>
  );
};