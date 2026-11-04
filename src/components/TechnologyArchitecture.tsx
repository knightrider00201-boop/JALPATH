import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Cpu, 
  Database, 
  Workflow, 
  ShieldCheck, 
  FileSpreadsheet, 
  Printer, 
  CheckCircle, 
  AlertCircle,
  Laptop,
  ArrowRight,
  Layers
} from 'lucide-react';

export const TechnologyArchitecture: React.FC = () => {
  const { language, t } = useApp();

  const pipelineSteps = [
    {
      num: '01',
      titleEn: 'Data Collection',
      titleHi: 'डेटा संग्रह',
      descEn: 'Students and mentors record ground realities: tap leaks, tank overflows, and rainfall observations.',
      descHi: 'छात्र एवं शिक्षक वास्तविक जमीनी तथ्य दर्ज करते हैं: नल रिसाव, टंकी ओवरफ्लो और वर्षा अवलोकन।'
    },
    {
      num: '02',
      titleEn: 'Structured Storage',
      titleHi: 'व्यवस्थित भंडारण',
      descEn: 'Data persists client-side in browser LocalStorage. Operates 100% offline without remote servers.',
      descHi: 'डेटा ब्राउज़र के लोकल स्टोरेज में सुरक्षित रहता है। बिना इंटरनेट सर्वर के पूरी तरह ऑफलाइन कार्यशील।'
    },
    {
      num: '03',
      titleEn: 'Rule-Based Logic',
      titleHi: 'नियम-आधारित विश्लेषण',
      descEn: 'Deterministic algorithms evaluate recorded defects against hydrological thresholds and safety rules.',
      descHi: 'पारदर्शी प्रोग्रामिंग कोड दर्ज समस्याओं की जल विज्ञान और सुरक्षा नियमों के आधार पर समीक्षा करता है।'
    },
    {
      num: '04',
      titleEn: 'Practical Advice',
      titleHi: 'व्यावहारिक सुझाव',
      descEn: 'Actionable cards are surfaced specifying evidence, expected benefits, and priority levels.',
      descHi: 'प्रत्येक समस्या का प्रमाण, अपेक्षित लाभ और प्राथमिकता स्तर दर्शाने वाले स्पष्ट सुझाव तैयार होते हैं।'
    },
    {
      num: '05',
      titleEn: 'Human Verification',
      titleHi: 'वयस्क सत्यापन',
      descEn: 'Teachers, SMC members, and local technicians physically verify and authorize all repairs.',
      descHi: 'शिक्षक, प्रबंधन समिति एवं तकनीकी विशेषज्ञ भौतिक रूप से सुझावों का सत्यापन कर मरम्मत तय करते हैं।'
    },
    {
      num: '06',
      titleEn: 'Sustainable Action',
      titleHi: 'सतत सुधार',
      descEn: 'Taps are serviced, water registers maintained, and student Green Squads conserve water.',
      descHi: 'नलों की मरम्मत, जल रजिस्टर का संधारण और छात्र हरित दल द्वारा पानी की व्यवस्थित बचत।'
    }
  ];

  const technologies = [
    {
      name: 'HTML5 & Responsive Semantics',
      descEn: 'Mobile-first semantic document structure accessible on any phone, tablet, or PC.',
      descHi: 'किसी भी फोन, टैबलेट या कंप्यूटर पर सुगम मोबाइल-फर्स्ट संरचना।'
    },
    {
      name: 'Tailwind CSS & Aqua Design',
      descEn: 'Modern eco-technology palette with high contrast, glassmorphism, and responsive grid layouts.',
      descHi: 'पारिस्थितिक जल तकनीक आधारित आधुनिक डिजाइन, स्पष्ट दृश्यता और संतुलित लेआउट।'
    },
    {
      name: 'React 19 & TypeScript',
      descEn: 'Strictly typed reactive frontend with modular components and zero runtime type errors.',
      descHi: 'मजबूत टाइपस्क्रिप्ट और रिएक्ट आर्किटेक्चर जो बिना किसी त्रुटि के सुचारू कार्य करता है।'
    },
    {
      name: 'Browser LocalStorage',
      descEn: 'Zero-cloud persistent storage keeping school audits intact directly on local school devices.',
      descHi: 'विद्यालय के स्थानीय कंप्यूटर पर डेटा सुरक्षित रखने वाली क्लाउड-मुक्त मेमोरी।'
    },
    {
      name: 'Client-Side CSV Export Engine',
      descEn: 'Generates instant downloadable spreadsheets for school administration and SMC records.',
      descHi: 'विद्यालय प्रबंधन हेतु एक क्लिक में एक्सेल/CSV डेटा डाउनलोड करने की तकनीक।'
    },
    {
      name: 'A4 Print & PDF Stylesheet',
      descEn: 'Dedicated @media print stylesheet formatted specifically for A4 dossier export.',
      descHi: 'प्रिंट एवं A4 पीडीएफ दस्तावेज तैयार करने के लिए विशेष प्रिंट स्टाइलशीट।'
    }
  ];

  return (
    <section id="tech" className="py-16 bg-slate-950 border-b border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'प्रौद्योगिकी एवं इंजीनियरिंग' : 'Engineering Architecture'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.techTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {t.techSubtitle}
          </p>
        </div>

        {/* 6-Step Data & Decision Pipeline */}
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-6 text-center sm:text-left flex items-center gap-2 justify-center sm:justify-start">
            <Workflow className="w-4 h-4" />
            <span>{language === 'hi' ? 'जलपथ AI 6-चरणीय निर्णय पाइपलाइन:' : 'JALPATH AI 6-Step Decision Pipeline:'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-black text-cyan-400 mb-1">
                    {step.num}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {language === 'hi' ? step.titleHi : step.titleEn}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {language === 'hi' ? step.descHi : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Cards & Current Limitations side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Built Technologies */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>{language === 'hi' ? 'प्रयुक्त प्रौद्योगिकियां (Technologies Used)' : 'Implemented Technologies'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technologies.map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                  <span className="font-bold text-cyan-300 block mb-1">
                    {item.name}
                  </span>
                  <p className="text-slate-400 leading-relaxed">
                    {language === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Explicit Limitations Statement (Required) */}
          <div className="prototype-boundaries-card lg:col-span-5 bg-gradient-to-br from-slate-900 to-amber-950/20 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
            <h3 className="text-base font-bold text-amber-300 mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>{language === 'hi' ? 'वर्तमान प्रोटोटाइप की सीमाएं' : 'Current Prototype Boundaries'}</span>
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {language === 'hi'
                ? 'प्रतियोगिता में सत्यनिष्ठा बनाए रखने हेतु हम स्पष्ट करते हैं कि वर्तमान प्रोटोटाइप में निम्नलिखित शामिल नहीं हैं:'
                : 'In full accordance with Quest4Earth evaluation integrity, JALPATH AI operates with clear boundaries:'}
            </p>

            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span><strong>{language === 'hi' ? 'कोई रिमोट सर्वर नहीं:' : 'No Backend Server:'}</strong> {language === 'hi' ? 'डेटा केवल ब्राउज़र में सुरक्षित रहता है।' : 'Operates client-side in the browser.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span><strong>{language === 'hi' ? 'कोई लाइव हार्डवेयर सेंसर नहीं:' : 'No Live Sensors:'}</strong> {language === 'hi' ? 'प्रणाली मानवीय अवलोकनों पर आधारित है।' : 'Relies on structured human observations.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span><strong>{language === 'hi' ? 'कोई स्वचालित मोटर नियंत्रण नहीं:' : 'No Pump Actuation:'}</strong> {language === 'hi' ? 'प्रोटोटाइप वास्तविक पंप को चालू/बंद नहीं करता।' : 'Does not physically control machinery.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span><strong>{language === 'hi' ? 'पारदर्शी नियम, कोई ब्लैक-बॉक्स नहीं:' : 'Deterministic Logic:'}</strong> {language === 'hi' ? 'सुझाव पारदर्शी नियमों द्वारा तय होते हैं, किसी गुप्त AI द्वारा नहीं।' : 'No external paid API or black-box ML model.'}</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
