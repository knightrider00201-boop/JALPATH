import { TapRecord, WaterSupplyLog, DiagnosticStage, AdvisorRecommendation, QuizQuestion } from '../types';

export const INITIAL_TAPS: TapRecord[] = [
  {
    id: 'TAP-01',
    name: 'Tap 01 - Boys Toilet Block',
    nameHi: 'नल 01 - बालक शौचालय',
    location: 'Boys Toilet Entry',
    locationHi: 'बालक शौचालय प्रवेश द्वार',
    condition: 'working',
    lastInspected: '2026-10-24',
    inspector: 'Somnath Pal (Mentor)',
    notes: 'Adequate flow, no visible dripping when closed.',
    notesHi: 'संतोषजनक जल प्रवाह, बंद रहने पर कोई रिसाव नहीं।',
    isReportedFaulty: false,
  },
  {
    id: 'TAP-02',
    name: 'Tap 02 - Boys Urinal Area',
    nameHi: 'नल 02 - बालक मूत्रालय',
    location: 'Boys Urinal',
    locationHi: 'बालक मूत्रालय परिसर',
    condition: 'working',
    lastInspected: '2026-10-24',
    inspector: 'Somnath Pal (Mentor)',
    notes: 'Valve functions smoothly.',
    notesHi: 'वाल्व सामान्य रूप से कार्य कर रहा है।',
    isReportedFaulty: false,
  },
  {
    id: 'TAP-03',
    name: 'Tap 03 - Girls Toilet Block',
    nameHi: 'नल 03 - बालिका शौचालय',
    location: 'Girls Toilet Corridor',
    locationHi: 'बालिका शौचालय गलियारा',
    condition: 'leaking',
    lastInspected: '2026-10-26',
    inspector: 'Archana Kumari (Student)',
    notes: 'Reported faulty: Slow steady drip even after tightening knob.',
    notesHi: 'खराब होने की सूचना: कसकर बंद करने पर भी बूँद-बूँद टपकता रहता है।',
    isReportedFaulty: true,
  },
  {
    id: 'TAP-04',
    name: 'Tap 04 - Girls Washbasin',
    nameHi: 'नल 04 - बालिका वाशबेसिन',
    location: 'Girls Handwashing Area',
    locationHi: 'बालिका हाथ धुलाई क्षेत्र',
    condition: 'working',
    lastInspected: '2026-10-24',
    inspector: 'Sima Baski (Student)',
    notes: 'Operates normally.',
    notesHi: 'सामान्य रूप से कार्य कर रहा है।',
    isReportedFaulty: false,
  },
  {
    id: 'TAP-05',
    name: 'Tap 05 - Mid-Day Meal Kitchen Exterior',
    nameHi: 'नल 05 - मध्याह्न भोजन रसोई बाह्य',
    location: 'MDM Kitchen Wash Area',
    locationHi: 'मध्याह्न भोजन धुलाई क्षेत्र',
    condition: 'not_closing',
    lastInspected: '2026-10-27',
    inspector: 'Somnath Pal & MDM Cook',
    notes: 'Reported faulty: Thread worn out; occasionally left open or loosely shut.',
    notesHi: 'खराब होने की सूचना: चूड़ी (थ्रेड) घिस गई है, कई बार खुला या ढीला छूट जाता है।',
    isReportedFaulty: true,
  },
  {
    id: 'TAP-06',
    name: 'Tap 06 - Mid-Day Meal Utensil Cleaning',
    nameHi: 'नल 06 - मध्याह्न भोजन बर्तन धुलाई',
    location: 'Utensil Washing Slab',
    locationHi: 'बर्तन धुलाई चबूतरा',
    condition: 'working',
    lastInspected: '2026-10-25',
    inspector: 'Somnath Pal (Mentor)',
    notes: 'High usage during lunch hour; shut securely by cook.',
    notesHi: 'भोजन के समय अत्यधिक उपयोग; रसोइया द्वारा ठीक से बंद किया जाता है।',
    isReportedFaulty: false,
  },
  {
    id: 'TAP-07',
    name: 'Tap 07 - Central Handwashing Station #1',
    nameHi: 'नल 07 - केंद्रीय हाथ धुलाई केंद्र #1',
    location: 'Main School Courtyard',
    locationHi: 'मुख्य विद्यालय प्रांगण',
    condition: 'leaking',
    lastInspected: '2026-10-27',
    inspector: 'Archana Kumari (Student)',
    notes: 'Reported faulty: Rubber washer deteriorated; continuous minor trickle.',
    notesHi: 'खराब होने की सूचना: वॉशर खराब होने से निरंतर धीमा रिसाव।',
    isReportedFaulty: true,
  },
  {
    id: 'TAP-08',
    name: 'Tap 08 - Central Handwashing Station #2',
    nameHi: 'नल 08 - केंद्रीय हाथ धुलाई केंद्र #2',
    location: 'Main School Courtyard',
    locationHi: 'मुख्य विद्यालय प्रांगण',
    condition: 'damaged',
    lastInspected: '2026-10-28',
    inspector: 'Sima Baski (Student)',
    notes: 'Reported faulty: Handle chipped, requires extra pressure to stop.',
    notesHi: 'खराब होने की सूचना: हैंडल थोड़ा क्षतिग्रस्त है, बंद करने में अतिरिक्त दबाव चाहिए।',
    isReportedFaulty: true,
  },
  {
    id: 'TAP-09',
    name: 'Tap 09 - Garden Irrigation Point',
    nameHi: 'नल 09 - वाटिका सिंचाई बिंदु',
    location: 'School Garden Boundary',
    locationHi: 'विद्यालय वाटिका सीमा',
    condition: 'needs_verification',
    lastInspected: '2026-10-20',
    inspector: 'Unverified Observation',
    notes: 'Hose pipe connection attached; physical leakage verification pending.',
    notesHi: 'होज़ पाइप जुड़ा है; रिसाव का भौतिक सत्यापन शेष है।',
    isReportedFaulty: false,
  },
  {
    id: 'TAP-10',
    name: 'Tap 10 - Drinking Filter Supply Tap',
    nameHi: 'नल 10 - पेयजल फिल्टर आपूर्ति नल',
    location: 'Filter Stand Corridor',
    locationHi: 'फिल्टर स्टैंड गलियारा',
    condition: 'working',
    lastInspected: '2026-10-26',
    inspector: 'Somnath Pal (Mentor)',
    notes: 'Supplies raw water to ceramic candle filter. No active leak.',
    notesHi: 'कैंडल फिल्टर को पानी देता है। कोई रिसाव नहीं पाया गया।',
    isReportedFaulty: false,
  },
];

export const INITIAL_SUPPLY_LOGS: WaterSupplyLog[] = [
  {
    id: 'LOG-001',
    date: '2026-10-28',
    electricityStatus: 'available',
    pumpOperational: true,
    tankStatus: 'full',
    waterShortageObserved: false,
    leakageObserved: true,
    notes: 'Overhead 500L tank filled in morning. Minor seepage observed around tank base seam.',
  },
  {
    id: 'LOG-002',
    date: '2026-10-29',
    electricityStatus: 'outage',
    pumpOperational: false,
    tankStatus: 'low',
    waterShortageObserved: true,
    leakageObserved: false,
    notes: '4-hour electricity cut. Used nearby handpump (<50m). Low water yield, faint iron tint.',
  },
  {
    id: 'LOG-003',
    date: '2026-10-30',
    electricityStatus: 'available',
    pumpOperational: true,
    tankStatus: 'overflow',
    waterShortageObserved: false,
    leakageObserved: true,
    notes: 'Manual motor operation delayed by 10 minutes; water overflowed into drainage ditch.',
  },
  {
    id: 'LOG-004',
    date: '2026-10-31',
    electricityStatus: 'available',
    pumpOperational: true,
    tankStatus: 'half',
    waterShortageObserved: false,
    leakageObserved: false,
    notes: 'Normal school day. Water lasted the full day for MDM and sanitation.',
  },
];

export const DIAGNOSTIC_STAGES: DiagnosticStage[] = [
  {
    id: 'roof',
    titleEn: '1. School RCC Roof',
    titleHi: '1. विद्यालय की आरसीसी (RCC) छत',
    status: 'accumulating',
    observationEn: 'Reinforced Concrete (RCC) roof has both flat and slightly sloped sections. Following rain events, rainwater accumulates and remains ponding on the roof surface for approximately two days. Dampness is occasionally observed in rooms directly below.',
    observationHi: 'विद्यालय की आरसीसी छत पर कुछ हिस्सा समतल और कुछ ढलानदार है। वर्षा के बाद पानी छत पर लगभग दो दिनों तक जमा (ठहरा) रहता है। नीचे के कमरों की छतों में कभी-कभी सीलन दिखाई देती है।',
    conditionEn: 'Rainwater accumulates and stays for ~2 days after rainfall.',
    conditionHi: 'वर्षा का जल लगभग 2 दिनों तक छत पर जमा रहता है।',
    whyItMattersEn: 'Standing water causes long-term structural seepage, room dampness, and breeds mosquitoes, instead of flowing toward harvesting infrastructure.',
    whyItMattersHi: 'छत पर ठहरा हुआ पानी कमरों में सीलन लाता है, संरचना को नुकसान पहुँचाता है और मच्छर पनपने का कारण बनता है।',
    inspectionPointsEn: [
      'Slope gradient toward the designated drainage corner',
      'Surface depressions where water puddles instead of moving',
      'Structural integrity and waterproofing coat'
    ],
    inspectionPointsHi: [
      'जल निकासी वाले कोने की ओर छत का ढलान (Slope)',
      'छत के वे गड्ढे जहाँ पानी ठहर जाता है',
      'छत की मजबूती एवं जलरोधी परत (Waterproofing)'
    ],
    suggestedActionEn: 'Adult civil inspection to survey roof leveling and determine if regrading or secondary drainage channels can guide standing water to an intake.',
    suggestedActionHi: 'वयस्क तकनीकी विशेषज्ञ द्वारा छत के ढलान का सर्वेक्षण कराकर पानी को मुहाने तक पहुँचाने का रास्ता बनाना।',
    safetyDisclaimerEn: 'SAFETY MANDATE: Students must never climb the roof under any circumstances. Physical surveys must only be conducted by school authorities and qualified technicians.',
    safetyDisclaimerHi: 'सुरक्षा निर्देश: किसी भी स्थिति में विद्यार्थी छत पर न चढ़ें। भौतिक सर्वेक्षण केवल विद्यालय अधिकारियों व तकनीकी विशेषज्ञों द्वारा ही किया जाए।'
  },
  {
    id: 'inlet',
    titleEn: '2. Rainwater Collection Inlet',
    titleHi: '2. वर्षा जल संग्रहण इनलेट (प्रवेश मुहाना)',
    status: 'failure_point',
    observationEn: 'CRITICAL FAILURE POINT: There is a single PVC pipe connection at a corner of the roof. According to verified school observation, ZERO rainwater reaches the collection pipe inlet through the current arrangement. Water pools away from the intake.',
    observationHi: 'विफलता का मुख्य बिंदु: छत के एक कोने में एक पीवीसी पाइप लगा है। सत्यापित अवलोकन के अनुसार वर्तमान व्यवस्था से इस इनलेट तक शून्य (0) पानी पहुँचता है। पानी इनलेट से दूर जमा रहता है।',
    conditionEn: 'Rainwater fails to reach the PVC pipe inlet. 0 Litres entered.',
    conditionHi: 'वर्षा का पानी पीवीसी इनलेट तक बिल्कुल नहीं पहुँचता। 0 लीटर प्रवेश।',
    whyItMattersEn: 'If water never reaches the intake inlet, no rainwater harvesting can ever take place, regardless of the quality of pipes, filters, or recharge pits downstream.',
    whyItMattersHi: 'यदि पानी इनलेट तक ही नहीं पहुँचेगा, तो आगे पाइप या गड्ढा कितना भी अच्छा हो, वर्षा जल संचयन कभी नहीं हो सकता।',
    inspectionPointsEn: [
      'Relative elevation: Is the inlet opening positioned higher than the surrounding roof puddle level?',
      'Distance between water pooling depression and the intake opening',
      'Presence of physical obstructions, raised lip, or reversed slope at the pipe entrance'
    ],
    inspectionPointsHi: [
      'ऊँचाई का अंतर: क्या इनलेट का मुहाना छत पर जमे पानी के स्तर से ऊँचा है?',
      'पानी के ठहराव और पाइप के मुहाने के बीच की दूरी',
      'पाइप के मुहाने पर कोई रुकावट या विपरीत ढलान तो नहीं है'
    ],
    suggestedActionEn: 'Request an authorized civil inspection of the inlet lip height, roof slope alignment, and potential funneling channel installation.',
    suggestedActionHi: 'अधिकृत तकनीकी दल द्वारा इनलेट की ऊँचाई और नाली के ढलान की जाँच कर पानी को इनलेट में निर्देशित करने की योजना बनाना।',
    safetyDisclaimerEn: 'Students must not inspect or lean over roof parapets or edges.',
    safetyDisclaimerHi: 'विद्यार्थी छत की मुंडेर या किनारों पर झुककर निरीक्षण न करें।'
  },
  {
    id: 'pvc_pipe',
    titleEn: '3. Vertical PVC Downpipe',
    titleHi: '3. लंबवत पीवीसी डाउनपाइप (Downpipe)',
    status: 'no_water',
    observationEn: 'A single external vertical PVC pipe runs down the exterior wall toward the ground. Because zero water reaches the collection inlet on the roof, no rainwater flows through this pipe during storms. (NOTE: Do not assume the pipe is blocked; the confirmed observation is that water never reaches the inlet).',
    observationHi: 'दीवार के सहारे एक पीवीसी पाइप नीचे जाता है। चूंकि छत के इनलेट में पानी प्रवेश ही नहीं करता, इसलिए इस पाइप से कोई पानी नहीं बहता। (नोट: इसे बंद पाइप न समझें, वास्तविक अवलोकन यह है कि पानी इनलेट तक ही नहीं पहुँचता)।',
    conditionEn: 'Zero water flow transmitted through current arrangement.',
    conditionHi: 'वर्तमान व्यवस्था में कोई पानी प्रवाहित नहीं होता।',
    whyItMattersEn: 'The vertical conveyance line remains entirely dry and unused during monsoon rains.',
    whyItMattersHi: 'मानसून की बारिश में भी यह पाइप पूरी तरह सूखा और अप्रयुक्त रहता है।',
    inspectionPointsEn: [
      'Pipe alignment, secure clamping to the exterior wall, and joint seals',
      'First-flush diverter absence or presence',
      'Pipe diameter adequacy for roof catchment area once flow is established'
    ],
    inspectionPointsHi: [
      'पाइप का सीधा जुड़ाव, दीवार पर क्लैंप और जोड़ों की मजबूती',
      'आरंभिक गंदे पानी को अलग करने वाले डाइवर्टर की स्थिति',
      'पानी का प्रवाह शुरू होने पर पाइप के व्यास (चौड़ाई) की पर्याप्तता'
    ],
    suggestedActionEn: 'Verify physical pipe alignment and wall clamps from ground level. Keep pipe clean of external debris.',
    suggestedActionHi: 'जमीन से खड़े होकर पाइप की स्थिति और क्लैंप की मजबूती का निरीक्षण करें।',
    safetyDisclaimerEn: 'Do not climb ladders or exterior walls to inspect pipe fittings.',
    safetyDisclaimerHi: 'पाइप देखने के लिए सीढ़ी या बाहरी दीवारों पर न चढ़ें।'
  },
  {
    id: 'recharge_chamber',
    titleEn: '4. Open Recharge Chamber',
    titleHi: '4. खुला भूजल पुनर्भरण कक्ष (Recharge Chamber)',
    status: 'non_functional',
    observationEn: 'An open recharge pit exists at ground level. It has stone chips / gravel inside, soil below, and a pipe at the bottom covered or closed with sack material. Crucially, it has NO protective lid or barrier, posing a safety concern. Zero rainwater currently reaches this chamber.',
    observationHi: 'जमीन पर एक खुला पुनर्भरण गड्ढा है जिसमें गिट्टी/कंक्रीट और नीचे मिट्टी है। नीचे का एक पाइप बोरे से ढका/बंद है। सबसे अहम बात: इस पर कोई सुरक्षा ढक्कन नहीं है, जो खतरे का कारण है। वर्तमान में इसमें कोई वर्षा जल नहीं पहुँचता।',
    conditionEn: 'Open, unshielded pit; covered bottom pipe; no water arriving.',
    conditionHi: 'बिना ढक्कन का खुला गड्ढा; बोरे से बंधा पाइप; कोई पानी नहीं पहुँच रहा।',
    whyItMattersEn: 'An open pit is a severe hazard for children, collects windblown litter, and cannot recharge groundwater without water input.',
    whyItMattersHi: 'बिना ढक्कन का खुला गड्ढा बच्चों के लिए दुर्घटना का खतरा है, इसमें कचरा गिरता है और पानी न आने से यह निष्प्रभावी है।',
    inspectionPointsEn: [
      'Urgent need for a sturdy child-safe protective cover/slab',
      'Condition and permeability of the filter media layers (gravel/sand)',
      'Status and function of the sack-covered bottom discharge pipe'
    ],
    inspectionPointsHi: [
      'बच्चों की सुरक्षा हेतु पक्के ढक्कन (कवर) की तत्काल आवश्यकता',
      'गिट्टी/बालू की छनन परतों की स्थिति एवं जल अवशोषण क्षमता',
      'बोरे से बंधे निचले पाइप की तकनीकी जाँच'
    ],
    suggestedActionEn: 'School authorities must urgently arrange a durable safety lid/grating over the pit, followed by qualified hydrological evaluation of filter media.',
    suggestedActionHi: 'विद्यालय प्रबंधन सर्वप्रथम गड्ढे पर सुरक्षा ढक्कन लगवाए, फिर जल विशेषज्ञ से फिल्टर मीडिया की जाँच कराए।',
    safetyDisclaimerEn: 'STRICT WARNING: Children must stay away from the open pit. Do not throw objects or enter the chamber.',
    safetyDisclaimerHi: 'सख्त चेतावनी: बच्चे खुले गड्ढे से दूर रहें। इसमें कचरा न डालें और अंदर न उतरें।'
  },
  {
    id: 'groundwater',
    titleEn: '5. Groundwater Aquifer',
    titleHi: '5. भूमिगत जल स्तर (Groundwater Aquifer)',
    status: 'unverified',
    observationEn: 'Because zero rainwater enters the collection inlet and reaches the recharge chamber, this arrangement currently contributes zero recharge to the local aquifer. The school borewell draws water from this aquifer, which is vulnerable during summer power cuts.',
    observationHi: 'चूंकि वर्षा का पानी इनलेट और पुनर्भरण कक्ष तक पहुँचता ही नहीं, अतः इस व्यवस्था से भूजल में शून्य पुनर्भरण हो रहा है। विद्यालय का बोरवेल इसी भूजल पर निर्भर है।',
    conditionEn: 'Zero recharge achieved through current non-functional system.',
    conditionHi: 'वर्तमान अकार्यशील व्यवस्था से शून्य (0) भूजल पुनर्भरण।',
    whyItMattersEn: 'Without groundwater recharge, the water table continues to drop, reducing borewell yield and exacerbating water scarcity in Jama block.',
    whyItMattersHi: 'भूजल पुनर्भरण के अभाव में जलस्तर नीचे गिरता है, जिससे गर्मी के दिनों में बोरवेल व चापाकल का जल स्तर घट जाता है।',
    inspectionPointsEn: [
      'Subsurface water table depth in Dumka/Jama during pre-monsoon vs post-monsoon',
      'Local soil percolation rate',
      'Borewell yield and recovery time'
    ],
    inspectionPointsHi: [
      'दुमका/जामा क्षेत्र में मानसून पूर्व और पश्चात का भूजल स्तर',
      'स्थानीय मिट्टी की जल अवशोषण क्षमता',
      'बोरवेल का जल स्तर एवं पुनः भराव समय'
    ],
    suggestedActionEn: 'Once the physical roof inlet and chamber are re-engineered, monitor static water levels in surrounding wells across seasons.',
    suggestedActionHi: 'छत के इनलेट और गड्ढे की तकनीकी मरम्मत के बाद मौसम के अनुसार आसपास के कुओं के जलस्तर का अवलोकन करें।',
    safetyDisclaimerEn: 'Groundwater assessment should be referenced from official Central Ground Water Board (CGWB) records.',
    safetyDisclaimerHi: 'भूजल संबंधित जानकारी हेतु सरकारी भूजल बोर्ड के आधिकारिक आँकड़ों का संदर्भ लें।'
  }
];

export const INITIAL_ADVISOR_RULES: AdvisorRecommendation[] = [
  {
    id: 'ADV-01',
    category: 'rainwater',
    titleEn: 'Critical: Resolve Roof-to-Inlet Rainwater Disconnect',
    titleHi: 'अति आवश्यक: छत से इनलेट तक वर्षा जल प्रवाह सुनिश्चित करें',
    evidenceEn: 'School reports water ponding on the RCC roof for ~2 days after rain, but 0 Litres reaches the PVC pipe inlet.',
    evidenceHi: 'सत्यापित अवलोकन: बारिश के बाद छत पर 2 दिन पानी ठहरा रहता है परंतु पीवीसी इनलेट में 0 लीटर पानी पहुँचता है।',
    possibleReasonEn: 'Unverified: Inlet may be elevated above roof slope drainage gradient, or roof slope directs flow away from the single corner pipe.',
    possibleReasonHi: 'अपुष्ट संभावित कारण: इनलेट का मुहाना छत के ढलान से ऊँचा हो सकता है, अथवा ढलान पानी को कोने के पाइप से विपरीत दिशा में ले जाता है।',
    actionEn: 'Request an official technical civil inspection to measure roof levels and construct a mortar guide ridge or reposition the drainage intake.',
    actionHi: 'छत के ढलान की तकनीकी माप कराकर जल निकासी गाइड (नाली) बनवाने हेतु अधिकृत तकनीकी निरीक्षण का अनुरोध करें।',
    benefitEn: 'Unlocks harvesting potential of the entire school roof and stops structural roof seepage into classrooms.',
    benefitHi: 'पूरी छत के वर्षा जल का संचयन संभव होगा और नीचे के कमरों में सीलन की समस्या समाप्त होगी।',
    responsiblePartyEn: 'School Management Committee (SMC) & Block Education Officer / Junior Engineer',
    responsiblePartyHi: 'विद्यालय प्रबंधन समिति (SMC) एवं प्रखंड कनिष्ठ अभियंता',
    priority: 'high',
    requiresAdultVerification: true,
  },
  {
    id: 'ADV-02',
    category: 'rainwater',
    titleEn: 'Safety Urgent: Cover Open Recharge Chamber',
    titleHi: 'सुरक्षा सर्वोपरि: खुले पुनर्भरण कक्ष पर ढक्कन लगाएं',
    evidenceEn: 'Recharge pit is currently open at ground level with gravel and bottom pipe tied with sack; no protective slab.',
    evidenceHi: 'जमीन पर स्थित पुनर्भरण गड्ढा पूरी तरह खुला है; कोई सुरक्षा जाली या पक्का स्लैब नहीं है।',
    possibleReasonEn: 'Chamber construction incomplete or original cover was removed/damaged.',
    possibleReasonHi: 'मूल निर्माण में ढक्कन नहीं लगाया गया अथवा बाद में क्षतिग्रस्त हो गया।',
    actionEn: 'Fabricate and install a sturdy concrete slab or heavy-duty metal mesh cover immediately to prevent child accidents and trash dumping.',
    actionHi: 'बच्चों की सुरक्षा एवं कचरा गिरने से रोकने हेतु तुरंत आरसीसी स्लैब या मजबूत जालीदार ढक्कन लगवाएं।',
    benefitEn: 'Ensures campus safety for 160 students and keeps filtration media clean of debris.',
    benefitHi: '160 विद्यार्थियों के लिए परिसर सुरक्षित होगा और छनन सामग्री कचरे से मुक्त रहेगी।',
    responsiblePartyEn: 'Head Teacher & School Maintenance Fund',
    responsiblePartyHi: 'प्रधानाध्यापक एवं विद्यालय विकास कोष',
    priority: 'high',
    requiresAdultVerification: true,
  },
  {
    id: 'ADV-03',
    category: 'leakage',
    titleEn: 'Repair Reported Faulty Taps (3–4 Taps)',
    titleHi: 'खराब नलों (लगभग 3-4 नल) की त्वरित मरम्मत कराएं',
    evidenceEn: 'School reports approximately 3–4 faulty taps out of ~10 taps (leaking washer, worn thread, loose handle).',
    evidenceHi: 'लगभग 10 में से 3–4 नलों में रिसाव या बंद न होने की समस्या दर्ज की गई है।',
    possibleReasonEn: 'Wear and tear of rubber washers, mineral scaling from hard borewell water, or excessive force during student usage.',
    possibleReasonHi: 'रबर वॉशर का घिस जाना, बोरवेल के पानी से चूड़ी जाम होना अथवा छात्रों द्वारा तेज दबाव डालना।',
    actionEn: 'Procure replacement brass/PTFE washers and thread tape. Engage a local plumber to service all 10 taps in one batch.',
    actionHi: 'नए वॉशर व टेफ्लॉन टेप लाकर स्थानीय प्लंबर द्वारा सभी 10 नलों की एकमुश्त सर्विसिंग कराएं।',
    benefitEn: 'Prevents thousands of litres of unmeasured clean borewell water from being wasted every month.',
    benefitHi: 'प्रतिमाह सैकड़ों लीटर स्वच्छ बोरवेल जल की अनावश्यक बर्बादी रुकेगी।',
    responsiblePartyEn: 'SMC Maintenance Custodian & Local Plumber',
    responsiblePartyHi: 'विद्यालय रख-रखाव प्रभारी एवं स्थानीय प्लंबर',
    priority: 'high',
    requiresAdultVerification: true,
  },
  {
    id: 'ADV-04',
    category: 'overflow',
    titleEn: 'Implement Manual Shutoff Supervision & Visual Water Level Gauge',
    titleHi: 'टंकी भरने की निगरानी एवं दृश्यमान जलस्तर सूचक लगाना',
    evidenceEn: 'Borewell pump has no automatic motor shutoff or water-level indicator; water overflows into drain.',
    evidenceHi: 'सबमर्सिबल पंप में ऑटोमैटिक कट-ऑफ या जलस्तर सूचक नहीं है; पानी ओवरफ्लो होकर नाली में बह जाता है।',
    possibleReasonEn: 'Absence of overflow alarm or mechanical float valve.',
    possibleReasonHi: 'फ्लोट वाल्व या अलार्म सिस्टम की अनुपस्थिति।',
    actionEn: '1) Install a low-cost mechanical external float level gauge with marker bead. 2) Designate an adult supervisor with a 20-minute pump timer alarm.',
    actionHi: '1) कम लागत वाला मैकेनिकल फ्लोट इंडिकेटर लगाएं। 2) मोटर चालू करते समय 20 मिनट का मोबाइल टाइमर अलार्म निर्धारित करें।',
    benefitEn: 'Eliminates tank overflow and reduces electricity consumption by stopping pump precisely when full.',
    benefitHi: 'टंकी से पानी का बहना रुकेगा और बिजली की बचत होगी।',
    responsiblePartyEn: 'School Mentor / ICT Instructor & Designated Staff Member',
    responsiblePartyHi: 'आईसीटी अनुदेशक एवं नियुक्त विद्यालय कर्मी',
    priority: 'medium',
    requiresAdultVerification: true,
  },
  {
    id: 'ADV-05',
    category: 'tank',
    titleEn: 'Patch Minor Leakage on Existing 500L Overhead Tank',
    titleHi: 'मौजूदा 500 लीटर की टंकी के रिसाव की मरम्मत',
    evidenceEn: 'Existing 500L tank has minor leakage/damage; lasts approximately one day.',
    evidenceHi: 'मौजूदा 500 लीटर टंकी में हल्का रिसाव है; पानी लगभग एक दिन चलता है।',
    possibleReasonEn: 'UV exposure hairline crack or loose fitting at inlet/outlet brass bulkhead.',
    possibleReasonHi: 'धूप से प्लास्टिक में बारीक दरार या आउटलेट बुश का ढीला होना।',
    actionEn: 'Inspect empty tank during weekend; apply food-grade HDPE sealant or replace bulkhead washer.',
    actionHi: 'सप्ताहांत में खाली टंकी का निरीक्षण कर सुरक्षित सीलेंट लगाएं या बुश वॉशर बदलें।',
    benefitEn: 'Prevents structural dampness on the building ceiling and preserves stored water.',
    benefitHi: 'छत पर रिसाव रुकेगा और भंडारित जल सुरक्षित रहेगा।',
    responsiblePartyEn: 'School Maintenance Lead',
    responsiblePartyHi: 'विद्यालय रख-रखाव प्रभारी',
    priority: 'medium',
    requiresAdultVerification: true,
  },
  {
    id: 'ADV-06',
    category: 'garden',
    titleEn: 'Transition Garden Irrigation from Hose to Bucket/Mug System',
    titleHi: 'वाटिका सिंचाई: होज़ पाइप के स्थान पर बाल्टी-मग प्रणाली अपनाएं',
    evidenceEn: 'Garden has ~30–40 plants (20–30 healthy). Watering is irregular, mainly done with an unmeasured hose.',
    evidenceHi: 'वाटिका में 30–40 पौधे हैं; सिंचाई अनियमित है और प्रायः होज़ पाइप से अनियंत्रित रूप से की जाती है।',
    possibleReasonEn: 'Lack of designated watering schedule and absence of dedicated garden caretaker.',
    possibleReasonHi: 'सिंचाई समय-सारणी का अभाव एवं निश्चित माली/देखभालकर्ता का न होना।',
    actionEn: 'Institute student-led "Green Squad" pairs to water roots directly using buckets/mugs during morning assembly hour. Utilize vegetable wash wastewater from MDM kitchen if free of detergents.',
    actionHi: 'छात्र "हरित दल" बनाकर सुबह बाल्टी-मग से जड़ों में नियंत्रित पानी दें। मध्याह्न भोजन में सब्जी धोने वाले पानी का सदुपयोग करें।',
    benefitEn: 'Conserves borewell water and ensures consistent, targeted soil moisture for the 30–40 plants.',
    benefitHi: 'पानी की भारी बचत होगी और सभी पौधों को नियमित व समान नमी मिलेगी।',
    responsiblePartyEn: 'Eco-Club Students & ICT Instructor',
    responsiblePartyHi: 'इको-क्लब छात्र दल एवं आईसीटी शिक्षक',
    priority: 'low',
    requiresAdultVerification: false,
  },
  {
    id: 'ADV-07',
    category: 'filtration',
    titleEn: 'Formalize Drinking Water Candle Filter Maintenance Schedule',
    titleHi: 'पेयजल कैंडल फिल्टर के रख-रखाव का निश्चित रजिस्टर बनाएं',
    evidenceEn: 'Borewell drinking water passes through candle filter without fixed cleaning schedule; no lab test available.',
    evidenceHi: 'पेयजल कैंडल फिल्टर से छाना जाता है किंतु सफाई का निश्चित समय नहीं है; कोई लैब रिपोर्ट नहीं है।',
    possibleReasonEn: 'No logbook assigned for tracking ceramic candle scrubbing and replacement.',
    possibleReasonHi: 'कैंडल की सफाई और बदलने का कोई लिखित रिकॉर्ड न होना।',
    actionEn: 'Post a visible maintenance chart beside filter stand. Establish weekly boiling/scrubbing schedule following manufacturer instructions. Coordinate with Public Health Engineering Dept (PHED) for routine potability testing.',
    actionHi: 'फिल्टर के पास साप्ताहिक सफाई चार्ट लगाएं। निर्माता के निर्देशानुसार सफाई करें एवं पीएचईडी (PHED) विभाग से जल जाँच कराएं।',
    benefitEn: 'Ensures reliable filtration performance and safeguards health of 168 individuals.',
    benefitHi: '168 लोगों के स्वास्थ्य की सुरक्षा और फिल्टर की कार्यक्षमता सुनिश्चित होगी।',
    responsiblePartyEn: 'MDM Incharge & Head Teacher',
    responsiblePartyHi: 'मध्याह्न भोजन प्रभारी एवं प्रधानाध्यापक',
    priority: 'medium',
    requiresAdultVerification: true,
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionEn: 'In a school rainwater harvesting system, what must happen before water can enter the vertical PVC pipe?',
    questionHi: 'विद्यालय वर्षा जल संचयन प्रणाली में, पानी के लंबवत पीवीसी पाइप में प्रवेश करने से पहले क्या होना अनिवार्य है?',
    optionsEn: [
      'It must be pumped using an electric motor',
      'It must flow along the roof slope and reach the collection inlet',
      'It must be mixed with borewell water',
      'It must pass through a chemical boiling tank'
    ],
    optionsHi: [
      'इसे विद्युत मोटर द्वारा पंप किया जाना चाहिए',
      'इसे छत के ढलान से बहकर संग्रहण इनलेट (मुहाने) तक पहुँचना चाहिए',
      'इसे बोरवेल के पानी के साथ मिलाया जाना चाहिए',
      'इसे रासायनिक उबालने वाले टैंक से गुजरना चाहिए'
    ],
    correctIndex: 1,
    explanationEn: 'Correct! The water must physically flow across the roof slope and enter the collection inlet opening. At UPG M.S. DUDHANI-1, this is the exact point of failure: rainwater ponds on the roof and never reaches the inlet.',
    explanationHi: 'सही उत्तर! पानी को छत के ढलान के सहारे बहकर इनलेट के मुहाने तक पहुँचना आवश्यक है। दुधानी-1 विद्यालय में यही मुख्य विफलता है कि पानी छत पर ठहरा रहता है और इनलेट तक नहीं पहुँचता।',
    categoryEn: 'Rainwater Harvesting',
    categoryHi: 'वर्षा जल संचयन'
  },
  {
    id: 2,
    questionEn: 'Why is standing rainwater on a school roof for 2 days problematic?',
    questionHi: 'विद्यालय की छत पर बारिश के बाद 2 दिनों तक पानी का जमा रहना क्यों हानिकारक है?',
    optionsEn: [
      'It evaporates too quickly into clouds',
      'It causes ceiling dampness, weakens the RCC structure, and breeds mosquitoes',
      'It turns into borewell water automatically',
      'It prevents students from playing on the ground'
    ],
    optionsHi: [
      'यह बहुत तेजी से भाप बनकर उड़ जाता है',
      'यह छत में सीलन लाता है, आरसीसी संरचना को कमजोर करता है और मच्छर पैदा करता है',
      'यह स्वतः बोरवेल जल में परिवर्तित हो जाता है',
      'यह विद्यार्थियों को मैदान में खेलने से रोकता है'
    ],
    correctIndex: 1,
    explanationEn: 'Prolonged water ponding causes water ingress into classroom ceilings, deteriorates structural concrete, and forms breeding grounds for disease vectors like mosquitoes.',
    explanationHi: 'छत पर लंबे समय तक पानी रुकने से कमरों की छत में सीलन आती है, कंक्रीट कमजोर होता है और डेंगू-मलेरिया फैलाने वाले मच्छर पनपते हैं।',
    categoryEn: 'Structural Health',
    categoryHi: 'संरचनात्मक स्वास्थ्य'
  },
  {
    id: 3,
    questionEn: 'What is the correct scientific formula to calculate theoretical rainwater harvesting potential?',
    questionHi: 'सैद्धांतिक वर्षा जल संचयन क्षमता की गणना करने का सही वैज्ञानिक सूत्र क्या है?',
    optionsEn: [
      'Volume = Roof Area × Rainfall × Runoff Coefficient × Collection Efficiency',
      'Volume = Number of Students × Tap Count × Days',
      'Volume = Pump Horsepower × Electricity Hours',
      'Volume = Tank Capacity × 365 Days'
    ],
    optionsHi: [
      'आयतन = छत का क्षेत्रफल × वर्षा × अपवाह गुणांक × संचयन दक्षता',
      'आयतन = विद्यार्थियों की संख्या × नलों की संख्या × दिन',
      'आयतन = पंप की अश्वशक्ति (HP) × बिजली के घंटे',
      'आयतन = टंकी की क्षमता × 365 दिन'
    ],
    correctIndex: 0,
    explanationEn: 'The standard hydrological formula calculates harvestable yield in litres based on catchment area (m²), rainfall depth (mm), surface runoff coefficient (accounting for surface absorption), and system filter efficiency.',
    explanationHi: 'मानक जल विज्ञान सूत्र के अनुसार: संभावित जल = छत का क्षेत्रफल (m²) × वर्षा (mm) × अपवाह गुणांक × दक्षता। 1 वर्ग मीटर पर 1 मिमी वर्षा लगभग 1 लीटर जल देती है।',
    categoryEn: 'Hydrology Science',
    categoryHi: 'जल विज्ञान'
  },
  {
    id: 4,
    questionEn: 'Why is an open, unshielded recharge chamber without a lid dangerous on a school campus?',
    questionHi: 'विद्यालय परिसर में बिना ढक्कन वाला खुला पुनर्भरण गड्ढा क्यों खतरनाक है?',
    optionsEn: [
      'It uses too much electrical power',
      'It presents a serious fall/injury hazard for children and collects trash',
      'It stops rain from falling on the school',
      'It makes the garden grow too tall'
    ],
    optionsHi: [
      'यह बहुत अधिक बिजली खर्च करता है',
      'यह बच्चों के गिरने/चोट लगने का गंभीर खतरा है तथा इसमें कचरा जमा होता है',
      'यह विद्यालय पर बारिश गिरने से रोकता है',
      'यह वाटिका के पौधों को बहुत बड़ा बना देता है'
    ],
    correctIndex: 1,
    explanationEn: 'Campus safety is paramount: an open pit without a child-safe protective cover poses an immediate physical safety risk to students and allows winds to blow trash into the filter bed.',
    explanationHi: 'खुला गड्ढा 160 बच्चों के लिए गंभीर दुर्घटना का कारण बन सकता है और उसमें हवा से कचरा गिरकर फिल्टर मीडिया को चोक कर देता है। इसलिए इस पर पक्का ढक्कन अनिवार्य है।',
    categoryEn: 'Campus Safety',
    categoryHi: 'परिसर सुरक्षा'
  },
  {
    id: 5,
    questionEn: 'How should students water school garden plants to conserve clean borewell water?',
    questionHi: 'विद्यालय वाटिका के पौधों को पानी देते समय बोरवेल जल की बचत के लिए क्या करना चाहिए?',
    optionsEn: [
      'Leave an open hose running continuously across the ground',
      'Use a bucket and mug to deliver water directly to the plant root zone',
      'Water plants only during the hottest noon sun',
      'Use bottled packaged drinking water'
    ],
    optionsHi: [
      'होज़ पाइप को जमीन पर खुला छोड़कर अनियंत्रित बहने दें',
      'बाल्टी और मग का उपयोग कर सीधे पौधों की जड़ों में नियंत्रित पानी दें',
      'केवल दोपहर की तेज धूप में ही पानी दें',
      'बोतलबंद पैकेज्ड मिनरल वाटर का उपयोग करें'
    ],
    correctIndex: 1,
    explanationEn: 'Using a bucket and mug prevents open hose runoff wastage and allows targeted watering at the root zone where plants can absorb it effectively.',
    explanationHi: 'बाल्टी और मग से पानी देने पर होज़ पाइप की तरह पानी व्यर्थ नहीं बहता और सीधे जड़ों तक आवश्यक नमी पहुँचती है।',
    categoryEn: 'Water Conservation',
    categoryHi: 'जल संरक्षण'
  },
  {
    id: 6,
    questionEn: 'What is the function of a "Runoff Coefficient" in rainwater calculations?',
    questionHi: 'वर्षा जल गणना में "अपवाह गुणांक (Runoff Coefficient)" का क्या महत्व है?',
    optionsEn: [
      'It measures how fast students run during recess',
      'It represents the proportion of rainfall that actually runs off the roof surface rather than soaking in or evaporating',
      'It calculates the price of water pipes',
      'It measures the depth of the borewell'
    ],
    optionsHi: [
      'यह मापता है कि बच्चे कितनी तेजी से दौड़ते हैं',
      'यह दर्शाता है कि बारिश का कितना हिस्सा सोखे या वाष्पीकृत हुए बिना छत की सतह से बहकर आता है',
      'यह पानी के पाइपों की कीमत तय करता है',
      'यह बोरवेल की गहराई मापता है'
    ],
    correctIndex: 1,
    explanationEn: 'No roof captures 100% of rain. Concrete (RCC) roofs have a runoff coefficient around 0.70 to 0.85 because small amounts evaporate or absorb into surface pores.',
    explanationHi: 'कोई भी छत 100% पानी नहीं देती। आरसीसी छत का अपवाह गुणांक 0.70 से 0.85 होता है, क्योंकि कुछ पानी धूप से वाष्पित होता है या सतह सोख लेती है।',
    categoryEn: 'Hydrology Science',
    categoryHi: 'जल विज्ञान'
  },
  {
    id: 7,
    questionEn: 'What should students do if they observe a leaking tap or overflowing tank at school?',
    questionHi: 'विद्यालय में यदि कोई नल टपकता दिखे या टंकी ओवरफ्लो हो रही हो, तो छात्रों को क्या करना चाहिए?',
    optionsEn: [
      'Ignore it and leave it running',
      'Attempt to dismantle the plumbing with metal tools on their own',
      'Gently ensure the tap is closed and immediately notify a teacher, mentor, or custodian',
      'Break the pipe to let the water drain faster'
    ],
    optionsHi: [
      'उसे अनदेखा कर बहने दें',
      'स्वयं औजार लेकर पाइपलाइन खोलने लगें',
      'नल को सहजता से बंद करने का प्रयास करें और तुरंत शिक्षक या आईसीटी अनुदेशक को सूचित करें',
      'पानी तेजी से निकालने के लिए पाइप तोड़ दें'
    ],
    correctIndex: 2,
    explanationEn: 'Responsible water stewardship means attempting a gentle close without forcing the handle, and alerting teachers or maintenance staff for adult verification and repair.',
    explanationHi: 'जिम्मेदार नागरिक की तरह नल को आराम से बंद करें और यदि फिर भी रिसाव हो तो तुरंत अपने शिक्षक या मेंटर को बताएं ताकि समय पर मरम्मत हो सके।',
    categoryEn: 'School Practice',
    categoryHi: 'विद्यालयीय आचरण'
  },
  {
    id: 8,
    questionEn: 'Why can we NOT claim that JALPATH AI controls real pumps or detects live flow with IoT sensors?',
    questionHi: 'हम यह दावा क्यों नहीं कर सकते कि जलपथ AI असली पंप को नियंत्रित करता है या लाइव सेंसर से लैस है?',
    optionsEn: [
      'Because it is an honest frontend demonstration prototype relying on recorded observations, not connected hardware',
      'Because water does not follow scientific rules',
      'Because sensors are illegal in schools',
      'Because the internet does not work with water'
    ],
    optionsHi: [
      'क्योंकि यह एक ईमानदार फ्रंटएंड प्रोटोटाइप है जो दर्ज अवलोकनों पर काम करता है, किसी हार्डवेयर या सेंसर से नहीं जुड़ा है',
      'क्योंकि पानी वैज्ञानिक नियमों का पालन नहीं करता',
      'क्योंकि विद्यालयों में सेंसर लगाना गैरकानूनी है',
      'क्योंकि इंटरनेट पानी के साथ काम नहीं करता'
    ],
    correctIndex: 0,
    explanationEn: 'Scientific honesty is essential in Quest4Earth: JALPATH AI is a frontend monitoring and decision-support prototype. It structures human observations; it does not physically actuate machinery.',
    explanationHi: 'वैज्ञानिक ईमानदारी आवश्यक है: जलपथ AI एक फ्रंटएंड निर्णय-सहायता प्रोटोटाइप है। यह मानवीय अवलोकनों को व्यवस्थित करता है, वास्तविक मशीनरी या सेंसर नहीं चलाता।',
    categoryEn: 'Scientific Honesty',
    categoryHi: 'वैज्ञानिक सत्यनिष्ठा'
  },
  {
    id: 9,
    questionEn: 'What happened to the separate 1000-litre tank installed at the school about a year ago?',
    questionHi: 'लगभग एक वर्ष पूर्व विद्यालय में लगाई गई 1000 लीटर की अलग टंकी के साथ क्या हुआ था?',
    optionsEn: [
      'It was used to collect millions of litres of rainwater',
      'It burst into two pieces after approximately two days and was discarded (it was for borewell water, NOT rainwater)',
      'It was stolen by monkeys',
      'It was converted into a solar panel'
    ],
    optionsHi: [
      'उसका उपयोग लाखों लीटर वर्षा जल संचयन में किया गया',
      'वह लगभग दो दिनों बाद दो टुकड़ों में फट गई और हटा दी गई (वह बोरवेल हेतु थी, वर्षा जल हेतु नहीं)',
      'उसे बंदर उठा ले गए',
      'उसे सौर ऊर्जा पैनल में बदल दिया गया'
    ],
    correctIndex: 1,
    explanationEn: 'Authentic baseline fact: A separate 1000L tank was installed for borewell water storage, burst after ~2 days, and was discarded. It was NOT a rainwater tank, and its failure reason was never officially verified.',
    explanationHi: 'सत्यापित तथ्य: वह 1000 लीटर की अलग टंकी बोरवेल जल के लिए थी, 2 दिन में फट गई थी और वर्षा जल से उसका कोई संबंध नहीं था। कारण की मनगढ़ंत व्याख्या नहीं करनी चाहिए।',
    categoryEn: 'Baseline Facts',
    categoryHi: 'आधारभूत तथ्य'
  },
  {
    id: 10,
    questionEn: 'What is the most effective long-term benefit of groundwater recharge through rainwater harvesting?',
    questionHi: 'वर्षा जल संचयन द्वारा भूजल पुनर्भरण का दीर्घकालिक सबसे बड़ा लाभ क्या है?',
    optionsEn: [
      'It makes rain taste sweet',
      'It replenishes the underground water table so borewells and handpumps continue to provide water during dry summer months',
      'It eliminates the need for teachers',
      'It turns soil into concrete'
    ],
    optionsHi: [
      'यह बारिश के पानी को मीठा बना देता है',
      'यह भूजल स्तर को रिचार्ज करता है ताकि भीषण गर्मी में भी बोरवेल और चापाकल में पानी की कमी न हो',
      'यह शिक्षकों की आवश्यकता समाप्त कर देता है',
      'यह मिट्टी को कंक्रीट में बदल देता है'
    ],
    correctIndex: 1,
    explanationEn: 'Groundwater recharge directly replenishes sub-surface aquifers, counteracting water-table depletion and ensuring sustainable community water availability throughout harsh summers.',
    explanationHi: 'भूजल पुनर्भरण से पाताल का जलस्तर ऊपर उठता है, जिससे भीषण गर्मी के दिनों में भी विद्यालय के बोरवेल और चापाकल सूखे नहीं पड़ते।',
    categoryEn: 'Sustainable Management',
    categoryHi: 'सतत जल प्रबंधन'
  }
];

export const KNOWN_VS_UNKNOWN_DATA = [
  {
    parameterEn: 'Enrolled Students',
    parameterHi: 'नामांकित विद्यार्थी',
    status: 'known',
    valueEn: '160 Students',
    valueHi: '160 विद्यार्थी',
    sourceEn: 'School enrollment register',
    sourceHi: 'विद्यालय नामांकन पंजी',
    notesEn: 'Total registered; daily attendance varies and is not recorded digitally.',
    notesHi: 'कुल नामांकित; दैनिक उपस्थिति का डिजिटल रिकॉर्ड उपलब्ध नहीं।'
  },
  {
    parameterEn: 'Teaching & Staff Population',
    parameterHi: 'शिक्षक एवं सहयोगी कर्मी',
    status: 'known',
    valueEn: '5 Teachers + 1 ICT Instructor + 2 MDM Cooks = 8 Staff',
    valueHi: '5 शिक्षक + 1 आईसीटी अनुदेशक + 2 रसोइया = 8 कर्मी',
    sourceEn: 'Official school staff record',
    sourceHi: 'आधिकारिक विद्यालय कर्मी पंजी',
    notesEn: 'Together with 160 students, total known people = 168.',
    notesHi: '160 छात्रों के साथ कुल ज्ञात सदस्य = 168।'
  },
  {
    parameterEn: 'Existing Overhead Tank',
    parameterHi: 'मौजूदा छत की टंकी',
    status: 'known',
    valueEn: 'Approx. 500 Litres',
    valueHi: 'लगभग 500 लीटर',
    sourceEn: 'Physical observation',
    sourceHi: 'भौतिक अवलोकन',
    notesEn: 'Stores borewell water; has minor damage/seepage; lasts ~1 day.',
    notesHi: 'बोरवेल जल भंडारण; मामूली रिसाव; लगभग 1 दिन चलता है।'
  },
  {
    parameterEn: 'Tap Count & Reported Faulty Taps',
    parameterHi: 'कुल नल एवं खराब नलों की सूचना',
    status: 'known',
    valueEn: '~10 Taps; ~3–4 Reported Faulty',
    valueHi: 'लगभग 10 नल; 3-4 खराब होने की सूचना',
    sourceEn: 'School baseline estimate',
    sourceHi: 'विद्यालय का अनुमानित आधारभूत तथ्य',
    notesEn: 'Reported observation; exact water loss in litres has not been measured.',
    notesHi: 'अवलोकन पर आधारित; बर्बाद होने वाले पानी की मात्रा अमापित है।'
  },
  {
    parameterEn: 'Primary Water Source',
    parameterHi: 'प्राथमिक जल स्रोत',
    status: 'known',
    valueEn: 'Borewell with Submersible Pump',
    valueHi: 'गहरे बोरवेल में सबमर्सिबल पंप',
    sourceEn: 'Installed infrastructure',
    sourceHi: 'स्थापित अवसंरचना',
    notesEn: 'High dependency on power grid; stops during summer power cuts.',
    notesHi: 'बिजली पर पूर्ण निर्भरता; गर्मियों में बिजली कटने पर बंद।'
  },
  {
    parameterEn: 'Roof-to-Pipe Collection Status',
    parameterHi: 'छत से इनलेट तक जल संचयन',
    status: 'known',
    valueEn: '0 Litres reach the PVC inlet',
    valueHi: 'इनलेट तक 0 लीटर पानी पहुँचता है',
    sourceEn: 'Verified school physical finding',
    sourceHi: 'सत्यापित विद्यालयीय भौतिक अवलोकन',
    notesEn: 'Rainwater gathers on roof for ~2 days; does not enter collection pipe.',
    notesHi: 'पानी छत पर 2 दिन जमा रहता है; पाइप के इनलेट में प्रवेश नहीं करता।'
  },
  {
    parameterEn: 'Daily Student Attendance',
    parameterHi: 'दैनिक छात्र उपस्थिति',
    status: 'unknown',
    valueEn: 'Unmeasured / Not Available',
    valueHi: 'अमापित / उपलब्ध नहीं',
    sourceEn: 'No continuous digital attendance API',
    sourceHi: 'कोई डिजिटल दैनिक उपस्थिति ट्रैकर नहीं',
    notesEn: 'We strictly state 160 is total enrolled, NOT daily attendance.',
    notesHi: 'हम स्पष्ट रूप से 160 को कुल नामांकन बताते हैं, दैनिक उपस्थिति नहीं।'
  },
  {
    parameterEn: 'Daily Litres of Water Consumed',
    parameterHi: 'प्रतिदिन जल खपत (लीटर में)',
    status: 'unknown',
    valueEn: 'Unmeasured',
    valueHi: 'अमापित',
    sourceEn: 'No flow meters installed',
    sourceHi: 'कोई जल प्रवाह मीटर नहीं लगा',
    notesEn: 'No fictional litres-per-student statistics are invented.',
    notesHi: 'प्रति छात्र पानी खपत का कोई काल्पनिक आँकड़ा नहीं गढ़ा गया है।'
  },
  {
    parameterEn: 'Actual School Roof Catchment Area',
    parameterHi: 'विद्यालय की छत का वास्तविक क्षेत्रफल',
    status: 'unknown',
    valueEn: 'Unmeasured (m²)',
    valueHi: 'अमापित (वर्ग मीटर)',
    sourceEn: 'Awaiting civil tape survey',
    sourceHi: 'इंजीनियरिंग पैमाइश की प्रतीक्षा',
    notesEn: 'Calculators use clear sample demonstration values or user inputs.',
    notesHi: 'कैलकुलेटर में केवल स्पष्ट नमूना या उपयोगकर्ता प्रविष्टि का उपयोग होता है।'
  },
  {
    parameterEn: 'Annual Local Rainfall at School',
    parameterHi: 'विद्यालय में वार्षिक स्थानीय वर्षा',
    status: 'unknown',
    valueEn: 'Unmeasured with on-site gauge',
    valueHi: 'ऑन-साइट वर्षामापी यंत्र से अमापित',
    sourceEn: 'No on-campus weather station',
    sourceHi: 'परिसर में मौसम केंद्र नहीं है',
    notesEn: 'Future scope includes installing a school rain gauge.',
    notesHi: 'भविष्य की योजना में वर्षामापी यंत्र लगाना शामिल है।'
  },
  {
    parameterEn: 'Laboratory Water Quality Report',
    parameterHi: 'प्रयोगशाला जल गुणवत्ता रिपोर्ट',
    status: 'unknown',
    valueEn: 'No Recent Certified Lab Report',
    valueHi: 'कोई हालिया प्रमाणित लैब रिपोर्ट नहीं',
    sourceEn: 'Awaiting PHED testing',
    sourceHi: 'सरकारी जल जाँच की प्रतीक्षा',
    notesEn: 'Handpump water is iron-coloured by visual observation only; not certified.',
    notesHi: 'चापाकल का पानी केवल दृश्य अवलोकन से लोहे जैसा लगता है; रासायनिक रूप से अप्रमाणित।'
  }
];

export const PRESENTATION_SLIDES = [
  {
    step: 1,
    titleEn: '1. Project Introduction & Identity',
    titleHi: '1. परियोजना परिचय एवं पहचान',
    categoryEn: 'Quest4Earth 2026',
    categoryHi: 'Quest4Earth 2026',
    keyPointsEn: [
      'JALPATH AI – AI-Assisted School Water Rescue & Rainwater Intelligence System.',
      'Theme: Water Conservation & Sustainable Management.',
      'Team: UDAAN TEAM | Students: Archana Kumari & Sima Baski | Mentor: Somnath Pal (ICT Instructor).',
      'School: UPG M.S. DUDHANI-1, Block: Jama, District: Dumka, Jharkhand.'
    ],
    keyPointsHi: [
      'जलपथ AI – विद्यालय जल संरक्षण एवं वर्षा जल संचयन सहायता प्रणाली।',
      'थीम: जल संरक्षण एवं सतत प्रबंधन (Water Conservation & Sustainable Management)।',
      'टीम: उड़ान टीम (UDAAN TEAM) | विद्यार्थी: अर्चना कुमारी व सीमा बास्की | मेंटर: सोमनाथ पाल (आईसीटी अनुदेशक)।',
      'विद्यालय: उत्क्रमित मध्य विद्यालय दुधानी-1, जामा, दुमका, झारखंड।'
    ]
  },
  {
    step: 2,
    titleEn: '2. Actual School Water Reality',
    titleHi: '2. विद्यालय की वास्तविक जल स्थिति',
    categoryEn: 'Baseline Context',
    categoryHi: 'आधारभूत संदर्भ',
    keyPointsEn: [
      'Campus Population: 160 enrolled students, 5 teachers, 1 ICT instructor, 2 MDM cooks (168 known people).',
      'Main Source: Deep borewell with submersible electric pump.',
      'Storage: One existing overhead 500L tank with minor damage/leakage, lasting approximately one day.',
      'Separate 1000L tank installed ~1 year ago burst in 2 days and was discarded (was for borewell water, NOT rainwater).'
    ],
    keyPointsHi: [
      'परिसर जनसंख्या: 160 नामांकित विद्यार्थी, 5 शिक्षक, 1 आईसीटी शिक्षक, 2 रसोइया (कुल 168 ज्ञात व्यक्ति)।',
      'मुख्य स्रोत: गहरा बोरवेल और बिजली से चलने वाला सबमर्सिबल पंप।',
      'भंडारण: लगभग 500 लीटर की एक पुरानी टंकी जिसमें मामूली रिसाव है और पानी लगभग 1 दिन चलता है।',
      'लगभग 1 वर्ष पूर्व लगी 1000 लीटर की अलग टंकी 2 दिन में फट गई थी (वह बोरवेल हेतु थी, वर्षा जल हेतु नहीं)।'
    ]
  },
  {
    step: 3,
    titleEn: '3. Core Water Challenges Observed',
    titleHi: '3. विद्यालय में दर्ज मुख्य जल समस्याएं',
    categoryEn: 'Problem Identification',
    categoryHi: 'समस्या पहचान',
    keyPointsEn: [
      'Heavy dependence on electricity; severe summer power cuts shut off the borewell pump.',
      'Backup handpump (<50m away) has low yield and visual iron tint (untested chemically).',
      'Approximately 3–4 taps out of ~10 waste water or do not shut properly.',
      'No automatic shutoff or water-level indicator; tank frequently overflows into open drains.'
    ],
    keyPointsHi: [
      'बिजली पर अत्यधिक निर्भरता; गर्मियों में लगातार बिजली कटने से सबमर्सिबल पंप बंद हो जाता है।',
      'वैकल्पिक चापाकल (<50 मीटर) से कम पानी निकलता है और पानी हल्का लोहे जैसा दिखता है (प्रयोगशाला में अप्रमाणित)।',
      'लगभग 10 में से 3–4 नलों में रिसाव है या वे ठीक से बंद नहीं होते।',
      'ऑटोमैटिक कट-ऑफ या लेवल इंडिकेटर न होने से पानी ओवरफ्लो होकर नाली में बह जाता है।'
    ]
  },
  {
    step: 4,
    titleEn: '4. The Rainwater Harvesting Paradox',
    titleHi: '4. वर्षा जल संचयन व्यवस्था का विरोधाभास',
    categoryEn: 'Infrastructure Breakdown',
    categoryHi: 'अवसंरचना विफलता',
    keyPointsEn: [
      'A government-provided rainwater harvesting arrangement exists on campus, but is entirely non-functional.',
      'The school has an RCC roof with both flat and sloped portions.',
      'Rainwater accumulates and remains ponding on the roof for ~2 days after rain.',
      'Dampness and seepage are observed in classroom ceilings directly underneath.'
    ],
    keyPointsHi: [
      'विद्यालय में सरकारी वर्षा जल संचयन व्यवस्था स्थापित है, परंतु वर्तमान में पूरी तरह अकार्यशील है।',
      'विद्यालय की आरसीसी छत पर समतल और ढलानदार भाग हैं।',
      'बारिश के बाद पानी छत पर लगभग दो दिनों तक ठहरा रहता है।',
      'नीचे के कमरों की छतों में सीलन और रिसाव देखा जाता है।'
    ]
  },
  {
    step: 5,
    titleEn: '5. The Exact Critical Failure Point: Roof → Inlet',
    titleHi: '5. विफलता का सटीक बिंदु: छत → इनलेट',
    categoryEn: 'Key Technical Finding',
    categoryHi: 'प्रमुख तकनीकी निष्कर्ष',
    keyPointsEn: [
      'RAINWATER DOES NOT REACH THE PVC PIPE INLET AT ALL.',
      'ZERO water enters the PVC pipe through the current arrangement.',
      'This is NOT a blocked pipe assumption; the confirmed observation is that water pools away and never enters the inlet opening.',
      'Because no water enters, zero water reaches the recharge chamber or groundwater.'
    ],
    keyPointsHi: [
      'वर्षा का पानी पीवीसी पाइप के इनलेट (मुहाने) तक बिल्कुल नहीं पहुँचता।',
      'वर्तमान व्यवस्था से पीवीसी पाइप में शून्य (0) लीटर पानी प्रवेश करता है।',
      'यह पाइप चोक होने की बात नहीं है; सत्यापित तथ्य यह है कि पानी इनलेट तक पहुँच ही नहीं पाता।',
      'चूँकि इनलेट में पानी नहीं जाता, अतः आगे के पुनर्भरण कक्ष या भूजल तक कुछ नहीं पहुँचता।'
    ]
  },
  {
    step: 6,
    titleEn: '6. Rainwater Detective: Interactive Diagnosis',
    titleHi: '6. वर्षा जल जासूस: इंटरैक्टिव निदान प्रणाली',
    categoryEn: 'Diagnostic Feature',
    categoryHi: 'निदान विशेषता',
    keyPointsEn: [
      'Interactive 5-stage animated diagnostic flow: Roof → Inlet → PVC Pipe → Chamber → Aquifer.',
      'Flashing alert highlights the failure between Roof and Inlet.',
      'Identifies technical inspection points: roof grading, elevation difference of inlet lip, and channeling.',
      'Strict safety directive: Students must NEVER climb roofs; surveys must be conducted by authorized adults.'
    ],
    keyPointsHi: [
      '5 चरणों वाला इंटरैक्टिव डायग्नोस्टिक फ्लो: छत → इनलेट → पीवीसी पाइप → पुनर्भरण कक्ष → भूजल।',
      'छत और इनलेट के बीच लाल रंग का चेतावनी संकेत विफलता को स्पष्ट रूप से दर्शाता है।',
      'निरीक्षण बिंदु: छत का ढलान, इनलेट मुहाने की ऊँचाई और नाली की दिशा।',
      'सख्त सुरक्षा नियम: विद्यार्थी कभी छत पर न चढ़ें; निरीक्षण केवल अधिकृत वयस्कों द्वारा हो।'
    ]
  },
  {
    step: 7,
    titleEn: '7. Water Audit: Physical Tap Monitoring',
    titleHi: '7. जल ऑडिट: नलों की भौतिक निगरानी प्रणाली',
    categoryEn: 'Actionable Tool',
    categoryHi: 'कार्यशील साधन',
    keyPointsEn: [
      'Interactive digital register covering all 10 taps (Tap 01 to Tap 10).',
      'Records inspection date, inspector, condition (leaking, damaged, working, repaired), and notes.',
      'Initial baseline reflects 3–4 reported faulty taps awaiting formal physical audit.',
      'Enables local repair tracking, progress statistics, and CSV export for school records.'
    ],
    keyPointsHi: [
      'सभी 10 नलों (Tap 01 से Tap 10) का संपूर्ण इंटरैक्टिव डिजिटल रजिस्टर।',
      'निरीक्षण तिथि, निरीक्षक, स्थिति (रिसाव, खराब, सही, मरम्मत संपन्न) एवं टिप्पणी दर्ज करने की सुविधा।',
      '3-4 खराब नलों की सूचना के आधार पर मरम्मत की स्थिति को ट्रैक करना।',
      'मरम्मत की प्रगति की निगरानी और विद्यालय रिकॉर्ड हेतु CSV डाउनलोड की सुविधा।'
    ]
  },
  {
    step: 8,
    titleEn: '8. Rainwater Potential Calculator',
    titleHi: '8. वर्षा जल संचयन संभावना कैलकुलेटर',
    categoryEn: 'Scientific Formula',
    categoryHi: 'वैज्ञानिक सूत्र',
    keyPointsEn: [
      'Hydrological formula: Volume (L) = Roof Area (m²) × Rainfall (mm) × Runoff Coeff. × Efficiency.',
      'Ethical disclosure: Actual school roof area and rainfall are UNMEASURED.',
      'User can test sample demonstration values or custom inputs.',
      'Contrasts theoretical potential against current reality: 0 Litres harvested today.'
    ],
    keyPointsHi: [
      'मानक जल विज्ञान सूत्र: आयतन (L) = छत क्षेत्रफल (m²) × वर्षा (mm) × अपवाह गुणांक × दक्षता।',
      'ईमानदार प्रस्तुति: विद्यालय की छत का क्षेत्रफल और वर्षा अभी अमापित (Unmeasured) हैं।',
      'नमूना आँकड़ों या स्वयं के इनपुट से सैद्धांतिक क्षमता की गणना की जा सकती है।',
      'सैद्धांतिक क्षमता बनाम वर्तमान वास्तविकता (0 लीटर संचयन) का स्पष्ट तुलनात्मक प्रदर्शन।'
    ]
  },
  {
    step: 9,
    titleEn: '9. AI Jal Advisor: Transparent Rule Engine',
    titleHi: '9. AI जल सलाहकार: पारदर्शी नियम-आधारित प्रणाली',
    categoryEn: 'Decision Support',
    categoryHi: 'निर्णय समर्थन',
    keyPointsEn: [
      'Deterministic rule-based decision support system (NOT a black-box LLM or fake IoT).',
      'Evaluates user-recorded audit entries, supply incidents, and baseline facts.',
      'Generates structured advisory cards: Problem, Evidence, Unverified Reason, Action, Benefit, Responsible Party, Priority.',
      'All high-priority recommendations are explicitly marked "Requires Adult / Technical Verification".'
    ],
    keyPointsHi: [
      'पारदर्शी, नियम-आधारित निर्णय-समर्थन प्रणाली (कोई काल्पनिक AI या झूठा IoT नहीं)।',
      'उपयोगकर्ता द्वारा दर्ज ऑडिट व आपूर्ति समस्याओं का विश्लेषण कर व्यावहारिक सुझाव प्रस्तुत करता है।',
      'प्रत्येक सुझाव में समस्या, साक्ष्य, संभावित कारण, सुधारात्मक कार्य, अपेक्षित लाभ और जिम्मेदारी स्पष्ट है।',
      'सभी मुख्य सुझावों पर "प्रौढ़ / तकनीकी सत्यापन आवश्यक" का स्पष्ट लेबल।'
    ]
  },
  {
    step: 10,
    titleEn: '10. Technology & System Architecture',
    titleHi: '10. प्रौद्योगिकी एवं प्रणाली संरचना',
    categoryEn: 'Engineering Stack',
    categoryHi: 'तकनीकी संरचना',
    keyPointsEn: [
      'Built with modern lightweight web technologies: HTML5, CSS3/Tailwind, React, LocalStorage, Chart visualizations.',
      'Six-stage pipeline: Data Collection → Structured Storage → Rule Analysis → Actionable Advice → Human Adult Verification → Sustainable Action.',
      'Zero server dependencies; works entirely offline/in-browser for remote rural school environments.',
      'CSV exports and print-optimized A4 reporting engine.'
    ],
    keyPointsHi: [
      'आधुनिक एवं सुगम वेब तकनीक: HTML5, CSS3/Tailwind, React, LocalStorage और चार्ट।',
      '6-चरणीय प्रक्रिया: डेटा संग्रह → व्यवस्थित भंडारण → नियम-आधारित विश्लेषण → सुझाव → वयस्क सत्यापन → सतत सुधार।',
      'ग्रामीण विद्यालयों हेतु उपयुक्त: बिना किसी भारी सर्वर के सीधे ब्राउज़र में कार्यशील।',
      'डेटा को सुरक्षित रखने हेतु CSV एक्सपोर्ट एवं A4 प्रिंट रिपोर्टिंग।'
    ]
  },
  {
    step: 11,
    titleEn: '11. Limitations & Scientific Honesty',
    titleHi: '11. सीमाएं एवं वैज्ञानिक सत्यनिष्ठा',
    categoryEn: 'Scientific Integrity',
    categoryHi: 'वैज्ञानिक ईमानदारी',
    keyPointsEn: [
      'No invented consumption numbers: Daily water consumption and daily attendance are not measured.',
      'No false claims: Prototype does not physically control pumps or contain live sensors.',
      'No fabricated causes: We do not claim the pipe is blocked or the handpump is chemically contaminated.',
      'Clear demarcation between Verified Data, Approximate Observations, and Unknowns.'
    ],
    keyPointsHi: [
      'कोई मनगढ़ंत आँकड़ा नहीं: दैनिक पानी खपत एवं दैनिक उपस्थिति का कोई झूठा रिकॉर्ड नहीं दिखाया गया।',
      'कोई भ्रामक दावा नहीं: यह प्रोटोटाइप किसी असली मोटर को नियंत्रित नहीं करता और न ही लाइव सेंसर लगे हैं।',
      'कोई झूठा कारण नहीं: पाइप बंद होने या चापाकल में रासायनिक अशुद्धि का बिना प्रमाण दावा नहीं किया गया।',
      'सत्यापित तथ्यों, अनुमानित अवलोकनों एवं अज्ञात आँकड़ों में स्पष्ट अंतर।'
    ]
  },
  {
    step: 12,
    titleEn: '12. Future Scope & Roadmap',
    titleHi: '12. भविष्य की कार्ययोजना एवं रोडमैप',
    categoryEn: 'Future Engineering',
    categoryHi: 'भावी योजना',
    keyPointsEn: [
      'Phase 1: Measure physical roof area and install an on-campus manual rain gauge.',
      'Phase 2: Authorize civil regrading of roof slope and install durable safety lid on recharge chamber.',
      'Phase 3: Install an adult-supervised water-level indicator and mechanical float shutoff.',
      'Phase 4: Establish student Green Squads for bucket watering and regular tap inspection logs.'
    ],
    keyPointsHi: [
      'चरण 1: छत के क्षेत्रफल की पैमाइश और विद्यालय में वर्षामापी यंत्र (Rain Gauge) की स्थापना।',
      'चरण 2: छत के ढलान की तकनीकी मरम्मत और पुनर्भरण गड्ढे पर मजबूत सुरक्षा ढक्कन लगाना।',
      'चरण 3: पानी की टंकी में मैकेनिकल फ्लोट लेवल गेज लगाना ताकि ओवरफ्लो रुके।',
      'चरण 4: छात्रों का हरित दल बनाकर बाल्टी से सिंचाई और नियमित नल निरीक्षण पंजी संधारित करना।'
    ]
  },
  {
    step: 13,
    titleEn: '13. Conclusion & Team Message',
    titleHi: '13. उपसंहार एवं उड़ान टीम का संदेश',
    categoryEn: 'Quest4Earth Mission',
    categoryHi: 'मिशन का संदेश',
    keyPointsEn: [
      'JALPATH AI bridges the gap between physical school water problems and structured digital decision-making.',
      'By diagnosing why rainwater never enters the collection pipe, we turn invisible wastage into an actionable plan.',
      'UDAAN TEAM: Archana Kumari, Sima Baski, and Mentor Somnath Pal at UPG M.S. DUDHANI-1.',
      'Every Drop Has a Destination.'
    ],
    keyPointsHi: [
      'जलपथ AI विद्यालय की जमीनी जल समस्याओं और संरचित डिजिटल निर्णय-प्रणाली के बीच का सेतु है।',
      'छत से इनलेट तक पानी न पहुँचने की विफलता को उजागर कर, हमने अनदेखी समस्या को कार्ययोजना में बदला है।',
      'उड़ान टीम: अर्चना कुमारी, सीमा बास्की एवं मार्गदर्शक सोमनाथ पाल, उत्क्रमित मध्य विद्यालय दुधानी-1।',
      'हर बूँद का एक गंतव्य है (Every Drop Has a Destination)।'
    ]
  }
];
