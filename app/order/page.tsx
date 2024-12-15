'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Image from 'next/image';
import axios from "axios";

export default function Order() {
  const [orders, setOrders] = useState([] as any);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(process.env.API_USER_FUNCTIONS + 'userfunc/order', {
        withCredentials: true,
      });

      if(res.status === 200) {
        setOrders(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const createPaypalOrder = async (orderId : number) => {
    try {
      const res = await axios.post(process.env.API_PAYMENT_FUNCTIONS + 'payment/paypalinvoice', 
      {
        orderId: orderId
      },
      {
        withCredentials: true,
      });

      if(res.status === 200) {
        console.log('Paypal order created');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const shuffleString = (str: string) => {
      const arr = str.split('');
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(i / 2);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr.join('');
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-end py-10 mt-28">
        <div className="w-[90%]">
          <h1 className="text-3xl font-thin mb-5">My Orders</h1>
          {orders.length > 0 && orders.map((order: any) => (
            <div key={order.orderId} className="bg-white shadow-xl rounded-md p-5 mb-5 w-[90%] flex justify-between">
              <div className="w-1/2">
                <h1 className="text-xl font-thin">Order ID</h1>
                <div className="border shadow-inner p-1 rounded-sm w-1/2">            
                  <p>{order.orderId}|{shuffleString(order.userId)}</p>
                </div>
                <h1 className="text-xl font-thin">Status</h1>
                <div className="border shadow-inner p-1 rounded-sm w-1/2">            
                  <p>{order.orderStatus}</p>
                </div>
                <h1 className="text-xl font-thin">Total Price</h1>
                <div className="border shadow-inner p-1 rounded-sm w-1/2">            
                  <p>$ {order.totalPrice}</p>
                </div>
              </div>
              {order.orderStatus === 'pending' ? (
              <div className="w-1/2">
                <h1 className="text-xl font-thin text-center">Payment</h1>
                <button className="bg-black text-white p-2 mt-5" onClick={() => createPaypalOrder(order.orderId)}>Pay with Paypal</button>
              </div>
              ) : 
              <div className="w-1/2 flex items-center justify-center">
                <div>
                <p className="text-blue-800 text-center">Payment already made</p>
                <p className="text-blue-800 text-center">Shipping in progress</p>
                </div>
              </div>
              }
            </div>
          ))}
        </div>      
      </div>
      <Footer />
    </div>    
  );
}
