export type Language = 'en' | 'hi';

export type TapCondition = 
  | 'working'
  | 'leaking'
  | 'not_closing'
  | 'damaged'
  | 'needs_verification'
  | 'repaired';

export interface TapRecord {
  id: string; // e.g., 'TAP-01'
  name: string;
  nameHi: string;
  location: string;
  locationHi: string;
  condition: TapCondition;
  lastInspected: string;
  inspector: string;
  notes: string;
  notesHi: string;
  isReportedFaulty: boolean;
}

export interface WaterSupplyLog {
  id: string;
  date: string;
  electricityStatus: 'available' | 'partial' | 'outage';
  pumpOperational: boolean;
  tankStatus: 'empty' | 'low' | 'half' | 'full' | 'overflow';
  waterShortageObserved: boolean;
  leakageObserved: boolean;
  notes: string;
}

export interface DiagnosticStage {
  id: 'roof' | 'inlet' | 'pvc_pipe' | 'recharge_chamber' | 'groundwater';
  titleEn: string;
  titleHi: string;
  status: 'accumulating' | 'failure_point' | 'no_water' | 'non_functional' | 'unverified';
  observationEn: string;
  observationHi: string;
  conditionEn: string;
  conditionHi: string;
  whyItMattersEn: string;
  whyItMattersHi: string;
  inspectionPointsEn: string[];
  inspectionPointsHi: string[];
  suggestedActionEn: string;
  suggestedActionHi: string;
  safetyDisclaimerEn: string;
  safetyDisclaimerHi: string;
}

export interface AdvisorRecommendation {
  id: string;
  category: 'leakage' | 'overflow' | 'tank' | 'electricity' | 'rainwater' | 'garden' | 'filtration' | 'monitoring';
  titleEn: string;
  titleHi: string;
  evidenceEn: string;
  evidenceHi: string;
  possibleReasonEn: string;
  possibleReasonHi: string;
  actionEn: string;
  actionHi: string;
  benefitEn: string;
  benefitHi: string;
  responsiblePartyEn: string;
  responsiblePartyHi: string;
  priority: 'high' | 'medium' | 'low';
  requiresAdultVerification: boolean;
}

export interface QuizQuestion {
  id: number;
  questionEn: string;
  questionHi: string;
  optionsEn: string[];
  optionsHi: string[];
  correctIndex: number;
  explanationEn: string;
  explanationHi: string;
  categoryEn: string;
  categoryHi: string;
}
