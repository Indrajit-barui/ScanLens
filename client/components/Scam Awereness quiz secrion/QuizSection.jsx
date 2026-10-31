
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import { useState,useEffect } from "react";
const QuizSection = ({selectedCategory}) => {
const [questions, setQuestions] = useState([]);
const [answers, setAnswers] = useState({});
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

useEffect(() => {
  if (!selectedCategory) return;

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `http://localhost:5000/quiz/${selectedCategory}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch questions");
      }

      setQuestions(data.questions);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchQuestions();
}, [selectedCategory]);

const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
const progress=((currentQuestionIndex+1)/questions.length)*100;
const [isQuizFinished,setIsQuizFinished]=useState(false)
const [quizResult, setQuizResult] = useState(null);
const handleSubmitQuiz = async () => {
  try {
    const response = await fetch("http://localhost:5000/quiz/submit", {
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
  return (
    <div className="mt-4  px-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* header */}
        <div className="flex justify-between items-center">
            <p className="text-xl font-bold">
              {selectedCategory
               ? `${selectedCategory.replaceAll("-", " ")} Quiz`
               : "Choose a Quiz Category"}
         </p>
            {/* Question Progress */}
<div className="flex items-center justify-end gap-3">
  <span className="text-xs font-medium text-gray-600">
    Question {currentQuestionIndex+1} of {questions.length}
  </span>

  <div className="h-1.5 w-52 overflow-hidden rounded-full bg-gray-200">
    <div className="h-full w-[10%] rounded-full bg-red-500"
     style={{width:`${progress}%`}}
    ></div>
  </div>
</div>
        </div>


<div>
  {!selectedCategory ? (
    <p className="mt-4 text-gray-500">
      Select a category above to start your quiz.
    </p>
  ) : loading ? (
    <p className="mt-4 text-gray-500">
      Loading questions...
    </p>
  ) : error ? (
    <p className="mt-4 text-red-600">
      {error}
    </p>
  ) : questions.length === 0 ? (
    <p className="mt-4 text-gray-500">
      No questions available.
    </p>
  ) : isQuizFinished ? (
    <QuizResult
  result={quizResult}
  onTryAgain={() => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setQuizResult(null);
    setIsQuizFinished(false);
  }}
  onExploreMore={() => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setQuizResult(null);
    setIsQuizFinished(false);
  }}
/>
  ) : (
<QuizQuestion
  question={questions[currentQuestionIndex]}
  selectedAnswer={answers[currentQuestionIndex]?.selectedAnswer ?? null}
  onNext={() =>
    setCurrentQuestionIndex((prev) =>
      prev < questions.length - 1 ? prev + 1 : prev
    )
  }
  onPrev={() =>
    setCurrentQuestionIndex((prev) =>
      prev > 0 ? prev - 1 : 0
    )
  }
  currentQuestionIndex={currentQuestionIndex}
  totalQuestion={questions.length}
onFinish={() => {
  const allAnswered = Object.keys(answers).length === questions.length;

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
  )
}

export default QuizSection