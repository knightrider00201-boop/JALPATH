import React from 'react';
import { useApp } from '../context/AppContext';
import { SeasonalAwarenessBanner } from './SeasonalAwarenessBanner';
import { WaterConservationTips } from './WaterConservationTips';
import { 
  Users, 
  GraduationCap, 
  Laptop, 
  ChefHat, 
  ShieldAlert, 
  Database, 
  Wrench, 
  Flower2, 
  CloudRain, 
  AlertOctagon, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Zap, 
  ArrowUpRight
} from 'lucide-react';

export const MainDashboard: React.FC = () => {
  const { language, t, taps, setActiveSection } = useApp();

  const workingTapsCount = taps.filter((t) => t.condition === 'working' || t.condition === 'repaired').length;
  const faultyTapsCount = taps.filter((t) => t.condition === 'leaking' || t.condition === 'not_closing' || t.condition === 'damaged').length;
  const pendingTapsCount = taps.filter((t) => t.condition === 'needs_verification').length;

  const dashboardCards = [
    {
      id: 'enrolled',
      title: t.metricEnrolledStudents,
      value: '160',
      badge: t.labelVerified,
      badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-800',
      desc: t.metricEnrolledDesc,
      icon: GraduationCap,
      accent: 'border-emerald-600/40 text-emerald-400'
    },
    {
      id: 'teachers',
      title: t.metricTeachers,
      value: '5',
      badge: t.labelVerified,
      badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-800',
      desc: t.metricTeachersDesc,
      icon: Users,
      accent: 'border-emerald-600/40 text-emerald-400'
    },
    {
      id: 'ict',
      title: t.metricIctInstructor,
      value: '1',
      badge: t.labelVerified,
      badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-800',
      desc: t.metricIctDesc,
      icon: Laptop,
      accent: 'border-emerald-600/40 text-emerald-400'
    },
    {
      id: 'mdm',
      title: t.metricMdmCooks,
      value: '2',
      badge: t.labelVerified,
      badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-800',
      desc: t.metricMdmDesc,
      icon: ChefHat,
      accent: 'border-emerald-600/40 text-emerald-400'
    },
    {
      id: 'people',
      title: t.metricTotalPeople,
      value: '168',
      badge: t.labelVerified,
      badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-800',
      desc: t.metricTotalPeopleDesc,
      icon: ShieldAlert,
      accent: 'border-emerald-600/40 text-emerald-400'
    },
    {
      id: 'tank',
      title: t.metricOverheadTank,
      value: '~500 L',
      badge: t.labelApproximate,
      badgeColor: 'bg-sky-950 text-sky-300 border-sky-800',
      desc: t.metricOverheadTankDesc,
      icon: Database,
      accent: 'border-sky-600/40 text-sky-400'
    },
    {
      id: 'faulty_taps',
      title: t.metricFaultyTaps,
      value: '3–4 / 10',
      badge: t.labelReported,
      badgeColor: 'bg-amber-950 text-amber-300 border-amber-800',
      desc: t.metricFaultyTapsDesc,
      icon: Wrench,
      accent: 'border-amber-600/40 text-amber-400'
    },
    {
      id: 'plants',
      title: t.metricGardenPlants,
      value: '~30–40',
      badge: t.labelApproximate,
      badgeColor: 'bg-teal-950 text-teal-300 border-teal-800',
      desc: t.metricGardenPlantsDesc,
      icon: Flower2,
      accent: 'border-teal-600/40 text-teal-400'
    },
    {
      id: 'rwh_status',
      title: t.metricRwhStatus,
      value: language === 'hi' ? 'अकार्यशील' : 'Non-Functional',
      badge: t.labelVerified,
      badgeColor: 'bg-red-950 text-red-300 border-red-800',
      desc: t.metricRwhStatusDesc,
      icon: CloudRain,
      accent: 'border-red-600/40 text-red-400'
    },
    {
      id: 'roof_inlet',
      title: t.metricRoofToPipe,
      value: '0 Litres',
      badge: language === 'hi' ? 'सत्यापित विफलता' : 'Confirmed Failure Point',
      badgeColor: 'bg-red-950 text-red-300 border-red-800 animate-pulse',
      desc: t.metricRoofToPipeDesc,
      icon: AlertOctagon,
      accent: 'border-red-600/50 text-red-400'
    }
  ];

  return (
    <section id="dashboard" className="py-16 bg-slate-950/60 border-b border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seasonal Awareness Banner based on local rainfall patterns */}
        <SeasonalAwarenessBanner />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'आधारभूत सांख्यिकी' : 'Baseline Intelligence'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.dashboardTitle}
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              {t.dashboardSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-800 text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {t.labelVerified}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-950/70 border border-amber-800 text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {t.labelReported}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              {t.labelNotMeasured}
            </span>
          </div>
        </div>

        {/* 10 Factually Verified Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {dashboardCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`p-5 rounded-2xl navy-card border transition-all ${card.accent}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                  <Icon className="w-4 h-4 shrink-0" />
                </div>
                <div className="text-xs text-slate-400 font-medium mb-1">
                  {card.title}
                </div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {card.value}
                </div>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed border-t border-slate-800/80 pt-2">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Analytics & Status Distributions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: School Water Supply Vulnerability & Sources */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  {language === 'hi' ? 'जल आपूर्ति स्रोत व निर्भरता' : 'Water Supply Dependency'}
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                  {t.labelReported}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-5">
                {language === 'hi'
                  ? 'विद्यालय मुख्य रूप से गहरे बोरवेल पर निर्भर है, जो केवल बिजली होने पर चलता है।'
                  : 'Campus relies entirely on an electric submersible borewell; vulnerable during summer outages.'}
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">
                      {language === 'hi' ? 'प्राथमिक: सबमर्सिबल बोरवेल' : 'Primary: Submersible Borewell'}
                    </span>
                    <span className="text-cyan-400 font-semibold">~85% (Electricity dependent)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">
                      {language === 'hi' ? 'वैकल्पिक: चापाकल (<50m)' : 'Backup: Nearby Handpump (<50m)'}
                    </span>
                    <span className="text-amber-400 font-semibold">~15% (Low yield, iron tint)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">
                      {language === 'hi' ? 'वर्षा जल संचयन (RWH)' : 'Rainwater Harvesting (RWH)'}
                    </span>
                    <span className="text-red-400 font-bold">0% (Inlet failure)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '0%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>{language === 'hi' ? 'ग्रीष्मकालीन विद्युत कटौती प्रभाव' : 'Summer power cut impact:'}</span>
              <span className="text-amber-300 font-bold">{language === 'hi' ? 'उच्च जोखिम' : 'High Risk'}</span>
            </div>
          </div>

          {/* Card 2: Interactive Tap Audit Snapshot */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-cyan-400" />
                  {language === 'hi' ? 'नल स्थिति ऑडिट स्नैपशॉट' : 'Live Tap Audit Status'}
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                  {taps.length} {language === 'hi' ? 'कुल नल' : 'Taps'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-5">
                {language === 'hi'
                  ? 'विद्यालय के 10 नलों की स्थिति। आधारभूत सूचना के अनुसार 3-4 नलों में रिसाव की समस्या है।'
                  : 'Physical register of campus taps. Baseline reported 3–4 taps needing repair.'}
              </p>

              <div className="grid grid-cols-3 gap-3 text-center mb-6">
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60">
                  <div className="text-xl font-bold text-emerald-400">{workingTapsCount}</div>
                  <div className="text-[10px] text-emerald-300 uppercase font-semibold mt-1">
                    {language === 'hi' ? 'कार्यशील / मरम्मत' : 'Working / Repaired'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60">
                  <div className="text-xl font-bold text-amber-400">{faultyTapsCount}</div>
                  <div className="text-[10px] text-amber-300 uppercase font-semibold mt-1">
                    {language === 'hi' ? 'खराब / रिसाव' : 'Faulty / Leaking'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">
                  <div className="text-xl font-bold text-slate-300">{pendingTapsCount}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold mt-1">
                    {language === 'hi' ? 'सत्यापन बाकी' : 'To Verify'}
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <div className="flex justify-between">
                  <span>{language === 'hi' ? 'दैनिक जल बर्बादी' : 'Daily Water Loss:'}</span>
                  <span className="text-slate-400 italic">{language === 'hi' ? 'अमापित (Unmeasured)' : 'Not Measured'}</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'hi' ? 'प्राथमिक समस्या' : 'Primary defect:'}</span>
                  <span className="text-cyan-300">{language === 'hi' ? 'वॉशर व थ्रेड घिसना' : 'Worn washers / threads'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveSection('audit');
                document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
            >
              <span>{language === 'hi' ? 'संपूर्ण नल ऑडिट देखें' : 'Manage Tap Register'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Rainwater Failure Overview & Call-to-Action */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/30 via-slate-900 to-slate-900 border border-red-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <AlertOctagon className="w-4 h-4 text-red-400" />
                  {language === 'hi' ? 'वर्षा जल विफलता निदान' : 'Rainwater Failure Status'}
                </h3>
                <span className="text-[10px] font-bold text-red-300 px-2 py-0.5 rounded bg-red-950 border border-red-800">
                  {language === 'hi' ? 'अकार्यशील' : 'Defect'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/80 mb-4 text-xs text-red-200">
                <p className="font-semibold text-red-100 mb-1">
                  {language === 'hi' ? 'छत से इनलेट तक विफलता:' : 'Roof → Inlet Disconnect:'}
                </p>
                <p className="leading-relaxed">
                  {language === 'hi'
                    ? 'बारिश के बाद पानी छत पर लगभग 2 दिन ठहरा रहता है, किंतु इनलेट के मुहाने में नहीं जाता। पीवीसी पाइप और पुनर्भरण कक्ष पूरी तरह सूखे रहते हैं।'
                    : 'Rainwater gathers on the RCC roof for ~2 days after rain, but zero water reaches the collection inlet. The pipe and recharge pit receive 0 L.'}
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80 text-slate-300">
                  <span>{language === 'hi' ? 'पुनर्भरण कक्ष (Recharge Chamber)' : 'Recharge Chamber'}</span>
                  <span className="text-amber-400 font-semibold">{language === 'hi' ? 'खुला गड्ढा (ढक्कन नहीं)' : 'Open Pit (No Lid)'}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80 text-slate-300">
                  <span>{language === 'hi' ? 'नीचे का पाइप' : 'Bottom Chamber Pipe'}</span>
                  <span className="text-slate-400">{language === 'hi' ? 'बोरे से ढका/बंद' : 'Covered with sack'}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-slate-300">
                  <span>{language === 'hi' ? 'समर्पित संचयन टंकी' : 'Rainwater Storage Tank'}</span>
                  <span className="text-slate-400">{language === 'hi' ? 'उपलब्ध नहीं' : 'None installed'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveSection('detective');
                document.getElementById('detective')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 w-full py-2.5 px-3 rounded-xl bg-red-950/80 hover:bg-red-900/90 text-xs font-semibold text-red-200 border border-red-700 flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              <span>{language === 'hi' ? 'वर्षा जल जासूस डायग्राम खोलें' : 'Open Rainwater Detective'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Water Conservation Tips & Educational Guides */}
        <WaterConservationTips />

      </div>
    </section>
  );
};
