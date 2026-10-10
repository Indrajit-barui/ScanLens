import {
  Shield,
  PlayCircle,
  AlertTriangle,
  Clock3,
  CircleX,
  Banknote,
  Search,
} from "lucide-react";
import LearnSection from "../components/Landing/LearnSection";
import Navbar from "../components/Landing/Navber";
import FeaturesSection from "../components/Landing/FeaturesSection";
import HowItWorksSection from "../components/Landing/HowItWorksSection";
import PricingSection from "../components/Landing/PricingSection";
import DemoModel from "../components/Landing/DemoModel";
import { useState } from "react";
const Home = () => {
  const[isDemoOpen,setIsDemoOpen]=useState(false);
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-pink-50 px-2">

      <Navbar />

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 py-16 pt-36 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-red-50 px-5 py-3 text-sm font-semibold text-red-500">
            <Shield size={18} fill="currentColor" />
            AI-Powered Scam Detection
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
            Detect Scams.
            <br />
            Stay <span className="text-red-500">Safe.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Analyze suspicious messages, emails, job offers and more using AI.
            Get instant risk assessment, explanations and safety tips to
            protect yourself from online scams.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-5">

            <button className="rounded-xl bg-red-500 px-9 py-4 text-lg font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-600">
              Try Now
            </button>

            <button 
            onClick={()=>setIsDemoOpen(true)}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50">
              <PlayCircle size={22} />
              Watch Demo
            </button>
<DemoModel
  isOpen={isDemoOpen}
  onClose={() => setIsDemoOpen(false)}
/>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8">

            <div>
              <p className="text-3xl font-bold text-red-500">
                10K+
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Messages Analyzed
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-red-500">
                98%
              </p>
              <p className="mt-2 text-sm text-slate-500">
                User Satisfaction
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-red-500">
                24/7
              </p>
              <p className="mt-2 text-sm text-slate-500">
                AI Protection
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex min-h-[600px] items-center justify-center">

          {/* Background shapes */}
          <div className="absolute h-[520px] w-[520px] rounded-full bg-red-100/60 blur-3xl" />

          {/* Phone */}
          <div className="relative h-[520px] w-[290px] rounded-[42px] border-[10px] border-slate-800 bg-white shadow-2xl">

            {/* Notch */}
            <div className="absolute left-1/2 top-0 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-800" />

            {/* Message */}
            <div className="absolute left-[-120px] top-28 w-[420px] rounded-3xl bg-white p-6 shadow-xl">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Banknote size={24} />
                </div>

                <div className="text-base leading-7 text-slate-800">
                  <p className="font-semibold">
                    Congratulations!
                  </p>

                  <p className="mt-1">
                    You have been selected for a work-from-home job.
                  </p>

                  <p className="mt-1">
                    Pay ₹1,999 registration fee to complete your joining
                    process.
                  </p>

                  <p className="mt-1">
                    Offer valid for 30 minutes!
                  </p>
                </div>

                <AlertTriangle
                  className="shrink-0 text-red-500"
                  size={42}
                  fill="currentColor"
                />

              </div>
            </div>

            {/* Search icon */}
            <div className="absolute -right-16 top-60 text-slate-500">
              <Search size={90} strokeWidth={1.5} />
            </div>

            {/* Risk Card */}
            <div className="absolute -bottom-12 -right-32 w-[370px] overflow-hidden rounded-3xl bg-white shadow-2xl">

              <div className="flex items-center justify-between bg-red-500 px-7 py-5 text-xl font-bold text-white">
                <span>High Risk</span>
                <span>• 87/100</span>
              </div>

              <div className="space-y-5 p-7">

                <div className="flex items-center gap-4">
                  <Banknote className="text-red-500" />
                  <span className="text-lg text-slate-800">
                    Payment request
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Clock3 className="text-red-500" />
                  <span className="text-lg text-slate-800">
                    Urgency language
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <CircleX className="text-red-500" />
                  <span className="text-lg text-slate-800">
                    Job scam pattern
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      <section>
        <FeaturesSection />
      </section>

      <section id="HowItWorks">
        <HowItWorksSection />
      </section>

      <section>
        <LearnSection />
      </section>

      <section>
        <PricingSection />
      </section>
    </div>
  );
};

export default Home;