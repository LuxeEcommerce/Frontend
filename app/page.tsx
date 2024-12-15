import Navbar from "./components/Navbar";
import Productlisting from "./components/Productlisting";
import Bannerads from "./components/Bannerads";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Productlisting title="Flash Sale&apos;s" type="Today&apos;s" timer="2024-11-19T23:00:00Z"/>
      <Productlisting title="Browse By Category" type="Categories" isCategory={true} />
      <Productlisting title="Best Selling Products" type="This Month" />   
      <Bannerads split={1} imgList={["/placehold.svg"]} titleList={["Shop Now"]} descList={["Get the best deals on our products"]} />
      <Productlisting title="Explore Our Products" type="Our Products"  swiperView={false}/>   
      <Bannerads split={2} imgList={["/placehold.svg", "/placehold.svg"]} titleList={["Shop Now", "Shop Now"]} descList={["Get the best deals on our products", "Get the best deals on our products"]} />
      <Footer />
    </div>    
  );
}
