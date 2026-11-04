import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Laptop, 
  Play, 
  Square, 
  Sliders, 
  Droplet, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Zap, 
  Waves, 
  Sparkles, 
  Activity, 
  Layers, 
  Compass,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Database
} from 'lucide-react';

export const InteractivePrototype: React.FC = () => {
  const { language, theme, t, taps, updateTap, showToast } = useApp();

  const [activeTab, setActiveTab] = useState<'rain' | 'taps' | 'hydrology' | 'outage' | 'rules'>('rain');

  // Simulator 1: Rainwater & Roof Ponding
  const [isRaining, setIsRaining] = useState<boolean>(true);
  const [elevationDiffMm, setElevationDiffMm] = useState<number>(35); // inlet lip is 35mm higher than depression
  const [isChannelSimulated, setIsChannelSimulated] = useState<boolean>(false);

  // Simulator 2: Tap Lab
  const [selectedTapIndex, setSelectedTapIndex] = useState<number>(2); // Tap 03 (leaking)
  const [simulatedMinutes, setSimulatedMinutes] = useState<number>(60);

  // Simulator 3: Hydrology Modeler
  const [simRoofArea, setSimRoofArea] = useState<number>(250);
  const [simRainfall, setSimRainfall] = useState<number>(1200);
  const [simRunoff, setSimRunoff] = useState<number>(0.80);
  const [simEfficiency, setSimEfficiency] = useState<number>(0.85);

  // Simulator 4: Grid Outage
  const [gridPowerOn, setGridPowerOn] = useState<boolean>(true);
  const [handpumpMugCount, setHandpumpMugCount] = useState<number>(0);

  // Simulator 5: Rule Engine Trigger
  const [injectedScenario, setInjectedScenario] = useState<string>('none');

  // Calculations for Simulator 3
  const calculatedLitres = Math.round(simRoofArea * simRainfall * simRunoff * simEfficiency);
  const fills500LTank = Math.round(calculatedLitres / 500);

  // Calculations for Simulator 2 (approx drip estimate for educational simulation only)
  const currentTap = taps[selectedTapIndex] || taps[0];
  const estDripRateLitresPerHour = currentTap.condition === 'leaking' ? 3.5 : currentTap.condition === 'not_closing' ? 8.0 : currentTap.condition === 'damaged' ? 12.0 : 0;
  const simulatedLostLitres = ((estDripRateLitresPerHour * simulatedMinutes) / 60).toFixed(1);

  const handleToggleCurrentTapCondition = () => {
    const nextCond = currentTap.condition === 'working' ? 'leaking' : currentTap.condition === 'leaking' ? 'repaired' : 'working';
    const updated = {
      ...currentTap,
      condition: nextCond as any,
      lastInspected: new Date().toISOString().split('T')[0],
      notes: nextCond === 'repaired' ? 'Repaired via Interactive Lab' : currentTap.notes,
      notesHi: nextCond === 'repaired' ? 'इंटरैक्टिव लैब द्वारा मरम्मत की गई' : currentTap.notesHi
    };
    updateTap(updated);
  };

  return (
    <section id="prototype" className="py-20 bg-gradient-to-b from-slate-950 via-[#071026] to-slate-950 border-b border-cyan-900/40 relative overflow-hidden">
      {/* Aqua Ambient Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-xs font-bold text-cyan-300 mb-3 shadow-lg shadow-cyan-500/10">
            <Laptop className="w-4 h-4 text-cyan-400" />
            <span>{t.protoBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className={theme === 'frost'
              ? "text-slate-950 font-black drop-shadow-sm"
              : "bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent font-black"
            }>
              {t.protoTitle}
            </span>
          </h2>

          <p className={`text-sm sm:text-base mt-3 leading-relaxed font-medium ${
            theme === 'frost' ? 'text-slate-700' : 'text-slate-300'
          }`}>
            {t.protoSubtitle}
          </p>
        </div>

        {/* Unified Interactive Prototype Control Center */}
        <div className="rounded-3xl navy-card p-6 sm:p-8 shadow-2xl border border-cyan-800/60">
          
          {/* Module Selector Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800 mb-8 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('rain')}
              className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'rain'
                  ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Droplet className="w-4 h-4 text-cyan-300" />
              <span>{t.protoTabRain}</span>
            </button>

            <button
              onClick={() => setActiveTab('taps')}
              className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'taps'
                  ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Wrench className="w-4 h-4 text-amber-300" />
              <span>{t.protoTabTaps}</span>
            </button>

            <button
              onClick={() => setActiveTab('hydrology')}
              className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'hydrology'
                  ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Sliders className="w-4 h-4 text-teal-300" />
              <span>{t.protoTabHydrology}</span>
            </button>

            <button
              onClick={() => setActiveTab('outage')}
              className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'outage'
                  ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{t.protoTabOutage}</span>
            </button>

            <button
              onClick={() => setActiveTab('rules')}
              className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'rules'
                  ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Activity className="w-4 h-4 text-rose-300" />
              <span>{t.protoTabRuleTester}</span>
            </button>
          </div>

          {/* TAB 1: RAINWATER FAILURE SIMULATOR */}
          {activeTab === 'rain' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Controls bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsRaining(!isRaining)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                      isRaining
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {isRaining ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isRaining ? t.protoStopSim : t.protoLaunchSim}</span>
                  </button>

                  <button
                    onClick={() => setIsChannelSimulated(!isChannelSimulated)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                      isChannelSimulated
                        ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                        : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.protoSimulateFix}</span>
                  </button>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <span>{t.protoSimStatus}</span>
                  <span className={`font-bold ${isRaining ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {isRaining ? (language === 'hi' ? 'वर्षा सक्रिय' : 'Simulating Rainfall') : (language === 'hi' ? 'वर्षा रुकी हुई' : 'Rain Inactive')}
                  </span>
                </div>
              </div>

              {/* Graphic Interactive Cross-Section of School Roof & Inlet */}
              <div data-keep-dark="true" className="hydraulic-simulation-canvas relative rounded-2xl bg-gradient-to-b from-[#081226] to-[#040814] border border-cyan-800/60 p-6 sm:p-10 overflow-hidden shadow-inner min-h-[360px] flex flex-col justify-between">
                
                {/* Raindrops Animation */}
                {isRaining && (
                  <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
                    <div className="w-full h-full flex justify-around">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-0.5 h-6 bg-gradient-to-b from-transparent to-cyan-400 rounded-full animate-bounce"
                          style={{
                            animationDuration: `${0.8 + (i % 5) * 0.2}s`,
                            animationDelay: `${(i % 4) * 0.15}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Status Callout Banner */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2">
                    {isChannelSimulated ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 animate-pulse" />
                    )}
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {isChannelSimulated ? t.protoProposedFix : t.protoCurrentFailure}
                    </span>
                  </div>

                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded ${
                    isChannelSimulated
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                      : 'bg-red-950 text-red-300 border border-red-700'
                  }`}>
                    {isChannelSimulated ? (language === 'hi' ? 'प्रवाह स्थापित' : 'FLOW ESTABLISHED') : (language === 'hi' ? 'शून्य इनलेट प्रवाह' : '0 L ENTRY')}
                  </span>
                </div>

                {/* Visual Roof Cross Section */}
                <div className="relative z-10 my-8">
                  <div className="relative h-44 w-full rounded-2xl bg-slate-900/90 border border-slate-800 flex items-end p-4 overflow-hidden">
                    
                    {/* Roof Slab */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-r from-slate-800 to-slate-700 border-t-2 border-slate-600 flex items-center px-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                        {language === 'hi' ? 'आरसीसी विद्यालय छत' : 'RCC School Roof Slab'}
                      </span>
                    </div>

                    {/* Left Depression where water ponds for 2 days */}
                    <div className="absolute bottom-10 left-6 sm:left-12 w-48 sm:w-64 h-16 rounded-b-xl border-b-2 border-slate-600 bg-slate-950/60 p-2 flex flex-col justify-end">
                      {isRaining && (
                        <div className="w-full h-10 rounded-b-lg bg-gradient-to-t from-cyan-600/60 to-cyan-400/40 border-t border-cyan-300 animate-pulse flex items-center justify-center">
                          <span className="text-[10px] font-bold text-cyan-100">
                            {language === 'hi' ? 'जल जमाव (~2 दिन ठहराव)' : 'Ponding Water (~2 Days)'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Connecting Channel (shown if simulated fix is enabled) */}
                    {isChannelSimulated && isRaining && (
                      <div className="absolute bottom-10 left-52 sm:left-72 right-20 sm:right-32 h-6 bg-gradient-to-r from-cyan-500/70 via-sky-400 to-emerald-400/80 border-t-2 border-emerald-400 animate-pulse flex items-center justify-center">
                        <span className="text-[9px] font-bold text-slate-950 px-1">
                          {language === 'hi' ? 'गाइड नाली प्रवाह →' : 'Regraded Channel Flow →'}
                        </span>
                      </div>
                    )}

                    {/* Raised Pipe Inlet Collar (At Corner) */}
                    <div className="absolute bottom-10 right-6 sm:right-16 w-16 sm:w-20 flex flex-col items-center">
                      <div className="w-12 h-8 rounded-t-lg bg-slate-800 border-2 border-slate-600 flex items-center justify-center">
                        <span className="text-[9px] font-bold text-cyan-300">INLET</span>
                      </div>
                      {/* Downpipe going down */}
                      <div className={`w-6 h-14 ${isChannelSimulated && isRaining ? 'bg-cyan-500 animate-pulse' : 'bg-slate-800 border-x border-slate-700'}`} />
                    </div>

                    {/* Elevation marker when fix is not enabled */}
                    {!isChannelSimulated && (
                      <div className="inlet-lip-elevation-badge absolute top-8 right-24 sm:right-36 p-2 rounded-lg bg-red-950/90 border border-red-700 text-[10px] text-red-200 shadow-lg">
                        <span className="font-bold block text-red-300 inlet-lip-title">
                          {language === 'hi' ? 'मुहाना ऊँचा है (+35mm)' : 'Inlet Lip is Elevated'}
                        </span>
                        <span className="inlet-lip-desc">{language === 'hi' ? 'पानी इनलेट तक नहीं पहुँचता' : 'Water pools away from intake'}</span>
                      </div>
                    )}

                  </div>
                </div>

                {/* Diagnostic Feedback */}
                <div className="relative z-10 text-xs text-slate-300 p-4 rounded-xl bg-slate-950/80 border border-slate-800 leading-relaxed">
                  <span className="font-bold text-cyan-300">
                    {language === 'hi' ? 'तकनीकी अवलोकन विश्लेषण:' : 'Technical Finding Interpretation:'}
                  </span>{' '}
                  {isChannelSimulated
                    ? (language === 'hi' 
                        ? 'प्रस्तावित सिविल कार्य (छत के ढलान का सुधार या मोर्टार गाइड नाली) पानी को इनलेट में मोड़कर प्रतिवर्ष हजारों लीटर वर्षा जल को संचित कर सकता है।'
                        : 'Simulating the proposed civil regrading proves that a low-cost mortar drainage guide could funnel trapped ponded rainwater straight into the collection inlet.')
                    : (language === 'hi'
                        ? 'सत्यापित आधारभूत तथ्य: विद्यालय में वर्तमान में वर्षा जल संचयन शून्य (0) है क्योंकि पानी छत के ढलान और इनलेट मुहाने के अंतर के कारण पाइप में पहुँच ही नहीं पाता।'
                        : 'Verified Baseline Fact: Current harvest is 0 Litres because water ponds in depressions and fails to reach the corner inlet elevation.')}
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: TAP AUDIT & LEAKAGE LAB */}
          {activeTab === 'taps' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* 10 Taps Grid Selector */}
                <div className="lg:col-span-7 bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                      {language === 'hi' ? 'विद्यालय के 10 नल (क्लिक कर स्थिति बदलें)' : 'Campus Tap Selector (Click to Inspect)'}
                    </span>
                    <span className="text-xs text-slate-400">
                      {taps.length} {language === 'hi' ? 'नल' : 'Taps'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {taps.map((tItem, idx) => {
                      const isSelected = idx === selectedTapIndex;
                      const isFaulty = tItem.condition === 'leaking' || tItem.condition === 'not_closing' || tItem.condition === 'damaged';

                      return (
                        <button
                          key={tItem.id}
                          onClick={() => setSelectedTapIndex(idx)}
                          className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${
                            isSelected
                              ? 'bg-cyan-950 border-cyan-400 ring-2 ring-cyan-500/40 shadow-lg'
                              : isFaulty
                              ? 'bg-amber-950/30 border-amber-800/80 hover:bg-amber-950/50'
                              : tItem.condition === 'repaired'
                              ? 'bg-teal-950/30 border-teal-800/80'
                              : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <span className="text-xs font-black text-white">{tItem.id}</span>
                          <span className="text-[10px] text-slate-400 truncate w-full mt-1">
                            {language === 'hi' ? tItem.nameHi.split('-')[1] : tItem.location}
                          </span>
                          <span className={`text-[9px] font-bold uppercase mt-2 px-1.5 py-0.5 rounded ${
                            isFaulty ? 'bg-amber-950 text-amber-300' : 'bg-emerald-950 text-emerald-300'
                          }`}>
                            {tItem.condition}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Tap Details & Interactive Drip Simulator */}
                <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider">{currentTap.id}</span>
                      <h3 className="text-base font-bold text-white">
                        {language === 'hi' ? currentTap.nameHi : currentTap.name}
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-amber-400 capitalize">
                      {currentTap.condition.replace('_', ' ')}
                    </span>
                  </div>

                  {/* Tap Drip Graphic */}
                  <div className="h-32 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 flex items-center justify-center mx-auto mb-2">
                        <Droplet className={`w-6 h-6 ${currentTap.condition === 'working' ? 'text-slate-600' : 'text-cyan-400 water-drip-anim'}`} />
                      </div>
                      <span className="text-xs font-semibold text-slate-300">
                        {currentTap.condition === 'working' || currentTap.condition === 'repaired'
                          ? (language === 'hi' ? 'नल सुरक्षित: शून्य रिसाव' : 'Sealed: No Dripping')
                          : (language === 'hi' ? `सक्रिय रिसाव दर: ~${estDripRateLitresPerHour} L/घंटा` : `Simulated Flow: ~${estDripRateLitresPerHour} L/hr`)}
                      </span>
                    </div>
                  </div>

                  {/* Slider to simulate elapsed time */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>{language === 'hi' ? 'सिम्युलेटेड समय:' : 'Simulated Time:'}</span>
                      <span className="font-bold text-cyan-300">{simulatedMinutes} {language === 'hi' ? 'मिनट' : 'mins'}</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="720"
                      step="15"
                      value={simulatedMinutes}
                      onChange={(e) => setSimulatedMinutes(parseInt(e.target.value))}
                      className="w-full accent-cyan-400"
                    />
                  </div>

                  {/* Water loss simulation card */}
                  <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-800/60 text-xs text-amber-200 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-amber-400 font-bold uppercase">{language === 'hi' ? 'अनुमानित जल हानि' : 'Estimated Water Loss'}</span>
                      <span className="text-xl font-black text-amber-300">{simulatedLostLitres} L</span>
                    </div>
                    <button
                      onClick={handleToggleCurrentTapCondition}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md"
                    >
                      {currentTap.condition === 'working'
                        ? (language === 'hi' ? 'रिसाव सिमुलेट करें' : 'Trigger Leak')
                        : (language === 'hi' ? 'मरम्मत करें' : 'Repair Tap')}
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 3: HYDROLOGY & TANK MODELER */}
          {activeTab === 'hydrology' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Sliders */}
                <div className="lg:col-span-7 bg-slate-950/70 border border-slate-800 rounded-2xl p-6 space-y-5">
                  <h3 className="text-base font-bold text-white mb-2">
                    {language === 'hi' ? 'हाइड्रोलॉजिकल मॉडलर इनपुट' : 'Hydrological Parameter Controls'}
                  </h3>

                  {/* Roof Area Slider */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                      <span>{t.calcRoofArea}</span>
                      <span className="font-bold text-cyan-400">{simRoofArea} m²</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="1000"
                      step="10"
                      value={simRoofArea}
                      onChange={(e) => setSimRoofArea(parseInt(e.target.value))}
                      className="w-full accent-cyan-400"
                    />
                  </div>

                  {/* Rainfall Slider */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                      <span>{t.calcRainfall}</span>
                      <span className="font-bold text-cyan-400">{simRainfall} mm</span>
                    </div>
                    <input
                      type="range"
                      min="300"
                      max="2500"
                      step="50"
                      value={simRainfall}
                      onChange={(e) => setSimRainfall(parseInt(e.target.value))}
                      className="w-full accent-cyan-400"
                    />
                  </div>

                  {/* Runoff & Efficiency */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <span className="block text-[11px] text-slate-400 mb-1">Runoff Coeff. (RCC)</span>
                      <select
                        value={simRunoff}
                        onChange={(e) => setSimRunoff(parseFloat(e.target.value))}
                        className="w-full p-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                      >
                        <option value={0.75}>0.75 (Porous RCC)</option>
                        <option value={0.80}>0.80 (Standard RCC)</option>
                        <option value={0.85}>0.85 (Smooth Smooth)</option>
                      </select>
                    </div>

                    <div>
                      <span className="block text-[11px] text-slate-400 mb-1">Filter Efficiency</span>
                      <select
                        value={simEfficiency}
                        onChange={(e) => setSimEfficiency(parseFloat(e.target.value))}
                        className="w-full p-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                      >
                        <option value={0.80}>0.80 (80%)</option>
                        <option value={0.85}>0.85 (85%)</option>
                        <option value={0.90}>0.90 (90%)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Animated Tank Filling Visualizer */}
                <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                    {language === 'hi' ? 'सैद्धांतिक वार्षिक संचयन क्षमता' : 'Simulated Annual Rain Yield'}
                  </span>

                  <div className="text-4xl sm:text-5xl font-black text-cyan-300">
                    {calculatedLitres.toLocaleString()} L
                  </div>

                  {/* Animated Tank Graphic */}
                  <div className="w-32 h-44 rounded-2xl border-4 border-cyan-800 mx-auto relative overflow-hidden bg-slate-900 flex flex-col justify-end">
                    <div
                      className="w-full bg-gradient-to-t from-cyan-600 via-sky-500 to-teal-400 transition-all duration-500 ease-out flex items-center justify-center"
                      style={{ height: '75%' }}
                    >
                      <span className="text-[10px] font-black text-slate-950">
                        {fills500LTank}x Tanks
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'hi'
                      ? `यह संचयन विद्यालय की 500 लीटर की टंकी को वर्ष में लगभग ${fills500LTank} बार भर सकता है!`
                      : `This volume is sufficient to replenish the school's 500L overhead tank ${fills500LTank} times every year!`}
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* TAB 4: POWER OUTAGE & HANDPUMP */}
          {activeTab === 'outage' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-300">
                    {language === 'hi' ? 'बिजली ग्रिड स्थिति:' : 'Grid Electricity State:'}
                  </span>
                  <button
                    onClick={() => setGridPowerOn(!gridPowerOn)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                      gridPowerOn
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                        : 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>{gridPowerOn ? (language === 'hi' ? 'बिजली उपलब्ध (Power ON)' : 'Grid Active (ON)') : (language === 'hi' ? 'बिजली कटौती (Power OUTAGE)' : 'Summer Blackout (OFF)')}</span>
                  </button>
                </div>

                <div className="text-xs text-slate-400">
                  {gridPowerOn 
                    ? (language === 'hi' ? 'सबमर्सिबल पंप चालू हो सकता है' : 'Borewell submersible pump energized')
                    : (language === 'hi' ? 'पंप बंद - चापाकल का सहारा' : 'Borewell pump halted - relying on handpump')}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Borewell status */}
                <div className={`p-6 rounded-2xl border transition-all ${
                  gridPowerOn
                    ? 'bg-cyan-950/30 border-cyan-700/80'
                    : 'bg-slate-950/60 border-slate-800 opacity-60'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      {language === 'hi' ? 'मुख्य बोरवेल प्रणाली' : 'Primary Deep Borewell'}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${gridPowerOn ? 'bg-emerald-950 text-emerald-300' : 'bg-slate-800 text-slate-400'}`}>
                      {gridPowerOn ? 'OPERATIONAL' : 'STOPPED'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {language === 'hi'
                      ? 'गहरा बोरवेल सबमर्सिबल पंप द्वारा 500 लीटर की टंकी भरता है। बिजली जाने पर यह पूर्णतः निष्क्रिय हो जाता है।'
                      : 'Supplies good water yield to the 500L overhead tank when power is available. Stops during summer blackouts.'}
                  </p>
                </div>

                {/* Handpump Backup */}
                <div className={`p-6 rounded-2xl border transition-all ${
                  !gridPowerOn
                    ? 'bg-amber-950/40 border-amber-600/80 shadow-lg shadow-amber-950/20'
                    : 'bg-slate-950/60 border-slate-800'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      {language === 'hi' ? 'समीपवर्ती चापाकल (<50m)' : 'Nearby Handpump Backup (<50m)'}
                    </span>
                    <span className="text-[10px] font-bold bg-amber-950 text-amber-300 px-2 py-0.5 rounded">
                      MANUAL BACKUP
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {language === 'hi'
                      ? 'कम पानी का प्रवाह; पानी का दृश्य रंग हल्का लोहे जैसा दिखता है (प्रयोगशाला में रासायनिक जाँच अभी नहीं हुई है)।'
                      : 'Low water yield; observationally iron-tinted; unverified chemically in certified lab.'}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                    <span className="text-slate-400">{language === 'hi' ? 'सिम्युलेटेड उपयोग:' : 'Pumps actuated:'}</span>
                    <button
                      onClick={() => setHandpumpMugCount((prev) => prev + 1)}
                      className="px-3 py-1 rounded-lg bg-amber-900/60 hover:bg-amber-800 text-amber-200 font-bold transition-all"
                    >
                      {language === 'hi' ? `हैंडल दबाएं (${handpumpMugCount})` : `Pump Handpump (${handpumpMugCount})`}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 5: LIVE AI RULE TRIGGER TESTER */}
          {activeTab === 'rules' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-2">
                  {language === 'hi' ? 'सिम्युलेटेड परिदृश्य इंजेक्टर (Scenario Injector):' : 'Select Simulated Campus Incident to Inject:'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    onClick={() => {
                      setInjectedScenario('overflow');
                      showToast(language === 'hi' ? 'टंकी ओवरफ्लो परिदृश्य इंजेक्ट किया गया' : 'Injected Tank Overflow Scenario');
                    }}
                    className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                      injectedScenario === 'overflow'
                        ? 'bg-rose-950 border-rose-500 text-rose-200'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    1. Tank Overflow into Drain
                  </button>

                  <button
                    onClick={() => {
                      setInjectedScenario('leaks');
                      showToast(language === 'hi' ? 'बहु-नल रिसाव परिदृश्य इंजेक्ट किया गया' : 'Injected Multi-Tap Leak Scenario');
                    }}
                    className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                      injectedScenario === 'leaks'
                        ? 'bg-amber-950 border-amber-500 text-amber-200'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    2. 5 Leaking Taps Flagged
                  </button>

                  <button
                    onClick={() => {
                      setInjectedScenario('powercut');
                      showToast(language === 'hi' ? 'ग्रीष्मकालीन विद्युत संकट इंजेक्ट किया गया' : 'Injected Summer Outage Scenario');
                    }}
                    className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                      injectedScenario === 'powercut'
                        ? 'bg-sky-950 border-sky-500 text-sky-200'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    3. 6-Hour Summer Blackout
                  </button>
                </div>
              </div>

              {/* Dynamic Rule Fired Display */}
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-800/80 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-bold text-white">
                      {language === 'hi' ? 'AI जल सलाहकार: नियम प्रतिक्रिया' : 'AI Jal Advisor Deterministic Response'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-cyan-400">
                    {language === 'hi' ? 'सत्यापित नियम सक्रिय' : 'Rule Fired'}
                  </span>
                </div>

                {injectedScenario === 'overflow' && (
                  <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800 text-xs text-rose-200 space-y-1.5 animate-in slide-in-from-top-2">
                    <div className="font-bold text-rose-300 text-sm">
                      {language === 'hi' ? 'अलार्म नियम: मोटर टाइमर एवं फ्लोट वाल्व अनुसंशा' : 'CRITICAL OVERFLOW RULE FIRED'}
                    </div>
                    <p>
                      <strong>Action:</strong> Install mechanical float valve on 500L tank. Assign designated staff with an 18-minute countdown timer.
                    </p>
                    <p>
                      <strong>Benefit:</strong> Prevents 100+ litres of water waste per cycle and saves electricity.
                    </p>
                  </div>
                )}

                {injectedScenario === 'leaks' && (
                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800 text-xs text-amber-200 space-y-1.5 animate-in slide-in-from-top-2">
                    <div className="font-bold text-amber-300 text-sm">
                      {language === 'hi' ? 'रिसाव नियम: एकमुश्त प्लंबर सर्विसिंग' : 'MULTI-TAP LEAK RULE FIRED'}
                    </div>
                    <p>
                      <strong>Action:</strong> Mobilize local plumber through School Management Committee (SMC) to replace worn washers on all flagged taps in one visit.
                    </p>
                    <p>
                      <strong>Benefit:</strong> Halts cumulative clean potable water waste immediately.
                    </p>
                  </div>
                )}

                {injectedScenario === 'powercut' && (
                  <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-800 text-xs text-sky-200 space-y-1.5 animate-in slide-in-from-top-2">
                    <div className="font-bold text-sky-300 text-sm">
                      {language === 'hi' ? 'बिजली कटौती नियम: जल राशनिंग एवं चापाकल योजना' : 'POWER OUTAGE RULE FIRED'}
                    </div>
                    <p>
                      <strong>Action:</strong> Prioritize stored 500L tank water for Mid-Day Meal cooking and sanitation; dispatch older student Green Squad to supervise handpump collection.
                    </p>
                    <p>
                      <strong>Benefit:</strong> Maintains school meal continuity and hygienic conditions during summer.
                    </p>
                  </div>
                )}

                {injectedScenario === 'none' && (
                  <p className="text-xs text-slate-400 italic">
                    {language === 'hi' ? 'ऊपर दिए गए परिदृश्यों में से किसी एक पर क्लिक कर वास्तविक समय AI नियम देखें।' : 'Select an incident scenario above to see the transparent rule engine synthesize immediate advice.'}
                  </p>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
