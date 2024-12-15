'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

interface categoryprops{

}

const Categorylist: React.FC<categoryprops> = () =>{
    const pathname = usePathname();
    const category = pathname.split("/").pop();
    return(
        <div className='text-black'>
            <Navbar />            
            <Footer/>
        </div>
    )
}

export default Categorylist;
