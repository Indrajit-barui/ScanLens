import {
ChevronDown,
Search,
FileText,
Mail,
Link,
MessageSquare,
Users,
BriefcaseBusiness,
Trash2,
ChevronRight,
ChevronLeft,
Calendar,
} from "lucide-react";

import { useState, useEffect } from "react";
import { getAnalysisHistory } from "@/api/historyApi";
import { deleteAnalysis } from "@/api/deleteAnalysis";

const AnalysisHistory = () => {
const typeStyles = {
"Text Message": {
icon: MessageSquare,
bg: "bg-blue-500/15",
color: "text-blue-400",
},
Email: {
icon: Mail,
bg: "bg-sky-500/15",
color: "text-sky-400",
},
"Job Offer": {
icon: BriefcaseBusiness,
bg: "bg-purple-500/15",
color: "text-purple-400",
},
"Social Media": {
icon: Users,
bg: "bg-pink-500/15",
color: "text-pink-400",
},
"Link/Website": {
icon: Link,
bg: "bg-indigo-500/15",
color: "text-indigo-400",
},
Other: {
icon: FileText,
bg: "bg-slate-500/15",
color: "text-slate-400",
},
};

const [history, setHistory] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

const [selectedType, setSelectedType] = useState("all");
const [selectedRisk, setSelectedRisk] = useState("all");
const [searchQuery, setSearchQuery] = useState("");
const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 10;

useEffect(() => {
const fetchHistory = async () => {
try {
setLoading(true);
setError("");

    const data = await getAnalysisHistory();

    console.log("API RESPONSE:", data);
    setHistory(data.history || []);
  } catch (error) {
    console.error("History Fetch Error:", error);
    setError(error.message || "Failed to load analysis history.");
  } finally {
    setLoading(false);
  }
};

fetchHistory();

}, []);

const handleDelete = async (id) => {
try {
await deleteAnalysis(id);

  setHistory((prevHistory) =>
    prevHistory.filter((item) => item._id !== id)
  );

  setCurrentPage((page) => Math.min(
    page,
    Math.max(1, Math.ceil(
      history.filter((item) => item._id !== id).length / itemsPerPage
    ))
  ));
} catch (error) {
  console.error("Delete Error:", error);
  setError(error.message || "Failed to delete analysis.");
}

};

const filteredHistory = history.filter((item) => {
const matchesType =
selectedType === "all" || item.contentType === selectedType;

const matchesRisk =
  selectedRisk === "all" || item.riskLevel === selectedRisk;

const matchesSearch =
  (item.content || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
  (item.contentType || "").toLowerCase().includes(searchQuery.toLowerCase());

return matchesType && matchesRisk && matchesSearch;

});

const totalpage = Math.ceil(filteredHistory.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;

const currentData = filteredHistory.slice(
startIndex,
startIndex + itemsPerPage
);

const getRiskStyle = (risk) => {
if (risk === "High") return "bg-red-500/15 text-red-400";
if (risk === "Medium") return "bg-amber-500/15 text-amber-400";
return "bg-emerald-500/15 text-emerald-400";
};

const getScoreStyle = (risk) => {
if (risk === "High") return "text-red-400";
if (risk === "Medium") return "text-amber-400";
return "text-emerald-400";
};

return (
<div className="mt-4 space-y-4">

  {/* Filter Section */}
  <div className="rounded-2xl border border-[#263653] bg-[#111827] p-5">

    <div>
      <h1 className="text-xl font-bold text-white">
        Analysis History
      </h1>

      <p className="mt-1 text-sm text-slate-400">
        View and manage all your previous analyses
      </p>
    </div>

    <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">

      {/* Type Filter */}
      <div className="relative w-full">
        <select
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full cursor-pointer appearance-none rounded-xl border border-[#263653] bg-[#172238] px-4 py-3 pr-11 text-sm text-slate-200 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
        >
          <option value="all">All Types</option>
          <option value="Job Offer">Job Offer</option>
          <option value="Text Message">Text Message</option>
          <option value="Banking">Banking</option>
          <option value="Investment">Investment</option>
          <option value="Shopping">Shopping</option>
          <option value="Email">Email</option>
          <option value="Link/Website">Link/Website</option>
          <option value="Social Media">Social Media</option>
          <option value="Other">Other</option>
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>

      {/* Risk Filter */}
      <div className="relative w-full">
        <select
          value={selectedRisk}
          onChange={(e) => {
            setSelectedRisk(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full cursor-pointer appearance-none rounded-xl border border-[#263653] bg-[#172238] px-4 py-3 pr-11 text-sm text-slate-200 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
        >
          <option value="all">All Risk Levels</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>

      {/* Search */}
      <div className="relative w-full">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search your analyses..."
          className="w-full rounded-xl border border-[#263653] bg-[#172238] py-3 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
        />
      </div>

    </div>
  </div>

  {/* History Table */}
  <div className="rounded-2xl border border-[#263653] bg-[#111827] p-5">

    {/* Table Header */}
    <div className="hidden grid-cols-[2.5fr_0.8fr_0.9fr_0.6fr_1fr_0.5fr] items-center rounded-xl bg-[#172238] px-5 py-4 text-sm font-semibold text-slate-300 md:grid">
      <p>Message Preview</p>
      <p>Type</p>
      <p className="flex items-center gap-2">
        Risk Level
        <ChevronDown size={16} />
      </p>
      <p>Score</p>
      <p>Date</p>
      <p className="text-center">Actions</p>
    </div>

    {/* Loading */}
    {loading && (
      <p className="py-10 text-center text-slate-400">
        Loading analysis history...
      </p>
    )}

    {/* Error */}
    {error && (
      <p className="py-10 text-center text-red-400">
        {error}
      </p>
    )}

    {/* Empty State */}
    {!loading && !error && filteredHistory.length === 0 && (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <FileText size={45} className="mb-3 text-slate-600" />

        <h3 className="text-lg font-semibold text-white">
          No matching analyses found
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Try changing your filters or search keywords.
        </p>
      </div>
    )}

    {/* History Records */}
    {!loading && !error && currentData.map((data) => {
      const style = typeStyles[data.contentType] || typeStyles.Other;
      const Icon = style.icon;

      return (
        <div key={data._id}>

          {/* Desktop */}
          <div className="hidden grid-cols-[2.5fr_0.8fr_0.9fr_0.6fr_1fr_0.5fr] items-center border-b border-[#263653] px-5 py-4 last:border-0 md:grid">

            <div className="flex items-center gap-3">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.color}`}>
                <Icon size={22} />
              </div>

              <p className="text-sm text-slate-200">
                {data.content.length > 40
                  ? data.content.slice(0, 40) + "..."
                  : data.content}
              </p>
            </div>

            <div className="text-sm text-slate-400">
              {data.contentType}
            </div>

            <div className={`flex h-10 w-30 items-center justify-center rounded-xl text-sm font-medium ${getRiskStyle(data.riskLevel)}`}>
              {data.riskLevel}
            </div>

            <div className={`font-bold ${getScoreStyle(data.riskLevel)}`}>
              {data.riskScore}
            </div>

            <div className="text-sm text-slate-400">
              {new Date(data.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => handleDelete(data._id)}
                aria-label="Delete analysis"
                className="group flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                <Trash2 size={20} />
              </button>
            </div>

          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-3 border-b border-[#263653] py-4 last:border-0 md:hidden">

            <div className="flex w-full items-start gap-3">

              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.color}`}>
                <Icon size={22} />
              </div>

              <div className="min-w-0 flex-1 text-sm text-slate-200">
                {data.content.length > 40
                  ? data.content.slice(0, 40) + "..."
                  : data.content}
              </div>

              <button
                type="button"
                onClick={() => handleDelete(data._id)}
                aria-label="Delete analysis"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                <Trash2 size={19} />
              </button>

            </div>

            <div className="flex w-full items-center justify-between">

              <span className="rounded-lg bg-[#172238] px-3 py-1 text-sm text-slate-300">
                {data.contentType}
              </span>

              <span className={`rounded-lg px-3 py-2 text-sm font-medium ${getRiskStyle(data.riskLevel)}`}>
                {data.riskLevel}
              </span>

            </div>

            <div className="flex w-full items-center justify-between">

              <span className={`font-bold ${getScoreStyle(data.riskLevel)}`}>
                {data.riskScore}/100
              </span>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar size={17} />

                {new Date(data.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>

            </div>

          </div>

        </div>
      );
    })}

    {/* Pagination */}
    {!loading && !error && filteredHistory.length > 0 && (
      <div className="mt-5 flex items-center gap-3">

        <button
          onClick={() => setCurrentPage((page) => page - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 rounded-lg border border-[#263653] px-3 py-2 text-sm text-slate-300 transition hover:bg-[#172238] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={16} />
          Prev
        </button>

        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-500/15 font-semibold text-rose-400">
          {currentPage}
        </span>

        <button
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={currentPage >= totalpage}
          className="flex items-center gap-1 rounded-lg border border-[#263653] px-3 py-2 text-sm text-slate-300 transition hover:bg-[#172238] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
          <ChevronRight size={16} />
        </button>

      </div>
    )}

  </div>
</div>

);
};

export default AnalysisHistory;