import { Bell,ChevronDown,ChevronUp } from "lucide-react"
import ProfieDropdown from "./ProfieDropdown"
import { useState } from "react"
const Header = () => {
    const[click,Setclick]=useState(false);
  return (
    <div className="fixed top-0 right-0 z-40 flex h-20 w-full items-center justify-end gap-3 bg-white px-4 sm:px-6 lg:left-[280px] lg:w-[calc(100%-280px)]">
     <div className="flex gap-2 items-center">
<button
  type="button"
  className="relative rounded-full p-2 text-slate-600 transition hover:bg-slate-100"
  aria-label="Notifications"
>
  <Bell size={22} />

  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
</button>
        <div className="h-12 w-12 rounded-full bg-gray-400 text-red flex justify-center items-center text-2xl font-bold">
            I
        </div>
<div className="flex items-center gap-2">
  <span className="font-semibold text-slate-800">Indrajit</span>
<div onClick={() => Setclick(!click)}>
  {click ? <ChevronUp /> : <ChevronDown />}
</div>

{click && <ProfieDropdown />}

</div>
     </div>


    </div>
  )
}

export default Header