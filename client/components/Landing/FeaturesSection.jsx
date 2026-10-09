import { Shield,MessageCircle ,Mail,BriefcaseBusiness,Link,FileText,GraduationCap} from "lucide-react"
import FeatureCard from "./FeatureCard"

const FeaturesSection = () => {
  return (
    <div id="features" className="w-full flex flex-col justify-center items-center">
        {/*badge  */}
        <div className="flex items-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-5 py-3 text-xl font-semibold text-red-500 ">
            <Shield size={18} fill="currentColor" />
            features
          </div>
          </div>
          {/*header text  */}

          <div>
            <p className="text-2xl md:text-5xl font-bold">Powerful Feature to <span className="text-red-600"> keep you safe</span></p>
            <p className="text-xl text-gray-400 text-center mt-3">ScamLens uses advanced Al to analyze suspicious content and help you <br className="hidden md:block"/>identify scams before it's too late.</p>
          </div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 mt-6">

      <FeatureCard
        icon={MessageCircle}
        title="Message Analysis"
        description="Detect scam messages from WhatsApp, SMS, Telegram and other platforms."
        items={[
          "Suspicious links",
          "Fraudulent offers",
          "Phishing attempts",
        ]}
        iconBg="bg-red-100"
        iconColor="text-red-500"
        listBg="bg-red-50"
        checkBg="bg-red-500"
      />

      <FeatureCard
        icon={Mail}
        title="Email Scanning"
        description="Identify phishing emails, fraudulent job offers and fake notifications."
        items={[
          "Phishing detection",
          "Fake company alerts",
          "Malicious attachments",
        ]}
        iconBg="bg-blue-100"
        iconColor="text-blue-500"
        listBg="bg-blue-50"
        checkBg="bg-blue-500"
      />

      <FeatureCard
        icon={BriefcaseBusiness}
        title="Job Offer Verification"
        description="Check if a job offer is genuine or a scam. Detect fake work-from-home and part-time offers."
        items={[
          "Fake job patterns",
          "Unrealistic salary alerts",
          "Advance payment scams",
        ]}
        iconBg="bg-green-100"
        iconColor="text-green-500"
        listBg="bg-green-50"
        checkBg="bg-green-500"
      />

      {/* Link & Website Check */}
<FeatureCard
  icon={Link}
  title="Link & Website Check"
  description="Scan suspicious links and websites to detect phishing and malware."
  items={[
    "Phishing websites",
    "Malicious links",
    "Unsafe downloads",
  ]}
  iconBg="bg-purple-100"
  iconColor="text-purple-600"
  listBg="bg-purple-50"
  checkBg="bg-purple-600"
/>

{/* Detailed Explanations */}
<FeatureCard
  icon={FileText}
  title="Detailed Explanations"
  description="Get clear explanations on why something is risky and what to do next."
  items={[
    "Risk score with reasons",
    "Simple explanations",
    "Safety recommendations",
  ]}
  iconBg="bg-orange-100"
  iconColor="text-orange-500"
  listBg="bg-orange-50"
  checkBg="bg-orange-500"
/>

{/* Learn & Stay Informed */}
<FeatureCard
  icon={GraduationCap}
  title="Learn & Stay Informed"
  description="Explore real scam examples, safety tips and latest fraud trends."
  items={[
    "Real-world examples",
    "Safety guides",
    "Latest scam trends",
  ]}
  iconBg="bg-red-100"
  iconColor="text-red-500"
  listBg="bg-red-50"
  checkBg="bg-red-500"
/>

    </div>
    </div>
  )
}

export default FeaturesSection