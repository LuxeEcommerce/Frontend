'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from "react";

interface dataProps {
  productId: number;
  productName: string;
  productPrice: number;
  rating: number;
  image?: string;
}

const Product: React.FC<{}> = () => {
  const [data, setData] = useState([] as dataProps[]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(process.env.API_PRODUCT_FUNCTIONS + "productfunc/product");
      setLoading(false);
      setData(res.data);      
    } catch (err) {
      console.log(err);
    }
  }

  const randomizeImage = () => {
    const images = ["/prod1.png", "/prod2.png", "/prod3.png", "/prod4.png"];
    return images[Math.floor(Math.random() * images.length)];
  }

  const searchProduct = async (productName: string) => {
    try {
      const res = await axios.post(process.env.API_PRODUCT_FUNCTIONS + `productfunc/product/search`,{
        productName
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  const routeProduct = async (productId: number) => {
    window.location.href = `/product/item?productId=${productId}`;
  }

  return (
    <div>
      <Navbar />      
      <div className="mt-32 w-full p-10">
        {loading && <div className="text-center text-3xl font-bold py-32 w-full h-52 bg-slate-300 animate-pulse">Loading...</div>}
        <div className="flex">
          <input type="text" placeholder="Search product" className="w-[80%] p-2 border border-gray-300 rounded-md" onChange={(e) => setSearch(e.target.value)} />
          <button className="bg-black text-white w-[20%] py-2" onClick={() => searchProduct(search)}>Search</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((product) => (
            <div key={product.productId} className="bg-white p-4">
              <div className="w-[200px] h-[200px]">
                  {product.productName.includes("Hoodie") && (
                    <Image 
                      src={product.image || "/prod4.png"} 
                      className="object-cover w-full h-[80%]" 
                      alt={product.productName} 
                      width={800} 
                      height={400} 
                    />
                  )}
                  {product.productName.includes("Product") && (
                    <Image 
                      src={product.image || randomizeImage()} 
                      className="object-cover w-full h-[80%]" 
                      alt={product.productName} 
                      width={800} 
                      height={400} 
                    />
                  )}
                  <button className="bg-black text-white w-full py-2" onClick={() => routeProduct(product.productId)}>Buy</button>
              </div>
              <div>
                  <h1 className="text-lg font-semibold">{product.productName}</h1>
                  <p className="text-sm text-gray-500">$ {product.productPrice}</p>
                  {/* {generateStars(product.rating)} */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>    
  );
}

export default Product;
