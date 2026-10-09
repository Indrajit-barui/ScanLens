import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 ">
    <nav className="flex items-center justify-between px-8 py-5 ">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white shadow-md">
          <Shield size={28} fill="white" />
        </div>

        <span className="text-2xl font-bold tracking-tight text-slate-900">
          Scam<span className="text-red-500">Lens</span>
        </span>
      </div>

      {/* Navigation */}
      <div className="hidden items-center gap-10 md:flex">
<a
  href="#"
  className="font-semibold text-slate-600 border-b-2 border-transparent 
             hover:text-red-500 hover:border-red-500 transition"
>
  Home
</a>

        <a
          href="#features"
          className="font-semibold text-slate-600 border-b-2 border-transparent 
             hover:text-red-500 hover:border-red-500 transition"

             
        >
          Features
        </a>

        <a
          href="#HowItWorks"
          className="font-semibold text-slate-600 border-b-2 border-transparent 
             hover:text-red-500 hover:border-red-500 transition"
        >
          How It Works
        </a>

        <a
          href="#learn"
          className="font-semibold text-slate-600 border-b-2 border-transparent 
             hover:text-red-500 hover:border-red-500 transition"
        >
          Learn
        </a>

        <a
          href="#pricing"
          className="font-semibold text-slate-600 border-b-2 border-transparent 
             hover:text-red-500 hover:border-red-500 transition"
        >
          Pricing
        </a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="rounded-xl border border-slate-200 bg-white px-7 py-3 font-semibold text-red-500 shadow-sm transition hover:bg-red-50">
          Login
        </button>

        <button className="rounded-xl bg-red-500 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-red-600">
          Get Started
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;