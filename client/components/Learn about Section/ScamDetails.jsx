import {
  BriefcaseBusiness,
  Landmark,
  CreditCard,
  ChartNoAxesColumnIncreasing,
  Mail,
  Link,
  Database,
  KeyRound,
  Phone,
  Flag,
  FileText,
  Copy,
  Search,
  ArrowRight,
  Shield,
  ShoppingCart,
  MessageSquareWarning,
  Headset,
  Heart,
  VideoOff,
  Wallet,
  LockKeyhole,
  ShieldAlert,
  AlertTriangle,
  Banknote,
  Gift,
  Trophy,
  Clock,
  UserRound,
  Globe,
  Tag,
  Star,
  TrendingUp,
} from "lucide-react";

const ScamDetails = ({ scam }) => {
  const iconMap = {
    BriefcaseBusiness,
    Landmark,
    CreditCard,
    ChartNoAxesColumnIncreasing,
    Mail,
    Link,
    Database,
    KeyRound,
    Phone,
    FileText,
    Search,
    ShoppingCart,
    MessageSquareWarning,
    Headset,
    ShieldAlert,
    Heart,
    VideoOff,
    Wallet,
    LockKeyhole,
    AlertTriangle,
    Banknote,
    Gift,
    Trophy,
    Clock,
    UserRound,
    Globe,
    Tag,
    Star,
    TrendingUp,
  };

  const Icon = iconMap[scam.icon];

  return (
    <div className="space-y-5 text-white">

      {/* Header */}
      <div
        className={`flex min-h-[120px] w-full items-center justify-between rounded-2xl border border-[#263653] px-5 py-4 ${scam.theme.bg}`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-15 w-15 items-center justify-center rounded-xl ${scam.theme.iconBg} ${scam.theme.iconColor}`}
          >
            {Icon && <Icon size={30} />}
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold text-white">{scam.title}</p>
            <p className="text-sm text-slate-300">{scam.description}</p>
          </div>
        </div>

        <div>
          <img
            src={scam.img}
            alt={scam.title}
            className="hidden h-28 w-auto object-contain md:block"
          />
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-4 rounded-2xl border border-[#263653] bg-[#111827] p-5 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="h-7 w-1.5 shrink-0 rounded-full bg-rose-500" />

          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-white">
              {scam.introduction.title}
            </h2>

            <p className="text-base leading-6 text-slate-400">
              {scam.introduction.description}
            </p>
          </div>
        </div>
      </div>

      {/* Common Warning Signs */}
      <div className="mt-4 flex flex-col items-start gap-3 rounded-2xl border border-[#263653] bg-[#111827] p-5">
        <div className="flex items-start gap-3">
          <Flag size={30} className="shrink-0 fill-rose-500 text-rose-500" />

          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-white">
              Common warning signs
            </h2>

            <p className="text-base text-slate-400">
              Watch out for these red flags to protect yourself from{" "}
              {scam.title.toLowerCase()}.
            </p>
          </div>
        </div>

        {/* Warning Signs Cards */}
        <div className="mt-3 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scam.warningSigns.map((item, index) => {
            const WarningIcon = iconMap[item.icon];

            return (
              <div
                key={index}
                className="rounded-2xl border border-[#263653] bg-[#172238] p-4"
              >
                <div className={`${item.color} mb-4 flex justify-center`}>
                  {WarningIcon && <WarningIcon size={32} />}
                </div>

                <h3 className="mb-2 font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-5 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Example Message Section */}
      <div className="rounded-2xl border border-[#263653] bg-[#111827] p-5">
        <div className="mb-4 flex items-start gap-3">
          <FileText size={30} className="shrink-0 text-rose-400" />

          <div>
            <h2 className="text-xl font-bold text-white">
              {scam.example.title}
            </h2>

            <p className="text-slate-400">
              {scam.example.description}
            </p>
          </div>
        </div>

        {/* Message Box */}
        <div className="flex items-center gap-4 rounded-2xl border border-rose-500/20 bg-rose-500/10 p-5">
          <div className="w-1 shrink-0 self-stretch rounded-full bg-rose-500" />

          <p className="flex-1 text-base leading-7 text-slate-200">
            {scam.example.message}
          </p>

          <button
            type="button"
            className="shrink-0 text-slate-400 transition hover:text-rose-400"
            title="Copy message"
            aria-label="Copy example message"
          >
            <Copy size={22} />
          </button>
        </div>
      </div>

      {/* Analyze This Message */}
      <div className="flex justify-center">
        <button className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-rose-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-950/40">
          <Search size={22} />
          <span>Analyze This Message</span>
          <ArrowRight size={22} />
        </button>
      </div>

      {/* How to Stay Safe */}
      <div className="mt-4 rounded-2xl border border-[#263653] bg-[#111827] p-5 shadow-sm">
        <div className="flex gap-2">
          <Shield size={28} className="shrink-0 text-rose-400" />

          <div>
            <p className="text-xl font-semibold text-white">
              How to stay safe
            </p>

            <p className="text-slate-400">
              Follow these tips to avoid {scam.title}.
            </p>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mt-4 space-y-3">
          {scam.safetyTips.map((item, index) => (
            <div key={item.title} className="flex items-center gap-4">

              {/* Number Circle */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                  [
                    "bg-rose-500/15 text-rose-400",
                    "bg-blue-500/15 text-blue-400",
                    "bg-emerald-500/15 text-emerald-400",
                    "bg-amber-500/15 text-amber-400",
                  ][index % 4]
                }`}
              >
                <p className="text-2xl font-bold">{index + 1}</p>
              </div>

              {/* Tip Content */}
              <div className="flex-1 rounded-xl border border-[#263653] bg-[#172238] p-3">
                <h3 className="font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScamDetails;