// components/features/studio/designer-portfolio-section.tsx
"use client";

import Image from "next/image";

export type PortfolioItem = {
  id: number;
  title: string;
  image: string;
  rating: number;
};

const defaultItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Batik Kawung",
    image: "/images/portfolio/batik-kawung.jpg",
    rating: 4,
  },
  {
    id: 2,
    title: "Batik Monokrom Geometris",
    image: "/images/portfolio/batik-geometris.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "Batik Warna Parang Klasik",
    image: "/images/portfolio/batik-parang.jpg",
    rating: 4,
  },
];

type Props = {
  items?: PortfolioItem[];
};

export function DesignerPortfolioSection({ items = defaultItems }: Props) {
  return (
    <section
      className="
        relative w-full min-h-screen bg-[#F3E0B6]
        px-4 pb-12 pt-20 -mt-16
      "
    >
      {/* container utama dengan background peta + ornamen pojok */}
      <div
        className="
          mx-auto max-w-5xl rounded-[28px] border border-[#8b6a4b]
          bg-[#e1c29a] shadow-[0_18px_40px_rgba(0,0,0,0.45)]
          overflow-hidden
          relative
        "
      >
        {/* kalau punya aset peta / pattern, tinggal aktifkan ini */}
        {/* <div className="absolute inset-0 bg-[url('/images/bg-portfolio-map.png')] bg-cover bg-center opacity-70" /> */}

        {/* isi kartu batik */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 py-16 md:flex-row md:gap-10">
          {items.map((item) => (
            <article
              key={item.id}
              className="
                w-full max-w-xs rounded-[18px] border border-[#b9996c]
                bg-[#f5e4cc] px-5 pb-4 pt-5
                shadow-[0_10px_24px_rgba(0,0,0,0.35)]
                text-center
              "
            >
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-[8px] bg-[#d8c3a1]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>

              <p className="mb-2 text-sm font-semibold text-[#5b2a0a]">
                {item.title}
              </p>

              <div className="flex items-center justify-center gap-1 text-xs">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < item.rating ? "text-[#f6c453]" : "text-[#c4b9a0]"}
                  >
                    ★
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
