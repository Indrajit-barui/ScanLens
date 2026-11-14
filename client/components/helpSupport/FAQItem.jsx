import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-[#263653] bg-[#172238]">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-slate-700/30"
      >
        <span className="font-semibold text-white">
          {question}
        </span>

        <ChevronDown
          size={20}
          className={`shrink-0 text-slate-300 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-[#263653] px-5 py-4 text-sm leading-6 text-slate-400">
          {answer}
        </div>
      )}

    </div>
  );
};

export default FAQItem;