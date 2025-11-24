"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";   
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname, useRouter } from "next/navigation";

export default function NavbarStudio() {
    type NavItem = {
        name: string;
        href: string;
        type: "home" | "page" | "anchor";
};

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const navItems: NavItem[] = [
        { name: "Beranda", href: "/studio", type: "home" },
        { name: "Gaya Kamu", href: "/studio/gaya-kamu", type: "page" },
        { name: "Dunia Batik", href: "/studio/dunia-batik", type: "page" },
        { name: "Pesan Karya", href: "/studio/pesan-karya", type: "page" },
        { name: "Tentang Kami", href: "#footer-section", type: "anchor" },
    ];

    const handleHomeClick = () => {
        if (pathname === "/studio") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            router.push("/studio");
        }
        setIsOpen(false);
    };

    const handleAnchorClick = (hash: string) => {
        if (pathname === "/studio") {
            const target = document.querySelector(hash);
            if (target) {
                (target as HTMLElement).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        } else {
            router.push(`/studio${hash}`);
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-3 left-3 right-3 py-3 bg-[#5A2E0A] text-white rounded-xl z-50">
            <div className= "flex justify-between items-center w-full px-4 md:px-8">
                <div className="font-bold">
                    WastraNusa
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navItems.map((item, key) => {
                        if (item.type === "home") {
                            return (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={handleHomeClick}
                                    className="hover:underline"
                                >
                                    {item.name}
                                </button>
                            );
                        }
                        if (item.type === "anchor") {
                            return (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={() => handleAnchorClick(item.href)}
                                    className="hover:underline"
                                >
                                    {item.name}
                                </button>
                            );
                        }
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:underline"
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <Avatar>
                    <AvatarImage src="https://github.com/evilrabbit.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                {/* Mobile Menu */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 text-white z-50 relative"
                >
                    {isOpen ? <X className="text-black" size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-start",
                    "transition-all duration-300 md:hidden",
                    isOpen 
                    ? "opacity-100 pointer-events-auto " 
                    : "opacity-0 pointer-events-none"
                )}>
                    <div className="absolute top-16 flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => {
                            if (item.type === "home") {
                                return (
                                    <button
                                        key={item.name}
                                        type="button"
                                        onClick={handleHomeClick}
                                        className="text-black hover:text-primary transition-colors duration-300"
                                    >
                                        {item.name}
                                    </button>
                                );
                            }

                            if (item.type === "anchor") {
                                return (
                                    <button
                                        key={item.name}
                                        type="button"
                                        onClick={() => handleAnchorClick(item.href)}
                                        className="text-black hover:text-primary transition-colors duration-300"
                                    >
                                        {item.name}
                                    </button>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-black hover:text-primary transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        <Avatar>
                            <AvatarImage src="https://github.com/evilrabbit.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </nav>
    );
}