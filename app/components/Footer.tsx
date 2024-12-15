'use client';
import Link from "next/link"
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest} from "react-icons/fa"
import React from "react";

export interface FooterProps {
    facebookLink?: string;
    twitterLink?: string;
    instagramLink?: string;
    youtubeLink?: string;
    pinterestLink?: string;
    email?: string;
}

const Footer: React.FC<FooterProps> = ({facebookLink = "https://www.facebook.com/", twitterLink = "https://x.com/", instagramLink = "https://www.instagram.com/", youtubeLink = "https://www.youtube.com/", pinterestLink = "https://www.pinterest.com/", email = "default@gmail.com"}) =>{
    return(
        <div>
            <div className="bg-gray-800 text-white pt-10 pb-10">
                <div className="flex justify-between px-20">
                    <div className="w-[20%]">
                        <h1 className="text-3xl font-bold">Luxe</h1>
                        <p className="text-lg">Get the best deals on our products</p>
                    </div>
                    <div className="w-[20%]">
                        <h1 className="text-3xl font-bold">About Us</h1>
                        <ul>
                            <li>Our Story</li>
                            <li>FAQ</li>
                            <li>Shipping</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <h1 className="text-3xl font-bold">Contact Us</h1>
                        <ul>
                            <li>Phone: 123-456-7890</li>
                            <li>Email: {email}</li>
                        </ul>
                    </div>
                    <div className="w-[20%]">
                        <h1 className="text-3xl font-bold mb-5">Follow Us</h1>
                        <ul className="flex justify-between">
                            <li><Link href={facebookLink}><FaFacebook /></Link></li>
                            <li><Link href={twitterLink}><FaTwitter /></Link></li>
                            <li><Link href={instagramLink}><FaInstagram /></Link></li>
                            <li><Link href={youtubeLink}><FaYoutube /></Link></li>
                            <li><Link href={pinterestLink}><FaPinterest /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 text-white text-center pt-5 pb-5">
                <p>&copy; 2024 Luxe. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;