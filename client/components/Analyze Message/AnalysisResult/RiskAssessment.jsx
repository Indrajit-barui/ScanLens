import { ShieldAlert } from "lucide-react";

const RiskAssessment = ({ riskLevel, riskScore }) => {
  const getRiskColor = () => {
    if (riskLevel === "High") {
      return {
        text: "text-red-600",
        badge: "bg-red-600",
        stroke: "#dc2626",
      };
    }

    if (riskLevel === "Medium") {
      return {
        text: "text-amber-600",
        badge: "bg-amber-500",
        stroke: "#f59e0b",
      };
    }

    return {
      text: "text-green-600",
      badge: "bg-green-600",
      stroke: "#16a34a",
    };
  };

  const colors = getRiskColor();

  const radius = 80;
  const circumference = Math.PI * radius;
  const progress = (riskScore / 100) * circumference;

  return (
    <div className="w-full rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 to-rose-50 p-6">

      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

        {/* Risk Information */}
        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-red-100 p-3">
            <ShieldAlert className="h-7 w-7 text-red-600" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Risk Assessment
            </h3>

            <span
              className={`mt-3 inline-block rounded-full px-5 py-2 text-sm font-semibold text-white ${colors.badge}`}
            >
              {riskLevel} Risk
            </span>

            <p className="mt-2 text-sm text-gray-500">
              {riskLevel === "High"
                ? "This message has strong indicators of a scam."
                : riskLevel === "Medium"
                ? "This message contains some suspicious indicators."
                : "No major scam indicators were detected."}
            </p>
          </div>

        </div>

        {/* Risk Score Gauge */}
        <div className="flex flex-col items-center">

          <div className="relative h-[110px] w-[200px]">

            <svg
              viewBox="0 0 200 110"
              className="h-full w-full"
            >
              {/* Background Arc */}
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="14"
                strokeLinecap="round"
              />

              {/* Progress Arc */}
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke={colors.stroke}
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={`${progress} ${circumference}`}
              />
            </svg>

            {/* Score */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
              <p className="text-3xl font-bold text-gray-900">
                {riskScore}
                <span className="text-lg font-semibold">/100</span>
              </p>
            </div>

          </div>

          <p className="mt-1 text-sm font-medium text-gray-600">
            Risk Score
          </p>

        </div>

      </div>

    </div>
  );
};

export default RiskAssessment;