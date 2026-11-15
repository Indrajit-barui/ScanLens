import {
  LockKeyhole,
  Mail,
  Trash2,
  Eye,
  EyeOff,
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
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [deldete, setDelete] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const [newEmail, setNewEmail] = useState("");
  const [emailPassword, setEmailPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
  // Update Email
  const handleUpdateEmail = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/user/update-email`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            newEmail: newEmail,
            password: emailPassword,
          }),
        }
      );

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

  // Change Password
  const changePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${API_URL}/user/change-password`,
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

  // Delete Account
  const handleDelete = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in again.");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/user/delete-accouont`,
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

      localStorage.removeItem("token");

      setCurrentPassword("");
      setDelete(false);

      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Delete account error:", error);
      alert("Unable to connect to the server. Please try again.");
    }
  };

  // Dark Input Styling
  const inputClass =
    "h-12 border-[#263653] bg-[#172238] text-white placeholder:text-slate-500 focus-visible:ring-rose-500";

  // Dark Dialog Styling
  const dialogClass =
    "border border-[#263653] bg-[#111827] text-white sm:max-w-[500px]";

  const labelClass = "text-sm font-semibold text-slate-200";

  return (
    <div className="mt-4 rounded-2xl border border-[#263653] bg-[#111827] p-5 shadow-sm">

      {/* Header */}
      <div>
        <p className="text-3xl font-bold text-white">Account</p>
        <p className="text-slate-400">
          Manage your account and security settings.
        </p>
      </div>

      {/* Main Section */}
      <div className="mt-6 flex flex-col gap-6">

        {/* Change Password */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#263653] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
              <LockKeyhole size={25} />
            </div>

            <div>
              <p className="text-xl font-bold text-white">
                Change Password
              </p>
              <p className="text-sm text-slate-400">
                Update your password to keep your account secure.
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpenPassword(true)}
            className="rounded-xl border border-[#263653] bg-[#172238] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-400"
          >
            Change Password
          </button>
        </div>

        {/* Update Email */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#263653] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <Mail size={25} />
            </div>

            <div>
              <p className="text-xl font-bold text-white">
                Email Address
              </p>
              <p className="text-sm text-slate-400">
                Update your email address.
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-2.5 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-600 hover:text-white"
          >
            Update Email
          </button>
        </div>

        {/* Delete Account */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
              <Trash2 size={25} />
            </div>

            <div>
              <p className="text-xl font-bold text-white">
                Delete Account
              </p>
              <p className="text-sm text-slate-400">
                Permanently delete your account and all data.
              </p>
            </div>
          </div>

          <button
            onClick={() => setDelete(true)}
            className="rounded-xl border border-red-500/30 bg-red-500/10 px-6 py-2.5 text-sm font-semibold text-red-400 transition hover:bg-red-600 hover:text-white"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Change Password Dialog */}
      <Dialog open={openPassword} onOpenChange={setOpenPassword}>
        <DialogContent className={dialogClass}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Change Password
            </DialogTitle>

            <DialogDescription className="text-slate-400">
              Choose a strong new password to keep your account secure.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 py-3">

            {/* Current Password */}
            <div className="space-y-2">
              <label htmlFor="currentPassword" className={labelClass}>
                Current Password
              </label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />

                <Input
                  id="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Enter your current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className={`${inputClass} pl-10 pr-16`}
                />

                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-rose-400"
                >
                  {showCurrentPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <label htmlFor="newPassword" className={labelClass}>
                New Password
              </label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />

                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={`${inputClass} pl-10 pr-16`}
                />

                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-rose-400"
                >
                  {showNewPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className={labelClass}>
                Confirm New Password
              </label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />

                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`${inputClass} pl-10 pr-16`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-rose-400"
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
              className="border-[#263653] bg-[#172238] text-slate-200 hover:bg-slate-700 hover:text-white"
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
              className="bg-rose-600 text-white hover:bg-rose-700"
              disabled={!currentPassword || !newPassword || !confirmPassword}
            >
              Update Password
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Update Email Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={dialogClass}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Update Email Address
            </DialogTitle>

            <DialogDescription className="text-slate-400">
              Enter your new email address and current password to update your email.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 py-3">

            {/* New Email */}
            <div className="space-y-2">
              <label htmlFor="newEmail" className={labelClass}>
                New Email Address
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <Input
                  id="newEmail"
                  type="email"
                  placeholder="Enter your new email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            {/* Current Password */}
            <div className="space-y-2">
              <label htmlFor="emailPassword" className={labelClass}>
                Current Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <Input
                  id="emailPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your current password"
                  value={emailPassword}
                  onChange={(e) => setEmailPassword(e.target.value)}
                  className={`${inputClass} pl-10 pr-20`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-rose-400"
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
              className="border-[#263653] bg-[#172238] text-slate-200 hover:bg-slate-700 hover:text-white"
              onClick={() => {
                setOpen(false);
                setNewEmail("");
                setEmailPassword("");
                setShowPassword(false);
              }}
            >
              Cancel
            </Button>

            <Button
              type="button"
              className="bg-rose-600 text-white hover:bg-rose-700"
              onClick={handleUpdateEmail}
              disabled={!newEmail.trim() || !emailPassword}
            >
              Update Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Account Dialog */}
      <Dialog open={deldete} onOpenChange={setDelete}>
        <DialogContent className="border border-[#263653] bg-[#111827] p-6 text-white sm:max-w-[450px]">

          <DialogHeader className="items-center text-center">
            <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/15">
              <Trash2 className="h-7 w-7 text-red-400" />
            </div>

            <DialogTitle className="text-xl font-bold text-white">
              Delete your account?
            </DialogTitle>

            <DialogDescription className="text-sm leading-6 text-slate-400">
              Are you sure you want to delete your ScanLens account?
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          {/* Warning Message */}
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3">
            <p className="text-sm text-red-400">
              <span className="font-semibold">Warning:</span>{" "}
              Your account will be permanently deleted.
            </p>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="delete-password"
              className="text-sm font-medium text-slate-200"
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
                className={`${inputClass} pr-10`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-rose-400"
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
              className="w-full border-[#263653] bg-[#172238] text-slate-200 hover:bg-slate-700 hover:text-white sm:flex-1"
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
  );
};

export default Account;