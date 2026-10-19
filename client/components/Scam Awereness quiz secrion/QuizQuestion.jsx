import { Lightbulb ,ArrowRight} from "lucide-react";

import { useState } from "react";

const QuizQuestion = ({ question }) => {
    const[selectedAnswer,setSelectedAnswer]=useState(null)
    const[showExplanation,setShowExplanation]=useState(false)
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 mt-5">

      {/* Message box */}
      <div className="rounded-xl bg-slate-300 p-4 text-gray-700">
        {question.message}
      </div>

      {/* Question */}
      <h3 className="mt-4 font-bold text-gray-900 ">
        {question.question}
      </h3>

{/* Answer options */}
<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
  {question.options.map((option, index) => (
<button
  key={option}
  onClick={() => setSelectedAnswer(option)}
className={`flex min-h-[50px] items-center gap-3 rounded-xl border px-4 py-3 text-left transition
  ${
    selectedAnswer === option && selectedAnswer === question.correctAnswer
      ? "border-emerald-400 bg-emerald-50 text-emerald-700"
      : selectedAnswer === option
      ? "border-red-300 bg-red-50 text-red-600"
      : selectedAnswer && option === question.correctAnswer
      ? "border-emerald-400 bg-emerald-50 text-emerald-700"
      : "border-gray-200 bg-white text-gray-700 hover:border-red-300 hover:bg-red-50"
  }`}   
>
  {/* Radio circle */}
  <span
    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2
      ${
        selectedAnswer === option
          ? "border-red-500"
          : "border-gray-300"
      }`}
  >
    {selectedAnswer === option && (
      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
    )}
  </span>

  {/* Option text */}
  <span className="text-sm font-medium">
    <span className="mr-1 font-bold">
      {String.fromCharCode(65 + index)}.
    </span>
    {option}
  </span>
</button>
  ))}
</div>
{selectedAnswer && (
  <div
    className={`mt-4 rounded-xl border p-4 ${
      selectedAnswer === question.correctAnswer
        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
        : "border-red-200 bg-red-50 text-red-700"
    }`}
  >
    <p className="font-semibold">
      {selectedAnswer === question.correctAnswer
        ? "✓ Correct!"
        : "✗ Incorrect!"}
    </p>

    <p className="mt-1 text-sm">
      {selectedAnswer === question.correctAnswer
        ? "You spotted the scam warning sign."
        : `The correct answer is: ${question.correctAnswer}`}
    </p>
  </div>
)}
{/* show Explanation */}

<div className="flex flex-col gap-2 md:flex-row justify-between mt-5">
<button
  onClick={() => setShowExplanation((prev) => !prev)}
  className="group inline-flex items-center gap-2.5 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2.5 text-sm font-semibold text-amber-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-400 hover:from-amber-100 hover:to-yellow-100 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 active:scale-95"
>
  <Lightbulb size={18} className="text-amber-500" />
  {showExplanation ? "Hide Explanation" : "Show Explanation"}
</button>

<button className="group inline-flex items-center gap-2 rounded-xl border-2 border-red-500 bg-white px-6 py-3 text-sm font-semibold text-red-600 transition-all duration-200 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-[0.98]">
  Next Question
  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
</button>
</div>


{showExplanation && (
  <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
    <h3 className="font-semibold text-amber-800">
      💡 Why is this a scam?
    </h3>

    <p className="mt-2 text-sm leading-relaxed text-gray-700">
      {question.explanation}
    </p>
  </div>
)}
    </div>
  );
};

export default QuizQuestion;