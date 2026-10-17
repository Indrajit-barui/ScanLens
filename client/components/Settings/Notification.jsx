import { Bell } from "lucide-react"
import { useState } from "react"

const Notification = () => {
    const[darkMode,setDarkMode]=useState(true)
  return (
        <div className="mt-4  rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* header */}

            <div>
                <p className="font-bold text-xl">Notification</p>
                <p className="text-gray-400">Manage your notification preferences</p>
            </div>

            <div className="flex justify-between mt-3 items-end">
                {/* icon */}
                <div className="flex gap-8">
                <div className="h-12 w-12 rounded-xl flex justify-center items-center bg-gray-200 text-indigo-600">
                        <Bell size={28}/>
                </div>

                <div>
                    <p className="font-bold">Scam Alerts</p>
                    <p className="text-gray-400">Get notified about new scam trends and safety tips</p>
                </div>
                </div>

  {/* Toggle Switch */}
  <div
     onClick={() => setDarkMode(!darkMode)}
    className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors duration-200 ${
      darkMode ? "bg-blue-500" : "bg-slate-300"
    }`}
  >
    <div
      className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
        darkMode ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </div>


            </div>
        </div>
  )
}

export default Notification