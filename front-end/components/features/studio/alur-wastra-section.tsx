"use client";

const steps = [
  {
    id: 1,
    title: "Atur Desain",
    description:
      "Pilih template, sesuaikan motif, warna, dan tampilan batik sesuai gaya yang kamu inginkan.",
  },
  {
    id: 2,
    title: "Pilih UMKM",
    description:
      "Temukan mitra yang sesuai dari daftar rekomendasi dan lihat profilnya sebelum melanjutkan.",
  },
  {
    id: 3,
    title: "Hubungi UMKM",
    description:
      "Mulai percakapan melalui WhatsApp untuk membahas produksi dan langkah berikutnya.",
  },
];

export default function AlurWastraSection() {
  return (
    <section className="w-full bg-[#F3E0B6] py-12  min-h-screen">
      {/* Frame luar */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Area tekstur dalam */}
        <div className="rounded-[18px] px-4 pb-10 pt-10 md:px-10">
          {/* Kalau punya pattern batik, bisa pakai:
              className="rounded-[18px] bg-[url('/images/bg-batik-texture.png')] bg-cover bg-center px-4 pb-10 pt-10 md:px-10"
          */}
    
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold leading-snug text-[#6b3a18] md:text-3xl">
              Ayo mulai perjalananmu
              <br />
              menciptakan batik
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative w-full max-w-xs rounded-[18px] bg-[#f5e4cc] px-4 pb-5 pt-6 shadow-[0_8px_18px_rgba(0,0,0,0.25)]"
              >
                {/* Layer pattern halus (optional) */}
                {/* <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-[url('/images/card-batik-pattern.png')] opacity-40" /> */}

                {/* Nomor step */}
                <div className="absolute -top-3 left-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#f5e4cc] text-[13px] font-semibold text-[#6b3a18] shadow-[0_4px_10px_rgba(0,0,0,0.18)]">
                  {step.id}
                </div>

                {/* Header card */}
                <div className="relative mb-3 mt-1 rounded-[10px] bg-[#6b3a18] px-3 py-2 text-center text-[13px] font-semibold text-[#fbe5c7]">
                  {step.title}
                </div>

                {/* Body card */}
                <p className="relative text-[12px] leading-relaxed text-[#4e2e16]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
