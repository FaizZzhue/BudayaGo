import Navbar from "@/components/common/navbar";
import ProductSelectionSection from "@/components/features/studio/product-selection-section";

export default function StudioPage() {
    return (
        <div className="min-h-screen bg-[#e6c599]">
            <Navbar />

            <main className="pt-28 pb-16">
                <ProductSelectionSection />
            </main>
        </div>
    );
}