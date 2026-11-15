import { Camera } from "lucide-react";
import { useState, useEffect } from "react";

const ProfileSettings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;
  // Fetch Profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          `${API_URL}/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setName(data.user.name);
          setEmail(data.user.email);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  // Save Profile Changes
  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/user/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to update profile");
        return;
      }

      setName(data.user.name);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Generate Initials
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="mt-4 rounded-2xl border border-[#263653] bg-[#111827] p-5 shadow-sm">

      {/* Header */}
      <div>
        <p className="text-xl font-bold text-white">
          Profile Settings
        </p>

        <p className="text-slate-400">
          Update your personal information
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-6 px-2 md:flex-row md:items-center md:justify-between">

        {/* Profile Information */}
        <div className="flex items-center gap-5">

          {/* Profile Avatar */}
          <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/15 text-4xl font-bold text-indigo-400">
            {initials || "U"}

            {/* Camera Icon */}
            <button
              type="button"
              aria-label="Change profile photo"
              className="absolute bottom-0 right-0 rounded-full border-2 border-[#111827] bg-slate-700 p-2 text-white transition hover:bg-slate-600"
            >
              <Camera size={20} />
            </button>
          </div>

          <div className="min-w-0">
            <p className="break-words text-2xl font-bold text-white">
              {name || "User"}
            </p>

            <p className="break-all text-sm text-slate-400">
              {email}
            </p>

            <button
              type="button"
              className="mt-3 flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2.5 text-sm font-semibold text-indigo-400 transition hover:bg-indigo-500/20"
            >
              <Camera size={18} />
              Change Photo
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="grid w-full grid-cols-1 gap-5 md:max-w-md">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="profile-name"
              className="text-sm font-semibold text-slate-200"
            >
              Name
            </label>

            <input
              id="profile-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-[#263653] bg-[#172238] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="profile-email"
              className="text-sm font-semibold text-slate-200"
            >
              Email
            </label>

            <input
              id="profile-email"
              type="email"
              value={email}
              readOnly
              className="w-full cursor-not-allowed rounded-lg border border-[#263653] bg-[#0B1120] px-3 py-2.5 text-sm text-slate-400 outline-none"
            />

            <p className="text-xs text-slate-500">
              To change your email, visit Account Settings.
            </p>
          </div>

          {/* Save Changes */}
          <div className="mt-2 flex justify-end">
            <button
              type="button"
              onClick={handleSaveChanges}
              className="rounded-lg bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;