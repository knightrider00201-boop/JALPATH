import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  CloudRain, 
  Sun, 
  ShieldCheck, 
  AlertTriangle, 
  Droplets, 
  Calendar, 
  Compass, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  RotateCcw,
  Gauge,
  ArrowRight
} from 'lucide-react';

export type SeasonPhase = 'pre-monsoon' | 'peak-monsoon' | 'post-monsoon';

export const SeasonalAwarenessBanner: React.FC = () => {
  const { language, theme, setActiveSection } = useApp();

  // Determine current real-world month (0 = Jan, 11 = Dec)
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const getAutoSeason = (): SeasonPhase => {
    // March (2), April (3), May (4) -> Pre-Monsoon
    if (currentMonth >= 2 && currentMonth <= 4) return 'pre-monsoon';
    // June (5), July (6), August (7), September (8) -> Peak Monsoon
    if (currentMonth >= 5 && currentMonth <= 8) return 'peak-monsoon';
    // October (9), November (10), December (11), January (0), February (1) -> Post-Monsoon
    return 'post-monsoon';
  };

  const autoSeason = getAutoSeason();
  const [selectedSeason, setSelectedSeason] = useState<SeasonPhase>(autoSeason);
  const isAutoMode = selectedSeason === autoSeason;

  const monthNamesEn = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthNamesHi = [
    'जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून',
    'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'
  ];
  const currentMonthName = language === 'hi' ? monthNamesHi[currentMonth] : monthNamesEn[currentMonth];

  // Season specific configurations with real meteorological data for Dumka, Jharkhand
  const seasonData = {
    'pre-monsoon': {
      id: 'pre-monsoon' as SeasonPhase,
      nameEn: 'Pre-Monsoon Preparation',
      nameHi: 'पूर्व-मानसून तैयारी चरण',
      monthsEn: 'March – May',
      monthsHi: 'मार्च – मई',
      rainfallRange: '20 – 65 mm / month',
      rainfallAnnualShare: '~8% of annual rainfall',
      statusEn: 'Urgent Maintenance & Readiness Required',
      statusHi: 'अति आवश्यक रखरखाव व तैयारी समय',
      badgeColorNavy: 'bg-amber-950/80 border-amber-600/60 text-amber-300',
      badgeColorFrost: 'bg-amber-100 border-amber-300 text-amber-900 font-bold',
      accentBorderNavy: 'border-amber-500/40 hover:border-amber-400/60',
      accentBorderFrost: 'border-amber-300 shadow-amber-500/10',
      icon: AlertTriangle,
      iconColorNavy: 'text-amber-400',
      iconColorFrost: 'text-amber-700',
      bgGlowNavy: 'from-amber-950/30 via-slate-900/90 to-slate-950/90',
      bgGlowFrost: 'from-amber-50/90 via-white to-orange-50/70',
      bannerTaglineEn: 'Dumka receives sporadic Kalbaishakhi pre-monsoon showers. Catchments must be cleared now to prevent roof contaminants and stagnant ponding before torrential rains.',
      bannerTaglineHi: 'दुमका में कालवैशाखी की शुरुआती फुहारें शुरू होने वाली हैं। भारी मानसूनी बारिश से पहले छत की गंदगी हटाने व इनलेट की ढलान सुधारने का यह सबसे महत्वपूर्ण समय है।',
      telemetry: {
        avgRain: '45 mm',
        peakIntensity: 'Early Showers & High Dust',
        systemStatusEn: 'Intake Lip Lowering Needed',
        systemStatusHi: 'इनलेट पाइप की ऊंचाई सुधारना आवश्यक',
        actionLevelEn: 'High Priority (Pre-Season Check)',
        actionLevelHi: 'उच्च प्राथमिकता (मानसून पूर्व जांच)'
      },
      checklists: [
        {
          titleEn: '100 sq.m RCC Roof Cleaning',
          titleHi: '100 वर्ग मीटर छत की सफाई',
          descEn: 'Sweep away dried autumn foliage, fine silt, and animal waste from the concrete roof slab before first rain.',
          descHi: 'पहली बारिश से पूर्व कंक्रीट छत से सूखी पत्तियां, गाद और धूल-मिट्टी को पूरी तरह झाड़कर साफ करें।'
        },
        {
          titleEn: 'Intake Lip Height Adjustment',
          titleHi: 'इनलेट पाइप के मुहाने की लेवलिंग',
          descEn: 'Crucial: Verified baseline fact shows water ponds for 2 days because the inlet lip is raised. Level the drainage channel so water flows into downpipe.',
          descHi: 'सत्यापित तथ्य: इनलेट पाइप ऊंचा होने से छत पर 2 दिन पानी जमा रहता है। नाली के मुहाने को नीचे करें ताकि पानी सीधे पाइप में जाए।'
        },
        {
          titleEn: 'First-Flush Diverter Inspection',
          titleHi: 'फर्स्ट-फ्लश वाल्व की सफाई व जांच',
          descEn: 'Ensure the 20-minute sediment bypass valve is unblocked to divert initial dirty runoff away from the 500L storage tank.',
          descHi: 'प्रारंभिक 20 मिनट के गंदे पानी को बहाने वाले फर्स्ट-फ्लश वाल्व को साफ करें ताकि 500L टंकी में स्वच्छ पानी पहुंचे।'
        }
      ],
      ctaTextEn: 'View Prototype Inlet Solution',
      ctaTextHi: 'इनलेट समाधान प्रोटोटाइप देखें',
      ctaTarget: 'prototype'
    },
    'peak-monsoon': {
      id: 'peak-monsoon' as SeasonPhase,
      nameEn: 'Peak Monsoon Active Harvest',
      nameHi: 'सक्रिय मानसून वर्षा जल संचयन काल',
      monthsEn: 'June – September',
      monthsHi: 'जून – सितंबर',
      rainfallRange: '220 – 350 mm / month',
      rainfallAnnualShare: '~82% of annual rainfall (~1,050 mm)',
      statusEn: 'Maximum Inflow Catchment Mode Active',
      statusHi: 'अधिकतम वर्षा संचयन व प्रवाह सक्रिय',
      badgeColorNavy: 'bg-emerald-950/80 border-emerald-600/60 text-emerald-300',
      badgeColorFrost: 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold',
      accentBorderNavy: 'border-cyan-500/40 hover:border-cyan-400/60',
      accentBorderFrost: 'border-cyan-300 shadow-cyan-500/10',
      icon: CloudRain,
      iconColorNavy: 'text-cyan-400',
      iconColorFrost: 'text-cyan-700',
      bgGlowNavy: 'from-cyan-950/30 via-slate-900/90 to-emerald-950/20',
      bgGlowFrost: 'from-cyan-50/90 via-white to-emerald-50/70',
      bannerTaglineEn: 'Dumka receives ~1,050 mm of precipitation during these 4 months. Continuous harvesting is active: recharge groundwater pit and maintain overhead tank overflow balance.',
      bannerTaglineHi: 'इन 4 महीनों में दुमका में लगभग 1,050 मिमी वर्षा होती है। संचयन प्रणाली सक्रिय रखें: ग्राउंड रिचार्ज सोख्ता गड्ढे को भरें और ओवरहेड टंकी का संतुलन बनाए रखें।',
      telemetry: {
        avgRain: '285 mm',
        peakIntensity: 'Heavy Spells (Up to 80mm/day)',
        systemStatusEn: 'Harvest Potential: ~95,000 Litres',
        systemStatusHi: 'संचयन क्षमता: ~95,000 लीटर संचित हो सकता है',
        actionLevelEn: 'Active Monitoring & Filter Rinse',
        actionLevelHi: 'नियमित निगरानी व फिल्टर सफाई'
      },
      checklists: [
        {
          titleEn: 'Bi-Weekly Silt Mesh Inspection',
          titleHi: 'सप्ताह में दो बार फिल्टर जाली की सफाई',
          descEn: 'Check stainless steel downpipe filter mesh twice a week during torrential downpours to prevent leaf clogs.',
          descHi: 'भारी बारिश के दौरान सप्ताह में दो बार डाउनपाइप की स्टेनलेस स्टील जाली जांचें ताकि पत्तों से रुकावट न हो।'
        },
        {
          titleEn: 'Recharge Pit Infiltration Check',
          titleHi: 'ग्राउंड रिचार्ज पिट सोख्ते की निगरानी',
          descEn: 'Confirm water from the roof downpipe is draining smoothly into the gravel-sand percolation bed without surface pooling.',
          descHi: 'जांचें कि छत से आ रहा वर्षा जल बिना किसी रुकावट के बजरी-रेत के सोख्ते गड्ढे में समाकर भूजल स्तर बढ़ा रहा है।'
        },
        {
          titleEn: 'Overflow Diverter Operation',
          titleHi: 'ओवरफ्लो बायपास वाल्व की कार्यक्षमता',
          descEn: 'Verify the ~500L overhead tank overflow pipe routes excess harvest surplus safely into the kitchen garden / recharge bore.',
          descHi: 'जांचें कि 500L टंकी भरने के बाद अतिरिक्त पानी सुरक्षित रूप से पोषण वाटिका या रिचार्ज बोरवेल में जा रहा है।'
        }
      ],
      ctaTextEn: 'Calculate Active Harvest Volume',
      ctaTextHi: 'सक्रिय वर्षा संचयन क्षमता गणना करें',
      ctaTarget: 'calculator'
    },
    'post-monsoon': {
      id: 'post-monsoon' as SeasonPhase,
      nameEn: 'Post-Monsoon Maintenance & Conservation',
      nameHi: 'उत्तर-मानसून रखरखाव व जल संरक्षण चरण',
      monthsEn: 'October – February',
      monthsHi: 'अक्टूबर – फ़रवरी',
      rainfallRange: '5 – 20 mm / month',
      rainfallAnnualShare: '~10% of annual rainfall (Dry Period)',
      statusEn: 'Conservation & Storage Protection Mode',
      statusHi: 'जल संरक्षण व भंडारण सुरक्षा मोड',
      badgeColorNavy: 'bg-sky-950/80 border-sky-600/60 text-sky-300',
      badgeColorFrost: 'bg-sky-100 border-sky-300 text-sky-900 font-bold',
      accentBorderNavy: 'border-sky-500/40 hover:border-sky-400/60',
      accentBorderFrost: 'border-sky-300 shadow-sky-500/10',
      icon: ShieldCheck,
      iconColorNavy: 'text-sky-400',
      iconColorFrost: 'text-sky-700',
      bgGlowNavy: 'from-blue-950/30 via-slate-900/90 to-indigo-950/20',
      bgGlowFrost: 'from-sky-50/90 via-white to-blue-50/70',
      bannerTaglineEn: 'Dry season in Dumka: Groundwater table gradually recedes until summer. Priority shifts to zero tap leakage, sanitizing filtration chambers, and securing stored water.',
      bannerTaglineHi: 'दुमका में शुष्क शीत ऋतु: गर्मियों तक भूजल स्तर धीरे-धीरे नीचे जाता है। अब प्राथमिकता शून्य नल लीकेज, फिल्टर चैंबर की धुलाई और संचित जल के संरक्षण की है।',
      telemetry: {
        avgRain: '12 mm',
        peakIntensity: 'Occasional Dew & Dry Winds',
        systemStatusEn: 'Conservation & Tap Audits Active',
        systemStatusHi: 'जल संरक्षण व नल लीकेज जांच सक्रिय',
        actionLevelEn: 'Preventive Care & Silt Removal',
        actionLevelHi: 'निवारक देखरेख व गाद निष्कासन'
      },
      checklists: [
        {
          titleEn: 'Campus Tap Leak Remediation',
          titleHi: 'परिसर के 3-4 टपकते नलों की मरम्मत',
          descEn: 'Fix reported faulty taps (3-4 leaking taps waste ~180-240L daily). Every litre saved preserves the school’s single borewell.',
          descHi: 'रिपोर्ट किए गए 3-4 खराब नलों की तुरंत मरम्मत करें (रोजाना ~180-240 लीटर व्यर्थ बहता है)। एक-एक बूंद बचाना आवश्यक है।'
        },
        {
          titleEn: 'Filtration Media Desilting & Wash',
          titleHi: 'फिल्टर बजरी व रेत की धुलाई व सुखाई',
          descEn: 'Remove fine silt accumulated during the monsoon from sand and gravel filtration layers to keep media porous for next season.',
          descHi: 'मानसून के दौरान जमा हुई गाद को रेत व बजरी की परतों से धोकर साफ करें ताकि अगली बारिश में रुकावट न आए।'
        },
        {
          titleEn: 'Intake Winter Dust Cover',
          titleHi: 'शीतकालीन धूल से बचाव हेतु इनलेट सुरक्षा',
          descEn: 'Fasten protective breathable mesh covers over open roof drain channels to block dry winter dust storm debris from entering downpipes.',
          descHi: 'छत के ड्रेन इनलेट पर सुरक्षा जाली लगाएं ताकि सर्दियों की धूल व सूखे पत्ते डाउनपाइप में न भरें।'
        }
      ],
      ctaTextEn: 'Inspect Tap Audit & Leak Status',
      ctaTextHi: 'नल ऑडिट व लीकेज स्थिति देखें',
      ctaTarget: 'audit'
    }
  };

  const currentData = seasonData[selectedSeason];
  const IconComponent = currentData.icon;

  return (
    <div className={`mb-10 rounded-2xl border transition-all duration-300 overflow-hidden relative ${
      theme === 'frost' 
        ? `bg-gradient-to-r ${currentData.bgGlowFrost} ${currentData.accentBorderFrost} shadow-md` 
        : `bg-gradient-to-r ${currentData.bgGlowNavy} ${currentData.accentBorderNavy} shadow-xl backdrop-blur-md`
    }`}>
      {/* Top Banner Ribbon */}
      <div className={`px-5 py-3 border-b flex flex-wrap items-center justify-between gap-3 ${
        theme === 'frost'
          ? 'bg-white/80 border-sky-100'
          : 'bg-slate-950/60 border-slate-800/80'
      }`}>
        {/* Left: Seasonal State Badge & Location */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm border transition-colors">
            <span className={`w-2 h-2 rounded-full ${
              selectedSeason === 'pre-monsoon' ? 'bg-amber-500 animate-ping' :
              selectedSeason === 'peak-monsoon' ? 'bg-emerald-500 animate-pulse' :
              'bg-sky-500'
            }`} />
            <IconComponent className={`w-3.5 h-3.5 ${theme === 'frost' ? currentData.iconColorFrost : currentData.iconColorNavy}`} />
            <span className={theme === 'frost' ? 'text-slate-900 font-extrabold' : 'text-white'}>
              {language === 'hi' ? 'स्थानीय मौसमी जागरूकता' : 'Seasonal Awareness'}
            </span>
          </span>

          <span className={`text-xs flex items-center gap-1 font-medium ${
            theme === 'frost' ? 'text-slate-600' : 'text-slate-400'
          }`}>
            <Compass className="w-3.5 h-3.5 opacity-70" />
            <span>Dumka, Jharkhand (UPG M.S. Dudhani-1)</span>
          </span>

          {/* Current Date auto-detection marker */}
          <span className={`text-[11px] px-2 py-0.5 rounded border flex items-center gap-1 ${
            isAutoMode
              ? (theme === 'frost' ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold' : 'bg-emerald-950/70 border-emerald-700 text-emerald-300')
              : (theme === 'frost' ? 'bg-slate-100 border-slate-300 text-slate-700' : 'bg-slate-900 border-slate-700 text-slate-300')
          }`}>
            <Calendar className="w-3 h-3" />
            <span>
              {language === 'hi' ? `वर्तमान माह: ${currentMonthName}` : `Current Month: ${currentMonthName}`}
            </span>
            {isAutoMode && (
              <span className="text-[10px] uppercase font-bold tracking-wider ml-0.5 px-1 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                {language === 'hi' ? 'लाइव' : 'Live'}
              </span>
            )}
          </span>
        </div>

        {/* Right: Interactive Season Selector for Judges & Testing */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`text-[11px] font-semibold uppercase tracking-wider mr-1 ${
            theme === 'frost' ? 'text-slate-500' : 'text-slate-400'
          }`}>
            {language === 'hi' ? 'मौसम चुनें:' : 'Test Season:'}
          </span>

          <div className={`p-1 rounded-xl flex items-center gap-1 border ${
            theme === 'frost' ? 'bg-slate-100/90 border-slate-200' : 'bg-slate-900/90 border-slate-800'
          }`}>
            <button
              onClick={() => setSelectedSeason('pre-monsoon')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedSeason === 'pre-monsoon'
                  ? (theme === 'frost' 
                      ? 'bg-amber-500 text-white shadow-sm ring-1 ring-amber-600' 
                      : 'bg-amber-500 text-slate-950 font-bold shadow-md')
                  : (theme === 'frost'
                      ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/70'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800')
              }`}
              title="Pre-Monsoon Preparation (March to May)"
            >
              <Sun className="w-3 h-3 text-amber-300" />
              <span>{language === 'hi' ? 'पूर्व-मानसून' : 'Pre-Monsoon'}</span>
            </button>

            <button
              onClick={() => setSelectedSeason('peak-monsoon')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedSeason === 'peak-monsoon'
                  ? (theme === 'frost' 
                      ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-700' 
                      : 'bg-emerald-500 text-slate-950 font-bold shadow-md')
                  : (theme === 'frost'
                      ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/70'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800')
              }`}
              title="Peak Monsoon Active (June to September)"
            >
              <CloudRain className="w-3 h-3 text-cyan-300" />
              <span>{language === 'hi' ? 'सक्रिय मानसून' : 'Peak Monsoon'}</span>
            </button>

            <button
              onClick={() => setSelectedSeason('post-monsoon')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedSeason === 'post-monsoon'
                  ? (theme === 'frost' 
                      ? 'bg-sky-600 text-white shadow-sm ring-1 ring-sky-700' 
                      : 'bg-sky-500 text-slate-950 font-bold shadow-md')
                  : (theme === 'frost'
                      ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/70'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800')
              }`}
              title="Post-Monsoon Maintenance (October to February)"
            >
              <ShieldCheck className="w-3 h-3 text-sky-200" />
              <span>{language === 'hi' ? 'उत्तर-मानसून' : 'Post-Monsoon'}</span>
            </button>

            {!isAutoMode && (
              <button
                onClick={() => setSelectedSeason(autoSeason)}
                className={`p-1 rounded-lg text-xs ml-0.5 transition-colors ${
                  theme === 'frost'
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title={language === 'hi' ? 'वास्तविक माह पर रीसेट करें' : 'Reset to current month season'}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Banner Content Area */}
      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column (7 cols): Season Overview & Local Rainfall Context */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs px-2.5 py-0.5 rounded border uppercase tracking-wider font-extrabold ${
                theme === 'frost' ? currentData.badgeColorFrost : currentData.badgeColorNavy
              }`}>
                {language === 'hi' ? currentData.nameHi : currentData.nameEn}
              </span>
              <span className={`text-xs font-medium ${
                theme === 'frost' ? 'text-slate-600' : 'text-slate-400'
              }`}>
                ({language === 'hi' ? currentData.monthsHi : currentData.monthsEn})
              </span>
            </div>

            <h3 className={`text-xl sm:text-2xl font-black tracking-tight mb-2 ${
              theme === 'frost' ? 'text-slate-900' : 'text-white'
            }`}>
              {language === 'hi' ? currentData.statusHi : currentData.statusEn}
            </h3>

            <p className={`text-sm leading-relaxed mb-4 ${
              theme === 'frost' ? 'text-slate-700' : 'text-slate-300'
            }`}>
              {language === 'hi' ? currentData.bannerTaglineHi : currentData.bannerTaglineEn}
            </p>

            {/* Meteorological Telemetry Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <div className={`p-2.5 rounded-xl border ${
                theme === 'frost' ? 'bg-white/90 border-slate-200' : 'bg-slate-900/80 border-slate-800'
              }`}>
                <div className={`text-[10px] uppercase font-bold tracking-wider ${
                  theme === 'frost' ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {language === 'hi' ? 'स्थानीय वर्षा दर' : 'Dumka Rain Rate'}
                </div>
                <div className={`text-sm font-black mt-0.5 ${
                  theme === 'frost' ? 'text-sky-700' : 'text-cyan-400'
                }`}>
                  {currentData.rainfallRange}
                </div>
                <div className={`text-[10px] mt-0.5 truncate ${
                  theme === 'frost' ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {currentData.rainfallAnnualShare}
                </div>
              </div>

              <div className={`p-2.5 rounded-xl border ${
                theme === 'frost' ? 'bg-white/90 border-slate-200' : 'bg-slate-900/80 border-slate-800'
              }`}>
                <div className={`text-[10px] uppercase font-bold tracking-wider ${
                  theme === 'frost' ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {language === 'hi' ? 'वर्षा की तीव्रता' : 'Rainfall Pattern'}
                </div>
                <div className={`text-sm font-bold mt-0.5 truncate ${
                  theme === 'frost' ? 'text-slate-800' : 'text-slate-200'
                }`}>
                  {currentData.telemetry.peakIntensity}
                </div>
                <div className={`text-[10px] mt-0.5 ${
                  theme === 'frost' ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {language === 'hi' ? `औसत: ${currentData.telemetry.avgRain}/माह` : `Avg: ${currentData.telemetry.avgRain}/mo`}
                </div>
              </div>

              <div className={`col-span-2 sm:col-span-1 p-2.5 rounded-xl border ${
                theme === 'frost' ? 'bg-white/90 border-slate-200' : 'bg-slate-900/80 border-slate-800'
              }`}>
                <div className={`text-[10px] uppercase font-bold tracking-wider ${
                  theme === 'frost' ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {language === 'hi' ? 'प्राथमिकता स्तर' : 'Action Priority'}
                </div>
                <div className={`text-sm font-bold mt-0.5 truncate ${
                  selectedSeason === 'pre-monsoon'
                    ? (theme === 'frost' ? 'text-amber-800' : 'text-amber-400')
                    : selectedSeason === 'peak-monsoon'
                    ? (theme === 'frost' ? 'text-emerald-800' : 'text-emerald-400')
                    : (theme === 'frost' ? 'text-sky-800' : 'text-sky-400')
                }`}>
                  {language === 'hi' ? currentData.telemetry.actionLevelHi : currentData.telemetry.actionLevelEn}
                </div>
                <div className={`text-[10px] mt-0.5 truncate ${
                  theme === 'frost' ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {language === 'hi' ? currentData.telemetry.systemStatusHi : currentData.telemetry.systemStatusEn}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Action Checklist for UPG M.S. Dudhani-1 */}
          <div className="lg:col-span-5">
            <div className={`p-4 rounded-xl border ${
              theme === 'frost' ? 'bg-white/95 border-slate-200 shadow-sm' : 'bg-slate-950/70 border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                  theme === 'frost' ? 'text-slate-800' : 'text-slate-200'
                }`}>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${
                    selectedSeason === 'pre-monsoon' ? 'text-amber-500' :
                    selectedSeason === 'peak-monsoon' ? 'text-emerald-500' :
                    'text-sky-500'
                  }`} />
                  <span>{language === 'hi' ? 'परिसर कार्य योजना' : 'Seasonal Operational Checklist'}</span>
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                  theme === 'frost' ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-slate-400'
                }`}>
                  3 Steps
                </span>
              </div>

              {/* 3 Conditionally Rendered Checklist Items */}
              <div className="space-y-2.5">
                {currentData.checklists.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      theme === 'frost' 
                        ? 'bg-slate-50/80 border-slate-200 hover:bg-slate-100/80' 
                        : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 ${
                        selectedSeason === 'pre-monsoon'
                          ? (theme === 'frost' ? 'bg-amber-100 text-amber-800' : 'bg-amber-950 text-amber-300 border border-amber-800')
                          : selectedSeason === 'peak-monsoon'
                          ? (theme === 'frost' ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800')
                          : (theme === 'frost' ? 'bg-sky-100 text-sky-800' : 'bg-sky-950 text-sky-300 border border-sky-800')
                      }`}>
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <div className={`text-xs font-bold leading-snug ${
                          theme === 'frost' ? 'text-slate-900' : 'text-slate-200'
                        }`}>
                          {language === 'hi' ? item.titleHi : item.titleEn}
                        </div>
                        <div className={`text-[11px] leading-relaxed mt-0.5 ${
                          theme === 'frost' ? 'text-slate-600' : 'text-slate-400'
                        }`}>
                          {language === 'hi' ? item.descHi : item.descEn}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive CTA Link */}
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <span className={`text-[11px] ${
                  theme === 'frost' ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {selectedSeason === 'pre-monsoon' && (language === 'hi' ? 'समस्या: इनलेट में पानी 0 L प्रवेश' : 'Verified: 0 L harvest entering inlet')}
                  {selectedSeason === 'peak-monsoon' && (language === 'hi' ? 'अवसर: 95,000 L संचयन क्षमता' : 'Active: 95,000 L potential harvest')}
                  {selectedSeason === 'post-monsoon' && (language === 'hi' ? 'संरक्षण: 3-4 खराब नल ठीक करें' : 'Target: Fix 3-4 leaky taps')}
                </span>

                <button
                  onClick={() => setActiveSection(currentData.ctaTarget)}
                  className={`inline-flex items-center gap-1 text-xs font-bold transition-all px-2.5 py-1 rounded-md ${
                    selectedSeason === 'pre-monsoon'
                      ? (theme === 'frost' 
                          ? 'bg-amber-100 text-amber-900 hover:bg-amber-200' 
                          : 'bg-amber-950/70 text-amber-300 hover:bg-amber-900/80 border border-amber-800')
                      : selectedSeason === 'peak-monsoon'
                      ? (theme === 'frost' 
                          ? 'bg-cyan-100 text-cyan-900 hover:bg-cyan-200' 
                          : 'bg-cyan-950/70 text-cyan-300 hover:bg-cyan-900/80 border border-cyan-800')
                      : (theme === 'frost' 
                          ? 'bg-sky-100 text-sky-900 hover:bg-sky-200' 
                          : 'bg-sky-950/70 text-sky-300 hover:bg-sky-900/80 border border-sky-800')
                  }`}
                >
                  <span>{language === 'hi' ? currentData.ctaTextHi : currentData.ctaTextEn}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
