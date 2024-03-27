import React from "react";
import Logo from "../../assets/Logo.png";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { Link } from "react-router-dom";
import Button from "../button/Button";

export default function Sidebar() {
  // Data untuk setiap menu
  const menuItems = [
    {
      to: "/dashboard",
      text: "Dashboard",
      icon: <MdDashboard size={22} />,
    },
    {
      to: "/data-karyawan",
      text: "Data Karyawan",
      icon: <FaUser size={22} />,
    },
    {
      to: "/data-keuangan",
      text: "Data Keuangan",
      icon: <GrMoney size={22} />,
    },
    {
      to: "/data-menu",
      text: "Data Menu",
      icon: <MdOutlineMenuBook size={22} />,
    },
  ];

  return (
    <div className="h-screen">
      <aside
        className="
          w-[18.563rem] 
          h-[51.563rem] 
          ml-[1.875rem] 
          mt-[1.5rem] 
          rounded-xl 
          shadow-2xl 
          bg-white
        "
      >
        <img className="ml-[1.125rem] pt-[1.813rem]" src={Logo} alt="Logo" />
        <div
          className="
            w-[16rem]
            h-[3.8rem]
            ml-[1.125rem]
            mt-[3.813rem]
            bg-gradient-to-r 
            from-[#9b59b6] 
            to-[#e74c3c]
            rounded-xl
          "
        >
          <div className="flex justify-between p-[1rem]">
            <FaUser size={25} color="white" />
            <h1 className="text-white font-bold mr-[5.5rem]">Admin</h1>
            <button>
              <Link to="/Login">
                <FaSignOutAlt size={25} color="white" />
              </Link>
            </button>
          </div>
          <ul className="flex-col justify-between space-y-6 mt-12">
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <Link to={menuItem.to}>
                  <Button
                    text={menuItem.text}
                    icon={menuItem.icon}
                    txtSize="w-[16rem] h-[2.688rem] font-regular "
                    size="w-[16rem] h-[2.688rem]"
                    txtColor="hover:text-white"
                    bgColor="hover:bg-gradient-to-r from-[#9b59b6] to-[#e74c3c]"
                    position="flex pl-2 pt-[0.563rem] gap-x-[0.625rem]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
