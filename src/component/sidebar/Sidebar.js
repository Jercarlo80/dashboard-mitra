import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard, MdOutlineMenuBook } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Logo from "../../assets/Logo.png";
import Button from "../button/Button";

const Navigation = ({ onToggle }) => {
  const menuItems = [
    {
      to: "/dashboard",
      text: "Dashboard",
      icon: <MdDashboard size={22} />,
    },
    {
      to: "/data-akun",
      text: "Data Akun",
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
  const menuBottom = [
    {
      to: "/dashboard",
      text: "Dashboard",
      icon: <MdDashboard color="white" size={22} />,
    },
    {
      to: "/data-akun",
      text: "Data Akun",
      icon: <FaUser color="white" size={22} />,
    },
    {
      to: "/data-keuangan",
      text: "Data Keuangan",
      icon: <GrMoney color="white" size={22} />,
    },
    {
      to: "/data-menu",
      text: "Data Menu",
      icon: <MdOutlineMenuBook color="white" size={22} />,
    },
  ];

  const [expanded, setExpanded] = useState(true);
  const toggleSidebar = () => {
    setExpanded((prev) => !prev);
    if (onToggle) onToggle(!expanded); // Notify parent
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden lg:block h-screen">
        <aside
          className={`flex flex-col ${
            expanded
              ? "w-[18.563rem] h-[51.563rem]"
              : "w-[6rem] sm:h-[51.563rem] h-[39.2rem]"
          } 
            
          ml-[0.5rem] 
          mt-[1.5rem] 
          rounded-xl 
          shadow-2xl 
          bg-white
          transition-all duration-300 ease-in-out
        `}
        >
          <div
            className={`p-4 ${
              expanded
                ? "flex items-center justify-between"
                : "flex items-center justify-center"
            }`}
          >
            <div
              className={`flex items-center ${
                expanded ? "" : "justify-center"
              }`}
            >
              <img
                className={`transition-all duration-300 ease-in-out ${
                  expanded ? "" : "w-0"
                }`}
                src={Logo}
                alt="Logo"
              />
            </div>
            <button onClick={toggleSidebar}>
              {expanded ? (
                <IoIosArrowDropleftCircle color="#9b59b6" size={35} />
              ) : (
                <IoIosArrowDroprightCircle color="#9b59b6" size={35} />
              )}
            </button>
          </div>

          <div
            className={`flex items-center ${
              expanded ? "w-[16rem]" : "w-[4rem]"
            } h-[3.8rem] ml-[1.125rem] mt-[1rem] bg-gradient-to-r from-[#9b59b6] to-[#e74c3c] rounded-xl transition-all duration-300 ease-in-out`}
          >
            <div className="flex justify-between w-full p-4">
              {expanded && (
                <div className="flex items-center space-x-3">
                  <FaUser size={25} color="white" />
                  <h1 className="text-white font-bold">Admin</h1>
                </div>
              )}
              <button>
                <Link to="/Login">
                  <FaSignOutAlt size={25} color="white" />
                </Link>
              </button>
            </div>
          </div>

          <div className="flex-1">
            <ul
              className={`flex flex-col justify-between mt-12 space-y-6 ${
                expanded ? "pl-4" : "pl-4"
              }`}
            >
              {menuItems.map((menuItem, index) => (
                <li key={index} className="relative group">
                  <Link to={menuItem.to}>
                    <Button
                      text={expanded ? menuItem.text : ""}
                      icon={menuItem.icon}
                      size={`${
                        expanded
                          ? "w-[16rem] h-[2.688rem]"
                          : "w-[4rem] h-[2.688rem]"
                      }`}
                      txtColor="hover:text-white"
                      bgColor="hover:bg-gradient-to-r from-[#9b59b6] to-[#e74c3c]"
                      position={`flex ${
                        expanded
                          ? "pl-2 gap-x-[0.625rem]"
                          : "justify-center w-[4rem]"
                      }`}
                    />
                  </Link>
                  {!expanded && (
                    <div className="absolute left-full ml-[0.5rem] mt-[-2.4rem] hidden group-hover:block text-center bg-gradient-to-r from-[#9b59b6] to-[#e74c3c] text-white text-sm rounded-md w-[16rem] z-auto h-[2.688rem]">
                      <h1 className="flex justify-center items-center h-[2.688rem] font-bold">
                        {menuItem.text}
                      </h1>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Bottom navigation for smaller screens */}
      <div className="block lg:hidden fixed left-1/2 transform -translate-x-1/2 bottom-2 rounded-xl w-[22.75rem] h-[3.875rem] bg-gradient-to-r from-[#9b59b6] to-[#e74c3c] shadow-lg z-50">
        <nav className="flex justify-evenly items-center h-full">
          {menuBottom.map((menuItem, index) => (
            <Link key={index} to={menuItem.to} className="relative">
              <Button
                icon={menuItem.icon}
                size="w-full"
                position="flex flex-col justify-center items-center"
              />
            </Link>
          ))}
          <button>
            <Link to="/Login">
              <FaSignOutAlt size={22} color="white" />
            </Link>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
