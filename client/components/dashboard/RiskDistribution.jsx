import {ResponsiveContainer,PieChart ,Pie,Tooltip,Legend,Cell} from "recharts"


const RiskDistribution = () => {
const riskData = [
  {
    name: "High Risk",
    value: 9,
    color: "#ef4444",
  },
  {
    name: "Medium Risk",
    value: 7,
    color: "#eab308",
  },
  {
    name: "Low Risk",
    value: 6,
    color: "#3b82f6",
  },
  {
    name: "Safe",
    value: 2,
    color: "#10b981",
  },
];

const totalAnalyses=riskData.reduce((curr,acc)=>{
  return curr+acc.value
},0)
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