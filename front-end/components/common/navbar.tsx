"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const LOGIN_PATH = "/auth/login";

    const navItems =[
        { name: 'Beranda', href: '#hero-section' },
        { name: 'Makna', href: '#motif-section' },
        { name: 'Tentang Kami', href: '#footer-section' },
    ]

    const handleAnchorClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
        ) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-3 left-3 right-3 py-3 bg-[#5A2E0A] text-white rounded-xl z-50">
            <div className= "flex justify-between items-center w-full px-4 md:px-8">
                <div className="font-bold">
                    WastraNusa
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            onClick={(e) => handleAnchorClick(e, item.href)}
                            className="hover:underline"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <Link href={LOGIN_PATH}>
                    <Button className="hidden md:flex bg-[#E9D2A0] text-black font-bold">Masuk</Button>
                </Link>

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
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-black hover:text-primary transition-color duration-300"
                                onClick={(e) => handleAnchorClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <Link href={LOGIN_PATH} onClick={() => setIsOpen(false)}>
                            <Button className="bg-[#E9D2A0] text-black font-bold">Masuk</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}