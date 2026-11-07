import { ChevronDown ,Search,FileText,Mail,Link,MessageSquare,Users,BriefcaseBusiness,Trash2,ChevronRight,ChevronLeft,Calendar} from "lucide-react"
import { useState ,useEffect} from "react";
import { getAnalysisHistory } from "@/api/historyApi";
import { deleteAnalysis } from "@/api/deleteAnalysis";
const AnalysisHistory = () => {
const typeStyles = {
  "Text Message": {
    icon: MessageSquare,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },

  Email: {
    icon: Mail,
    bg: "bg-sky-100",
    color: "text-sky-600",
  },

  "Job Offer": {
    icon: BriefcaseBusiness,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },

  "Social Media": {
    icon: Users,
    bg: "bg-pink-100",
    color: "text-pink-600",
  },

  "Link/Website": {
    icon: Link,
    bg: "bg-indigo-100",
    color: "text-indigo-600",
  },

  Other: {
    icon: FileText,
    bg: "bg-gray-100",
    color: "text-gray-600",
  },
};
const [history, setHistory] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  const fetchHistory = async () => {
    try {
      setLoading(true);
      setError("");

const data = await getAnalysisHistory();

console.log("API RESPONSE:", data);
setHistory(data.history || []);

    } catch (error) {
      console.error("History Fetch Error:", error);
      setError(error.message || "Failed to load analysis history.");

    } finally {
      setLoading(false);
    }
  };

  fetchHistory();
}, []);

const handleDelete = async (id) => {
  try {
    await deleteAnalysis(id);

    setHistory((prevHistory) => {
      const updatedHistory = prevHistory.filter(
        (item) => item._id !== id
      );

      const newTotalPages = Math.ceil(
        updatedHistory.length / itemsPerPage
      );

      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(newTotalPages);
      }

      return updatedHistory;
    });

  } catch (error) {
    console.error("Delete Error:", error);
    setError(error.message || "Failed to delete analysis.");
  }
};
const [currentPage,setCurrentPage]=useState(1);

const itemsPerPage=10;
const totalpage = Math.ceil(history.length / itemsPerPage);
const startIndex=(currentPage - 1 ) * itemsPerPage;
const currentData = history.slice(
  startIndex,
  startIndex + itemsPerPage
);
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
<div className="hidden md:grid grid-cols-[2.5fr_0.8fr_0.9fr_0.6fr_1fr_0.5fr] items-center rounded-xl bg-slate-50 px-5 py-4 text-sm font-bold text-slate-600 ">
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
          const style = typeStyles[data.contentType] || {
            icon: FileText,
  bg: "bg-gray-100",
  color: "text-gray-600",
           };

const Icon = style.icon;
           return( <div key={data._id}
           
           >

                 {/* desktop */}
                <div className="hidden md:grid grid-cols-[2.5fr_0.8fr_0.9fr_0.6fr_1fr_0.5fr] items-center rounded-xl  px-5 py-4  border-b border-gray-200">
                      {/* icon */}
                      <div className="flex gap-2 items-center">
                        <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.bg} ${style.color}`}
                         >
                              <Icon size={22} />
                       </div>
                         
                                {/*  */}
                      <div>
                     {data.content.length > 40
                         ? data.content.slice(0, 40) + "..."
                         : data.content}
                    </div>
                      </div>
                      
                      <div className="text-gray-600">
                        {data.contentType}
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
                      

{/* Score */}
<div
  className={`font-bold
    ${
      data.riskLevel === "High"
        ? "text-red-600"
        : data.riskLevel === "Medium"
        ? "text-amber-600"
        : "text-emerald-600"
    }
  `}
>
  {data.riskScore}
</div>

                      {/* data */}
                      <div className="text-sm text-gray-400">
                        {new Date(data.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })}
                      </div>

                      {/* action */}
                     <div 
                     onClick={()=>handleDelete(data._id)}
                     className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-red-100 text-red-600 shadow-sm ring-1 ring-inset ring-red-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-red-500 hover:to-rose-600 hover:text-white hover:shadow-lg hover:shadow-red-500/30 hover:ring-transparent active:scale-95">
                     <Trash2 size={22} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    </div>
                    
                </div>

{/* Mobile */}
<div className="md:hidden flex  flex-col  items-start gap-3 border-b border-gray-200 py-3">
  <div className="flex  w-full items-start gap-3 ">
  {/* Icon */}
  <div
className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.bg} ${style.color}`}
  >
    <Icon size={22} />
  </div>

  {/* Message preview */}
  <div className="min-w-0 flex-1  text-sm text-gray-700">
{data.content.length > 40
  ? data.content.slice(0, 40) + "..."
  : data.content}
  </div>


{/* delete icon */}

<div 
onClick={()=> handleDelete(data._id)}
className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-red-100 text-red-600 shadow-sm ring-1 ring-inset ring-red-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-red-500 hover:to-rose-600 hover:text-white hover:shadow-lg hover:shadow-red-500/30 hover:ring-transparent active:scale-95">
    <Trash2 
     
    size={22} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
</div>
  </div>


<div className="flex w-full justify-between items-center">
    <div className="text-gray-600 bg-gray-100 px-2 py-1 rounded-xl">
              {data.contentType}
    </div>

    {/* risk level */}
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

</div>


<div className="flex w-full justify-between items-center">
{/* Score */}
<div
  className={`font-bold
    ${
      data.riskLevel === "High"
        ? "text-red-600"
        : data.riskLevel === "Medium"
        ? "text-amber-600"
        : "text-emerald-600"
    }
  `}
>
  {data.riskScore}/100
</div>
{/* date */}
      <div className="text-sm text-gray-400 flex gap-2">
          <Calendar />{new Date(data.createdAt).toLocaleDateString("en-IN", {             
             day: "numeric",
             month: "short",
             year: "numeric",
           })}
      </div>
</div>
</div>
            </div>
           )
})}
     </div>
{loading && (
  <p className="py-10 text-center text-gray-500">
    Loading analysis history...
  </p>
)}

{error && (
  <p className="py-10 text-center text-red-500">
    {error}
  </p>
)}
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