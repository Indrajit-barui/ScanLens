const StatsCard = ({ icon: Icon, value, title, iconBg, iconColor }) => {
  return (
    <div className="flex w-full items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Icon */}
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}>
        <Icon size={26} className={iconColor} />
      </div>

      {/* Stats */}
      <div>
        <p className="text-2xl font-bold text-gray-900">
          {value}
        </p>

        <p className="text-sm text-gray-500">
          {title}
        </p>
      </div>

    </div>
  );
};

export default StatsCard;