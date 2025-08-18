import Image from "next/image";
import Hero from "@/components/Hero";
import Guest from "@/components/Guest";
import Footer from "@/components/Footer";
import Host from "@/components/Host";
import ReviewSlider from "@/components/ReviewSlider";
import ImageSlider2 from "@/components/ImageSlider2";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Guest/>
    <Host/>
    <ReviewSlider/>
    <ImageSlider2/>
    <Footer/>
    
   </div>
  );
}
