import {
  Shield,
  Zap,
  Mail,
  LockKeyhole,
  CheckCircle,
} from "lucide-react";

const ForgotLeftsection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-red-50/50 to-pink-100/60 px-6 py-8 sm:px-8 lg:h-screen lg:min-h-0 lg:px-10 xl:px-12">

      {/* Background decorations */}
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
      <div className="relative z-10 mt-12 grid grid-cols-1 items-center gap-8 xl:grid-cols-2">

        {/* Left text */}
        <div className="relative z-20">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-red-100/70 px-5 py-3 text-sm font-semibold text-red-500">
            <Zap size={18} fill="currentColor" />
            AI-Powered Scam Detection
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl xl:text-6xl">
            Reset Your
            <br />
            <span className="text-red-500">Password.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
            Enter your registered email address and we’ll send you a link to
            reset your password securely.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-5">

            {/* Benefit 1 */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-100/70 text-red-500">
                <Shield size={29} />
              </div>

              <div>
                <h3 className="font-bold text-slate-950">
                  Secure Process
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Your information stays protected.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-100/70 text-red-500">
                <Mail size={29} />
              </div>

              <div>
                <h3 className="font-bold text-slate-950">
                  Quick & Easy
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Get a reset link in seconds.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-100/70 text-red-500">
                <LockKeyhole size={29} />
              </div>

              <div>
                <h3 className="font-bold text-slate-950">
                  Get Back Safely
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Return to your account with a new password.
                </p>
              </div>
            </div>

          </div>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-red-100 pt-6">

            <div>
              <p className="text-2xl font-extrabold text-red-500">
                10K+
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                Messages Analyzed
              </p>
            </div>

            <div className="border-x border-red-100 px-3">
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
<div className="relative mx-auto hidden h-[480px] w-full max-w-md items-center justify-center xl:flex xl:translate-y-[-20px]">

          {/* Background glow */}
<div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-200/50 blur-3xl" />

          {/* Envelope */}
          <div className="relative flex h-64 w-72 items-center justify-center rounded-3xl bg-white shadow-2xl shadow-red-200/50">

            <div className="absolute inset-x-0 bottom-0 h-40 rounded-b-3xl bg-gradient-to-br from-red-50 to-pink-100" />

            <div className="relative z-10 flex h-36 w-36 -translate-y-5 rotate-[-6deg] items-center justify-center rounded-3xl bg-white shadow-xl">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
                <LockKeyhole size={42} />
              </div>
            </div>

            <Mail
              size={100}
              strokeWidth={1.2}
              className="absolute -bottom-5 text-red-400"
            />
          </div>

          {/* Reset confirmation card */}
          <div className="absolute -bottom-2 -right-2 w-64 rounded-2xl bg-white p-5 shadow-xl">
            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle size={25} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Reset link sent!
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Check your email to reset your password.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ForgotLeftsection;