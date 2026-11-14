import { ShieldCheck, CircleCheck } from "lucide-react";

const Recommendations = ({ recommendations = [] }) => {
  return (
    <div className="w-full rounded-2xl border border-green-500/20 bg-gradient-to-r from-[#14251F] to-[#142A26] p-6">

      {/* Heading */}
      <div className="mb-4 flex items-center gap-3">

        <ShieldCheck className="h-7 w-7 text-green-400" />

        <h3 className="text-lg font-bold text-green-300">
          Recommendations
        </h3>

      </div>

      {/* Recommendations List */}
      <div className="space-y-3">

        {recommendations.length > 0 ? (
          recommendations.map((item, index) => (
            <div key={index} className="flex items-start gap-3">

              <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 fill-green-500 text-[#14251F]" />

              <p className="text-sm leading-6 text-slate-300">
                {item}
              </p>

            </div>
          ))
        ) : (
          <p className="text-sm text-slate-400">
            No recommendations available.
          </p>
        )}

      </div>

    </div>
  );
};

export default Recommendations;