
import { Monitor,Globe,Moon,Sun ,ChevronDown} from "lucide-react"
const Preference = () => {
  return (
    <div className="mt-4  rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    
    {/* header */}
    <div>
        <p className="text-xl font-bold">Preference</p>
        <p className="text-gray-400">Customize your app experience</p>
    </div>
    
    <div className="mt-2  flex flex-col gap-2">
        {/* theme */}
        <div className="flex justify-between border-b py-2 border-gray-200">
                <div className="flex gap-8">
              {/* icon */}
              
              <div className="h-12 w-12 rounded-xl flex justify-center items-center bg-gray-200 text-black">
                   <Monitor size={25}/>
              </div>

              <div>
                <p className="font-bold">Theme</p>
                <p className="text-gray-400">Choose your preferred theme.</p>
              </div>
                </div>

<div className="flex flex-wrap gap-3">
  {/* Light */}
  <button className="flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-100 hover:shadow-md hover:shadow-amber-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 active:scale-95">
    <Sun size={18} /> Light
  </button>

  {/* Dark */}
  <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-100 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md hover:shadow-slate-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/60 active:scale-95">
    <Moon size={18} /> Dark
  </button>

  {/* System */}
  <button className="flex items-center gap-2 rounded-xl border border-sky-300 bg-sky-50 px-4 py-2.5 text-sm font-semibold text-sky-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-100 hover:shadow-md hover:shadow-sky-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 active:scale-95">
    <Monitor size={18} /> System
  </button>
</div>
        </div>
        
        {/* Language */}
        <div className="flex justify-between">

            <div className="flex gap-8">
            {/* icon */}
            <div className="h-12 w-12 rounded-xl flex justify-center items-center bg-gray-200 text-black">
             <Globe />
            </div>

            <div>
                <p className="font-bold">Language</p>
                <p className="text-gray-400">Select your preferred language</p>
            </div>
            </div>

<div className="flex flex-col gap-2">


  <div className="relative">
    <select
      id="language"
      className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-11 text-sm font-medium text-gray-700 shadow-sm outline-none transition-all duration-200 hover:border-indigo-300 hover:shadow-md focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी (Hindi)</option>
      <option value="bn">বাংলা (Bengali)</option>
      <option value="es">Español (Spanish)</option>
      <option value="fr">Français (French)</option>
    </select>

    {/* Custom arrow */}
    <ChevronDown
      size={18}
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
    />
  </div>
</div>
        </div>
    </div>
    </div>
  )
}

export default Preference