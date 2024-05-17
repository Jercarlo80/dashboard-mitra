import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { BsSearch } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import XLS from "../../assets/XLS.svg";
import "../../index.css";

export default function Tabel() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = Array.isArray(filteredData)
    ? filteredData.slice(firstIndex, lastIndex)
    : [];
  const totalRecords = Array.isArray(filteredData) ? filteredData.length : 0;
  const totalPages = Math.ceil(totalRecords / recordPerPage);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://development.verni.yt/pesanan/mitra/2"
      );
      if (response.status === 200) {
        const receivedData = response.data; // Assuming response.data contains the list of users
        setData(receivedData);
        setFilteredData(receivedData);
      }
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []); 

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = data.filter((item) => {
      if (item && item.invoice) {
        return item.invoice.toLowerCase().includes(searchTerm);
      }
      return false;
    });
    setFilteredData(filtered);
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

  const convertToXLS = () => {
    try {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
      XLSX.writeFile(workbook, "data.xlsx");
    } catch (error) {
      console.error("Error converting to XLS:", error);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="overflow-auto">
      <div className="sm:flex flex sm:justify-between mb-3">
        <input
          className="px-4 py-2 border border-gray-500 rounded-lg text-black focus:outline-none placeholder-gray-400"
          type="text"
          placeholder="Masukkan Invoice"
          onChange={handleFilter}
        />
        <BsSearch className="relative right-6 text-white top-2" size={20} />
        <div className="flex sm:w-[10rem] sm:h-[3rem] rounded-xl">
          <h1 className="sm:w-[10rem] sm:flex hidden sm:h-[3rem] font-semibold justify-center items-center">
            Download Data
          </h1>
          <button className="sm:h-[3rem] pr-2" onClick={convertToXLS}>
            <img src={XLS} alt="XLS" />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center mt-4">
          <ThreeDots type="ThreeDots" color="#555555" height={50} width={50} />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 mt-4">{error}</div>
      ) : (
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gradient-to-r from-[#9b59b6] to-[#e74c3c] text-white">
              <th className="px-4 py-2">ID Pesanan</th>
              <th className="px-4 py-2">Waktu Order</th>
              <th className="px-4 py-2">Menu Order</th>
              <th className="px-4 py-2">Pembayaran</th>
              <th className="px-4 py-2">Biaya</th>
              <th className="px-4 py-2">Pemesan</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{item.invoice}</td>
                <td className="px-4 py-2">{item.created_at}</td>
                <td className="px-4 py-2">{item.nama_produk}</td>
                <td className="px-4 py-2">{item.payment}</td>
                <td className="px-4 py-2">Rp{item.harga}</td>
                <td className="px-4 py-2">Ahmad Naufal</td>
                <td className="px-4 py-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <nav className="flex justify-between items-center mt-5 mb-3">
        <div className="flex items-center">
          <select
            className="bg-gradient-to-r from-[#9b59b6] to-[#e74c3c] text-white p-2 rounded-lg cursor-pointer"
            value={recordPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <p className="ml-4">Menampilkan Data Pemasukan</p>
        </div>
        <div className="flex">
          <button
            className="px-2"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowBackIosSharpIcon />
          </button>
          {pageNumbers
            .filter(
              (number) => number >= currentPage && number < currentPage + 5
            )
            .map((number) => (
              <button
                className={`px-3 ${
                  currentPage === number
                    ? "hover:bg-gradient-to-r hover:from-[#9b59b6] hover:to-[#e74c3c] hover:text-white hover:font-semibold hover:rounded-xl"
                    : ""
                }`}
                key={number}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            ))}
          <button
            className="px-2"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ArrowForwardIosSharpIcon />
          </button>
        </div>
      </nav>
    </div>
  );
}
