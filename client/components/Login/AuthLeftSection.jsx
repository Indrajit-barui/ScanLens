import {
  Shield,
  Zap,
  AlertTriangle,
  Clock3,
  CircleX,
  Banknote,
  Search,
  FileText,
  Lightbulb,
} from "lucide-react";

const AuthLeftSection = () => {
  return (
<section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-red-50/50 to-pink-100/60 px-6 py-6 sm:px-8 lg:h-screen lg:min-h-0 lg:px-10 lg:py-6 xl:px-12">

      {/* Background decoration */}
      <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-red-100/60 blur-3xl" />

      {/* Logo */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white shadow-md shadow-red-200">
          <Shield size={30} fill="white" strokeWidth={2.5} />
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
          Scam<span className="text-red-500">Lens</span>
        </h2>
      </div>

      {/* Main content */}
<div className="relative z-10 mt-4 grid grid-cols-1 items-center gap-6 xl:mt-3 xl:grid-cols-2">

        {/* Left text content */}
        <div className="relative z-20">

          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100/70 px-3 py-1 text-sm font-semibold text-red-500">
            <Zap size={18} fill="currentColor" />
            AI-Powered Scam Detection
          </div>

          {/* Heading */}
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 xl:text-4xl 2xl:text-5xl">
            Detect Scams.
             <br />
            Stay <span className="text-red-500">Safe.</span>
         </h1>

          {/* Description */}
          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">
            Analyze suspicious messages, emails, job offers and more using AI.
            Get instant risk assessment, explanations and safety tips to
            protect yourself from online scams.
          </p>

          {/* Benefits */}
          <div className="mt-5 space-y-3">

            {/* Benefit 1 */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100/70 text-red-500">
                <Shield size={30} />
              </div>

              <div>
                <h3 className="font-bold text-slate-950">
                  Identify Risks
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Detect scam patterns in seconds.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100/70 text-red-500">
                <FileText size={29} />
              </div>

              <div>
                <h3 className="font-bold text-slate-950">
                  Get Clear Explanations
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Understand why a message may be suspicious.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100/70 text-red-500">
                <Lightbulb size={30} />
              </div>

              <div>
                <h3 className="font-bold text-slate-950">
                  Stay Informed
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Learn how to protect yourself online.
                </p>
              </div>
            </div>

          </div>

          {/* Statistics */}
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-red-100 pt-4">

            <div>
              <p className="text-2xl font-extrabold text-red-500">
                10K+
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                Messages Analyzed
              </p>
            </div>

            <div className="border-x border-red-100 px-4">
              <p className="text-2xl font-extrabold text-red-500">
                98%
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                User Satisfaction
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-red-500">
                24/7
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                AI Protection
              </p>
            </div>

          </div>
        </div>

        {/* Right illustration */}
<div className="relative mx-auto hidden h-[440px] w-full max-w-md items-center justify-center lg:flex">

          {/* Background glow */}
          <div className="absolute h-96 w-96 rounded-full bg-red-200/50 blur-3xl" />

          {/* Phone */}
          <div className="relative h-[420px] w-[240px] rounded-[38px] border-[9px] border-slate-800 bg-white shadow-2xl">

            {/* Phone notch */}
            <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-800" />

            {/* Phone screen */}
            <div className="px-4 pt-12">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">
                  Messages
                </span>
                <Search size={18} className="text-slate-500" />
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-bold text-slate-900">
                  Unknown Sender
                </p>

                <p className="mt-2 text-xs leading-5 z text-slate-600">
                  Congratulations! You have been selected for a work-from-home
                  job. Pay ₹1,999 registration fee to continue.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 p-3 text-red-500">
                <AlertTriangle size={22} />
                <span className="text-xs font-bold">
                  Suspicious Message
                </span>
              </div>
            </div>

          </div>

          {/* Floating message card */}
          <div className="absolute -left-4 top-28 w-64 rounded-2xl bg-white p-4 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Banknote size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Congratulations!
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Pay a registration fee to complete your joining process.
                </p>
              </div>

              <AlertTriangle
                size={25}
                className="shrink-0 text-red-500"
              />
            </div>
          </div>

          {/* Risk analysis card */}
          <div className="absolute -bottom-1 -right-5 w-64 overflow-hidden rounded-2xl bg-white shadow-2xl">

            <div className="flex items-center justify-between bg-red-500 px-5 py-4 text-sm font-bold text-white">
              <span>High Risk</span>
              <span>87/100</span>
            </div>

            <div className="space-y-4 p-5">

              <div className="flex items-center gap-3">
                <Banknote size={19} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  Payment request
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={19} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  Urgency language
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CircleX size={19} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  Job scam pattern
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthLeftSection;