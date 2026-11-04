import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { INITIAL_ADVISOR_RULES } from '../data/initialData';
import { AdvisorRecommendation } from '../types';
import { 
  Lightbulb, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  UserCheck, 
  Filter, 
  Info, 
  Sparkles,
  ArrowRight,
  Flame,
  BadgeAlert
} from 'lucide-react';

export const AIJalAdvisor: React.FC = () => {
  const { language, t, taps, supplyLogs } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');

  // Dynamic Rule Synthesis: check if user added new logs or marked taps leaking
  const faultyTapsCount = taps.filter((t) => t.condition === 'leaking' || t.condition === 'not_closing' || t.condition === 'damaged').length;
  const hasRecentOverflow = supplyLogs.some((l) => l.tankStatus === 'overflow');
  const hasRecentOutage = supplyLogs.some((l) => l.electricityStatus === 'outage');

  // Dynamic rules enriched with user session data
  const allRecommendations: AdvisorRecommendation[] = [...INITIAL_ADVISOR_RULES];

  if (faultyTapsCount > 3) {
    allRecommendations.unshift({
      id: 'DYNAMIC-01',
      category: 'leakage',
      titleEn: `Urgent Plumber Mobilization: ${faultyTapsCount} Faulty Taps Currently Flagged`,
      titleHi: `आपातकालीन प्लंबर व्यवस्था: वर्तमान में ${faultyTapsCount} नल खराब चिह्नित हैं`,
      evidenceEn: `User tap register currently logs ${faultyTapsCount} faulty or leaking taps across campus blocks.`,
      evidenceHi: `विद्यालय के नल रजिस्टर में वर्तमान में कुल ${faultyTapsCount} नल खराब या रिसावयुक्त दर्ज हैं।`,
      possibleReasonEn: 'Simultaneous gasket deterioration or high sediment in borewell line.',
      possibleReasonHi: 'अपुष्ट संभावित कारण: बोरवेल के पानी में कंकड़/रेत आने से कई वाल्वों का एक साथ घिस जाना।',
      actionEn: 'Issue a formal repair requisition to the local Panchayat plumber to overhaul all affected taps simultaneously with durable brass fittings.',
      actionHi: 'ग्राम पंचायत या स्थानीय प्लंबर को तत्काल बुलाकर सभी चिन्हित नलों में नए ब्रास वॉशर लगवाएं।',
      benefitEn: 'Immediate arrest of campus-wide potable water leakage.',
      benefitHi: 'विद्यालय में स्वच्छ जल की निरंतर हो रही बर्बादी पर तुरंत रोक लगेगी।',
      responsiblePartyEn: 'School Head Teacher & SMC Custodian',
      responsiblePartyHi: 'प्रधानाध्यापक एवं विद्यालय प्रबंधन समिति',
      priority: 'high',
      requiresAdultVerification: true,
    });
  }

  if (hasRecentOverflow) {
    allRecommendations.splice(1, 0, {
      id: 'DYNAMIC-02',
      category: 'overflow',
      titleEn: 'Immediate Overflow Countermeasure: Designated Motor Supervisor',
      titleHi: 'अतिप्रवाह रोकथाम: निश्चित मोटर ऑपरेटर की नियुक्ति',
      evidenceEn: 'Recent daily water supply log recorded tank overflow spilling into open drain.',
      evidenceHi: 'दैनिक आपूर्ति लॉग में टंकी से पानी का अतिप्रवाह (ओवरफ्लो) नाली में बहना दर्ज हुआ है।',
      possibleReasonEn: 'Delayed manual pump shutoff due to unmonitored classroom activities.',
      possibleReasonHi: 'कक्षा कार्य में व्यस्तता के कारण मोटर समय पर बंद करने में विलंब।',
      actionEn: 'Set a loud physical countdown timer (e.g. 18 minutes) beside the pump switchboard whenever the submersible pump is energized.',
      actionHi: 'पंप स्विचबोर्ड के पास 18 मिनट का फिजिकल टाइमर अलार्म लगाएं ताकि मोटर समय पर बंद हो सके।',
      benefitEn: 'Prevents 100+ litres of water waste per filling cycle and saves electricity.',
      benefitHi: 'प्रत्येक बार भरने में 100+ लीटर पानी की बर्बादी रुकेगी और बिजली बचेगी।',
      responsiblePartyEn: 'ICT Instructor & Senior Student Eco-Monitor',
      responsiblePartyHi: 'आईसीटी अनुदेशक एवं नियुक्त इको-मॉनिटर',
      priority: 'high',
      requiresAdultVerification: true,
    });
  }

  const filtered = allRecommendations.filter((rec) => {
    const matchCategory = selectedCategory === 'all' || rec.category === selectedCategory;
    const matchPriority = selectedPriority === 'all' || rec.priority === selectedPriority;
    return matchCategory && matchPriority;
  });

  const categories = [
    { id: 'all', labelEn: 'All Categories', labelHi: 'सभी श्रेणियां' },
    { id: 'rainwater', labelEn: 'Rainwater (RWH)', labelHi: 'वर्षा जल संचयन' },
    { id: 'leakage', labelEn: 'Tap Leakage', labelHi: 'नल रिसाव' },
    { id: 'overflow', labelEn: 'Tank & Overflow', labelHi: 'टंकी व अतिप्रवाह' },
    { id: 'garden', labelEn: 'Garden Irrigation', labelHi: 'वाटिका सिंचाई' },
    { id: 'filtration', labelEn: 'Filtration Health', labelHi: 'पेयजल छनन' },
  ];

  return (
    <section id="advisor" className="py-16 bg-slate-950/90 border-b border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'पारदर्शी नियम-आधारित निर्णय समर्थन' : 'Rule-Based Decision Support'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.advisorTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {t.advisorSubtitle}
          </p>
        </div>

        {/* Ethical Transparency Disclaimer (Mandatory) */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900 border border-cyan-900/60 text-xs text-slate-300 flex items-start gap-3 shadow-lg">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-cyan-300">
              {language === 'hi' ? 'पारदर्शिता घोषणा:' : 'Engine Transparency Statement:'}
            </span>{' '}
            {t.advisorDisclaimer}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {language === 'hi' ? cat.labelHi : cat.labelEn}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-semibold">{language === 'hi' ? 'प्राथमिकता:' : 'Priority:'}</span>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none"
            >
              <option value="all">{language === 'hi' ? 'सभी प्राथमिकताएं' : 'All Priorities'}</option>
              <option value="high">{language === 'hi' ? 'उच्च (High)' : 'High Priority'}</option>
              <option value="medium">{language === 'hi' ? 'मध्यम (Medium)' : 'Medium Priority'}</option>
              <option value="low">{language === 'hi' ? 'सामान्य (Low)' : 'Low Priority'}</option>
            </select>
          </div>
        </div>

        {/* Advisory Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((rec) => {
            const isHigh = rec.priority === 'high';
            const isMedium = rec.priority === 'medium';

            return (
              <div
                key={rec.id}
                className={`p-6 rounded-2xl bg-slate-900/95 border transition-all flex flex-col justify-between ${
                  isHigh
                    ? 'border-amber-600/70 shadow-lg shadow-amber-950/20'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  
                  {/* Category & Priority Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                      {rec.category.toUpperCase()}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {rec.requiresAdultVerification && (
                        <span className="text-[10px] font-bold text-amber-300 bg-amber-950/80 border border-amber-800 px-2 py-0.5 rounded flex items-center gap-1">
                          <UserCheck className="w-3 h-3" />
                          <span>{language === 'hi' ? 'वयस्क सत्यापन' : 'Adult Verify'}</span>
                        </span>
                      )}

                      <span
                        className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                          isHigh
                            ? 'bg-rose-950 text-rose-300 border border-rose-800'
                            : isMedium
                            ? 'bg-sky-950 text-sky-300 border border-sky-800'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {rec.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {language === 'hi' ? rec.titleHi : rec.titleEn}
                  </h3>

                  {/* Evidence */}
                  <div className="mb-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                    <span className="font-semibold text-slate-400 block mb-0.5">
                      {language === 'hi' ? 'दर्ज साक्ष्य (Observed Evidence):' : 'Observed Evidence:'}
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {language === 'hi' ? rec.evidenceHi : rec.evidenceEn}
                    </p>
                  </div>

                  {/* Possible Reason (clearly labelled as unverified where applicable) */}
                  <div className="mb-3 text-xs text-slate-400">
                    <span className="font-semibold text-amber-400 block mb-0.5">
                      {language === 'hi' ? 'संभावित कारण (अपुष्ट):' : 'Hypothesized Reason (Unverified):'}
                    </span>
                    <p className="text-slate-300 italic">
                      {language === 'hi' ? rec.possibleReasonHi : rec.possibleReasonEn}
                    </p>
                  </div>

                  {/* Recommended Action */}
                  <div className="mb-4 text-xs">
                    <span className="font-bold text-cyan-300 block mb-1">
                      {language === 'hi' ? 'अनुशंसित सुधारात्मक कार्य:' : 'Recommended Action:'}
                    </span>
                    <p className="text-slate-200 leading-relaxed bg-cyan-950/20 border border-cyan-900/40 p-3 rounded-xl">
                      {language === 'hi' ? rec.actionHi : rec.actionEn}
                    </p>
                  </div>

                </div>

                {/* Card Footer: Benefit & Responsible Entity */}
                <div className="pt-3 border-t border-slate-800 text-[11px] space-y-1.5 text-slate-400">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-300">{language === 'hi' ? 'अपेक्षित लाभ: ' : 'Expected Benefit: '}</strong>
                      {language === 'hi' ? rec.benefitHi : rec.benefitEn}
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-300">{language === 'hi' ? 'उत्तरदायी प्राधिकारी: ' : 'Responsible Authority: '}</strong>
                      {language === 'hi' ? rec.responsiblePartyHi : rec.responsiblePartyEn}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
