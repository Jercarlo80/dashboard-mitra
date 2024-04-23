import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import People from "../../assets/people01.png";
import Button from "../../component/button/Button";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Login() {
  const [showPass, setShowPass] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const buttonPass = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setShowPass((prevState) => !prevState);
  };
  const [typeEffect1] = useTypewriter({
    words: ["Selamat datang mitra Antria 👋"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
  });
  return (
    <div className="w-full h-full bg-[#F6F5F5]">
      <div className="flex justify-center items-center h-screen">
        <div className="md:w-[30.313rem] w-[22rem] h-[35.75rem] bg-white rounded-xl shadow-xl">
          <img className="ml-[1.563rem] mt-[2.2rem]" src={Logo} alt="Logo" />
          <div>
            <h1 className="mt-[3.288rem] ml-[1.563rem] font-semibold md:text-[1.5rem] text-[1rem]">
              {typeEffect1}
            </h1>
            <h2 className="mt-[0.1rem] ml-[1.563rem] font-semibold text-[#8A8A8A] text-[0.75rem]">
              Masukan data akun mitra yang sudah terdaftar
            </h2>
            <div className="ml-[1.563rem] mt-[1.188rem]">
              <h1 className="text-[0.75rem] font-bold">Username</h1>
              <form>
                <input
                  className="md:w-[27.125rem] w-[19rem] h-[3.438rem] bg-white shadow-xl py-3 px-3 rounded-xl"
                  type="username"
                  name="username"
                  placeholder="Masukan nama akun anda"
                />
              </form>
            </div>
            <div className="ml-[1.563rem] mt-[1.188rem]">
              <h1 className="text-[0.75rem] font-bold">Password</h1>
              <form>
                <input
                  className="md:w-[27.125rem] w-[19rem] h-[3.438rem] bg-white shadow-xl py-3 px-3 rounded-xl"
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Masukan password anda"
                />
                <button
                  className="absolute right-[3.5rem] mt-[1rem]"
                  onClick={buttonPass}
                >
                  {showPass ? (
                    <AiFillEye color="c4c4c4" size={24} />
                  ) : (
                    <AiFillEyeInvisible color="c4c4c4" size={24} />
                  )}
                </button>
              </form>
            </div>
            <div className="flex justify-center mt-[4.313rem]">
              <Link to="/dashboard">
                <Button
                  text="Masuk"
                  size="w-[19.938rem] h-[2.938rem]"
                  bgColor="bg-gradient-to-r from-[#9b59b6] to-[#e74c3c]"
                  txtColor="text-white"
                  txtSize="w-[19.938rem] h-[2.938rem]"
                  position="flex justify-center items-center"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
