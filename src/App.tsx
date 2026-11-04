import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainDashboard } from './components/MainDashboard';
import { InteractivePrototype } from './components/InteractivePrototype';
import { SchoolWaterProfile } from './components/SchoolWaterProfile';
import { RainwaterDetective } from './components/RainwaterDetective';
import { WaterAudit } from './components/WaterAudit';
import { RainwaterCalculator } from './components/RainwaterCalculator';
import { WaterSupplyMonitor } from './components/WaterSupplyMonitor';
import { AIJalAdvisor } from './components/AIJalAdvisor';
import { AwarenessQuiz } from './components/AwarenessQuiz';
import { TechnologyArchitecture } from './components/TechnologyArchitecture';
import { LimitationsFutureScope } from './components/LimitationsFutureScope';
import { ReportsCenter } from './components/ReportsCenter';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { JudgePresentationMode } from './components/JudgePresentationMode';
import { CheckCircle, Info } from 'lucide-react';

const ToastNotification: React.FC = () => {
  const { notification } = useApp();
  if (!notification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-cyan-950/95 border border-cyan-500/80 text-cyan-200 shadow-2xl text-xs sm:text-sm font-semibold backdrop-blur-md">
        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
        <span>{notification}</span>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { theme } = useApp();

  React.useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'frost') {
      root.classList.add('theme-frost');
      root.classList.remove('dark');
      root.style.backgroundColor = '#F0F9FF';
      root.style.colorScheme = 'light';
      body.classList.add('theme-frost');
      body.classList.remove('dark');
      body.style.backgroundColor = '#F0F9FF';
      body.style.color = '#0F172A';
    } else {
      root.classList.remove('theme-frost');
      root.classList.add('dark');
      root.style.backgroundColor = '#050B17';
      root.style.colorScheme = 'dark';
      body.classList.remove('theme-frost');
      body.classList.add('dark');
      body.style.backgroundColor = '#050B17';
      body.style.color = '#F8FAFC';
    }
  }, [theme]);

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-hidden ${theme === 'frost' ? 'theme-frost bg-[#F0F9FF] text-slate-900' : 'bg-slate-950 text-slate-100'} flex flex-col font-sans transition-colors duration-300 selection:bg-cyan-500 selection:text-slate-950`}>
      {/* Toast Notification */}
      <ToastNotification />

      {/* Judge Presentation Mode Modal (shown when active) */}
      <JudgePresentationMode />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <MainDashboard />
        <InteractivePrototype />
        <SchoolWaterProfile />
        <RainwaterDetective />
        <WaterAudit />
        <RainwaterCalculator />
        <WaterSupplyMonitor />
        <AIJalAdvisor />
        <AwarenessQuiz />
        <TechnologyArchitecture />
        <LimitationsFutureScope />
        <ReportsCenter />
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
