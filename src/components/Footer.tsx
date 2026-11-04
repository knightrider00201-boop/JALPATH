import React from 'react';
import { useApp } from '../context/AppContext';
import { Droplet, Heart, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t, setActiveSection } = useApp();

  const scrollToTop = () => {
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-800/80">
          
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500 flex items-center justify-center">
                <Droplet className="w-5 h-5 text-cyan-400 fill-cyan-400/30" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                JALPATH AI
              </span>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300">
                Quest4Earth 2026
              </span>
            </div>

            <p className="text-cyan-300 font-medium">
              &quot;{t.tagline}&quot;
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {language === 'hi'
                ? 'उत्क्रमित मध्य विद्यालय दुधानी-1 (जामा, दुमका, झारखंड) के लिए उड़ान टीम द्वारा विकसित विद्यालय जल प्रबंधन एवं वर्षा जल संचयन अन्वेषण प्रोटोटाइप।'
                : 'A school-level water monitoring and decision-support prototype developed by UDAAN TEAM at UPG M.S. DUDHANI-1 (Jama, Dumka, Jharkhand).'}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-slate-200 font-bold uppercase text-[11px] tracking-wider mb-3">
              {language === 'hi' ? 'महत्वपूर्ण अनुभाग' : 'System Modules'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => scrollTo('dashboard')} className="hover:text-cyan-300 transition-colors">
                  {t.navDashboard}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('prototype')} className="hover:text-cyan-300 transition-colors text-cyan-400 font-semibold">
                  {t.navPrototype}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('detective')} className="hover:text-amber-300 transition-colors text-amber-400 font-semibold">
                  {t.navDetective}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('audit')} className="hover:text-cyan-300 transition-colors">
                  {t.navAudit}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculator')} className="hover:text-cyan-300 transition-colors">
                  {t.navCalculator}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('supply')} className="hover:text-cyan-300 transition-colors">
                  {t.navSupply}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('advisor')} className="hover:text-cyan-300 transition-colors">
                  {t.navAdvisor}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('quiz')} className="hover:text-cyan-300 transition-colors">
                  {t.navQuiz}
                </button>
              </li>
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="text-slate-200 font-bold uppercase text-[11px] tracking-wider mb-3">
              {language === 'hi' ? 'सहयोगी एवं मेंटर' : 'Project Credits'}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">{language === 'hi' ? 'टीम' : 'Team'}</span>
                <span className="text-white font-semibold">UDAAN TEAM</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">{language === 'hi' ? 'छात्र सदस्य' : 'Students'}</span>
                <span className="text-slate-300">Archana Kumari & Sima Baski</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">{language === 'hi' ? 'आईसीटी शिक्षक' : 'Mentor'}</span>
                <span className="text-slate-300">Somnath Pal (ICT Instructor)</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">{language === 'hi' ? 'विद्यालय' : 'School'}</span>
                <span className="text-slate-300">UPG M.S. DUDHANI-1 (Jama, Dumka)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Ethical Prototype Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed mb-6">
          <strong className="text-slate-300">{language === 'hi' ? 'प्रोटोटाइप अस्वीकरण:' : 'Prototype Disclaimer:'}</strong>{' '}
          {language === 'hi'
            ? 'यह Quest4Earth 2026 प्रतियोगिता हेतु विकसित एक फ्रंटएंड वेब प्रोटोटाइप है। यह किसी वास्तविक मोटर पंप को नियंत्रित नहीं करता और न ही इसमें लाइव भौतिक सेंसर लगे हैं। यह प्रणाली मानवीय अवलोकनों को व्यवस्थित कर निर्णय सहायता प्रदान करती है। सभी मरम्मत केवल अधिकृत वयस्कों द्वारा ही की जानी चाहिए।'
            : 'This is a frontend demonstration prototype built for the Quest4Earth 2026 competition. It does not physically actuate pumps, detect live fluid telemetry with IoT sensors, or physically repair infrastructure. All user records are stored client-side in browser LocalStorage. Physical repairs must always be authorized and performed by qualified adults.'}
        </div>

        {/* Bottom copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © 2026 JALPATH AI • Quest4Earth 2026 Entry • UDAAN TEAM
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>{language === 'hi' ? 'शीर्ष पर जाएं' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
