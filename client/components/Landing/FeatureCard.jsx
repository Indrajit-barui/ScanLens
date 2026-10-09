import { Check } from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  items,
  iconBg = "bg-red-100",
  iconColor = "text-red-500",
  listBg = "bg-red-50",
  checkBg = "bg-red-500",
}) => {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]">

      {/* Icon */}
      <div
        className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg} ${iconColor}`}
      >
        <Icon size={32} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold tracking-tight text-slate-950">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[84px] text-lg leading-8 text-slate-500">
        {description}
      </p>

      {/* Feature List */}
      <div className={`mt-5 rounded-2xl p-4 ${listBg}`}>
        <div className="space-y-3">

          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ${checkBg}`}
              >
                <Check size={15} strokeWidth={3} />
              </div>

              <span className="text-base font-medium text-slate-700">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default FeatureCard;