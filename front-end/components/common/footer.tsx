"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#5A2E0A] text-[#FDF7EA]">
        {/* Strip motif bagian atas (ganti URL pattern sesuai asetmu) */}
            <div className="h-3 w-full bg-[url('/images/footer-strip.svg')] bg-repeat-x bg-[length:80px_100%]" />

            <div
                className="
                    relative mx-auto flex max-w-6xl flex-col items-center
                    justify-between gap-10 px-6 py-10
                    md:flex-row
                "
            >
                {/* Background motif sudut – opsional, tinggal ganti aset */}
                <div className="pointer-events-none absolute inset-0 bg-[url('/images/footer-corner-pattern.png')] bg-cover opacity-70" />

                {/* Konten kiri: menu */}
                <div className="relative z-10 space-y-2 text-sm md:text-base">
                    <Link href="/" className="block hover:underline">
                        Beranda
                    </Link>
                    <Link href="/makna" className="block hover:underline">
                        Makna
                    </Link>
                    <Link href="/tentang-kami" className="block hover:underline">
                        Tentang Kami
                    </Link>
                </div>

                {/* Konten kanan: social media */}
                <div className="relative z-10 space-y-2 text-sm md:text-base">
                    <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#FDF7EA] text-[11px] font-semibold">
                            IG
                        </span>
                        <span>: wastranusa.official</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#FDF7EA] text-[11px] font-semibold">
                            TT
                        </span>
                        <span>: wastranusa.on.tiktok</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#FDF7EA] text-[11px] font-semibold">
                            YT
                        </span>
                        <span>: wastranusa YT</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#FDF7EA] text-[11px] font-semibold">
                            X
                        </span>
                        <span>: wastranusa.official</span>
                    </div>
                </div>

                {/* Ornamen tengah bawah (opsional) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2">
                    <div className="h-16 w-40 bg-[url('/images/footer-ornament.svg')] bg-contain bg-center bg-no-repeat" />
                </div>
            </div>
        </footer>
    );
}
