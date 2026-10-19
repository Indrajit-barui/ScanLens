const QuizCategoryCard = ({
  icon: Icon,
  title,
  description,
  iconBg,
  iconColor,
  questions,
hoverBgColor}) => {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-4 hover:border-red-400 ${hoverBgColor} cursor-pointer `}>
      {/* Icon */}
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
        <Icon size={24} />
      </div>

      {/* Title */}
      <h3 className="mt-3 font-semibold">{title}</h3>

      {/* Description */}
      <p className="mt-1 text-sm text-gray-600">{description}</p>

      {/* Question count */}
      <div className={`mt-3 rounded-lg bg-gray-100 py-2 text-center text-sm hover:$`}>
        {questions} Questions
      </div>
    </div>
  );
};

export default QuizCategoryCard;