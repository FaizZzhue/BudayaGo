import NavbarSection from "@/components/navbar-section";
import HeroSection from "@/components/common/hero-section";
import Image from "next/image";
import BatikSection from "../components/common/batik-section";

export default function Home() {
  return (
      <main className="bg-[#F3E0B6]">
        <NavbarSection />
        <HeroSection />
        <BatikSection />
      </main>
  );
}
