
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Map, 
  Navigation, 
  Zap, 
  Package, 
  BarChart3, 
  Code2, 
  ArrowRight 
} from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  currentPage?: 'home' | 'contact' | 'about' | 'case-studies' | 'blog' | 'airports' | 'healthcare' | 'retail' | 'campuses' | 'warehousing' | 'events' | 'mapping-platform' | 'navigation-wayfinding' | 'real-time-tracking' | 'asset-tracking' | 'analytics-insights' | 'integrations-apis';
  onNavigate?: (page: 'home' | 'contact' | 'about' | 'case-studies' | 'blog' | 'airports' | 'healthcare' | 'retail' | 'campuses' | 'warehousing' | 'events' | 'mapping-platform' | 'navigation-wayfinding' | 'real-time-tracking' | 'asset-tracking' | 'analytics-insights' | 'integrations-apis') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home', onNavigate = (_: any) => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productLinks = [
    { 
      title: 'Indoor Mapping Platform', 
      subtext: 'Create Accurate Indoor Maps at Scale', 
      icon: Map,
      color: 'bg-brand/5 text-brand',
      page: 'mapping-platform'
    },
    { 
      title: 'Indoor Navigation & Wayfinding', 
      subtext: 'Seamless Navigation Inside Large Spaces', 
      icon: Navigation,
      color: 'bg-brand/5 text-brand',
      page: 'navigation-wayfinding'
    },
    { 
      title: 'Real-Time Location Tracking', 
      subtext: 'Live Visibility Within Indoor Spaces', 
      icon: Zap,
      color: 'bg-brand/5 text-brand',
      page: 'real-time-tracking'
    },
    { 
      title: 'Asset Tracking & Management', 
      subtext: 'Know Where Your Assets Are — Always', 
      icon: Package,
      color: 'bg-brand/5 text-brand',
      page: 'asset-tracking'
    },
    { 
      title: 'Analytics & Insights', 
      subtext: 'Turn Indoor Movement into Actionable Data', 
      icon: BarChart3,
      color: 'bg-brand/5 text-brand',
      page: 'analytics-insights'
    },
    { 
      title: 'Integrations & APIs', 
      subtext: 'Built to Integrate with Enterprise Systems', 
      icon: Code2,
      color: 'bg-brand/5 text-brand',
      page: 'integrations-apis'
    },
  ];

  const navLinks = [
    { name: 'Home', href: '#', hasDropdown: false },
    { name: 'Products', href: '#products', hasDropdown: true, isMega: true },
    { 
      name: 'Industries', 
      href: '#industries', 
      hasDropdown: true,
      dropdownItems: [
        'Airports',
        'Health Care',
        'Retail',
        'Campuses',
        'Warehousing',
        'Events'
      ]
    },
    { 
      name: 'Resources', 
      href: '#resources', 
      hasDropdown: true,
      dropdownItems: [
        'Blogs',
        'Case Studies'
      ]
    },
    { name: 'About', href: '#about', hasDropdown: false },
    { name: 'Contact Us', href: '#contact', hasDropdown: false },
  ];

  const handleLinkClick = (e: React.MouseEvent, item: any, subItem?: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (subItem === 'Blogs') { onNavigate('blog'); return; }
    if (subItem === 'Case Studies') { onNavigate('case-studies'); return; }
    if (subItem === 'Airports') { onNavigate('airports'); return; }
    if (subItem === 'Health Care') { onNavigate('healthcare'); return; }
    if (subItem === 'Retail') { onNavigate('retail'); return; }
    if (subItem === 'Campuses') { onNavigate('campuses'); return; }
    if (subItem === 'Warehousing') { onNavigate('warehousing'); return; }
    if (subItem === 'Events') { onNavigate('events'); return; }

    if (item.name === 'Contact Us') { onNavigate('contact'); return; }
    if (item.name === 'About') { onNavigate('about'); return; }

    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        if (item.href && item.href !== '#') {
          const id = item.href.replace('#', '');
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (item.href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const id = item.href.replace('#', '');
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleProductClick = (e: React.MouseEvent, prod: any) => {
    e.preventDefault();
    setIsOpen(false);
    if (prod.page) {
      onNavigate(prod.page as any);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg border-slate-200 py-3 shadow-sm' 
          : 'bg-white/50 backdrop-blur-sm border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={(e) => handleLinkClick(e, { name: 'Home', href: '#' })} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center transition-transform group-hover:rotate-12">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Pixomap</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((item) => (
              <div key={item.name} className="relative group">
                <a 
                  href={item.href} 
                  onClick={(e) => handleLinkClick(e, item)}
                  className={`text-sm transition-colors font-medium flex items-center gap-1 py-4 ${
                    (item.name === 'Contact Us' && currentPage === 'contact') || 
                    (item.name === 'About' && currentPage === 'about') ||
                    (item.name === 'Industries' && ['airports', 'healthcare', 'retail', 'campuses', 'warehousing', 'events'].includes(currentPage)) ||
                    (item.name === 'Resources' && (currentPage === 'case-studies' || currentPage === 'blog')) ||
                    (item.name === 'Products' && (currentPage === 'mapping-platform' || currentPage === 'navigation-wayfinding' || currentPage === 'real-time-tracking' || currentPage === 'asset-tracking' || currentPage === 'analytics-insights' || currentPage === 'integrations-apis'))
                      ? 'text-brand font-semibold' 
                      : 'text-slate-600 hover:text-brand'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown size={14} className="text-slate-400 group-hover:text-brand transition-colors mt-0.5 group-hover:rotate-180 duration-300" />
                  )}
                </a>

                {/* Products Mega Menu */}
                {item.isMega && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px] opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    <div className="bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col">
                      <div className="grid grid-cols-2 gap-2 p-6">
                        {productLinks.map((prod, i) => (
                          <a 
                            key={i} 
                            href="#" 
                            onClick={(e) => handleProductClick(e, prod)}
                            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 group/item"
                          >
                            <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 ${prod.color} group-hover/item:scale-110 group-hover/item:shadow-lg`}>
                              <prod.icon size={24} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col gap-1 overflow-hidden">
                              <span className="font-bold text-slate-900 text-[15px] group-hover/item:text-brand transition-colors whitespace-nowrap">{prod.title}</span>
                              <span className="text-sm text-slate-500 leading-snug">{prod.subtext}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Standard Dropdown Menu */}
                {!item.isMega && item.dropdownItems && (
                  <div className="absolute top-full left-0 pt-2 w-56 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out">
                    <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-2xl overflow-hidden">
                      {item.dropdownItems.map((subItem) => (
                        <a 
                          key={subItem} 
                          href="#" 
                          onClick={(e) => handleLinkClick(e, item, subItem)}
                          className={`block px-4 py-2.5 text-sm transition-all duration-300 rounded-xl ${
                            (subItem === 'Airports' && currentPage === 'airports') ||
                            (subItem === 'Health Care' && currentPage === 'healthcare') ||
                            (subItem === 'Retail' && currentPage === 'retail') ||
                            (subItem === 'Campuses' && currentPage === 'campuses') ||
                            (subItem === 'Warehousing' && currentPage === 'warehousing') ||
                            (subItem === 'Events' && currentPage === 'events')
                            ? 'text-brand bg-brand/5 pl-6 font-bold'
                            : 'text-slate-600 hover:text-brand hover:bg-brand/5 hover:pl-6'
                          }`}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button 
              variant="success" 
              className="hidden md:flex text-sm py-2 px-5 h-10 font-semibold shadow-md shadow-brand/10"
              onClick={() => onNavigate?.('contact')}
            >
              See Demo
            </Button>
            
            <button 
              className="md:hidden text-slate-800 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-2 md:hidden animate-in fade-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto shadow-2xl">
            {navLinks.map((item) => (
              <div key={item.name} className="border-b border-slate-50 last:border-0">
                <a 
                  href={item.href}
                  className={`text-lg hover:text-brand font-medium py-3 flex items-center justify-between ${
                    (item.name === 'Contact Us' && currentPage === 'contact') ||
                    (item.name === 'About' && currentPage === 'about') ||
                    (item.name === 'Industries' && ['airports', 'healthcare', 'retail', 'campuses', 'warehousing', 'events'].includes(currentPage)) ||
                    (item.name === 'Resources' && (currentPage === 'case-studies' || currentPage === 'blog')) ||
                    (item.name === 'Products' && (currentPage === 'mapping-platform' || currentPage === 'navigation-wayfinding' || currentPage === 'real-time-tracking' || currentPage === 'asset-tracking' || currentPage === 'analytics-insights' || currentPage === 'integrations-apis'))
                    ? 'text-brand' 
                    : 'text-slate-700'
                  }`}
                  onClick={(e) => !item.dropdownItems && !item.isMega && handleLinkClick(e, item)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </a>
                
                {/* Mobile Submenu for Products */}
                {item.isMega && (
                  <div className="pl-4 flex flex-col gap-3 mb-4 mt-2 border-l-2 border-slate-100 ml-1">
                    {productLinks.map((prod, idx) => (
                      <div key={idx} className="flex items-start gap-3" onClick={(e) => handleProductClick(e, prod)}>
                        <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${prod.color}`}>
                           <prod.icon size={16} />
                        </div>
                        <div className="flex flex-col">
                           <span className="text-sm font-bold text-slate-800">{prod.title}</span>
                           <span className="text-xs text-slate-500">{prod.subtext}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mobile Submenu for standard dropdowns */}
                {!item.isMega && item.dropdownItems && (
                  <div className="pl-4 flex flex-col gap-1 mb-3 border-l-2 border-slate-100 ml-1">
                    {item.dropdownItems.map((subItem) => (
                      <a 
                        key={subItem} 
                        href="#" 
                        className={`py-2 text-sm block transition-colors ${
                          (subItem === 'Airports' && currentPage === 'airports') ||
                          (subItem === 'Health Care' && currentPage === 'healthcare') ||
                          (subItem === 'Retail' && currentPage === 'retail') ||
                          (subItem === 'Campuses' && currentPage === 'campuses') ||
                          (subItem === 'Warehousing' && currentPage === 'warehousing') ||
                          (subItem === 'Events' && currentPage === 'events')
                          ? 'text-brand font-bold'
                          : 'text-slate-500 hover:text-brand'
                        }`}
                        onClick={(e) => handleLinkClick(e, item, subItem)}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="success" className="w-full justify-center" onClick={() => { setIsOpen(false); onNavigate?.('contact'); }}>See Demo</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
