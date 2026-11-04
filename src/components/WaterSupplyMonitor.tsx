import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { WaterSupplyLog } from '../types';
import { 
  Droplet, 
  Zap, 
  AlertTriangle, 
  Plus, 
  Trash2, 
  Download, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  RotateCcw,
  Waves,
  ShieldCheck,
  TrendingDown
} from 'lucide-react';

export const WaterSupplyMonitor: React.FC = () => {
  const { language, t, supplyLogs, addSupplyLog, deleteSupplyLog, resetSupplyLogs, showToast } = useApp();

  // Form state
  const [logDate, setLogDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [electricityStatus, setElectricityStatus] = useState<'available' | 'partial' | 'outage'>('available');
  const [pumpOperational, setPumpOperational] = useState<boolean>(true);
  const [tankStatus, setTankStatus] = useState<'empty' | 'low' | 'half' | 'full' | 'overflow'>('full');
  const [shortageObserved, setShortageObserved] = useState<boolean>(false);
  const [leakageObserved, setLeakageObserved] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>('');

  const [formOpen, setFormOpen] = useState<boolean>(false);

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    const newLog: WaterSupplyLog = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      date: logDate,
      electricityStatus,
      pumpOperational,
      tankStatus,
      waterShortageObserved: shortageObserved,
      leakageObserved,
      notes: notes || (language === 'hi' ? 'सामान्य विद्यालय दिवस' : 'Normal routine observation')
    };

    addSupplyLog(newLog);
    setNotes('');
    setFormOpen(false);
  };

  const exportSupplyCsv = () => {
    const headers = ['Log_ID', 'Date', 'Electricity', 'Pump_Operational', 'Tank_Status', 'Shortage_Observed', 'Leakage_Observed', 'Notes'];
    const rows = supplyLogs.map((log) => [
      log.id,
      log.date,
      log.electricityStatus,
      log.pumpOperational ? 'YES' : 'NO',
      log.tankStatus,
      log.waterShortageObserved ? 'YES' : 'NO',
      log.leakageObserved ? 'YES' : 'NO',
      `"${log.notes.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `jalpath_water_supply_logs_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(language === 'hi' ? 'जल आपूर्ति लॉग CSV डाउनलोड प्रारंभ' : 'Supply logs CSV downloaded');
  };

  // Calculations ONLY from user entries
  const totalLogs = supplyLogs.length;
  const recordedShortages = supplyLogs.filter((l) => l.waterShortageObserved).length;
  const recordedOverflows = supplyLogs.filter((l) => l.tankStatus === 'overflow').length;
  const recordedLeakages = supplyLogs.filter((l) => l.leakageObserved).length;
  const recordedOutages = supplyLogs.filter((l) => l.electricityStatus === 'outage').length;

  return (
    <section id="supply" className="py-16 bg-slate-950 border-b border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-2">
              <Droplet className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'दैनिक घटना ट्रैकर' : 'Daily Supply Logging'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.supplyTitle}
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              {t.supplySubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFormOpen(!formOpen)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>{t.logNewEntry}</span>
            </button>
            <button
              onClick={exportSupplyCsv}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-800 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.exportSupplyCsv}</span>
            </button>
            <button
              onClick={resetSupplyLogs}
              className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-900 border border-slate-800"
              title="Reset logs"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Infrastructure Context Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-xs">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
              <Zap className="w-4 h-4" />
              <span>{language === 'hi' ? 'बोरवेल एवं बिजली निर्भरता' : 'Borewell & Grid Dependency'}</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {t.supplyBorewellDesc} {t.supplySummerCutDesc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
              <Waves className="w-4 h-4" />
              <span>{language === 'hi' ? 'वैकल्पिक चापाकल' : 'Backup Handpump (<50m)'}</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {t.supplyHandpumpDesc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-rose-400 font-bold mb-1">
              <AlertTriangle className="w-4 h-4" />
              <span>{language === 'hi' ? 'टंकी एवं अतिप्रवाह' : 'Overhead Tank Status'}</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {t.supplyTankNotice}
            </p>
          </div>
        </div>

        {/* Dynamic Metric Tiles (Calculated ONLY from user-entered logs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400">{language === 'hi' ? 'कुल दर्ज दिवस' : 'Recorded Days'}</div>
            <div className="text-2xl font-black text-white mt-1">{totalLogs}</div>
            <div className="text-[10px] text-slate-500 mt-1">{language === 'hi' ? 'दैनिक प्रविष्टियाँ' : 'User log entries'}</div>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40">
            <div className="text-xs text-amber-300">{language === 'hi' ? 'बिजली कटौती की घटनाएं' : 'Recorded Outages'}</div>
            <div className="text-2xl font-black text-amber-400 mt-1">{recordedOutages}</div>
            <div className="text-[10px] text-amber-200/80 mt-1">{language === 'hi' ? 'पंप बंद रहा' : 'Pump non-operational'}</div>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40">
            <div className="text-xs text-rose-300">{language === 'hi' ? 'जल संकट की स्थिति' : 'Shortage Incidents'}</div>
            <div className="text-2xl font-black text-rose-400 mt-1">{recordedShortages}</div>
            <div className="text-[10px] text-rose-200/80 mt-1">{language === 'hi' ? 'पानी की कमी' : 'Low water recorded'}</div>
          </div>

          <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-800/40">
            <div className="text-xs text-sky-300">{language === 'hi' ? 'टंकी ओवरफ्लो घटनाएं' : 'Overflow Incidents'}</div>
            <div className="text-2xl font-black text-sky-400 mt-1">{recordedOverflows}</div>
            <div className="text-[10px] text-sky-200/80 mt-1">{language === 'hi' ? 'नाली में पानी बहा' : 'Lost to drain'}</div>
          </div>
        </div>

        {/* Collapsible Form for New Daily Log */}
        {formOpen && (
          <div className="mb-8 p-6 rounded-2xl bg-slate-900 border border-cyan-800 shadow-2xl animate-in slide-in-from-top-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{language === 'hi' ? 'नई दैनिक जल आपूर्ति प्रविष्टि दर्ज करें' : 'Record Daily Water Availability'}</span>
              </h3>
              <button
                onClick={() => setFormOpen(false)}
                className="text-xs text-slate-400 hover:text-white"
              >
                {language === 'hi' ? 'रद्द करें' : 'Close'}
              </button>
            </div>

            <form onSubmit={handleAddLog} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {language === 'hi' ? 'तारीख (Date)' : 'Date'}
                </label>
                <input
                  type="date"
                  value={logDate}
                  onChange={(e) => setLogDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {language === 'hi' ? 'बिजली स्थिति' : 'Electricity Grid Status'}
                </label>
                <select
                  value={electricityStatus}
                  onChange={(e) => setElectricityStatus(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                >
                  <option value="available">{language === 'hi' ? 'उपलब्ध (Available)' : 'Available'}</option>
                  <option value="partial">{language === 'hi' ? 'आंशिक कटौती (Partial cut)' : 'Partial / Fluctuating'}</option>
                  <option value="outage">{language === 'hi' ? 'बिजली गुल (Complete Outage)' : 'Power Outage'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {language === 'hi' ? 'टंकी स्तर अवलोकन' : 'Tank Water Level'}
                </label>
                <select
                  value={tankStatus}
                  onChange={(e) => setTankStatus(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                >
                  <option value="full">{language === 'hi' ? 'भरा हुआ (Full)' : 'Full'}</option>
                  <option value="half">{language === 'hi' ? 'आधा (Half)' : 'Half'}</option>
                  <option value="low">{language === 'hi' ? 'कम (Low)' : 'Low'}</option>
                  <option value="overflow">{language === 'hi' ? 'ओवरफ्लो (Overflow into drain)' : 'Overflow (Spilling)'}</option>
                  <option value="empty">{language === 'hi' ? 'खाली (Empty)' : 'Empty'}</option>
                </select>
              </div>

              <div className="sm:col-span-3 flex flex-wrap items-center gap-6 py-2">
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pumpOperational}
                    onChange={(e) => setPumpOperational(e.target.checked)}
                    className="w-4 h-4 rounded text-cyan-500 focus:ring-cyan-500"
                  />
                  <span>{language === 'hi' ? 'सबमर्सिबल पंप चालू किया गया?' : 'Submersible pump was run'}</span>
                </label>

                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={shortageObserved}
                    onChange={(e) => setShortageObserved(e.target.checked)}
                    className="w-4 h-4 rounded text-rose-500 focus:ring-rose-500"
                  />
                  <span className="text-rose-300">{language === 'hi' ? 'जल संकट / चापाकल का सहारा लिया गया?' : 'Water shortage observed'}</span>
                </label>

                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={leakageObserved}
                    onChange={(e) => setLeakageObserved(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500"
                  />
                  <span className="text-amber-300">{language === 'hi' ? 'टंकी या पाइप में रिसाव दिखा?' : 'Leakage / overflow observed'}</span>
                </label>
              </div>

              <div className="sm:col-span-3">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {language === 'hi' ? 'अवलोकन टिप्पणी (Notes)' : 'Notes'}
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={language === 'hi' ? 'उदा. 2 घंटे बिजली कटौती; चापाकल से पानी लाया गया...' : 'e.g., 2 hour power cut; handpump used for MDM...'}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-3 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition-all"
                >
                  {language === 'hi' ? 'प्रविष्टि सहेजें' : 'Save Daily Log'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* History Table */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
          <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>{language === 'hi' ? 'दैनिक आपूर्ति इतिहास पंजी' : 'Recorded Daily Logs History'}</span>
            </h3>
            <span className="text-xs text-slate-400">
              {supplyLogs.length} {language === 'hi' ? 'प्रविष्टियाँ' : 'Entries'}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 font-semibold">{language === 'hi' ? 'तारीख' : 'Date'}</th>
                  <th className="py-3 px-4 font-semibold">{language === 'hi' ? 'बिजली स्थिति' : 'Power Grid'}</th>
                  <th className="py-3 px-4 font-semibold">{language === 'hi' ? 'पंप' : 'Pump'}</th>
                  <th className="py-3 px-4 font-semibold">{language === 'hi' ? 'टंकी स्थिति' : 'Tank Level'}</th>
                  <th className="py-3 px-4 font-semibold">{language === 'hi' ? 'संकट?' : 'Shortage?'}</th>
                  <th className="py-3 px-4 font-semibold">{language === 'hi' ? 'अवलोकन टिप्पणी' : 'Observation Notes'}</th>
                  <th className="py-3 px-4 text-right font-semibold">{language === 'hi' ? 'कार्य' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {supplyLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 whitespace-nowrap font-medium text-slate-200">
                      {log.date}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      {log.electricityStatus === 'available' ? (
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {language === 'hi' ? 'उपलब्ध' : 'Available'}
                        </span>
                      ) : log.electricityStatus === 'partial' ? (
                        <span className="text-amber-400 font-semibold flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          {language === 'hi' ? 'आंशिक' : 'Partial'}
                        </span>
                      ) : (
                        <span className="text-rose-400 font-semibold flex items-center gap-1">
                          <XCircle className="w-3 h-3" />
                          {language === 'hi' ? 'बिजली कटौती' : 'Outage'}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className={log.pumpOperational ? 'text-cyan-300' : 'text-slate-500'}>
                        {log.pumpOperational ? (language === 'hi' ? 'चालू' : 'Run') : (language === 'hi' ? 'बंद' : 'Off')}
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap capitalize">
                      <span className={log.tankStatus === 'overflow' ? 'text-rose-400 font-bold' : 'text-slate-300'}>
                        {log.tankStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      {log.waterShortageObserved ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800">
                          {language === 'hi' ? 'संकट' : 'Yes'}
                        </span>
                      ) : (
                        <span className="text-slate-500">
                          {language === 'hi' ? 'नहीं' : 'No'}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-300 text-xs max-w-xs truncate">
                      {log.notes}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => deleteSupplyLog(log.id)}
                        className="p-1 rounded text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors"
                        title="Delete log"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
