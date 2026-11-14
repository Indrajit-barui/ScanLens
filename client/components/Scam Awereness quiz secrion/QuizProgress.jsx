import {
  Lightbulb,
  History,
} from "lucide-react";

import { useState, useEffect } from "react";

const QuizProgress = ({ currentQuestion, totalQuestions }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const progress =
    totalQuestions > 0
      ? Math.min((currentQuestion / totalQuestions) * 100, 100)
      : 0;

  useEffect(() => {
    const fetchQuizHistory = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/quiz/history",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch quiz history");
        }

        setHistory(data.history || []);
      } catch (error) {
        console.error("Error fetching quiz history:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizHistory();
  }, []);

  return (
    <div className="flex w-full flex-col gap-4">

      {/* Quiz Progress Card */}
      <div className="rounded-2xl border border-[#263653] bg-[#111827] p-5 shadow-sm">

        <h2 className="text-lg font-bold text-white">
          Quiz Progress
        </h2>

        {/* Circular Progress */}
        <div className="flex justify-center py-5">
          <div
            className="flex h-32 w-32 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(#f43f5e ${progress}%, #263653 ${progress}% 100%)`,
            }}
          >
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#111827]">
              <span className="text-lg font-bold text-white">
                {currentQuestion} / {totalQuestions}
              </span>

              <span className="text-xs text-slate-400">
                Questions
              </span>
            </div>
          </div>
        </div>

        {/* Quiz Tip */}
        <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">

          <Lightbulb
            size={28}
            className="shrink-0 text-amber-400"
          />

          <div>
            <h3 className="font-bold text-amber-300">
              Quiz Tip
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-slate-300">
              Legitimate companies never ask for payment to offer
              you a job. Always verify the company through official
              sources.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Scores Card */}
      <div className="rounded-2xl border border-[#263653] bg-[#111827] p-5 shadow-sm">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History size={20} className="text-slate-400" />

            <h2 className="text-base font-bold text-white">
              Your Recent Scores
            </h2>
          </div>

          <button
            type="button"
            className="text-sm font-medium text-rose-400 transition hover:text-rose-300"
          >
            View All
          </button>
        </div>

        {/* Scores */}
        <div className="flex flex-col gap-5">

          {loading ? (
            <p className="text-center text-sm text-slate-400">
              Loading quiz history...
            </p>
          ) : history.length > 0 ? (
            history.map((item) => {
              const percentage = item.score;

              return (
                <div key={item._id} className="flex flex-col gap-2">

                  <div className="flex items-center justify-between gap-3">

                    <span className="min-w-0 flex-1 truncate text-sm capitalize text-slate-400">
                      {item.category.replaceAll("-", " ")}
                    </span>

                    <span className="shrink-0 text-sm font-bold text-white">
                      {item.correctAnswers}/{item.totalQuestions}
                    </span>

                    <div className="h-2 w-16 shrink-0 overflow-hidden rounded-full bg-[#263653] sm:w-20">
                      <div
                        className={`h-full rounded-full ${
                          percentage >= 70
                            ? "bg-emerald-500"
                            : "bg-amber-400"
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <span className="hidden shrink-0 text-xs text-slate-500 sm:block">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 sm:hidden">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-center text-sm text-slate-400">
              No quiz attempts yet. Complete your first quiz!
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default QuizProgress;