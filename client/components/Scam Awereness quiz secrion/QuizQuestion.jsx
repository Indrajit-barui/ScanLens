import { Lightbulb, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

const QuizQuestion = ({
  question,
  onNext,
  onPrev,
  currentQuestionIndex,
  totalQuestion,
  onFinish,
  onAnswerSelect,
  selectedAnswer,
}) => {
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="mt-5 rounded-2xl border border-[#263653] bg-[#111827] p-5">

      {/* Question */}
      <h3 className="mt-4 font-bold text-white">
        {question.question}
      </h3>

      {/* Answer Options */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {question.options.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => onAnswerSelect(index)}
            className={`flex min-h-[50px] items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
              selectedAnswer === index
                ? "border-rose-500 bg-rose-500/15 text-rose-300"
                : "border-[#263653] bg-[#172238] text-slate-300 hover:border-rose-500/50 hover:bg-rose-500/10"
            }`}
          >
            {/* Radio Circle */}
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                selectedAnswer === index
                  ? "border-rose-500"
                  : "border-slate-500"
              }`}
            >
              {selectedAnswer === index && (
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              )}
            </span>

            {/* Option Text */}
            <span className="text-sm font-medium">
              <span className="mr-1 font-bold">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </span>
          </button>
        ))}
      </div>

      {/* Explanation and Navigation */}
      <div className="mt-5 flex flex-col justify-between gap-3 md:flex-row">

        {/* Show Explanation */}
        <div>
          <button
            type="button"
            onClick={() => setShowExplanation((prev) => !prev)}
            className="group inline-flex items-center gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-sm font-semibold text-amber-400 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 active:scale-95"
          >
            <Lightbulb size={18} />
            {showExplanation ? "Hide Explanation" : "Show Explanation"}
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col items-center gap-2 sm:flex-row">

          <button
            type="button"
            onClick={onPrev}
            disabled={currentQuestionIndex === 0}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Previous
          </button>

          <button
            type="button"
            onClick={() => {
              if (currentQuestionIndex === totalQuestion - 1) {
                onFinish();
              } else {
                onNext();
              }

              setShowExplanation(false);
            }}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-950/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 active:scale-[0.98] sm:w-auto"
          >
            {currentQuestionIndex === totalQuestion - 1
              ? "Finish Quiz"
              : "Next Question"}

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
          <h3 className="font-semibold text-amber-400">
            💡 Why is this a scam?
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;