import { FileText } from "lucide-react";

const AnalysisSummary = ({ summary }) => {
  return (
    <div className="w-full rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">

      <div className="flex items-start gap-4">

        {/* Icon */}
        <div className="rounded-xl bg-blue-100 p-3">
          <FileText className="h-7 w-7 text-blue-600" />
        </div>

        {/* Summary Content */}
        <div className="flex-1">

          <h3 className="text-lg font-bold text-gray-900">
            Summary
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            {summary || "No summary available."}
          </p>

        </div>

      </div>

    </div>
  );
};

export default AnalysisSummary;