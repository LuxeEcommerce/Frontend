import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";


export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-end py-10 mt-28">
          <div className="w-[calc(100%-100px)]">
            <p className="">Home / Contact</p>
            <div className="flex">
              <div className="w-1/2 p-5">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-lg mt-5 text-justify">If you have any questions or concerns, please feel free to contact us. We are here to help you with any questions you may have. You can reach us by phone, email, or by filling out the form below. We will get back to you as soon as possible. We look forward to hearing from you!</p>
                <div className="mt-10">
                  <h1 className="text-2xl font-bold">Follow Us:</h1>
                  <ul className="flex justify-between mt-10">
                    <li><a href="https://www.facebook.com/"><FaFacebook size={40} /></a></li>
                    <li><a href="https://www.twitter.com/"><FaTwitter size={40} /></a></li>
                    <li><a href="https://www.instagram.com/"><FaInstagram size={40} /></a></li>
                    <li><a href="https://www.youtube.com/"><FaYoutube size={40} /></a></li>
                    <li><a href="https://www.pinterest.com/"><FaPinterest size={40} /></a></li>
                  </ul>
                </div>
                </div>
              </div>
          </div>
      </div>
      <Footer />
    </div>    
  );
}
