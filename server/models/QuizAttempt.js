const mongoose = require("mongoose");

const quizAttemptSchema = new mongoose.Schema(
{
user: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true,
},

category: {
  type: String,
  required: true,
  enum: [
    "job-scams",
    "banking-scams",
    "investment-scams",
    "shopping-scams",
    "romance-scams",
    "otp-scams",
  ],
},

totalQuestions: {
  type: Number,
  required: true,
},

correctAnswers: {
  type: Number,
  required: true,
},

score: {
  type: Number,
  required: true,
},

},
{ timestamps: true }
);

module.exports = mongoose.model("QuizAttempt", quizAttemptSchema);