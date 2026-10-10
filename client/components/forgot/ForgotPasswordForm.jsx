import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, ArrowLeft, CheckCircle } from "lucide-react";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend UI only — connect your backend later.
    console.log("Password reset requested for:", email);
    setSubmitted(true);
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-5 py-8 sm:px-10 lg:h-screen lg:min-h-0 lg:px-12">
      <div className="w-full max-w-[500px]">

        {/* Logo */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg shadow-red-100">
            <Shield size={36} fill="white" strokeWidth={2.5} />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Scam<span className="text-red-500">Lens</span>
          </h2>
        </div>

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Forgot your password?
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Don't worry! Enter your registered email address, and we'll help
            you reset your password.
          </p>
        </div>

        {/* Success Message */}
        {submitted ? (
          <div
            className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center"
            role="status"
          >
            <CheckCircle
              size={42}
              className="mx-auto mb-3 text-green-600"
            />

            <h2 className="text-lg font-bold text-slate-900">
              Request submitted
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              This is a frontend demonstration. Connect a backend to send an
              actual password reset email.
            </p>
          </div>
        ) : (
          /* Email Form */
          <form onSubmit={handleSubmit} className="space-y-8">

            <div>
              <label
                htmlFor="reset-email"
                className="mb-3 block text-base font-semibold text-slate-900"
              >
                Email address
              </label>

              <div className="flex items-center gap-4 rounded-xl border border-slate-300 px-5 transition focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-50">
                <Mail
                  size={24}
                  className="shrink-0 text-slate-600"
                />

                <input
                  id="reset-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                  className="h-16 w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-red-500 py-5 text-lg font-bold text-white shadow-lg shadow-red-100 transition hover:bg-red-600 active:scale-[0.99]"
            >
              Send Reset Link
            </button>

          </form>
        )}

        {/* Divider */}
        <div className="my-10 flex items-center gap-5">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-base text-slate-400">OR</span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Back to Login */}
        <Link
          to="/login"
          className="flex items-center justify-center gap-4 text-lg font-semibold text-red-500 transition hover:text-red-600"
        >
          <ArrowLeft size={25} />
          Back to Login
        </Link>

      </div>
    </section>
  );
};

export default ForgotPasswordForm;