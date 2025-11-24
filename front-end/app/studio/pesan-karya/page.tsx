import Footer from "@/components/common/footer";
import NavbarStudio from "@/components/common/navbar-studio";
import PesanKaryaSection from "@/components/features/studio/pesan-karya-section";

export default function StudioPage() {
    return (
        <div className="min-h-screen bg-[#F3E0B6]">
            <NavbarStudio />
            <PesanKaryaSection />
            <Footer />
        </div>
    );
}