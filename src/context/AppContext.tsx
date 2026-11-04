import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TapRecord, WaterSupplyLog } from '../types';
import { translations } from '../data/translations';
import { INITIAL_TAPS, INITIAL_SUPPLY_LOGS } from '../data/initialData';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  theme: 'frost' | 'navy';
  setTheme: (th: 'frost' | 'navy') => void;
  toggleTheme: () => void;
  t: typeof translations.en;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  taps: TapRecord[];
  updateTap: (tap: TapRecord) => void;
  resetTaps: () => void;
  supplyLogs: WaterSupplyLog[];
  addSupplyLog: (log: WaterSupplyLog) => void;
  deleteSupplyLog: (id: string) => void;
  resetSupplyLogs: () => void;
  isPresentationMode: boolean;
  setIsPresentationMode: (val: boolean) => void;
  presentationSlide: number;
  setPresentationSlide: (slide: number | ((prev: number) => number)) => void;
  notification: string | null;
  showToast: (msg: string) => void;
  resetAllData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('jalpath_language');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const [theme, setThemeState] = useState<'frost' | 'navy'>(() => {
    const saved = localStorage.getItem('jalpath_theme');
    return (saved === 'frost' || saved === 'navy') ? saved : 'frost';
  });

  const setTheme = (th: 'frost' | 'navy') => {
    setThemeState(th);
    localStorage.setItem('jalpath_theme', th);
    showToast(th === 'frost' ? 'Theme: Ultra-Glossy Frost Ice-Blue' : 'Theme: Deep Navy Aqua');
  };

  const toggleTheme = () => {
    setTheme(theme === 'frost' ? 'navy' : 'frost');
  };

  const [activeSection, setActiveSection] = useState<string>('home');

  const [taps, setTaps] = useState<TapRecord[]>(() => {
    const saved = localStorage.getItem('jalpath_taps');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved taps', e);
      }
    }
    return INITIAL_TAPS;
  });

  const [supplyLogs, setSupplyLogs] = useState<WaterSupplyLog[]>(() => {
    const saved = localStorage.getItem('jalpath_supply_logs');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved supply logs', e);
      }
    }
    return INITIAL_SUPPLY_LOGS;
  });

  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [presentationSlide, setPresentationSlide] = useState<number>(0);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('jalpath_language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('jalpath_taps', JSON.stringify(taps));
  }, [taps]);

  useEffect(() => {
    localStorage.setItem('jalpath_supply_logs', JSON.stringify(supplyLogs));
  }, [supplyLogs]);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 3500);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    showToast(lang === 'hi' ? 'भाषा: हिंदी चुनी गई' : 'Language set to English');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const updateTap = (updatedTap: TapRecord) => {
    setTaps((prev) => prev.map((t) => (t.id === updatedTap.id ? updatedTap : t)));
    showToast(language === 'hi' ? `नल ${updatedTap.id} का रिकॉर्ड अद्यतन किया गया` : `Updated ${updatedTap.id} audit record`);
  };

  const resetTaps = () => {
    setTaps(INITIAL_TAPS);
    localStorage.removeItem('jalpath_taps');
    showToast(language === 'hi' ? 'नल ऑडिट डेटा रीसेट किया गया' : 'Reset tap audit to baseline');
  };

  const addSupplyLog = (log: WaterSupplyLog) => {
    setSupplyLogs((prev) => [log, ...prev]);
    showToast(language === 'hi' ? 'दैनिक जल आपूर्ति प्रविष्टि जोड़ी गई' : 'New water supply log recorded');
  };

  const deleteSupplyLog = (id: string) => {
    setSupplyLogs((prev) => prev.filter((item) => item.id !== id));
    showToast(language === 'hi' ? 'प्रविष्टि हटा दी गई' : 'Supply log removed');
  };

  const resetSupplyLogs = () => {
    setSupplyLogs(INITIAL_SUPPLY_LOGS);
    localStorage.removeItem('jalpath_supply_logs');
    showToast(language === 'hi' ? 'दैनिक आपूर्ति लॉग रीसेट किए गए' : 'Reset daily supply logs');
  };

  const resetAllData = () => {
    setTaps(INITIAL_TAPS);
    setSupplyLogs(INITIAL_SUPPLY_LOGS);
    localStorage.removeItem('jalpath_taps');
    localStorage.removeItem('jalpath_supply_logs');
    showToast(language === 'hi' ? 'सभी स्थानीय डेटा को आधारभूत स्तर पर रीसेट किया गया' : 'All local browser data reset to baseline');
  };

  const t = translations[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        setTheme,
        toggleTheme,
        t,
        activeSection,
        setActiveSection,
        taps,
        updateTap,
        resetTaps,
        supplyLogs,
        addSupplyLog,
        deleteSupplyLog,
        resetSupplyLogs,
        isPresentationMode,
        setIsPresentationMode,
        presentationSlide,
        setPresentationSlide,
        notification,
        showToast,
        resetAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
