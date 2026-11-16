import WelcomeSection from "../components/dashboard/WelcomeSection";
import StatsCards from "../components/dashboard/StatsCards";
import RiskDistribution from "../components/dashboard/RiskDistribution";
import RecentAnalyses from "../components/dashboard/RecentAnalyses";

import { useState, useEffect } from "react";
import { getDashboardStats } from "@/api/dashboardApi";
import EmptyStateDashboard from "../components/EmptyDashboard/EmptyStateDashboard";

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
    <div className="min-h-screen bg-[#0B1120] text-white">

      {loading ? (
        <div className="flex min-h-[400px] items-center justify-center text-slate-400">
          Loading dashboard...
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 py-10 text-center text-red-400">
          {error}
        </div>
      ) : stats.totalAnalyses === 0 ? (
        <EmptyStateDashboard />
      ) : (
        <>
          <WelcomeSection />

          <StatsCards stats={stats} />

          <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* Risk Distribution */}
            <div className="rounded-2xl border border-[#263653] bg-[#111827] p-6">
              <h2 className="mb-4 text-xl font-bold text-white">
                Risk Distribution
              </h2>

              <RiskDistribution stats={stats} />
            </div>

            {/* Recent Analyses */}
            <div className="rounded-2xl border border-[#263653] bg-[#111827] p-6">
              <RecentAnalyses
                analyses={dashboardData?.recentAnalyses || []}
              />
            </div>

          </section>
        </>
      )}

    </div>
  );
};

export default Dashboard;