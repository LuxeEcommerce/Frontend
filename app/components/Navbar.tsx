'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FiShoppingCart, FiHeart, FiSearch, FiUser } from "react-icons/fi";

import React from "react";

export interface NavbarProps {
    // TODO
}

const Navbar: React.FC<NavbarProps> = () =>{
    const [link, setLink] = useState<string>("");

    useEffect(() => {
        const homeItem = document.getElementById("home-item");
        const aboutItem = document.getElementById("about-item");
        const contactItem = document.getElementById("contact-item");
        const productItem = document.getElementById("product-item");

        const url = window.location.href;
        if(url.includes("about")){
            aboutItem?.classList.add("border-b", "border-blue-800")
            homeItem?.classList.remove("border-b", "border-blue-800")
            contactItem?.classList.remove("border-b", "border-blue-800")
            productItem?.classList.remove("border-b", "border-blue-800")
        }else if(url.includes("contact")){
            contactItem?.classList.add("border-b", "border-blue-800")
            homeItem?.classList.remove("border-b", "border-blue-800")
            aboutItem?.classList.remove("border-b", "border-blue-800")
            productItem?.classList.remove("border-b", "border-blue-800")
        }else if(url.includes("product")){
            productItem?.classList.add("border-b", "border-blue-800")
            homeItem?.classList.remove("border-b", "border-blue-800")
            aboutItem?.classList.remove("border-b", "border-blue-800")
            contactItem?.classList.remove("border-b", "border-blue-800")
        }else{
            homeItem?.classList.add("border-b", "border-blue-800")
            aboutItem?.classList.remove("border-b", "border-blue-800")
            contactItem?.classList.remove("border-b", "border-blue-800")
            productItem?.classList.remove("border-b", "border-blue-800")
        }

        
    }, []);
    return(
        <nav className="fixed top-0 left-0 pt-10 px-10 pb-5 w-full border border-b border-gray-300 z-50 bg-white">
            <div className="pc-nav flex justify-between px-10 w-full">
                <Image src="/logo.svg" alt="logo" width={100} height={50} />                
                <ul className="flex space-x-10 text-black font-bold">
                    <li><Link id="home-item" className="border-b border-blue-800" href="/">Home</Link></li>
                    <li><Link id="product-item" href="/product">Product</Link></li>
                    <li><Link id="about-item" href="/about">About</Link></li>
                    <li><Link id="contact-item" href="/contact">Contact</Link></li>
                </ul>
                <div className="flex space-x-5">
                    <FiSearch className="text-black text-2xl" />
                    <Link href="/collection"><FiHeart className="text-black text-2xl" /></Link>
                    <Link href="/cart"><FiShoppingCart className="text-black text-2xl" /></Link>
                    <Link href="/profile"><FiUser className="text-black text-2xl" /></Link>
                </div>
            </div>

            <div className="mobile-nav hidden">
                <Image src="/logo.svg" alt="logo" width={50} height={25} />
            </div>
        </nav>
    )
}

export default Navbar;