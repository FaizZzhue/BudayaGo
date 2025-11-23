"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { DesignStudioCanvas } from "@/components/features/studio/design-studio-canvas";
import { Button } from "@/components/ui/button";
import NavbarStudio from "@/components/common/navbar-studio";
import { Clock } from "lucide-react";

export default function DesainProductPage() {
  const params = useParams<{ productId: string }>();
  const productId = params?.productId ?? "kemeja";

  return (
    <main className="min-h-screen bg-[#f6e2c0]">
      <NavbarStudio />

      <div className="mx-auto max-w-6xl px-4 pb-8 pt-6">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex w-full flex-col px-6 pb-4 pt-6"
        >
          <DesignStudioCanvas />

          <div className="mt-4 flex items-center justify-between text-[11px] text-[#6b4422]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#5b2a0a]" />
              <span>Simpan Otomatis</span>
            </div>
            <div className="flex items-center gap-1 opacity-80">
              <Clock className="h-3 w-3" />
              <span>2 menit yang lalu</span>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
