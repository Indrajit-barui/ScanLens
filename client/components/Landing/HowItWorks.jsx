import {
  FileText,
  Bot,
  ShieldCheck,
  MessageSquare,
  Mail,
  Link,
  BriefcaseBusiness,
  Search,
  Check,
  AlertTriangle,
  Clock,
  CircleX,
  Lightbulb,
} from "lucide-react";

import HowItWorksStep from "./HowItWorksStep";



const HowItWorks = () => {
  return (
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-3 mt-5" >

  {/* STEP 1 */}
  <HowItWorksStep
    number="1"
    icon={FileText}
    title="Enter Content"
    description="Paste a message, email, link or job offer details."
  >
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_5px_25px_rgba(15,23,42,0.05)]">

      <h4 className="mb-5 text-lg font-bold text-slate-900">
        1. Enter Your Content
      </h4>

      {/* Content type buttons */}
      <div className="flex flex-wrap gap-2">

        <button className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white">
          <MessageSquare size={16} />
          Message
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
          <Mail size={16} />
          Email
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
          <Link size={16} />
          Link
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
          <BriefcaseBusiness size={16} />
          Job Offer
        </button>

      </div>

      {/* Message */}
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm leading-6 text-slate-700">
          Congratulations! You have been selected for a
          work-from-home job. Pay ₹1,999 registration fee
          to join. Offer valid for 30 minutes!
        </p>
      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between">

        <span className="text-xs text-slate-400">
          123/5000
        </span>

        <button className="flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600">
          <Search size={18} />
          Analyze
        </button>

      </div>

    </div>
  </HowItWorksStep>


  {/* STEP 2 */}
  <HowItWorksStep
    number="2"
    icon={Bot}
    title="AI Analysis"
    description="Our AI checks for scam patterns, risk factors and suspicious signs."
  >
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_5px_25px_rgba(15,23,42,0.05)]">

      <h4 className="mb-5 text-lg font-bold text-slate-900">
        2. AI Analysis in Progress
      </h4>

      {/* AI circle */}
      <div className="flex flex-col items-center">

        <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-red-100 bg-red-50 text-red-500">
          <Bot size={48} />
        </div>

        <p className="mt-5 font-semibold text-slate-800">
          Analyzing your content...
        </p>

      </div>

      {/* Analysis checks */}
      <div className="mt-6 space-y-3">

        {[
          "Checking for scam patterns",
          "Analyzing suspicious keywords",
          "Identifying risk factors",
          "Comparing with known scams",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white">
              <Check size={13} strokeWidth={3} />
            </div>

            <span className="text-sm text-slate-600">
              {item}
            </span>
          </div>
        ))}

      </div>

    </div>
  </HowItWorksStep>


  {/* STEP 3 */}
  <HowItWorksStep
    number="3"
    icon={ShieldCheck}
    title="Get Results"
    description="Receive a risk score, detailed explanation and safety tips."
  >
    <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_5px_25px_rgba(15,23,42,0.05)]">

      <h4 className="px-6 pt-6 text-lg font-bold text-slate-900">
        3. Get Instant Results
      </h4>

      {/* Risk header */}
      <div className="mt-5 flex items-center justify-between bg-red-500 px-5 py-4 text-white">

        <div className="flex items-center gap-3">
          <AlertTriangle size={22} />
          <span className="font-bold">
            High Risk
          </span>
        </div>

        <span className="font-bold">
          87/100
        </span>

      </div>

      {/* Risk factors */}
      <div className="space-y-4 p-5">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Search size={18} className="text-red-500" />
            <span className="text-sm text-slate-700">
              Payment request
            </span>
          </div>

          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500">
            High
          </span>
        </div>


        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-red-500" />
            <span className="text-sm text-slate-700">
              Urgency language
            </span>
          </div>

          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500">
            High
          </span>
        </div>


        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CircleX size={18} className="text-red-500" />
            <span className="text-sm text-slate-700">
              Job scam pattern
            </span>
          </div>

          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500">
            Medium
          </span>
        </div>

      </div>

      {/* Explanation */}
      <div className="mx-5 mb-5 rounded-2xl bg-red-50 p-5">

        <div className="flex items-center gap-2">
          <Lightbulb size={20} className="text-red-500" />

          <h5 className="font-semibold text-red-700">
            Explanation
          </h5>
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          This message shows common job scam patterns like
          advance payment, urgency and unrealistic job offers.
          Genuine companies do not ask for registration fees.
        </p>

      </div>

    </div>
  </HowItWorksStep>

</div>
  )
}

export default HowItWorks