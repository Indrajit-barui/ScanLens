import { Crown } from "lucide-react";

const UpgradeCard = () => {
  return (
    <div className="mx-4 mt-auto rounded-xl border border-purple-500/20 bg-gradient-to-br from-[#211B3D] to-[#171D35] p-4">

      {/* Icon and title */}
      <div className="flex items-start gap-3">
        <Crown
          size={32}
          className="shrink-0 text-yellow-400"
          fill="currentColor"
        />

        <div>
          <h3 className="text-lg font-bold text-purple-300">
            Upgrade to Pro
          </h3>

          <p className="mt-1 text-sm leading-5 text-slate-400">
            Get more analyses and
            <br />
            advanced features.
          </p>
        </div>
      </div>

      {/* Upgrade button */}
      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600 active:scale-[0.98]"
      >
        Upgrade
      </button>

    </div>
  );
};

export default UpgradeCard;