import NavbarDashboard from "@/components/common/navbar-dashboard";
import ProductSelectionSection from "@/components/features/studio/product-selection-section";
import DuniaBatikSection from "@/components/features/studio/dunia-batik-section";
import PesanKaryaSection from "@/components/features/studio/pesan-karya-section";

export default function StudioPage() {
    return (
        <div className="min-h-screen bg-[#e6c599]">
            <NavbarDashboard />

            <main className="pt-28 pb-16">
                <ProductSelectionSection />
            </main>
            <DuniaBatikSection />
            <PesanKaryaSection />
        </div>
    );
}