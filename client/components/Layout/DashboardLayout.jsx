import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";

const DashboardLayout = () => {
return (
<div className="min-h-screen bg-[#0B1120]">

  {/* Left Sidebar */}
  <Sidebar />

  {/* Right Content */}
  <div className="min-h-screen bg-[#0B1120] lg:ml-[280px]">

    <Header />

    <main className="min-h-screen bg-[#0B1120] px-6 pb-6 pt-24 sm:px-6">
      <Outlet />
    </main>

  </div>
</div>

);
};

export default DashboardLayout;