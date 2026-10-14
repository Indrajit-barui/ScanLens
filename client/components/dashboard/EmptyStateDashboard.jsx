import { ArrowRight } from "lucide-react"

const EmptyStateDashboard = () => {
  return (
<div className="w-full min-h-[350px] bg-red-50 mt-5 p-6 rounded-2xl flex items-center justify-between gap-6">
    <div className="">
        {/* welcome badge */}
        <div className="w-22 h-10 text-amber-800 bg-amber-500 flex justify-center items-center rounded-xl font-semibold">
            WELCOME
        </div>
        {/* text */}
        <div className="mt-2">
            <p className="text-2xl md:text-5xl  font-bold">
                Stay protected <br /> from online scams
            </p>
            <p className=" text-sm md:text-base   text-gray-400">ScamLens helps you identify suspicious messages, understand potential risks, and stay safe online.</p>
        </div>

{/* Explore ScamLens button */}
<button className="mt-4 flex w-full sm:w-fit items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-red-600">
  Explore ScamLens
  <ArrowRight size={20} />
</button>
    </div>
    <div>
        <div className="hidden md:flex flex-1 justify-center items-center">
  <img
    src="../../src/assets/scam-illustration.png"
    alt="Illustration of suspicious messages"
    className="w-full max-w-md object-contain"
  />
</div>
    </div>
    </div>
  )
}

export default EmptyStateDashboard