
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Industries } from './components/Industries';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { CaseStudies } from './components/CaseStudies';
import { Blog } from './components/Blog';
import { Airports } from './components/Airports';
import { Healthcare } from './components/Healthcare';
import { Retail } from './components/Retail';
import { Campuses } from './components/Campuses';
import { Warehousing } from './components/Warehousing';
import { Events } from './components/Events';
import { IndoorMappingPlatform } from './components/IndoorMappingPlatform';
import { IndoorNavigation } from './components/IndoorNavigation';
import { RealTimeTracking } from './components/RealTimeTracking';
import { AssetTracking } from './components/AssetTracking';
import { AnalyticsInsights } from './components/AnalyticsInsights';
import { IntegrationsAPIs } from './components/IntegrationsAPIs';

export type Page = 'home' | 'contact' | 'about' | 'case-studies' | 'blog' | 'airports' | 'healthcare' | 'retail' | 'campuses' | 'warehousing' | 'events' | 'mapping-platform' | 'navigation-wayfinding' | 'real-time-tracking' | 'asset-tracking' | 'analytics-insights' | 'integrations-apis';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand/20 selection:text-brand-dark font-sans overflow-x-hidden flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="pt-20">
            <Hero onNavigate={handleNavigate} />
            <Features />
            <HowItWorks />
            <Industries />
            <CTA onNavigate={handleNavigate} />
          </div>
        )}
        
        {currentPage === 'contact' && (
          <div className="pt-24 min-h-[80vh]">
            <Contact />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="pt-24 min-h-[80vh]">
            <About />
          </div>
        )}

        {currentPage === 'case-studies' && (
          <div className="pt-24 min-h-[80vh]">
            <CaseStudies />
          </div>
        )}

        {currentPage === 'blog' && (
          <div className="pt-20 h-[calc(100vh-64px)]">
            <Blog />
          </div>
        )}

        {currentPage === 'airports' && (
          <div className="pt-0 min-h-[80vh]">
            <Airports onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'healthcare' && (
          <div className="pt-0 min-h-[80vh]">
            <Healthcare onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'retail' && (
          <div className="pt-0 min-h-[80vh]">
            <Retail onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'campuses' && (
          <div className="pt-0 min-h-[80vh]">
            <Campuses onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'warehousing' && (
          <div className="pt-0 min-h-[80vh]">
            <Warehousing onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'events' && (
          <div className="pt-0 min-h-[80vh]">
            <Events onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'mapping-platform' && (
          <div className="pt-0 min-h-[80vh]">
            <IndoorMappingPlatform onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'navigation-wayfinding' && (
          <div className="pt-0 min-h-[80vh]">
            <IndoorNavigation onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'real-time-tracking' && (
          <div className="pt-0 min-h-[80vh]">
            <RealTimeTracking onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'asset-tracking' && (
          <div className="pt-0 min-h-[80vh]">
            <AssetTracking onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'analytics-insights' && (
          <div className="pt-0 min-h-[80vh]">
            <AnalyticsInsights onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'integrations-apis' && (
          <div className="pt-0 min-h-[80vh]">
            <IntegrationsAPIs onNavigate={handleNavigate} />
          </div>
        )}
      </main>

      <footer className="border-t border-slate-100 py-12 px-4 bg-slate-50 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-md bg-brand flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm transform rotate-45" />
            </div>
            <span className="font-bold text-lg text-slate-900">Pixomap</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Pixomap Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Terms</a>
            <a href="#" className="text-slate-500 hover:text-brand text-sm transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
