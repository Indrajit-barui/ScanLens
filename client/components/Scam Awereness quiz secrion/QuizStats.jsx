import { Target, BookOpen,ChartNoAxesColumnIncreasing,Star} from "lucide-react"
import StatsCard from "./StatsCard"
const QuizStats = () => {
  return (
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

  <StatsCard
    icon={BookOpen}
    value="6"
    title="Quizzes Completed"   
    iconBg="bg-emerald-100"
    iconColor="text-emerald-500"
  />

  <StatsCard
    icon={Target}
    value="85%"
    title="Average Score"
    iconBg="bg-red-100"
    iconColor="text-red-500"
  />

  <StatsCard
    icon={ChartNoAxesColumnIncreasing}
    value="2"
    title="Day Streak 🔥"
    iconBg="bg-blue-100"
    iconColor="text-blue-500"
  />

  <StatsCard
    icon={Star}
    value="12"
    title="Total Points"
    iconBg="bg-purple-100"
    iconColor="text-purple-500"
  />

</div>
  )
}

export default QuizStats