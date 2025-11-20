import  Navbar  from "@/components/common/navbar";
import Image from "next/image";
import LandingPage from "./public/page";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
      <main className="bg-[#F3E0B6]">
        <Navbar />
        <LandingPage />
        <Footer />
      </main>
  );
}
