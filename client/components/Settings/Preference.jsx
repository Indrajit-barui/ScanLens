import {
  Monitor,
  Globe,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react";

const Preference = () => {
  return (
    <div className="mt-4 rounded-2xl border border-[#263653] bg-[#111827] p-5 shadow-sm">

      {/* Header */}
      <div>
        <p className="text-xl font-bold text-white">Preference</p>
        <p className="text-slate-400">
          Customize your app experience
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-5">

        {/* Theme */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#263653] py-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
              <Monitor size={25} />
            </div>

            <div>
              <p className="font-bold text-white">Theme</p>
              <p className="text-sm text-slate-400">
                Choose your preferred theme.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">

            {/* Light */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-sm font-semibold text-amber-400 transition hover:bg-amber-500/20"
            >
              <Sun size={18} />
              Light
            </button>

            {/* Dark */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/15 px-4 py-2.5 text-sm font-semibold text-rose-400 transition hover:bg-rose-500/25"
            >
              <Moon size={18} />
              Dark
            </button>

            {/* System */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-2.5 text-sm font-semibold text-sky-400 transition hover:bg-sky-500/20"
            >
              <Monitor size={18} />
              System
            </button>
          </div>
        </div>

        {/* Language */}
        <div className="flex flex-col justify-between gap-4 py-3 sm:flex-row sm:items-center">

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
              <Globe size={25} />
            </div>

            <div>
              <p className="font-bold text-white">Language</p>
              <p className="text-sm text-slate-400">
                Select your preferred language
              </p>
            </div>
          </div>

          <div className="relative w-full sm:w-56">
            <select
              id="language"
              defaultValue="en"
              className="w-full cursor-pointer appearance-none rounded-xl border border-[#263653] bg-[#172238] px-4 py-3 pr-11 text-sm font-medium text-slate-200 outline-none transition hover:border-rose-500/50 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="es">Español (Spanish)</option>
              <option value="fr">Français (French)</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preference;