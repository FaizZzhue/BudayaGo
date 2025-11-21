"use client";

import Link from "next/link";

export function HeroSection() {

  const LOGIN_PATH = "/auth/login";

  return (
    <section 
      id="hero-section"
      className="w-full min-h-screen snap-start flex items-center md:items-center"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-12 pt-24 md:flex-row md:items-center">

        {/* Left: Text */}
        <div className="w-full md:flex-1 space-y-5">
          <h1 className="text-3xl font-semibold leading-tight text-[#5b2a0a] md:text-[40px] md:leading-snug">
            Dari Warisan ke Tren — Batik Hidup Kembali Bersama Generasi Baru.
          </h1>

          <p className="max-w-xl text-[14px] leading-relaxed text-[#6b4422] md:text-[15px]">
            Eksplorasi ribuan motif batik Nusantara, padukan dengan gaya modern,
            dan tunjukkan kebanggaanmu sebagai bagian dari budaya Indonesia.
          </p>

          {/* Button -> ke halaman login */}
          <Link
            href={LOGIN_PATH}
            className="mt-6 inline-flex items-center rounded-full bg-[#5b2a0a] px-6 py-2 text-sm font-semibold text-[#fbe5c7] shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform hover:translate-y-[1px] hover:bg-[#4a2107]"
          >
            Jelajahi Lebih Dalam
          </Link>
        </div>

        {/* Right: Image */}
        <div className="w-full md:flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-[420px] overflow-hidden rounded-[52px] bg-[#f9e1bc] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
            <div className="aspect-[4/5] w-full bg-[url('/images/hero/batik-hero.jpg')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
