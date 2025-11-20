"use client";

type Motif = {
  id: string;
  name: string;
};

const mainMotifs: Motif[] = [
  { id: "motif-1", name: "Parang" },
  { id: "motif-2", name: "Kawung" },
  { id: "motif-3", name: "Mega Mendung" },
  { id: "motif-4", name: "Sekar" },
  { id: "motif-5", name: "Lereng" },
];

const smallMotifs: Motif[] = [
  { id: "sm-1", name: "Detail 1" },
  { id: "sm-2", name: "Detail 2" },
  { id: "sm-3", name: "Detail 3" },
  { id: "sm-4", name: "Detail 4" },
  { id: "sm-5", name: "Detail 5" },
  { id: "sm-6", name: "Detail 6" },
  { id: "sm-7", name: "Detail 7" },
  { id: "sm-8", name: "Detail 8" },
];

export function MotifShowcaseSection() {
  return (
    <section className="w-full border-y">
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-10">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Setiap Motif Punya Cerita
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Setiap pola menyimpan pesan, setiap warna menyiratkan makna,
            setiap helai menuturkan sejarah.
          </p>
        </div>

        {/* Main motif cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {mainMotifs.map((motif) => (
            <div
              key={motif.id}
              className="flex h-48 w-28 items-end justify-center rounded-2xl border bg-muted text-xs"
            >
              <span className="mb-2 px-2 py-1 bg-background/80 rounded-full">
                {motif.name}
              </span>
            </div>
          ))}
        </div>

        {/* Small motif strip */}
        <div className="flex flex-wrap justify-center gap-3">
          {smallMotifs.map((motif) => (
            <div
              key={motif.id}
              className="h-12 w-24 rounded-md border bg-muted"
              aria-label={motif.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
