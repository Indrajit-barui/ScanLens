
import { X } from "lucide-react";
const MessageBox = ({ selectedCategory,message,setMessage }) => {


  const placeholders = {
    "Text Message": "Paste the suspicious message here...",
    Email: "Paste the suspicious email here...",
    "Job Offer": "Paste the suspicious job offer here...",
    "Social Media": "Paste the suspicious post or message here...",
    "Link/Website": "Paste the suspicious link or website here...",
    Other: "Describe or paste the suspicious content here...",
  };

  return (
    <div className="relative mt-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value.slice(0, 5000))}
        maxLength={5000}
        placeholder={
          placeholders[selectedCategory] ||
          "Paste suspicious content here..."
        }
        className="h-40 w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-5 pb-12 text-base text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 md:h-40"
      />
{/* Clear Button */}
  {message && (
    <button
      type="button"
      onClick={() => setMessage("")}
      className="absolute right-5 top-3 flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-slate-500 transition hover:bg-red-50 hover:text-red-500"
    >
      <X size={16} />
      Clear
    </button>
  )}
      {/* Character counter */}
      <p className="absolute bottom-4 right-5 text-sm text-slate-400">
        {message.length}/5000 characters
      </p>
    </div>
  );
};

export default MessageBox;