'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from 'next/image';
import axios from "axios";
import { redirect } from "next/navigation";

interface CartItem {
  productId: number;
  productName: string;
  quantity: number;
  totalprice: string;
}

interface ItemsProps {
  productId: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  rating?: number;
  image?: string;
}

export default function Mycart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<ItemsProps[]>([]);

  const getCart = async () =>{
    try {
      const res = await axios.get(process.env.API_USER_FUNCTIONS + 'userfunc/cart', {
        withCredentials: true,
      });
      
      if(res.status === 200) {
        setLoading(false);
        setCartItems(res.data);
      }
    } catch (error) {
      console.log(error);
    }

    try {

    } catch (error) {
      console.log(error);
    }
  }

  const renderEmptyCart = () => {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-100px)]">
        <h1 className="text-4xl font-semibold">No items in cart</h1>
      </div>
    )
  }

  const createOrder = async () => {
    try {
      const res = await axios.post(process.env.API_PAYMENT_FUNCTIONS + 'payment/makeorder', {
        withCredentials: true,
      });

      if(res.status === 200) {
        console.log('Order created');
        redirect('/order');
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-end py-10 mt-28">
        <div className="w-[calc(100%-100px)] pr-10">
          <h1 className="text-4xl font-semibold">My Cart</h1>
          <div className="flex flex-col mt-5">
            <div className="flex border-b-2 border-black p-2">
              <div className="w-1/4">
                <h1>Product ID</h1>
              </div>
              <div className="w-1/4">
                <h1>Quantity</h1>
              </div>
              <div className="w-1/4">
                <h1>Price</h1>
              </div>
            </div>
            {cartItems.length === 0 ? renderEmptyCart() :
            cartItems.map((item, index) => {
              return (
                <div className="flex border-b-2 border-black p-2" key={index}>
                  <div className="w-1/4">
                    <h1>{item.productId}</h1>
                  </div>
                  <div className="w-1/4">
                    <h1>{item.quantity}</h1>
                  </div>
                  <div className="w-1/4">
                    <h1>$ {item.totalprice}</h1>
                  </div>
                </div>
              )
            })}

            <div className="flex justify-end mt-5">
              <h1>Total: $ {cartItems.reduce((acc, item) => acc + parseFloat(item.totalprice), 0).toFixed(2)}</h1>                 
            </div>

            <div className="flex justify-end mt-5">
              <button className="bg-black text-white p-2 rounded-md" onClick={createOrder}>Checkout</button>
            </div>

          </div>
        </div>      
      </div>
      <Footer />
    </div>    
  );
}
