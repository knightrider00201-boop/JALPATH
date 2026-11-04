import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DIAGNOSTIC_STAGES } from '../data/initialData';
import { DiagnosticStage } from '../types';
import { 
  Search, 
  AlertTriangle, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle, 
  Info, 
  ChevronRight, 
  X,
  Layers,
  HelpCircle,
  Eye,
  FileCheck2,
  AlertOctagon,
  Camera
} from 'lucide-react';

export const RainwaterDetective: React.FC = () => {
  const { language, t } = useApp();
  const [selectedStage, setSelectedStage] = useState<DiagnosticStage>(DIAGNOSTIC_STAGES[1]); // default to inlet (failure point)
  const [fullDiagnosisOpen, setFullDiagnosisOpen] = useState(false);

  return (
    <section id="detective" className="py-16 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      {/* Subtle background ambient pulse */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-950/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800 text-xs font-semibold text-red-300 mb-3 animate-pulse">
            <Search className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'अति महत्वपूर्ण विशेषता' : 'Flagship Diagnostic Engine'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.detectiveTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {t.detectiveSubtitle}
          </p>
        </div>

        {/* Authentic School Finding Callout */}
        <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-red-950/50 via-slate-900 to-amber-950/40 border border-red-700/70 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-600/20 text-red-400 border border-red-500/40 shrink-0 mt-0.5">
              <AlertOctagon className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-red-950 border border-red-700 text-red-300">
                  {language === 'hi' ? 'सत्यापित विफलता बिंदु' : 'Actual School Failure Point'}
                </span>
                <span className="text-xs text-slate-400 font-medium">UPG M.S. DUDHANI-1</span>
              </div>
              <p className="text-sm font-semibold text-white leading-relaxed">
                {language === 'hi'
                  ? 'वर्षा का पानी आरसीसी छत पर लगभग दो दिनों तक जमा रहता है, परंतु पीवीसी पाइप के इनलेट (प्रवेश मुहाने) तक बिल्कुल नहीं पहुँचता। शून्य (0) पानी पाइप में प्रवेश करता है।'
                  : 'Rainwater accumulates on the RCC roof for ~2 days after rainfall, but ZERO water reaches the PVC pipe inlet. Water pools away from the intake.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setFullDiagnosisOpen(true)}
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 whitespace-nowrap flex items-center gap-2 transition-all shrink-0 hover:scale-[1.02]"
          >
            <Eye className="w-4 h-4" />
            <span>{t.viewFullDiagnosis}</span>
          </button>
        </div>

        {/* 5-STAGE INTERACTIVE FLOW DIAGRAM */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center sm:text-left flex items-center gap-2 justify-center sm:justify-start">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>{language === 'hi' ? 'इंटरैक्टिव जल प्रवाह आरेख (प्रत्येक चरण पर क्लिक करें):' : 'Interactive Hydrological Conveyance Chain (Click any stage):'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            
            {DIAGNOSTIC_STAGES.map((stage, idx) => {
              const isSelected = selectedStage.id === stage.id;
              const isFailurePoint = stage.id === 'inlet';
              const isAccumulating = stage.id === 'roof';

              return (
                <div key={stage.id} className="relative group">
                  <button
                    onClick={() => setSelectedStage(stage)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all h-full flex flex-col justify-between ${
                      isSelected
                        ? 'ring-2 ring-cyan-400 shadow-xl bg-slate-900 border-cyan-500'
                        : isFailurePoint
                        ? 'bg-red-950/40 border-red-700/80 hover:bg-red-950/60'
                        : isAccumulating
                        ? 'bg-sky-950/30 border-sky-800 hover:bg-sky-950/50'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div>
                      {/* Step index & badge */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-slate-400">
                          {language === 'hi' ? `चरण 0${idx + 1}` : `Stage 0${idx + 1}`}
                        </span>

                        {isFailurePoint ? (
                          <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-red-600 text-white animate-pulse">
                            {language === 'hi' ? 'विफलता!' : 'BREAKPOINT!'}
                          </span>
                        ) : isAccumulating ? (
                          <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-700">
                            {language === 'hi' ? 'जल ठहराव' : 'Ponding'}
                          </span>
                        ) : (
                          <span className="text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                            {language === 'hi' ? 'सूखा / शून्य' : '0 L Flow'}
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-extrabold text-white mb-1.5 leading-snug">
                        {language === 'hi' ? stage.titleHi : stage.titleEn}
                      </h3>

                      <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                        {language === 'hi' ? stage.conditionHi : stage.conditionEn}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-cyan-400 font-semibold flex items-center gap-1">
                        {isSelected ? (language === 'hi' ? 'सक्रिय' : 'Active') : (language === 'hi' ? 'जाँचें' : 'Inspect')}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </button>

                  {/* Red/Amber Warning Marker between Stage 1 (Roof) and Stage 2 (Inlet) */}
                  {idx === 0 && (
                    <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/50 animate-bounce border-2 border-slate-950">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}

                  {/* Standard flow arrows on desktop */}
                  {idx > 0 && idx < 4 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center text-slate-600 pointer-events-none">
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>

        {/* DETAILED ACTIVE STAGE INSPECTION DRAWER */}
        <div className="rounded-2xl bg-slate-900/95 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {language === 'hi' ? 'सक्रिय अन्वेषण' : 'Selected Stage Diagnostics'}
                </span>
                {selectedStage.id === 'inlet' && (
                  <span className="text-xs font-bold text-red-300 bg-red-950/90 border border-red-700 px-2 py-0.5 rounded">
                    {language === 'hi' ? 'गंभीर विफलता बिंदु' : 'Critical Failure Point'}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-black text-white">
                {language === 'hi' ? selectedStage.titleHi : selectedStage.titleEn}
              </h3>
            </div>

            <div className="text-xs px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 self-start sm:self-auto">
              {language === 'hi' ? 'सत्यापित स्थिति: ' : 'Status: '}
              <span className="font-bold text-cyan-300">
                {language === 'hi' ? selectedStage.conditionHi : selectedStage.conditionEn}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6">
            
            {/* Left Column: Observation & Why It Matters */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{language === 'hi' ? 'जमीनी अवलोकन (Ground Observation)' : 'Actual Ground Observation'}</span>
                </h4>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-200 leading-relaxed">
                  {language === 'hi' ? selectedStage.observationHi : selectedStage.observationEn}
                </div>

                {/* Real Campus Photo for Roof Catchment */}
                {selectedStage.id === 'roof' && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-cyan-500/40 relative group">
                    <img
                      src="/assets/aistudio/b______________________5a326dce.webp"
                      alt="School Building & RCC Roof Front View"
                      className="w-full h-44 sm:h-52 object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                    <div data-keep-dark="true" className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-bold text-white">
                      <span className="flex items-center gap-1.5 drop-shadow">
                        <Camera className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{language === 'hi' ? 'आरसीसी छत एवं भवन का प्रत्यक्ष दृश्य' : 'Actual RCC Roof & Campus Facade'}</span>
                      </span>
                      <span className="text-[10px] text-cyan-300 font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-cyan-700">
                        20110409301
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-sky-400" />
                  <span>{language === 'hi' ? 'यह क्यों महत्वपूर्ण है?' : 'Why It Matters'}</span>
                </h4>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-slate-300 leading-relaxed">
                  {language === 'hi' ? selectedStage.whyItMattersHi : selectedStage.whyItMattersEn}
                </div>
              </div>
            </div>

            {/* Right Column: Technical Inspection Checklist & Next Action */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === 'hi' ? 'तकनीकी निरीक्षण के बिंदु (अपुष्ट संभावित कारण)' : 'Technical Inspection Points (Unverified Hypotheses)'}</span>
                </h4>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5">
                  {(language === 'hi' ? selectedStage.inspectionPointsHi : selectedStage.inspectionPointsEn).map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{language === 'hi' ? 'अनुशंसित अगला कदम' : 'Recommended Action'}</span>
                </h4>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-cyan-200 font-medium leading-relaxed">
                  {language === 'hi' ? selectedStage.suggestedActionHi : selectedStage.suggestedActionEn}
                </div>
              </div>
            </div>

          </div>

          {/* Safety Directive Banner (Mandatory Safety Rule) */}
          <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/80 text-xs text-red-200 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold uppercase tracking-wider text-red-300 block mb-0.5">
                {language === 'hi' ? 'सख्त छात्र सुरक्षा निर्देश' : 'Mandatory Student Safety Directive'}
              </span>
              <p className="leading-relaxed">
                {language === 'hi' ? selectedStage.safetyDisclaimerHi : selectedStage.safetyDisclaimerEn}
              </p>
            </div>
          </div>
        </div>

        {/* FULL DIAGNOSIS MODAL */}
        {fullDiagnosisOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
            <div className="w-full max-w-2xl rounded-2xl bg-slate-900 border border-cyan-800 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Quest4Earth 2026 Technical Audit
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {language === 'hi' ? 'संपूर्ण वर्षा जल संचयन विफलता निदान' : 'Complete Rainwater Harvesting System Diagnosis'}
                  </h3>
                </div>
                <button
                  onClick={() => setFullDiagnosisOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-cyan-300">1. {language === 'hi' ? 'छत पर जल ठहराव:' : 'Roof Water Accumulation:'}</span>{' '}
                  {language === 'hi'
                    ? 'आरसीसी छत पर बारिश के बाद पानी लगभग दो दिन तक ठहरा रहता है। कमरों में सीलन की समस्या देखी गई है।'
                    : 'Rainwater accumulates and remains on the RCC roof for approximately two days after rainfall. Dampness is observed in classrooms below.'}
                </div>

                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800 text-red-100">
                  <span className="font-bold text-red-300">2. {language === 'hi' ? 'इनलेट तक पानी न पहुँचना (मुख्य विफलता):' : 'Failure to Reach Inlet (Primary Fault):'}</span>{' '}
                  {language === 'hi'
                    ? 'सत्यापित अवलोकन: छत पर जमा पानी पीवीसी पाइप के मुहाने तक बिल्कुल नहीं पहुँचता। शून्य (0) पानी पाइप में प्रवेश करता है।'
                    : 'Verified finding: Standing rainwater does NOT reach the PVC pipe inlet at all. ZERO water enters the PVC pipe through the current arrangement.'}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-cyan-300">3. {language === 'hi' ? 'डाउनपाइप में कोई प्रवाह नहीं:' : 'No Downpipe Water Conveyance:'}</span>{' '}
                  {language === 'hi'
                    ? 'चूंकि इनलेट में पानी नहीं जाता, अतः नीचे जाने वाला पीवीसी पाइप मानसून में भी सूखा रहता है। (इसे बंद पाइप न मानें, कारण इनलेट तक पानी न पहुँचना है)।'
                    : 'Because water never enters the intake, the vertical PVC downpipe transmits zero water. (Do not assume a clogged pipe; the verified problem is that water never reaches the intake).'}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-cyan-300">4. {language === 'hi' ? 'खुला पुनर्भरण कक्ष:' : 'Open Recharge Chamber Pit:'}</span>{' '}
                  {language === 'hi'
                    ? 'भूजल पुनर्भरण कक्ष बिना ढक्कन का खुला गड्ढा है, जिसमें गिट्टी और नीचे मिट्टी है। नीचे का पाइप बोरे से बंधा है। इसमें कोई वर्षा जल नहीं पहुँचता।'
                    : 'The recharge chamber is an open pit with no protective lid, containing gravel/stone chips, soil, and a sack-covered bottom pipe. Zero rainwater reaches it.'}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-cyan-300">5. {language === 'hi' ? 'शून्य भूजल पुनर्भरण:' : 'Zero Groundwater Recharge:'}</span>{' '}
                  {language === 'hi'
                    ? 'वर्तमान व्यवस्था से कोई वर्षा जल संचित या भूजल में प्रवाहित नहीं होता। विद्यालय का बोरवेल भूजल पर निर्भर रहता है।'
                    : 'The school currently harvests zero rainwater and contributes zero groundwater recharge through this arrangement.'}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-cyan-300">6. {language === 'hi' ? 'तकनीकी पैमाइश की आवश्यकता:' : 'Technical Survey Requirement:'}</span>{' '}
                  {language === 'hi'
                    ? 'छत का क्षेत्रफल, वर्षा और तकनीकी ढलान अभी अमापित हैं। योग्य सिविल तकनीशियन द्वारा ढलान सर्वेक्षण कराया जाना चाहिए।'
                    : 'Roof catchment area and rainfall remain officially unmeasured. An authorized civil slope survey must be conducted.'}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-800">
                <button
                  onClick={() => setFullDiagnosisOpen(false)}
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950"
                >
                  {language === 'hi' ? 'समझ गए / बंद करें' : 'Understood / Close'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
