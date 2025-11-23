import type { ReactNode } from "react";
import NavbarStudio from "@/components/common/navbar-studio";

export default function DesainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-[#f6e2c0]">
            <NavbarStudio />
        
            <main className="pt-[72px]">
                {children}
            </main>
        </div>
    );
}
