import { Info } from "lucide-react"

import QuizStats from "../components/Scam Awereness quiz secrion/QuizStats"
import QuizCategories from "../components/Scam Awereness quiz secrion/QuizCategories"
import QuizSection from "../components/Scam Awereness quiz secrion/QuizSection"
import QuizProgress from "../components/Scam Awereness quiz secrion/QuizProgress"
import { useState } from "react"
const ScamAwareness = () => {
  const [selectedCategory,setSelectCategory]=useState("job-scams");
  return (
    <div className="mt-4  px-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* header */}

      <div className="flex justify-between  items-center">
        <div>
        <p className="text-4xl font-bold">Scam Awareness Quiz</p>
        <p className="text-gray-500">Test your knowledge to start a quiz. Each quiz contains real-world scam examples</p>    
        </div>
<div>
  <button className="group inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-100 hover:shadow-md hover:shadow-sky-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 active:scale-95 cursor-pointer">
    <Info size={18} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
    How It Works
  </button>
</div>
      </div>

      {/* stats */}
      <div className="mt-5 ">
        <QuizStats />
      </div>

      <div className=" mt-5">
        <QuizCategories 
           onSelectCategory={setSelectCategory}
        />
      </div>

<div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
  <div className="lg:col-span-2">
    <QuizSection 
     selectedCategory={selectedCategory}
    />
  </div>

  <div className="lg:col-span-1">
    <QuizProgress />
  </div>
</div>
    </div>
  )
}

export default ScamAwareness