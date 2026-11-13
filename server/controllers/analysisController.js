const analyzeWithGemini = require("../services/geminiService");
const Analysis = require("../models/Analysis");

const analyzeMessage = async (req, res) => {
  try {
    const { content, contentType } = req.body;

    // Check whether content is provided
    if (!content || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please provide content to analyze.",
      });
    }

    console.log("Content Type:", contentType);
    console.log("User Content:", content);
const prompt = `
You are ScanLens, an AI-powered scam detection assistant.

Analyze the following content for potential scams.

Content Type: ${contentType}

Content:
${content}

Return your response in the following JSON format:

{
  "riskLevel": "Low, Medium, or High",
  "riskScore": 0,
  "summary": "A short explanation of the analysis",
  "suspiciousPatterns": [
    {
      "name": "Pattern name",
      "description": "Why this pattern is suspicious"
    }
  ],
  "recommendations": [
    "First recommendation",
    "Second recommendation"
  ]
}

Rules:
- riskScore must be a number between 0 and 100.
- riskLevel must be Low, Medium, or High.
- suspiciousPatterns must be an array of objects.
- recommendations must be an array of strings.
- Return valid JSON only.
- Do not include Markdown formatting or code fences.
- Never invent evidence that is not present in the submitted content.
- If there is insufficient information, clearly mention it in the summary.
`;

const result = await analyzeWithGemini(prompt);

const analysis = JSON.parse(result);
const savedAnalysis = await Analysis.create({
  user: req.userId,
  content,
  contentType,
  riskLevel: analysis.riskLevel,
  riskScore: analysis.riskScore,
  summary: analysis.summary,
  suspiciousPatterns: analysis.suspiciousPatterns,
  recommendations: analysis.recommendations,
});
return res.status(200).json({
  success: true,
  message: "Analysis completed successfully.",
  analysisId: savedAnalysis._id,
  analysis,
});
  } catch (error) {
    console.error("Analysis Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};


const getAnalysisHistory=async (req,res) => {
  try {
    const history=await Analysis.find({
      user:req.userId,
    }).sort({createdAt:-1})

return res.status(200).json({
  success: true,
  count: history.length,
  history: history
});
  } catch (error) {
    console.log("history error: ",error)
    return res.status.json({
      success:false,
      message:"Failed to fetch analysis history."
    })
  }
}

const deleteAnalysis = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAnalysis = await Analysis.findOneAndDelete({
      _id: id,
      user: req.userId,
    });

    if (!deletedAnalysis) {
      return res.status(404).json({
        success: false,
        message: "Analysis not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Analysis deleted successfully.",
    });
  } catch (error) {
    console.log("Delete Analysis Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete analysis.",
    });
  }
};

module.exports = { analyzeMessage ,getAnalysisHistory,deleteAnalysis};