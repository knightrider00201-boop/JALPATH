import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Droplet, 
  Menu, 
  X, 
  Languages, 
  Presentation, 
  FileText, 
  Activity, 
  Search, 
  Calculator, 
  CheckSquare, 
  Lightbulb, 
  HelpCircle,
  Cpu,
  Laptop,
  Sun,
  Moon,
  ChevronDown,
  Users,
  Compass
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, theme, toggleTheme, activeSection, setActiveSection, setIsPresentationMode } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Top core navigation tabs:
  // - On lg (1024px–1279px): 4 core tabs + More dropdown
  // - On xl (1280px+): 6 core tabs + More dropdown
  const coreLinks = [
    { 
      id: 'home', 
      label: language === 'hi' ? 'मुख्य' : 'Home', 
      icon: Droplet, 
      showOnLg: true 
    },
    { 
      id: 'dashboard', 
      label: language === 'hi' ? 'डैशबोर्ड' : 'Dashboard', 
      icon: Activity, 
      showOnLg: true 
    },
    { 
      id: 'prototype', 
      label: language === 'hi' ? 'प्रोटोटाइप' : 'Prototype', 
      icon: Laptop, 
      isHighlight: true, 
      showOnLg: true 
    },
    { 
      id: 'detective', 
      label: language === 'hi' ? 'RWH जाँच' : 'Detective', 
      icon: Search, 
      showOnLg: false // shown on xl+
    },
    { 
      id: 'calculator', 
      label: language === 'hi' ? 'कैलकुलेटर' : 'Calculator', 
      icon: Calculator, 
      showOnLg: false // shown on xl+
    },
    { 
      id: 'reports', 
      label: language === 'hi' ? 'रिपोर्ट्स' : 'Reports', 
      icon: FileText, 
      showOnLg: true 
    },
  ];

  // Modules in the "More Modules" dropdown
  const dropdownModules = [
    { 
      id: 'detective', 
      label: language === 'hi' ? 'RWH विफलता जाँच' : 'Rainwater Detective', 
      desc: language === 'hi' ? 'छत व पाइप ढलान डायग्नोस्टिक्स' : 'Roof slope & pipe diagnostics', 
      icon: Search,
      hideOnXl: true // Already direct tab on xl+
    },
    { 
      id: 'calculator', 
      label: language === 'hi' ? 'वर्षा जल कैलकुलेटर' : 'Rainwater Calculator', 
      desc: language === 'hi' ? '400m² छत क्षमता गणना' : '400m² roof runoff model', 
      icon: Calculator,
      hideOnXl: true // Already direct tab on xl+
    },
    { 
      id: 'supply', 
      label: language === 'hi' ? 'जल आपूर्ति मॉनिटर' : 'Water Supply Monitor', 
      desc: language === 'hi' ? 'बोरवेल, 500L टैंक व बिजली कटौती' : 'Borewell, 500L tank & outages', 
      icon: Droplet 
    },
    { 
      id: 'audit', 
      label: language === 'hi' ? 'नल एवं जल ऑडिट' : 'Tap & Water Audit', 
      desc: language === 'hi' ? '10 नल व 3–4 खराब नल रिपोर्ट' : '10 taps & leakage audit log', 
      icon: CheckSquare 
    },
    { 
      id: 'advisor', 
      label: language === 'hi' ? 'AI जल सलाहकार' : 'AI Jal Advisor', 
      desc: language === 'hi' ? 'पारदर्शी नियम-आधारित इंजन' : 'Deterministic rule-based recommendations', 
      icon: Lightbulb 
    },
    { 
      id: 'quiz', 
      label: language === 'hi' ? 'जागरूकता क्विज़' : 'Awareness Quiz', 
      desc: language === 'hi' ? 'छात्र जल ज्ञान एवं स्कोर' : 'Student eco-score & badges', 
      icon: HelpCircle 
    },
    { 
      id: 'tech', 
      label: language === 'hi' ? 'तकनीकी ढांचा' : 'Technology Architecture', 
      desc: language === 'hi' ? 'सिस्टम वास्तुकला व सुरक्षा' : 'Specs, offline safety & sensors', 
      icon: Cpu 
    },
    { 
      id: 'team', 
      label: language === 'hi' ? 'टीम उड़ान' : 'Team Udaan & School', 
      desc: language === 'hi' ? 'अर्चना, सिमा एवं सोमनाथ पाल' : 'Students & ICT Mentor', 
      icon: Users 
    },
  ];

  const isDropdownActive = dropdownModules.some(link => link.id === activeSection);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-colors duration-200 select-none ${
      theme === 'frost'
        ? 'bg-white/95 border-sky-200 shadow-sm shadow-sky-100/60'
        : 'bg-slate-950/95 border-cyan-900/60 shadow-md shadow-cyan-950/40'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-15 sm:h-16 lg:h-17 gap-2">
          
          {/* ======================================================== */}
          {/* ZONE 1: BRAND IDENTITY (Anchored Left, No Shrinking)      */}
          {/* ======================================================== */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0"
          >
            {/* Water Drop Animated Emblem */}
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 lg:w-9.5 lg:h-9.5 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-teal-400 p-0.5 shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-transform shrink-0">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                theme === 'frost' ? 'bg-white' : 'bg-slate-950'
              }`}>
                <Droplet className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-cyan-500 fill-cyan-400/30 animate-pulse" />
              </div>
            </div>
            
            {/* Wordmark & Competition Tag */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`text-base sm:text-lg font-black tracking-tight whitespace-nowrap ${
                  theme === 'frost'
                    ? 'text-slate-950 drop-shadow-sm'
                    : 'bg-gradient-to-r from-cyan-300 via-sky-200 to-teal-200 bg-clip-text text-transparent'
                }`}>
                  JALPATH AI
                </span>
                
                {/* Competition Pill */}
                <span className={`hidden sm:inline-flex text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 ${
                  theme === 'frost'
                    ? 'bg-sky-100 border border-sky-300 text-sky-950 font-black'
                    : 'bg-cyan-950/80 border border-cyan-800 text-cyan-300'
                }`}>
                  Q4E &apos;26
                </span>
              </div>
              
              <p className={`text-[10px] font-medium hidden 2xl:block truncate max-w-[190px] leading-tight ${
                theme === 'frost' ? 'text-slate-600 font-semibold' : 'text-slate-400'
              }`}>
                {language === 'hi' ? 'हर बूँद का एक गंतव्य है' : 'Every Drop Has a Destination'}
              </p>
            </div>
          </div>

          {/* ======================================================== */}
          {/* ZONE 2: DESKTOP PILL NAVIGATION CAPSULE (Center, Clean)  */}
          {/* Never overflows, perfectly tiered between lg and xl      */}
          {/* ======================================================== */}
          <nav className="hidden lg:flex items-center shrink-0">
            <div className={`flex items-center gap-1 p-1 rounded-2xl border transition-colors ${
              theme === 'frost'
                ? 'bg-sky-50/90 border-sky-200/90 shadow-inner shadow-sky-100/50'
                : 'bg-slate-900/80 border-cyan-900/60 shadow-inner shadow-slate-950/50'
            }`}>
              {coreLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                
                // Hide Detective & Calculator on 1024-1279px (lg) so they fit in "More"
                // Show them on 1280px+ (xl)
                const visibilityClass = link.showOnLg ? 'flex' : 'hidden xl:flex';

                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`${visibilityClass} items-center gap-1.5 h-8 px-2.5 xl:px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? theme === 'frost'
                          ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/30 font-black'
                          : 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/30 font-black'
                        : link.isHighlight
                        ? theme === 'frost'
                          ? 'bg-amber-100 text-amber-950 hover:bg-amber-200/90 border border-amber-300/80 font-black'
                          : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 font-bold'
                        : theme === 'frost'
                        ? 'text-slate-700 hover:text-slate-950 hover:bg-white/80'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${
                      isActive
                        ? theme === 'frost' ? 'text-white' : 'text-slate-950'
                        : link.isHighlight
                        ? theme === 'frost' ? 'text-amber-800' : 'text-amber-300'
                        : theme === 'frost' ? 'text-slate-500' : 'text-slate-400'
                    }`} />
                    <span>{link.label}</span>
                  </button>
                );
              })}

              {/* "More Modules" Dropdown Trigger */}
              <div className="relative shrink-0" ref={dropdownRef}>
                <button
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`flex items-center gap-1 h-8 px-2.5 xl:px-3 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    isDropdownActive
                      ? theme === 'frost'
                        ? 'bg-sky-500 text-white shadow-sm font-black'
                        : 'bg-cyan-500 text-slate-950 shadow-sm font-black'
                      : theme === 'frost'
                      ? 'text-slate-700 hover:text-slate-950 hover:bg-white/80'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                  title="View More System Modules"
                >
                  <Compass className="w-3.5 h-3.5 shrink-0 opacity-80" />
                  <span>{language === 'hi' ? 'मॉड्यूल' : 'Modules'}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Panel */}
                {moreDropdownOpen && (
                  <div className={`absolute right-0 mt-2.5 w-72 rounded-2xl p-2 shadow-2xl border backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                    theme === 'frost'
                      ? 'bg-white/98 border-sky-300 shadow-sky-200/60'
                      : 'bg-slate-950/98 border-cyan-800 shadow-cyan-950/90'
                  }`}>
                    <div className={`flex items-center justify-between px-3 py-1.5 mb-1 border-b ${
                      theme === 'frost' ? 'border-sky-100 text-sky-950' : 'border-slate-800 text-cyan-400'
                    }`}>
                      <span className="text-[10px] font-black uppercase tracking-wider">
                        {language === 'hi' ? 'सिस्टम के अन्य मॉड्यूल' : 'All System Modules'}
                      </span>
                      <span className="text-[9px] font-bold opacity-60">JALPATH AI</span>
                    </div>

                    <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
                      {dropdownModules.map((link) => {
                        const Icon = link.icon;
                        const isActive = activeSection === link.id;
                        
                        // Hide items that are already direct tabs on xl
                        const extraClass = link.hideOnXl ? 'xl:hidden' : '';

                        return (
                          <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-all cursor-pointer ${extraClass} ${
                              isActive
                                ? theme === 'frost'
                                  ? 'bg-sky-100 text-sky-950 font-black border border-sky-300'
                                  : 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/50'
                                : theme === 'frost'
                                ? 'hover:bg-sky-50 text-slate-800'
                                : 'hover:bg-slate-900 text-slate-200'
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg shrink-0 ${
                              isActive
                                ? theme === 'frost' ? 'bg-sky-200 text-sky-900' : 'bg-cyan-500/30 text-cyan-300'
                                : theme === 'frost' ? 'bg-sky-100/70 text-sky-800' : 'bg-slate-800 text-cyan-400'
                            }`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold truncate leading-snug">{link.label}</div>
                              <div className={`text-[10px] truncate leading-tight ${
                                theme === 'frost' ? 'text-slate-500 font-medium' : 'text-slate-400'
                              }`}>{link.desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* ======================================================== */}
          {/* ZONE 3: ACTION CONTROLS (Anchored Right, No Shrinking)    */}
          {/* ======================================================== */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Theme Toggle: Clear and Accessible */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center gap-1.5 h-8.5 sm:h-9 px-2.5 sm:px-3 rounded-xl border text-xs font-black transition-all shadow-sm shrink-0 cursor-pointer ${
                theme === 'frost'
                  ? 'bg-sky-100/90 hover:bg-sky-200 border-sky-300 text-sky-950 shadow-sky-200/50'
                  : 'bg-slate-900/90 hover:bg-slate-800 border-cyan-800/80 text-cyan-200 shadow-cyan-950/40'
              }`}
              title={theme === 'frost' ? 'Switch to Deep Navy Theme' : 'Switch to Frost Ice-Blue Theme'}
              aria-label="Toggle Theme"
            >
              {theme === 'frost' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-400/40 shrink-0" />
                  <span className="font-extrabold text-sky-950">Frost</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-cyan-300 fill-cyan-400/30 shrink-0" />
                  <span className="font-extrabold text-cyan-200">Navy</span>
                </>
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center justify-center gap-1.5 h-8.5 sm:h-9 px-2.5 sm:px-3 rounded-xl border text-xs font-black transition-all shadow-sm shrink-0 cursor-pointer ${
                theme === 'frost'
                  ? 'bg-white hover:bg-sky-50 border-sky-300 text-sky-950 shadow-sm'
                  : 'bg-slate-900/90 hover:bg-slate-800 border-cyan-800/80 text-cyan-200'
              }`}
              title="Toggle English / हिंदी"
              aria-label="Toggle Language"
            >
              <Languages className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
              <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            {/* Judge Mode Button (Hidden on mobile < sm; drawer has prominent card) */}
            <button
              onClick={() => setIsPresentationMode(true)}
              className="hidden sm:flex items-center gap-1.5 h-8.5 sm:h-9 px-3 sm:px-3.5 text-xs font-black rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md shadow-cyan-600/30 border border-cyan-400/40 transition-all hover:scale-[1.02] active:scale-95 shrink-0 cursor-pointer"
              title="Open Quest4Earth Judge Presentation Mode"
            >
              <Presentation className="w-3.5 h-3.5 text-cyan-100 shrink-0" />
              <span>{language === 'hi' ? 'जज मोड' : 'Judge Mode'}</span>
            </button>

            {/* Mobile / Tablet Menu Button (Visible on < lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex items-center justify-center w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-xl border transition-colors shrink-0 cursor-pointer ${
                theme === 'frost'
                  ? 'bg-white border-sky-300 text-slate-800 hover:bg-sky-50 shadow-sm'
                  : 'bg-slate-900 border-cyan-800/80 text-slate-200 hover:text-white hover:bg-slate-800'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" /> : <Menu className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE / TABLET SLIDE-DOWN DRAWER MENU (< lg)            */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-3 sm:px-5 pt-3 pb-6 max-h-[85vh] overflow-y-auto backdrop-blur-2xl transition-all ${
          theme === 'frost'
            ? 'bg-white/98 border-sky-300 text-slate-900 shadow-xl shadow-sky-200/50'
            : 'bg-slate-950/98 border-cyan-900/60 text-slate-100 shadow-2xl'
        }`}>
          
          {/* Prominent Full-Width Judge Presentation Mode CTA for Mobile */}
          <div className="mb-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsPresentationMode(true);
              }}
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-black text-sm shadow-lg shadow-cyan-500/30 border border-cyan-400/40 cursor-pointer transition-all active:scale-[0.98]"
            >
              <Presentation className="w-4 h-4 text-cyan-100 shrink-0" />
              <span>{language === 'hi' ? '🏆 जज प्रस्तुति मोड खोलें' : '🏆 Open Judge Presentation Mode'}</span>
            </button>
          </div>

          <div className={`text-[11px] font-black px-2 py-1 uppercase tracking-wider mb-2 ${
            theme === 'frost' ? 'text-sky-950' : 'text-cyan-400'
          }`}>
            {language === 'hi' ? 'मुख्य मॉड्यूल' : 'Core Modules'}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
            {coreLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                    isActive
                      ? theme === 'frost'
                        ? 'bg-sky-200 text-sky-950 border border-sky-300 font-black'
                        : 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/50'
                      : link.isHighlight
                      ? theme === 'frost'
                        ? 'bg-amber-100 text-amber-950 border border-amber-300 font-black'
                        : 'bg-amber-500/15 text-amber-300 border border-amber-500/40'
                      : theme === 'frost'
                      ? 'text-slate-800 hover:bg-sky-50'
                      : 'text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${
                    isActive 
                      ? theme === 'frost' ? 'text-sky-800' : 'text-cyan-300' 
                      : link.isHighlight 
                      ? theme === 'frost' ? 'text-amber-800' : 'text-amber-400' 
                      : theme === 'frost' ? 'text-slate-600' : 'text-slate-400'
                  }`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className={`text-[11px] font-black px-2 py-1 uppercase tracking-wider mb-2 border-t pt-3 ${
            theme === 'frost' ? 'text-sky-950 border-sky-200' : 'text-cyan-400 border-slate-800'
          }`}>
            {language === 'hi' ? 'अतिरिक्त मॉड्यूल एवं उपकरण' : 'Additional Modules & Tools'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {dropdownModules.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                    isActive
                      ? theme === 'frost'
                        ? 'bg-sky-200 text-sky-950 border border-sky-300 font-black'
                        : 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/50'
                      : theme === 'frost'
                      ? 'text-slate-800 hover:bg-sky-50'
                      : 'text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-500 shrink-0" />
                  <div className="min-w-0">
                    <div className="truncate font-bold">{link.label}</div>
                    <div className={`text-[10px] font-normal truncate ${
                      theme === 'frost' ? 'text-slate-500' : 'text-slate-400'
                    }`}>{link.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className={`mt-4 pt-4 border-t flex flex-wrap items-center justify-between text-[11px] px-2 gap-2 ${
            theme === 'frost' ? 'border-sky-200 text-slate-600' : 'border-slate-800 text-slate-400'
          }`}>
            <span>UPG M.S. DUDHANI-1 (Jama, Dumka, Jharkhand)</span>
            <span className="text-cyan-500 font-black">UDAAN TEAM • Quest4Earth &apos;26</span>
          </div>
        </div>
      )}
    </header>
  );
};
