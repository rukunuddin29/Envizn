import Image from "next/image";
import Hero from "@/components/Hero";
import Guest from "@/components/Guest";
import Footer from "@/components/Footer";
import Host from "@/components/Host";
import ReviewSlider from "@/components/ReviewSlider";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Guest/>
    <Host/>
    <ReviewSlider/>
    <Footer/>
    
   </div>
  );
}
