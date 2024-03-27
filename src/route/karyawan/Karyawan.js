import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Karyawan from "../../pages/karyawan/Karyawan";

export default function KaryawanRoute() {
  return (
    <div className="flex bg-[#F6F5F5] h-full gap-5">
      <Sidebar/>
      <div className="w-full">
        <Karyawan />
      </div>
    </div>
  );
}
