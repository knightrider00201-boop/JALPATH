import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  AlertCircle, 
  Compass, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldAlert, 
  Layers,
  Sparkles
} from 'lucide-react';

export const LimitationsFutureScope: React.FC = () => {
  const { language, t } = useApp();

  const limitations = [
    {
      en: 'Daily water consumption (litres/day) has not been physically measured.',
      hi: 'दैनिक जल खपत (लीटर/दिन) का अभी तक भौतिक मापन नहीं हुआ है।'
    },
    {
      en: 'Daily attendance figures are not digitally tracked (160 is total enrolled students).',
      hi: 'दैनिक उपस्थिति का डिजिटल रिकॉर्ड नहीं है (160 कुल नामांकित छात्र हैं)।'
    },
    {
      en: 'School roof catchment area has not yet been surveyed with a measuring tape.',
      hi: 'विद्यालय की छत के सटीक क्षेत्रफल की इंजीनियरिंग पैमाइश अभी नहीं हुई है।'
    },
    {
      en: 'Local rainfall depth is not measured with an on-campus rain gauge.',
      hi: 'विद्यालय परिसर में वर्षामापी यंत्र द्वारा वर्षा का सटीक रिकॉर्ड उपलब्ध नहीं है।'
    },
    {
      en: 'Zero water reaches the PVC pipe inlet through the current non-functional RWH setup.',
      hi: 'वर्तमान अकार्यशील व्यवस्था के कारण पीवीसी पाइप के इनलेट तक शून्य (0) पानी पहुँचता है।'
    },
    {
      en: 'Exact civil engineering cause of roof ponding is unverified pending professional inspection.',
      hi: 'छत पर पानी जमा होने का सटीक तकनीकी कारण अधिकृत इंजीनियरिंग सर्वेक्षण के बाद ही पुष्ट होगा।'
    },
    {
      en: 'Open recharge pit filter media permeability has not been independently lab-tested.',
      hi: 'पुनर्भरण गड्ढे की छनन क्षमता एवं भूमिगत संरचना की प्रयोगशाला जाँच नहीं हुई है।'
    },
    {
      en: 'Handpump water visual iron tint has not been confirmed via chemical water-quality test.',
      hi: 'चापाकल के पानी का हल्का लोहे जैसा रंग केवल दृश्य अवलोकन है, रासायनिक रूप से अप्रमाणित है।'
    },
    {
      en: 'The system contains no physical IoT sensors, flow meters, or automatic motor switches.',
      hi: 'प्रोटोटाइप में कोई भौतिक IoT सेंसर, फ्लो मीटर या स्वचालित मोटर स्विच नहीं हैं।'
    },
    {
      en: 'The AI Jal Advisor is a deterministic rule-based engine, not a live machine learning model.',
      hi: 'AI जल सलाहकार एक पारदर्शी नियम-आधारित प्रणाली है, कोई मशीन लर्निंग मॉडल नहीं।'
    },
    {
      en: 'Prototype data is stored in browser LocalStorage and does not physically repair infrastructure.',
      hi: 'डेटा ब्राउज़र के लोकल स्टोरेज में रहता है और यह भौतिक रूप से पाइप ठीक नहीं कर सकता।'
    }
  ];

  const futureRoadmap = [
    {
      num: '1',
      titleEn: 'Physical Catchment Survey',
      titleHi: 'छत के क्षेत्रफल की भौतिक पैमाइश',
      descEn: 'Collaborate with the block junior engineer to record exact roof square metres and elevation gradients.',
      descHi: 'प्रखंड कनिष्ठ अभियंता के साथ मिलकर छत के सटीक क्षेत्रफल और ढलान की माप दर्ज करना।'
    },
    {
      num: '2',
      titleEn: 'On-Campus Manual Rain Gauge',
      titleHi: 'विद्यालय में वर्षामापी यंत्र की स्थापना',
      descEn: 'Install a standard graduated rain gauge cylinder for student-led daily rainfall recording in monsoon.',
      descHi: 'मानसून के दौरान छात्रों द्वारा दैनिक वर्षा मापने हेतु मानक वर्षामापी यंत्र लगाना।'
    },
    {
      num: '3',
      titleEn: 'Authorized Civil Regrading',
      titleHi: 'छत के ढलान की तकनीकी मरम्मत',
      descEn: 'Construct mortar drainage ridges and adjust inlet collar height so water directly funnels into the downpipe.',
      descHi: 'नाली और इनलेट के मुहाने की मरम्मत ताकि छत का ठहरा हुआ पानी सीधे पाइप में जा सके।'
    },
    {
      num: '4',
      titleEn: 'Protective Slab for Recharge Pit',
      titleHi: 'पुनर्भरण कक्ष पर मजबूत सुरक्षा ढक्कन',
      descEn: 'Erect a heavy-duty child-safe concrete slab or metal grating to protect students and keep filter gravel clean.',
      descHi: '160 विद्यार्थियों की सुरक्षा हेतु गड्ढे पर पक्का ढक्कन लगाकर फिल्टर को कचरे से बचाना।'
    },
    {
      num: '5',
      titleEn: 'Mechanical Float Level Gauge',
      titleHi: 'टंकी में मैकेनिकल लेवल इंडिकेटर',
      descEn: 'Mount an external beaded float level gauge on the 500L tank to eliminate overflow into open drains.',
      descHi: '500L टंकी पर दृश्यमान लेवल इंडिकेटर लगाना ताकि पानी नाली में बहने से रोका जा सके।'
    },
    {
      num: '6',
      titleEn: 'Drinking Water PHED Testing',
      titleHi: 'सरकारी जल जाँच (PHED Lab Test)',
      descEn: 'Submit borewell and handpump water samples to the Public Health Engineering Department for certified testing.',
      descHi: 'पीएचईडी विभाग से बोरवेल एवं चापाकल के पानी की प्रयोगशाला जाँच कराकर प्रमाण पत्र प्राप्त करना।'
    },
    {
      num: '7',
      titleEn: 'Student Green Squads',
      titleHi: 'छात्र हरित दल (Green Squads)',
      descEn: 'Establish structured student pairings for morning bucket-and-mug garden care and monthly tap auditing.',
      descHi: 'नियमित बाल्टी-सिंचाई एवं मासिक नल ऑडिट के लिए छात्र दलों का गठन करना।'
    },
    {
      num: '8',
      titleEn: 'Model Scaling to Other Schools',
      titleHi: 'अन्य विद्यालयों में मॉडल का विस्तार',
      descEn: 'Share JALPATH AI open data framework with neighboring schools across Jama block and Dumka district.',
      descHi: 'जामा प्रखंड और दुमका जिले के अन्य विद्यालयों में इस जल प्रबंधन मॉडल को साझा करना।'
    }
  ];

  return (
    <section id="limitations" className="py-16 bg-slate-950/70 border-b border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'सत्यनिष्ठा एवं भविष्य दृष्टि' : 'Integrity & Vision'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.limitationsTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {t.limitationsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Column 1: Current Limitations */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  {language === 'hi' ? 'वर्तमान सीमाएं (Current Limitations)' : 'Current Limitations'}
                </h3>
                <span className="text-[11px] text-slate-400 font-medium">
                  {language === 'hi' ? 'वैज्ञानिक ईमानदारी का पालन' : 'Honest Engineering Disclosure'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              {language === 'hi'
                ? 'जलपथ AI एक फ्रंटएंड निर्णय-सहायता प्रोटोटाइप है। हम किसी भी काल्पनिक आँकड़े या अवास्तविक सेंसर का दावा नहीं करते:'
                : 'JALPATH AI is an educational decision-support prototype. We strictly disclose unmeasured parameters:'}
            </p>

            <div className="space-y-3">
              {limitations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{language === 'hi' ? item.hi : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Future Scope */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950/30 border border-cyan-800/80 shadow-xl">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-900/60">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  {language === 'hi' ? 'भविष्य की कार्ययोजना (Future Scope)' : 'Future Engineering Scope'}
                </h3>
                <span className="text-[11px] text-cyan-300 font-medium">
                  {language === 'hi' ? 'चरणबद्ध कार्यान्वयन योजना' : 'Phased Real-World Implementation'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              {language === 'hi'
                ? 'संसाधन एवं तकनीकी स्वीकृति मिलने पर विद्यालय में प्रस्तावित व्यावहारिक सुधार:'
                : 'Actionable improvements planned upon securing technical and institutional approval:'}
            </p>

            <div className="space-y-3.5">
              {futureRoadmap.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-4 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-300 flex items-center justify-center text-[10px] font-bold">
                      {item.num}
                    </span>
                    <span className="font-bold text-cyan-300">
                      {language === 'hi' ? item.titleHi : item.titleEn}
                    </span>
                  </div>
                  <p className="text-slate-400 pl-6 leading-relaxed">
                    {language === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
