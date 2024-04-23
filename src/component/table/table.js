import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { BsFillPlusSquareFill, BsSearch } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Tabel() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = Array.isArray(filteredData)
    ? filteredData.slice(firstIndex, lastIndex)
    : [];
  const totalRecords = Array.isArray(filteredData) ? filteredData.length : 0;
  const totalPages = Math.ceil(totalRecords / recordPerPage);

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    // const filtered = data.filter((item) => {
    //   if (item && item.nama_alat) {
    //     return item.nama_alat.toLowerCase().includes(searchTerm);
    //   }
    //   return false;
    // });
    // setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setRecordPerPage(newItemsPerPage);
    setCurrentPage(1);
  };
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="sm:w-[77rem] w-[55rem] overflow-y-auto overflow-x-auto">
      <div className="grid justify-items-stretch mb-3">
        <div className="sm:flex sm:justify-end flex justify-start">
          <div className="flex justify-start">
            <input
              className="bg-transparent pl-4 border rounded-lg border-black w-[13.75rem] h-[1.875rem] sm:w-[15.625rem] focus:outline-none "
              type="text"
              placeholder="Masukkan Username"
              onChange={Filter}
            />
            <BsSearch className="relative right-7 top-2" size={15} />
          </div>
        </div>
      </div>
      {loading ? (
        <div className="text-center mt-4">
          <ThreeDots type="ThreeDots" color="#555555" height={50} width={50} />
        </div>
      ) : (
        <table>
          <thead className="sm:w-[66.5rem] w-[500rem] h-[3.5rem] bg-[#F3F3F3]">
            <tr>
              <td className="sm:w-[1.5rem] w-[1rem] pl-3 border-l-2 border-y-2 border-y-[#E8E8E8]">
                Profile
              </td>
              <td className="sm:w-[58.625rem] w-[60rem] pl-[2rem] border-y-2 border-[#e8e8e8]">
                Username
              </td>
              <td className="w-[50.625rem] border-y-2 border-[#e8e8e8]">
                Email
              </td>
              <td className="sm:w-[50.625rem] w-[60rem] border-y-2 border-[#e8e8e8]">
                No Handphone
              </td>
              <td className="w-[58.625rem] pl-[2rem] border-y-2 border-[#e8e8e8]">
                Alamat
              </td>
              <td className="w-[50.625rem] border-y-2 border-[#e8e8e8]">
                Jabatan
              </td>
              <td className="sm:w-[50.625rem] w-[65rem] border-r-2 border-y-2 border-[#e8e8e8]">
                Tanggal Terdaftar
              </td>
            </tr>
          </thead>
          <tbody>
            {/* {records.map((item, id) => ( */}
            <tr>
              {" "}
              {/*key={id} */}
              <td className="w-[1.8rem] h-[3.5rem] pl-[1rem] border-l-2 border-y-2 border-y-[#E8E8E8]">
                {/* {{id + firstIndex + 1}} */} 1
              </td>
              <td className="w-[18.625rem] h-[3.5rem] pl-[2rem] border-y-2 border-[#e8e8e8]">
                username
              </td>
              <td className="w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                email
              </td>
              <td className="w-[18.625rem] h-[3.5rem] pl-[2rem] border-y-2 border-[#e8e8e8]">
                000
              </td>
              <td className="w-[8.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                Jalan jalan
              </td>
              <td className="w-[18.625rem] h-[3.5rem]  border-y-2 border-[#e8e8e8]">
                jendral
              </td>
              <td className="w-[18.625rem] h-[3.5rem] border-r-2 border-y-2 border-[#e8e8e8]">
                8 Juni 2002
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      )}

      <nav className="">
        <ul className="grid justify-items-stretch mt-5 mb-3 pagination">
          <div className="justify-self-start -z-0">
            <label className="flex relative top-6 z-0">
              <select
                className="border border-black rounded-lg cursor-pointer"
                value={recordPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
              <p className="ml-4">Menampilkan Data Akun Mitra</p>
            </label>
          </div>
          <div className="flex justify-end">
            <li className="page-item">
              <a
                className="cursor-pointer page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ArrowBackIosSharpIcon />
              </a>
            </li>
            {pageNumbers
              .filter(
                (number) => number >= currentPage && number < currentPage + 5
              )
              .map((number) => (
                <li
                  className={`cursor-pointer page-link z-0 ${
                    currentPage === number ? "active" : ""
                  }`}
                  key={number}
                >
                  <a
                    className="hover:border-main-color hover:rounded-xl hover:border-2 hover:w-2  page-item hover:text-center text-[1.1rem] p-2"
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </a>
                </li>
              ))}
            <li className="page-item">
              <a
                className="cursor-pointer page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <ArrowForwardIosSharpIcon />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
