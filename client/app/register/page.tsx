"use client";

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import img from "@/assets/image/login.png";
import  Link  from "next/link";
import { register } from "@/api/account";
import { useRouter } from "next/navigation";
import { useAuth } from '@/hooks/AuthContext';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login: authLogin } = useAuth();
  const router = useRouter(); 
  const toastOptions = {
    autoClose: 2000,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await register({ UserName: username,Email: email, Password: password });
        if(response.status === 200)
        {   
            authLogin();
            toast.success("Đăng ký tài khoản thành công!", toastOptions);
            setTimeout(() => {
                router.push('/');
              }, toastOptions.autoClose); 
        }
      } catch (error) {
        toast.error("Đăng ký tài khoản thất bại!", toastOptions);
      }
  };

  return (
    <div className="h-screen flex justify-center ">
      <div  
        className="hidden lg:flex w-full lg:w-1/2 bg-cover justify-around items-center"
        style={{ backgroundImage: `url(${img.src})` }}
      >
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-[#0072bc] font-bold text-4xl font-sans">Pharmacy</h1>
          <p className="text-[#0072bc] mt-1">Chào mừng bạn đến với website!!!</p>
          <div className="flex justify-center lg:justify-start mt-6">
            <Link
              href="/"
              className="hover:bg-[#0072bc] hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-[#0072bc] mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
            >
              Đi đến trang chủ
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form
            className="bg-white rounded-md shadow-2xl p-5"
            onSubmit={handleSubmit}
          >
            <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center">
              Đăng ký
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-8 text-center">
              Hãy đăng ký tài khoản của bạn!
            </p>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl outline-none ring-blue-500 border-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                id="name"
                className=" pl-2 w-full outline-none border-none "
                type="name"
                name="name"
                autoComplete="name"
                required
                placeholder="Tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl outline-none ring-blue-500 border-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                id="email"
                className=" pl-2 w-full outline-none border-none "
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center border-2 mb-4 py-2 px-3 relative rounded-2xl outline-none ring-blue-500 border-blue-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 w-full outline-none border-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                required
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )}
            </div>
            <div>
              <button
                type="submit"
                className="block w-full hover:bg-[#4edaed] mt-5 py-2 rounded-2xl bg-[#0072bc] hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Đăng ký
              </button>
            </div>
            <div className="flex items-center w-full">
              <h4>Bạn đã có tài khoản?</h4>
              <Link href="/login" className="text-blue-600 pl-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
