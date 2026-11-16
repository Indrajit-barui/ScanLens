import {
  ShieldAlert,
  CheckCircle2,
  MessageCircle,
  Signal,
  BatteryFull,
  Wifi,
} from "lucide-react";

const HeroIllustration = () => {
  return (
    <div className="relative flex min-h-[420px] items-center justify-center">

      {/* Background glow */}
      <div className="absolute h-72 w-72 rounded-full bg-rose-600/20 blur-[100px]" />

      {/* Decorative circle */}
      <div className="absolute right-5 top-10 h-64 w-64 rounded-full border border-rose-500/10" />

      {/* Smartphone */}
      <div className="relative z-10 w-[230px] rotate-[-8deg] rounded-[36px] border-[6px] border-slate-600 bg-[#080D18] p-3 shadow-2xl shadow-rose-950/50">

        {/* Phone status bar */}
        <div className="flex items-center justify-between px-2 py-2 text-[10px] text-slate-400">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <Wifi size={12} />
            <Signal size={12} />
            <BatteryFull size={14} />
          </div>
        </div>

        {/* Phone header */}
        <div className="mt-3 flex items-center gap-3 border-b border-slate-700/60 pb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
            <MessageCircle size={19} />
          </div>

          <div>
            <p className="text-xs font-semibold text-white">Unknown Sender</p>
            <p className="text-[10px] text-slate-500">SMS Message</p>
          </div>
        </div>

        {/* Suspicious message */}
        <div className="mt-5 rounded-2xl rounded-tl-sm bg-[#202B40] p-3">
          <p className="text-xs leading-relaxed text-slate-200">
            Congratulations! You've been selected for a work-from-home job.
            Pay ₹1,999 to complete your registration.
          </p>
        </div>

        {/* Warning */}
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3">
          <ShieldAlert size={19} className="shrink-0 text-rose-400" />
          <p className="text-[10px] font-medium text-rose-300">
            Suspicious message detected!
          </p>
        </div>

        {/* Phone bottom */}
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-16 rounded-full bg-slate-600" />
        </div>
      </div>

      {/* Risk Analysis floating card */}
      <div className="absolute right-0 top-1/2 z-20 w-[245px] translate-y-[-20%] rounded-2xl border border-rose-500/50 bg-[#151C2E]/95 p-4 shadow-2xl shadow-rose-950/40 backdrop-blur-xl sm:right-[-10px]">

        {/* Card heading */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/15 text-rose-400">
            <ShieldAlert size={25} />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Risk Analysis
            </p>
            <span className="text-xs font-medium text-rose-400">
              High Risk
            </span>
          </div>

          <p className="ml-auto text-xl font-bold text-white">
            95<span className="text-xs text-slate-400">/100</span>
          </p>
        </div>

        <div className="my-4 h-px bg-slate-700" />

        {/* Suspicious patterns */}
        <div className="space-y-3">

          {[
            "Advance payment request",
            "Unverified company",
            "High urgency / pressure",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="shrink-0 text-rose-400" />
              <span className="text-xs text-slate-300">{item}</span>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default HeroIllustration;