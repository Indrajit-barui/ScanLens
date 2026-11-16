import { useState } from "react";
import { X, PlayCircle } from "lucide-react";

import WelcomeHero from "./WelcomeHero";
import HeroIllustration from "./HeroIllustration";
import FeatureCards from "./FeatureCards";
import FirstAnalysisBanner from "./FirstAnalysisBanner";

function EmptyStateDashboard() {
const [isDemoOpen, setIsDemoOpen] = useState(false);

return (
<div className="space-y-8">
{/* Hero Section */}
<section className="relative overflow-hidden rounded-3xl border border-[#263653] bg-[#111827] p-6 sm:p-8 lg:p-10">
<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
<WelcomeHero
onWatchDemo={() => setIsDemoOpen(true)}
/>

      <HeroIllustration />
    </div>
  </section>

  {/* Feature Cards */}
  <FeatureCards />

  {/* First Analysis CTA */}
  <FirstAnalysisBanner />

  {/* Demo Modal */}
  {isDemoOpen && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={() => setIsDemoOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        className="relative w-full max-w-lg rounded-2xl border border-[#263653] bg-[#111827] p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsDemoOpen(false)}
          className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 transition hover:bg-[#172238] hover:text-white"
          aria-label="Close demo"
        >
          <X size={20} />
        </button>

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-400">
          <PlayCircle size={32} />
        </div>

        <h2
          id="demo-title"
          className="mb-3 text-2xl font-bold text-white"
        >
          ScanLens Demo
        </h2>

        <p className="text-sm leading-7 text-slate-400">
          See how ScanLens analyzes suspicious messages,
          identifies scam patterns, and provides safety
          recommendations. The demo video will be available soon.
        </p>

        <button
          onClick={() => setIsDemoOpen(false)}
          className="mt-6 rounded-xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
        >
          Got it
        </button>
      </div>
    </div>
  )}
</div>

);
}

export default EmptyStateDashboard;