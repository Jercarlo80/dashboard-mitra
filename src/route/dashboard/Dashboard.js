import React from "react";
import Dashboard from "../../pages/dashboard/Dashboard";
import Sidebar from "../../component/sidebar/Sidebar";

export default function DashboardRoute() {
  return (
    <div className="flex bg-[#F6F5F5] h-full gap-5">
      <Sidebar/>
      <div className="w-full">
        <Dashboard />
      </div>
    </div>
  );
}
