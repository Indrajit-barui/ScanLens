import { Link } from "react-router-dom";
import { Sparkles, ScanLine, ArrowRight, PlayCircle } from "lucide-react";

const WelcomeHero = ({ onWatchDemo }) => {
return (
<section className="relative overflow-hidden rounded-3xl border border-[#263653] bg-gradient-to-br from-[#151C2E] via-[#111827] to-[#190F20] p-6 sm:p-8 lg:p-10">

  {/* Background glow */}
  <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-rose-600/10 blur-[100px]" />

  <div className="relative z-10 max-w-2xl">

    {/* Welcome badge */}
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-400">
      <Sparkles size={16} />
      Welcome to ScanLens
    </div>

    {/* Heading */}
    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
      Detect Scams,
      <br />
      <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
        Stay Safe Online
      </span>
    </h1>

    {/* Description */}
    <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
      Analyze suspicious messages, identify potential threats,
      and get clear safety recommendations — powered by AI.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-wrap gap-4">

      <Link
        to="/analyze-message"
        className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-500 px-6 py-4 font-semibold text-white shadow-lg shadow-rose-900/30 transition hover:-translate-y-1 hover:shadow-rose-900/50"
      >
        <ScanLine size={20} />
        Start Your First Scan
        <ArrowRight size={20} />
      </Link>

      <button
        type="button"
        onClick={onWatchDemo}
        className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#34415B] bg-[#172238]/70 px-6 py-4 font-semibold text-slate-200 transition hover:border-rose-500/50 hover:bg-rose-500/10"
      >
        <PlayCircle size={20} />
        Watch Demo
      </button>

    </div>
  </div>
</section>

);
};

export default WelcomeHero;