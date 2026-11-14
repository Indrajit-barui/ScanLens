import { CircleHelp, Bug, Mail, ArrowRight } from "lucide-react";

const HelpCards = () => {
  const cards = [
    {
      title: "FAQs",
      description: "Find answers to common questions about ScanLens.",
      icon: CircleHelp,
      color: "text-purple-400",
      bg: "bg-purple-500/20",
    },
    {
      title: "Report a Problem",
      description: "Facing an issue? Let us know and we'll fix it.",
      icon: Bug,
      color: "text-rose-400",
      bg: "bg-rose-500/20",
    },
    {
      title: "Contact Us",
      description: "Have a question or need help? Reach us at support@scanlens.in.",
      icon: Mail,
      color: "text-sky-400",
      bg: "bg-sky-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="group relative rounded-2xl border border-[#263653] bg-gradient-to-br from-[#111C30] to-[#101827] p-6 transition hover:-translate-y-1 hover:border-indigo-500/50"
          >
            <div
              className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${card.bg} ${card.color}`}
            >
              <Icon size={30} />
            </div>

            <h2 className="text-xl font-bold text-white">
              {card.title}
            </h2>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
              {card.description}
            </p>

            <ArrowRight
              size={22}
              className="absolute bottom-6 right-6 text-white transition group-hover:translate-x-1"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HelpCards;