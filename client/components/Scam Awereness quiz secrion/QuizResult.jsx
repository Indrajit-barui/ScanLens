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

const QuizResult = ({ result, onTryAgain, onExploreMore }) => {
const [showReview, setShowReview] = useState(false);

return (
<div className="w-full rounded-2xl border border-[#263653] bg-[#111827] p-5 shadow-sm sm:p-8">

  {/* Header */}
  <div className="flex flex-col items-center text-center">
    <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/15">
      <Trophy size={42} className="text-amber-400" />
    </div>

    <h1 className="text-2xl font-bold text-white sm:text-3xl">
      Quiz Completed!
    </h1>

    <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
      Great job! You've completed the Job Scams quiz.
      <br className="hidden sm:block" />
      Keep learning and stay safe from scams!
    </p>
  </div>

  {/* Your Score */}
  <div className="mx-auto mt-6 flex max-w-lg flex-col items-center justify-center gap-5 rounded-2xl border border-rose-500/20 bg-gradient-to-r from-rose-500/10 to-purple-500/10 p-6 sm:flex-row sm:gap-12">
    <div>
      <p className="text-lg font-semibold text-white">
        Your Score
      </p>

      <p className="mt-1 text-5xl font-bold text-rose-400">
        {result.correctAnswers}
        <span className="text-3xl">/{result.totalQuestions}</span>
      </p>
    </div>

    {/* Percentage Circle */}
    <div
      className="flex h-28 w-28 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(#f43f5e 0% ${result.score}%, #263653 ${result.score}% 100%)`,
      }}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#111827]">
        <span className="text-xl font-bold text-white">
          {result.score}%
        </span>
      </div>
    </div>
  </div>

  {/* Statistics Cards */}
  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">

    {/* Correct Answers */}
    <div className="flex items-center gap-4 rounded-xl border border-[#263653] bg-[#172238] p-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
        <CircleCheck size={30} className="text-emerald-400" />
      </div>

      <div>
        <p className="text-2xl font-bold text-white">
          {result.correctAnswers}
        </p>
        <p className="text-sm text-slate-400">Correct Answers</p>
      </div>
    </div>

    {/* Incorrect Answers */}
    <div className="flex items-center gap-4 rounded-xl border border-[#263653] bg-[#172238] p-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-500/15">
        <CircleX size={30} className="text-red-400" />
      </div>

      <div>
        <p className="text-2xl font-bold text-white">
          {result.incorrectAnswers}
        </p>
        <p className="text-sm text-slate-400">Incorrect Answers</p>
      </div>
    </div>

    {/* Quiz Category */}
    <div className="flex items-center gap-4 rounded-xl border border-[#263653] bg-[#172238] p-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-500/15">
        <GraduationCap size={30} className="text-purple-400" />
      </div>

      <div>
        <p className="font-bold text-white">
          {result.category
            .replaceAll("-", " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}
        </p>
        <p className="text-sm text-slate-400">Quiz Category</p>
      </div>
    </div>
  </div>

  {/* Learning Message */}
  <div className="mt-5 flex items-start gap-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 sm:items-center">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
      <ShieldCheck size={30} className="text-emerald-400" />
    </div>

    <div>
      <h3 className="font-bold text-emerald-400">
        You're now more aware!
      </h3>

      <p className="mt-1 text-sm leading-relaxed text-slate-300">
        You've learned how to identify common job scams.
        Keep these tips in mind and stay cautious online.
      </p>
    </div>
  </div>

  {/* Action Buttons */}
  <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

    <button
      onClick={onTryAgain}
      className="group flex items-center justify-center gap-2 rounded-xl border border-[#263653] px-6 py-3 font-semibold text-slate-200 transition hover:bg-[#172238]"
    >
      <RotateCcw
        size={20}
        className="transition-transform duration-300 group-hover:-rotate-45"
      />
      Try Again
    </button>

    <button
      onClick={onExploreMore}
      className="group flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-6 py-3 font-semibold text-white shadow-md shadow-rose-500/20 transition hover:bg-rose-700"
    >
      Explore More Quizzes
      <ArrowRight
        size={20}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>

    <button
      onClick={() => setShowReview((prev) => !prev)}
      className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#263653] px-6 py-3 font-semibold text-white transition hover:bg-[#334766]"
    >
      {showReview ? "Hide Review" : "Review Result"}

      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
        <ArrowRight size={18} />
      </span>
    </button>
  </div>

  {/* Review Answers */}
  {showReview && (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-bold text-white">
        Review Answers
      </h2>

      <div className="overflow-x-auto rounded-xl border border-[#263653]">
        <table className="w-full border-collapse text-sm text-slate-300">
          <thead>
            <tr className="bg-[#172238] text-left text-white">
              <th className="p-3">Question</th>
              <th className="p-3">Your Answer</th>
              <th className="p-3">Correct Answer</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {result.reviewAnswers.map((item, index) => (
              <tr key={index} className="border-t border-[#263653]">
                <td className="p-3">{index + 1}</td>

                <td className="p-3">
                  {String.fromCharCode(65 + item.selectedAnswer)}
                </td>

                <td className="p-3 font-semibold text-emerald-400">
                  {String.fromCharCode(65 + item.correctAnswer)}
                </td>

                <td className="p-3">
                  {item.isCorrect ? (
                    <span className="font-semibold text-emerald-400">
                      ✓ Correct
                    </span>
                  ) : (
                    <span className="font-semibold text-red-400">
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