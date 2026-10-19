import { ChevronDown ,Search,FileText,Landmark,ChartNoAxesColumnIncreasing,ShoppingBag,Smartphone,Mail,Link,MessageSquare,Gift,MessageCircle,Trash2,ChevronRight,ChevronLeft} from "lucide-react"
import { useState } from "react";

const AnalysisHistory = () => {
     const historyData = [
  {
    id: 1,
    message:
      "Congratulations! You have been selected for a work-from-home job earning ₹50,000/month. Pay ₹1,999 as a registration fee to begin immediately.",
    type: "Job Offer",
    riskLevel: "High",
    score: 87,
    date: "Oct 7, 2026",
    icon: FileText,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 2,
    message:
      "Your KYC is pending. Click the link below to verify your bank account and avoid account suspension.",
    type: "Banking",
    riskLevel: "High",
    score: 92,
    date: "Oct 6, 2026",
    icon: Landmark,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 3,
    message:
      "Invest ₹5,000 today and receive guaranteed returns of ₹50,000 within seven days. Limited slots available!",
    type: "Investment",
    riskLevel: "High",
    score: 89,
    date: "Oct 5, 2026",
    icon: ChartNoAxesColumnIncreasing,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: 4,
    message:
      "Your parcel delivery has been delayed. Pay ₹25 for redelivery using the link below.",
    type: "Shopping",
    riskLevel: "Medium",
    score: 54,
    date: "Oct 4, 2026",
    icon: ShoppingBag,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
 {
  id: 5,
  message:
    "Your mobile number has won a free recharge worth ₹2,000! Share the OTP sent to your phone to claim your reward.",
  type: "OTP",
  riskLevel: "High",
  score: 85,
  date: "Oct 3, 2026",
  icon: Smartphone,
  iconBg: "bg-rose-100",
  iconColor: "text-rose-600",
},
{
  id: 6,
  message:
    "Your interview is scheduled for tomorrow at 10 AM. Please join using the meeting link provided by our HR team.",
  type: "Email",
  riskLevel: "Low",
  score: 18,
  date: "Oct 2, 2026",
  icon: Mail,
  iconBg: "bg-sky-100",
  iconColor: "text-sky-600",
},
{
  id: 7,
  message:
    "Congratulations! You have been selected to receive a special reward. Visit this website and enter your personal details to claim it.",
  type: "Link/Website",
  riskLevel: "High",
  score: 91,
  date: "Oct 1, 2026",
  icon: Link,
  iconBg: "bg-purple-100",
  iconColor: "text-purple-600",
},
{
  id: 8,
  message:
    "Hello, I am calling from your company's HR department. Please send your Aadhaar number and bank details to complete your job verification.",
  type: "Impersonation",
  riskLevel: "High",
  score: 88,
  date: "Sep 30, 2026",
  icon: MessageSquare,
  iconBg: "bg-emerald-100",
  iconColor: "text-emerald-600",
},
{
  id: 9,
  message:
    "You have won a brand-new iPhone! Pay a small processing fee of ₹499 to confirm your prize and arrange delivery.",
  type: "Lottery/Prize",
  riskLevel: "High",
  score: 93,
  date: "Sep 29, 2026",
  icon: Gift,
  iconBg: "bg-amber-100",
  iconColor: "text-amber-600",
},
{
  id: 10,
  message:
    "Hello, I have an urgent request. Please share your bank account details so I can transfer the money to you immediately.",
  type: "Other",
  riskLevel: "Medium",
  score: 56,
  date: "Sep 28, 2026",
  icon: MessageCircle,
  iconBg: "bg-sky-100",
  iconColor: "text-sky-600",
},
  {
    id: 11,
    message:
      "Congratulations! You have been selected for a work-from-home job earning ₹50,000/month. Pay ₹1,999 as a registration fee to begin immediately.",
    type: "Job Offer",
    riskLevel: "High",
    score: 87,
    date: "Oct 7, 2026",
    icon: FileText,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const [currentPage,setCurrentPage]=useState(1);

const itemsPerPage=10;
const totalpage=Math.ceil(historyData.length/ itemsPerPage);
const startIndex=(currentPage - 1 ) * itemsPerPage;
const currentData=historyData.slice(startIndex,startIndex+itemsPerPage);
  return (
    <>
    <div className="mt-4  rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

        {/* header */}

        <div>
           <p className="text-xl font-bold">Analysis History</p> 
           <p className="text-gray-400">View and manage all your previous analyses</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            <div className="relative w-full">
  <select
    className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-11 text-base text-gray-700 outline-none transition hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
  >
    <option value="all">All Types</option>
    <option value="job">Job Offer</option>
    <option value="banking">Banking</option>
    <option value="investment">Investment</option>
    <option value="shopping">Shopping</option>
    <option value="otp">OTP</option>
    <option value="romance">Romance</option>
    <option value="impersonation">Impersonation</option>
    <option value="lottery">Lottery/Prize</option>
    <option value="email">Email</option>
    <option value="link">Link/Website</option>
    <option value="other">Other</option>
  </select>

  <ChevronDown
    size={18}
    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
  />
           </div>
           <div className="relative w-full">
  <select
    className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-11 text-base text-gray-700 outline-none transition hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
  >
    <option value="all">All Risk Levels</option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>

  <ChevronDown
    size={18}
    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
  />
           </div>



        <div className="relative w-full">
          <Search
         size={20}
         className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
         />

         <input
                type="text"
                placeholder="Search your analyses..."
                 className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-base text-gray-700 outline-none transition placeholder:text-gray-400 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
         />
</div>
        </div>
        
        <div>

        </div>
   
    </div>

        <div className="mt-4  rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

{/* Table Header */}
<div className="grid grid-cols-[2.5fr_0.8fr_0.9fr_0.6fr_1fr_0.5fr] items-center rounded-xl bg-slate-50 px-5 py-4 text-sm font-bold text-slate-600 ">
  <p>Message Preview</p>
  <p>Type</p>
  <p className="flex items-center gap-2">
    Risk Level
    <ChevronDown size={16} />
  </p>
  <p>Score</p>
  <p>Date</p>
  <p className="text-center">Actions</p>
</div>

 {/* actual history */}
     <div  >
        {currentData.map((data)=>{
            const Icon=data.icon
           return( <div key={data.id}
           
           >

                 {/* desktop */}
                <div className="grid grid-cols-[2.5fr_0.8fr_0.9fr_0.6fr_1fr_0.5fr] items-center rounded-xl  px-5 py-4  border-b border-gray-200">
                      {/* icon */}
                      <div className="flex gap-2 items-center">
                        <div className={`h-12 w-12 rounded-xl flex justify-center items-center  ${data.iconBg} ${data.iconColor}`}>
                            <Icon />
                        </div>
                         
                                                 {/*  */}
                      <div>
                     {data.message.length > 40
                        ? data.message.slice(0, 40) + "..."
                       : data.message}
                    </div>
                      </div>
                      
                      <div className="text-gray-600">
                        {data.type}
                      </div>

                     {/* Risk Level */}
                     <div
  className={`flex h-10 w-30 items-center justify-center rounded-xl font-medium
    ${
      data.riskLevel === "High"
        ? "bg-red-100 text-red-600"
        : data.riskLevel === "Medium"
        ? "bg-amber-100 text-amber-600"
        : "bg-emerald-100 text-emerald-600"
    }`}
>
  {data.riskLevel}
                     </div>
                      
                      {/* score */}

                      <div className={`font-bold 
                        ${data.riskLevel==="high"
                            ?"text-red-600"
                            :data.riskLevel==="Medium"
                            ?"text-amber-600"
                            :"text-emerald-600"
                        }
                        `}>
                        {data.score}
                      </div>

                      {/* data */}
                      <div className="text-sm text-gray-400">
                        {data.date}
                      </div>

                      {/* action */}
                     <div className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-red-100 text-red-600 shadow-sm ring-1 ring-inset ring-red-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-red-500 hover:to-rose-600 hover:text-white hover:shadow-lg hover:shadow-red-500/30 hover:ring-transparent active:scale-95">
                     <Trash2 size={22} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    </div>
                    
                </div>
            </div>
           )
})}
     </div>

     {/* Pagination Buttons */}
<div className="flex items-center gap-3 mt-3">

  {/* Previous Button */}
  <button
    onClick={() => setCurrentPage((page) => page - 1)}
    disabled={currentPage === 1}
    className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
  >
    <ChevronLeft size={16} /> 
    Prev
  </button>

  {/* Current Page */}
  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 bg-red-50 font-semibold text-red-600">
    {currentPage}
  </span>

  {/* Next Button */}
  <button
    onClick={() => setCurrentPage((page) => page + 1)}
    disabled={currentPage === totalpage}
    className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
  >
    Next
    <ChevronRight size={16} />
  </button>

</div>
       </div>
    </>
  )
}

export default AnalysisHistory