import jobOfferImage from "../src/assets/Job_OfferIllustration.png"
import BankAlertIcon from "../src/assets/BankAlertIcon.png"
import ScamAlertInvestment from "../src/assets/ScamAlertInvestment.png"
import OnlineShoppingScam from "../src/assets/OnlineShoppingScam.png"
import OtpScam from "../src/assets/OtpScam.png"
import OnlineDatingScam from "../src/assets/OnlineDatingScam.png"
import FakeIdentityScam from  "../src/assets/FakeIdentityScam.png"
import FakePrize from "../src/assets/FakePrize.png"
export const scamData = [
  // 1. JOB SCAMS
  {
    id: "job",
    title: "Job Scams",
    description:
      "Learn how to spot fake job offers and employment scams.",

    icon: "BriefcaseBusiness",
    img:jobOfferImage,
    theme: {
      bg: "bg-red-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
    },

    introduction: {
      title: "What are job scams?",
      description:
        "Job scams are fake employment offers where scammers pretend to be real companies. They promise high salaries, work-from-home jobs, or easy online work, and then ask for money or personal information.",
    },

    warningSigns: [
      {
        title: "Upfront fees",
        description:
          "Scammers ask for money for registration, training, or document verification.",
        icon: "CreditCard",
        color: "text-red-500",
        bg: "bg-rose-50",
      },
      {
        title: "Unrealistic salary promises",
        description:
          "They offer very high salaries for easy work with little or no experience required.",
        icon: "ChartNoAxesColumnIncreasing",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        title: "No proper interview",
        description:
          "You may be selected without a real interview or with a very quick online chat.",
        icon: "UserRound",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
      },
      {
        title: "Suspicious email or website",
        description:
          "They may contact you from unofficial email addresses or fake company websites.",
        icon: "Mail",
        color: "text-amber-500",
        bg: "bg-amber-50",
      },
    ],

    example: {

      title: "Example of a fake job offer",
      description:
        "Here is an example of a suspicious job message. Scammers often use similar language.",
      message:
        "Congratulations! You've been selected for a work-from-home job earning ₹50,000/month. Pay ₹1,999 as a registration fee to begin immediately.",
    },

    safetyTips: [
      {
       
        title: "Verify the company",
        description:
          "Check the company's official website and confirm that the job is real.",
      },
      {
     
        title: "Never pay to get a job",
        description:
          "Legitimate employers generally do not charge candidates for interviews or job placement. Be cautious of registration or training fees.",
      },
      {
   
        title: "Check contact details",
        description:
          "Look for official company email addresses and avoid suspicious email services.",
      },
      {
        id:4,
        title: "Be careful with personal information",
        description:
          "Never share your OTPs, banking details, or identity documents with unverified people.",
      },
    ],
  },

  // 2. BANKING SCAMS
  {
    id: "banking",
    title: "Banking Scams",
    description:
      "Learn how to identify fake banking messages and protect your financial information.",

    icon: "Landmark",
    img:BankAlertIcon,
    theme: {
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },

    introduction: {
      title: "What are banking scams?",
      description:
        "Banking scams are fake messages, calls, or emails where scammers pretend to be your bank. They try to trick you into sharing your personal details, OTPs, or card information to steal your money.",
    },

    warningSigns: [
      {
        title: "Suspicious links",
        description:
          "They ask you to click links to verify your account or complete KYC.",
        icon: "Link",
        color: "text-red-500",
        bg: "bg-rose-50",
      },
      {
        title: "Account blocked threats",
        description:
          "They claim your account will be blocked or suspended immediately.",
        icon: "Database",
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        title: "Asking for OTP or PIN",
        description:
          "They ask for your OTP, PIN, card details, or net banking login information.",
        icon: "KeyRound",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
      },
      {
        title: "Unexpected calls or messages",
        description:
          "They contact you from unknown numbers pretending to be bank officials.",
        icon: "Phone",
        color: "text-amber-500",
        bg: "bg-amber-50",
      },
    ],

    example: {
      title: "Example of a fake bank SMS",
      description:
        "Here is an example of a suspicious bank message. Scammers often use similar language.",
      message:
        "Your bank account will be blocked today. Click the link below to complete your KYC and keep your account active: https://bank-verify.com",
    },

    safetyTips: [
      {
        title: "Never share OTP, PIN or passwords",
        description:
          "Never disclose your OTP, PIN, or net banking password to anyone.",
      },
      {
        title: "Don't click on unknown links",
        description:
          "Avoid clicking suspicious links in SMS, email, or WhatsApp messages.",
      },
      {
        title: "Use official bank channels",
        description:
          "Use your bank's official website or mobile app to check your account.",
      },
      {
        title: "Report suspicious messages",
        description:
          "Report suspicious messages to your bank and block the sender.",
      },
    ],
  },
  // 3. INVESTMENT SCAMS
{
  id: "investment",
  title: "Investment Scams",
  description:
    "Learn how to identify fake investment opportunities and protect your money.",

  icon: "ChartNoAxesColumnIncreasing",
  img:ScamAlertInvestment,
  theme: {
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },

  introduction: {
    title: "What are investment scams?",
    description:
      "Investment scams are fraudulent schemes where scammers promise high returns with little or no risk. They may promote fake investment platforms, cryptocurrency schemes, or opportunities that pressure people to invest quickly.",
  },

  warningSigns: [
    {
      title: "Guaranteed high returns",
      description:
        "They promise unusually high profits with little or no risk.",
      icon: "TrendingUp",
      color: "text-red-500",
      bg: "bg-rose-50",
    },
    {
      title: "Pressure to invest quickly",
      description:
        "They claim the opportunity is limited and urge you to invest immediately.",
      icon: "Clock",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Unverified platforms",
      description:
        "They direct you to unknown websites or investment apps with no reliable credentials.",
      icon: "Globe",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Difficulty withdrawing money",
      description:
        "They demand extra fees or taxes before allowing you to withdraw your supposed profits.",
      icon: "Wallet",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ],

  example: {
    title: "Example of a fake investment offer",
    description:
      "Here is an example of a suspicious investment message. Scammers often use similar language.",
    message:
      "Invest ₹5,000 today and get ₹25,000 within 7 days! Guaranteed profits with zero risk. Limited slots available. Send your money now to secure your position.",
  },

  safetyTips: [
    {
      title: "Research before investing",
      description:
        "Verify the company, platform, and investment opportunity before sending money.",
    },
    {
      title: "Be careful with guaranteed returns",
      description:
        "Every investment involves some level of risk. Be suspicious of promises of guaranteed high profits.",
    },
    {
      title: "Use verified platforms",
      description:
        "Check whether the investment provider is registered with the appropriate financial regulator.",
    },
    {
      title: "Never rush your decision",
      description:
        "Take time to understand the investment and never send money because someone pressures you.",
    },
  ],
},

// 4. SHOPPING SCAMS
{
  id: "shopping",
  title: "Shopping Scams",
  description:
    "Learn how to spot fake online stores, fraudulent deals, and shopping scams.",

  icon: "ShoppingCart",
  img:OnlineShoppingScam,
  theme: {
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },

  introduction: {
    title: "What are shopping scams?",
    description:
      "Shopping scams happen when fraudsters create fake online stores, advertise products at unbelievable prices, or take payment without delivering the goods. They may also sell counterfeit products or steal customers' payment information.",
  },

  warningSigns: [
    {
      title: "Prices that seem too good",
      description:
        "They advertise expensive products at unusually low prices to attract buyers.",
      icon: "Tag",
      color: "text-red-500",
      bg: "bg-rose-50",
    },
    {
      title: "Fake websites",
      description:
        "The store may have a suspicious website address, copied images, or incomplete contact details.",
      icon: "Globe",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "No reliable reviews",
      description:
        "The store has no trustworthy customer reviews or displays suspiciously repetitive feedback.",
      icon: "Star",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Suspicious payment methods",
      description:
        "The seller insists on direct transfers or unusual payment methods and avoids secure checkout options.",
      icon: "CreditCard",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ],

  example: {
    title: "Example of a fake shopping offer",
    description:
      "Here is an example of a suspicious online shopping message. Scammers often use similar language.",
    message:
      "MEGA SALE! Get the latest smartphone worth ₹60,000 for just ₹4,999! Offer expires in 10 minutes. Pay now using this link to claim your deal.",
  },

  safetyTips: [
    {
      title: "Check the website carefully",
      description:
        "Verify the store's web address, contact information, and reputation before placing an order.",
    },
    {
      title: "Compare prices",
      description:
        "Compare the offer with prices from trusted retailers. Extremely low prices can be a warning sign.",
    },
    {
      title: "Read customer reviews",
      description:
        "Look for independent reviews and check whether the seller has a reliable track record.",
    },
    {
      title: "Use secure payment methods",
      description:
        "Choose payment methods that offer buyer protection and avoid sharing your OTP or banking PIN.",
    },
  ],
},
// 5. OTP SCAMS
{
  id: "otp",
  title: "OTP Scams",
  description:
    "Learn how to identify fake OTP requests and protect your accounts.",

  icon: "Phone",
  img:OtpScam,
  theme: {
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },

  introduction: {
    title: "What are OTP scams?",
    description:
      "OTP scams occur when fraudsters trick people into sharing their one-time passwords (OTPs). They may pretend to be bank officials, customer support agents, or trusted companies to gain access to accounts and steal money or personal information.",
  },

  warningSigns: [
    {
      title: "Unexpected OTP requests",
      description:
        "You receive an OTP you did not request or initiate.",
      icon: "MessageSquareWarning",
      color: "text-red-500",
      bg: "bg-rose-50",
    },
    {
      title: "Fake customer support",
      description:
        "Someone pretending to be a support agent asks you to share your OTP.",
      icon: "Headset",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Urgent account warnings",
      description:
        "They threaten to block your account unless you provide the OTP immediately.",
      icon: "ShieldAlert",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Suspicious links",
      description:
        "They send links claiming you must enter your OTP to verify or reactivate your account.",
      icon: "Link",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ],

  example: {
    title: "Example of a fake OTP request",
    description:
      "Here is an example of a suspicious message. Scammers often use similar language.",
    message:
      "Dear Customer, your bank account will be suspended in 10 minutes. Share the OTP sent to your phone with our verification agent immediately to keep your account active.",
  },

  safetyTips: [
    {
      title: "Never share your OTP",
      description:
        "Keep your OTP private. Never share it with callers, messages, or people claiming to be support agents.",
    },
    {
      title: "Verify unexpected requests",
      description:
        "If you receive an unexpected OTP, check your account through the official app or website.",
    },
    {
      title: "Avoid suspicious links",
      description:
        "Never enter your OTP on websites opened through unknown messages or emails.",
    },
    {
      title: "Contact official support",
      description:
        "If you suspect fraud, contact your bank or service provider through its official channels.",
    },
  ],
},

// 6. ROMANCE SCAMS
{
  id: "romance",
  title: "Romance Scams",
  description:
    "Learn how to recognize fake relationships and protect yourself from emotional and financial fraud.",

  icon: "Heart",
  img:OnlineDatingScam,
  theme: {
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },

  introduction: {
    title: "What are romance scams?",
    description:
      "Romance scams happen when fraudsters create fake identities on dating apps or social media to build emotional relationships. After gaining someone's trust, they may invent emergencies or other reasons to request money or financial information.",
  },

  warningSigns: [
    {
      title: "Too much affection too soon",
      description:
        "They quickly express strong feelings or talk about marriage before getting to know you.",
      icon: "Heart",
      color: "text-red-500",
      bg: "bg-rose-50",
    },
    {
      title: "Avoiding video calls",
      description:
        "They repeatedly make excuses to avoid live video calls or meeting in person.",
      icon: "VideoOff",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Emergency money requests",
      description:
        "They ask for money for medical bills, travel expenses, or sudden emergencies.",
      icon: "Wallet",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Requests for private information",
      description:
        "They pressure you to share financial details, sensitive photos, or personal information.",
      icon: "LockKeyhole",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ],

  example: {
    title: "Example of a romance scam message",
    description:
      "Here is an example of a suspicious message that uses emotions to request money.",
    message:
      "My love, I really need your help. I am stuck abroad and cannot return home without paying an emergency fee. Please send me ₹15,000 today. I promise to repay you when we meet.",
  },

  safetyTips: [
    {
      title: "Take your time building trust",
      description:
        "Be cautious if someone expresses intense feelings unusually quickly or pressures you into commitment.",
    },
    {
      title: "Verify their identity",
      description:
        "Use video calls and look for inconsistencies in their stories or online profiles.",
    },
    {
      title: "Never send money to someone you haven't verified",
      description:
        "Be especially careful with emergency requests, gift cards, cryptocurrency, or overseas transfers.",
    },
    {
      title: "Protect your personal information",
      description:
        "Avoid sharing financial details, passwords, or sensitive photos with someone you have only met online.",
    },
  ],
},
// 7. IMPERSONATION SCAMS
{
  id: "impersonation",
  title: "Impersonation Scams",
  description:
    "Learn how to identify people pretending to represent trusted organizations.",

  icon: "UserRound",
  img:FakeIdentityScam,
  theme: {
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },

  introduction: {
    title: "What are impersonation scams?",
    description:
      "Impersonation scams occur when fraudsters pretend to be government officials, company employees, police officers, or people you trust. They may use fake identities to frighten you, request money, or steal your personal information.",
  },

  warningSigns: [
    {
      title: "Fake authority",
      description:
        "Someone claims to be a government official, police officer, or company representative without proper verification.",
      icon: "ShieldAlert",
      color: "text-red-500",
      bg: "bg-rose-50",
    },
    {
      title: "Threats or pressure",
      description:
        "They threaten arrest, fines, or account suspension unless you act immediately.",
      icon: "AlertTriangle",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Requests for money",
      description:
        "They demand payments, fines, or fees to resolve an alleged problem.",
      icon: "Banknote",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Suspicious identity",
      description:
        "They use fake ID cards, unofficial email addresses, or unknown phone numbers.",
      icon: "UserRound",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ],

  example: {
    title: "Example of an impersonation scam",
    description:
      "Here is an example of a suspicious message from someone pretending to be an official.",
    message:
      "URGENT! We are calling from the Cyber Crime Department. Your identity has been linked to an illegal transaction. Pay ₹8,000 immediately to avoid arrest. Do not discuss this with anyone.",
  },

  safetyTips: [
    {
      title: "Verify their identity",
      description:
        "Contact the organization through its official website or verified phone number.",
    },
    {
      title: "Don't panic over threats",
      description:
        "Be cautious when someone uses fear, threats, or urgency to force you into a decision.",
    },
    {
      title: "Never pay without verification",
      description:
        "Do not transfer money to resolve unexpected fines or allegations without independently verifying them.",
    },
    {
      title: "Protect personal information",
      description:
        "Never share OTPs, passwords, banking details, or identity documents with unverified callers.",
    },
  ],
},

// 8. LOTTERY & PRIZE SCAMS
{
  id: "lottery",
  title: "Lottery & Prize Scams",
  description:
    "Learn how to recognize fake lottery wins, prize notifications, and reward offers.",

  icon: "Gift",
  img:FakePrize,

  theme: {
    bg: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },

  introduction: {
    title: "What are lottery and prize scams?",
    description:
      "Lottery and prize scams occur when fraudsters tell people they have won a lottery, cash prize, or expensive gift that they never entered to win. They then ask for processing fees, taxes, or personal information before releasing the supposed prize.",
  },

  warningSigns: [
    {
      title: "Unexpected winnings",
      description:
        "You receive a message claiming you've won a lottery or prize you never entered.",
      icon: "Trophy",
      color: "text-red-500",
      bg: "bg-rose-50",
    },
    {
      title: "Upfront payment requests",
      description:
        "They ask you to pay processing fees, taxes, or delivery charges to claim your prize.",
      icon: "CreditCard",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Limited-time pressure",
      description:
        "They insist you must claim the prize immediately or risk losing it.",
      icon: "Clock",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Suspicious contact details",
      description:
        "They use unofficial phone numbers, unknown websites, or email addresses to contact you.",
      icon: "Mail",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ],

  example: {
    title: "Example of a fake prize notification",
    description:
      "Here is an example of a suspicious prize message. Scammers often use similar language.",
    message:
      "CONGRATULATIONS! Your mobile number has won ₹25,00,000 in our lucky draw. Pay ₹5,999 as a processing fee today to receive your prize. Reply now to claim your winnings!",
  },

  safetyTips: [
    {
      title: "Question unexpected prizes",
      description:
        "Be suspicious of lottery or prize notifications for competitions you never entered.",
    },
    {
      title: "Never pay to claim a prize",
      description:
        "Do not send money to unknown people who demand fees before releasing supposed winnings.",
    },
    {
      title: "Verify the organization",
      description:
        "Check the official website and contact details independently before responding.",
    },
    {
      title: "Keep personal details private",
      description:
        "Never share OTPs, banking credentials, or identity documents to claim an unverified prize.",
    },
  ],
},
];