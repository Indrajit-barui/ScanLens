import {
  Gift,
  Zap,
  Check,
  Minus,
  Crown,
  ShieldCheck,
  CreditCard,
  RefreshCw,
  Headset,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Good for getting started",
    price: "₹0",
    icon: Gift,
    buttonText: "Get Started Free",
    popular: false,
    features: [
      { text: "5 message analysis per day", included: true },
      { text: "Analyze emails, links and job offers", included: true },
      { text: "Scam risk score and basic explanation", included: true },
      { text: "Access to safety guides", included: true },
      { text: "Analysis history (last 10 only)", included: false },
    ],
  },
  {
    name: "Pro",
    description: "For individuals who want more protection",
    price: "₹199",
    icon: Zap,
    buttonText: "Upgrade to Pro",
    popular: true,
    features: [
      { text: "Unlimited message analysis", included: true },
      { text: "Unlimited email scanning", included: true },
      { text: "Check links, websites and job offers", included: true },
      { text: "Detailed risk explanations", included: true },
      { text: "Full analysis history", included: true },
      { text: "Advanced safety tips and guides", included: true },
      { text: "Priority support", included: true },
    ],
  },
];

function PricingCard({ plan }) {
  const PlanIcon = plan.icon;

  return (
    <div
  
      className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
        plan.popular
          ? "border-2 border-red-500"
          : "border-gray-100"
      }`}
    >
      {/* Most Popular Badge */}
      {plan.popular && (
        <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-md" >
          <Crown size={18} fill="currentColor" />
          Most Popular
        </div>
      )}

      {/* Plan Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl bg-red-50 p-4 text-red-600">
          <PlanIcon size={32} fill="currentColor" strokeWidth={2} />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-950">
            {plan.name}
          </h3>

          <p className="mt-1 text-sm leading-5 text-slate-500">
            {plan.description}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="mt-7 flex items-baseline gap-2">
        <span className="text-4xl font-extrabold tracking-tight text-slate-950">
          {plan.price}
        </span>

        <span className="text-sm text-slate-500">
          / month
        </span>
      </div>

      {/* Features */}
      <ul className="mt-6 flex-1 space-y-4">
        {plan.features.map((feature) => (
          <li
            key={feature.text}
            className="flex items-start gap-3"
          >
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                feature.included
                  ? "bg-red-100 text-red-600"
                  : "bg-gray-200 text-white"
              }`}
            >
              {feature.included ? (
                <Check size={16} strokeWidth={3} />
              ) : (
                <Minus size={16} strokeWidth={3} />
              )}
            </span>

            <span className="text-sm leading-6 text-slate-600">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        type="button"
        className={`mt-8 w-full rounded-xl border px-5 py-4 font-semibold transition duration-200 ${
          plan.popular
            ? "border-red-600 bg-red-600 text-white shadow-md shadow-red-100 hover:bg-red-700"
            : "border-red-500 bg-white text-red-600 hover:bg-red-50"
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
}

export default function PricingCards() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Cancel Anytime",
      description: "No long-term commitment.",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Your payments are safe.",
    },
    {
      icon: RefreshCw,
      title: "Upgrade Anytime",
      description: "Switch plans whenever you need.",
    },
    {
      icon: Headset,
      title: "Need Help?",
      description: "Contact our support team.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-white to-rose-50/70 px-4 py-16 sm:px-8 lg:px-16" >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-rose-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-pink-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-rose-100/80 px-5 py-3 text-sm font-medium text-red-600">
            <Crown size={19} fill="currentColor" />
            Simple & Affordable
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Choose the Plan That{" "}
            <span className="text-red-600">Fits You</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
            Start free and upgrade anytime. Get the protection
            you need to stay safe online.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Bottom Benefits */}
        <div className="mt-8 grid grid-cols-1 gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-5">
          {benefits.map((benefit, index) => {
            const BenefitIcon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`flex items-center gap-4 lg:px-5 ${
                  index !== benefits.length - 1
                    ? "lg:border-r lg:border-gray-200"
                    : ""
                }`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <BenefitIcon size={26} />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    {benefit.title}
                  </h4>

                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}