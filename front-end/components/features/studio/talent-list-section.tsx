"use client";

import Link from "next/link";

type TalentItem = {
  id: number;
  name: string;
  role: string;
};

const talents: TalentItem[] = [
  { id: 1, name: "Raras Puspita", role: "Desainer Batik" },
  { id: 2, name: "Sekar Ayuningtyas", role: "Desainer Batik" },
  { id: 3, name: "Jatmiko Wicaksana", role: "Desainer Batik" },
];

export function TalentListSection() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
        {talents.map((talent) => (
          <article
            key={talent.id}
            className="rounded-2xl bg-[#f3e2b5] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
          >
            <p className="text-sm font-semibold text-[#5b2a0a]">
              {talent.name}
            </p>
            <p className="text-xs text-[#7a5a33]">{talent.role}</p>

            <Link
              href={`/talent/${talent.id}`} // ⬅️ SAMA dengan folder app/talent/[id]
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[#5b2a0a] px-4 py-2 text-xs font-semibold text-[#fbe5c7] hover:bg-[#4a2107]"
            >
              Lihat detail
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
