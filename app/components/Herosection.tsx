'use client';
import React from "react";
import { Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/core';
import 'swiper/css/pagination';

export interface HerosectionProps {
    // TODO
}

const Herosection: React.FC<HerosectionProps> = () =>{
    return(
        <div className="w-full mt-[85px] flex justify-between px-20 mb-10">
            <div className="border-r border-gray-300 pt-10 pr-20">
                <ul>
                    <li>Woman's Fashion</li>
                    <li>Man's Fashion</li>
                </ul>
            </div>
            <div className="w-[70%] h-[400px] pt-10">
            <Swiper
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                modules={[Pagination]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image src="/placehold.svg" className="object-cover h-[350px]" alt="hero1" width={800} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/placehold.svg" className="object-cover h-[350px]" alt="hero2" width={800} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/placehold.svg" className="object-cover h-[350px]" alt="hero3" width={800} height={400} />                    
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default Herosection;