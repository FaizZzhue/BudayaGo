// components/features/landing/brand-story-section.tsx

export function BrandStorySection() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center space-y-6">
        <p className="tracking-[0.35em] text-xs uppercase">
          Indonesia
        </p>

        <h2 className="text-3xl font-bold tracking-widest">
          Wastra Nusa
        </h2>

        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          WastraNusa hadir untuk merangkai kembali identitas Nusantara
          lewat kain. Kami mempertemukan desainer, pecinta batik, dan UMKM
          agar setiap karya lahir dengan cerita, makna, dan dampak nyata.
        </p>

        <button className="mt-4 inline-flex items-center rounded-full border px-6 py-2 text-sm font-medium">
          Ciptakan Sekarang
        </button>
      </div>
    </section>
  );
}
