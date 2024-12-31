'use client'
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from 'next/image';

export default function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const res = await axios.post(process.env.API_AUTH + 'userauth/register', {
        username: username,
        password: password,
        email: email,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(res.status === 201) {
        window.location.href = '/login';
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

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-end py-10 mt-28">
          <div className="w-[calc(100%-100px)]">            
            <div className="flex mt-5 justify-between p-2">
              <div className="w-1/2">
                <h1 className="text-4xl font-semibold">Register</h1>
                <div className="flex flex-col">
                  <label htmlFor="username" className="text-lg">Username</label>
                  <input type="text" id="username" className="border border-black p-2 mt-2" onChange={handleusernameChange}/>
                </div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="password" className="text-lg">Password</label>
                  <input type="password" id="password" className="border border-black p-2 mt-2" onChange={handlePasswordChange}/>
                </div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="email" className="text-lg">Email</label>
                  <input type="text" id="email" className="border border-black p-2 mt-2" onChange={handleEmailChange}/>
                </div>
                <div className="flex mt-5">
                  <button onClick={handleRegister} className="bg-black text-white w-1/2 p-2 border hover:bg-white hover:text-black hover:shadow-md duration-150">Register</button>
                </div>
                <div className="flex mt-5">
                  <a href="/login" className="text-blue-500">Already have an account? Sign in here</a>
                </div>
              </div>
              <div className="w-[45%] flex justify-center shadow-xl">
                <Image src="/rlimg.png" alt="register" width={500} height={500} className="shadow-xl w-full object-cover" />
              </div>
            </div>
          </div>      
      </div>
      <Footer />
    </div>    
  );
}
