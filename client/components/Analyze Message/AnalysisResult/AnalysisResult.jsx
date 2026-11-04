import RiskAssessment from "./RiskAssessment";
import AnalysisSummary from "./AnalysisSummary";
import SuspiciousPatterns from "./SuspiciousPatterns";
import Recommendations from "./Recommendations";

const AnalysisResult = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-xl font-bold text-gray-900">
          Analysis Result
        </h2>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

        {/* Top Row */}
        <RiskAssessment
          riskLevel={analysis.riskLevel}
          riskScore={analysis.riskScore}
        />

        <AnalysisSummary
          summary={analysis.summary}
        />

        {/* Bottom Row */}
        <SuspiciousPatterns
          patterns={analysis.suspiciousPatterns}
        />

        <Recommendations
          recommendations={analysis.recommendations}
        />

      </div>

    </div>
  );
};

export default AnalysisResult;