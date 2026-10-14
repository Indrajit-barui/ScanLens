import WelcomeSection from "../components/dashboard/WelcomeSection";
import StatsCards from "../components/dashboard/StatsCards";
import RiskDistribution from "../components/dashboard/RiskDistribution";
import RecentAnalyses from "../components/dashboard/RecentAnalyses";
// import EmptyStateDashboard from "../components/dashboard/EmptyStateDashboard";
const Dashboard = () => {
  return (
    <div >

        <WelcomeSection />
        <StatsCards />
<section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
  {/* Left card */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6">
    <h2 className="mb-4 text-2xl font-bold text-slate-900">
      Risk Distribution
    </h2>

    <RiskDistribution />
  </div>

  {/* Right card */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6">


    <RecentAnalyses />
  </div>
</section>

    </div>
  );
};

export default Dashboard;