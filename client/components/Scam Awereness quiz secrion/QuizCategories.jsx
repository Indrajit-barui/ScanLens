import {
  BriefcaseBusiness,
  Landmark,
  ChartNoAxesColumnIncreasing,
  ShoppingBag,
  Heart,
  Phone,
} from "lucide-react";
import QuizCard from "./QuizCard";
const QuizCategories = () => {
    
 const quizCategories = [
  {
    id: 1,
    title: "Job Scams",
    description: "Fake job offers, work-from-home scams",
    icon: BriefcaseBusiness,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    hoverBgColor: "hover:bg-red-50",
    questions: 10,
  },
  {
    id: 2,
    title: "Banking Scams",
    description: "KYC frauds, fake bank alerts, account scams",
    icon: Landmark,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    hoverBgColor: "hover:bg-amber-50",
    questions: 10,
  },
  {
    id: 3,
    title: "Investment Scams",
    description: "Fake investment schemes and crypto scams",
    icon: ChartNoAxesColumnIncreasing,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    hoverBgColor: "hover:bg-rose-50",
    questions: 10,
  },
  {
    id: 4,
    title: "Shopping Scams",
    description: "Fake delivery messages and online shopping fraud",
    icon: ShoppingBag,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    hoverBgColor: "hover:bg-emerald-50",
    questions: 10,
  },
  {
    id: 5,
    title: "Romance Scams",
    description: "Fake relationships and catfishing",
    icon: Heart,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverBgColor: "hover:bg-purple-50",
    questions: 10,
  },
  {
    id: 6,
    title: "OTP Scams",
    description: "Fake rewards and OTP requests",
    icon: Phone,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    hoverBgColor: "hover:bg-sky-50",
    questions: 10,
  },
];
  return (
    <div className="mt-4  px-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* header */}
        <div>
            <p className="text-2xl font-bold">Choose a Quiz Category</p>
            <p className="text-sm text-gray-400">Select category to start a quiz. Each quiz contains real-world scam examples</p>
        </div>
         
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-5">
        {quizCategories.map((category) => (
          <QuizCard
            key={category.id}
            {...category}
          />
        ))}
        </div>
    </div>
  )
}

export default QuizCategories