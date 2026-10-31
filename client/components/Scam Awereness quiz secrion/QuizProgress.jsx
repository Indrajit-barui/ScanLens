import {
  Lightbulb,
  History,
  
} from "lucide-react";
import { useState ,useEffect} from "react";
const QuizProgress = ({currentQuestion,totalQuestions}) => {
const [history, setHistory] = useState([]);
const [loading, setLoading] = useState(true);


  const progress = (currentQuestion / totalQuestions) * 100;
useEffect(() => {
  const fetchQuizHistory = async () => {
    try {
      const response = await fetch("http://localhost:5000/quiz/history", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch quiz history");
      }

      setHistory(data.history);

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
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

        <h2 className="text-lg font-bold text-gray-900">
          Quiz Progress
        </h2>

        {/* Circular Progress */}
        <div className="flex justify-center py-5">
          <div
            className="flex h-32 w-32 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(#ef233c ${progress}%, #e5e7eb ${progress}% 100%)`,
            }}
          >
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white">
              <span className="text-lg font-bold text-gray-900">
                {currentQuestion} / {totalQuestions}
              </span>

              <span className="text-xs text-gray-500">
                Questions
              </span>
            </div>
          </div>
        </div>

        {/* Quiz Tip */}
        <div className="flex items-start gap-3 rounded-xl bg-amber-50 p-4">

          <Lightbulb
            size={28}
            className="shrink-0 text-amber-500"
          />

          <div>
            <h3 className="font-bold text-gray-900">
              Quiz Tip
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Legitimate companies never ask for payment to offer
              you a job. Always verify the company through official
              sources.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Scores Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History size={20} className="text-gray-600" />

            <h2 className="text-base font-bold text-gray-900">
              Your Recent Scores
            </h2>
          </div>

          <button className="text-sm font-medium text-red-600 hover:text-red-700">
            View All
          </button>
        </div>
{/* Scores */}
<div className="flex flex-col gap-5">
  {loading ? (
    <p className="text-center text-sm text-gray-500">
      Loading quiz history...
    </p>
  ) : history.length > 0 ? (
    history.map((item) => {
      const percentage = item.score;

      return (
        <div key={item._id} className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <span className="min-w-0 flex-1 truncate text-sm text-gray-600">
              {item.category.replaceAll("-", " ")}
            </span>

            <span className="shrink-0 text-sm font-bold text-gray-900">
              {item.correctAnswers}/{item.totalQuestions}
            </span>

            <div className="h-2 w-16 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:w-20">
              <div
                className={`h-full rounded-full ${
                  percentage >= 70 ? "bg-emerald-500" : "bg-amber-400"
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>

            <span className="hidden shrink-0 text-xs text-gray-500 sm:block">
              {new Date(item.createdAt).toLocaleDateString()}
            </span>
          </div>

          <p className="text-xs text-gray-400 sm:hidden">
            {new Date(item.createdAt).toLocaleDateString()}
          </p>
        </div>
      );
    })
  ) : (
    <p className="text-center text-sm text-gray-500">
      No quiz attempts yet. Complete your first quiz!
    </p>
  )}
</div>
      </div>

    </div>
  );
};

export default QuizProgress;