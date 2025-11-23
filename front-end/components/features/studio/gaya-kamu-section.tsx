"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useRef } from "react";



export default function GayaKamu() {

    type Product = {
        id: string;
        name: string;
        description: string;
        cta: string;
    };

    const products: Product[] = [
        {
            id: "kain-batik",
            name: "Kain Batik",
            description: "Cocok untuk pakaian dan dekorasi",
            cta: "Gunakan Design",
        },
        {
            id: "kaos-batik",
            name: "Kaos batik",
            description: "Gaya kasual dengan motif budaya",
            cta: "Gunakan Design",
        },
        {
            id: "tote-bag",
            name: "Tote Bag",
            description: "Temani aktivitasmu dengan gaya lokal",
            cta: "Gunakan Design",
        },
        {
            id: "kemeja",
            name: "kemeja",
            description: "Teman elegan dengan batik kontemporer",
            cta: "Gunakan Design",
        },
    ];

    const router = useRouter();
    const gridRef = useRef<HTMLDivElement>(null);
    const handleScrollToGrid = () => {
        gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleUseDesign = (productId: string) => {
        router.push(`/desain/${productId}`);
    };
    return (
        <section 
            className="mx-auto flex max-w-6xl flex-col items-center px-4"
            id="beranda"
        >
        {/* Strip pattern / placeholder */}
            <div className="mb-10 h-14 w-full rounded-[20px] bg-[rgba(139,87,42,0.15)]" />

        {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="max-w-3xl text-center"
            >
                <h1 className="text-3xl font-semibold text-[#5b2a0a] md:text-[32px] md:leading-snug">
                    Siap menciptakan karya batik kustom pertamamu hari ini?
                </h1>
                <p className="mt-4 text-[15px] text-[#6b4422]">
                    Pilih produk untuk memulai membuat design batikmu
                </p>

                <div className="mt-7 flex justify-center">
                    <Button className="inline-flex items-center gap-3 rounded-full bg-[#5b2a0a] px-7 py-2 text-sm font-semibold text-[#fbe5c7] shadow-[0_8px_18px_rgba(0,0,0,0.35)] hover:bg-[#4a2107]">
                        Pilih Produk &amp; Design Sekarang
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fbe5c7]">
                            <ArrowRight className="h-3 w-3 text-[#5b2a0a]" />
                        </span>
                    </Button>
                </div>
            </motion.div>

        {/* Cards */}
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                className="mt-10 grid w-full gap-6 md:grid-cols-4"
            >
            {products.map((product, index) => (
                <motion.article
                    key={product.id}
                    whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.35)" }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="flex flex-col items-center rounded-[32px] bg-[#f6e2c0] px-6 pb-6 pt-8 text-center shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
                >
                    {/* Placeholder untuk gambar produk, nanti bisa diganti <Image /> */}
                    <div className="mb-5 flex h-36 w-36 items-center justify-center rounded-full bg-[#f5d7aa]">
                        <span className="text-xs font-medium text-[#8a5a2a]">
                            Gambar {index + 1}
                        </span>
                    </div>

                    <h3 className="text-base font-semibold text-[#5b2a0a]">
                        {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#6b4422]">
                        {product.description}
                    </p>

                    <Button 
                        onClick={() => handleUseDesign(product.id)}
                        className="mt-4 w-full rounded-full bg-[#5b2a0a] px-4 py-2 text-xs font-semibold text-[#fbe5c7] hover:bg-[#4a2107]"
                    >
                        {product.cta}
                    </Button>
                </motion.article>
            ))}
            </motion.div>
        </section>
    );
}
