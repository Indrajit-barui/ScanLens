const mongoose = require("mongoose");

const quizQuestionSchema = new mongoose.Schema(
  {
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

    question: {
      type: String,
      required: true,
      trim: true,
    },

    options: {
      type: [String],
      required: true,
      validate: {
        validator: (options) => options.length === 4,
        message: "Each question must have exactly four options",
      },
    },

    correctAnswer: {
      type: Number,
      required: true,
      min: 0,
      max: 3,
      validate: {
        validator: Number.isInteger,
        message: "Correct answer must be an integer",
      },
    },

    explanation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

quizQuestionSchema.index({ category: 1 });

module.exports = mongoose.model("QuizQuestion", quizQuestionSchema);