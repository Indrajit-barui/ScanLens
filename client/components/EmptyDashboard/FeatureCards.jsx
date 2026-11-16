import {
Zap,
ChartNoAxesColumnIncreasing,
ShieldCheck,
ArrowUpRight,
} from "lucide-react";

const features = [
{
title: "AI Detection",
description: "Analyze messages, links, or job offers using AI.",
icon: Zap,
iconBg: "bg-purple-500/15",
iconColor: "text-purple-400",
},
{
title: "Risk Assessment",
description: "Get a clear risk score and detailed threat analysis.",
icon: ChartNoAxesColumnIncreasing,
iconBg: "bg-blue-500/15",
iconColor: "text-blue-400",
},
{
title: "Safety Recommendations",
description: "Know the right action to take and stay protected.",
icon: ShieldCheck,
iconBg: "bg-emerald-500/15",
iconColor: "text-emerald-400",
},
];

const FeatureCards = () => {
return (
<section className="space-y-5">
<h2 className="text-xl font-bold text-white sm:text-2xl">
What You Can Do With ScanLens
</h2>

  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    {features.map((feature) => {
      const Icon = feature.icon;

      return (
        <div
          key={feature.title}
          className="group flex items-start gap-4 rounded-2xl border border-[#263653] bg-gradient-to-br from-[#151C2E] to-[#111827] p-5 transition duration-300 hover:-translate-y-1 hover:border-rose-500/40 hover:shadow-lg hover:shadow-rose-950/20"
        >
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${feature.iconBg} ${feature.iconColor}`}
          >
            <Icon size={29} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-white sm:text-lg">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {feature.description}
            </p>
          </div>

          <ArrowUpRight
            size={18}
            className="shrink-0 text-slate-600 transition group-hover:text-rose-400"
          />
        </div>
      );
    })}
  </div>
</section>

);
};

export default FeatureCards;