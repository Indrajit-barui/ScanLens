import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";

function AnalyzeButton({ onClick }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="group relative mx-auto mt-6 flex w-full max-w-md items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 px-8 py-4 text-lg font-bold tracking-wide text-white shadow-lg shadow-red-500/30 ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/50 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
    >
      {/* Shine effect */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      {loading ? (
        <Loader2 size={22} className="animate-spin" />
      ) : (
        <Sparkles size={22} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
      )}
      <span className="relative">{loading ? "Analyzing..." : "Analyze for Scams"}</span>
    </button>
  );
}

export default AnalyzeButton;