import { ShieldCheck, ArrowRight, ScanSearch } from "lucide-react";
import { Link } from "react-router-dom";

const FirstAnalysisBanner = () => {
return (
<section className="relative overflow-hidden rounded-2xl border border-rose-500/20 bg-gradient-to-r from-[#241426] via-[#171629] to-[#111827] p-6 sm:p-8">

  {/* Background glow */}
  <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-rose-600/15 blur-[90px]" />

  <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

    {/* Left content */}
    <div className="flex items-start gap-4">

      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/10 text-rose-400">
        <ShieldCheck size={30} />
      </div>

      <div>
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Your Online Safety Starts Here
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Don't let scammers catch you off guard. Scan suspicious
          messages, job offers, emails, and links before taking action.
        </p>
      </div>

    </div>

    {/* Right button */}
    <Link
      to="/analyze-message"
      className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-rose-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-rose-950/30 transition hover:-translate-y-1 hover:bg-rose-500"
    >
      <ScanSearch size={19} />
      Start Analysis
      <ArrowRight size={19} />
    </Link>

  </div>
</section>

);
};

export default FirstAnalysisBanner;