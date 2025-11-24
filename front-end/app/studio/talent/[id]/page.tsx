// ❌ HAPUS "use client" di sini, biarkan jadi Server Component
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowLeft, Star } from "lucide-react";
import { DesignerPortfolioSection } from "@/components/features/studio/designer-portfolio-section";

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
};

type TalentDetailPageProps = {
  params: { id: string };
};

export default function TalentDetailPage({ params }: TalentDetailPageProps) {
  const talent = TALENT_DETAILS[params.id];

  if (!talent) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#b18b66] text-white">
        <div className="space-y-4 text-center">
          <p className="text-lg font-semibold">Talent tidak ditemukan</p>
          <Link
            href="/studio/gaya-kamu"
            className="inline-flex items-center gap-2 rounded-full bg-[#5b2a0a] px-5 py-2 text-sm font-semibold text-[#fbe5c7] shadow-[0_8px_18px_rgba(0,0,0,0.35)] hover:bg-[#4a2107]"
          >
            <ArrowLeft size={16} />
            Kembali
          </Link>
        </div>
      </main>
    );
  }

  const waLink = talent.whatsapp
    ? `https://wa.me/${talent.whatsapp}`
    : undefined;

  return (
    <main className="min-h-screen bg-[#b18b66]">
      <section className="mx-auto max-w-5xl px-4 py-8">
        {/* tombol kembali */}
        <Link
          href="/studio/gaya-kamu"
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#5b2a0a] px-4 py-2 text-xs font-semibold text-[#fbe5c7] shadow-[0_6px_14px_rgba(0,0,0,0.35)] hover:bg-[#4a2107]"
        >
          <ArrowLeft size={14} />
          Kembali
        </Link>

        {/* kartu hero — (pakai layout yang tadi, boleh tetap) */}
        {/* ... kontenmu yang lain tetap sama ... */}

        <div className="rounded-[28px] bg-[#e1c29a] p-6 shadow-[0_18px_38px_rgba(0,0,0,0.35)]">
          {/* isi card persis seperti punyamu */}
          {/* ... */}
          <div className="mt-10">
            <h2 className="text-center font-serif text-2xl font-semibold text-[#5b2a0a] md:text-3xl">
              Portofolio Designer
            </h2>
            <div className="mt-2 mb-4 flex justify-center">
              <span className="h-[2px] w-24 rounded-full bg-[#5b2a0a]" />
            </div>

            <DesignerPortfolioSection />
          </div>
        </div>
      </section>
    </main>
  );
}
