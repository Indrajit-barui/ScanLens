const express = require("express");
const authmiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const {
getQuestionsByCategory,
submitQuiz,
getQuizHistory,
} = require("../controllers/quizController");

// Get user's quiz history
router.get("/history", authmiddleware, getQuizHistory);

// Get questions by category
router.get("/:category", getQuestionsByCategory);

// Submit quiz
router.post("/submit", authmiddleware, submitQuiz);

module.exports = router;