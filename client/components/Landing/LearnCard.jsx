import { ArrowRight } from "lucide-react";

const LearnCard = ({ title, category, description, icon, onRead }) => {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start gap-5">
        {/* Icon */}
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-4xl">
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <span className="inline-block rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-500">
            {category}
          </span>

          <h3 className="mt-3 text-lg font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {description}
          </p>

          <button
            onClick={onRead}
            className="mt-5 inline-flex items-center gap-2 font-semibold text-red-500 transition hover:gap-3 hover:text-red-600"
          >
            Read guide
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnCard;