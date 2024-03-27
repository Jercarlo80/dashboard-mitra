import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Keuangan from "../../pages/keuangan/Keuangan";

export default function KeuanganRoute() {
  return (
    <div className="flex bg-[#F6F5F5] h-full gap-5">
      <Sidebar/>
      <div className="w-full">
        <Keuangan />
      </div>
    </div>
  );
}
