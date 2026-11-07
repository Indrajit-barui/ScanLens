import { ArrowRight,FileText ,BriefcaseBusiness,ShoppingBag,ChartNoAxesColumnIncreasing,Calendar,Mail,MessageSquare,Users,Link,Landmark} from "lucide-react"

const RecentAnalyses = ({analyses}) => {
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
  Banking: {
    icon: Landmark,
    bg: "bg-amber-100",
    color: "text-amber-600",
  },
  Investment: {
    icon: ChartNoAxesColumnIncreasing,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  Shopping: {
    icon: ShoppingBag,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  Other: {
    icon: FileText,
    bg: "bg-gray-100",
    color: "text-gray-600",
  },
};
  return (
    <div>
{/* Header */}
<div className="flex items-center justify-between border-b border-slate-100 pb-4">
  <h2 className="text-xl font-bold text-slate-900">
    Recent Analyses
  </h2>

  <button className="flex items-center gap-1 text-sm font-semibold text-red-500 transition hover:text-red-600">
    View All
    <ArrowRight size={18} />
  </button>
</div>

<div>
    {
        analyses.map((item)=>{
          const style=typeStyles[item.contentType] || {
            icon:FileText,
            bg:"bg-gray-100",
            color:"text-gray-600"
          }

          const Icon=style.icon
           return (
            <div key={item._id}>
                {/* desktop */}
                <div
                
                className="hidden md:grid grid-cols-1 gap-3 border-b border-slate-100 py-4 md:grid-cols-[48px_minmax(0,1fr)_100px_80px_35px] md:items-center md:gap-4"
              >
                  
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center  rounded-xl ${style.bg} ${style.color}`}>
                 <Icon></Icon>
            </div>
             {/* title and category */}
            <div className="flex flex-col">
              {item.content.length > 35
                 ? item.content.slice(0, 35) + "..."
                 : item.content}
              <p className="text-gray-400">{item.contentType}</p>
            </div>

            {/* data */}

            <div className="text-sm text-gray-400">
                {new Date(item.createdAt).toLocaleDateString("en-IN", {
             day: "numeric",
             month: "short",
             year: "numeric",
           })}
            </div>

            {/* risk */}
            <div className={`h-10 w-12 ${item.color} rounded-xl flex items-center justify-center`}>
                {item.riskLevel}
            </div>
            {/* score */}

             <div className={`text-xl font-semibold ${
                  item.riskLevel === "High" ? "text-red-500" : "text-slate-900"
                    }`}>
              {item.riskScore}
             </div>
                </div>

{/* Mobile */}
<div className="md:hidden">
  {/* Icon + Title + Category */}
  <div className="flex items-start gap-3">
    {/* Icon */}
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.color}`}
    >
      <Icon size={25}/>
    </div>

    {/* Title and Category */}
    <div className="min-w-0 flex-1">
      <p className="font-semibold text-base text-slate-900">
        {item.content.length > 35
          ? item.content.slice(0, 35) + "..."
           : item.content}
      </p>

      <p className="text-sm text-slate-500">
        {item.contentType}
      </p>

      {/* Date */}
      <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
        <Calendar size={16} />
        <span>{new Date(item.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })}</span>
      </div>

      {/* Risk Badge + Score */}
      <div className="mt-3 flex items-center justify-between">
        {/* Risk */}
        <span
          className={`rounded-xl px-4 py-2 text-sm font-semibold ${
            item.riskLevel === "High"
              ? "bg-red-100 text-red-500"
              : item.risk === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {item.riskLevel}
        </span>

        {/* Score */}
        <span
          className={`text-xl font-bold ${
            item.risk === "High" ? "text-red-500" : "text-slate-900"
          }`}
        >
          {item.riskScore}
        </span>
      </div>
    </div>
  </div>
</div>
            </div>
        )})
    }
  </div>
    </div>
  )
}

export default RecentAnalyses