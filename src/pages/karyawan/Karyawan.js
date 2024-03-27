import React from "react";
import Table from "../../component/table/table";

export default function Karyawan(data) {
  return (
    <aside className="w-[77rem] h-[51.563rem] bg-white mt-[1.5rem] rounded-xl shadow-2xl z-0">
      <h1 className="text-[2rem] pl-[1.875rem] pt-[2.125rem] font-semibold">
        Data Karyawan
      </h1>
      <div className="ml-[1.75rem] mt-[3.125rem]">
        <Table data={data} />
      </div>
    </aside>
  );
}
