import {
  ArrowRight,
  FileText,
  BriefcaseBusiness,
  ShoppingBag,
  ChartNoAxesColumnIncreasing,
  Calendar,
  Mail,
  MessageSquare,
  Users,
  Link,
  Landmark,
} from "lucide-react";

const RecentAnalyses = ({ analyses }) => {
  const typeStyles = {
    "Text Message": {
      icon: MessageSquare,
      bg: "bg-blue-500/20",
      color: "text-blue-400",
    },
    Email: {
      icon: Mail,
      bg: "bg-sky-500/20",
      color: "text-sky-400",
    },
    "Job Offer": {
      icon: BriefcaseBusiness,
      bg: "bg-purple-500/20",
      color: "text-purple-400",
    },
    "Social Media": {
      icon: Users,
      bg: "bg-pink-500/20",
      color: "text-pink-400",
    },
    "Link/Website": {
      icon: Link,
      bg: "bg-indigo-500/20",
      color: "text-indigo-400",
    },
    Banking: {
      icon: Landmark,
      bg: "bg-amber-500/20",
      color: "text-amber-400",
    },
    Investment: {
      icon: ChartNoAxesColumnIncreasing,
      bg: "bg-green-500/20",
      color: "text-green-400",
    },
    Shopping: {
      icon: ShoppingBag,
      bg: "bg-orange-500/20",
      color: "text-orange-400",
    },
    Other: {
      icon: FileText,
      bg: "bg-gray-500/20",
      color: "text-gray-400",
    },
  };

  const riskStyles = {
    High: "bg-red-500/15 text-red-400",
    Medium: "bg-yellow-500/15 text-yellow-400",
    Low: "bg-green-500/15 text-green-400",
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#263653] pb-4">
        <h2 className="text-xl font-bold text-white">
          Recent Analyses
        </h2>

        <button className="flex items-center gap-1 text-sm font-semibold text-rose-400 transition hover:text-rose-300">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      <div>
        {analyses.map((item) => {
          const style = typeStyles[item.contentType] || typeStyles.Other;
          const Icon = style.icon;

          const riskStyle =
            riskStyles[item.riskLevel] || riskStyles.Low;

          const formattedDate = new Date(item.createdAt).toLocaleDateString(
            "en-IN",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          );

          return (
            <div key={item._id}>
              {/* Desktop */}
              <div className="hidden md:grid grid-cols-1 gap-3 border-b border-[#263653] py-4 md:grid-cols-[48px_minmax(0,1fr)_100px_80px_35px] md:items-center md:gap-4">

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.color}`}
                >
                  <Icon size={24} />
                </div>

                {/* Title and Category */}
                <div className="flex min-w-0 flex-col">
                  <p className="truncate text-sm font-medium text-white">
                    {item.content.length > 35
                      ? item.content.slice(0, 35) + "..."
                      : item.content}
                  </p>

                  <p className="text-sm text-slate-400">
                    {item.contentType}
                  </p>
                </div>

                {/* Date */}
                <div className="text-sm text-slate-400">
                  {formattedDate}
                </div>

                {/* Risk */}
                <div
                  className={`flex h-9 w-20 items-center justify-center rounded-lg text-sm font-semibold ${riskStyle}`}
                >
                  {item.riskLevel}
                </div>

                {/* Score */}
                <div
                  className={`text-xl font-semibold ${
                    item.riskLevel === "High"
                      ? "text-red-400"
                      : item.riskLevel === "Medium"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }`}
                >
                  {item.riskScore}
                </div>
              </div>

              {/* Mobile */}
              <div className="border-b border-[#263653] py-4 md:hidden">
                <div className="flex items-start gap-3">

                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.color}`}
                  >
                    <Icon size={25} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">

                    <p className="text-base font-semibold text-white">
                      {item.content.length > 35
                        ? item.content.slice(0, 35) + "..."
                        : item.content}
                    </p>

                    <p className="text-sm text-slate-400">
                      {item.contentType}
                    </p>

                    {/* Date */}
                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                      <Calendar size={16} />
                      <span>{formattedDate}</span>
                    </div>

                    {/* Risk and Score */}
                    <div className="mt-3 flex items-center justify-between">

                      <span
                        className={`rounded-lg px-4 py-2 text-sm font-semibold ${riskStyle}`}
                      >
                        {item.riskLevel}
                      </span>

                      <span
                        className={`text-xl font-bold ${
                          item.riskLevel === "High"
                            ? "text-red-400"
                            : item.riskLevel === "Medium"
                            ? "text-yellow-400"
                            : "text-green-400"
                        }`}
                      >
                        {item.riskScore}
                      </span>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentAnalyses;