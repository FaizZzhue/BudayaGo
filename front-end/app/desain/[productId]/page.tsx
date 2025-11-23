"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { DesignStudioCanvas } from "@/components/features/studio/design-studio-canvas";
import { Button } from "@/components/ui/button";
import NavbarStudio from "@/components/common/navbar-studio";

export default function DesainProductPage() {
  const params = useParams<{ productId: string }>();
  const productId = params?.productId ?? "kemeja";

  return (
    <main className="min-h-screen bg-[#d8c3a1]">
      <div className="mx-auto max-w-6xl px-4 py-5">
        <NavbarStudio />

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center rounded-[28px] bg-[#f6e2c0] px-6 py-8 shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
        >
          <DesignStudioCanvas />

          
          <Button className="mt-6 rounded-full bg-[#5b2a0a] px-10 py-2 text-sm font-semibold text-[#fbe5c7] hover:bg-[#4a2107]">
            Lihat 3D
          </Button> 
         
        </motion.section>
      </div>
    </main>
  );
}
