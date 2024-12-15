import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from 'next/image';
import { FiPackage, FiTruck, FiHeadphones } from "react-icons/fi";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-end py-10 mt-28">
          <div className="w-[calc(100%-100px)]">
            <p className="">Home / About</p>
            <div className="flex">
              <div className="w-1/2 p-5">
                <h1 className="text-4xl font-bold">Our Story</h1>
                <p className="text-lg mt-5 text-justify">Luxe is a brand that was created to provide the best quality products to our customers. We believe that everyone deserves to have the best quality products at an affordable price. Our products are made with the best materials and are designed to last. We are committed to providing our customers with the best shopping experience possible. We are constantly working to improve our products and services to ensure that our customers are satisfied with their purchases. We are dedicated to providing our customers with the best quality products at an affordable price. We are committed to providing our customers with the best shopping experience possible. We are constantly working to improve our products and services to ensure that our customers are satisfied with their purchases.</p>
              </div>
              <div className="w-1/2 aspect-square bg-cover bg-top p-5">
                <Image src="/placehold.svg" alt="Picture of the author" className="w-full bg-cover" width={500} height={500} />
              </div>
            </div>

            <div className="flex mt-10">
              <div className="w-full p-5">
                <h1 className="text-4xl font-bold">Our Values</h1>
                <div className="flex mt-5">
                  <div className="w-1/3 p-5">
                    <FiPackage className="text-5xl" />
                    <h1 className="text-2xl font-bold">Quality</h1>
                    <p className="text-lg mt-5 text-justify">We are committed to providing our customers with the best quality products at an affordable price. We believe that everyone deserves to have the best quality products at an
                    affordable price. We are dedicated to providing our customers with the best shopping experience possible. We are constantly working to improve our products and services to ensure that our customers are satisfied with their purchases.</p>
                  </div>
                  <div className="w-1/3 p-5">
                    <FiTruck className="text-5xl" />
                    <h1 className="text-2xl font-bold">Service</h1>
                    <p className="text-lg mt-5 text-justify">We are committed to providing our customers with the best quality products at an affordable price. We believe that everyone deserves to have the best quality products at an
                    affordable price. We are dedicated to providing our customers with the best shopping experience possible. We are constantly working to improve our products and services to ensure that our customers are satisfied with their purchases.</p>
                  </div>
                  <div className="w-1/3 p-5">
                  <FiHeadphones className="text-5xl" />
                    <h1 className="text-2xl font-bold">Support</h1>
                    <p className="text-lg mt-5 text-justify">We are committed to providing our customers with the best quality products at an affordable price. We believe that everyone deserves to have the best quality products at an
                    affordable price. We are dedicated to providing our customers with the best shopping experience possible. We are constantly working to improve our products and services to ensure that our customers are satisfied with their purchases.</p>
                  </div>
                </div>
              </div>
            </div>              
          </div>      
      </div>
      <Footer />
    </div>    
  );
}
