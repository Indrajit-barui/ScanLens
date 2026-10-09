import { Settings2 } from "lucide-react"
import HowItWorks from "./HowItWorks"
const HowItWorksSection = () => {
  return (
    <div className="w-full flex flex-col items-center mt-3" id="HowItWorks">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-5 py-3 text-xl font-semibold text-red-500 ">
            <Settings2 size={18} fill="currentColor" />
            How It Works
          </div>
        {/* header text */}
        <div>
            <p className="text-5xl font-bold">Protect Yourself in <span className="text-red-500">3 Simple Steps</span></p>
            <p className="mt-2 text-gray-400 text-center">ScamLens uses Al to analyze suspicious content and gives you instant results  <br />with clear explanations and safety tips.</p>
        </div>

        <HowItWorks />
    </div>
  )
}

export default HowItWorksSection