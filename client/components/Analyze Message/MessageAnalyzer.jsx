import { useState } from "react"
import {Mail,MessageSquare,BriefcaseBusiness,UserRound,Link,FileText} from "lucide-react"
import MessageBox from "./MessageBox"
import AnalyzeButton from "./AnalyzeButton"
import TryExample from "./TryExample"
import { analyzeMessage } from "@/api/analysisApi"
import AnalysisResult from "./AnalysisResult/AnalysisResult"
const MessageAnalyzer = () => {
  const [analysis, setAnalysis] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const handleAnalyze = async () => {
  if (!message.trim()) {
    setError("Please enter a message to analyze.");
    return;
  }

  try {
    setLoading(true);
    setError("");
    setAnalysis(null);

    const data = await analyzeMessage(message, selectedCategory);

    setAnalysis(data.analysis);

  } catch (error) {
    console.error("Analysis failed:", error.message);
    setError(error.message || "Something went wrong.");

  } finally {
    setLoading(false);
  }
};
const categories = [
  { name: "Text Message", icon: MessageSquare },
  { name: "Email", icon: Mail },
  { name: "Job Offer", icon: BriefcaseBusiness },
  { name: "Social Media", icon: UserRound },
  { name: "Link/Website", icon: Link },
  { name: "Other", icon: FileText },
];
  const[selectedCategory,setSelectCategory]=useState("Text Message")
  const [message,setMessage]=useState("");
  return (
    <div>
        {/* header */}
        <div>
          <p className="text-2xl md:text-4xl font-bold">Analyze Suspicious Content</p>
          <p className="text-gray-400">Paste any suspicious message,email,or text to get AI-powered ananysis</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
             
             { categories.map((category)=>{
                const Icon=category.icon;
                return (
                <button
                key={category.name}
                onClick={()=>setSelectCategory(category.name)}
                className={`flex gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition ${
        selectedCategory === category.name
          ? "border-red-500 bg-red-50 text-red-500"
          : "border-transparent bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
                >
                  <Icon size={20}/>
                 {category.name}
                 
                </button>
                )

              })
             }
        </div>

        <div className="mt-3">
             <MessageBox selectedCategory={selectedCategory}
             
             message={message}
             setMessage={setMessage}
             />
        </div>
{/* Example */}
<div className="mt-5 flex flex-wrap items-center gap-3">
  <p className="font-semibold text-slate-900">Example:</p>

  <div className="flex flex-wrap gap-3">
    {[
      "Job offer",
      "Bank SMS",
      "Lottery message",
      "Investment offer",
      "Fake Delivery",
    ].map((item) => (
      <button
        key={item}
        className="rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-500"
      >
        {item}
      </button>
    ))}
  </div>
</div>

{/* Analyze button */}
<div>
<AnalyzeButton
 onClick={handleAnalyze}
 loading={loading}
 />
</div>

{/* try example */}
<div className="mt-3">
  <TryExample 
   onSelectExample={setMessage}
  />
</div>

{/* Error Message */}
{error && (
  <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
    {error}
  </div>
)}

{/* Analysis Results */}
{analysis && (
  <div className="mt-8">
    <AnalysisResult analysis={analysis} />
  </div>
)}
    </div>
  )
}

export default MessageAnalyzer