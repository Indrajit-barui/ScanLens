import { Link } from "react-router-dom"
import { Shield ,UserRound,Mail,LockKeyhole,Eye,EyeOffIcon} from "lucide-react"
import { useState } from "react";
const SignupFrom = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-5 py-6 sm:px-10 lg:h-screen lg:min-h-0 lg:overflow-y-auto lg:px-12">
        
        {/* logo */}
<div className="w-full max-w-[475px]">


        <div className="mb-4 flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-red-600 text-white flex justify-center items-center rounded-xl">
                 <Shield size={35} fill="white" strokeWidth={2.5}/>
            </div>
            <div>
                <p className="text-4xl font-bold tracking-tight text-slate-950 sm:text-4xl">Scam<span className="text-red-600">Lens</span></p>
            </div>
        </div>

        {/* heading */}
        <div className="mb-4 flex flex-col gap-2">
            <p className="text-3xl font-bold">Create your account</p>
            <p className="text-gray-400">Join ScamLens and stay one step ahead of scams.</p>
        </div>

        <form >
            {/* full name */}
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">
                    Full name
                </label>
                <div className=" flex gap-2 px-4  items-center  rounded-xl border border-slate-200 transition focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-50 ">
                    <UserRound size={21} className="shrink-0 text-slate-600 " />
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    
                    className="h-12 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    
                    />
                </div>
            </div>
            {/* email Address */}
            <div className="flex flex-col gap-2 mt-3">
                <label htmlFor="email" className="font-semibold">
                    Email address
                </label>
                <div className=" flex gap-2 px-4  items-center  rounded-xl border border-slate-200 transition focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-50 ">
                    <Mail size={21} className="shrink-0 text-slate-600 " />
                    <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                    
                    className="h-12 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    
                    />
                </div>
            </div>
            {/* Password */}
            <div className="flex flex-col gap-2 mt-3">
                <label htmlFor="password" className="font-semibold">
                    Password
                </label>
                <div className=" flex gap-2 px-4  items-center  rounded-xl border border-slate-200 transition focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-50 ">
                    <LockKeyhole size={21} className="shrink-0 text-slate-600 " />
                    <input 
                     type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    
                    required
                    
                    className="h-12 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    
                    />
                <button
                type="button"
                onClick={()=>setShowPassword(!showPassword)}
                className="shrink-0 text-slate-600 transition hover:text-red-500"
              >
                
               
                  {showPassword ? <Eye/> : <EyeOffIcon/>}
             
              </button>
                </div>
            </div>
            {/* Confirm password */}
            <div className="flex flex-col gap-2 mt-3">
                <label htmlFor="Confirmpassword" className="font-semibold">
                  Confirm password
                </label>
                <div className=" flex gap-2 px-4  items-center  rounded-xl border border-slate-200 transition focus-within:border-red-400 focus-within:ring-4 focus-within:ring-red-50 ">
                    <LockKeyhole size={21} className="shrink-0 text-slate-600 " />
                    <input 
                    type="password" 
                    id="Confirmpassword"
                    name="password"
                    placeholder="Confirm your password"
                    
                    required
                    
                    className="h-12 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    
                    />
              <button
                type="button"
               
                className="shrink-0 text-slate-600 transition hover:text-red-500"
              
              >
                
               
                  <Eye size={21} />
             
              </button>
                </div>
            </div>

           {/* Check point */}
          <div className="mt-3 flex items-start gap-2">
  <input
    type="checkbox"
    id="checkpoint"
    name="terms"
    required
    className="mt-1 h-4 w-4 shrink-0 accent-red-500"
  />

  <label
    htmlFor="checkpoint"
    className="text-sm leading-6 text-slate-600"
  >
    I agree to the{" "}
    <span className="cursor-pointer text-red-600 hover:underline">
      Terms of Service
    </span>{" "}
    and{" "}
    <span className="cursor-pointer text-red-600 hover:underline">
      Privacy Policy
    </span>
  </label>
          </div>

          <div className="h-12 w-full bg-red-500 text-white text-2xl rounded-xl flex justify-center items-center mt-3">
            Create Account
          </div>
      
        </form>
        <p className="mt-4 text-center text-sm text-slate-500">
          Already have an Account?{" "}
          <Link
            to="/login"
            className="ml-1 font-semibold text-red-500 transition hover:text-red-600"
          >
            Login
          </Link>
        </p>
</div>
    </section>
  )
}

export default SignupFrom