import {
  Trophy,
  CircleCheck,
  CircleX,
  GraduationCap,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
const QuizResult = ({result,onTryAgain,onExploreMore}) => {
  const [showReview, setShowReview] = useState(false);
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">

      {/* Header */}
      <div className="flex flex-col items-center text-center">

        <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
          <Trophy size={42} className="text-amber-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Quiz Completed!
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">
          Great job! You've completed the Job Scams quiz.
          <br className="hidden sm:block" />
          Keep learning and stay safe from scams!
        </p>
      </div>

      {/* Your Score */}
      <div className="mx-auto mt-6 flex max-w-lg flex-col items-center justify-center gap-5 rounded-2xl bg-gradient-to-r from-red-50 to-rose-100 p-6 sm:flex-row sm:gap-12">

        <div>
          <p className="text-lg font-semibold text-gray-900">
            Your Score
          </p>

          <p className="mt-1 text-5xl font-bold text-red-600">
           {result.correctAnswers}
           <span className="text-3xl">/{result.totalQuestions}</span>
          </p>
        </div>

{/* Percentage Circle */}
<div
  className="flex h-28 w-28 items-center justify-center rounded-full"
  style={{
    background: `conic-gradient(#ef233c 0% ${result.score}%, #e5e7eb ${result.score}% 100%)`,
  }}
>
  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
    <span className="text-xl font-bold text-gray-900">
      {result.score}%
    </span>
  </div>
</div>
      </div>

      {/* Statistics Cards */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">

        {/* Correct Answers */}
        <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
            <CircleCheck size={30} className="text-emerald-500" />
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-900">{result.correctAnswers}</p>
            <p className="text-sm text-gray-500">Correct Answers</p>
          </div>
        </div>

        {/* Incorrect Answers */}
        <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-50">
            <CircleX size={30} className="text-red-500" />
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-900">{result.incorrectAnswers}</p>
            <p className="text-sm text-gray-500">Incorrect Answers</p>
          </div>
        </div>



        {/* Quiz Category */}
        <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-50">
            <GraduationCap size={30} className="text-purple-500" />
          </div>

          <div>
            <p className="font-bold text-gray-900">
               {result.category
                  .replaceAll("-", " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
             </p>
            <p className="text-sm text-gray-500">Quiz Category</p>
          </div>
        </div>

      </div>

      {/* Learning Message */}
      <div className="mt-5 flex items-start gap-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4 sm:items-center">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
          <ShieldCheck size={30} className="text-emerald-600" />
        </div>

        <div>
          <h3 className="font-bold text-emerald-800">
            You're now more aware!
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-gray-600">
            You've learned how to identify common job scams.
            Keep these tips in mind and stay cautious online.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

        {/* Try Again */}
        <button
        onClick={onTryAgain}
          className="group flex items-center justify-center gap-2 rounded-xl border border-slate-400 px-6 py-3 font-semibold text-gray-900 transition hover:bg-slate-50"
        >
          <RotateCcw
            size={20}
            className="transition-transform duration-300 group-hover:-rotate-45"
          />
          Try Again
        </button>

        {/* Explore More Quizzes */}
        <button
        onClick={onExploreMore}
          className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-6 py-3 font-semibold text-white shadow-md shadow-red-500/20 transition hover:from-red-600 hover:to-rose-700"
        >
          Explore More Quizzes

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

       {/* review result */}
<button
onClick={() => setShowReview((prev) => !prev)}
  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-slate-900 py-3 pl-6 pr-3 font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
>
  {showReview ? "Hide Review" : "Review Result"}

  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 group-hover:bg-red-500">
    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    />
  </span>
</button>

      </div>

{/* Review Answers */}
{showReview && (
<div className="mt-8">
  <h2 className="text-xl font-bold text-gray-900 mb-4">
    Review Answers
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-3">Question</th>
          <th className="p-3">Your Answer</th>
          <th className="p-3">Correct Answer</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>

      <tbody>
        {result.reviewAnswers.map((item, index) => (
          <tr key={index} className="border-b border-gray-200">
            <td className="p-3">{index + 1}</td>

            <td className="p-3">
              {String.fromCharCode(65 + item.selectedAnswer)}
            </td>

            <td className="p-3 font-semibold text-emerald-600">
              {String.fromCharCode(65 + item.correctAnswer)}
            </td>

            <td className="p-3">
              {item.isCorrect ? (
                <span className="text-emerald-600 font-semibold">
                  ✓ Correct
                </span>
              ) : (
                <span className="text-red-500 font-semibold">
                  ✗ Incorrect
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
)}
    </div>
  );
};

export default QuizResult;