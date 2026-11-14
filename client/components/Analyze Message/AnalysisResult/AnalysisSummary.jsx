import { FileText } from "lucide-react";

const AnalysisSummary = ({ summary }) => {
  return (
    <div className="w-full rounded-2xl border border-blue-500/20 bg-gradient-to-r from-[#172238] to-[#1A2040] p-6">

      <div className="flex items-start gap-4">

        {/* Icon */}
        <div className="rounded-xl bg-blue-500/15 p-3">
          <FileText className="h-7 w-7 text-blue-400" />
        </div>

        {/* Summary Content */}
        <div className="flex-1">

          <h3 className="text-lg font-bold text-white">
            Summary
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            {summary || "No summary available."}
          </p>

        </div>

      </div>

    </div>
  );
};

export default AnalysisSummary;