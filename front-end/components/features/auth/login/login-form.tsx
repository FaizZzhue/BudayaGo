"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            if (email === "test@gmail.com" && password === "123") {
                setMessage("Login successful! Redirecting...")
                setTimeout(() => {
                    router.push("/studio")
                }, 1000)
            } else {
                setMessage("Invalid email or password")
                setIsLoading(false)
            }
        }, 500)
    }
    

    return (
        <div className="min-h-screen flex flex-col bg-[#e6c599] text-[#3b2a1b]">
        {/* Top bar */}
            <header className="w-full items-center px-6 py-2">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#f8e8c5] bg-[#fdf3d7] px-4 py-1 text-[13px] font-semibold text-[#6b3b1b] shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
                >
                    <span className="flex h-4 w-4 items-center justify-center">
                        <ArrowLeft className="h-3 w-3" />
                    </span>
                    <span>Kembali</span>
                </Link>
            </header>

        {/* Main content */}
            <main className="flex flex-1 items-center justify-center px-4 pb-10 pt-4">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="w-full max-w-md"
                >
                    <div className="rounded-[32px] bg-[radial-gradient(circle_at_top_left,_#b47543_0%,_#a56a3f_40%,_#8e562f_100%)] px-10 py-10 text-center text-white shadow-[0_18px_40px_rgba(0,0,0,0.45),_0_0_0_1px_rgba(255,255,255,0.08)]">
                        {/* Title */}
                        <h1 className="mb-8 text-4xl font-bold tracking-[0.08em]">
                            Masuk
                        </h1>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 text-left"
                        >
                        {/* Email */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="email"
                                    className="text-[13px] font-medium text-[#fdf6ea]"
                                >
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-10 rounded-full border-0 bg-white px-4 text-[13px] font-normal text-[#333] shadow-[0_3px_6px_rgba(0,0,0,0.2)] focus-visible:ring-2 focus-visible:ring-offset-0"
                                />
                            </div>

                        {/* Password */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="password"
                                    className="text-[13px] font-medium text-[#fdf6ea]"
                                >
                                    Kata sandi
                                </label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Kata sandi"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-10 rounded-full border-0 bg-white px-4 text-[13px] font-normal text-[#333] shadow-[0_3px_6px_rgba(0,0,0,0.2)] focus-visible:ring-2 focus-visible:ring-offset-0"
                                />
                            </div>

                        {/* Forgot password row */}
                            <div className="mt-1 flex items-center text-[12px]">
                                <span className="flex-1" />
                                <Link href="#" className="text-[#fcebd0] hover:underline">
                                    Lupa Password?
                                </Link>
                            </div>

                        {/* Button */}
                            <Button
                                type="submit"
                                className="mt-1 h-10 w-full rounded-full bg-[#5b2a0a] text-[14px] font-semibold text-[#f8f1e2] shadow-[0_6px_14px_rgba(0,0,0,0.45)] transition-transform hover:translate-y-[1px] hover:bg-[#4a2107]"
                            >
                                Masuk
                            </Button>
                        </form>

                        {/* Register text */}
                        <p className="mt-5 text-center text-[12px] text-[#fbe5c7]">
                            Belum Punya akun?{" "}
                            <Link
                                href="#"
                                className="font-semibold text-white hover:underline"
                            >
                                Daftar
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
