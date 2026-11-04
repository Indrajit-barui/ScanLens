import { ShieldCheck, CircleCheck } from "lucide-react";

const Recommendations = ({ recommendations = [] }) => {
  return (
    <div className="w-full rounded-2xl border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 p-6">

      {/* Heading */}
      <div className="mb-4 flex items-center gap-3">

        <ShieldCheck className="h-7 w-7 text-green-600" />

        <h3 className="text-lg font-bold text-green-800">
          Recommendations
        </h3>

      </div>

      {/* Recommendations List */}
      <div className="space-y-3">

        {recommendations.length > 0 ? (
          recommendations.map((item, index) => (
            <div key={index} className="flex items-start gap-3">

              <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 fill-green-500 text-white" />

              <p className="text-sm leading-6 text-gray-800">
                {item}
              </p>

            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">
            No recommendations available.
          </p>
        )}

      </div>

    </div>
  );
};

export default Recommendations;