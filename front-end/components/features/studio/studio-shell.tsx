"use client";

import type { ReactNode } from "react";
import NavbarStudio from "@/components/common/navbar-studio";

type StudioShellProps = {
    children: ReactNode;
};

export function StudioShell({ children }: StudioShellProps) {
    return (
        <div className="min-h-screen bg-[#f6e2c0]">
            <NavbarStudio />

            <main className="pt-[88px] px-4 md:px-10">
                {children}
            </main>
        </div>
    );
}
