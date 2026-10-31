import {Camera} from "lucide-react"
import { useState,useEffect } from "react"

const ProfileSettings = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
useEffect(() => {
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
       console.log("Token exists:", !!token);
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
        setName(data.user.name);
        setEmail(data.user.email);
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };

  fetchProfile();
}, []);

const handleSaveChanges = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "http://localhost:5000/user/profile",
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
    console.log("Profile response:", data);
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
  return (
    <div className="mt-4  rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div >
        <p className="text-xl font-bold">Profile Settings</p>
        <p className="text-gray-500">Update your personal information</p>
        </div>

<div className="mt-2 px-2 flex flex-col md:flex-row md:justify-between gap-5 md:items-center">
  <div className="flex gap-5">
  <div className="relative h-30 w-30 bg-indigo-200 rounded-full text-4xl font-bold flex justify-center items-center">
    {name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .toUpperCase()}

    {/* Camera Icon */}
    <button className="absolute bottom-0 right-0 bg-slate-800 text-white p-2 rounded-full border-2 border-white">
      <Camera size={20} />
    </button>


  </div>

  <div>
    <p className="text-2xl font-bold">{name}</p>
    <p className="text-gray-600">{email}</p>
      <div>
<button className="flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-indigo-100 hover:border-indigo-300 mt-2">
  <Camera size={20} className="text-indigo-600" />
  Change Photo
</button>
  </div>

  </div>
</div>

<div className="grid grid-cols-1 gap-5">
  {/* Name */}
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-900">
      Name
    </label>

    <input
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
    />
  </div>

  {/* Email */}
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-900">
      Email
    </label>

    <input
      type="email"
      value={email}
      readOnly
       onChange={(e)=>setEmail(e.target.value)}

      className="w-full rounded-lg border  border-gray-200 bg-gray-100 px-3 py-2.5 text-sm text-gray-500 outline-none"
    />
  </div>

  {/* Save Changes Button */}
<div className="flex justify-end mt-2">
  <button
    type="button"
    onClick={handleSaveChanges}
    className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
  >
    Save Changes
  </button>
</div>
</div>


</div>




    </div>
  )
}

export default ProfileSettings