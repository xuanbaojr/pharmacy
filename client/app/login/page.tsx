"use client";

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import img from "@/assets/image/login.png";
import { login } from "@/api/account";
import { useRouter } from "next/navigation";
import { useAuth } from '@/hooks/AuthContext';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login: authLogin } = useAuth();
  const router = useRouter(); 
  const toastOptions = {
    autoClose: 2000,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login({ UserName: username, Password: password });
      if(response.status === 200)
      {   
          const { token, userName } = response.data;
          localStorage.setItem('Username', userName);
          authLogin(token);
          toast.success("Đăng nhập thành công!", toastOptions);
          setTimeout(() => {
             router.push('/');
          }, toastOptions.autoClose); 
        }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Đăng nhập thất bại!", toastOptions);
    }
  };

  return (
    <div className="h-screen flex justify-center">
      <div  
        className="hidden lg:flex w-full lg:w-1/2 bg-cover justify-around items-center"
        style={{ backgroundImage: `url(${img.src})` }}
      >
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-[#0072bc] font-bold text-4xl font-sans">
            Pharmacy
          </h1>
          <p className="text-[#0072bc] mt-1">Chào mừng bạn đến với website!!!</p>
          <div className="flex justify-center lg:justify-start mt-6">
            <Link className="hover:bg-[#0072bc] hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-[#0072bc] mt-4 px-4 py-2 rounded-2xl font-bold mb-2" href="/">
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
              Đăng nhập
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-8 text-center">
              Hãy đăng nhập bằng tài khoản của bạn!
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
                className="pl-2 w-full outline-none border-none"
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center border-2 mb-4 py-2 px-3 relative rounded-2xl outline-none ring-blue-500 border-blue-300">
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
                id="password"
                className="pl-2 w-full outline-none border-none"
                type={visible ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                required
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-3 cursor-pointer"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
            <button
                type="submit"
                className="block w-full hover:bg-[#4edaed] mt-5 py-2 rounded-2xl bg-[#0072bc] hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Đăng nhập
              </button>
            <div className="flex items-center w-full">
              <h4>Bạn chưa có tài khoản?</h4>
              <Link href="/register" className="text-blue-600 pl-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                Đăng ký ngay
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;