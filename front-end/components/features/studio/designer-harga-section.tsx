"use client";

import { CheckCircle2 } from "lucide-react";


export function DesignerPricingSection() {
    type PackageItem = {
        id: number;
        title: string;
        subtitle: string;
        priceRange: string;
        note?: string;
        points: string[];
    };

    const PACKAGES: PackageItem[] = [
        {
            id: 1,
            title: "Paket 1",
            subtitle: "Batik Cap",
            priceRange: "Rp 120.000 – Rp 180.000 / meter",
            note: "*Jika motif baru, ada biaya cap",
            points: [
                "Cap tembaga",
                "Warna bisa request",
                "Waktu pengerjaan: 3–7 hari",
            ],
        },
        {
            id: 2,
            title: "Paket 2",
            subtitle: "Batik Tulis",
            priceRange: "Rp 300.000 – Rp 800.000+ / meter",
            note: "(Premium & Handmade)",
            points: [
                "Digambar tangan oleh pembatik ahli",
                "Pewarnaan bertahap",
                "Waktu pengerjaan lambat: 2 minggu – 3 bulan",
                "Minimal order: 1–2 meter",
            ],
        },
];
    return (
        <section className="w-full min-h-screen bg-[#F3E0B6] px-4 py-10">
            <div className="mx-auto max-w-5xl rounded-[28px] bg-[#e1c29a] px-6 py-10 shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
                {/* area tekstur dalam */}
                <div className="rounded-[24px] bg-[#e9cfa6] px-4 py-10 md:px-10">
                {/* Heading */}
                    <div className="mb-10 text-center">
                        <h2 className="font-serif text-2xl font-semibold text-[#5b2a0a] md:text-3xl">
                            Harga Paket &amp; Jasa
                        </h2>
                    </div>

                {/* Cards */}
                    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
                        {PACKAGES.map((pkg) => (
                            <article
                                key={pkg.id}
                                className="w-full max-w-sm rounded-[18px] border border-[#b9996c] bg-[#f5e4cc] px-6 py-6 text-[#3f2411] shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
                            >
                                {/* Judul paket */}
                                <div className="mb-4 text-center">
                                    <h3 className="text-lg font-bold text-[#5b2a0a]">
                                        {pkg.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-[#5b2a0a]">
                                        {pkg.subtitle}
                                    </p>
                                    <p className="mt-3 text-sm font-semibold">{pkg.priceRange}</p>
                                    {pkg.note && (
                                        <p className="mt-1 text-[11px] text-[#6b4a2b]">
                                            {pkg.note}
                                        </p>
                                    )}
                                </div>

                                {/* List poin */}
                                <ul className="mb-5 space-y-2 text-sm">
                                    {pkg.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle2
                                                size={14}
                                                className="mt-[2px] flex-shrink-0 text-[#5b2a0a]"
                                            />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tombol */}
                                <div className="flex justify-center">
                                    <button className="mt-1 inline-flex min-w-[160px] items-center justify-center rounded-full bg-[#5b2a0a] px-6 py-2 text-xs font-semibold text-[#fbe5c7] shadow-[0_8px_16px_rgba(0,0,0,0.35)] hover:bg-[#4a2107]">
                                        Mulai Produksi
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
