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
    <section className="w-full bg-[#b18b66] py-8">
      <div
        className="
          mx-auto max-w-5xl rounded-[28px] border border-[#8b6a4b]
          bg-[#e1c29a] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.4)]
          relative overflow-hidden
        "
      >
        <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row md:justify-center">
          {items.map((item) => (
            <article
              key={item.id}
              className="
                w-full max-w-xs rounded-[18px] border border-[#b9996c]
                bg-[#f3e2b5] px-5 pt-5 pb-4
                shadow-[0_10px_24px_rgba(0,0,0,0.35)]
                flex flex-col items-center
              "
            >
              {/* gambar motif */}
              <div className="relative mb-4 h-48 w-full max-w-[220px] overflow-hidden rounded-[6px] bg-[#d8c3a1]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>

              {/* judul */}
              <p className="mb-2 text-center text-sm font-semibold text-[#5b2a0a]">
                {item.title}
              </p>

              {/* rating */}
              <div className="flex items-center gap-1 text-xs">
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
