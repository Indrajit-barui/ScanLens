import {
  Shield,
  House,
  FileSearch,
  Clock,
  BookOpen,
  Bookmark,
  Settings,
  Menu, X
 
} from "lucide-react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavItem from "./Navitem";
import UpgradeCard from "./UpgradeCard";


const Sidebar = () => {
  const[activeItem,setActiveItem]=useState("Dashboard")
  const [isOpen,setIsOpen]=useState(false)
  // const navigate = useNavigate();
  return (
    <>
{/* Mobile menu button */}
{!isOpen && (
  <button
    onClick={() => setIsOpen(true)}
    className="fixed left-4 top-4 z-[60] rounded-lg bg-white p-2 shadow lg:hidden"
    aria-label="Open sidebar"
  >
    <Menu size={24} />
  </button>
)}

{/* Background overlay */}
{isOpen && (
  <div
    onClick={() => setIsOpen(false)}
    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
  />
)}
<aside
  className={`fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col border-r border-gray-200 bg-white py-4 transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0`}
>
 {/* logo */}
 <div>
<div className="flex items-center justify-between px-3">
  {/* Logo */}
  <div className="flex items-center gap-2">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
      <Shield size={35} fill="white" strokeWidth={2.5} />
    </div>

    <p className="text-2xl font-bold">
      Scam<span className="text-red-500">Lens</span>
    </p>
  </div>

  {/* Close button: mobile only */}
  <button
    onClick={() => setIsOpen(false)}
    className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
    aria-label="Close sidebar"
  >
    <X size={22} />
  </button>
</div>

{/* navigation */}

      <nav className="p-4 space-y-2">

        <NavItem
          icon={<House size={20} className="text-blue-700"/>}
          text="Dashboard"
          active={activeItem==="Dashboard"}
          onClick={()=>{setActiveItem("Dashboard")
          }}
          
        />

        <NavItem
          icon={<FileSearch size={20} className="text-green-500"/>}
          text="Analyze Message"
          active={activeItem==="Analyze"}
           onClick={()=>{setActiveItem("Analyze")
          }}
        />

        <NavItem
          icon={<Clock size={20} className="text-red-500"/>}
          text="History"
          active={activeItem==="History"}
          onClick={()=>{setActiveItem("History")
          }}
        />

        <NavItem
          icon={<BookOpen size={20} className="text-blue-500"/>}
          text="Learn About Scams"

           active={activeItem==="Learn"}
          onClick={()=>{setActiveItem("Learn")
          }}
        />



        <NavItem
          icon={<Bookmark size={20} className="text-blue-800"/>}
          text="Saved Reports"

           active={activeItem==="Reports"}
          onClick={()=>{setActiveItem("Reports")
         
          }}
        />

        <NavItem
          icon={<Settings size={20} className="text-gray-500"/>}
          text="Settings"
          active={activeItem==="Settings"}
          onClick={()=>{setActiveItem("Settings")
           
          }
        }
        />

      </nav>
 </div>



<UpgradeCard />


</aside>
</>
  )
}

export default Sidebar