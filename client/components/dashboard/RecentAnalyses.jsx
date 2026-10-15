import { ArrowRight,FileText ,AlertTriangle,ShoppingBag,ChartNoAxesColumnIncreasing,Calendar} from "lucide-react"

const RecentAnalyses = () => {
const analyses = [
  {
    id: 1,
    title: "Work from home job offer",
    category: "Job Offer",
    date: "Oct 7, 2026",
    risk: "High",
    score: 87,
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 2,
    title: "Bank KYC update SMS",
    category: "Banking",
    date: "Oct 6, 2026",
    risk: "High",
    score: 92,
    icon: AlertTriangle,
    color: "bg-red-100 text-red-500",
  },
  {
    id: 3,
    title: "Amazon delivery message",
    category: "Shopping",
    date: "Oct 5, 2026",
    risk: "Low",
    score: 18,
    icon: ShoppingBag,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Investment opportunity",
    category: "Investment",
    date: "Oct 4, 2026",
    risk: "High",
    score: 89,
    icon: ChartNoAxesColumnIncreasing,
    color: "bg-yellow-100 text-yellow-600",
  },
];
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
        analyses.map((item)=>(
            <div>
                {/* desktop */}
                <div
                key={item.id}
                className="hidden md:grid grid-cols-1 gap-3 border-b border-slate-100 py-4 md:grid-cols-[48px_minmax(0,1fr)_100px_80px_35px] md:items-center md:gap-4"
              >
                    {/* icon */}
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center  rounded-xl ${item.color}`}>
                  <item.icon size={24} />
            </div>
             {/* title and category */}
            <div className="flex flex-col">
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-400">{item.category}</p>
            </div>

            {/* data */}

            <div className="text-sm text-gray-400">
                {item.date}
            </div>

            {/* risk */}
            <div className={`h-10 w-12 ${item.color} rounded-xl flex items-center justify-center`}>
                {item.risk}
            </div>
            {/* score */}

             <div className={`text-xl font-semibold ${
                  item.risk === "High" ? "text-red-500" : "text-slate-900"
                    }`}>
              {item.score}
             </div>
                </div>

{/* Mobile */}
<div className="md:hidden">
  {/* Icon + Title + Category */}
  <div className="flex items-start gap-3">
    {/* Icon */}
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
    >
      <item.icon size={24} />
    </div>

    {/* Title and Category */}
    <div className="min-w-0 flex-1">
      <p className="font-semibold text-base text-slate-900">
        {item.title}
      </p>

      <p className="text-sm text-slate-500">
        {item.category}
      </p>

      {/* Date */}
      <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
        <Calendar size={16} />
        <span>{item.date}</span>
      </div>

      {/* Risk Badge + Score */}
      <div className="mt-3 flex items-center justify-between">
        {/* Risk */}
        <span
          className={`rounded-xl px-4 py-2 text-sm font-semibold ${
            item.risk === "High"
              ? "bg-red-100 text-red-500"
              : item.risk === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {item.risk}
        </span>

        {/* Score */}
        <span
          className={`text-xl font-bold ${
            item.risk === "High" ? "text-red-500" : "text-slate-900"
          }`}
        >
          {item.score}
        </span>
      </div>
    </div>
  </div>
</div>
            </div>
        ))
    }
</div>
    </div>
  )
}

export default RecentAnalyses