import NavbarStudio from "@/components/common/navbar-studio";
import { DesignStudioCanvas } from "@/components/features/studio/design-studio-canvas";

export default function StudioPage() {
    return (
        <div className="min-h-screen bg-[#F3E0B6]">
            <NavbarStudio />
            <DesignStudioCanvas />
        </div>
    );
}