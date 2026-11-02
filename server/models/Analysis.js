const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    contentType: {
      type: String,
      required: true,
    },

    riskLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },

    riskScore: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },

    summary: {
      type: String,
      required: true,
    },

    suspiciousPatterns: [
      {
        name: String,
        description: String,
      },
    ],

    recommendations: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analysis", analysisSchema);