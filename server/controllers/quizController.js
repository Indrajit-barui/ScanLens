const QuizQuestion = require("../models/QuizQuestion");
const QuizAttempt = require("../models/QuizAttempt");
// Get 10 questions from a selected category
const getQuestionsByCategory = async (req, res) => {
try {
const { category } = req.params;

// Find 10 questions belonging to this category
const questions = await QuizQuestion.find({ category })
  .select("-correctAnswer")
  .limit(10);

// Check whether questions exist
if (questions.length === 0) {
  return res.status(404).json({
    message: "No questions found for this category",
  });
}

// Send questions without correct answers
res.status(200).json({
  success: true,
  count: questions.length,
  questions,
});

} catch (error) {
console.error("Error fetching quiz questions:", error.message);

res.status(500).json({
  success: false,
  message: "Failed to fetch quiz questions",
});

}
};




const submitQuiz = async (req, res) => {
  try {
    const { category, answers } = req.body;

    if (!category || !Array.isArray(answers) || answers.length !== 10) {
      return res.status(400).json({
        message: "Please submit answers to all 10 questions",
      });
    }

    let correctAnswers = 0;
    const reviewAnswers = [];
    for (const answer of answers) {
      const question = await QuizQuestion.findOne({
        _id: answer.questionId,
        category,
      });

      if (!question) {
        return res.status(400).json({
          message: "Invalid question ID",
        });
      }

const isCorrect =
  Number.isInteger(answer.selectedAnswer) &&
  answer.selectedAnswer >= 0 &&
  answer.selectedAnswer <= 3 &&
  answer.selectedAnswer === question.correctAnswer;

   if (isCorrect) {
  correctAnswers++;
     }

    reviewAnswers.push({
  question: question.question,
  selectedAnswer: answer.selectedAnswer,
  correctAnswer: question.correctAnswer,
  isCorrect,
    });
    }

    const totalQuestions = answers.length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);

    await QuizAttempt.create({
      user: req.userId,
      category,
      totalQuestions,
      correctAnswers,
      score,
    });

    return res.status(201).json({
      success: true,
      message: "Quiz submitted successfully",
      result: {
        category,
        totalQuestions,
        correctAnswers,
        incorrectAnswers: totalQuestions - correctAnswers,
        score,
        reviewAnswers,
       },
    });

  } catch (error) {
    console.error("Error submitting quiz:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to submit quiz",
    });
  }
};


// Get user's recent quiz attempts
const getQuizHistory = async (req, res) => {
  try {
    const history = await QuizAttempt.find({
      user: req.userId,
    })
      .sort({ createdAt: -1 })
      .limit(5);

    return res.status(200).json({
      success: true,
      history,
    });

  } catch (error) {
    console.error("Error fetching quiz history:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch quiz history",
    });
  }
};

module.exports = { getQuestionsByCategory,submitQuiz,getQuizHistory};