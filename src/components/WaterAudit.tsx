import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TapRecord, TapCondition } from '../types';
import { 
  CheckSquare, 
  Wrench, 
  Download, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Search, 
  Edit3, 
  Save, 
  X,
  Filter
} from 'lucide-react';

export const WaterAudit: React.FC = () => {
  const { language, t, taps, updateTap, resetTaps, showToast } = useApp();
  
  const [selectedTap, setSelectedTap] = useState<TapRecord | null>(null);
  const [filterCondition, setFilterCondition] = useState<string>('all');
  const [editModalOpen, setEditModalOpen] = useState(false);

  // Edit form state
  const [editCondition, setEditCondition] = useState<TapCondition>('working');
  const [editNotes, setEditNotes] = useState('');
  const [editNotesHi, setEditNotesHi] = useState('');
  const [editInspector, setEditInspector] = useState('');
  const [editDate, setEditDate] = useState('');

  const conditionLabels: Record<TapCondition, { en: string; hi: string; color: string; badge: string }> = {
    working: {
      en: 'Working Properly',
      hi: 'सही कार्यशील',
      color: 'text-emerald-400',
      badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
    },
    leaking: {
      en: 'Leaking / Dripping',
      hi: 'टपक रहा है (रिसाव)',
      color: 'text-amber-400',
      badge: 'bg-amber-950/80 text-amber-300 border-amber-800'
    },
    not_closing: {
      en: 'Tap Not Closing Properly',
      hi: 'ठीक से बंद नहीं होता',
      color: 'text-rose-400',
      badge: 'bg-rose-950/80 text-rose-300 border-rose-800'
    },
    damaged: {
      en: 'Physically Damaged',
      hi: 'क्षतिग्रस्त / टूटा हुआ',
      color: 'text-red-400',
      badge: 'bg-red-950/80 text-red-300 border-red-800'
    },
    needs_verification: {
      en: 'Needs Physical Verification',
      hi: 'भौतिक सत्यापन आवश्यक',
      color: 'text-slate-400',
      badge: 'bg-slate-800 text-slate-300 border-slate-700'
    },
    repaired: {
      en: 'Recently Repaired',
      hi: 'हाल में मरम्मत संपन्न',
      color: 'text-teal-400',
      badge: 'bg-teal-950/80 text-teal-300 border-teal-800'
    }
  };

  const handleOpenEdit = (tap: TapRecord) => {
    setSelectedTap(tap);
    setEditCondition(tap.condition);
    setEditNotes(tap.notes);
    setEditNotesHi(tap.notesHi);
    setEditInspector(tap.inspector || (language === 'hi' ? 'अर्चना कुमारी (छात्रा)' : 'Archana Kumari (Student)'));
    setEditDate(tap.lastInspected || new Date().toISOString().split('T')[0]);
    setEditModalOpen(true);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTap) return;

    const updated: TapRecord = {
      ...selectedTap,
      condition: editCondition,
      notes: editNotes,
      notesHi: editNotesHi || editNotes,
      inspector: editInspector,
      lastInspected: editDate,
      isReportedFaulty: editCondition === 'leaking' || editCondition === 'not_closing' || editCondition === 'damaged'
    };

    updateTap(updated);
    setEditModalOpen(false);
  };

  const handleQuickMarkRepaired = (tap: TapRecord) => {
    const updated: TapRecord = {
      ...tap,
      condition: 'repaired',
      lastInspected: new Date().toISOString().split('T')[0],
      inspector: language === 'hi' ? 'सोमनाथ पाल (आईसीटी अनुदेशक)' : 'Somnath Pal (Mentor)',
      notes: 'Repaired: washer replaced and thread tightened.',
      notesHi: 'मरम्मत संपन्न: वॉशर बदला गया और चूड़ी कसी गई।',
      isReportedFaulty: false
    };
    updateTap(updated);
  };

  const exportToCsv = () => {
    const headers = ['Tap_ID', 'Name_En', 'Name_Hi', 'Location', 'Condition', 'Inspector', 'Last_Inspected', 'Notes'];
    const rows = taps.map((t) => [
      t.id,
      `"${t.name}"`,
      `"${t.nameHi}"`,
      `"${t.location}"`,
      t.condition,
      `"${t.inspector}"`,
      t.lastInspected,
      `"${t.notes.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `jalpath_water_audit_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(language === 'hi' ? 'नल ऑडिट CSV डाउनलोड प्रारंभ' : 'Water audit CSV downloaded');
  };

  const filteredTaps = taps.filter((tap) => {
    if (filterCondition === 'all') return true;
    if (filterCondition === 'faulty') {
      return tap.condition === 'leaking' || tap.condition === 'not_closing' || tap.condition === 'damaged';
    }
    return tap.condition === filterCondition;
  });

  const totalTaps = taps.length;
  const workingTaps = taps.filter((t) => t.condition === 'working' || t.condition === 'repaired').length;
  const faultyTaps = taps.filter((t) => t.condition === 'leaking' || t.condition === 'not_closing' || t.condition === 'damaged').length;
  const repairedTaps = taps.filter((t) => t.condition === 'repaired').length;
  const pendingTaps = taps.filter((t) => t.condition === 'needs_verification').length;

  return (
    <section id="audit" className="py-16 bg-slate-950/80 border-b border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-2">
              <CheckSquare className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'सक्रिय जल निगरानी' : 'Physical Verification'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.auditTitle}
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              {t.auditSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={exportToCsv}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-800 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.exportAuditCsv}</span>
            </button>
            <button
              onClick={resetTaps}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800 transition-all"
              title="Reset to baseline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'रीसेट' : 'Reset'}</span>
            </button>
          </div>
        </div>

        {/* Audit Context Notice Banner */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <Wrench className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-amber-300">
              {language === 'hi' ? 'आधारभूत अवलोकन तथ्य:' : 'Baseline Ground Observation:'}
            </span>{' '}
            {t.auditNotice}
          </div>
        </div>

        {/* 4 Summary Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <div className="text-xs text-slate-400 font-medium mb-1">{t.tapTotal}</div>
            <div className="text-2xl font-extrabold text-white">{totalTaps}</div>
            <div className="text-[11px] text-slate-500 mt-1">
              {language === 'hi' ? 'लगभग 10 नल स्थापित' : '~10 Taps Installed'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/50">
            <div className="text-xs text-amber-300 font-medium mb-1">{t.tapFaulty}</div>
            <div className="text-2xl font-extrabold text-amber-400">{faultyTaps}</div>
            <div className="text-[11px] text-amber-200/80 mt-1">
              {language === 'hi' ? 'आधारभूत रिपोर्ट: ~3–4 नल' : 'Baseline reported ~3–4'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-800/50">
            <div className="text-xs text-teal-300 font-medium mb-1">{t.tapRepaired}</div>
            <div className="text-2xl font-extrabold text-teal-400">{repairedTaps}</div>
            <div className="text-[11px] text-teal-200/80 mt-1">
              {language === 'hi' ? 'मरम्मत सत्यापित' : 'Verified repaired'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <div className="text-xs text-slate-400 font-medium mb-1">{t.tapPending}</div>
            <div className="text-2xl font-extrabold text-slate-300">{pendingTaps}</div>
            <div className="text-[11px] text-slate-500 mt-1">
              {language === 'hi' ? 'भौतिक सत्यापन शेष' : 'Pending inspection'}
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 text-xs scrollbar-none">
          <span className="text-slate-400 flex items-center gap-1 font-semibold pr-2">
            <Filter className="w-3.5 h-3.5" />
            {language === 'hi' ? 'फ़िल्टर:' : 'Filter:'}
          </span>
          <button
            onClick={() => setFilterCondition('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              filterCondition === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {language === 'hi' ? 'सभी 10 नल' : 'All 10 Taps'}
          </button>
          <button
            onClick={() => setFilterCondition('faulty')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              filterCondition === 'faulty'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {language === 'hi' ? 'खराब / रिसाव (Faulty)' : 'Faulty / Leaking'} ({faultyTaps})
          </button>
          <button
            onClick={() => setFilterCondition('working')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              filterCondition === 'working'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {language === 'hi' ? 'सही कार्यशील' : 'Working'}
          </button>
          <button
            onClick={() => setFilterCondition('repaired')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap ${
              filterCondition === 'repaired'
                ? 'bg-teal-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {language === 'hi' ? 'मरम्मत संपन्न' : 'Repaired'} ({repairedTaps})
          </button>
        </div>

        {/* Interactive 10 Taps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTaps.map((tap) => {
            const condInfo = conditionLabels[tap.condition];
            const isFaulty = tap.condition === 'leaking' || tap.condition === 'not_closing' || tap.condition === 'damaged';
            
            return (
              <div
                key={tap.id}
                className={`p-5 rounded-2xl bg-slate-900/90 border transition-all flex flex-col justify-between ${
                  isFaulty
                    ? 'border-amber-600/60 shadow-lg shadow-amber-950/20'
                    : tap.condition === 'repaired'
                    ? 'border-teal-600/50'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-extrabold text-sm text-cyan-300 tracking-wide">
                      {tap.id}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${condInfo.badge}`}>
                      {language === 'hi' ? condInfo.hi : condInfo.en}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {language === 'hi' ? tap.nameHi : tap.name}
                  </h3>

                  <p className="text-xs text-slate-400 mb-3">
                    <span className="text-slate-500 font-semibold">{language === 'hi' ? 'स्थान: ' : 'Location: '}</span>
                    {language === 'hi' ? tap.locationHi : tap.location}
                  </p>

                  <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-xs mb-4">
                    <p className="text-slate-300 italic leading-relaxed">
                      &quot;{language === 'hi' ? tap.notesHi : tap.notes}&quot;
                    </p>
                    <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
                      <span>{tap.inspector}</span>
                      <span>{tap.lastInspected}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
                  <button
                    onClick={() => handleOpenEdit(tap)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{language === 'hi' ? 'निरीक्षण दर्ज करें' : 'Update Audit'}</span>
                  </button>

                  {isFaulty && (
                    <button
                      onClick={() => handleQuickMarkRepaired(tap)}
                      className="py-2 px-3 rounded-xl bg-teal-950 hover:bg-teal-900 text-xs font-bold text-teal-300 border border-teal-800 flex items-center gap-1 transition-all"
                      title="Quick mark as repaired"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'मरम्मत' : 'Repaired'}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Editing Tap Record */}
        {editModalOpen && selectedTap && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
            <div className="w-full max-w-lg rounded-2xl bg-slate-900 border border-cyan-800/70 p-6 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{selectedTap.id}</span>
                  <h3 className="text-lg font-bold text-white">
                    {language === 'hi' ? selectedTap.nameHi : selectedTap.name}
                  </h3>
                </div>
                <button
                  onClick={() => setEditModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveEdit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'hi' ? 'नल की भौतिक स्थिति' : 'Tap Physical Condition'}
                  </label>
                  <select
                    value={editCondition}
                    onChange={(e) => setEditCondition(e.target.value as TapCondition)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="working">{conditionLabels.working[language]}</option>
                    <option value="leaking">{conditionLabels.leaking[language]}</option>
                    <option value="not_closing">{conditionLabels.not_closing[language]}</option>
                    <option value="damaged">{conditionLabels.damaged[language]}</option>
                    <option value="needs_verification">{conditionLabels.needs_verification[language]}</option>
                    <option value="repaired">{conditionLabels.repaired[language]}</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {language === 'hi' ? 'निरीक्षण तिथि' : 'Audit Date'}
                    </label>
                    <input
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {language === 'hi' ? 'निरीक्षक का नाम' : 'Inspector Name'}
                    </label>
                    <input
                      type="text"
                      value={editInspector}
                      onChange={(e) => setEditInspector(e.target.value)}
                      placeholder="e.g. Sima Baski / Somnath Pal"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'hi' ? 'निरीक्षण टिप्पणी (English)' : 'Observation Notes (English)'}
                  </label>
                  <textarea
                    rows={2}
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Describe leak intensity, handle stiffness, washer state..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {language === 'hi' ? 'निरीक्षण टिप्पणी (हिंदी)' : 'Observation Notes (Hindi - Optional)'}
                  </label>
                  <textarea
                    rows={2}
                    value={editNotesHi}
                    onChange={(e) => setEditNotesHi(e.target.value)}
                    placeholder="रिसाव की स्थिति, चूड़ी, वॉशर या मरम्मत का विवरण..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setEditModalOpen(false)}
                    className="px-4 py-2 text-xs font-medium rounded-xl text-slate-300 hover:bg-slate-800"
                  >
                    {language === 'hi' ? 'रद्द करें' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                  >
                    <Save className="w-4 h-4" />
                    <span>{language === 'hi' ? 'बदलाव सहेजें' : 'Save Audit'}</span>
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
