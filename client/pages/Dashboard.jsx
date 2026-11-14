import WelcomeSection from "../components/dashboard/WelcomeSection";
import StatsCards from "../components/dashboard/StatsCards";
import RiskDistribution from "../components/dashboard/RiskDistribution";
import RecentAnalyses from "../components/dashboard/RecentAnalyses";
 
import { useState, useEffect } from "react";
import { getDashboardStats } from "@/api/dashboardApi";
// import EmptyStateDashboard from "../components/dashboard/EmptyStateDashboard";
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getDashboardStats();

      console.log("Dashboard API:", data);

      setDashboardData(data);
    } catch (error) {
      console.error("Dashboard Error:", error);
      setError(error.message || "Failed to load dashboard.");
    } finally {
      setLoading(false);
    }
  };

  fetchDashboardData();
}, []);

const stats = dashboardData?.statistics || {
  totalAnalyses: 0,
  highRisk: 0,
  mediumRisk: 0,
  lowRisk: 0,
};
  return (
    <div >

        <WelcomeSection />
        <StatsCards stats={stats}/>
<section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
  {/* Left card */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6">
    <h2 className="mb-4 text-2xl font-bold text-slate-900">
      Risk Distribution
    </h2>

    <RiskDistribution stats={stats} />
  </div>

  {/* Right card */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6">


   <RecentAnalyses analyses={dashboardData?.recentAnalyses || []} />
  </div>
</section>

    </div>
  );
};

export default Dashboard;