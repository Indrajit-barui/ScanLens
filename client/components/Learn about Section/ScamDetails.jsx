
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
  FileText,Copy,
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


const ScamDetails = ({scam}) => {
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

const Icon=iconMap[scam.icon]
return (
    <div className="space-y-5">

       {/* Header */}
       <div className={`h-30 w-full ${scam.theme.bg} flex items-center justify-between px-5`}>
           {/* icon */}
           <div className="flex gap-3">
            <div className={`h-15 w-15 rounded-xl flex justify-center items-center ${scam.theme.iconBg} ${scam.theme.iconColor}`}>
               <Icon size={30}/>
            </div>

            <div className="flex flex-col gap-1">
               <p className="text-xl font-bold">{scam.title}</p>
               <p className="text-gray-500">{scam.description}</p>
            </div>
           </div>
           

           <div>
             <img src={scam.img} alt="job offer" srcset="" 
             className="hidden md:block h-28 w-auto object-contain"
             />
           </div>
       </div>


{/* Introduction */}
<div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

  {/* Heading */}
  <div className="flex items-start gap-4">

    {/* Red vertical line */}
    <div className="h-7 w-1.5 shrink-0 rounded-full bg-red-500"></div>

    <div className="flex flex-col gap-1">

      <h2 className="text-xl font-bold text-gray-900">
        {scam.introduction.title}
      </h2>

      <p className="text-base leading-6 text-gray-600">
        {scam.introduction.description}
      </p>

    </div>
  </div>

</div>


{/* Common Warning Signs Header */}
<div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm flex flex-col md:flex-row items-start gap-3">

  {/* Flag Icon */}
  <Flag
    size={30}
    className="fill-red-500 text-red-500 "
  />

  {/* Heading and Description */}
  <div className="flex flex-col gap-1">
    <h2 className="text-xl font-bold text-gray-900">
      Common warning signs
    </h2>

<p className="text-base text-gray-600">
  Watch out for these red flags to protect yourself from {scam.title.toLowerCase()}.
</p>

{/* Warning Signs Cards */}
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-3">
  {scam.warningSigns.map((item, index) => {
    const Icon = iconMap[item.icon];

    return (
      <div
        key={index}
        className={`${item.bg} rounded-2xl p-4`}
      >
        {/* Icon */}
        <div className={`${item.color} mb-4 flex justify-center`}>
          {Icon && <Icon size={32} />}
        </div>

        {/* Title */}
        <h3 className="mb-2 font-bold text-gray-900">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-5 text-gray-600">
          {item.description}
        </p>
      </div>
    );
  })}
</div>
  </div>



</div>
         

{/* Example Message Section */}
<div className="rounded-2xl border border-gray-200 bg-white p-5">

  {/* Header */}
  <div className="mb-4 flex items-start gap-3">
    <FileText size={30} className="shrink-0 text-red-500" />

    <div>
      <h2 className="text-xl font-bold text-gray-900">
        {scam.example.title}
      </h2>

      <p className="text-gray-600">
        {scam.example.description}
      </p>
    </div>
  </div>

  {/* Message Box */}
  <div className="flex items-center gap-4 rounded-2xl bg-rose-50 p-5">

    {/* Red Vertical Line */}
    <div className="w-1 shrink-0 self-stretch rounded-full bg-red-500"></div>

    {/* Example Message */}
    <p className="flex-1 text-base leading-7 text-gray-900">
      {scam.example.message}
    </p>

    {/* Copy Icon */}
    <button
      type="button"
    
      className="shrink-0 text-gray-500 transition hover:text-red-500"
      title="Copy message"
      aria-label="Copy example message"
    >
      <Copy size={22} />
    </button>

  </div>

</div>


{/* Analyze This Message */}
<div className="flex justify-center">
  <button className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-200">
    <Search size={22} />
    <span>Analyze This Message</span>
    <ArrowRight size={22} />
  </button>
</div>

{/* How to stay safe */}

<div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
     <div className="flex gap-2">
      {/* icon */}
            <Shield size={28} className="text-red-500"/>
            <div>
              <p className="text-xl font-semibold">How to stay safe</p>
              <p className="text-gray-400">Follow these tips to avoid for {scam.title}</p>
            </div>
     </div>

    
{/* Safety Tips */}
<div className="space-y-3">
  {scam.safetyTips.map((item, index) => (
    <div key={item.title} className="flex items-center gap-4">

      {/* Number Circle */}
      <div className={`h-12 w-12 shrink-0 rounded-full flex items-center justify-center ${
        [
          "bg-red-100 text-red-500",
          "bg-blue-100 text-blue-500",
          "bg-emerald-100 text-emerald-500",
          "bg-amber-100 text-amber-500",
        ][index % 4]
      }`}>
        <p className="text-2xl font-bold">{index + 1}</p>
      </div>

      {/* Tip Content */}
      <div className="flex-1 rounded-xl bg-slate-50 p-3">
        <h3 className="font-bold text-gray-900">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600">
          {item.description}
        </p>
      </div>

    </div>
  ))}
</div>
</div>
    </div>
  );
}

export default ScamDetails
