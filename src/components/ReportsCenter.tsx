import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { KNOWN_VS_UNKNOWN_DATA, INITIAL_ADVISOR_RULES } from '../data/initialData';
import { 
  FileText, 
  Printer, 
  Download, 
  CheckCircle, 
  Building2, 
  Users, 
  Droplet, 
  AlertTriangle, 
  ShieldCheck,
  Award,
  Eye,
  X,
  Layers,
  Wrench,
  BookOpen,
  Loader2,
  FileDown
} from 'lucide-react';
import { downloadDossierPdf, generateNativeVectorPdf } from '../utils/pdfGenerator';

export const ReportsCenter: React.FC = () => {
  const { language, t, taps, supplyLogs, showToast } = useApp();
  const [previewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState<boolean>(false);
  const [pdfStatusMessage, setPdfStatusMessage] = useState<string>('');

  const handleDownloadPdf = async (forceVector: boolean = false) => {
    setIsDownloadingPdf(true);
    setPdfStatusMessage(language === 'hi' ? 'PDF तैयार की जा रही है...' : 'Initiating PDF build...');
    try {
      if (forceVector) {
        generateNativeVectorPdf({
          language,
          taps,
          supplyLogs,
          onProgress: (msg) => setPdfStatusMessage(msg)
        });
      } else {
        await downloadDossierPdf({
          language,
          taps,
          supplyLogs,
          elementId: 'dossier-printable-area',
          onProgress: (msg) => setPdfStatusMessage(msg)
        });
      }
      showToast(t.pdfSuccess);
    } catch (err) {
      console.error('PDF generation error:', err);
      // Fallback directly to native vector PDF
      generateNativeVectorPdf({
        language,
        taps,
        supplyLogs,
        onProgress: (msg) => setPdfStatusMessage(msg)
      });
      showToast(t.pdfSuccess);
    } finally {
      setIsDownloadingPdf(false);
      setPdfStatusMessage('');
    }
  };

  const handlePrint = () => {
    try {
      window.print();
    } catch (err) {
      console.warn('window.print error:', err);
      showToast(language === 'hi' ? 'प्रिंट डायलॉग उपलब्ध नहीं है, कृपया सीधा PDF डाउनलोड करें।' : 'Print dialog restricted in sandbox, downloading PDF directly.');
      handleDownloadPdf(true);
    }
  };

  const handleExportJson = () => {
    const fullData = {
      project: {
        name: 'JALPATH AI',
        fullName: 'AI-Assisted School Water Rescue & Rainwater Intelligence System',
        competition: 'Quest4Earth 2026',
        theme: 'Water Conservation & Sustainable Management',
        school: 'UPG M.S. DUDHANI-1, Jama, Dumka, Jharkhand',
        team: 'UDAAN TEAM',
        students: ['Archana Kumari', 'Sima Baski'],
        mentor: 'Somnath Pal (ICT Instructor)',
        tagline: 'Every Drop Has a Destination.'
      },
      baseline: {
        enrolledStudents: 160,
        teachers: 5,
        ictInstructor: 1,
        mdmCooks: 2,
        totalKnownPeople: 168,
        overheadTankLitres: 500,
        tankCondition: 'Minor damage / seepage; lasts ~1 day',
        burstTankIncident: 'Separate 1000L tank installed for borewell storage burst in 2 days and was discarded ~1 yr ago (NOT a rainwater tank)',
        rainwaterStatus: 'Non-functional: water gathers on roof for 2 days but 0 Litres reaches PVC pipe inlet',
        handpumpBackup: 'Located <50m from school; low yield; iron-tinted visual observation; lab test unperformed'
      },
      tapAudit: taps,
      waterSupplyLogs: supplyLogs,
      exportedAt: new Date().toISOString()
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(fullData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `jalpath_dossier_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    showToast(language === 'hi' ? 'संपूर्ण JSON डेटा डाउनलोड प्रारंभ' : 'Complete JSON dossier downloaded');
  };

  return (
    <section id="reports" className="py-20 bg-slate-950 border-b border-cyan-900/40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Hidden in Print) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 no-print">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'प्रतियोगिता रिपोर्ट केंद्र' : 'Official Dossier & PDF Center'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {t.reportsTitle}
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              {t.reportsSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Primary Direct PDF Download Button */}
            <button
              onClick={() => handleDownloadPdf(false)}
              disabled={isDownloadingPdf}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-black rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-slate-950 shadow-lg shadow-cyan-400/30 transition-all hover:scale-[1.03] active:scale-95 disabled:opacity-75 disabled:pointer-events-none"
            >
              {isDownloadingPdf ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>{pdfStatusMessage || t.downloadingPdf}</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4 text-slate-950" />
                  <span>{t.downloadPdf}</span>
                </>
              )}
            </button>

            {/* Quick Vector PDF Button */}
            <button
              onClick={() => handleDownloadPdf(true)}
              disabled={isDownloadingPdf}
              title={language === 'hi' ? 'त्वरित वेक्टर PDF डाउनलोड' : 'Instant Vector PDF Download'}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-bold rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-800/80 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'त्वरित PDF (Vector)' : 'Quick Vector PDF'}</span>
            </button>

            <button
              onClick={() => setPreviewModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all shadow-sm"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>{language === 'hi' ? 'A4 पूर्वावलोकन' : 'Preview A4'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-all"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span>{t.printPdf}</span>
            </button>

            <button
              onClick={handleExportJson}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{t.exportData}</span>
            </button>
          </div>
        </div>

        {/* PRINTABLE DOSSIER CARD CONTAINER - OPTIMIZED FOR A4 PRINT */}
        <div id="dossier-printable-area" className="rounded-3xl navy-card p-6 sm:p-12 shadow-2xl print-card print:p-0 print:border-none print:shadow-none">
          
          {/* COVER PAGE (Print Page 1) */}
          <div className="pb-10 border-b border-slate-800 print:border-slate-300 print:pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-md border border-cyan-700 print:bg-slate-100 print:text-cyan-900 print:border-slate-300">
                  Quest4Earth 2026 National Competition Entry
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 print-text-dark tracking-tight">
                  JALPATH AI
                </h1>
                <p className="text-base sm:text-lg font-semibold text-cyan-300 mt-1 print:text-cyan-800">
                  {t.appFullName}
                </p>
                <p className="text-sm italic text-slate-400 mt-1 print-text-muted">
                  &quot;{t.tagline}&quot;
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 space-y-1.5 print:bg-slate-50 print:border-slate-300 print-text-dark shrink-0">
                <div><strong>Theme:</strong> Water Conservation & Sustainable Management</div>
                <div><strong>School:</strong> UPG M.S. DUDHANI-1</div>
                <div><strong>Location:</strong> Block Jama, Dist. Dumka, Jharkhand, India</div>
                <div><strong>Team:</strong> UDAAN TEAM</div>
                <div><strong>Students:</strong> Archana Kumari, Sima Baski</div>
                <div><strong>Mentor:</strong> Somnath Pal (ICT Instructor)</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed print:bg-slate-50 print:border-slate-300 print-text-dark">
              <strong className="text-cyan-300 print:text-cyan-900">{language === 'hi' ? 'परियोजना सारांश:' : 'Executive Summary:'}</strong>{' '}
              {language === 'hi'
                ? 'जलपथ AI उत्क्रमित मध्य विद्यालय दुधानी-1 की वास्तविक जल समस्याओं पर केंद्रित एक कार्यशील निर्णय-समर्थन प्रणाली है। यह विद्यालय के बोरवेल पर अत्यधिक बिजली निर्भरता, नलों से रिसाव तथा वर्षा जल संचयन की मुख्य विफलता (जहाँ छत पर पानी जमा रहता है किंतु पीवीसी पाइप के इनलेट तक नहीं पहुँचता) का दस्तावेजीकरण और समाधान रोडमैप प्रस्तुत करता है।'
                : 'JALPATH AI is an evidence-based school water intelligence and decision-support prototype developed for UPG M.S. DUDHANI-1. It documents power-dependent borewell reliance, tap leakages, and diagnoses the critical failure in the campus rainwater harvesting installation where rain ponds on the roof but zero water reaches the collection pipe inlet.'}
            </div>
          </div>

          {/* Section 1: Verified Campus Baseline */}
          <div className="py-8 border-b border-slate-800 print:border-slate-300">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 print-text-dark">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>1. {language === 'hi' ? 'सत्यापित परिसर आधारभूत आँकड़े' : 'Verified Campus Baseline'}</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 print:border-slate-300 print:bg-slate-50">
                <span className="text-slate-400 block print-text-muted">{language === 'hi' ? 'नामांकित विद्यार्थी' : 'Enrolled Students'}</span>
                <span className="text-xl font-black text-white print-text-dark">160</span>
                <span className="text-[10px] text-slate-500 block">{language === 'hi' ? '(दैनिक उपस्थिति नहीं)' : '(Not attendance)'}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 print:border-slate-300 print:bg-slate-50">
                <span className="text-slate-400 block print-text-muted">{language === 'hi' ? 'कुल ज्ञात व्यक्ति' : 'Total Known People'}</span>
                <span className="text-xl font-black text-white print-text-dark">168</span>
                <span className="text-[10px] text-slate-500 block">160 + 5 + 1 + 2</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 print:border-slate-300 print:bg-slate-50">
                <span className="text-slate-400 block print-text-muted">{language === 'hi' ? 'मौजूदा टंकी' : 'Overhead Tank'}</span>
                <span className="text-xl font-black text-white print-text-dark">~500 L</span>
                <span className="text-[10px] text-slate-500 block">{language === 'hi' ? 'मामूली रिसाव/क्षतिग्रस्त' : 'Minor damage'}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 print:border-slate-300 print:bg-slate-50">
                <span className="text-slate-400 block print-text-muted">{language === 'hi' ? 'खराब नल' : 'Faulty Taps'}</span>
                <span className="text-xl font-black text-amber-400 print:text-amber-800">~3–4 / 10</span>
                <span className="text-[10px] text-slate-500 block">{language === 'hi' ? 'नुकसान अमापित' : 'Loss unmeasured'}</span>
              </div>
            </div>

            <div className="text-xs text-slate-300 leading-relaxed space-y-1.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 print:bg-slate-50 print:border-slate-300 print-text-dark">
              <p>
                <strong>{language === 'hi' ? 'टंकी संबंधित तथ्य:' : 'Historical Tank Clarification:'}</strong>{' '}
                {language === 'hi'
                  ? 'लगभग 1 वर्ष पूर्व बोरवेल जल हेतु 1000 लीटर की अलग टंकी लगाई गई थी जो 2 दिन में फट गई और हटा दी गई। वह वर्षा जल संचयन टंकी नहीं थी।'
                  : 'A separate 1000L tank was installed ~1 yr ago for borewell storage, burst in 2 days, and was discarded. It was NOT a rainwater harvesting tank.'}
              </p>
              <p>
                <strong>{language === 'hi' ? 'वैकल्पिक चापाकल:' : 'Backup Handpump:'}</strong>{' '}
                {language === 'hi'
                  ? 'विद्यालय से 50 मीटर से कम दूरी पर स्थित चापाकल का पानी हल्का लोहे जैसा दिखता है, जिसकी लैब जाँच अभी नहीं हुई है।'
                  : 'Located <50m away; low yield; iron-tinted visual observation; chemical laboratory analysis unperformed.'}
              </p>
            </div>
          </div>

          {/* Section 2: Critical Rainwater Harvesting Diagnosis (Print Page Break) */}
          <div className="py-8 border-b border-slate-800 print:border-slate-300 print-page-break">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 print-text-dark">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span>2. {language === 'hi' ? 'वर्षा जल संचयन विफलता: तकनीकी निदान' : 'Rainwater Harvesting: Critical Failure Diagnosis'}</span>
            </h3>

            <div className="p-4 rounded-xl bg-red-950/30 border border-red-800 text-xs text-red-200 leading-relaxed mb-4 print:bg-red-50 print:border-red-300 print:text-red-900">
              <p className="font-bold mb-1">
                {language === 'hi' ? 'सत्यापित विफलता बिंदु: छत → इनलेट (Roof → Inlet Disconnect)' : 'Verified Failure Point: Roof → Inlet Disconnect'}
              </p>
              <p>
                {language === 'hi'
                  ? 'विद्यालय की आरसीसी छत पर वर्षा का जल लगभग दो दिन तक जमा रहता है, किंतु वर्तमान व्यवस्था से पीवीसी पाइप के इनलेट तक शून्य (0) पानी पहुँचता है। यह कोई चोक पाइप नहीं है; मुख्य अवलोकन यह है कि पानी इनलेट तक पहुँचता ही नहीं है। इस कारण नीचे जाने वाला पाइप और भूजल पुनर्भरण कक्ष पूरी तरह अप्रयुक्त और सूखे रहते हैं।'
                  : 'Rainwater accumulates on the RCC roof for approximately two days after rainfall, but ZERO water reaches the PVC pipe inlet. Water pools away from the single corner intake. This is not an assumed clogged pipe; confirmed observation proves water never reaches the intake. Consequently, vertical conveyance downpipe and recharge chamber remain dry and harvest 0 Litres.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 print-text-dark mb-4">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 print:border-slate-300 print:bg-slate-50">
                <strong>{language === 'hi' ? 'पुनर्भरण कक्ष की स्थिति:' : 'Recharge Chamber Condition:'}</strong>
                <p className="mt-1 text-slate-400 print-text-muted">
                  {language === 'hi'
                    ? 'जमीन पर स्थित खुला गड्ढा जिसमें गिट्टी और नीचे मिट्टी है; नीचे का पाइप बोरे से ढका है; कोई सुरक्षा ढक्कन नहीं है।'
                    : 'Open ground pit with gravel/soil; bottom pipe tied with sack; NO protective lid (safety risk).'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 print:border-slate-300 print:bg-slate-50">
                <strong>{language === 'hi' ? 'सैद्धांतिक सूत्र:' : 'Hydrological Formula:'}</strong>
                <p className="mt-1 font-mono text-cyan-300 print:text-cyan-800">
                  Volume (L) = Roof Area (m²) × Rainfall (mm) × Runoff Coeff. × Efficiency
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Tap Audit Status */}
          <div className="py-8 border-b border-slate-800 print:border-slate-300">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 print-text-dark">
              <Droplet className="w-4 h-4 text-cyan-400" />
              <span>3. {language === 'hi' ? 'नल ऑडिट पंजी (10 नल पूर्ण रिकॉर्ड)' : 'Complete Water Tap Audit Register (10 Taps)'}</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-800 print:border-slate-300">
                <thead className="bg-slate-950 text-slate-400 print:bg-slate-100 print-text-dark">
                  <tr>
                    <th className="p-2.5 border-b border-slate-800 print:border-slate-300">ID</th>
                    <th className="p-2.5 border-b border-slate-800 print:border-slate-300">{language === 'hi' ? 'नाम एवं स्थान' : 'Tap Name & Location'}</th>
                    <th className="p-2.5 border-b border-slate-800 print:border-slate-300">{language === 'hi' ? 'स्थिति' : 'Condition'}</th>
                    <th className="p-2.5 border-b border-slate-800 print:border-slate-300">{language === 'hi' ? 'टिप्पणी' : 'Audit Notes'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 print:divide-slate-300 print-text-dark">
                  {taps.map((tap) => (
                    <tr key={tap.id}>
                      <td className="p-2.5 font-bold text-cyan-400 print:text-cyan-800">{tap.id}</td>
                      <td className="p-2.5">{language === 'hi' ? tap.nameHi : tap.name}</td>
                      <td className="p-2.5 font-semibold capitalize">{tap.condition.replace('_', ' ')}</td>
                      <td className="p-2.5 text-slate-400 print-text-muted">{language === 'hi' ? tap.notesHi : tap.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Key Recommendations & Conclusion */}
          <div className="pt-8">
            <h3 className="text-lg font-bold text-white mb-4 print-text-dark">
              4. {language === 'hi' ? 'प्राथमिकता कार्ययोजना एवं निष्कर्ष' : 'Priority Action Plan & Conclusion'}
            </h3>

            <div className="text-xs text-slate-300 leading-relaxed space-y-2.5 print-text-dark mb-6">
              <p>
                <strong>1. {language === 'hi' ? 'छत के ढलान का सर्वेक्षण:' : 'Civil Survey of Roof Slope:'}</strong>{' '}
                {language === 'hi'
                  ? 'योग्य तकनीकी दल से छत के ढलान और इनलेट की ऊँचाई का निरीक्षण कराकर गाइड नाली बनवाना।'
                  : 'Engage block technical engineers to re-evaluate roof slope and adjust the PVC inlet elevation.'}
              </p>
              <p>
                <strong>2. {language === 'hi' ? 'पुनर्भरण गड्ढे पर ढक्कन:' : 'Recharge Chamber Protective Cover:'}</strong>{' '}
                {language === 'hi'
                  ? '160 बच्चों की सुरक्षा हेतु जमीन के खुले गड्ढे पर तुरंत पक्का आरसीसी स्लैब या जालीदार ढक्कन लगाना।'
                  : 'Immediately cover the ground pit with an engineered safety slab to protect children and prevent clogging.'}
              </p>
              <p>
                <strong>3. {language === 'hi' ? 'नल मरम्मत एवं बाल्टी सिंचाई:' : 'Tap Overhaul & Garden Bucket Irrigation:'}</strong>{' '}
                {language === 'hi'
                  ? 'स्थानीय प्लंबर से 3-4 खराब नलों की मरम्मत तथा वाटिका में होज़ के स्थान पर बाल्टी-मग प्रणाली लागू करना।'
                  : 'Replace worn washers across reported faulty taps and shift garden watering from unmeasured hose to bucket/mug.'}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 print:border-slate-300 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 print-text-muted">
              <span>Quest4Earth 2026 • UDAAN TEAM • UPG M.S. DUDHANI-1</span>
              <span className="font-bold text-cyan-300 print:text-cyan-800 mt-2 sm:mt-0">
                {language === 'hi' ? 'हर बूँद का एक गंतव्य है।' : 'Every Drop Has a Destination.'}
              </span>
            </div>
          </div>

        </div>

        {/* FULL A4 PREVIEW MODAL */}
        {previewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
            <div className="w-full max-w-4xl bg-slate-900 border border-cyan-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    A4 Report Document Preview
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {language === 'hi' ? 'Quest4Earth 2026 संपूर्ण परियोजना डोजियर' : 'Quest4Earth 2026 Official Project Dossier'}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleDownloadPdf(false)}
                    disabled={isDownloadingPdf}
                    className="px-4 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 flex items-center gap-1.5 shadow-md disabled:opacity-75"
                  >
                    {isDownloadingPdf ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>{pdfStatusMessage || t.downloadingPdf}</span>
                      </>
                    ) : (
                      <>
                        <FileDown className="w-3.5 h-3.5" />
                        <span>{t.downloadPdf}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handlePrint}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 border border-slate-700"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{t.printPdf}</span>
                  </button>

                  <button
                    onClick={() => setPreviewModalOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
                <p className="text-cyan-200">
                  {language === 'hi' 
                    ? 'यह दस्तावेज़ A4 मानक आकार में प्रिंट होने के लिए पूरी तरह अनुकूलित है। ब्राउज़र के प्रिंट डायलॉग में "Save as PDF" चुनकर इसे उच्च गुणवत्ता वाली PDF के रूप में सहेजा जा सकता है।'
                    : 'This document is formatted with precise CSS print page breaks, page numbers, and Noto Sans Devanagari typography for clean A4 printing.'}
                </p>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="font-bold text-white">Included Dossier Sections:</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                    <li>Official Cover Page with Quest4Earth 2026 Theme & School Credentials</li>
                    <li>Verified Campus Population (160 Enrolled, 168 Total Known People)</li>
                    <li>Rainwater Harvesting Failure Analysis (Roof Ponding vs Zero Inlet Entry)</li>
                    <li>10-Tap Digital Audit Register with Location & Maintenance Notes</li>
                    <li>Hydrological Rainwater Potential Formula & Demonstration Yield</li>
                    <li>AI Jal Advisor Transparent Decision Rules & Safety Disclaimers</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-800 mt-6">
                <button
                  onClick={() => setPreviewModalOpen(false)}
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  {language === 'hi' ? 'बंद करें' : 'Close Preview'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
