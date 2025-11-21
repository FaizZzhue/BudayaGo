"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full min-h-screen flex flex-col bg-[#e6c599] text-[#5b2a0a]">
        {/* TOP: Story / Hero Footer */}
            <section className="relative flex-1 px-4 py-16 md:py-20 flex items-center justify-center">
                {/* Ornamen kiri & kanan (ganti path gambar sesuai asetmu) */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-0 top-6 h-64 w-64 bg-[url('/images/footer/top-left-bird.png')] bg-contain bg-no-repeat bg-left-top" />
                    <div className="absolute right-0 top-10 h-64 w-64 bg-[url('/images/footer/top-right-bird.png')] bg-contain bg-no-repeat bg-right-top" />
                    <div className="absolute left-0 bottom-6 h-40 w-64 bg-[url('/images/footer/bottom-left-ornament.png')] bg-contain bg-no-repeat bg-left-bottom" />
                    <div className="absolute right-0 bottom-6 h-40 w-64 bg-[url('/images/footer/bottom-right-ornament.png')] bg-contain bg-no-repeat bg-right-bottom" />
                </div>

                {/* Konten tengah */}
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center gap-4">
                    <span className="tracking-[0.25em] text-xs md:text-sm uppercase">
                        INDONESIA
                    </span>

                    <div className="leading-tight font-serif text-[#5b2a0a]">
                        <p className="text-4xl md:text-5xl font-bold tracking-[0.18em]">
                            WASTRA
                        </p>
                        <p className="mt-1 text-3xl md:text-4xl font-bold tracking-[0.18em]">
                            NUSA
                        </p>
                    </div>

                    <p className="mt-4 max-w-xl text-[13px] md:text-[14px] leading-relaxed">
                        Wastra Nusa lahir untuk menjembatani kreativitas modern dan warisan
                        budaya Indonesia. Kami percaya setiap motif punya cerita dan setiap
                        pengguna berhak menulis kisahnya sendiri melalui kain.
                    </p>

                    <Link
                        href="/studio"
                        className="mt-6 inline-flex items-center rounded-full bg-[#5b2a0a] px-6 py-2 text-sm font-semibold text-[#fbe5c7] shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform hover:translate-y-[1px] hover:bg-[#4a2107]"
                    >
                        Ciptakan Sekarang
                    </Link>
                </div>
            </section>

        {/* STRIP MOTIF PEMBATAS */}
            <div className="h-3 w-full bg-[url('/images/footer/footer-strip.svg')] bg-repeat-x bg-[length:80px_100%]" />

        {/* BOTTOM: Menu & Social */}
            <section className="relative bg-[#5A2E0A] text-[#FDF7EA]">
                {/* Pattern sudut (opsional) */}
                <div className="pointer-events-none absolute inset-0 bg-[url('/images/footer/footer-corner-pattern.png')] bg-cover opacity-80" />

                <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-6 py-10 md:flex-row">
                {/* Menu kiri */}
                    <div className="space-y-2 text-sm md:text-base">
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

                {/* Sosial kanan */}
                    <div className="space-y-2 text-sm md:text-base">
                        <div className="flex items-center gap-3">
                            <span className="w-4 text-right">📷</span>
                            <span>: wastranusa.official</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-4 text-right">🎵</span>
                            <span>: wastranusa.on.tiktok</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-4 text-right">▶️</span>
                            <span>: wastranusa YT</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-4 text-right">✕</span>
                            <span>: wastranusa.official</span>
                        </div>
                    </div>

                {/* Ornamen tengah bawah */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2">
                        <div className="h-16 w-40 bg-[url('/images/footer/footer-ornament.svg')] bg-contain bg-center bg-no-repeat" />
                    </div>
                </div>
            </section>
        </footer>
    );
}
