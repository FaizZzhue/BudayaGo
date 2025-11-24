"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, MessageCircle, Star } from "lucide-react";
import NavbarStudio from "@/components/common/navbar-studio";
import { KonveksiPricingSection } from "@/components/features/studio/konveksi-harga-section";
import Footer from "@/components/common/footer";

type KonveksiDetail = {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  highlights: string[];
  whatsapp?: string;
};

const KONVEKSI_DETAILS: KonveksiDetail[] = [
  {
    id: 4,
    name: "Konveksi Sirna",
    location: "Bandung, Jawa Barat",
    rating: 4,
    image: "/images/talents/konveksi-1.jpg",
    description:
      "Konveksi Sirna melayani produksi pakaian batik kasual hingga semi formal dengan fokus pada kualitas jahitan dan ketepatan ukuran.",
    highlights: [
      "Spesialis kemeja, blouse, dan outer batik.",
      "Menerima order seragam kantor, komunitas, dan keluarga.",
      "Tersedia layanan sample terlebih dahulu sebelum produksi massal.",
    ],
    whatsapp: "6281111111111",
  },
  {
    id: 5,
    name: "Raja Konveksi",
    location: "Semarang, Jawa Tengah",
    rating: 3,
    image: "/images/talents/konveksi-1.jpg",
    description:
      "Raja Konveksi berfokus pada produksi dalam jumlah menengah hingga besar dengan harga kompetitif untuk kebutuhan brand lokal.",
    highlights: [
      "Cocok untuk brand clothing batik dan merchandise event.",
      "Bisa membantu pengembangan size chart dan label brand.",
      "Tersedia opsi packaging sederhana untuk pengiriman langsung.",
    ],
    whatsapp: "6282222222222",
  },
  {
    id: 6,
    name: "Kar.ya Konveksi",
    location: "Surakarta, Jawa Tengah",
    rating: 5,
    image: "/images/talents/konveksi-1.jpg",
    description:
      "Kar.ya Konveksi adalah studio produksi berbasis di Yogyakarta yang berfokus pada pembuatan berbagai produk berbahan batik custom, mulai dari pakaian hingga aksesori.",
    highlights: [
      "Menjahit pakaian sesuai detail desain batikmu di aplikasi.",
      "Produksi tas & aksesori dari sisa kain batik (totebag, pouch, bucket hat, dll).",
      "Konsultasi & pemesanan langsung via WhatsApp.",
    ],
    whatsapp: "6281234567890",
  },
];

export default function KonveksiDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const rawId = params?.id;
  const idNum = Number(Array.isArray(rawId) ? rawId[0] : rawId);

  const konveksi = KONVEKSI_DETAILS.find((k) => k.id === idNum);

  if (!konveksi) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#b18b66] text-white">
        <div className="space-y-4 text-center">
          <p className="text-lg font-semibold">Konveksi tidak ditemukan</p>
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

  const waLink = konveksi.whatsapp
    ? `https://wa.me/${konveksi.whatsapp}`
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
                                                src={konveksi.image}
                                                alt={konveksi.name}
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
                                                {konveksi.name}
                                            </h1>
                                            <p className="text-sm font-semibold italic text-[#f3d9a8] md:text-base">
                                                {konveksi.location}
                                            </p>
                                        </div>
                        
                                        <p className="text-xs leading-relaxed text-[#f8e7c7] md:text-sm">
                                            {konveksi.description}
                                        </p>

                                        <ul className="mt-2 space-y-1 text-[11px] md:text-xs">
                                            {konveksi.highlights.map((h, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="mt-[2px] text-xs">•</span>
                                                <span>{h}</span>
                                            </li>
                                            ))}
                                        </ul>
                        
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
                                                            i < konveksi.rating
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

            <KonveksiPricingSection />
            <Footer />
        </main>
    );
}
