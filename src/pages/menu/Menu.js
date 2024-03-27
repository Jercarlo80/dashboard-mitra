import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Menu() {
  return (
    <aside className="w-[77rem] h-[51.563rem] bg-white mt-[1.5rem] rounded-xl shadow-2xl z-0">
      <h1 className="text-[2rem] pl-[1.875rem] pt-[2.125rem] font-semibold">
        Data Menu
      </h1>
      <div className="flex flex-row gap-6 w-[75rem] overflow-x-auto ">
        <div className="w-[18.75rem] h-[31.25rem] mt-[4.5rem] ml-[1.875rem] rounded-lg bg-gradient-to-b from-[#9b59b6] to-[#e74c3c]">
          <div className="w-[18.75rem] h-[31.25rem] flex flex-col justify-center items-center gap-6">
            <button>
              <FaPlus size={30} color="white" />
            </button>
            <h1 className="text-white font-bold">Tambah Menu</h1>
          </div>
        </div>
        <div className="w-[18.75rem] h-[31.25rem] mt-[4.5rem] ml-[1.875rem] rounded-lg bg-gradient-to-b from-[#9b59b6] to-[#e74c3c]">
          <div className="w-[18.75rem] h-[31.25rem] flex flex-col justify-center items-center gap-6">
            <button>
              <FaPlus size={30} color="white" />
            </button>
            <h1 className="text-white font-bold">Tambah Menu</h1>
          </div>
        </div>
        <div className="w-[18.75rem] h-[31.25rem] mt-[4.5rem] ml-[1.875rem] rounded-lg bg-gradient-to-b from-[#9b59b6] to-[#e74c3c]">
          <div className="w-[18.75rem] h-[31.25rem] flex flex-col justify-center items-center gap-6">
            <button>
              <FaPlus size={30} color="white" />
            </button>
            <h1 className="text-white font-bold">Tambah Menu</h1>
          </div>
        </div>
        <div className="w-[18.75rem] h-[31.25rem] mt-[4.5rem] ml-[1.875rem] rounded-lg bg-gradient-to-b from-[#9b59b6] to-[#e74c3c]">
          <div className="w-[18.75rem] h-[31.25rem] flex flex-col justify-center items-center gap-6">
            <button>
              <FaPlus size={30} color="white" />
            </button>
            <h1 className="text-white font-bold">Tambah Menu</h1>
          </div>
        </div>
        <div className="w-[18.75rem] h-[31.25rem] mt-[4.5rem] ml-[1.875rem] rounded-lg bg-gradient-to-b from-[#9b59b6] to-[#e74c3c]">
          <div className="w-[18.75rem] h-[31.25rem] flex flex-col justify-center items-center gap-6">
            <button>
              <FaPlus size={30} color="white" />
            </button>
            <h1 className="text-white font-bold">Tambah Menu</h1>
          </div>
        </div>
      </div>
    </aside>
  );
}
