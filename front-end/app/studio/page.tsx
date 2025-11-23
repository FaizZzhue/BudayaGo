import NavbarStudio from "@/components/common/navbar-studio";
import GayaKamu from "@/components/features/studio/gaya-kamu-section";
import Footer from "@/components/common/footer";
import AlurWastraSection from "@/components/features/studio/alur-wastra-section";
import { MotifShowcase } from "@/components/features/landing/motif-section";

export default function StudioPage() {
    return (
        <div className="min-h-screen bg-[#F3E0B6]">
            <NavbarStudio />

            <main className="pt-28 pb-16">
                <GayaKamu />
            </main>
            <AlurWastraSection />
            <MotifShowcase />
            <Footer />
        </div>
    );
}