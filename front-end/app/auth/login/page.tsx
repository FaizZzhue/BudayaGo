import { Metadata } from "next";
import LoginPage from "@/components/features/auth/login/login-form";

export const metadata: Metadata = {
    title: "Masuk | WastraNusa",
};

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#e6c599]">
            <LoginPage />
        </div>
    );
}