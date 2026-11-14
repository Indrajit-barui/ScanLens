import {
  BriefcaseBusiness,
  Landmark,
  ChartNoAxesColumnIncreasing,
  ShoppingBag,
  Heart,
  Phone,
} from "lucide-react";

import QuizCard from "./QuizCard";

const QuizCategories = ({ onSelectCategory }) => {
  const quizCategories = [
    {
      id: 1,
      title: "Job Scams",
      description: "Fake job offers, work-from-home scams",
      icon: BriefcaseBusiness,
      iconBg: "bg-rose-500/15",
      iconColor: "text-rose-400",
      hoverBgColor: "hover:bg-rose-500/10",
      questions: 10,
    },
    {
      id: 2,
      title: "Banking Scams",
      description: "KYC frauds, fake bank alerts, account scams",
      icon: Landmark,
      iconBg: "bg-amber-500/15",
      iconColor: "text-amber-400",
      hoverBgColor: "hover:bg-amber-500/10",
      questions: 10,
    },
    {
      id: 3,
      title: "Investment Scams",
      description: "Fake investment schemes and crypto scams",
      icon: ChartNoAxesColumnIncreasing,
      iconBg: "bg-rose-500/15",
      iconColor: "text-rose-400",
      hoverBgColor: "hover:bg-rose-500/10",
      questions: 10,
    },
    {
      id: 4,
      title: "Shopping Scams",
      description: "Fake delivery messages and online shopping fraud",
      icon: ShoppingBag,
      iconBg: "bg-emerald-500/15",
      iconColor: "text-emerald-400",
      hoverBgColor: "hover:bg-emerald-500/10",
      questions: 10,
    },
    {
      id: 5,
      title: "Romance Scams",
      description: "Fake relationships and catfishing",
      icon: Heart,
      iconBg: "bg-purple-500/15",
      iconColor: "text-purple-400",
      hoverBgColor: "hover:bg-purple-500/10",
      questions: 10,
    },
    {
      id: 6,
      title: "OTP Scams",
      description: "Fake rewards and OTP requests",
      icon: Phone,
      iconBg: "bg-sky-500/15",
      iconColor: "text-sky-400",
      hoverBgColor: "hover:bg-sky-500/10",
      questions: 10,
    },
  ];

  return (
    <div className="mt-4 rounded-2xl border border-[#263653] bg-[#111827] px-2 p-5 shadow-sm">

      {/* Header */}
      <div>
        <p className="text-2xl font-bold text-white">
          Choose a Quiz Category
        </p>

        <p className="text-sm text-slate-400">
          Select category to start a quiz. Each quiz contains real-world scam examples.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {quizCategories.map((category) => (
          <QuizCard
            key={category.id}
            {...category}
            onClick={() =>
              onSelectCategory?.(
                category.title.toLowerCase().replaceAll(" ", "-")
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default QuizCategories;