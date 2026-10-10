import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
 
} from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend only for now
    console.log("Login form submitted");
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-5 py-6 sm:px-10 lg:h-screen lg:min-h-0 lg:overflow-y-auto lg:px-12">

      <div className="w-full max-w-[475px]">

        {/* Logo */}
        <div className="mb-4 flex items-center justify-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white shadow-lg shadow-red-100">
  <Shield size={30} fill="white" strokeWidth={2.5} />
</div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Scam<span className="text-red-500">Lens</span>
          </h2>
        </div>

        {/* Heading */}
        <div className="mb-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Welcome Back
          </h1>

          <p className="mt-2 text-base text-slate-500">
            Log in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Email address
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 transition focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-50">
              <Mail size={21} className="shrink-0 text-slate-600" />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="h-12 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 transition focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-50">
              <LockKeyhole
                size={21}
                className="shrink-0 text-slate-600"
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="h-14 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="shrink-0 text-slate-600 transition hover:text-red-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff size={21} />
                ) : (
                  <Eye size={21} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex flex-wrap items-center justify-between gap-3">

            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 accent-red-500"
              />

              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-red-500 transition hover:text-red-600"
            >
              Forgot password?
            </Link>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-red-500 py-4 text-base font-bold text-white shadow-lg shadow-red-100 transition hover:bg-red-600 active:scale-[0.99]"
          >
            Log In
          </button>

        </form>

        {/* Divider */}
        <div className="my-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-sm text-slate-400">OR</span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>



        {/* Signup Link */}
        <p className="mt-4 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="ml-1 font-semibold text-red-500 transition hover:text-red-600"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </section>
  );
};

export default LoginForm;