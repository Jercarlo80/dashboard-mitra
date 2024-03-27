import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Menu from "../../pages/menu/Menu";

export default function MenuRoute() {
  return (
    <div className="flex bg-[#F6F5F5] h-full gap-5">
      <Sidebar/>
      <div className="w-full">
        <Menu />
      </div>
    </div>
  );
}
