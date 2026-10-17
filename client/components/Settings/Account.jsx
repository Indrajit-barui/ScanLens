import {

  LockKeyhole,
  Mail,
  Trash2,

} from "lucide-react";
const Account = () => {
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
  <button className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 active:translate-y-0 active:scale-[0.98]">
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
<button className="inline-flex items-center justify-center rounded-lg bg-emerald-50 px-8 py-2.5 text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 active:scale-95">
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
<button className="inline-flex items-center justify-center rounded-xl border border-red-300 bg-white px-6.5 py-2.5 text-sm font-semibold text-red-600 shadow-sm transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50">
  Delete Account
</button>
      </div>
              </div>
        </div>
    </div>
  )
}

export default Account