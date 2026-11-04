import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calculator, 
  RotateCcw, 
  Sparkles, 
  Info, 
  Droplet, 
  AlertTriangle,
  ArrowRight,
  Sliders,
  HelpCircle
} from 'lucide-react';

export const RainwaterCalculator: React.FC = () => {
  const { language, t } = useApp();

  // Inputs start blank or undefined to honor strict scientific accuracy
  const [roofArea, setRoofArea] = useState<string>('');
  const [rainfall, setRainfall] = useState<string>('');
  const [runoffCoeff, setRunoffCoeff] = useState<string>('0.80'); // RCC standard
  const [efficiency, setEfficiency] = useState<string>('0.85'); // standard filter efficiency
  
  const [isDemoMode, setIsDemoMode] = useState<boolean>(false);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const area = parseFloat(roofArea);
    const rain = parseFloat(rainfall);
    const runoff = parseFloat(runoffCoeff);
    const eff = parseFloat(efficiency);

    if (isNaN(area) || isNaN(rain) || isNaN(runoff) || isNaN(eff) || area <= 0 || rain <= 0) {
      setResult(null);
      return;
    }

    // Formula: Litres = Area (m2) * Rain (mm) * Runoff * Efficiency
    // 1 mm * 1 m2 = 1 L
    const potentialLitres = area * rain * runoff * eff;
    setResult(Math.round(potentialLitres));
  };

  const handleLoadSample = () => {
    setRoofArea('250'); // Sample demonstration: 250 m² hypothetical school block
    setRainfall('1200'); // Sample demonstration: ~1200 mm average annual Jharkhand rainfall
    setRunoffCoeff('0.80');
    setEfficiency('0.85');
    setIsDemoMode(true);
    const demoLitres = 250 * 1200 * 0.80 * 0.85;
    setResult(Math.round(demoLitres)); // 204,000 Litres!
  };

  const handleReset = () => {
    setRoofArea('');
    setRainfall('');
    setRunoffCoeff('0.80');
    setEfficiency('0.85');
    setIsDemoMode(false);
    setResult(null);
  };

  return (
    <section id="calculator" className="py-16 bg-slate-950/70 border-b border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'वैज्ञानिक जल विज्ञान गणना' : 'Hydrological Simulation'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.calcTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {t.calcSubtitle}
          </p>
        </div>

        {/* Ethical Transparency Banner */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-cyan-300">
              {language === 'hi' ? 'वैज्ञानिक ईमानदारी प्रकटीकरण:' : 'Scientific Honesty Disclosure:'}
            </span>{' '}
            {language === 'hi'
              ? 'उत्क्रमित मध्य विद्यालय दुधानी-1 की छत का वास्तविक क्षेत्रफल तथा स्थानीय वर्षा का मापन अभी नहीं हुआ है। इसलिए इनपुट बॉक्स रिक्त रखे गए हैं। आप नीचे "नमूना प्रदर्शन आँकड़े" लोड कर सकते हैं।'
              : 'The actual roof area and on-campus rainfall at UPG M.S. DUDHANI-1 are currently UNMEASURED. Therefore, input fields begin blank. You may enter custom parameters or click "Load Sample Demonstration Data".'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Inputs */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-base font-bold text-white">
                  {language === 'hi' ? 'गणना इनपुट चर (Variables)' : 'Formula Variables'}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.calcFormulaLabel} <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded">Volume (L) = A × P × Cr × η</code>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleLoadSample}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 flex items-center gap-1.5 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{language === 'hi' ? 'नमूना लोड करें' : 'Load Demo'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  title="Reset form"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            <form onSubmit={handleCalculate} className="space-y-5">
              
              {/* Roof Area */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-200">
                    {t.calcRoofArea}
                  </label>
                  <span className="text-[10px] text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                    {t.labelNotMeasured}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    step="1"
                    min="1"
                    max="5000"
                    placeholder={language === 'hi' ? 'उदा. 250 वर्ग मीटर' : 'e.g. 250'}
                    value={roofArea}
                    onChange={(e) => {
                      setRoofArea(e.target.value);
                      setIsDemoMode(false);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium text-sm focus:border-cyan-500 focus:outline-none"
                    required
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">
                    m²
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {t.calcRoofAreaHelp}
                </p>
              </div>

              {/* Rainfall */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-200">
                    {t.calcRainfall}
                  </label>
                  <span className="text-[10px] text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                    {t.labelNotMeasured}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    step="1"
                    min="1"
                    max="10000"
                    placeholder={language === 'hi' ? 'उदा. 1200 मिमी' : 'e.g. 1200'}
                    value={rainfall}
                    onChange={(e) => {
                      setRainfall(e.target.value);
                      setIsDemoMode(false);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium text-sm focus:border-cyan-500 focus:outline-none"
                    required
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">
                    mm
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {t.calcRainfallHelp}
                </p>
              </div>

              {/* Coefficients Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">
                    {t.calcRunoffCoeff} (0.70 – 0.90)
                  </label>
                  <input
                    type="number"
                    step="0.05"
                    min="0.5"
                    max="1.0"
                    value={runoffCoeff}
                    onChange={(e) => setRunoffCoeff(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-500 focus:outline-none"
                    required
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    {t.calcRunoffHelp}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">
                    {t.calcEfficiency} (0.75 – 0.95)
                  </label>
                  <input
                    type="number"
                    step="0.05"
                    min="0.5"
                    max="1.0"
                    value={efficiency}
                    onChange={(e) => setEfficiency(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:border-cyan-500 focus:outline-none"
                    required
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    {t.calcEfficiencyHelp}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <Calculator className="w-4 h-4" />
                  <span>{t.calcButton}</span>
                </button>
              </div>

            </form>

          </div>

          {/* Right Column: Dynamic Results & Contrast with Reality */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Calculation Result Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950/40 border border-cyan-800/80 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {language === 'hi' ? 'गणना परिणाम' : 'Simulation Yield'}
                </span>
                {isDemoMode && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-700 text-cyan-300">
                    {t.labelDemo}
                  </span>
                )}
              </div>

              <div className="text-xs text-slate-400 font-medium mb-1">
                {t.calcTheoreticalResult}
              </div>

              <div className="text-4xl sm:text-5xl font-black text-cyan-300 tracking-tight my-2">
                {result !== null ? `${result.toLocaleString()} L` : '— Litres'}
              </div>

              {result !== null ? (
                <div className="mt-4 pt-4 border-t border-cyan-900/60 text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    <span className="font-semibold text-white">
                      {language === 'hi' ? 'वैज्ञानिक व्याख्या:' : 'Hydrological Breakdown:'}
                    </span>{' '}
                    {language === 'hi'
                      ? `${roofArea} वर्ग मीटर की छत पर ${rainfall} मिमी वर्षा से सैद्धांतिक रूप से प्रतिवर्ष ${result.toLocaleString()} लीटर पानी संचित किया जा सकता है।`
                      : `A ${roofArea} m² roof receiving ${rainfall} mm rain yields a theoretical annual potential of ${result.toLocaleString()} Litres.`}
                  </p>
                  <p className="text-cyan-200 font-medium">
                    {language === 'hi'
                      ? `यह विद्यालय की 500 लीटर की टंकी को लगभग ${Math.round(result / 500)} बार भर सकता है!`
                      : `This could fill the school's existing 500 L overhead tank approximately ${Math.round(result / 500)} times!`}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-slate-500 mt-2">
                  {language === 'hi' 
                    ? 'कृपया मान दर्ज करें या "नमूना लोड करें" पर क्लिक करें।'
                    : 'Enter values or click "Load Demo" to simulate potential.'}
                </p>
              )}
            </div>

            {/* STARK CONTRAST WITH REALITY CARD */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/40 to-slate-900 border border-red-800/80 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
                <h4 className="text-sm font-bold text-red-300 uppercase tracking-wider">
                  {language === 'hi' ? 'वर्तमान जमीनी सच्चाई' : 'Current Ground Reality'}
                </h4>
              </div>

              <div className="text-xs text-slate-400 font-medium mb-1">
                {t.calcActualCollected}
              </div>

              <div className="text-3xl font-black text-red-400 my-1">
                0 Litres
              </div>

              <p className="text-xs text-red-200/90 leading-relaxed mt-2">
                {t.calcZeroExplanation}
              </p>

              <div className="mt-4 pt-3 border-t border-red-900/60 text-[11px] text-slate-300">
                {language === 'hi'
                  ? 'सैद्धांतिक संभावना और वास्तविक शून्य संचयन के बीच का यह अंतर ही जलपथ AI का मुख्य फोकस है।'
                  : 'Bridging this massive gap between theoretical potential and 0 L actual harvest is the core mission of JALPATH AI.'}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
