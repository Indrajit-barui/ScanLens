import FAQItem from "./FAQItem";

const FAQSection = () => {
  const faqs = [
    {
      question: "How accurate is ScanLens?",
      answer:
        "ScanLens uses AI to identify suspicious patterns and assess potential risks. However, its results are not guaranteed, so always verify suspicious messages independently.",
    },
    {
      question: "What does a High Risk score mean?",
      answer:
        "A High Risk score means the message contains multiple suspicious indicators. Avoid clicking links, sharing personal information, or making payments.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Your analysis history is associated with your account. We take data security seriously and work to protect your information.",
    },
    {
      question: "How do I delete an analysis from history?",
      answer:
        "Open your Analysis History page and click the delete icon next to the analysis you want to remove.",
    },
    {
      question: "Do I need a Pro plan to use ScanLens?",
      answer:
        "You can use the available features under the free plan. Pro features may require an upgrade.",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#263653] bg-gradient-to-br from-[#111C30] to-[#101827] p-6">

      <h2 className="text-2xl font-bold text-white">
        Frequently Asked Questions
      </h2>

      <div className="mt-5 space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>

    </div>
  );
};

export default FAQSection;