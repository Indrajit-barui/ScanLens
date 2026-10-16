import {
  BriefcaseBusiness,
  Landmark,
  ChartNoAxesCombined,
  ShoppingCart,
  Phone,
  Heart,
  UserRound,
  Gift,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LearnAboutScams = () => {
  const navigate=useNavigate();
const scamCategories = [
  {
    id:"job",
    title: "Job Scams",
    description: "Fake job offers and work-from-home scams.",
    icon: BriefcaseBusiness,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    id:"Banking",
    title: "Banking Scams",
    description: "Fake KYC, account suspension messages.",
    icon: Landmark,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id:"Investment",
    title: "Investment Scams",
    description: "High return schemes and crypto scams.",
    icon: ChartNoAxesCombined,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    id:"Shopping",
    title: "Shopping Scams",
    description: "Fake websites and discount offers.",
    icon: ShoppingCart,
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
  {
     id:"OTP",
    title: "OTP Scams",
    description: "Fake OTP requests and verification scams.",
    icon: Phone,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id:"Romance",
    title: "Romance Scams",
    description: "Fake relationships and emotional scams.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-100",
  },
  {
    id:"Impersonation",
    title: "Impersonation",
    description: "Fake government or company representatives.",
    icon: UserRound,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    id:"Lottery",
    title: "Lottery & Prize Scams",
    description: "Fake winnings and prize notifications.",
    icon: Gift,
    color: "text-red-500",
    bg: "bg-red-100",
  },
];
  return (
    <div>
        {/* header */}
        <div>
            <p className="text-xl md:text-4xl font-bold">Learn About scams</p>
            <p className="text-gray-400">Understand common scam types and how to stay safe</p>
        </div>

        {/* category */}
           <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {
                scamCategories.map((category)=>{
                    const Icon=category.icon;
                    return (
                    <div
                      key={category.id}
                        className="flex flex-col gap-1 items-center rounded-2xl border border-slate-100 bg-white px-5 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                       {/* icon */}
                       <div className={`h-13 w-13 rounded-xl ${category.color} ${category.bg} flex justify-center items-center`}>
                           <Icon size={25}/>
                       </div>

                       {/* title */}
                       <div className="flex flex-col ">
                        <p className="font-bold text-center">{category.title}</p>
                        <p>{category.description}</p>
                       </div>
                       {/* Learn More */}
                     <div>
                        <button 
                        onClick={()=>navigate(`/learn/${category.id}`)}
                        className="px-2 py-2 bg-gray-100 text-red-600 font-semibold flex gap-2 rounded-xl cursor-pointer">
                            Learn More <ArrowRight />
                        </button>
                     </div>
                    </div>)
                })
              }
        </div>
    </div>
  )
}

export default LearnAboutScams