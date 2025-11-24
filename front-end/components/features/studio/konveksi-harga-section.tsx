"use client";

import { CheckCircle2 } from "lucide-react";

export function KonveksiPricingSection() {

    type KonveksiPackage = {
        id: number;
        name: string;
        subtitle?: string;
        bullets: string[];
    };

    const PACKAGES: KonveksiPackage[] = [
        {
            id: 1,
            name: "Paket Basic",
            subtitle: "Produksi skala kecil",
            bullets: [
                "Jumlah: 1–10 pcs",
                "Produk: kemeja, tote bag, baju, dll",
                "Cutting & jahit standar",
                "Waktu pengerjaan: 3–5 hari",
                "Range harga kemeja: Rp 40.000 – 65.000 / pcs",
                "Range harga tote bag: Rp 25.000 – 40.000 / pcs",
            ],
        },
        {
            id: 2,
            name: "Paket Premium",
            subtitle: "Produksi skala besar",
            bullets: [
                "Jumlah: 50–200+ pcs",
                "Produk: outer, tas kain tebal, dll",
                "Sample (1 pcs) untuk approval",
                "Waktu pengerjaan: 10–20 hari",
                "Range harga busana premium: Rp 40.000 – 75.000 / pcs",
                "Range harga tas kain tebal: Rp 35.000 – 60.000 / pcs",
            ],
        },
    ];

    return (
        <section className="relative min-h-screen bg-[#F3E0B6] px-4 pb-16 pt-20 -mt-16">
            <div
                className="
                    mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-[#8b6a4b] bg-[#e1c29a] shadow-[0_18px_40px_rgba(0,0,0,0.45)]
                "
            >
            {/* kalau punya gambar peta / ornamen pojok, bisa aktifkan di sini */}
            {/* <div className="absolute inset-0 bg-[url('/images/bg-konveksi-map.png')] bg-cover bg-center opacity-70" /> */}

            <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-14 md:flex-row md:justify-center">
                {PACKAGES.map((pkg) => (
                    <article
                        key={pkg.id}
                        className="w-full max-w-sm rounded-[18px] border border-[#b9996c] bg-[#f5e4cc] px-6 py-6 text-[#3f2411] shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
                    >
                        <div className="mb-4 text-center">
                            <h3 className="text-lg font-bold text-[#5b2a0a]">{pkg.name}</h3>
                            {pkg.subtitle && (
                                <p className="mt-1 text-xs font-semibold text-[#6b4a2b]">
                                    {pkg.subtitle}
                                </p>
                            )}
                        </div>

                        <ul className="mb-5 space-y-2 text-xs md:text-sm">
                            {pkg.bullets.map((b, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <CheckCircle2
                                        size={14}
                                        className="mt-[3px] flex-shrink-0 text-[#5b2a0a]"
                                    />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="
                                    inline-flex min-w-[150px] items-center justify-center
                                    rounded-full bg-[#5b2a0a] px-6 py-2
                                    text-xs font-semibold text-[#fbe5c7]
                                    shadow-[0_8px_16px_rgba(0,0,0,0.35)]
                                    hover:bg-[#4a2107]
                                "
                            >
                                Mulai Produksi
                            </button>
                        </div>
                    </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
