'use client'
import React from 'react';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {FiTruck, FiPackage} from 'react-icons/fi';
import {Alertdialog} from '@/app/components/Alertdialog';
import Image from 'next/image';
import axios from 'axios';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

interface dataProps{
    productId: number;
    productName: string;
    productPrice: number;
    productDescription: string;
    rating?: number;
    image?: string;
}

const Categorylist: React.FC<{}> = () => {
    const searchParams = useSearchParams();
    const productId = searchParams.get("productId");    
    const [data, setData] = useState({} as dataProps);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(1);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            const res = await axios.get(process.env.API_PRODUCT_FUNCTIONS + `productfunc/product/${productId}`);
            setLoading(false);
            setData(res.data);      
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    const randomizeImage = () => {
        const images = ["/prod1.png", "/prod2.png", "/prod3.png", "/prod4.png"];
        return images[Math.floor(Math.random() * images.length)];
    }
    const addToCart = async (productId: number, amount : number) => {        
        try {            
            const res = await axios.post(process.env.API_USER_FUNCTIONS + `userfunc/addtocart/`, 
                {  
                    quantity: amount,
                    productId: productId,
                    totalprice: data.productPrice * amount
                },
                {
                    withCredentials: true,
                }
            );
            if(res.status === 200){
                setOpen(true);
            }
        } catch (err : any){
            setError(true);
        }
    }

    const directToLogin = () => {
        redirect('/login');
    }

    useEffect(() => {
        if(productId){                        
            fetchData();
        }
    }, [productId]);

    return(
        <div className='text-black'>
            <Navbar />            
            <div className="mt-36 w-full">
                <div className="flex w-full justify-end">
                    <Alertdialog title='Success' description='Item added to cart!' state={open} setVisible={setOpen} />
                    <Alertdialog title='Error' description='Please login to add items to cart!' state={error} setVisible={setError} additionalFunction={[directToLogin]}/>
                    {loading ? <div className='w-full bg-slate-300 animate-pulse justify-center h-80 flex items-center'><div>Loading...</div></div> : 
                    <div className="w-[90%] flex mb-24">
                        <div className="w-1/2">
                            <Image src={randomizeImage()} alt={data.productName} className='border border-black w-[500px] h-[500px] object-cover' />
                        </div>                     
                        <div className='w-1/2 border border-black px-10'>
                            <div className='border-b border-slate-600 pb-3'>
                                <h1 className='text-3xl font-semibold'>{data.productName}</h1>
                                <p className='text-2xl font-thin'>${data.productPrice}</p>
                                <p className='text-sm font-light'>{data.productDescription}</p>
                            </div>
                            <div className='flex mt-5'>
                                <div className='flex w-1/2 '>
                                    <button id='decrement' onClick={() => setAmount((prevAmount) => Math.max(1, prevAmount - 1))} className='bg-black text-white w-1/3 border hover:bg-white hover:text-black hover:shadow-md duration-150'>-</button>
                                    <div className='w-1/3 flex justify-center items-center'><p>{amount}</p></div>
                                    <button id='increment' onClick={() => setAmount(amount + 1)} className='bg-black text-white w-1/3 border hover:bg-white hover:text-black hover:shadow-md duration-150'>+</button>
                                </div>
                                <button onClick={() => addToCart(data.productId, amount)} className='bg-black text-white w-1/2 p-2 border hover:bg-white hover:text-black hover:shadow-md duration-150'>Add to Cart</button>
                            </div>
                            <div className='mt-12'>
                                <div className='flex w-1/2 p-3 border items-center'>
                                    <FiTruck className='text-2xl'/>
                                    <p className='text-lg'>Ships within 1-2 days</p>
                                </div>
                                <div className='flex w-1/2 p-3 border shadow-lg items-center'>
                                    <FiPackage className='text-2xl'/>
                                    <p className='text-lg'>Free Shipping</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Categorylist;
