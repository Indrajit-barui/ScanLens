import { useState, useEffect } from "react";
import {
UserRound,
Mail,
Crown,
CalendarDays,
Camera,
Pencil,
} from "lucide-react";

const MyProfile = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");

useEffect(() => {
const fetchProfile = async () => {
try {
const token = localStorage.getItem("token");

    const response = await fetch(
      "http://localhost:5000/user/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      setName(data.user.name || "");
      setEmail(data.user.email || "");
    }
  } catch (error) {
    console.error("Failed to fetch profile:", error);
  }
};

fetchProfile();

}, []);

const initials = name
.trim()
.split(/\s+/)
.filter(Boolean)
.map((part) => part[0])
.join("")
.toUpperCase();

return (
<div className="min-h-screen bg-[#0B1120] p-4 text-white sm:p-6">

  {/* Page Heading */}
  <div className="mb-7">
    <p className="mb-3 text-sm text-slate-400">
      <span className="text-rose-400">⌂</span> / My Profile
    </p>

    <h1 className="text-3xl font-bold">My Profile</h1>

    <p className="mt-1 text-slate-400">
      View and manage your profile information.
    </p>
  </div>

  {/* Profile Header */}
  <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-[#263653] bg-gradient-to-br from-[#172238] via-[#17172D] to-[#32152F] p-6 sm:flex-row sm:p-8">

    <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-rose-500/10 to-transparent" />

    <div className="relative flex flex-col items-center gap-5 sm:flex-row">

      {/* Avatar */}
      <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-[#263653] text-3xl font-bold text-white">
        {initials || "U"}

        <button
          type="button"
          aria-label="Profile photo"
          className="absolute bottom-0 right-0 rounded-full border-2 border-[#111827] bg-rose-500 p-2 text-white"
        >
          <Camera size={17} />
        </button>
      </div>

      {/* Name and Email */}
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold">
          {name || "User"}
        </h2>

        <p className="mt-1 text-slate-300">
          {email}
        </p>
      </div>
    </div>

    {/* Edit Profile */}
    <button
      type="button"
      className="relative flex items-center gap-2 rounded-xl border border-rose-400/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-500/15"
    >
      <Pencil size={17} />
      Edit Profile
    </button>
  </div>

  {/* Personal Information */}
  <div className="mt-7 rounded-2xl border border-[#263653] bg-[#111827] p-5 sm:p-7">

    <div className="mb-5 flex items-center gap-3 border-b border-[#263653] pb-5">
      <UserRound size={27} className="text-rose-400" />

      <h2 className="text-xl font-bold">
        Personal Information
      </h2>
    </div>

    <div className="divide-y divide-[#263653]">

      {/* Full Name */}
      <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-2 sm:items-center">
        <div className="flex items-center gap-3 text-slate-300">
          <UserRound size={21} />
          <span>Full Name</span>
        </div>

        <p className="font-semibold text-white">
          {name || "Not available"}
        </p>
      </div>

      {/* Email */}
      <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-2 sm:items-center">
        <div className="flex items-center gap-3 text-slate-300">
          <Mail size={21} />
          <span>Email Address</span>
        </div>

        <p className="break-all font-semibold text-white">
          {email || "Not available"}
        </p>
      </div>

      {/* Account Status */}
      <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-2 sm:items-center">
        <div className="flex items-center gap-3 text-slate-300">
          <Crown size={21} />
          <span>Account Status</span>
        </div>

        <div>
          <span className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/15 px-4 py-1.5 text-sm font-semibold text-emerald-400">
            Free Plan
          </span>
        </div>
      </div>

      {/* Joined Date */}
      <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-2 sm:items-center">
        <div className="flex items-center gap-3 text-slate-300">
          <CalendarDays size={21} />
          <span>Joined Date</span>
        </div>

        <p className="font-semibold text-white">
          Not available
        </p>
      </div>

    </div>
  </div>

</div>

);
};

export default MyProfile;