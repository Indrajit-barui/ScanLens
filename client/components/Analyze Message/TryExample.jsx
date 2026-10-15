import {
  Lightbulb,
  BriefcaseMedical,
  Landmark,
  ChartNoAxesCombined,
  FileText,
  ArrowRight,
} from "lucide-react";

const TryExample = ({onSelectExample}) => {
  const examples = [
    {
      id: 1,
      title: "Fake Job Offer",
      description:
        "Scammers may offer remote jobs with high salaries and ask for registration fees.",
      message:
        "“Congratulations! You have been selected for a work-from-home job. Pay ₹1,999 as a registration fee to start.”",
      icon: BriefcaseMedical,
      iconColor: "text-red-500",
      iconBg: "bg-red-100",
      cardBg: "bg-rose-50",
      messageBg: "bg-rose-100/70",
      buttonBg: "bg-rose-100",
      buttonColor: "text-red-600",
    },
    {
      id: 2,
      title: "Fake Bank SMS",
      description:
        "Scammers may pretend to be your bank and ask for KYC verification or personal details.",
      message:
        "“Your bank account will be blocked today. Click the link below to complete your KYC and keep your account active.”",
      icon: Landmark,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      cardBg: "bg-blue-50",
      messageBg: "bg-blue-100/70",
      buttonBg: "bg-blue-100",
      buttonColor: "text-blue-600",
    },
    {
      id: 3,
      title: "Fake Investment Offer",
      description:
        "Scammers may promise high returns with low risk to steal your money.",
      message:
        "“Invest ₹5,000 today and get ₹50,000 in 30 days. Limited-time offer. Don't miss this opportunity!”",
      icon: ChartNoAxesCombined,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-100",
      cardBg: "bg-amber-50",
      messageBg: "bg-amber-100/70",
      buttonBg: "bg-amber-100",
      buttonColor: "text-amber-600",
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Lightbulb
            size={26}
            className="mt-1 shrink-0 text-yellow-400"
          />

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Try An Example
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Click on any example below to see how it works. The example
              will be automatically added to the input box.
            </p>
          </div>
        </div>

        <button className="flex shrink-0 items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700">
          View More
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Example Cards */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {examples.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`rounded-2xl border border-gray-100 p-4 ${item.cardBg}`}
            >
              {/* Icon and Description */}
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
                >
                  <Icon
                    size={28}
                    strokeWidth={2.3}
                    className={item.iconColor}
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Example Message */}
              <div
                className={`mt-3 rounded-xl p-3 text-sm leading-5 text-gray-700 ${item.messageBg}`}
              >
                {item.message}
              </div>

              {/* Try Example Button */}
              <button
              onClick={()=>onSelectExample(item.message)}
                className={`mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-opacity hover:opacity-80 ${item.buttonBg} ${item.buttonColor} cursor-pointer`}
              >
                <FileText size={20} />
                Try Example
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TryExample;