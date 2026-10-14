import { useState, useEffect, useRef } from "react";

import {
  UserRound,
  Settings,
  Shield,
  Moon,
  CircleHelp,
  LogOut,

} from "lucide-react";

const ProfieDropdown = () => {
    const [isOpen,setIsopen]=useState(true)
    const [darkMode,setDarkMode]=useState(false)
    const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ( dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef}>

{isOpen && (
  <div className="absolute right-2 top-full z-50 mt-3 w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">

    {/* Profile Information */}
    <div className="flex items-center gap-3 border-b border-slate-100 p-4">
      <img
        src="https://i.pravatar.cc/100"
        alt="Profile"
        className="h-14 w-14 rounded-full object-cover"
      />

      <div>
        <h3 className="font-semibold text-slate-900">
          Indrajit
        </h3>
        <p className="text-sm text-slate-500">
          indrajit@example.com
        </p>
      </div>
    </div>

    {/* My Profile */}
    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100">
      <UserRound size={20} />
      <span>My Profile</span>
    </button>

{/* Account Setting */}
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100">
      <Settings size={20} />
      <span>Account Settings</span>
        </button>
{/* upgrade to pro */}
        <button className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100">
     
      <span className="flex gap-2 items-center"><Shield size={20} />  Upgrade to Pro  </span>
      <div className="h-8 w-12 rounded-xl text-indigo-600 bg-indigo-200 flex justify-center items-center font-bold">
        Pro
      </div>
        </button>

{/* Dark mode */}
<button
 
  className="flex w-full items-center justify-between rounded-lg px-3 py-3 hover:bg-slate-100"
>
  <div 

  className="flex items-center gap-3 text-slate-700">
    <Moon size={22} />
    <span>Dark Mode</span>
  </div>

  {/* Toggle Switch */}
  <div
     onClick={() => setDarkMode(!darkMode)}
    className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors duration-200 ${
      darkMode ? "bg-red-500" : "bg-slate-300"
    }`}
  >
    <div
      className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
        darkMode ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </div>
</button>

{/* Help and Support */}
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-slate-600 hover:bg-slate-100">
         <CircleHelp size={20} />
          <span>Help & Support</span>
        </button>

{/* Logout */}
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-red-600 hover:bg-slate-100">
         <LogOut size={20} />
          <span>Logout</span>
        </button>
  </div>
)}



    </div>
  )
}

export default ProfieDropdown