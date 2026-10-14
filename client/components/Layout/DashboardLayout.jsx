import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";

const DashboardLayout = () => {
  return (
    <div>
      {/* Left side */}
      <Sidebar />

      {/* Right side */}
      <div className="min-h-screen lg:ml-[280px]">
        <Header />

        <main className="px-6 pb-6 pt-24 sm:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;