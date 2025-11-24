"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { MessageCircle, ArrowLeft, Star } from "lucide-react";
import { DesignerPortfolioSection } from "@/components/features/studio/designer-portfolio-section";
import { DesignerPricingSection } from "@/components/features/studio/designer-harga-section";
import Footer from "@/components/common/footer";

type TalentDetail = {
  id: number;
  name: string;
  location: string;
  role: "designer" | "konveksi";
  rating: number;
  image: string;
  bio: string;
  whatsapp?: string;
};

const TALENT_DETAILS: Record<string, TalentDetail> = {
  "1": {
    id: 1,
    name: "Raras Puspita",
    location: "Pekalongan, Jawa Tengah",
    role: "designer",
    rating: 4,
    image: "/images/talents/raras-puspita.jpg",
    bio: "Raras Puspita, pengrajin batik asal Pekalongan dengan pengalaman lebih dari 15 tahun, dikenal lewat batik tulis bernuansa lembut dan sarat makna Jawa. Ia memadukan tradisi dengan sentuhan modern untuk melestarikan budaya sekaligus mengikuti tren masa kini.",
    whatsapp: "6281234567890",
  },
  "2": {
    id: 2,
    name: "Sekar Ayuningtyas",
    location: "Yogyakarta, DI Yogyakarta",
    role: "designer",
    rating: 4,
    image: "/images/talents/sekar-ayuningtyas.jpg",
    bio: "Sekar Ayuningtyas adalah desainer batik yang fokus pada motif flora fauna Nusantara dengan palet warna lembut dan feminin.",
    whatsapp: "6281111111111",
  },
  "3": {
    id: 3,
    name: "Jatmiko Wicaksana",
    location: "Solo, Jawa Tengah",
    role: "designer",
    rating: 5,
    image: "/images/talents/jatmiko-wicaksana.jpg",
    bio: "Jatmiko Wicaksana menggabungkan pola geometris dengan filosofi klasik Jawa untuk menghadirkan batik yang tegas dan maskulin.",
    whatsapp: "6282222222222",
  },
  // kalau mau, tambahkan juga data untuk konveksi di sini
};

export default function TalentDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const id = params?.id;
  const talent = id ? TALENT_DETAILS[id] : undefined;

  if (!talent) {
    return (
      <main className="min-h-screen bg-[#b18b66] text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">Talent tidak ditemukan</p>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-full bg-[#5b2a0a] px-5 py-2 text-sm font-semibold text-[#fbe5c7] shadow-[0_8px_18px_rgba(0,0,0,0.35)] hover:bg-[#4a2107]"
          >
            <ArrowLeft size={16} />
            Kembali
          </button>
        </div>
      </main>
    );
  }

  const waLink = talent.whatsapp
    ? `https://wa.me/${talent.whatsapp}`
    : undefined;

  return (
    <main className="bg-[#F3E0B6]">
      <section className="relative flex min-h-screen items-center justify-center px-4 py-10">
        <button
          onClick={() => router.back()}
          className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-[#5b2a0a] px-4 py-2 text-xs font-semibold text-[#fbe5c7] shadow-[0_6px_14px_rgba(0,0,0,0.35)] hover:bg-[#4a2107]"
        >
          <ArrowLeft size={14} />
          Kembali
        </button>

        <div className="w-full max-w-5xl rounded-[28px] bg-[#F3E0B6] p-6 ">
          <div className="rounded-[24px] bg-[#F3E0B6] px-4 py-10 md:px-10 md:py-12">
            <div className="mx-auto max-w-4xl rounded-[40px] bg-[#5b2a0a] px-6 py-6 text-[#fbe5c7] md:px-10 md:py-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                {/* foto */}
                <div className="mx-auto flex-shrink-0 md:mx-0">
                  <div className="relative h-32 w-32 overflow-hidden rounded-[20px] bg-[#d8b893] md:h-36 md:w-36">
                    <Image
                      src={talent.image}
                      alt={talent.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* info */}
                <div className="flex-1 space-y-3">
                  <div>
                    <h1 className="text-xl font-bold md:text-2xl">
                      {talent.name}
                    </h1>
                    <p className="text-sm font-semibold italic text-[#f3d9a8] md:text-base">
                      {talent.location}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-[#f8e7c7] md:text-sm">
                    {talent.bio}
                  </p>

                  <div className="my-3 h-px w-full bg-[#f3d9a8]/40" />

                  <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    {/* WA */}
                    {waLink && (
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#f5e4cc] px-5 py-2 text-xs font-semibold text-[#5b2a0a] shadow-[0_8px_16px_rgba(0,0,0,0.35)] hover:bg-[#f0d8b8]"
                      >
                        <MessageCircle size={14} />
                        Hubungi Via WhatsApp
                      </a>
                    )}

                    {/* rating */}
                    <div className="flex items-center gap-1 text-sm">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < talent.rating
                              ? "fill-[#f6c453] text-[#f6c453]"
                              : "fill-[#8b6e4a] text-[#8b6e4a]"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DesignerPortfolioSection />
      <DesignerPricingSection />
      <Footer />
    </main>
  );
}
