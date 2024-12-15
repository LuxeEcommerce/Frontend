'use client';
import { useState, useRef, useEffect } from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { PiPantsLight, PiTShirtLight, PiHoodieLight, PiSneakerLight } from "react-icons/pi";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import 'swiper/css';
import 'swiper/core';
export interface ProductlistingProps {
    title : string;
    type : string;
    timer?: string;
    timeZone?: string;
    fetchUrl?: string;
    addToCartUrl?: string;
    btnState?: boolean;
    swiperView?: boolean;
    isCategory?: boolean;
    categoryList?: any[];
}

const Productlisting: React.FC<ProductlistingProps> = ({title, type, timer = "0", timeZone = "Asia/Jakarta", fetchUrl = "0", addToCartUrl = "0" ,btnState = false, swiperView = true, isCategory = false, categoryList = [] }) =>{
    const [time, setTime] = useState<string>("");
    const [days, setDays] = useState<string>("");
    const [hour, setHour] = useState<string>("");
    const [minute, setMinute] = useState<string>("");
    const [second, setSecond] = useState<string>("");
    const [products, setProducts] = useState<any[]>([]);
    const [category, setCategory] = useState<any[]>([]);

    const randomizeImage = (prodname : string) => {
        const images = ["/prod1.png", "/prod2.png", "/prod3.png", "/prod4.png"];
        if(prodname === "Product 1"){
            return images[0];
        }else if(prodname === "Product 2"){
            return images[1];
        }else if(prodname === "Product 3"){
            return images[2];
        }else{
            return images[3];
        }
    }

    const interval = useRef<any>();

    const dummyData = [
        {
            id: 1,
            name: "Product 1",
            price: 200000,
            rating: 4,
            image: ""
        },
        {
            id: 2,
            name: "Product 2",
            price: 200000,
            rating: 4.5,
            image: ""
        },
        {
            id: 3,
            name: "Product 3",
            price: 200000,
            rating: 4.5,
            image: ""
        },
        {
            id: 4,
            name: "Product 4",
            price: 200000,
            rating: 4.5,
            image: ""
        },
        {
            id: 5,
            name: "Product 5",
            price: 200000,
            rating: 4.5,
            image: ""
        },
        {
            id: 6,
            name: "Product 6",
            price: 200000,
            rating: 4.5,
            image: ""
        }
    ];

    categoryList = [
        {
            id: 1,
            name: "T-Shirt",
            logo: <PiTShirtLight size={70} />,
            link: "/product/tshirt"
        },
        {
            id: 2,
            name: "Hoodie",
            logo: <PiHoodieLight size={70} />,
            link: "/product/hoodie"
        },
        {
            id: 3,
            name: "Pants",
            logo: <PiPantsLight size={70} />,
            link: "/product/pants"
        },
        {
            id: 4,
            name: "Shoes",
            logo: <PiSneakerLight size={70} />,
            link: "/product/shoes"
        }
    ];

    const addItemCart = async (id: number) => {
        if(btnState){
            try{
                const res = await axios.post( addToCartUrl, {
                    id: id
                });
            }catch(err){
                console.log(err);
            }
        }else{
            console.log("Button Disabled");
        }
    }

    useEffect(() => {
        const targetDate = new Date(timer).toLocaleString("en-US", { timeZone });
        const countDownDate = new Date(targetDate).getTime();

        interval.current = setInterval(() => {            
            const now = new Date().toLocaleString("en-US", { timeZone });
            const nowTime = new Date(now).getTime();
            const distance = countDownDate - nowTime;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(`${hours} : ${minutes} : ${seconds}`);
            setDays(days.toString());
            setHour(hours.toString());
            setMinute(minutes.toString());
            setSecond(seconds.toString());

            if (distance < 0) {
                clearInterval(interval.current);
                setTime("EXPIRED");
            }
        }, 1000);

        if(fetchUrl !== "0"){
            fetch(fetchUrl)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err));            
        }else{
            setProducts(dummyData);
        }

        
    }, []);

    const generateStars = (rating: number) => {
        let stars = [];
        const maxStars = 5;
    
        for (let i = 0; i < maxStars; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<span key={i} className="text-yellow-500">★</span>);
            } else if (i < rating) {
                stars.push(<span key={i} className="text-yellow-500">☆</span>);
            } else {
                stars.push(<span key={i} className="text-yellow-300">★</span>);
            }
        }
        return stars;
    };

    const renderSwiper = () => {
        return(
            <Swiper
                spaceBetween={50}
                slidesPerView={4.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3.5,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 4.5,
                        spaceBetween: 40
                    }
                }}
            >                        
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="w-[200px] h-[200px]">
                            <Image src={product.image || randomizeImage(product.name)} className="object-cover w-full h-[80%]" alt={product.name} width={800} height={400} />
                            <button className="bg-black text-white w-full py-2" onClick={addItemCart.bind(this, product.id)}>Add to Cart</button>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold">{product.name}</h1>
                            <p className="text-sm text-gray-500">Rp. {product.price}</p>
                            {generateStars(product.rating)}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    }

    const renderGrid = () => {
        return(
            <div className="grid grid-cols-4 gap-5">
                {products.map((product) => (
                    <div key={product.id}>
                        <div className="w-[200px] h-[200px]">
                            <Image src={product.image || randomizeImage(product.name)} className="object-cover w-full h-[80%]" alt={product.name} width={800} height={400} />
                            <button className="bg-black text-white w-full py-2" onClick={addItemCart.bind(this, product.id)}>Add to Cart</button>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold">{product.name}</h1>
                            <p className="text-sm text-gray-500">Rp. {product.price}</p>
                            {generateStars(product.rating)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const renderCategory = () => {
        return(
            <div className="grid grid-cols-4 gap-5">
                {categoryList.map((category) => (
                    <div key={category.id}>
                        <Link href={category.link}>        
                            <div className="duration-150 hover:shadow-xl w-[200px] h-[200px] border border-black flex flex-col justify-center items-center">
                                {category.logo}
                                <h1 className="text-lg font-semibold">{category.name}</h1>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

    

    return(
        <div className="w-full flex justify-end py-10">
            <div className="w-[calc(100%-100px)]">
                <div className="flex items-end mb-10">
                    <div className="mr-20">
                    <span className="flex items-center w-full mb-4"><div className="w-4 h-10 bg-blue-950 rounded-md mr-5"></div><p className="text-blue-700 font-semibold">{type}</p></span>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    </div>
                    {timer !== "0" ?
                    <div className="flex gap-2">
                        <div className="text-center">
                            <p>Day</p>
                            <p className="text-2xl text-blue-700 font-semibold">{days}</p>
                        </div>
                        <div className="text-center">
                            <p>Hour</p>
                            <p className="text-2xl text-blue-700 font-semibold">{hour}</p>
                        </div>
                        <div className="text-center">
                            <p>Minute</p>
                            <p className="text-2xl text-blue-700 font-semibold">{minute}</p>
                        </div>
                        <div className="text-center">
                            <p>Second</p>
                            <p className="text-2xl text-blue-700 font-semibold">{second}</p>
                        </div>                                                
                    </div>
                    : ""}
                </div>      
                <div className="mb-10">
                    {isCategory ? renderCategory() : (swiperView ? renderSwiper() : renderGrid())}
                </div>
                {isCategory ? "" :
                <div className="w-full flex justify-center">                    
                    <Link className="bg-[#1e3562] text-white py-2 px-5" href="/product">View All Products</Link>
                </div>
                }
            </div>
        </div>
    )
}

export default Productlisting;