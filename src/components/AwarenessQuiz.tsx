import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { QUIZ_QUESTIONS } from '../data/initialData';
import confetti from 'canvas-confetti';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Award, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export const AwarenessQuiz: React.FC = () => {
  const { language, t } = useApp();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<number, boolean>>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const selectedOption = selectedAnswers[currentQ.id];
  const isSubmitted = submittedQuestions[currentQ.id];

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return; // Prevent changing after submission
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: idx }));
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === undefined) return;
    setSubmittedQuestions((prev) => ({ ...prev, [currentQ.id]: true }));

    // If this was the last question, check if all submitted
    const newSubmitted = { ...submittedQuestions, [currentQ.id]: true };
    if (Object.keys(newSubmitted).length === QUIZ_QUESTIONS.length) {
      setQuizFinished(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmittedQuestions({});
    setQuizFinished(false);
  };

  // Score calculation
  const correctCount = Object.keys(submittedQuestions).reduce((acc, qIdStr) => {
    const qId = parseInt(qIdStr);
    const q = QUIZ_QUESTIONS.find((item) => item.id === qId);
    if (q && selectedAnswers[qId] === q.correctIndex) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const totalAnswered = Object.keys(submittedQuestions).length;

  return (
    <section id="quiz" className="py-16 bg-slate-950/80 border-b border-slate-800/80 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'इंटरैक्टिव जागरूकता परख' : 'Student Awareness Module'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.quizTitle}
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            {t.quizSubtitle}
          </p>
        </div>

        {/* Quiz Body */}
        {!quizFinished ? (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            
            {/* Progress Bar & Counter */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800">
              <span className="font-bold text-cyan-400">
                {language === 'hi' ? `प्रश्न ${currentIndex + 1} / ${QUIZ_QUESTIONS.length}` : `Question ${currentIndex + 1} of ${QUIZ_QUESTIONS.length}`}
              </span>

              <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-semibold">
                {language === 'hi' ? currentQ.categoryHi : currentQ.categoryEn}
              </span>

              <span className="text-slate-400">
                {language === 'hi' ? `स्कोर: ${correctCount} / ${totalAnswered}` : `Score: ${correctCount}/${totalAnswered}`}
              </span>
            </div>

            {/* Stepper Progress Indicator */}
            <div className="flex gap-1.5 mb-6">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const answered = submittedQuestions[q.id];
                const isCorrect = answered && selectedAnswers[q.id] === q.correctIndex;
                const isCurrent = idx === currentIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 flex-1 rounded-full transition-all ${
                      isCurrent
                        ? 'bg-cyan-400 ring-2 ring-cyan-500/50'
                        : answered
                        ? isCorrect
                          ? 'bg-emerald-500'
                          : 'bg-rose-500'
                        : 'bg-slate-800'
                    }`}
                    title={`Jump to Question ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-relaxed">
              {language === 'hi' ? currentQ.questionHi : currentQ.questionEn}
            </h3>

            {/* 4 Options Grid */}
            <div className="space-y-3 mb-6">
              {(language === 'hi' ? currentQ.optionsHi : currentQ.optionsEn).map((option, idx) => {
                const isChosen = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let optionStyle = 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-200';

                if (isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-950/50 border-emerald-600 text-emerald-200 font-bold';
                  } else if (isChosen && !isCorrect) {
                    optionStyle = 'bg-rose-950/50 border-rose-600 text-rose-200';
                  } else {
                    optionStyle = 'bg-slate-950/40 border-slate-800 text-slate-500 opacity-60';
                  }
                } else if (isChosen) {
                  optionStyle = 'bg-cyan-950/60 border-cyan-500 text-cyan-200 font-bold ring-1 ring-cyan-500';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                    )}
                    {isSubmitted && isChosen && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Box shown only AFTER answer is submitted */}
            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-cyan-900/60 animate-in fade-in">
                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 mb-1">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>{t.quizExplanation}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'hi' ? currentQ.explanationHi : currentQ.explanationEn}
                </p>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-3.5 py-2 text-xs font-semibold rounded-xl text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t.quizPrev}</span>
              </button>

              {!isSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === undefined}
                  className="px-5 py-2.5 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 disabled:opacity-40 disabled:pointer-events-none shadow-md shadow-cyan-500/20"
                >
                  {t.quizSubmit}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                >
                  <span>{currentIndex === QUIZ_QUESTIONS.length - 1 ? (language === 'hi' ? 'परिणाम देखें' : 'View Results') : t.quizNext}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        ) : (
          /* Quiz Results Finish Screen */
          <div className="bg-slate-900/95 border border-cyan-800/80 rounded-2xl p-8 text-center shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white mb-2">
              {language === 'hi' ? 'क्विज़ संपन्न!' : 'Quiz Completed!'}
            </h3>

            <p className="text-sm text-slate-300 mb-6">
              {language === 'hi'
                ? 'आपने जल संरक्षण एवं वर्षा जल संचयन मॉड्यूल सफलतापूर्वक पूरा किया।'
                : 'You have successfully completed the Water Conservation & Rainwater Harvesting Awareness module.'}
            </p>

            <div className="inline-block p-6 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
              <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider mb-1">
                {t.quizScore}
              </div>
              <div className="text-5xl font-black text-cyan-400">
                {correctCount} / {QUIZ_QUESTIONS.length}
              </div>
              <div className="text-xs text-slate-400 mt-2">
                {Math.round((correctCount / QUIZ_QUESTIONS.length) * 100)}% {language === 'hi' ? 'सटीकता' : 'Accuracy'}
              </div>
            </div>

            <div className="max-w-md mx-auto text-xs text-slate-400 leading-relaxed mb-8">
              {correctCount >= 8 ? (
                <span className="text-emerald-400 font-semibold">
                  {language === 'hi'
                    ? 'असाधारण ज्ञान! आप विद्यालय में एक उत्कृष्ट जल दूत (Water Steward) की भूमिका निभा सकते हैं।'
                    : 'Outstanding water literacy! You have a firm grasp of hydrological principles and campus conservation.'}
                </span>
              ) : (
                <span className="text-amber-300">
                  {language === 'hi'
                    ? 'अच्छा प्रयास! नलों के रख-रखाव और छत से इनलेट के महत्व की पुनः समीक्षा करें।'
                    : 'Good effort! Review the diagnostic failure points to reinforce your rainwater knowledge.'}
                </span>
              )}
            </div>

            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-2 mx-auto shadow-lg shadow-cyan-500/25 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.quizRetake}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
