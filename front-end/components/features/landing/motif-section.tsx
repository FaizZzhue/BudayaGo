"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const motifCards = [
  {
    id: 1,
    name: "Kawung",
    meaning: "Simbol kekuatan dan pertumbuhan",
    image: "/batik-kawung-motif.jpg",
  },
  {
    id: 2,
    name: "Parang",
    meaning: "Lambang dinamika dan pergerakan",
    image: "/batik-parang-motif.jpg",
  },
  {
    id: 3,
    name: "Ceplok",
    meaning: "Harmoni sempurna dan keseimbangan",
    image: "/batik-ceplok-motif.jpg",
  },
  {
    id: 4,
    name: "Madura",
    meaning: "Warisan leluhur yang berharga",
    image: "/batik-madura-motif.jpg",
  },
  {
    id: 5,
    name: "Lasem",
    meaning: "Keindahan tradisi yang abadi",
    image: "/batik-lasem-motif.jpg",
  },
];

const tileMotifs = [
  "/batik-tile-pattern-1.jpg",
  "/batik-tile-pattern-2.jpg",
  "/batik-tile-pattern-3.jpg",
  "/batik-tile-pattern-4.jpg",
  "/batik-tile-pattern-5.jpg",
  "/batik-tile-pattern-6.jpg",
];

export function MotifShowcase() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="motif-section"
      className="w-full min-h-screen snap-start flex items-center"
    >

      {/* wrapper isi di tengah */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-4 py-16 md:py-24">
        
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 font-serif text-3xl font-bold text-[#5b2a0a] md:text-4xl lg:text-5xl">
            Setiap Motif Punya Cerita
          </h2>
          <p className="mx-auto max-w-2xl text-[14px] leading-relaxed text-[#6b4422] md:text-[15px]">
            Setiap pola menyimpan pesan, setiap warna menyuarakan makna,
            <br className="hidden sm:block" />
            setiap helai menuturkan sejarah.
          </p>
        </div>

        {/* Kartu motif utama */}
        <motion.div
          className="mb-14 flex items-end justify-center gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {motifCards.map((card, index) => {
            const isCenter = index === 2;
            const tilt =
              index < 2 ? -8 + index * 4 : index > 2 ? (index - 2) * 4 : 0; // -8,-4,0,4,8

            return (
              <motion.div
                key={card.id}
                className="flex h-[280px] md:h-[320px] items-end justify-center"
                variants={cardVariants}
              >
                <div
                  style={{ perspective: 1200 }}
                  className="relative flex items-end justify-center"
                >
                  <motion.div
                    onClick={() => {
                      if (!isCenter) return;
                      setIsFlipped((prev) => !prev);
                      setActiveIndex(index);
                    }}
                    className={`relative cursor-pointer overflow-hidden rounded-[28px] shadow-[0_16px_32px_rgba(0,0,0,0.35)] ${
                      isCenter
                        ? "h-[260px] w-[180px] md:h-[320px] md:w-[220px]"
                        : "h-[220px] w-[130px] md:h-[260px] md:w-[170px]"
                    }`}
                    whileHover={
                      isCenter ? { y: -10, scale: 1.04 } : { y: -6, scale: 1.02 }
                    }
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    style={{
                      rotateZ: tilt,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Front */}
                    <motion.div
                      className="absolute inset-0 overflow-hidden rounded-[28px]"
                      animate={{
                        rotateY:
                          isFlipped && isCenter && activeIndex === index
                            ? 180
                            : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 180px, 220px"
                      />
                    </motion.div>

                    {/* Back */}
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center rounded-[28px] bg-[#5b2a0a]/95 px-5 text-center"
                      animate={{
                        rotateY:
                          isFlipped && isCenter && activeIndex === index
                            ? 0
                            : -180,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <h3 className="mb-3 font-serif text-xl font-bold text-[#fbe5c7] md:text-2xl">
                        {card.name}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-[#fdecd3] md:text-sm">
                        {card.meaning}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Baris tile bawah */}
        <div className="space-y-5 md:space-y-7">
          {/* Top row */}
          <motion.div
            className="flex justify-center gap-3 px-2 pb-1 md:gap-5"
            animate={{ x: isFlipped ? -32 : 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 16,
              duration: 0.6,
            }}
          >
            {tileMotifs.slice(0, 5).map((image, idx) => (
              <motion.div
                key={`tile-top-${idx}`}
                className="relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-[14px] shadow-[0_10px_22px_rgba(0,0,0,0.35)] md:h-20 md:w-40"
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Batik tile pattern ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 112px, 160px"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom row */}
          <motion.div
            className="flex justify-center gap-3 px-6 pb-1 md:gap-5 md:px-16"
            animate={{ x: isFlipped ? 32 : 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 16,
              duration: 0.6,
            }}
          >
            {tileMotifs.slice(1, 6).map((image, idx) => (
              <motion.div
                key={`tile-bottom-${idx}`}
                className="relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-[14px] shadow-[0_10px_22px_rgba(0,0,0,0.35)] md:h-20 md:w-40"
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Batik tile pattern ${idx + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 112px, 160px"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
