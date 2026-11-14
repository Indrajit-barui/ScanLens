import { Bell, ChevronDown, ChevronUp } from "lucide-react";
import ProfileDropdown from "./ProfieDropdown";
import { useState } from "react";

const Header = () => {
  const [click, Setclick] = useState(false);

  return (
    <div className="fixed top-0 right-0 z-40 flex h-20 w-full items-center justify-end gap-3 border-b border-[#263653] bg-[#111827] px-4 sm:px-6 lg:left-[280px] lg:w-[calc(100%-280px)]">

      <div className="flex items-center gap-2">

        {/* Notification */}
        <button
          type="button"
          className="relative rounded-full p-2 text-slate-300 transition hover:bg-slate-700"
          aria-label="Notifications"
        >
          <Bell size={22} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#111827]" />
        </button>

        {/* Profile Avatar */}
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-500/30 bg-rose-500/15 text-xl font-bold text-rose-400">
          I
        </div>

        {/* Username and Dropdown */}
        <div className="relative flex items-center gap-2">
          <span className="font-semibold text-white">
            Indrajit
          </span>

          <button
            type="button"
            onClick={() => Setclick(!click)}
            className="rounded-md p-1 text-slate-300 transition hover:bg-slate-700"
            aria-label="Toggle profile menu"
          >
            {click ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {click && <ProfileDropdown />}
        </div>

      </div>
    </div>
  );
};

export default Header;