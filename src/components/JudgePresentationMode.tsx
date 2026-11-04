import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRESENTATION_SLIDES } from '../data/initialData';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Presentation, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles,
  Maximize2,
  Camera,
  MapPin,
  Building2
} from 'lucide-react';

export const JudgePresentationMode: React.FC = () => {
  const { 
    language, 
    isPresentationMode, 
    setIsPresentationMode, 
    presentationSlide, 
    setPresentationSlide 
  } = useApp();

  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isPhotoZoomed, setIsPhotoZoomed] = useState<boolean>(false);

  const schoolPhotoUrl = '/assets/aistudio/b______________________5a326dce.webp';
  const showPhotoOnThisSlide = presentationSlide === 0 || presentationSlide === 1 || presentationSlide === 3;

  // Timer for 5-7 minute pitch
  useEffect(() => {
    let interval: any = null;
    if (isPresentationMode) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      setSecondsElapsed(0);
    }
    return () => clearInterval(interval);
  }, [isPresentationMode]);

  // Keyboard navigation
  useEffect(() => {
    if (!isPresentationMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        setPresentationSlide((prev) => Math.min(prev + 1, PRESENTATION_SLIDES.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setPresentationSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        setIsPresentationMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresentationMode, setPresentationSlide, setIsPresentationMode]);

  if (!isPresentationMode) return null;

  const currentSlide = PRESENTATION_SLIDES[presentationSlide] || PRESENTATION_SLIDES[0];
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div id="judge-presentation-mode" data-presentation-mode="true" className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between text-slate-100 overflow-y-auto w-full max-w-full overflow-x-hidden">
      
      {/* Top Bar */}
      <header className="p-4 sm:p-6 border-b border-slate-800/80 flex items-center justify-between bg-slate-950/90">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
            <Presentation className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-sm sm:text-base tracking-tight">
                JALPATH AI – Quest4Earth 2026
              </span>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-cyan-950 border border-cyan-700 text-cyan-300">
                Judges Pitch
              </span>
            </div>
            <p className="text-xs text-slate-400">
              UPG M.S. DUDHANI-1 (Jama, Dumka) • UDAAN TEAM
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Pitch Timer */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span className={secondsElapsed > 420 ? 'text-amber-400 font-bold' : 'text-slate-300'}>
              {formatTime(secondsElapsed)}
            </span>
            <span className="text-slate-500 text-[10px] hidden sm:inline">(Target: 5–7 min)</span>
          </div>

          <button
            onClick={() => setIsPresentationMode(false)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Exit Presentation Mode (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Slide Body */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4 sm:p-6 lg:p-10 flex flex-col justify-center">
        
        {/* Category Pill & Step Counter */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800">
            {language === 'hi' ? currentSlide.categoryHi : currentSlide.categoryEn}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {language === 'hi' ? `स्लाइड ${presentationSlide + 1} / ${PRESENTATION_SLIDES.length}` : `Slide ${presentationSlide + 1} of ${PRESENTATION_SLIDES.length}`}
          </span>
        </div>

        {/* Slide Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-6">
          {language === 'hi' ? currentSlide.titleHi : currentSlide.titleEn}
        </h2>

        {/* Slide Content Area - Split Grid when Photo is Shown */}
        {showPhotoOnThisSlide ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-6">
            
            {/* Left Column: Key Points */}
            <div className="lg:col-span-7 space-y-3.5 order-2 lg:order-1">
              {(language === 'hi' ? currentSlide.keyPointsHi : currentSlide.keyPointsEn).map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex items-start gap-3.5 transition-all hover:border-cyan-800"
                >
                  <div className="w-7 h-7 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column: Responsive Campus Photo Card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div 
                className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl bg-slate-900 group cursor-pointer"
                onClick={() => setIsPhotoZoomed(true)}
              >
                <img
                  src={schoolPhotoUrl}
                  alt="UPG M.S. DUDHANI-1 School Campus"
                  className="w-full h-52 sm:h-64 lg:h-80 object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-400/80 text-[10px] font-bold text-emerald-300">
                    {language === 'hi' ? 'सत्यापित परिसर' : 'Verified Campus'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-400/80 text-[10px] font-mono font-bold text-cyan-300">
                    20110409301
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-left">
                  <span className="text-[11px] font-bold text-white drop-shadow-md">
                    UPG M.S. DUDHANI-1 (Jama)
                  </span>
                  <span className="px-2 py-0.5 rounded-lg bg-cyan-500 text-slate-950 text-[10px] font-bold flex items-center gap-1 shadow">
                    <Maximize2 className="w-3 h-3" />
                    <span>{language === 'hi' ? 'ज़ूम करें' : 'Zoom'}</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* Standard Full Width Key Points */
          <div className="space-y-4 mb-8">
            {(language === 'hi' ? currentSlide.keyPointsHi : currentSlide.keyPointsEn).map((point, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex items-start gap-4 transition-all hover:border-cyan-800"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  {idx + 1}
                </div>
                <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Highlighted Warning on Critical Failure Step (Step 5) */}
        {currentSlide.step === 5 && (
          <div className="p-4 rounded-xl bg-red-950/40 border border-red-700 text-red-200 text-xs sm:text-sm flex items-center gap-3 animate-pulse">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
            <span>
              <strong>{language === 'hi' ? 'महत्वपूर्ण वैज्ञानिक अवलोकन: ' : 'Critical Scientific Note: '}</strong>
              {language === 'hi'
                ? 'यह बंद पाइप का अनुमान नहीं है; पुष्ट अवलोकन यह है कि पानी इनलेट तक पहुँच ही नहीं पाता।'
                : 'Do NOT assume this is a blocked pipe. The confirmed ground finding is that water accumulates away and never enters the inlet.'}
            </span>
          </div>
        )}

        {/* Slide Photo Zoom Modal */}
        {isPhotoZoomed && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6"
            onClick={() => setIsPhotoZoomed(false)}
          >
            <div 
              className="w-full max-w-4xl flex items-center justify-between text-white py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-sm sm:text-base">
                  UPG M.S. DUDHANI-1 (Jama, Dumka, Jharkhand) • U-DISE: 20110409301
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsPhotoZoomed(false)}
                className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div 
              className="w-full max-w-4xl flex-1 flex items-center justify-center py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={schoolPhotoUrl}
                alt="School View"
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl border border-cyan-400/40 shadow-2xl"
              />
            </div>

            <div 
              className="w-full max-w-4xl text-center text-xs text-slate-400 py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsPhotoZoomed(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 cursor-pointer"
              >
                {language === 'hi' ? 'बंद करें (Close)' : 'Close'}
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Bottom Control Bar */}
      <footer className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/90">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          
          <button
            onClick={() => setPresentationSlide((prev) => Math.max(prev - 1, 0))}
            disabled={presentationSlide === 0}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{language === 'hi' ? 'पिछली स्लाइड' : 'Previous Slide'}</span>
          </button>

          {/* Stepper Dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-xs sm:max-w-md px-2">
            {PRESENTATION_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPresentationSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === presentationSlide
                    ? 'w-6 bg-cyan-400'
                    : 'w-2 bg-slate-800 hover:bg-slate-700'
                }`}
                title={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              if (presentationSlide < PRESENTATION_SLIDES.length - 1) {
                setPresentationSlide((prev) => prev + 1);
              } else {
                setIsPresentationMode(false);
              }
            }}
            className="flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all"
          >
            <span>
              {presentationSlide === PRESENTATION_SLIDES.length - 1 
                ? (language === 'hi' ? 'समाप्त करें' : 'Finish Presentation')
                : (language === 'hi' ? 'अगली स्लाइड' : 'Next Slide')}
            </span>
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      </footer>

    </div>
  );
};
