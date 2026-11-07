import {ResponsiveContainer,PieChart ,Pie,Tooltip,Legend,Cell} from "recharts"


const RiskDistribution = ({stats}) => {
const riskData = [
  {
    name: "High Risk",
    value: stats.highRisk,
    color: "#ef4444",
  },
  {
    name: "Medium Risk",
    value: stats.mediumRisk,
    color: "#eab308",
  },
  {
    name: "Low Risk",
    value: stats.lowRisk,
    color: "#3b82f6",
  },
];

const totalAnalyses=stats.totalAnalyses
  return (
 <div className="relative h-[300px] w-full [&_*:focus]:outline-none">
      <ResponsiveContainer width="100%" height="100%">
         <PieChart >
           <Pie 
           data={riskData}
           dataKey="value"
           nameKey="name"
           innerRadius={60}
           outerRadius={100}
     
           >
            {riskData.map((entry) => (
              <Cell
                key={entry.name}
                fill={entry.color}
              />
            ))}
            </Pie>

            <Tooltip />
          <Legend />
         </PieChart>

      </ResponsiveContainer>
               <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-slate-900">
          {totalAnalyses}
        </p>
        <p className="text-lg text-slate-500">Total</p>
      </div>
    </div>
  )
}

export default RiskDistribution