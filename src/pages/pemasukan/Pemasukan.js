import React from "react";
import Table from "../../component/table/table-pemasukan";

export default function Pemasukan({ data }) {
  return (
    <aside
      className={`bg-white mt-[1.5rem] rounded-xl shadow-2xl z-0 transition-all mx-auto duration-300 sm:w-[77rem] w-[23.4rem] sm:h-[51.563rem] h-[43.2rem] sm:overflow-y-hidden overflow-y-auto`}
    >
      <h1 className="text-2xl p-6 font-semibold">Data Pemasukan</h1>
      <div className="px-6 pb-6">
        <Table data={data} />
      </div>
    </aside>
  );
}
