"use client";

import { HeroSection } from "@/components/features/landing/hero-section";
import { MotifShowcase } from "@/components/features/landing/motif-section";
import { BrandStorySection } from "@/components/features/landing/brand-story-section";
import Footer from "@/components/common/footer";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <MotifShowcase />
    </>
  );
}
