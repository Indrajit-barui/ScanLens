import { useState } from "react";
import LearnCard from "./LearnCard";
import { GraduationCap, ArrowLeft } from "lucide-react";

const guides = [
  {
    id: 1,
    category: "Phishing",
    title: "How to Spot Phishing Messages",
    description:
      "Learn the common signs of phishing and how to stay safe from fake messages.",
    icon: "📩",
    content: [
      "Check the sender's email address or phone number.",
      "Be careful with messages asking you to click unfamiliar links.",
      "Never share your passwords or OTPs through messages.",
      "Verify suspicious requests using the company's official website or contact details.",
    ],
  },
  {
    id: 2,
    category: "Job Scams",
    title: "Warning Signs of Fake Job Offers",
    description:
      "Learn how to identify suspicious job offers and recruitment scams.",
    icon: "💼",
    content: [
      "Be cautious if someone asks for a registration fee to offer you a job.",
      "Research the company and check its official careers page.",
      "Be suspicious of unrealistic salaries for very little work.",
      "Never share sensitive financial information with unverified recruiters.",
    ],
  },
  {
    id: 3,
    category: "Fake Websites",
    title: "How to Check a Website",
    description:
      "Learn simple ways to identify suspicious websites and phishing links.",
    icon: "🌐",
    content: [
      "Check the domain name carefully for misspellings.",
      "HTTPS alone does not guarantee that a website is trustworthy.",
      "Avoid entering personal information on unfamiliar websites.",
      "Visit official websites directly instead of following suspicious links.",
    ],
  },
  {
    id: 4,
    category: "Online Shopping",
    title: "Avoid Fake Shopping Websites",
    description:
      "Learn how to recognize suspicious online stores and shop more safely.",
    icon: "🛒",
    content: [
      "Research unfamiliar stores before making a purchase.",
      "Be careful of prices that seem unrealistically low.",
      "Check return policies and independent customer reviews.",
      "Use secure payment methods and avoid unusual payment requests.",
    ],
  },
];

const LearnSection = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  return (
    <section id="learn" className="min-h-screen bg-gradient-to-br from-white via-red-50/30 to-white px-5 py-20">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-500">
            <GraduationCap size={20} />
            Learn & Stay Safe
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Learn to <span className="text-red-500">Stay Safe</span> Online
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 md:text-lg">
            Simple guides to help you recognize common online scams.
          </p>
        </div>

        {/* Guide details */}
        {selectedGuide ? (
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-10">

            <button
              onClick={() => setSelectedGuide(null)}
              className="mb-8 inline-flex items-center gap-2 font-semibold text-red-500 hover:text-red-600"
            >
              <ArrowLeft size={18} />
              Back to guides
            </button>

            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-4xl">
              {selectedGuide.icon}
            </div>

            <span className="rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-500">
              {selectedGuide.category}
            </span>

            <h3 className="mt-5 text-2xl font-bold text-slate-900 md:text-3xl">
              {selectedGuide.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {selectedGuide.description}
            </p>

            <h4 className="mt-8 text-lg font-bold text-slate-900">
              How to protect yourself
            </h4>

            <ul className="mt-4 space-y-4">
              {selectedGuide.content.map((tip, index) => (
                <li key={index} className="flex gap-3 text-slate-600">
                  <span className="font-bold text-red-500">
                    {index + 1}.
                  </span>
                  <span className="leading-6">{tip}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-red-50 p-5">
              <h4 className="font-bold text-red-600">
                Remember
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                If a message or website seems suspicious, pause and verify
                it independently before sending money or sharing personal
                information.
              </p>
            </div>

          </div>
        ) : (

          /* Guide cards */
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {guides.map((guide) => (
              <LearnCard
                key={guide.id}
                category={guide.category}
                title={guide.title}
                description={guide.description}
                icon={guide.icon}
                onRead={() => setSelectedGuide(guide)}
              />
            ))}
          </div>

        )}

      </div>
    </section>
  );
};

export default LearnSection;