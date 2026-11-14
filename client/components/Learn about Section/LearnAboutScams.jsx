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
  const navigate = useNavigate();

  const scamCategories = [
    {
      id: "job",
      title: "Job Scams",
      description: "Fake job offers and work-from-home scams.",
      icon: BriefcaseBusiness,
      color: "text-purple-400",
      bg: "bg-purple-500/15",
    },
    {
      id: "Banking",
      title: "Banking Scams",
      description: "Fake KYC, account suspension messages.",
      icon: Landmark,
      color: "text-blue-400",
      bg: "bg-blue-500/15",
    },
    {
      id: "Investment",
      title: "Investment Scams",
      description: "High return schemes and crypto scams.",
      icon: ChartNoAxesCombined,
      color: "text-emerald-400",
      bg: "bg-emerald-500/15",
    },
    {
      id: "Shopping",
      title: "Shopping Scams",
      description: "Fake websites and discount offers.",
      icon: ShoppingCart,
      color: "text-amber-400",
      bg: "bg-amber-500/15",
    },
    {
      id: "OTP",
      title: "OTP Scams",
      description: "Fake OTP requests and verification scams.",
      icon: Phone,
      color: "text-blue-400",
      bg: "bg-blue-500/15",
    },
    {
      id: "Romance",
      title: "Romance Scams",
      description: "Fake relationships and emotional scams.",
      icon: Heart,
      color: "text-red-400",
      bg: "bg-red-500/15",
    },
    {
      id: "Impersonation",
      title: "Impersonation",
      description: "Fake government or company representatives.",
      icon: UserRound,
      color: "text-indigo-400",
      bg: "bg-indigo-500/15",
    },
    {
      id: "Lottery",
      title: "Lottery & Prize Scams",
      description: "Fake winnings and prize notifications.",
      icon: Gift,
      color: "text-rose-400",
      bg: "bg-rose-500/15",
    },
  ];

  return (
    <div>

      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white md:text-4xl">
          Learn About Scams
        </h1>

        <p className="mt-2 text-slate-400">
          Understand common scam types and how to stay safe.
        </p>
      </div>

      {/* Scam Categories */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {scamCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#263653] bg-[#111827] px-5 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-[#172238]"
            >

              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.color} ${category.bg}`}
              >
                <Icon size={26} />
              </div>

              {/* Title and Description */}
              <div className="flex flex-col">
                <h2 className="font-bold text-white">
                  {category.title}
                </h2>

                <p className="mt-1 text-sm leading-5 text-slate-400">
                  {category.description}
                </p>
              </div>

              {/* Learn More */}
              <button
                onClick={() => navigate(`/learn/${category.id}`)}
                className="mt-2 flex cursor-pointer items-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-2 font-semibold text-rose-400 transition hover:bg-rose-500/20"
              >
                Learn More
                <ArrowRight size={18} />
              </button>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default LearnAboutScams;