import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import PopUpForm from "../../component/form/PopUpForm";

export default function Menu() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  return (
    <aside
      className={`bg-white mt-[1.5rem] rounded-xl shadow-2xl z-0 transition-all mx-auto duration-300 sm:w-[77rem] w-[23.4rem] sm:h-[51.563rem] h-[43.2rem] sm:overflow-y-hidden overflow-y-auto`}
    >
      <h1 className="text-[2rem] pl-[1.875rem] pt-[2.125rem] font-semibold">
        Data Menu
      </h1>
      <div className="flex flex-row gap-6 w-[75rem] overflow-x-auto ">
        <div className="w-[18.75rem] h-[31.25rem] sm:mt-[4.5rem] mt-[1.5rem] ml-[1.875rem] rounded-lg bg-gradient-to-b from-[#9b59b6] to-[#e74c3c]">
          <div className="w-[18.75rem] h-[31.25rem] flex flex-col justify-center items-center gap-6">
            <button onClick={() => setIsPopUpOpen(true)}>
              <FaPlus size={30} color="white" />
            </button>
            <h1 className="text-white font-bold">Tambah Menu</h1>
          </div>
          <PopUpForm
            isOpen={isPopUpOpen}
            onClose={() => setIsPopUpOpen(false)}
          />
        </div>
      </div>
    </aside>
  );
}
