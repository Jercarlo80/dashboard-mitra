import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDriveFolderUpload, MdDelete } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function UploadProgressAlert({ uploadProgress }) {
  const [typeEffect1] = useTypewriter({
    words: ["Mohon menunggu.."],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
  });
  return (
    <div className="fixed z-80 inset-0 flex justify-center items-center">
      <div className="absolute inset-0 bg-transparent opacity-60"></div>
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-lg font-semibold mb-2">{typeEffect1}</h2>
        <div className="flex items-center mb-2">
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div
              className="bg-gradient-to-b from-[#9b59b6] to-[#e74c3c] rounded-full h-3"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <span className="ml-2">{uploadProgress}%</span>
        </div>
      </div>
    </div>
  );
}

export default function PopUpForm({ isOpen, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSelectedImage(null);
    onClose();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    // Clear the file input value
    document.getElementById("file-upload").value = "";
  };

  const handleSubmit = () => {
    // Show upload progress alert
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 0;
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  return (
    <div
      className={`fixed z-10 inset-0 flex justify-center items-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className={`fixed inset-0 bg-gray-600 opacity-60 ${
          isOpen ? "" : "hidden"
        }`}
        onClick={handleClose}
      />
      <div className="w-[30.875rem] h-[46.5rem] rounded-xl bg-gradient-to-b from-[#9b59b6] to-[#e74c3c] relative">
        <button
          className="absolute top-0 right-0 mt-[1rem] mr-[1rem]"
          onClick={handleClose}
        >
          <IoMdClose color="white" size={40} />
        </button>
        <div className="flex flex-col justify-center items-center gap-6 h-full">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-white text-[20px] font-semibold">
              Nama Produk
            </h1>
            <input
              className="sm:w-[27.125rem] w-[23rem] h-[3.438rem] bg-white py-3 px-3 rounded-lg"
              name="Nama Produk"
              placeholder="Masukan Nama Produk"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-white text-[20px] font-semibold">Keterangan</h1>
            <input
              className="sm:w-[27.125rem] w-[23rem] h-[3.438rem] bg-white py-3 px-3 rounded-lg"
              name="Keterangan"
              placeholder="Masukan Keterangan Produk"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-white text-[20px] font-semibold">Harga</h1>
            <input
              className="sm:w-[27.125rem] w-[23rem] h-[3.438rem] bg-white py-3 px-3 rounded-lg"
              name="Harga"
              placeholder="Masukan Harga Produk"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-white text-[20px] font-semibold">
              Foto Produk
            </h1>
            <label htmlFor="file-upload" className="cursor-pointer">
              <input
                id="file-upload"
                type="file"
                accept=".png"
                className="hidden"
                onChange={handleFileChange}
              />
              {selectedImage ? (
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-[12.438rem] rounded-lg"
                  />
                  <button
                    className="absolute top-0 right-0 -mt-2 mr-2"
                    onClick={handleDeleteImage}
                  >
                    <MdDelete color="white" size={24} />
                  </button>
                </div>
              ) : (
                <div className="sm:flex flex sm:flex-col flex-col sm:justify-center justify-center sm:items-center items-center bg-white sm:w-[27.125rem] w-[23rem] h-[12.438rem] rounded-lg">
                  <MdDriveFolderUpload color="black" size={50} />
                  <h1>Unggah Foto</h1>
                </div>
              )}
            </label>
            <div className="sm:w-[27.125rem] flex justify-center items-center">
              <button
                className="w-[27.125rem] h-[2.6rem] bg-white mt-[1rem] grid justify-items-center rounded-xl"
                onClick={handleSubmit}
              >
                <h1 className="w-full h-[2.6rem] font-semibold flex justify-center items-center text-center">
                  Submit
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      {uploadProgress > 0 && (
        <UploadProgressAlert uploadProgress={uploadProgress} />
      )}
    </div>
  );
}
