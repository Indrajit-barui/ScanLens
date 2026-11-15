import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import { useState, useEffect } from "react";

const QuizSection = ({
selectedCategory,
setCurrentQuestion,
setTotalQuestions,
}) => {
const [questions, setQuestions] = useState([]);
const [answers, setAnswers] = useState({});
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [isQuizFinished, setIsQuizFinished] = useState(false);
const [quizResult, setQuizResult] = useState(null);
const API_URL = import.meta.env.VITE_API_URL;

useEffect(() => {
if (!selectedCategory) return;

const fetchQuestions = async () => {
  try {
    setLoading(true);
    setError("");

    const response = await fetch(
      `${API_URL}/quiz/${selectedCategory}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch questions");
    }

    setQuestions(data.questions);
    setTotalQuestions(data.questions.length);
    setCurrentQuestion(1);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsQuizFinished(false);
    setQuizResult(null);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

fetchQuestions();

}, [selectedCategory]);

const progress =
questions.length > 0
? ((currentQuestionIndex + 1) / questions.length) * 100
: 0;

const handleSubmitQuiz = async () => {
try {
const response = await fetch(`${API_URL}/quiz/submit`, {
method: "POST",
headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
},
body: JSON.stringify({
category: selectedCategory,
answers: Object.values(answers),
}),
});

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Quiz submission failed");
  }

  setQuizResult(data.result);
  setIsQuizFinished(true);
} catch (error) {
  console.error(error.message);
  alert(error.message);
}

};

const resetQuiz = () => {
setAnswers({});
setCurrentQuestionIndex(0);
setCurrentQuestion(1);
setQuizResult(null);
setIsQuizFinished(false);
};

return (
<div className="mt-4 rounded-2xl border border-[#263653] bg-[#111827] p-5 shadow-sm">

  {/* Header */}
  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
    <p className="text-xl font-bold capitalize text-white">
      {selectedCategory
        ? `${selectedCategory.replaceAll("-", " ")} Quiz`
        : "Choose a Quiz Category"}
    </p>

    {/* Question Progress */}
    <div className="flex items-center justify-end gap-3">
      <span className="hidden text-xs font-medium text-slate-400 md:block">
        Question {currentQuestionIndex + 1} of {questions.length}
      </span>

      <div className="hidden h-1.5 w-52 overflow-hidden rounded-full bg-[#263653] md:block">
        <div
          className="h-full rounded-full bg-rose-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  </div>

  {/* Quiz Content */}
  <div>
    {!selectedCategory ? (
      <p className="mt-4 text-slate-400">
        Select a category above to start your quiz.
      </p>
    ) : loading ? (
      <p className="mt-4 text-slate-400">
        Loading questions...
      </p>
    ) : error ? (
      <p className="mt-4 text-red-400">{error}</p>
    ) : questions.length === 0 ? (
      <p className="mt-4 text-slate-400">
        No questions available.
      </p>
    ) : isQuizFinished ? (
      <QuizResult
        result={quizResult}
        onTryAgain={resetQuiz}
        onExploreMore={resetQuiz}
      />
    ) : (
      <QuizQuestion
        question={questions[currentQuestionIndex]}
        selectedAnswer={
          answers[currentQuestionIndex]?.selectedAnswer ?? null
        }
        onNext={() => {
          setCurrentQuestionIndex((prev) => {
            const next =
              prev < questions.length - 1 ? prev + 1 : prev;

            setCurrentQuestion(next + 1);
            return next;
          });
        }}
        onPrev={() => {
          setCurrentQuestionIndex((prev) => {
            const previous = prev > 0 ? prev - 1 : 0;

            setCurrentQuestion(previous + 1);
            return previous;
          });
        }}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestion={questions.length}
        onFinish={() => {
          const allAnswered =
            Object.keys(answers).length === questions.length;

          if (!allAnswered) {
            alert("Please answer all questions before submitting!");
            return;
          }

          handleSubmitQuiz();
        }}
        onAnswerSelect={(selectedIndex) =>
          setAnswers((prev) => ({
            ...prev,
            [currentQuestionIndex]: {
              questionId: questions[currentQuestionIndex]._id,
              selectedAnswer: selectedIndex,
            },
          }))
        }
      />
    )}
  </div>
</div>

);
};

export default QuizSection;