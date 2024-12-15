'use client';
import React from "react";
import Image from "next/image";
export interface BanneradsProps {
    split?: number;
    imgList: string[];
    titleList: string[];
    descList: string[];
}

const Bannerads: React.FC<BanneradsProps> = ({split = 1, imgList, titleList, descList}) =>{

    
    return(
        <div>
            <div className="flex justify-between px-20">
                {split === 1 ? (
                    <div className="w-[70%] h-[400px] pt-10">
                        <Image src="/placehold.svg" className="object-cover h-[350px]" alt="banner1" width={800} height={400} />
                    </div>
                ) : (
                    <div className="w-[45%] h-[400px] pt-10">
                        <Image src="/placehold.svg" className="object-cover h-[350px]" alt="banner1" width={800} height={400} />
                    </div>
                )}
                {split === 1 ? (
                    <div className="border-l border-gray-300 pt-10 pl-20">
                        <h1 className="text-3xl font-bold">Shop Now</h1>
                        <p className="text-lg">Get the best deals on our products</p>
                    </div>
                ) : (
                    <div className="border-l border-gray-300 pt-10 pl-20">
                        <h1 className="text-3xl font-bold">{titleList[0]}</h1>
                        <p className="text-lg">{descList[0]}</p>
                    </div>
                )}
            </div>
            {split === 2 && (
                <div className="flex justify-between px-20 mt-10 mb-20">
                    <div className="w-[45%] h-[400px] pt-10">
                        <Image src="/placehold.svg" className="object-cover h-[350px]" alt="banner2" width={800} height={400} />
                    </div>
                    <div className="border-l border-gray-300 pt-10 pl-20">
                        <h1 className="text-3xl font-bold">{titleList[1]}</h1>
                        <p className="text-lg">{descList[1]}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Bannerads;