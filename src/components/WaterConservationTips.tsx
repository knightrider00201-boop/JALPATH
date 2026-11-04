import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Lightbulb, 
  Wrench, 
  UtensilsCrossed, 
  Sprout, 
  Zap, 
  CloudRain, 
  CheckCircle2, 
  X, 
  ArrowRight, 
  BookOpen, 
  Award, 
  Info, 
  Droplet, 
  Sparkles,
  ExternalLink,
  Clock,
  TrendingDown,
  Users
} from 'lucide-react';

export interface ConservationTip {
  id: string;
  icon: React.ElementType;
  titleEn: string;
  titleHi: string;
  categoryEn: string;
  categoryHi: string;
  categoryColor: string;
  teaserEn: string;
  teaserHi: string;
  impactMetricEn: string;
  impactMetricHi: string;
  problemEn: string;
  problemHi: string;
  actionStepsEn: string[];
  actionStepsHi: string[];
  measurableResultEn: string;
  measurableResultHi: string;
  studentActivityTitleEn: string;
  studentActivityTitleHi: string;
  studentActivityDescEn: string;
  studentActivityDescHi: string;
  schoolContextEn: string;
  schoolContextHi: string;
  accentNavy: string;
  accentFrost: string;
}

export const WaterConservationTips: React.FC = () => {
  const { language, theme, setActiveSection } = useApp();
  const [selectedTip, setSelectedTip] = useState<ConservationTip | null>(null);
  const [completedTips, setCompletedTips] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jalpath_completed_tips');
      return saved ? JSON.parse(saved) : ['tap-washer'];
    } catch {
      return ['tap-washer'];
    }
  });

  const toggleTipComplete = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCompletedTips((prev) => {
      const updated = prev.includes(id) 
        ? prev.filter((item) => item !== id) 
        : [...prev, id];
      try {
        localStorage.setItem('jalpath_completed_tips', JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTip(null);
      }
    };
    if (selectedTip) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedTip]);

  const tipsList: ConservationTip[] = [
    {
      id: 'tap-washer',
      icon: Wrench,
      titleEn: 'Zero-Drip Tap Washer Overhaul',
      titleHi: 'शून्य-टपकन: नल वॉशर नवीनीकरण',
      categoryEn: 'Infrastructure Fix',
      categoryHi: 'बुनियादी ढांचा सुधार',
      categoryColor: 'amber',
      teaserEn: 'Fixing the 3–4 reported leaking taps saves 180–240 Litres every single day.',
      teaserHi: 'परिसर के 3-4 टपकते नलों को सुधारकर रोज 180-240 लीटर शुद्ध पानी बचाएं।',
      impactMetricEn: 'Saves ~72,000 L / Year',
      impactMetricHi: 'वार्षिक ~72,000 लीटर बचत',
      schoolContextEn: 'UPG M.S. Dudhani-1 baseline audit verified that 3 to 4 out of 10 campus taps have worn gaskets, continuously dripping water onto the red clay soil.',
      schoolContextHi: 'उत्क्रमित मध्य विद्यालय दुधानी-1 के ऑडिट में पाया गया कि 10 में से 3-4 नलों के वॉशर घिस चुके हैं, जिससे लगातार पानी मिट्टी में बर्बाद होता है।',
      problemEn: 'A single tap dripping at 30 drops per minute wastes over 60 Litres per day. In a rural school relying on a single submersible pump, this drains the 500L tank before afternoon classes.',
      problemHi: 'प्रति मिनट 30 बूंद टपकने वाला नल रोजाना 60 लीटर से अधिक पानी बर्बाद करता है। एक ही बोरवेल वाले स्कूल में यह 500L की टंकी को दोपहर से पहले ही खाली कर देता है।',
      actionStepsEn: [
        'Isolate the overhead supply line valve before starting maintenance.',
        'Unscrew the tap headgear using a 10-inch adjustable wrench.',
        'Replace the worn neoprene rubber washer (₹5 part available in local Jama market).',
        'Wrap 3-4 layers of PTFE Teflon tape clockwise around the internal brass threads before reassembly.'
      ],
      actionStepsHi: [
        'मरम्मत शुरू करने से पहले ओवरहेड टंकी की मुख्य सप्लाई वाल्व बंद करें।',
        '10-इंच रिंच की मदद से नल के ऊपरी हेडगियर को सावधानी से खोलें।',
        'घिसे हुए रबर वॉशर को नए वॉशर से बदलें (जामा बाजार में मात्र ₹5 में उपलब्ध)।',
        'नल कसने से पहले पीतल की चूड़ियों पर क्लॉकवाइज 3-4 परत टेफ्लॉन टेप लपेटें।'
      ],
      measurableResultEn: 'Immediate 100% stoppage of dripping. Restores full water pressure to the remaining 6-7 handwashing stations.',
      measurableResultHi: 'टपकन में तुरंत 100% रोक। बाकी 6-7 नलों में पानी का दबाव तुरंत सुधरता है।',
      studentActivityTitleEn: '10-Minute Catch-Bucket Drip Test',
      studentActivityTitleHi: '10-मिनट मग परीक्षण (विद्यार्थी प्रयोग)',
      studentActivityDescEn: 'Students place a 1-litre graduated beaker under a dripping tap for 10 minutes, record volume, and multiply by 144 to calculate total daily wastage for science class.',
      studentActivityDescHi: 'छात्र टपकते नल के नीचे 10 मिनट के लिए मग रखकर पानी नापें और 144 से गुणा कर कक्षा में दैनिक बर्बादी का चार्ट बनाएं।',
      accentNavy: 'border-amber-500/40 hover:border-amber-400 group-hover:shadow-amber-500/20',
      accentFrost: 'border-amber-300 hover:border-amber-500 hover:shadow-amber-500/10'
    },
    {
      id: 'mdm-greywater',
      icon: UtensilsCrossed,
      titleEn: 'Mid-Day Meal Kitchen Greywater Loop',
      titleHi: 'मध्याह्न भोजन (MDM) जल पुनर्चक्रण',
      categoryEn: 'Kitchen & Agriculture',
      categoryHi: 'रसोई व पोषण वाटिका',
      categoryColor: 'emerald',
      teaserEn: 'Channel nutrient-rich rice & vegetable wash runoff directly to campus papaya and moringa trees.',
      teaserHi: 'चावल, दाल व सब्जी धोने के पौष्टिक पानी को पोषण वाटिका के पपीता व सहजन के पौधों में पहुंचाएं।',
      impactMetricEn: 'Recycles 120–160 L / Day',
      impactMetricHi: 'दैनिक 120-160 लीटर पुनर्चक्रण',
      schoolContextEn: 'The school serves 160 students daily with 2 dedicated MDM cooks. Starch-rich rinse water currently puddles near the kitchen drain without utilization.',
      schoolContextHi: 'विद्यालय में 160 बच्चों के लिए 2 रसोइया भोजन बनाती हैं। चावल धोने का पौष्टिक पानी वर्तमान में नाली में बेकार बह जाता है।',
      problemEn: 'Fresh groundwater is pumped to wash vegetables and boil grain, then dumped into open muddy drains attracting flies, while campus garden plants dry out in summer.',
      problemHi: 'बोरवेल से ताजा पानी निकालकर सब्जियां धोई जाती हैं, फिर गंदा पानी नाली में जमा होकर मच्छर पैदा करता है, जबकि स्कूल के पौधे सूख जाते हैं।',
      actionStepsEn: [
        'Collect first-stage vegetable rinse water in wide plastic basins near the MDM shed.',
        'Dig a 1-foot shallow gravity trench lined with river pebbles leading to tree roots.',
        'Mulch the base of trees with dry straw to prevent foul odors and mosquito breeding.',
        'Never channel greasy soap water to plants; only divert organic fruit, vegetable, and rice washing runoff.'
      ],
      actionStepsHi: [
        'रसोई शेड के पास सब्जी व अनाज धोने के पानी को चौड़े टब में एकत्र करें।',
        'पौधों की जड़ों तक 1-फीट चौड़ी कंकड़ वाली ढलानदार नाली बनाएं।',
        'पौधों के तने के चारों ओर सूखी घास या पत्तियों की मल्चिंग करें ताकि दुर्गंध व मच्छर न पनपें।',
        'साबुन व डिटर्जेंट वाला पानी कभी पौधों में न डालें; केवल अनाज व सब्जी धोने का पानी ही भेजें।'
      ],
      measurableResultEn: 'Saves 3,500+ Litres of fresh borewell pumping every school month while sustaining 12–15 nutritional fruit plants.',
      measurableResultHi: 'प्रति माह 3,500+ लीटर ताजा भूजल की बचत और 12-15 पोषण वाटिका पौधों का निरंतर पोषण।',
      studentActivityTitleEn: 'Bal Sansad Poshan Vatika Guardians',
      studentActivityTitleHi: 'बाल संसद पोषण वाटिका संरक्षक',
      studentActivityDescEn: 'The Eco-Club assigns 4 students per week to monitor the kitchen trench and inspect healthy fruit tree saplings during lunch recess.',
      studentActivityDescHi: 'पर्यावरण बाल संसद के 4 छात्र लंच के बाद नाली के प्रवाह और पौधों की हरियाली की देखरेख का दायित्व संभालें।',
      accentNavy: 'border-emerald-500/40 hover:border-emerald-400 group-hover:shadow-emerald-500/20',
      accentFrost: 'border-emerald-300 hover:border-emerald-500 hover:shadow-emerald-500/10'
    },
    {
      id: 'handwash-discipline',
      icon: Droplet,
      titleEn: '20-Second Soap Lather Tap Pause',
      titleHi: '20-सेकंड साबुन फेन पर नल बंद नियम',
      categoryEn: 'Student Habit',
      categoryHi: 'छात्र दैनिक आदत',
      categoryColor: 'cyan',
      teaserEn: 'Turning off the tap while lathering hands prevents 4–6 Litres of waste per child daily.',
      teaserHi: 'साबुन से हाथ मलते समय नल बंद रखने से प्रति बच्चा रोजाना 4-6 लीटर पानी बचता है।',
      impactMetricEn: 'Saves ~640–960 L / Day',
      impactMetricHi: 'दैनिक ~640-960 लीटर बचत',
      schoolContextEn: '160 enrolled students line up to wash hands before and after MDM meals. Running taps during lathering empties the overhead tank in just 15 minutes.',
      schoolContextHi: '160 छात्र भोजन से पहले और बाद में हाथ धोते हैं। साबुन लगाते समय खुला नल पूरे स्कूल की 500L टंकी को 15 मिनट में खाली कर देता है।',
      problemEn: 'Children leave taps running continuously for 30–45 seconds while applying soap and talking to classmates, wasting up to 8 Litres per handwash cycle.',
      problemHi: 'बच्चे साबुन लगाते समय नल चालू छोड़ देते हैं, जिससे एक बार हाथ धोने में 8 लीटर तक पानी नाली में बह जाता है।',
      actionStepsEn: [
        'Adopt the 3-step rhythm: Wet hands (3 sec) → Close Tap → Lather with soap (20 sec) → Open tap & Rinse (5 sec).',
        'Paint bright visual footprints and hand icons on the handwash platform in Hindi.',
        'Appoint 2 rotating student "Jal Rakshaks" (Water Wardens) to model the technique each day.',
        'Inspect tap valve handles to make sure even small Primary class children can easily close them tightly.'
      ],
      actionStepsHi: [
        '3-चरणीय नियम अपनाएं: हाथ गीला करें (3 से.) → नल बंद करें → साबुन मलें (20 से.) → नल खोलकर धोएं (5 से.)।',
        'हाथ धोने के चबूतरे पर 3-चरणीय नियम के सचित्र संकेत व बाल-सुलभ चित्र बनाएं।',
        'कक्षा 6 से 8 के 2 छात्रों को रोजाना "जल रक्षक" नियुक्त करें जो बच्चों को सही आदत सिखाएं।',
        'नल के हैंडल की जांच करें ताकि प्राथमिक कक्षा (कक्षा 1-5) के छोटे बच्चे भी उसे आसानी से बंद कर सकें।'
      ],
      measurableResultEn: 'Reduces daily handwash water consumption by 65%, ensuring adequate water remains in the tank for afternoon sanitation.',
      measurableResultHi: 'हाथ धोने में जल की खपत में 65% तक कमी, जिससे दोपहर बाद शौचालय उपयोग के लिए पर्याप्त पानी उपलब्ध रहता है।',
      studentActivityTitleEn: 'Jal Rakshak Lather Rhyme Countdown',
      studentActivityTitleHi: 'जल रक्षक 20-सेकंड बाल कविता',
      studentActivityDescEn: 'Students sing a 20-second Hindi hygiene rhyme with the tap turned off while scrubbing fingers, palms, and nails.',
      studentActivityDescHi: 'नल बंद करके 20 सेकंड तक उंगलियों और नाखूनों को साफ करते हुए बच्चे स्वच्छता कविता दोहराएं।',
      accentNavy: 'border-cyan-500/40 hover:border-cyan-400 group-hover:shadow-cyan-500/20',
      accentFrost: 'border-cyan-300 hover:border-cyan-500 hover:shadow-cyan-500/10'
    },
    {
      id: 'rain-first-flush',
      icon: CloudRain,
      titleEn: 'First-Flush Sediment Separation',
      titleHi: 'फर्स्ट-फ्लश गाद व मलबा निष्कासन',
      categoryEn: 'Harvesting Tech',
      categoryHi: 'वर्षा जल तकनीक',
      categoryColor: 'sky',
      teaserEn: 'Diverting initial 15–20 minutes of roof runoff protects recharge wells from silt clogs.',
      teaserHi: 'शुरुआती 15-20 मिनट के गंदे पानी को अलग कर सोख्ता गड्ढे व टंकी को गाद से बचाएं।',
      impactMetricEn: 'Protects 100% Water Quality',
      impactMetricHi: '100% जल गुणवत्ता सुरक्षा',
      schoolContextEn: 'UPG M.S. Dudhani-1 has a 100 sq.m flat concrete roof slab. Dust, bird droppings, and dried leaves accumulate heavily during dry months.',
      schoolContextHi: 'विद्यालय में 100 वर्ग मीटर कंक्रीट की पक्की छत है। शुष्क महीनों में छत पर पक्षियों की बीट, धूल और पेड़ के सूखे पत्ते जमा हो जाते हैं।',
      problemEn: 'Without a functional first-flush diverter, the first monsoon shower washes fine dust directly into downpipes, clogging infiltration chambers within 2 weeks.',
      problemHi: 'फर्स्ट-फ्लश वाल्व न होने पर पहली बारिश की सारी गंदगी सीधे पाइप में जाकर फिल्टर को 2 हफ्तों में चोक कर देती है।',
      actionStepsEn: [
        'Install a T-junction pipe diverter on the main downpipe before it enters the filtration chamber.',
        'Use an internal floating plastic ball that automatically seals the vertical diverter pipe once filled with initial dirty water.',
        'Ensure the first 1-2 mm of rain (~150–200 Litres of dirty wash) drains away safely.',
        'Clean out the diverter bottom screw-cap after every heavy rain spell.'
      ],
      actionStepsHi: [
        'फिल्टर कक्ष में जाने से पहले मुख्य डाउनपाइप पर टी-जंक्शन (T-joint) वाल्व लगाएं।',
        'पाइप में तैरने वाली हल्की प्लास्टिक बॉल लगाएं जो शुरुआती गंदा पानी भरने पर स्वतः बंद हो जाए।',
        'पहली 1-2 मिमी बारिश (~150-200 लीटर गंदा पानी) को सुरक्षित रूप से बाहर निकालें।',
        'हर बड़ी बारिश के बाद डाइवर्टर के निचले स्क्रू-कैप को खोलकर जमी हुई गाद साफ करें।'
      ],
      measurableResultEn: 'Prevents 92% of organic debris from reaching groundwater percolation beds and stops foul algae growth.',
      measurableResultHi: '92% जैविक कचरे व गाद को भूजल रिचार्ज गड्ढे में जाने से रोकता है और दुर्गंध समाप्त करता है।',
      studentActivityTitleEn: 'Turbidity Sediment Jar Test',
      studentActivityTitleHi: 'पारदर्शिता जार परीक्षण (कक्षा 7-8)',
      studentActivityDescEn: 'Compare two clear glass bottles: first-flush water vs subsequent clean rainwater to visually observe sediment settling time.',
      studentActivityDescHi: 'कांच की दो पारदर्शी बोतलों में पहले 5 मिनट का पानी और 20 मिनट बाद का पानी रखकर बच्चों को गाद का अंतर दिखाएं।',
      accentNavy: 'border-sky-500/40 hover:border-sky-400 group-hover:shadow-sky-500/20',
      accentFrost: 'border-sky-300 hover:border-sky-500 hover:shadow-sky-500/10'
    },
    {
      id: 'evaporation-mulching',
      icon: Sprout,
      titleEn: 'Campus Tree Ring Organic Mulching',
      titleHi: 'पौधों में सूखी पत्तियों की जैविक मल्चिंग',
      categoryEn: 'Soil & Moisture',
      categoryHi: 'मृदा व नमी संरक्षण',
      categoryColor: 'teal',
      teaserEn: 'A 2-inch layer of fallen dry leaves cuts soil moisture evaporation by up to 60%.',
      teaserHi: 'पौधों की थाली में 2-इंच सूखी पत्तियों की परत से मिट्टी की नमी 60% तक सुरक्षित रहती है।',
      impactMetricEn: 'Cuts Garden Water by 50%',
      impactMetricHi: 'सिंचाई जल में 50% बचत',
      schoolContextEn: 'Campus courtyard has flower beds and native shade trees that dry rapidly under intense summer sun (temperatures in Dumka frequently reach 40°C+).',
      schoolContextHi: 'स्कूल परिसर में पौधे व पेड़ हैं जिनकी मिट्टी दुमका की तेज गर्मी (40°C+) में सूखकर कड़ी हो जाती है।',
      problemEn: 'Bare exposed soil loses moisture rapidly, requiring frequent borewell pumping to keep saplings alive, increasing campus electricity costs.',
      problemHi: 'खुली मिट्टी से पानी तेजी से वाष्पीकृत होता है, जिससे पौधों को जिंदा रखने के लिए बार-बार बोरवेल चलाना पड़ता है।',
      actionStepsEn: [
        'Rake fallen neem, sal, and peepal leaves from the school playground instead of burning them.',
        'Create a 3-foot circular saucer bed around the base of each tree trunk.',
        'Spread a 2 to 3 inch thick layer of dry foliage mulch, leaving a 2-inch gap right around the bark.',
        'Water plants strictly early in the morning before 8 AM or after 4 PM to prevent thermal shock.'
      ],
      actionStepsHi: [
        'मैदान में गिरी नीम, साल व पीपल की सूखी पत्तियों को जलाने के बजाय इकट्ठा करें।',
        'हर पौधे के तने के चारों ओर 3-फीट चौड़ा गोल घेरा (थाला) बनाएं।',
        'तने से 2 इंच दूर रखकर 2 से 3 इंच मोटी पत्तियों की परत बिछाएं।',
        'पौधों को हमेशा सुबह 8 बजे से पहले या शाम 4 बजे के बाद ही पानी दें।'
      ],
      measurableResultEn: 'Reduces required watering frequency from every single day to just twice a week while enriching soil with natural humus.',
      measurableResultHi: 'रोज पानी देने की आवश्यकता घटकर सप्ताह में केवल दो बार रह जाती है और मिट्टी प्राकृतिक खाद से समृद्ध होती है।',
      studentActivityTitleEn: 'Soil Moisture Finger Thermometer',
      studentActivityTitleHi: 'मृदा नमी उंगली परीक्षण',
      studentActivityDescEn: 'Students insert a finger 2 inches into mulched soil vs exposed bare soil to feel the cool retained moisture firsthand.',
      studentActivityDescHi: 'छात्र मल्चिंग वाली मिट्टी और सूखी खुली मिट्टी में उंगली डालकर नमी व ठंडक का वास्तविक अंतर महसूस करें।',
      accentNavy: 'border-teal-500/40 hover:border-teal-400 group-hover:shadow-teal-500/20',
      accentFrost: 'border-teal-300 hover:border-teal-500 hover:shadow-teal-500/10'
    },
    {
      id: 'pump-schedule',
      icon: Zap,
      titleEn: 'Timed Submersible Pump Operation',
      titleHi: 'निश्चित समय पर सबमर्सिबल पंप संचालन',
      categoryEn: 'Energy & Tank Storage',
      categoryHi: 'बिजली व टंकी सुरक्षा',
      categoryColor: 'indigo',
      teaserEn: 'Pumping for exactly 12–15 minutes prevents ~500L tank overflows and protects the motor.',
      teaserHi: 'घड़ी देखकर ठीक 12-15 मिनट पंप चलाने से 500L टंकी का ओवरफ्लो रुकता है व मोटर सुरक्षित रहती है।',
      impactMetricEn: 'Stops 200–300 L Spillage',
      impactMetricHi: '200-300 L ओवरफ्लो बचत',
      schoolContextEn: 'The school depends on an electric submersible pump. When electricity returns, staff turn on the motor and forget it during busy morning assemblies.',
      schoolContextHi: 'स्कूल बिजली से चलने वाले सबमर्सिबल बोरवेल पर निर्भर है। प्रार्थना सभा के दौरान पंप चालू होकर भूल जाने से टंकी ओवरफ्लो होती है।',
      problemEn: 'Overhead ~500 L tank fills within 12–15 minutes. Unmonitored pumping spills hundreds of litres onto the roof and risks burning out the motor during low voltage.',
      problemHi: '500 लीटर की टंकी 12-15 मिनट में भर जाती है। ध्यान न देने पर सैकड़ों लीटर पानी छत पर बहता है और वोल्टेज कम होने पर मोटर जलने का खतरा रहता है।',
      actionStepsEn: [
        'Calculate pump delivery: At 35–40 L/min, an empty 500L tank takes exactly 13 minutes to fill.',
        'Use an alarm clock or phone timer set to 12 minutes every time the starter switch is flipped.',
        'Install a simple 1-inch mechanical float ball valve inside the tank lid as an automatic shut-off safeguard.',
        'Route the tank overflow tell-tale pipe directly above the staff room window so overflow is noticed immediately.'
      ],
      actionStepsHi: [
        'पंप क्षमता नापें: 35-40 ली./मिनट की दर से खाली 500L टंकी भरने में मात्र 13 मिनट लगते हैं।',
        'जब भी स्टार्टर बटन दबाएं, मोबाइल में तुरंत 12 मिनट का अलार्म सेट करें।',
        'टंकी के अंदर एक ₹150 का फ्लोट बॉल वाल्व लगाएं जो टंकी भरते ही पानी का प्रवाह रोक दे।',
        'ओवरफ्लो पाइप का मुहाना शिक्षक कक्ष या बरामदे के सामने रखें ताकि पानी गिरते ही तुरंत पता चल जाए।'
      ],
      measurableResultEn: 'Eliminates 100% of overflow wastage while lowering monthly electricity consumption by 25–30%.',
      measurableResultHi: 'ओवरफ्लो की 100% बर्बादी समाप्त और स्कूल के मासिक बिजली बिल में 25-30% की बचत।',
      studentActivityTitleEn: 'Tank Fill-Time Stopwatch Duty',
      studentActivityTitleHi: 'स्टॉपवॉच टाइमर ड्यूटी',
      studentActivityDescEn: 'Class 8 student monitors time the morning pump fill using a stopwatch and signal staff to turn off power at precisely 12 minutes.',
      studentActivityDescHi: 'कक्षा 8 के छात्र स्टॉपवॉच से पंप चलने का समय नोट करें और 12 मिनट होते ही शिक्षक को सूचित कर स्विच बंद कराएं।',
      accentNavy: 'border-indigo-500/40 hover:border-indigo-400 group-hover:shadow-indigo-500/20',
      accentFrost: 'border-indigo-300 hover:border-indigo-500 hover:shadow-indigo-500/10'
    }
  ];

  return (
    <div className="mt-12 pt-8 border-t border-slate-800/80">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-2">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'hi' ? 'दैनिक व्यावहारिक मार्गदर्शन' : 'Practical Action Guides'}</span>
          </div>
          <h3 className={`text-2xl font-black tracking-tight ${theme === 'frost' ? 'text-slate-900' : 'text-white'}`}>
            {language === 'hi' ? 'जल संरक्षण सुझाव व कार्य योजना' : 'Water Conservation Tips & Action Guides'}
          </h3>
          <p className={`text-sm mt-1 max-w-2xl ${theme === 'frost' ? 'text-slate-600' : 'text-slate-400'}`}>
            {language === 'hi' 
              ? 'उत्क्रमित मध्य विद्यालय दुधानी-1 के 160 बच्चों व शिक्षकों हेतु 6 व्यावहारिक, तत्काल लागू करने योग्य उपाय। पूरा विवरण व विद्यार्थी प्रयोग देखने हेतु किसी भी कार्ड पर क्लिक करें।' 
              : 'Six highly actionable, school-tested conservation practices for UPG M.S. Dudhani-1. Click any card to open the interactive educational guide and classroom activity.'}
          </p>
        </div>

        {/* Progress Tracker Pill */}
        <div className={`p-3 rounded-xl border flex items-center gap-3 shrink-0 ${
          theme === 'frost' ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/90 border-slate-800'
        }`}>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
              theme === 'frost' ? 'bg-emerald-100 text-emerald-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
            }`}>
              {completedTips.length}/6
            </div>
            <div>
              <div className={`text-xs font-bold leading-tight ${theme === 'frost' ? 'text-slate-800' : 'text-slate-200'}`}>
                {language === 'hi' ? 'क्रियान्वित उपाय' : 'Practices Adopted'}
              </div>
              <div className={`text-[11px] ${theme === 'frost' ? 'text-slate-500' : 'text-slate-400'}`}>
                {language === 'hi' ? `${Math.round((completedTips.length / 6) * 100)}% लक्ष्य पूर्ण` : `${Math.round((completedTips.length / 6) * 100)}% Implemented`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 6 Clickable Icon-Based Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {tipsList.map((tip) => {
          const IconComponent = tip.icon;
          const isDone = completedTips.includes(tip.id);

          return (
            <div
              key={tip.id}
              onClick={() => setSelectedTip(tip)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedTip(tip);
                }
              }}
              className={`group relative p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                theme === 'frost'
                  ? `bg-white ${tip.accentFrost} shadow-sm hover:shadow-md`
                  : `bg-slate-900/90 ${tip.accentNavy} shadow-lg backdrop-blur-sm`
              }`}
            >
              {/* Top Row: Icon + Category Badge + Checkbox */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    theme === 'frost'
                      ? 'bg-sky-50 text-sky-700 border border-sky-200'
                      : 'bg-slate-800/90 text-cyan-400 border border-slate-700/80'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${
                      theme === 'frost'
                        ? 'bg-slate-100 text-slate-700 border-slate-300'
                        : 'bg-slate-800/90 text-slate-300 border-slate-700'
                    }`}>
                      {language === 'hi' ? tip.categoryHi : tip.categoryEn}
                    </span>
                  </div>
                </div>

                {/* Mark as adopted toggle button */}
                <button
                  type="button"
                  onClick={(e) => toggleTipComplete(tip.id, e)}
                  title={isDone ? 'Mark as pending' : 'Mark as implemented'}
                  className={`p-1.5 rounded-lg border transition-all ${
                    isDone
                      ? (theme === 'frost' ? 'bg-emerald-500 text-white border-emerald-600' : 'bg-emerald-950 text-emerald-300 border-emerald-700')
                      : (theme === 'frost' ? 'bg-slate-100 text-slate-400 border-slate-200 hover:text-slate-700' : 'bg-slate-800/60 text-slate-500 border-slate-700 hover:text-slate-300')
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>

              {/* Title */}
              <h4 className={`text-base font-bold tracking-tight mb-1.5 group-hover:text-cyan-500 transition-colors ${
                theme === 'frost' ? 'text-slate-900' : 'text-white'
              }`}>
                {language === 'hi' ? tip.titleHi : tip.titleEn}
              </h4>

              {/* Teaser Description */}
              <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${
                theme === 'frost' ? 'text-slate-600' : 'text-slate-400'
              }`}>
                {language === 'hi' ? tip.teaserHi : tip.teaserEn}
              </p>

              {/* Bottom Footer: Impact Metric + Call-to-action */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <span className={`text-xs font-bold flex items-center gap-1 ${
                  theme === 'frost' ? 'text-emerald-700' : 'text-emerald-400'
                }`}>
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? tip.impactMetricHi : tip.impactMetricEn}</span>
                </span>

                <span className={`text-xs font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform ${
                  theme === 'frost' ? 'text-sky-700' : 'text-cyan-400'
                }`}>
                  <span>{language === 'hi' ? 'विवरण' : 'Guide'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Dialog for Clicked Tip */}
      {selectedTip && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedTip(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl transition-all p-6 sm:p-8 relative ${
              theme === 'frost' 
                ? 'bg-white border-sky-200 text-slate-900' 
                : 'bg-slate-900 border-slate-700 text-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
                  theme === 'frost' 
                    ? 'bg-sky-100 text-sky-800 border border-sky-200' 
                    : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                }`}>
                  {React.createElement(selectedTip.icon, { className: 'w-6 h-6' })}
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                      theme === 'frost'
                        ? 'bg-slate-100 text-slate-700 border-slate-300'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}>
                      {language === 'hi' ? selectedTip.categoryHi : selectedTip.categoryEn}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded border flex items-center gap-1 ${
                      theme === 'frost' 
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                        : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                    }`}>
                      <TrendingDown className="w-3 h-3" />
                      <span>{language === 'hi' ? selectedTip.impactMetricHi : selectedTip.impactMetricEn}</span>
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${
                    theme === 'frost' ? 'text-slate-900' : 'text-white'
                  }`}>
                    {language === 'hi' ? selectedTip.titleHi : selectedTip.titleEn}
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedTip(null)}
                aria-label="Close dialog"
                className={`p-2 rounded-xl transition-all ${
                  theme === 'frost'
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* School Ground Reality Context */}
            <div className={`p-4 rounded-2xl mb-5 border ${
              theme === 'frost'
                ? 'bg-sky-50/80 border-sky-200 text-slate-800'
                : 'bg-slate-950/80 border-slate-800 text-slate-300'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
                <Info className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'दुधानी-1 विद्यालय संदर्भ' : 'Ground Reality at Dudhani-1'}</span>
              </div>
              <p className="text-xs leading-relaxed">
                {language === 'hi' ? selectedTip.schoolContextHi : selectedTip.schoolContextEn}
              </p>
            </div>

            {/* The Core Problem */}
            <div className="mb-5">
              <h4 className={`text-xs font-extrabold uppercase tracking-wider mb-1.5 ${
                theme === 'frost' ? 'text-slate-800' : 'text-slate-200'
              }`}>
                {language === 'hi' ? 'समस्या का प्रभाव (The Issue):' : 'Why This Matters:'}
              </h4>
              <p className={`text-sm leading-relaxed ${
                theme === 'frost' ? 'text-slate-700' : 'text-slate-300'
              }`}>
                {language === 'hi' ? selectedTip.problemHi : selectedTip.problemEn}
              </p>
            </div>

            {/* Step-by-Step Action Plan */}
            <div className="mb-6">
              <h4 className={`text-xs font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${
                theme === 'frost' ? 'text-slate-800' : 'text-slate-200'
              }`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{language === 'hi' ? 'चरणबद्ध कार्य योजना (Action Steps):' : 'Actionable Step-by-Step Guide:'}</span>
              </h4>

              <div className="space-y-2.5">
                {(language === 'hi' ? selectedTip.actionStepsHi : selectedTip.actionStepsEn).map((step, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-xl border flex items-start gap-3 ${
                      theme === 'frost' 
                        ? 'bg-slate-50 border-slate-200 text-slate-800' 
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5 ${
                      theme === 'frost'
                        ? 'bg-sky-200 text-sky-900'
                        : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                    }`}>
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student & Classroom Educational Activity */}
            <div className={`p-4 rounded-2xl border mb-6 ${
              theme === 'frost'
                ? 'bg-amber-50/90 border-amber-300 text-amber-950'
                : 'bg-amber-950/30 border-amber-700/60 text-amber-200'
            }`}>
              <div className="flex items-center gap-2 mb-1.5">
                <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
                <h5 className="text-xs font-extrabold uppercase tracking-wider">
                  {language === 'hi' ? selectedTip.studentActivityTitleHi : selectedTip.studentActivityTitleEn}
                </h5>
              </div>
              <p className="text-xs leading-relaxed">
                {language === 'hi' ? selectedTip.studentActivityDescHi : selectedTip.studentActivityDescEn}
              </p>
            </div>

            {/* Expected Result & Footer Buttons */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs">
                <span className={`font-semibold ${theme === 'frost' ? 'text-slate-500' : 'text-slate-400'}`}>
                  {language === 'hi' ? 'अपेक्षित परिणाम: ' : 'Expected Impact: '}
                </span>
                <span className={`font-bold ${theme === 'frost' ? 'text-emerald-700' : 'text-emerald-400'}`}>
                  {language === 'hi' ? selectedTip.measurableResultHi : selectedTip.measurableResultEn}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => toggleTipComplete(selectedTip.id)}
                  className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
                    completedTips.includes(selectedTip.id)
                      ? (theme === 'frost' ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-emerald-600 text-white hover:bg-emerald-500')
                      : (theme === 'frost' ? 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300' : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700')
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {completedTips.includes(selectedTip.id)
                      ? (language === 'hi' ? 'क्रियान्वित चिह्नित (Completed)' : 'Marked as Implemented')
                      : (language === 'hi' ? 'क्रियान्वित चिह्नित करें' : 'Mark as Implemented')}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTip(null)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    theme === 'frost' 
                      ? 'bg-slate-200 text-slate-800 hover:bg-slate-300' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {language === 'hi' ? 'बंद करें' : 'Close'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
