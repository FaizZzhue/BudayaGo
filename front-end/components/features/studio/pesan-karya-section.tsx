"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Talent = {
  id: number;
  name: string;
  role: "designer" | "konveksi";
  rating: number;
  image: string;
};

const talents: Talent[] = [
  {
    id: 1,
    name: "Raras Puspita",
    role: "designer",
    rating: 4,
    image: "/images/talents/raras-puspita.jpg",
  },
  {
    id: 2,
    name: "Sekar Ayuningtyas",
    role: "designer",
    rating: 4,
    image: "/images/talents/sekar-ayuningtyas.jpg",
  },
  {
    id: 3,
    name: "Jatmiko Wicaksana",
    role: "designer",
    rating: 5,
    image: "/images/talents/jatmiko-wicaksana.jpg",
  },
  {
    id: 4,
    name: "Konveksi Sirna",
    role: "konveksi",
    rating: 4,
    image: "/images/talents/konveksi-1.jpg",
  },
  {
    id: 5,
    name: "Raja Konveksi",
    role: "konveksi",
    rating: 3,
    image: "/images/talents/konveksi-1.jpg",
  },
  {
    id: 6,
    name: "Kar.ya Konveksi",
    role: "konveksi",
    rating: 5,
    image: "/images/talents/konveksi-1.jpg",
  },
];

const TABS = [
  { id: "designer" as const, label: "Designer Batik" },
  { id: "konveksi" as const, label: "Konveksi" },
];

export default function PesanKaryaSection() {
  const [activeTab, setActiveTab] = useState<"designer" | "konveksi">(
    "designer"
  );

  const filtered = talents.filter((t) => t.role === activeTab);

  return (
    <section
      id="pesan-karya"
      className="w-full min-h-screen flex items-center"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-16 md:py-20">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5b2a0a]">
            Pesan Karya
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto text-[#6b4422]">
            Setiap pola menyimpan pesan, setiap warna menyuarakan makna, setiap
            helai menuturkan sejarah.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-semibold transition-all shadow-[0_6px_14px_rgba(0,0,0,0.25)]",
                activeTab === tab.id
                  ? "bg-[#5b2a0a] text-[#fbe5c7]"
                  : "bg-[#f5dfaa] text-[#5b2a0a]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Card wrapper */}
        <div className="mt-4 w-full max-w-5xl rounded-[32px] bg-[#f8edd0] px-6 py-8 shadow-[0_18px_38px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-6 md:flex-row md:gap-6 overflow-x-auto pb-2 md:overflow-visible">
            {filtered.map((talent) => (
              <article
                key={talent.id}
                className="min-w-[220px] flex-1 rounded-[24px] bg-[#f4e3c0] px-5 pt-5 pb-4 shadow-[0_10px_24px_rgba(0,0,0,0.25)] flex flex-col items-center"
              >
                {/* Foto */}
                <div className="relative mb-4 h-52 w-full max-w-[210px] overflow-hidden rounded-[18px] bg-[#d8b893]">
                  <Image
                    src={talent.image}
                    alt={talent.name}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>

                {/* Nama */}
                <p className="mb-2 text-sm md:text-base font-semibold text-[#5b2a0a]">
                  {talent.name}
                </p>

                {/* Rating */}
                <div className="mb-3 flex items-center gap-1 text-xs">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < talent.rating ? "text-[#f6c453]" : "text-[#c4b9a0]"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-auto w-full rounded-full bg-[#5b2a0a] px-4 py-2 text-xs font-semibold text-[#fbe5c7] shadow-[0_6px_14px_rgba(0,0,0,0.35)] hover:bg-[#4a2107]">
                  Lihat Detail
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
