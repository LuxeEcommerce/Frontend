'use client'
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from 'next/image';

export default function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post(process.env.API_AUTH + 'userauth/login', {
        username: username,
        password: password
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(res.status === 200) {
        console.log('Login successful');
      }
    } catch (error) {
      console.log(error);
    }    
  }

  const handleusernameChange = (e: any) => {
    setusername(e.target.value);
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-end py-10 mt-28">
          <div className="w-[calc(100%-100px)]">            
            <div className="flex mt-5 justify-between p-2">
              <div className="w-1/2">
                <h1 className="text-4xl font-semibold">Login</h1>
                <div className="flex flex-col">
                  <label htmlFor="username" className="text-lg">Username</label>
                  <input type="text" id="username" className="border border-black p-2 mt-2" onChange={handleusernameChange}/>
                </div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="password" className="text-lg">Password</label>
                  <input type="password" id="password" className="border border-black p-2 mt-2" onChange={handlePasswordChange}/>
                </div>
                <div className="flex mt-5">
                  <button onClick={handleLogin} className="bg-black text-white w-1/2 p-2 border hover:bg-white hover:text-black hover:shadow-md duration-150">Login</button>
                </div>
                <div className="flex mt-5">
                  <a href="/register" className="text-blue-500">Don't have an account? Register here</a>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <Image src="/placehold.svg" alt="login" width={500} height={500} />
              </div>
            </div>
          </div>      
      </div>
      <Footer />
    </div>    
  );
}
