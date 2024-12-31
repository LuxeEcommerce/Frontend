'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from 'next/image';
import axios from "axios";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Profile() {
  const [profile, setProfile] = useState({} as any);
  const [jwt, setJwt] = useState('');

  const getToken = async () => {
    for (const cookie of document.cookie.split('; ')) {
      const [name, value] = cookie.split('=');
      if (name === 'token') {
        setJwt(value);
      }
    }
  }

  const fetchProfile = async () => {
    try {
      const res = await axios.get(process.env.API_USER_FUNCTIONS + 'userfunc/profile', {
        withCredentials: true,
      });

      if(res.status === 200) {
        setProfile(res.data);
        getToken();
      }
    } catch (error) {
      window.location.href = '/login';
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-end py-10 mt-28 h-[100vh]">
        <div className="w-[calc(100%-100px)] flex justify-center">
          <div className="w-[90%] bg-white shadow-xl rounded-md p-5">
          <h1 className="text-3xl font-thin mb-5">My Profile</h1>
            <h1 className="text-xl font-thin">Username</h1>
            <div className="border shadow-inner p-1 rounded-sm w-1/2">            
              <p>{profile.username}</p>
            </div>
            <h1 className="text-xl font-thin">Email</h1>
            <div className="border shadow-inner p-1 rounded-sm w-1/2">            
              <p>{profile.email}</p>
            </div>
            <h1 className="text-xl font-thin">Address</h1>
            <div className="border shadow-inner p-1 rounded-sm w-1/2">            
              <p>{profile.address}</p>
            </div>
            <h1 className="text-xl font-thin">Balance</h1>
            <div className="border shadow-inner p-1 rounded-sm w-1/2">            
              <p>$ {profile.balance}</p>
            </div>
            <div className="flex justify-between mt-5">
              <Link href="/order" className="bg-black text-white p-2 rounded-md cursor-pointer">My Order</Link>
              <Link href="/cart" className="bg-black text-white p-2 rounded-md cursor-pointer">My Cart</Link>            
              <form method="POST" action={process.env.API_AUTH + 'userauth/logout'}>
                <button type="submit" className="bg-black text-white p-2 rounded-md cursor-pointer">Logout</button>
              </form>
            </div>
          </div>
        </div>      
      </div>
      <Footer />
    </div>    
  );
}
