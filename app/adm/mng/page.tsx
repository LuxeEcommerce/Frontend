'use client'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

import { useState, useEffect } from "react";

export default function Admindashboard() {
  const [profile, setProfile] = useState({} as any);
  const [productData, setProductData] = useState({
    productName: '',
    productDescription: '',
    productPrice: 0,
    productImage: '',
    productStock: 0,
    productCategory: '',
  });

  const checkAdmin = async () => {
    try {
      const res = await axios.post(process.env.API_AUTH + 'userauth/verifyadmin', 
      {},
      {
        withCredentials: true,
      });

      if(res.status === 200) {
        console.log('authorized')
      }
    } catch (error) {
      window.location.href = '/profile';
    }
  }

  const handleAddProduct = async () => {
    try {
      const res = await axios.post(process.env.API_USER_FUNCTIONS + 'userfunc/product/create', productData, {
        withCredentials: true,
      });

      if(res.status === 200) {
        console.log('Product added');
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkAdmin();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-end py-10 mt-28 h-[100vh]">
        <div className="w-[calc(100%-100px)] flex justify-center">
          <div className="w-[90%] bg-white shadow-xl rounded-md p-5">
          <h1 className="text-3xl font-thin mb-5">Admin</h1>
          {/* Product manage           */}
          <h1 className="text-xl font-thin">Product Management</h1>
          <div className="border shadow-inner p-1 rounded-sm w-1/2">            
            {/* add product */}
            <h1 className="text-xl font-thin">Add Product</h1>
            <div className="flex flex-col">
              <label htmlFor="productName" className="text-lg">Product Name</label>
              <input type="text" id="productName" className="border border-black p-2 mt-2" onChange={(e) => setProductData({...productData, productName: e.target.value})}/>
              <label htmlFor="productDescription" className="text-lg mt-4">Product Description</label>
              <input type="text" id="productDescription" className="border border-black p-2 mt-2" onChange={(e) => setProductData({...productData, productDescription: e.target.value})}/>

              <label htmlFor="productPrice" className="text-lg mt-4">Product Price</label>
              <input type="number" id="productPrice" className="border border-black p-2 mt-2" onChange={(e) => setProductData({...productData, productPrice: parseFloat(e.target.value)})}/>

              <label htmlFor="productImage" className="text-lg mt-4">Product Image URL</label>
              <input type="text" id="productImage" className="border border-black p-2 mt-2" onChange={(e) => setProductData({...productData, productImage: e.target.value})}/>

              <label htmlFor="productStock" className="text-lg mt-4">Product Stock</label>
              <input type="number" id="productStock" className="border border-black p-2 mt-2" onChange={(e) => setProductData({...productData, productStock: parseInt(e.target.value)})}/>

              <label htmlFor="productCategory" className="text-lg mt-4">Product Category</label>
              <input type="text" id="productCategory" className="border border-black p-2 mt-2" onChange={(e) => setProductData({...productData, productCategory: e.target.value})}/>

              <button className="bg-blue-500 text-white p-2 mt-4" onClick={handleAddProduct}>Add Product</button>
            </div>

          </div>
          </div>
        </div>      
      </div>
      <Footer />
    </div>    
  );
}
