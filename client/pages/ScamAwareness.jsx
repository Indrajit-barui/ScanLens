import { Info } from "lucide-react";

import QuizStats from "../components/Scam Awereness quiz secrion/QuizStats";
import QuizCategories from "../components/Scam Awereness quiz secrion/QuizCategories";
import QuizSection from "../components/Scam Awereness quiz secrion/QuizSection";
import QuizProgress from "../components/Scam Awereness quiz secrion/QuizProgress";

import { useState } from "react";

const ScamAwareness = () => {
  const [selectedCategory, setSelectCategory] = useState("job-scams");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(10);

  return (
    <div className="mt-4 rounded-2xl border border-[#263653] bg-[#111827] px-4 py-5 shadow-sm sm:px-5">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-3xl font-bold text-white sm:text-4xl">
            Scam Awareness Quiz
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            Test your knowledge to start a quiz. Each quiz contains real-world scam examples.
          </p>
        </div>

        <div>
          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-500/20 hover:shadow-md hover:shadow-sky-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 active:scale-95"
          >
            <Info
              size={18}
              className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            How It Works
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-5">
        <QuizStats />
      </div>

      {/* Categories */}
      <div className="mt-5">
        <QuizCategories onSelectCategory={setSelectCategory} />
      </div>

      {/* Quiz Section and Progress */}
      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <QuizSection
            selectedCategory={selectedCategory}
            setCurrentQuestion={setCurrentQuestion}
            setTotalQuestions={setTotalQuestions}
          />
        </div>

        <div className="lg:col-span-1">
          <QuizProgress
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
          />
        </div>
      </div>
    </div>
  );
};

export default ScamAwareness;