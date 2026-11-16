import { Bell, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import ProfileDropdown from "./ProfieDropdown";

const Header = () => {
const [click, setClick] = useState(false);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchProfile = async () => {
try {
const token = localStorage.getItem("token");

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    const data = await response.json();
    setUser(data.user);
  } catch (error) {
    console.error("Profile error:", error);
  } finally {
    setLoading(false);
  }
};

fetchProfile();

}, []);

const username = user?.name || "User";
const initial = username.charAt(0).toUpperCase();

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

    {/* Dynamic Profile Avatar */}
    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-500/30 bg-rose-500/15 text-xl font-bold text-rose-400">
      {loading ? "..." : initial}
    </div>

    {/* Username and Dropdown */}
    <div className="relative flex items-center gap-2">

      <span className="font-semibold text-white">
        {loading ? "Loading..." : username}
      </span>

      <button
        type="button"
        onClick={() => setClick(!click)}
        className="rounded-md p-1 text-slate-300 transition hover:bg-slate-700"
        aria-label="Toggle profile menu"
      >
        {click ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {click && (
        <ProfileDropdown
          user={user}
          onClose={() => setClick(false)}
        />
      )}

    </div>
  </div>
</div>

);
};

export default Header;