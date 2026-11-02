require("dotenv").config();

const mongoose = require("mongoose");
const QuizQuestion = require("../models/QuizQuestion");
const questions = require("./QuizQuestion");

const seedQuestions = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");

    // Insert the questions only if the collection is empty
    const existingCount = await QuizQuestion.countDocuments();

    if (existingCount > 0) {
      console.log(
        `The collection already contains ${existingCount} questions. No data was inserted.`
      );
      return;
    }

    await QuizQuestion.insertMany(questions);

    console.log(`${questions.length} questions inserted successfully!`);
  } catch (error) {
    console.error("Error inserting questions:", error);
  } finally {
    await mongoose.disconnect();
  }
};

seedQuestions();