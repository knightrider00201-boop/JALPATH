import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Droplet, 
  ArrowRight, 
  AlertTriangle, 
  Presentation, 
  FileText, 
  Users, 
  Wrench, 
  Layers,
  ShieldCheck,
  ChevronRight,
  Laptop
} from 'lucide-react';
import heroWaterDropImg from '../assets/images/jalpath_water_drop_1793686064144.jpg';

export const Hero: React.FC = () => {
  const { language, t, theme, setActiveSection, setIsPresentationMode } = useApp();

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-900/20 via-sky-950/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Competition & School Credential Header Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              Quest4Earth 2026
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-xs text-slate-300 font-medium">
              {language === 'hi' ? 'जल संरक्षण एवं सतत प्रबंधन' : 'Water Conservation & Sustainable Management'}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <span className="font-semibold text-cyan-400">UPG M.S. DUDHANI-1</span>
            <span className="text-slate-500">•</span>
            <span>Jama, Dumka, Jharkhand</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-3">
            <span className={theme === 'frost'
              ? "bg-gradient-to-r from-slate-950 via-cyan-950 to-blue-900 bg-clip-text text-transparent font-black drop-shadow-sm"
              : "bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent font-black"
            }>
              {t.appName}
            </span>
          </h1>

          <p className={`text-xl sm:text-2xl font-bold tracking-wide mb-6 ${theme === 'frost' ? 'text-cyan-800' : 'text-cyan-400'}`}>
            {t.tagline}
          </p>

          {/* 3D Translucent Liquid Water Drop Visual Centerpiece */}
          <div className="relative my-8 max-w-3xl mx-auto group">
            {/* Glowing neon background refraction */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-teal-400 rounded-3xl blur-xl opacity-35 group-hover:opacity-55 transition-opacity" />
            
            <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl bg-slate-950/80 backdrop-blur-2xl">
              <img
                src={heroWaterDropImg}
                alt="JalPath AI - 3D Translucent Liquid Water Drop with AI Circuit Nodes"
                className="w-full h-auto max-h-[380px] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Floating Ultra-Glossy Frosted Badges */}
              <div data-keep-dark="true" className="hero-water-badge absolute top-4 left-4 p-2.5 sm:p-3 rounded-2xl bg-slate-950/95 !bg-[#050B17] backdrop-blur-xl border border-cyan-400/80 shadow-2xl text-left hidden sm:block z-10">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 block drop-shadow-sm">Smart Diagnostics</span>
                <span className="text-xs font-black !text-white text-white drop-shadow-sm">Refractive Liquid AI</span>
              </div>

              <div data-keep-dark="true" className="hero-water-badge absolute bottom-4 right-4 p-2.5 sm:p-3 rounded-2xl bg-slate-950/95 !bg-[#050B17] backdrop-blur-xl border border-cyan-400/80 shadow-2xl text-right hidden sm:block z-10">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 block drop-shadow-sm">Quest4Earth 2026</span>
                <span className="text-xs font-black !text-white text-white drop-shadow-sm">UPG M.S. DUDHANI-1</span>
              </div>
            </div>
          </div>

          <p className={`text-sm sm:text-base font-medium leading-relaxed max-w-3xl mx-auto mb-8 ${theme === 'frost' ? 'text-slate-800' : 'text-slate-300'}`}>
            {language === 'hi'
              ? 'हमारा विद्यालय बोरवेल के पानी पर निर्भर है, जिसके लिए बिजली अनिवार्य है। गर्मियों में बिजली कटने पर जल संकट गहरा जाता है। वहीं दूसरी ओर, विद्यालय की छत पर वर्षा का पानी लगभग 2 दिन तक जमा रहता है, परंतु पीवीसी पाइप के इनलेट तक शून्य (0) पानी पहुँचता है। जलपथ AI इस समस्या का दस्तावेजीकरण और समाधान योजना प्रस्तुत करता है।'
              : 'Our school depends on borewell water requiring electricity. During power cuts, water availability becomes difficult. Concurrently, the existing government rainwater harvesting setup fails: rainwater ponds on the RCC roof for ~2 days, but 0 Litres reaches the collection pipe inlet. JALPATH AI documents these challenges and models actionable water stewardship.'}
          </p>

          {/* Critical Failure Point Banner */}
          <div className="mb-10 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-red-950/30 to-amber-950/40 border border-amber-600/50 shadow-lg shadow-amber-950/30 flex flex-col sm:flex-row items-center gap-4 text-left">
            <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
              <AlertTriangle className="w-7 h-7 animate-bounce" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 px-2 py-0.5 rounded bg-amber-950 border border-amber-800">
                  {language === 'hi' ? 'सत्यापित तकनीकी विफलता' : 'Confirmed Technical Failure Point'}
                </span>
                <span className="text-xs text-slate-400">
                  {language === 'hi' ? 'छत → इनलेट' : 'Roof → Inlet'}
                </span>
              </div>
              <p className="text-sm font-semibold text-amber-100">
                {language === 'hi'
                  ? 'बारिश के बाद पानी छत पर 2 दिन ठहरा रहता है, किंतु इनलेट के मुहाने तक शून्य (0) पानी पहुँचता है। (यह कोई बंद पाइप नहीं, बल्कि पानी के मुहाने तक न पहुँचने की विफलता है)।'
                  : 'Rainwater accumulates on the RCC roof for up to 2 days, but ZERO water reaches the PVC pipe inlet. (Confirmed failure: water does not reach the inlet; not an assumed pipe block).'}
              </p>
            </div>
            <button
              onClick={() => scrollTo('detective')}
              className="hero-inspect-failure-btn px-3.5 py-2 text-xs font-bold text-amber-200 bg-amber-900/60 hover:bg-amber-800/80 border border-amber-700 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-all"
            >
              <span>{language === 'hi' ? 'निदान देखें' : 'Inspect Failure'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={() => scrollTo('prototype')}
              className="px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 text-slate-950 flex items-center gap-2 shadow-lg shadow-cyan-400/25 transition-all hover:scale-[1.03] active:scale-95 hover:shadow-cyan-400/40"
            >
              <Laptop className="w-4 h-4 text-slate-950" />
              <span>{t.explorePrototype}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={() => scrollTo('detective')}
              className="px-5 py-3.5 rounded-xl text-sm font-bold bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-800/80 flex items-center gap-2 transition-all hover:scale-[1.02] shadow-sm"
            >
              <Droplet className="w-4 h-4 text-cyan-400" />
              <span>{t.viewRainwaterProblem}</span>
            </button>

            <button
              onClick={() => setIsPresentationMode(true)}
              className="px-5 py-3.5 rounded-xl text-sm font-bold bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Presentation className="w-4 h-4 text-sky-400" />
              <span>{t.startPresentation}</span>
            </button>

            <button
              onClick={() => scrollTo('reports')}
              className="px-5 py-3.5 rounded-xl text-sm font-semibold bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-200 border border-cyan-700/60 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>{t.viewProjectReport}</span>
            </button>
          </div>

          {/* Team & Mentor Recognition Badge */}
          <div className="py-3 px-5 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-2xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs text-slate-300">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-bold">
                {language === 'hi' ? 'टीम नाम' : 'Team Name'}
              </span>
              <span className="font-bold text-cyan-300">UDAAN TEAM</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-bold">
                {language === 'hi' ? 'विद्यार्थी सदस्य' : 'Student Innovators'}
              </span>
              <span className="font-semibold text-white">Archana Kumari & Sima Baski</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-bold">
                {language === 'hi' ? 'आईसीटी शिक्षक / मेंटर' : 'ICT Instructor / Mentor'}
              </span>
              <span className="font-semibold text-white">Somnath Pal</span>
            </div>
          </div>

        </div>

        {/* 5 Key Verified Baseline Pillars */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-800/80 transition-all">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span className="uppercase font-semibold tracking-wider text-[10px]">
                {language === 'hi' ? 'नामांकन' : 'Enrolled'}
              </span>
              <Users className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-extrabold text-white">160</div>
            <p className="text-[11px] text-slate-400 mt-1 leading-tight">
              {language === 'hi' ? 'कुल नामांकित विद्यार्थी (दैनिक उपस्थिति नहीं)' : 'Total Enrolled (Daily attendance unrecorded)'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-800/80 transition-all">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span className="uppercase font-semibold tracking-wider text-[10px]">
                {language === 'hi' ? 'कुल व्यक्ति' : 'Campus People'}
              </span>
              <ShieldCheck className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-2xl font-extrabold text-white">168</div>
            <p className="text-[11px] text-slate-400 mt-1 leading-tight">
              {language === 'hi' ? '160 छात्र + 5 शिक्षक + 1 ICT + 2 रसोइया' : '160 Students + 5 Teachers + 1 ICT + 2 Cooks'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-800/80 transition-all">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span className="uppercase font-semibold tracking-wider text-[10px]">
                {language === 'hi' ? 'छत की टंकी' : 'Overhead Tank'}
              </span>
              <Layers className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl font-extrabold text-white">~500 L</div>
            <p className="text-[11px] text-slate-400 mt-1 leading-tight">
              {language === 'hi' ? 'मौजूदा टंकी में मामूली रिसाव; ~1 दिन चलता है' : 'Borewell storage; minor leak; lasts ~1 day'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-800/80 transition-all">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span className="uppercase font-semibold tracking-wider text-[10px]">
                {language === 'hi' ? 'खराब नल' : 'Faulty Taps'}
              </span>
              <Wrench className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-extrabold text-amber-400">3–4</div>
            <p className="text-[11px] text-slate-400 mt-1 leading-tight">
              {language === 'hi' ? 'लगभग 10 नलों में से (नुकसान अमापित)' : 'Out of ~10 taps (litres loss unmeasured)'}
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-gradient-to-br from-red-950/40 to-slate-900/90 border border-red-800/60 transition-all">
            <div className="flex items-center justify-between text-red-300 text-xs mb-2">
              <span className="uppercase font-semibold tracking-wider text-[10px]">
                {language === 'hi' ? 'पाइप में संचयन' : 'Inlet Harvest'}
              </span>
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-2xl font-extrabold text-red-400">0 L</div>
            <p className="text-[11px] text-red-200/80 mt-1 leading-tight">
              {language === 'hi' ? 'पानी इनलेट तक नहीं पहुँचता; प्रणाली अकार्यशील' : 'Water does not reach inlet; RWH non-functional'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
