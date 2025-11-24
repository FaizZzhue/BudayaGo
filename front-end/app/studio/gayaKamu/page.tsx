import NavbarStudio from "@/components/common/navbar-studio";
import PesanKaryaSection from "@/components/features/studio/pesan-karya-section";
import Footer from "@/components/common/footer";

export default function StudioPage() {
    return (
        <div className="min-h-screen bg-[#F3E0B6]">
            <NavbarStudio />
            <PesanKaryaSection />
            <Footer />
        </div>
    );
}