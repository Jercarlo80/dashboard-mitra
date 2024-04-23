import React, {useState} from "react";
import Table from "../../component/table/table";

export default function Karyawan(data) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className={`bg-white mt-[1.5rem] rounded-xl shadow-2xl z-0 transition-all mx-auto duration-300 sm:w-[77rem] w-[24rem] sm:h-[51.563rem] h-[43.2rem] sm:overflow-y-hidden overflow-y-auto`}>
      <h1 className="text-[2rem] pl-[1.875rem] pt-[2.125rem] font-semibold">
        Data Akun
      </h1>
      <div className="ml-[1.75rem] mt-[3.125rem]">
        <Table data={data} />
      </div>
    </aside>
  );
}
