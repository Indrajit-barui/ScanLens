import QuizQuestion from "./QuizQuestion";

const QuizSection = () => {
    const questions = [ 
  {
    id: 1,
    category: "Job Scams",
    question: "Is this message a scam?",
    message:
      "Congratulations! You have been selected for a work-from-home job earning ₹50,000/month. Pay a registration fee of ₹1,999 to start immediately.",
    options: [
      "Yes, this is a scam",
      "No, this is a genuine message",
      "It might be a scam, but it looks genuine",
      "Not sure",
    ],
    correctAnswer: "Yes, this is a scam",
    explanation:
      "Legitimate employers generally do not ask candidates to pay registration fees to get a job. Always verify the company before proceeding.",
  },
  {
    id: 2,
    category: "Job Scams",
    question: "What is suspicious about this job offer?",
    message:
      "Earn ₹80,000 per month from home! No experience or interview required. Join today and start earning immediately.",
    options: [
      "The job offers work from home",
      "The company promises a high salary without an interview",
      "The message mentions a monthly salary",
      "The job does not require travelling",
    ],
    correctAnswer:
      "The company promises a high salary without an interview",
    explanation:
      "Unrealistic salary promises combined with no proper screening process can be warning signs. Research the employer and verify the offer independently.",
  },
  {
    id: 3,
    category: "Job Scams",
    question: "Should you share your bank details?",
    message:
      "Hello! We are hiring you for an online data entry job. Send your bank account details and Aadhaar number on WhatsApp to confirm your selection.",
    options: [
      "Yes, because HR requested them",
      "Yes, to receive your salary",
      "No, verify the employer and avoid sharing sensitive information unnecessarily",
      "Send the details only at night",
    ],
    correctAnswer:
      "No, verify the employer and avoid sharing sensitive information unnecessarily",
    explanation:
      "Scammers may impersonate HR departments to collect sensitive information. Verify the employer through official channels before sharing personal or financial details.",
  },
  {
    id: 4,
    category: "Job Scams",
    question: "How should you respond to this request?",
    message:
      "Your job application has been approved! Pay ₹3,500 for mandatory training materials before we issue your offer letter.",
    options: [
      "Pay immediately to secure the job",
      "Borrow money and pay later",
      "Verify the company and question the payment request",
      "Share the payment screenshot with friends",
    ],
    correctAnswer:
      "Verify the company and question the payment request",
    explanation:
      "Requests for upfront payments can indicate employment fraud. Verify the offer and independently contact the company before paying anything.",
  },
  {
    id: 5,
    category: "Job Scams",
    question: "Which is the safest way to verify a job offer?",
    message:
      "Congratulations! You have been selected by a famous company. Contact our recruiter through this personal Gmail address to complete your joining process.",
    options: [
      "Trust the offer because the company is famous",
      "Verify the recruiter through the company's official website",
      "Send your documents immediately",
      "Pay a small verification fee",
    ],
    correctAnswer:
      "Verify the recruiter through the company's official website",
    explanation:
      "Scammers can impersonate well-known companies. Use independently verified contact details from the company's official website to confirm the recruiter and job offer.",
  },
];


  return (
    <div className="mt-4  px-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* header */}
        <div className="flex justify-between items-center">
            <p className="text-xl font-bold">Simple Qustion (Job Scams)</p>
            {/* Question Progress */}
<div className="flex items-center justify-end gap-3">
  <span className="text-xs font-medium text-gray-600">
    Question 1 of 10
  </span>

  <div className="h-1.5 w-52 overflow-hidden rounded-full bg-gray-200">
    <div className="h-full w-[10%] rounded-full bg-red-500"></div>
  </div>
</div>
        </div>


        <div>
            <QuizQuestion question={questions[0]}/>
        </div>
    </div>
  )
}

export default QuizSection