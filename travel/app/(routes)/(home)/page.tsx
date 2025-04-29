import RecentProduct from "@/components/sections/recent/RecentProduct";
import Hero from "./_components/Hero/Hero";
import AboutPage from "../about/page";
import SectionOne from "./_components/Section/SectionOne";
import SectionTwo from "./_components/Section/SectionTwo";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="min-h-36"></div>
      <SectionOne />
      <div className="min-h-36"></div>
      <SectionTwo />
      <div className="min-h-24"></div>
      <RecentProduct />
      <div className="min-h-96"></div>
    </div>
  );
}
