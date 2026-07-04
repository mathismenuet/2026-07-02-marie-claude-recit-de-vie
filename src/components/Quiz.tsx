import { useState } from 'react';
import { CheckCircle, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { quizData, type QuizOption } from '../data/quizData';

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizData[currentIndex];
  const hasAnswered = selectedOptionId !== null;

  const handleSelectOption = (option: QuizOption) => {
    if (hasAnswered) return;
    
    setSelectedOptionId(option.id);
    if (option.isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionId(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <section className="w-full py-16 px-4 bg-white border-t border-medium-dark-green/5">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}>Bravo ! Quiz terminé.</h2>
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-dark-green">{score}/{quizData.length}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mt-2">Score</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-800">{Math.round((score / quizData.length) * 100)}%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mt-2">Correctes</div>
              </div>
            </div>
            
            <div className="text-left bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Thèmes abordés</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>L'enfance au château du Chillon</li>
                <li>Daniel, Artway et la petite robe noire</li>
                <li>La famille et ses anecdotes</li>
                <li>Les voyages et la liberté de Marie-Claude</li>
              </ul>
            </div>

            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-sm"
            >
              <RotateCcw className="w-5 h-5" />
              Recommencer le Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 px-4 bg-white border-t border-medium-dark-green/5">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-500">Quiz : L'histoire de Mamie</span>
            </div>
            <div className="text-sm font-medium text-gray-500">
              {currentIndex + 1}/{quizData.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 h-1">
            <div 
              className="bg-blue-500 h-1 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / quizData.length) * 100}%` }}
            ></div>
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-8 leading-snug">
              {question.question}
            </h3>

            <div className="space-y-3">
              {question.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                let buttonClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-4 ";
                let icon = null;

                if (!hasAnswered) {
                  buttonClass += "border-gray-200 hover:border-blue-400 hover:bg-blue-50/30 bg-white text-gray-700 cursor-pointer";
                  icon = <div className="min-w-6 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-500 font-medium">{option.id}</div>;
                } else {
                  buttonClass += "cursor-default ";
                  if (option.isCorrect) {
                    if (isSelected) {
                      buttonClass += "bg-green-50 border-green-200 text-green-900";
                    } else {
                      buttonClass += "bg-white border-green-200 text-gray-800";
                    }
                    icon = <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />;
                  } else if (isSelected) {
                    buttonClass += "bg-red-50 border-red-200 text-red-900";
                    icon = <XCircle className="w-6 h-6 text-red-500 shrink-0" />;
                  } else {
                    buttonClass += "bg-white border-gray-100 text-gray-400 opacity-60";
                    icon = <div className="min-w-6 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-sm text-gray-400 font-medium">{option.id}</div>;
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option)}
                    disabled={hasAnswered}
                    className={buttonClass}
                  >
                    {icon}
                    <div className="flex-1">
                      <div className="font-medium text-[15px] leading-relaxed">{option.text}</div>
                      
                      {/* Explanations shown only after answering */}
                      {hasAnswered && isSelected && (
                        <div className="mt-2 text-sm animate-fade-in">
                          {option.isCorrect ? (
                            <span className="font-semibold text-green-700">✓ Réponse correcte</span>
                          ) : (
                            <span className="font-semibold text-red-700">✗ Pas tout à fait</span>
                          )}
                          {option.explanation && (
                            <p className="mt-1 text-gray-600 font-normal">{option.explanation}</p>
                          )}
                        </div>
                      )}
                      
                      {/* Show explanation for the correct answer if they got it wrong */}
                      {hasAnswered && !isSelected && option.isCorrect && option.explanation && (
                         <div className="mt-2 text-sm animate-fade-in">
                            <span className="font-semibold text-green-700">La bonne réponse :</span>
                            <p className="mt-1 text-gray-600 font-normal">{option.explanation}</p>
                         </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {hasAnswered && (
              <div className="mt-8 flex justify-end animate-fade-in">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-sm"
                >
                  {currentIndex < quizData.length - 1 ? 'Suivante' : 'Terminer'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
