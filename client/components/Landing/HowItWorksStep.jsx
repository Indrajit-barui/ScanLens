

const HowItWorksStep = ({
  number,
  icon: Icon,
  title,
  description,
  children,
}) => {
  return (
    <div className="relative flex flex-col items-center">

      {/* Step icon */}
      <div className="relative mb-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
          <Icon size={34} strokeWidth={2} />
        </div>

        {/* Number */}
        <div className="absolute -right-1 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
          {number}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 max-w-xs text-center text-base leading-6 text-slate-500">
        {description}
      </p>

      {/* Bottom content */}
      <div className="mt-8 w-full">
        {children}
      </div>
    </div>
  );
};

export default HowItWorksStep;