import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { KNOWN_VS_UNKNOWN_DATA } from '../data/initialData';
import { 
  Building2, 
  Users, 
  Waves, 
  AlertTriangle, 
  Flower2, 
  Check, 
  HelpCircle, 
  Sparkles,
  Info,
  ShieldCheck,
  GlassWater,
  Maximize2,
  X,
  MapPin,
  CheckCircle2,
  Camera,
  Layers
} from 'lucide-react';

export const SchoolWaterProfile: React.FC = () => {
  const { language, t, theme } = useApp();
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const schoolPhotoUrl = '/assets/aistudio/b______________________5a326dce.webp';

  return (
    <section id="profile" className="py-16 bg-slate-950 border-b border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'विद्यालय आधारभूत परिचय' : 'School Water Dossier'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'hi' ? 'विद्यालय जल प्रोफाइल एवं प्रत्यक्ष परिसर' : 'School Water Profile & Verified Campus'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {language === 'hi' 
              ? 'उत्क्रमित मध्य विद्यालय दुधानी-1 (प्रखंड: जामा, जिला: दुमका, झारखंड) के भौतिक अवलोकन एवं अवसंरचना'
              : 'Verified physical infrastructure, campus demographics, and operational baseline at UPG M.S. DUDHANI-1 (Jama, Dumka, Jharkhand).'}
          </p>
        </div>

        {/* Real Ground Observation Photograph Showcase */}
        <div className="mb-14 rounded-3xl bg-slate-900/90 border border-cyan-800/60 shadow-2xl overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Visual Column - Responsive School Photo */}
            <div className="lg:col-span-7 relative group overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={schoolPhotoUrl}
                alt="उत्क्रमित मध्य विद्यालय दुधानी-1 (UPG M.S. DUDHANI-1) Campus Front View"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[440px] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
                onClick={() => setIsPhotoModalOpen(true)}
              />

              {/* Gradient Scrim for Overlaid Badges */}
              <div className="school-photo-scrim absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 pointer-events-none transition-all duration-300" />

              {/* Top Floating Badges */}
              <div className="school-photo-top-bar absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                <span className="school-badge-verified inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/80 text-[11px] font-bold text-emerald-300 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <span>{language === 'hi' ? 'वास्तविक अध्ययन स्थल' : 'Verified Study Site'}</span>
                </span>

                <span className="school-badge-udise inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-400/80 text-[11px] font-mono font-bold text-cyan-300 shadow-lg">
                  <span>यू-डायस: 20110409301</span>
                </span>
              </div>

              {/* Bottom Floating Bar */}
              <div className="school-photo-bottom-bar absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                <div className="school-badge-caption bg-slate-950/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-xl text-left">
                  <p className="school-badge-title text-xs font-bold text-white leading-tight">
                    {language === 'hi' ? 'उत्क्रमित मध्य विद्यालय, दुधानी-1' : 'UPG M.S. DUDHANI-1'}
                  </p>
                  <p className="school-badge-location text-[11px] text-cyan-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{language === 'hi' ? 'प्रखंड: जामा, जिला: दुमका (झारखंड)' : 'Jama, Dumka (Jharkhand)'}</span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="school-fullscreen-btn px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg transition-transform active:scale-95 cursor-pointer"
                  title={language === 'hi' ? 'तस्वीर पूरी स्क्रीन में देखें' : 'View Full Image'}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{language === 'hi' ? 'पूर्ण तस्वीर' : 'Fullscreen'}</span>
                </button>
              </div>
            </div>

            {/* Ground Observation Details Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
                    <Camera className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    {language === 'hi' ? 'भौतिक स्थल साक्ष्य' : 'Ground Physical Evidence'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {language === 'hi' ? 'प्रत्यक्ष विद्यालय अवलोकन' : 'On-Site Ground Observations'}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {language === 'hi'
                    ? 'यह तस्वीर हमारे विद्यालय की वास्तविक इमारत (सामने का दृश्य) को दर्शाती है। दीवार पर अंकित विवरण एवं छत की भौतिक संरचना Quest4Earth परियोजना के आधारभूत साक्ष्य हैं।'
                    : 'This verified photograph captures our actual school campus (front facade). The wall-painted credentials and concrete roof geometry form the empirical foundation of our Quest4Earth submission.'}
                </p>

                {/* Ground Verified Highlights */}
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">1</span>
                    <div>
                      <p className="text-xs font-bold text-white">
                        {language === 'hi' ? 'आरसीसी छत जलग्रहण (~400 वर्ग मीटर)' : 'RCC Roof Catchment (~400 m²)'}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {language === 'hi'
                          ? 'समतल कंक्रीट छत पर बारिश के बाद लगभग 2 दिन तक पानी ठहरा रहता है, जिससे नीचे के कमरों में सीलन आती है।'
                          : 'Flat concrete roof where storm water pools for ~2 days, causing dampness in rooms underneath.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-amber-950 border border-amber-700 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">2</span>
                    <div>
                      <p className="text-xs font-bold text-amber-300">
                        {language === 'hi' ? 'छत → इनलेट विफलता बिंदु (0 L Harvested)' : 'Roof-to-Inlet Bottleneck (0 L)'}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {language === 'hi'
                          ? 'पानी इनलेट से दूर गड्ढों में जमा रहता है; कोने में लगे पीवीसी पाइप के मुहाने तक शून्य (0) पानी पहुँचता है।'
                          : 'Water pools in surface depressions away from the inlet; 0 L enters the single vertical PVC pipe.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">3</span>
                    <div>
                      <p className="text-xs font-bold text-emerald-300">
                        {language === 'hi' ? 'सरकारी यू-डायस कोड: 20110409301' : 'Official U-DISE: 20110409301'}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {language === 'hi'
                          ? 'तस्वीर में भवन की दीवार पर स्पष्ट रूप से जामा प्रखंड, दुमका जिला एवं यू-डायस कोड अंकित देखा जा सकता है।'
                          : 'Clearly painted on the central facade: Block - Jama, District - Dumka, U-DISE Code 20110409301.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'बड़ी स्क्रीन में देखें' : 'Zoom Inspection View'}</span>
                </button>

                <a
                  href="#detective"
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-all"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>{language === 'hi' ? 'विफलता निदान पर जाएं' : 'Jump to Diagnostic'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Lightbox Modal for School Photo Inspection */}
        {isPhotoModalOpen && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 md:p-8"
            onClick={() => setIsPhotoModalOpen(false)}
          >
            {/* Modal Header */}
            <div 
              className="w-full max-w-5xl flex items-center justify-between py-2 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
                  <Building2 className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-white">
                    {language === 'hi' ? 'उत्क्रमित मध्य विद्यालय दुधानी-1 (मुख्य भवन)' : 'UPG M.S. DUDHANI-1 (Main Campus)'}
                  </h3>
                  <p className="text-xs text-cyan-300 font-mono">
                    U-DISE: 20110409301 • Jama, Dumka (Jharkhand)
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Full High-Res Image */}
            <div 
              className="w-full max-w-5xl flex-1 flex items-center justify-center py-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-2xl max-h-[75vh]">
                <img
                  src={schoolPhotoUrl}
                  alt="UPG M.S. DUDHANI-1 High Resolution Campus View"
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
            </div>

            {/* Modal Footer Caption */}
            <div 
              className="school-modal-footer-caption w-full max-w-5xl bg-slate-900/90 border border-slate-800 p-4 rounded-2xl text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <p>
                <strong className="text-cyan-300">{language === 'hi' ? 'सत्यापित स्थल:' : 'Empirical Ground Truth:'}</strong>{' '}
                {language === 'hi'
                  ? 'दीवार पर अंकित "उत्क्रमित मध्य विद्यालय, दुधानी-1", प्रखंड-जामा, जिला-दुमका एवं यू-डायस कोड: 20110409301 स्पष्ट पठनीय है।'
                  : 'Wall text prominently identifies UPG M.S. Dudhani-1, Block Jama, Dist Dumka, and U-DISE Code 20110409301.'}
              </p>
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="school-modal-close-btn px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 shrink-0 cursor-pointer"
              >
                {language === 'hi' ? 'बंद करें (Esc)' : 'Close Viewer (Esc)'}
              </button>
            </div>
          </div>
        )}

        {/* 6 Key Architectural Dimension Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* 1. Demographics */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-800 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/80">
                  <Users className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800">
                  {t.labelVerified}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'hi' ? 'विद्यालय जनसंख्या विवरण' : 'Campus Demographics'}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {language === 'hi'
                  ? 'नामांकन पंजी के अनुसार 160 छात्र पंजीकृत हैं। ध्यान दें: 160 कुल नामांकन है, दैनिक उपस्थिति नहीं।'
                  : 'Total enrolled students is 160 from school registers. (Note: 160 is enrolled headcount, NOT daily attendance).'}
              </p>
              
              <div className="space-y-2 text-xs bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'कुल नामांकित छात्र' : 'Enrolled Students'}:</span>
                  <span className="font-bold text-white">160</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'कार्यरत शिक्षक' : 'Teaching Staff'}:</span>
                  <span className="font-bold text-white">5</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'आईसीटी अनुदेशक' : 'ICT Instructor'}:</span>
                  <span className="font-bold text-cyan-300">1 (Somnath Pal)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'मध्याह्न भोजन रसोइया' : 'MDM Cooks'}:</span>
                  <span className="font-bold text-white">2</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-cyan-400 font-semibold">{language === 'hi' ? 'कुल ज्ञात व्यक्ति' : 'Total Known People'}:</span>
                  <span className="font-extrabold text-cyan-300">168</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Main Water Supply & Tank */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-800 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-sky-950 text-sky-400 border border-sky-800/80">
                  <Waves className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800">
                  {t.labelReported}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'hi' ? 'मुख्य बोरवेल एवं टंकी स्थिति' : 'Primary Borewell & Tank'}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {language === 'hi'
                  ? 'गहरा बोरवेल सबमर्सिबल पंप द्वारा पर्याप्त पानी देता है जब बिजली उपलब्ध हो। गर्मी में बिजली कटौती से पंप बंद हो जाता है।'
                  : 'Deep borewell with submersible electric pump provides good yield when power is on. Summer blackouts paralyze supply.'}
              </p>

              <div className="space-y-2 text-xs bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'मौजूदा टंकी क्षमता' : 'Overhead Tank'}:</span>
                  <span className="font-bold text-sky-300">~500 Litres</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'टंकी की स्थिति' : 'Tank Condition'}:</span>
                  <span className="font-medium text-amber-300">{language === 'hi' ? 'मामूली रिसाव / क्षति' : 'Minor leakage / damage'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'पानी चलने की अवधि' : 'Stored Duration'}:</span>
                  <span className="text-white">{language === 'hi' ? 'लगभग 1 दिन' : '~1 school day'}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">{language === 'hi' ? 'पंप नियंत्रण' : 'Motor Control'}:</span>
                  <span className="text-rose-300">{language === 'hi' ? 'मैन्युअल (कोई ऑटो-कटऑफ नहीं)' : 'Manual (no auto cut-off)'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. The 1000L Burst Tank Incident (CRITICAL ETHICAL ACCURACY) */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-900 border border-amber-800/70 hover:border-amber-600 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-amber-950 text-amber-400 border border-amber-800">
                  <AlertTriangle className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider px-2 py-0.5 rounded bg-amber-950 border border-amber-800">
                  {language === 'hi' ? 'विगत घटना सत्य' : 'Historical Fact'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-amber-200 mb-2">
                {language === 'hi' ? '1000 लीटर टंकी फटने की घटना' : '1000L Tank Burst Incident'}
              </h3>
              <p className="text-xs text-amber-100/90 mb-4 leading-relaxed">
                {language === 'hi'
                  ? 'लगभग 1 वर्ष पूर्व बोरवेल जल भंडारण हेतु 1000 लीटर की अलग टंकी लगाई गई थी। वह लगभग 2 दिनों में दो टुकड़ों में फट गई और हटा दी गई।'
                  : 'Approximately 1 year ago, a separate 1000L tank was installed for borewell storage. It burst into 2 pieces after ~2 days and was discarded.'}
              </p>

              <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-700/60 text-[11px] text-amber-200 space-y-1.5">
                <div className="font-bold text-amber-300">
                  {language === 'hi' ? 'अति महत्वपूर्ण स्पष्टीकरण:' : 'CRITICAL ACCURACY NOTE:'}
                </div>
                <p>
                  {language === 'hi'
                    ? '• यह टंकी बोरवेल जल के लिए थी, वर्षा जल (RWH) के लिए नहीं।'
                    : '• This was for borewell water, NOT for rainwater harvesting.'}
                </p>
                <p>
                  {language === 'hi'
                    ? '• इसके फटने का आधिकारिक कारण सत्यापित नहीं है; कोई काल्पनिक कारण न गढ़ा जाए।'
                    : '• The technical cause was never officially verified; do not speculate.'}
                </p>
              </div>
            </div>
          </div>

          {/* 4. Alternative Handpump */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-800 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
                  <Waves className="w-5 h-5 text-amber-400" />
                </span>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                  {language === 'hi' ? 'वैकल्पिक स्रोत' : 'Backup Source'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'hi' ? 'समीपवर्ती चापाकल (Handpump)' : 'Nearby Handpump Backup'}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {language === 'hi'
                  ? 'विद्युत कटौती के दौरान विद्यालय परिसर से 50 मीटर से कम दूरी पर स्थित चापाकल का उपयोग किया जाता है।'
                  : 'Used during electricity blackouts. Located less than 50 metres from school.'}
              </p>

              <div className="space-y-2 text-xs bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'दूरी' : 'Distance'}:</span>
                  <span className="text-white">&lt; 50 Metres</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'जल उत्पादन' : 'Water Output'}:</span>
                  <span className="text-amber-300 font-semibold">{language === 'hi' ? 'कम जल प्रवाह (Low yield)' : 'Low output'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'दृश्य अवलोकन' : 'Visual appearance'}:</span>
                  <span className="text-amber-200">{language === 'hi' ? 'हल्का लोहे जैसा रंग' : 'Iron-coloured appearance'}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">{language === 'hi' ? 'रासायनिक जाँच' : 'Chemical lab test'}:</span>
                  <span className="text-slate-400 italic">{language === 'hi' ? 'अमापित / अप्रमाणित' : 'Not laboratory tested'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5. School Garden & Taps */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-800 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-teal-950 text-teal-400 border border-teal-800/80">
                  <Flower2 className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider px-2 py-0.5 rounded bg-teal-950 border border-teal-800">
                  {t.labelApproximate}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'hi' ? 'विद्यालय वाटिका एवं नल' : 'School Garden & Taps'}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {language === 'hi'
                  ? 'वाटिका में 30–40 पौधे हैं, जिनमें से 20–30 स्वस्थ हैं। सिंचाई अनियमित है और मुख्य रूप से होज़ पाइप से की जाती है।'
                  : 'Garden has ~30–40 plants (~20–30 healthy). Watering is irregular, mainly done with an unmetered hose.'}
              </p>

              <div className="space-y-2 text-xs bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'पौधों की संख्या' : 'Plant Count'}:</span>
                  <span className="text-white">~30–40 plants (~20–30 healthy)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'सिंचाई विधि' : 'Irrigation method'}:</span>
                  <span className="text-white">{language === 'hi' ? 'होज़ पाइप / कभी बाल्टी-मग' : 'Hose / occasional bucket'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'देखभालकर्ता' : 'Dedicated caretaker'}:</span>
                  <span className="text-amber-300">{language === 'hi' ? 'कोई नियुक्त नहीं' : 'None assigned'}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">{language === 'hi' ? 'पौधों की जल खपत' : 'Plant water usage'}:</span>
                  <span className="text-slate-400 italic">{language === 'hi' ? 'अमापित (Not measured)' : 'Unmeasured'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Drinking Water Filtration */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-800 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/80">
                  <GlassWater className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider px-2 py-0.5 rounded bg-sky-950 border border-sky-800">
                  {language === 'hi' ? 'पेयजल' : 'Drinking Water'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'hi' ? 'पेयजल एवं छनन व्यवस्था' : 'Filtration Arrangement'}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {language === 'hi'
                  ? 'बोरवेल के पानी को साधारण सेरामिक कैंडल फिल्टर से गुजारा जाता है। सफाई का कोई निश्चित कैलेंडर नहीं है।'
                  : 'Raw borewell water is passed through a ceramic candle filter. Cleaning does not follow a fixed schedule.'}
              </p>

              <div className="space-y-2 text-xs bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'फिल्टर प्रकार' : 'Filter Type'}:</span>
                  <span className="text-white">{language === 'hi' ? 'सेरामिक कैंडल फिल्टर' : 'Ordinary candle filter'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">{language === 'hi' ? 'सफाई अनुसूची' : 'Cleaning Schedule'}:</span>
                  <span className="text-amber-300">{language === 'hi' ? 'अनियमित' : 'Irregular'}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">{language === 'hi' ? 'प्रमाणित पेय योग्यता' : 'Certified Potable'}:</span>
                  <span className="text-slate-400 italic">{language === 'hi' ? 'लैब परीक्षण लंबित' : 'Lab test pending'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Known Data vs Unknown Data Comparison Matrix (Mandatory Section) */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
          <div className="p-5 sm:p-6 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 mb-1">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>{language === 'hi' ? 'वैज्ञानिक सत्यनिष्ठा' : 'Scientific Integrity'}</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {language === 'hi' ? 'ज्ञात आँकड़े बनाम अज्ञात / अमापित आँकड़े' : 'Known Data vs. Unknown / Unmeasured Data'}
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              {language === 'hi'
                ? 'Quest4Earth में हम वास्तविक और अमापित आँकड़ों के बीच पूर्ण पारदर्शिता बनाए रखते हैं।'
                : 'Full transparency: Clearly separating ground-verified facts from unmeasured hydrological metrics.'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 font-semibold">{language === 'hi' ? 'मापदंड (Parameter)' : 'Parameter'}</th>
                  <th className="py-3 px-4 font-semibold">{language === 'hi' ? 'स्थिति (Status)' : 'Status'}</th>
                  <th className="py-3 px-4 font-semibold">{language === 'hi' ? 'मूल्य / विवरण' : 'Value / Detail'}</th>
                  <th className="py-3 px-4 font-semibold">{language === 'hi' ? 'टिप्पणी एवं स्रोत' : 'Notes & Source'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {KNOWN_VS_UNKNOWN_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-200">
                      {language === 'hi' ? row.parameterHi : row.parameterEn}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      {row.status === 'known' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                          <Check className="w-3 h-3 text-emerald-400" />
                          {language === 'hi' ? 'सत्यापित ज्ञात' : 'Verified Known'}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                          <HelpCircle className="w-3 h-3 text-amber-400" />
                          {language === 'hi' ? 'अमापित / अज्ञात' : 'Unmeasured'}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 font-medium text-slate-300">
                      {language === 'hi' ? row.valueHi : row.valueEn}
                    </td>
                    <td className="py-3 px-4 text-slate-400 text-xs">
                      {language === 'hi' ? row.notesHi : row.notesEn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
