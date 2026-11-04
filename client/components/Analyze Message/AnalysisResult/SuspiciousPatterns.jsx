import { AlertTriangle, CircleCheck } from "lucide-react";

const SuspiciousPatterns = ({ patterns = [] }) => {
  return (
    <div className="w-full rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 to-rose-50 p-6">

      {/* Heading */}
      <div className="mb-4 flex items-center gap-3">
        <AlertTriangle className="h-7 w-7 text-orange-500" />

        <h3 className="text-lg font-bold text-red-800">
          Suspicious Patterns Detected
        </h3>
      </div>

      {/* Patterns List */}
      <div className="space-y-3">

        {patterns.length > 0 ? (
          patterns.map((pattern, index) => (
            <div key={index} className="flex items-start gap-3">

              <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 fill-red-500 text-white" />

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {pattern.name}
                </p>

                <p className="mt-1 text-sm leading-5 text-gray-600">
                  {pattern.description}
                </p>
              </div>

            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">
            No suspicious patterns detected.
          </p>
        )}

      </div>

    </div>
  );
};

export default SuspiciousPatterns;