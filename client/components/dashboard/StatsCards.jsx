import Statscard from "./Statscard"
import { FileText,AlertTriangle ,Send,ShieldCheck} from "lucide-react";
const StatsCards = () => {
    const stats = [
  {
    title: "Total Analyses",
    value: 24,
    icon: <FileText size={32} className="text-purple-600" />,
    color: "bg-purple-100",
  },
  {
    title: "High Risk",
    value: 9,
    icon: <AlertTriangle size={32} className="text-red-500" />,
    color: "bg-red-100",
  },
  {
    title: "Medium Risk",
    value: 7,
    icon: <Send size={32} className="text-yellow-500" />,
    color: "bg-yellow-100",
  },
  {
    title: "Low Risk",
    value: 8,
    icon: <ShieldCheck size={32} className="text-green-600" />,
    color: "bg-green-100",
  },
];
  return (
    <div className="grid grid-cols-1 gap-1 md:gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {
            stats.map((stat)=>(
                
                <Statscard 
                
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  color={stat.color}
                />
              
            ))
        }
    </div>
  )
}

export default StatsCards