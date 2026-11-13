const Analysis = require("../models/Analysis");

const getDashboardStats = async (req, res) => {
  try {
    const userId = req.userId;

    // Total analyses
    const totalAnalyses = await Analysis.countDocuments({
      user: userId,
    });

    // Risk counts
    const highRisk = await Analysis.countDocuments({
      user: userId,
      riskLevel: "High",
    });

    const mediumRisk = await Analysis.countDocuments({
      user: userId,
      riskLevel: "Medium",
    });

    const lowRisk = await Analysis.countDocuments({
      user: userId,
      riskLevel: "Low",
    });

    // Recent analyses
    const recentAnalyses = await Analysis.find({
      user: userId,
    })
      .sort({ createdAt: -1 })
      .limit(4);

    return res.status(200).json({
      success: true,

      statistics: {
        totalAnalyses,
        highRisk,
        mediumRisk,
        lowRisk,
      },

      recentAnalyses,
    });

  } catch (error) {
    console.log("Dashboard Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard data.",
    });
  }
};

module.exports = { getDashboardStats };