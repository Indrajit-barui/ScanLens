import { Shield,MenuIcon,X,ArrowRight} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const[isClick,setIsclick]=useState(true);
  const[isMenuOpen,setIsMenuOpen]=useState(false)
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
     {/* navigation mobile */}

{/* Mobile Navigation */}
<div className="relative md:hidden">
  <button
    onClick={() =>{ 
      setIsMenuOpen(!isMenuOpen)
      setIsclick(!isClick)
    }}
    aria-label="Toggle navigation menu"
    aria-expanded={isMenuOpen}
  >
    {
      isClick ?<MenuIcon />:<X/>
    }
    
  </button>

{isMenuOpen && (

  <div className="absolute right-0 top-12 z-50 w-64 rounded-xl border border-slate-200 bg-white p-5 shadow-lg">{/* Navigation Links */}
<div className="flex flex-col gap-4">
<a
  href="#"
  onClick={() => {
    setIsMenuOpen(false)
    setIsclick(true)
  }}
  className="relative text-sm font-semibold tracking-wide text-slate-600 transition-colors duration-200 hover:text-red-500 focus:outline-none focus-visible:text-red-500 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-red-500 after:to-rose-500 after:transition-all after:duration-300 hover:after:w-full focus-visible:after:w-full"
>
  Home
</a>

  <a href="#features" onClick={() => {
    setIsMenuOpen(false)
    setIsclick(true)
  }}
     className="relative text-sm font-semibold tracking-wide text-slate-600 transition-colors duration-200 hover:text-red-500 focus:outline-none focus-visible:text-red-500 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-red-500 after:to-rose-500 after:transition-all after:duration-300 hover:after:w-full focus-visible:after:w-full">
    Features
  </a>

  <a href="#HowItWorks" onClick={() => {
    setIsMenuOpen(false)
    setIsclick(true)
  }}
     className="relative text-sm font-semibold tracking-wide text-slate-600 transition-colors duration-200 hover:text-red-500 focus:outline-none focus-visible:text-red-500 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-red-500 after:to-rose-500 after:transition-all after:duration-300 hover:after:w-full focus-visible:after:w-full">
    How It Works
  </a>

  <a href="#learn" onClick={() => {
    setIsMenuOpen(false)
   setIsclick(true)
  }}
     className="relative text-sm font-semibold tracking-wide text-slate-600 transition-colors duration-200 hover:text-red-500 focus:outline-none focus-visible:text-red-500 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-red-500 after:to-rose-500 after:transition-all after:duration-300 hover:after:w-full focus-visible:after:w-full">
    Learn
  </a>

  <a href="#pricing" onClick={() => {
    setIsMenuOpen(false)
    setIsclick(true)
  }}
     className="relative text-sm font-semibold tracking-wide text-slate-600 transition-colors duration-200 hover:text-red-500 focus:outline-none focus-visible:text-red-500 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-red-500 after:to-rose-500 after:transition-all after:duration-300 hover:after:w-full focus-visible:after:w-full">
    Pricing
  </a>
</div>

{/* Divider */}
<hr className="my-4 border-slate-200" />

{/* Action Buttons */}
<div className="flex flex-col gap-3">
<Link
  to="/login"
  onClick={() => setIsMenuOpen(false)}
  className="block w-full rounded-xl border-2 border-red-500 bg-white px-4 py-3 text-center text-base font-semibold text-red-500 shadow-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-600 hover:text-white hover:shadow-lg hover:shadow-red-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 focus-visible:ring-offset-2 active:scale-[0.98]"
>
  Login
</Link>

<Link
  to="/signup"
  onClick={() => setIsMenuOpen(false)}
  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-4 py-3 text-center text-base font-bold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
>
  {/* Shine effect */}
  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  <span className="relative">Get Started</span>
  <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
</Link>
</div>

  </div>
)}
</div>
      {/* Actions */}
      <div className="hidden md:flex items-center gap-4">
        <button className="rounded-xl border border-slate-200 bg-white px-7 py-3 font-semibold text-red-500 shadow-sm transition hover:bg-red-50">
          <Link to="/login" >  Login</Link>
        
        </button>

        <button className="rounded-xl bg-red-500 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-red-600">
          <Link to="/signup" >Get Started</Link>
          
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;