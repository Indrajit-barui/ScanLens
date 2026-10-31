import {

  LockKeyhole,
  Mail,
  Trash2,
Eye,EyeOff
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate=useNavigate();
  const [open,setOpen]=useState(false);
  const[deldete,setDelete]=useState(false);
  const [openPassword,setOpenPassword]=useState(false);
  const [newEmail, setNewEmail] = useState("");
const [emailPassword, setEmailPassword] = useState("");
const [currentPassword, setCurrentPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [showCurrentPassword, setShowCurrentPassword] = useState(false);
const [showNewPassword, setShowNewPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const handleUpdateEmail = async () => {
try {
const token = localStorage.getItem("token");

const response = await fetch("http://localhost:5000/user/update-email", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    newEmail: newEmail,
    password: emailPassword,
  }),
});

const data = await response.json();

if (!response.ok) {
  alert(data.message || "Failed to update email");
  return;
}

alert(data.message || "Email updated successfully");

setOpen(false);
setNewEmail("");
setEmailPassword("");
setShowPassword(false);

} catch (error) {
console.error("Update email error:", error);
alert("Unable to connect to the server. Please try again.");
}
};


const changePassword = async () => {
  const token = localStorage.getItem("token");


  try {
    const response = await fetch(
      "http://localhost:5000/user/change-password",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Failed to change password");
      return;
    }

    alert(data.message || "Password changed successfully");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setOpenPassword(false);
  } catch (error) {
    console.error("Change password error:", error);
    alert("Unable to connect to the server. Please try again.");
  }
};

const handleDelete = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please log in again.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/user/delete-accouont",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password: currentPassword,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Failed to delete account");
      return;
    }

    alert(data.message || "Account deleted successfully");

    // Clear authentication data
    localStorage.removeItem("token");

    // Clear password field
    setCurrentPassword("");

    // Close the dialog
    setDelete(false);

    // Redirect to login page
    navigate("/login", { replace: true });

  } catch (error) {
    console.error("Delete account error:", error);
    alert("Unable to connect to the server. Please try again.");
  }
};

  return (
    <div className="mt-4  rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        
        {/* header */}
        <div>
            <p className="text-3xl font-bold">Account</p>
            <p className="text-gray-500">Manage your account and security settings.</p>
        </div>

        {/* main section */}

        <div className="  mt-3 flex flex-col gap-3">
              {/* change password */}
              <div className="flex justify-between">
              <div className="flex gap-10">
                {/* icon */}
                <div className="h-12 w-12 flex justify-center items-center bg-indigo-200 text-indigo-600 rounded-xl">
                        <LockKeyhole size={25}/>
                </div>

                <div>
                    <p className="text-xl font-bold">Change Password</p>
                    <p className="text-gray-400">Update your password to keep your account secure</p>
                </div>
              </div>
       <div >
  <button 
  onClick={()=>{
    
    setOpenPassword(true)}}
  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 active:translate-y-0 active:scale-[0.98]">
    Change Password
  </button>
      </div>
              </div>
              {/* email update */}
                <div className="flex justify-between">
              <div className="flex gap-10">
                {/* icon */}
                <div className="h-12 w-12 flex justify-center items-center bg-indigo-200 text-indigo-600 rounded-xl">
                        <Mail size={25}/>
                </div>

                <div>
                    <p className="text-xl font-bold">Email Address</p>
                    <p className="text-gray-400">Update your email address</p>
                </div>
              </div>
       <div >
<button 
onClick={()=>{
  setOpen(true)

}}

className="inline-flex items-center justify-center rounded-lg bg-emerald-50 px-8 py-2.5 text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 active:scale-95">
  Update Email
</button>
      </div>
              </div>

              {/* Delete Account */}
                <div className="flex justify-between">
              <div className="flex gap-10">
                {/* icon */}
                <div className="h-12 w-12 flex justify-center items-center bg-red-200 text-red-600 rounded-xl">
                        <Trash2 size={25}/>
                </div>

                <div>
                    <p className="text-xl font-bold">Delete Account</p>
                    <p className="text-gray-400">Permanently delete your account and all data</p>
                </div>
              </div>
       <div >
<button 
onClick={()=>setDelete(true)}
className="inline-flex items-center justify-center rounded-xl border border-red-300 bg-white px-6.5 py-2.5 text-sm font-semibold text-red-600 shadow-sm transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50">
  Delete Account
</button>
      </div>
              </div>
        </div>

{/*change password  */}
<Dialog open={openPassword} onOpenChange={setOpenPassword}>
  <DialogContent className="sm:max-w-[500px]">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold">
        Change Password
      </DialogTitle>

      <DialogDescription className="text-base">
        Choose a strong new password to keep your account secure.
      </DialogDescription>
    </DialogHeader>

<div className="space-y-5 py-3">
  {/* Current Password */}
  <div className="space-y-2">
    <label htmlFor="currentPassword" className="text-sm font-semibold">
      Current Password
    </label><div className="relative">
  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

  <Input
    id="currentPassword"
    type={showCurrentPassword ? "text" : "password"}
    placeholder="Enter your current password"
    value={currentPassword}
    onChange={(e) => setCurrentPassword(e.target.value)}
    className="h-12 pl-10 pr-16"
  />

  <button
    type="button"
    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-indigo-600"
  >
    {showCurrentPassword ? "Hide" : "Show"}
  </button>
</div>

  </div>{/* New Password */}

  <div className="space-y-2">
    <label htmlFor="newPassword" className="text-sm font-semibold">
      New Password
    </label><div className="relative">
  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

  <Input
    id="newPassword"
    type={showNewPassword ? "text" : "password"}
    placeholder="Enter your new password"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    className="h-12 pl-10 pr-16"
  />

  <button
    type="button"
    onClick={() => setShowNewPassword(!showNewPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-indigo-600"
  >
    {showNewPassword ? "Hide" : "Show"}
  </button>
</div>

  </div>{/* Confirm New Password */}

  <div className="space-y-2">
    <label htmlFor="confirmPassword" className="text-sm font-semibold">
      Confirm New Password
    </label><div className="relative">
  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

  <Input
    id="confirmPassword"
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirm your new password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    className="h-12 pl-10 pr-16"
  />

  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-indigo-600"
  >
    {showConfirmPassword ? "Hide" : "Show"}
  </button>
</div>

  </div>
</div>

    <DialogFooter className="gap-2 sm:gap-2">
      <Button
        type="button"
        variant="outline"
       onClick={() => {
  setOpenPassword(false);
  setCurrentPassword("");
  setNewPassword("");
  setConfirmPassword("");
  setShowCurrentPassword(false);
  setShowNewPassword(false);
  setShowConfirmPassword(false);
}}
      >
        Cancel
      </Button>

      <Button
        type="button"
        onClick={changePassword}
        className="bg-indigo-600 hover:bg-indigo-700"
     
      >
        Update Password
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
{/* update email */}
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="sm:max-w-[500px]">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold">
        Update Email Address
      </DialogTitle>

      <DialogDescription className="text-base">
        Enter your new email address and current password to update your email.
      </DialogDescription>
    </DialogHeader>

    <div className="space-y-5 py-3">
      {/* New email */}
      <div className="space-y-2">
        <label htmlFor="newEmail" className="text-sm font-semibold">
          New Email Address
        </label>

        <div className="relative">
          <Mail
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <Input
            id="newEmail"
            type="email"
            placeholder="Enter your new email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="h-12 pl-10"
          />
        </div>
      </div>

      {/* Current password */}
      <div className="space-y-2">
        <label htmlFor="emailPassword" className="text-sm font-semibold">
          Current Password
        </label>

        <div className="relative">
          <LockKeyhole
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <Input
            id="emailPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your current password"
            value={emailPassword}
            onChange={(e) => setEmailPassword(e.target.value)}
            className="h-12 pl-10 pr-20"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-indigo-600 hover:text-indigo-800"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>

    <DialogFooter className="gap-2 sm:gap-2">
      <Button
        type="button"
        variant="outline"
onClick={() => {
  setOpen(false);
  setNewEmail("");
  setCurrentPassword("");
  setShowPassword(false);
}}
      >
        Cancel
      </Button>

      <Button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-700"
       onClick={handleUpdateEmail}
      >
        Update Email
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>


{/* delete Account */}
<Dialog open={deldete} onOpenChange={setDelete}>
  <DialogContent className="sm:max-w-[450px] p-6">
    <DialogHeader className="items-center text-center">
      {/* Warning Icon */}
      <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
        <Trash2 className="h-7 w-7 text-red-600" />
      </div>

      <DialogTitle className="text-xl font-bold text-gray-900">
        Delete your account?
      </DialogTitle>

      <DialogDescription className="text-sm leading-6 text-gray-500">
        Are you sure you want to delete your ScanLens account?
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>

    {/* Warning Message */}
    <div className="rounded-lg border border-red-200 bg-red-50 p-3">
      <p className="text-sm text-red-700">
        <span className="font-semibold">Warning:</span>{" "}
        Your account will be permanently deleted.
      </p>
    </div>

    {/* Password Input */}
    <div className="space-y-2">
      <label
        htmlFor="delete-password"
        className="text-sm font-medium text-gray-700"
      >
        Enter your current password
      </label>

      <div className="relative">
        <Input
          id="delete-password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="pr-10"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>

    {/* Action Buttons */}
    <DialogFooter className="flex flex-col gap-2 sm:flex-row sm:gap-2">
      <Button
        type="button"
        variant="outline"
        className="w-full sm:flex-1"
        onClick={() => {
          setDelete(false);
          setCurrentPassword("");
          setShowPassword(false);
        }}
      >
        Cancel
      </Button>

      <Button
        type="button"
        className="w-full bg-red-600 text-white hover:bg-red-700 sm:flex-1"
        disabled={!currentPassword.trim()}
        onClick={handleDelete}
      >
        <Trash2 className="mr-2 h-4 w-4" />
        Delete Account
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>


    </div>
  )
}

export default Account