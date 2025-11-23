"use client";

import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

const duniaBatikItems = [
  { id: 1, name: "Motif Batik 1", image: "/batik-kawung-motif.jpg" },
  { id: 2, name: "Motif Batik 2", image: "/batik-kawung-motif.jpg" },
  { id: 3, name: "Motif Batik 3", image: "/batik-kawung-motif.jpg" },
  { id: 4, name: "Motif Batik 4", image: "/batik-kawung-motif.jpg" },
];

export default function DuniaBatikSection() {
  return (
    <section
      className="w-full min-h-screen flex items-center"
      id="dunia-batik"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 md:py-20 gap-10">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5b2a0a]">
            WastraNusa - Dunia Batik
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto text-[#6b4422]">
            Setiap pola menyimpan pesan, setiap warna menyuarakan makna,
            setiap helai menuturkan sejarah.
          </p>
        </div>

        {/* Search bar */}
        <div className="w-full max-w-3xl">
          <div className="flex items-center rounded-full bg-[#f9e8c4] px-4 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
            {/* search icon kiri */}
            <Button className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#5b2a0a] text-[#fbe5c7]">
              <Search className="h-4 w-4" />
            </Button>

            <input
              type="text"
              placeholder="Cari motif batik, nama daerah, atau makna..."
              className="flex-1 bg-transparent border-none text-sm md:text-base text-[#5b2a0a] placeholder:text-[#b48c5c] focus:outline-none"
            />

            {/* filter icon kanan */}
            <Button className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#5b2a0a] text-[#fbe5c7]">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Grid kartu motif */}
        <div className="mt-4 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-4">
          {duniaBatikItems.map((item) => (
            <div
              key={item.id}
              className="rounded-[32px] bg-[#f8edd0] px-5 pt-6 pb-5 shadow-[0_18px_35px_rgba(0,0,0,0.35)] flex flex-col items-center"
            >
              <div className="relative mb-4 h-40 w-40 rounded-[28px] overflow-hidden bg-[#f5d7aa]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              {/* kalau butuh nama di bawah gambar, bisa aktifkan ini */}
              {/* <p className="text-sm font-medium text-[#5b2a0a]">
                {item.name}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
