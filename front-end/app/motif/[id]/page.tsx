import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

type MotifDetail = {
    id: number;
    slug: string;
    name: string;
    title: string;
    description: string;
    image: string;
    origin: string;
    colorLabel: string;
    colors: string[];
};

const MOTIF_DETAILS: MotifDetail[] = [
    {
        id: 1,
        slug: "kawung",
        name: "Kawung",
        title: "Motif Kawung Batik",
        image: "/batik-kawung-motif.jpg",
        origin: "Yogyakarta",
        colorLabel: "Kontras",
        colors: ["#000000", "#ffffff", "#c0a47a"],
        description:
            "Motif kawung merepresentasikan kesederhanaan dan kebijaksanaan. Pola lingkaran yang berulang melambangkan keseimbangan antara dunia lahir dan batin, serta ajakan untuk selalu menjaga keutuhan diri di tengah perubahan zaman.",
    },
    {
        id: 2,
        slug: "parang",
        name: "Parang",
        title: "Motif Parang Batik",
        image: "/batik-parang-motif.jpg",
        origin: "Bandung",
        colorLabel: "Netral",
        colors: ["#000000", "#ffffff", "#c7b28a"],
        description:
            "Motif batik ini menggambarkan perjalanan manusia di tengah arus kehidupan modern. Bentuk diagonal yang berulang melambangkan semangat pantang menyerah, sementara irama garis-garisnya merepresentasikan arah dan tujuan yang harus dijaga agar tidak goyah. Hitam dan putih menjadi simbol dua sisi kehidupan—terang dan gelap—yang senantiasa berdampingan.",
    },
    {
        id: 3,
        slug: "ceplok",
        name: "Ceplok",
        title: "Motif Ceplok Batik",
        image: "/batik-ceplok-motif.jpg",
        origin: "Solo",
        colorLabel: "Hangat",
        colors: ["#9a4c1e", "#f4d7a4", "#e6b85c"],
        description:
            "Motif ceplok menunjukkan harmoni dan keteraturan. Pola geometris yang tersusun rapi menggambarkan keseimbangan, keteguhan prinsip, dan ketenangan batin.",
    },
    {
        id: 4,
        slug: "madura",
        name: "Madura",
        title: "Motif Madura Batik",
        image: "/batik-madura-motif.jpg",
        origin: "Madura",
        colorLabel: "Berani",
        colors: ["#b32128", "#f5d39a", "#1f3e6b"],
        description:
            "Motif batik Madura identik dengan warna-warna berani dan kontras, mencerminkan karakter masyarakat pesisir yang tegas, jujur, dan apa adanya.",
    },
    {
        id: 5,
        slug: "lasem",
        name: "Lasem",
        title: "Motif Lasem Batik",
        image: "/batik-lasem-motif.jpg",
        origin: "Lasem",
        colorLabel: "Elegan",
        colors: ["#7a1f1f", "#f4e0c4", "#223b59"],
        description:
            "Motif Lasem banyak terinspirasi dari perjumpaan budaya pesisir Jawa dengan budaya Tionghoa, menghadirkan kesan anggun namun tetap kuat.",
    },
];

type MotifDetailPageProps = {
    params: Promise<{ id: string }>;
};

export default async function MotifDetailPage({ params }: MotifDetailPageProps) {
    const { id } = await params;
    const motifId = Number(id);

    const motif =
        MOTIF_DETAILS.find((m) => m.id === motifId) ?? MOTIF_DETAILS[1];

    const others = MOTIF_DETAILS.filter((m) => m.id !== motif.id).slice(0, 3);

    return (
        <div className="min-h-screen flex flex-col bg-[#e6c599] text-[#5b2a0a]">
            <header className="w-full">
                <div className="h-8 w-full bg-[url('/images/footer/footer-strip.svg')] bg-repeat-x bg-[length:80px_100%]" />
                <div className="px-4 py-2">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#f8e8c5] bg-[#fdf3d7] px-4 py-1 text-[13px] font-semibold text-[#6b3b1b] shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
                    >
                        <span className="flex h-4 w-4 items-center justify-center">
                            <ArrowLeft className="h-3 w-3" />
                        </span>
                        <span>Kembali</span>
                    </Link>
                </div>
            </header>

        {/* Main content */}
            <main className="flex-1 w-full">
                <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-8 md:py-12 gap-10">
                {/* Judul utama */}
                    <h1 className="text-center font-serif text-3xl md:text-4xl font-bold text-[#5b2a0a]">
                        Setiap Motif Punya Cerita
                    </h1>

                    <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,3fr)] items-start">
                        <div className="flex flex-col gap-8">
                            <div className="relative w-full aspect-[4/3] rounded-[40px] bg-[#f9e1bc] shadow-[0_18px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                                <Image
                                    src={motif.image}
                                    alt={motif.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="space-y-3">
                                <p className="font-semibold text-sm md:text-base">Yang lain</p>
                                <div className="flex flex-wrap gap-4">
                                    {others.map((other) => (
                                        <Link
                                            key={other.id}
                                            href={`/motif/${other.id}`}
                                            className="relative h-24 w-24 overflow-hidden rounded-[18px] bg-[#f9e1bc] shadow-[0_10px_24px_rgba(0,0,0,0.4)]"
                                        >
                                            <Image
                                                src={other.image}
                                                alt={other.name}
                                                fill
                                                className="object-cover"
                                                sizes="96px"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Kanan: teks & info */}
                        <div className="flex flex-col gap-6">
                            <div>
                                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                                    {motif.title}
                                </h2>
                                <p className="text-[13px] md:text-[14px] leading-relaxed text-[#5f4427] text-justify">
                                    {motif.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <div className="inline-flex items-center rounded-full bg-[#f5dfaa] px-6 py-2 text-xs md:text-sm shadow-[0_6px_14px_rgba(0,0,0,0.35)]">
                                    <span className="font-semibold mr-1">Origin :</span>
                                    <span>{motif.origin}</span>
                                </div>
                                <div className="inline-flex items-center rounded-full bg-[#f5dfaa] px-6 py-2 text-xs md:text-sm shadow-[0_6px_14px_rgba(0,0,0,0.35)]">
                                    <span className="font-semibold mr-1">Color :</span>
                                    <span>{motif.colorLabel}</span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="mb-3 font-semibold text-sm md:text-base">
                                    Warna
                                </p>
                                <div className="flex gap-4">
                                    {motif.colors.map((c) => (
                                        <div
                                            key={c}
                                            className="h-9 w-9 rounded-full border border-black/10 shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
