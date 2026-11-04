import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Users, 
  GraduationCap, 
  Laptop, 
  Building2, 
  Heart, 
  Sparkles,
  MapPin,
  Award
} from 'lucide-react';

export const TeamSection: React.FC = () => {
  const { language, t } = useApp();

  return (
    <section id="team" className="py-16 bg-slate-950/80 border-b border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'उड़ान टीम' : 'Team Udaan'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.teamTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {t.teamSubtitle}
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Student 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-800 transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-sky-400 p-0.5 mx-auto mb-4 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
              {language === 'hi' ? 'विद्यार्थी अन्वेषक' : 'Student Innovator'}
            </span>
            <h3 className="text-xl font-bold text-white mt-2 mb-1">
              Archana Kumari
            </h3>
            <p className="text-xs text-slate-400">
              UPG M.S. DUDHANI-1 (Jama, Dumka)
            </p>
            <p className="text-xs text-slate-300 mt-4 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              {language === 'hi'
                ? 'परिसर के नलों की भौतिक स्थिति दर्ज करने तथा छत पर पानी ठहराव की समस्या के जमीनी अध्ययन में सक्रिय योगदान।'
                : 'Led field audits of school tap leakages and documented rainwater accumulation patterns on the school roof.'}
            </p>
          </div>

          {/* Student 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-800 transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-400 p-0.5 mx-auto mb-4 shadow-lg shadow-teal-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-teal-400" />
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 px-2 py-0.5 rounded bg-teal-950 border border-teal-800">
              {language === 'hi' ? 'विद्यार्थी अन्वेषक' : 'Student Innovator'}
            </span>
            <h3 className="text-xl font-bold text-white mt-2 mb-1">
              Sima Baski
            </h3>
            <p className="text-xs text-slate-400">
              UPG M.S. DUDHANI-1 (Jama, Dumka)
            </p>
            <p className="text-xs text-slate-300 mt-4 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              {language === 'hi'
                ? 'विद्यालय वाटिका के पौधों की देखभाल, सिंचाई पद्धतियों की समीक्षा एवं जल संरक्षण जागरूकता क्विज़ के निर्माण में सहभागिता।'
                : 'Conducted plant vitality counts in the school garden and helped co-design the student awareness quiz.'}
            </p>
          </div>

          {/* Teacher / Mentor */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950/40 border border-cyan-800/80 hover:border-cyan-600 transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-500 p-0.5 mx-auto mb-4 shadow-lg shadow-sky-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Laptop className="w-8 h-8 text-sky-400" />
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 px-2 py-0.5 rounded bg-sky-950 border border-sky-800">
              {language === 'hi' ? 'आईसीटी अनुदेशक / मेंटर' : 'ICT Instructor & Mentor'}
            </span>
            <h3 className="text-xl font-bold text-white mt-2 mb-1">
              Somnath Pal
            </h3>
            <p className="text-xs text-slate-400">
              ICT Instructor, UPG M.S. DUDHANI-1
            </p>
            <p className="text-xs text-slate-300 mt-4 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              {language === 'hi'
                ? 'छात्रों को डिजिटल डेटा संग्रह, वैज्ञानिक जल विज्ञान सूत्रों तथा नैतिक एवं पारदर्शी तकनीकी प्रस्तुति हेतु मार्गदर्शन प्रदान किया।'
                : 'Mentored the team in digital audit structuring, hydrology calculation formulas, and ethical scientific presentation.'}
            </p>
          </div>

        </div>

        {/* School & Community Pledge */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">UPG M.S. DUDHANI-1</span>
                <span className="text-xs text-cyan-400 font-semibold">• Jama, Dumka, Jharkhand</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                {language === 'hi'
                  ? 'Quest4Earth 2026 के माध्यम से हम अपने ग्रामीण विद्यालय में जल संरक्षण और वर्षा जल संचयन के प्रति एक जागरूक और जिम्मेदार दृष्टिकोण स्थापित कर रहे हैं।'
                  : 'Empowering rural government school students with digital tools to diagnose, record, and resolve real-world environmental challenges.'}
              </p>
            </div>
          </div>

          <div className="text-center md:text-right shrink-0">
            <span className="text-xs text-slate-500 uppercase font-semibold block mb-0.5">
              {language === 'hi' ? 'परियोजना ध्येय वाक्य' : 'Official Motto'}
            </span>
            <span className="text-base font-extrabold text-cyan-300">
              &quot;{t.tagline}&quot;
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
