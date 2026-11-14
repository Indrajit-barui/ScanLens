const Statscard = ({ title, value, icon, color }) => {
  return (
    <div className="flex h-25 w-full md:w-60 items-center gap-3 rounded-xl border border-[#263653] bg-[#111827] p-3 mt-5">

      {/* Icon */}
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${color}`}>
        {icon}
      </div>

      {/* Value and Title */}
      <div>
        <p className="text-3xl font-bold text-white">
          {value}
        </p>

        <p className="text-sm text-slate-400">
          {title}
        </p>
      </div>

    </div>
  );
};

export default Statscard;