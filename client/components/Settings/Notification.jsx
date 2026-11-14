import { Bell } from "lucide-react";
import { useState } from "react";

const Notification = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="mt-4 rounded-2xl border border-[#263653] bg-[#111827] p-5 shadow-sm">

      {/* Header */}
      <div>
        <p className="text-xl font-bold text-white">Notification</p>
        <p className="text-slate-400">
          Manage your notification preferences
        </p>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        {/* Notification Setting */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
            <Bell size={28} />
          </div>

          <div>
            <p className="font-bold text-white">Scam Alerts</p>
            <p className="text-sm text-slate-400">
              Get notified about new scam trends and safety tips.
            </p>
          </div>
        </div>

        {/* Toggle Switch */}
        <button
          type="button"
          role="switch"
          aria-checked={darkMode}
          aria-label="Toggle scam alerts"
          onClick={() => setDarkMode(!darkMode)}
          className={`flex h-7 w-12 shrink-0 items-center rounded-full p-1 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] ${
            darkMode ? "bg-rose-500" : "bg-slate-600"
          }`}
        >
          <span
            className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
              darkMode ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Notification;