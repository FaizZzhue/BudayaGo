"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function DesignStudioCanvas() {
    type TemplateId = "kain" | "kaos" | "kemeja";

    const TEMPLATE_MODEL_MAP: Record<TemplateId, string> = {
        kain: "shirt.gltf",
        kaos: "shirt.gltf",
        kemeja: "shirt.gltf",
    };

    const TEMPLATE_LABEL_MAP: Record<TemplateId, string> = {
        kain: "Kain",
        kaos: "Kaos",
        kemeja: "Kemeja",
    };

    const TEMPLATE_DESC_MAP: Record<TemplateId, string> = {
        kain: "Bidang kain lebar untuk eksplorasi motif batik secara penuh.",
        kaos: "Model kaos kasual dengan sentuhan motif batik modern.",
        kemeja: "Kemeja batik formal dengan potongan kontemporer.",
    };

    const TEMPLATE_SIZE_MAP: Record<TemplateId, { width: number; height: number }> = {
        kain: { width: 110, height: 200 },
        kaos: { width: 50, height: 70 },
        kemeja: { width: 60, height: 75 },
    };

    const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>("kemeja");

    const threeContainerRef = useRef<HTMLDivElement | null>(null);
    const fabricCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!threeContainerRef.current) return;

        let renderer: THREE.WebGLRenderer | null = null;
        let camera: THREE.PerspectiveCamera | null = null;
        let scene: THREE.Scene | null = null;
        let model: THREE.Object3D | null = null;
        let animationFrameId: number | null = null;
        let fabricCanvas: any = null;

        const init = async () => {
            const [{ GLTFLoader }, fabricModule] = await Promise.all([
                import("three/examples/jsm/loaders/GLTFLoader.js"),
                import("fabric"),
            ]);

            const fabricLib =
                (fabricModule as any).fabric ??
                (fabricModule as any).default?.fabric ??
                (fabricModule as any).default ??
                fabricModule;

            if (!fabricLib || !fabricLib.Canvas) {
                console.error("Gagal memuat Fabric.js:", fabricModule);
                return;
            }

            const container = threeContainerRef.current!;
            const { clientWidth, clientHeight } = container;

            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(
                35,
                clientWidth / clientHeight,
                0.1,
                100
            );
            camera.position.set(0, 1.3, 3);

            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(clientWidth, clientHeight);
            container.appendChild(renderer.domElement);

            const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.9);
            hemiLight.position.set(0, 2, 0);
            scene.add(hemiLight);

            const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
            dirLight.position.set(2, 4, 4);
            scene.add(dirLight);

            if (fabricCanvasRef.current) {
                fabricCanvas = new fabricLib.Canvas(fabricCanvasRef.current, {
                    backgroundColor: "#ffffff",
                    selection: true,
                });

                const rect = new fabricLib.Rect({
                    width: 140,
                    height: 70,
                    fill: "#f29f58",
                });
                fabricCanvas.add(rect);
                fabricCanvas.centerObject(rect);
                fabricCanvas.renderAll();
            }

            const updateTextureFromFabric = () => {
                if (!fabricCanvas || !model) return;

                const sourceCanvas: HTMLCanvasElement = fabricCanvas.getElement();
                if (previewCanvasRef.current) {
                    const previewCanvas = previewCanvasRef.current;
                    const ctx = previewCanvas.getContext("2d");
                    if (ctx) {
                        const { width, height } = previewCanvas;
                        ctx.clearRect(0, 0, width, height);
                        ctx.drawImage(sourceCanvas, 0, 0, width, height);
                    }
                }
                if (!model) return;

                if (!sourceCanvas.width || !sourceCanvas.height) return;

                let texture: THREE.CanvasTexture;
                try {
                    texture = new THREE.CanvasTexture(sourceCanvas);
                    texture.needsUpdate = true;
                } catch (err) {
                    console.error("Gagal membuat CanvasTexture dari Fabric canvas", err);
                    return;
                }

                model.traverse((obj: any) => {
                    if (obj.isMesh) {
                        const mesh = obj as THREE.Mesh;
                        mesh.material = new THREE.MeshStandardMaterial({
                            map: texture,
                            roughness: 0.6,
                            metalness: 0.1,
                        });
                        (mesh.material as THREE.Material).needsUpdate = true;
                    }
                });
            };
        

            if (fabricCanvas) {
                ["object:added", "object:modified", "object:removed", "path:created"].forEach(
                    (ev) => fabricCanvas.on(ev, updateTextureFromFabric)
                );
                updateTextureFromFabric();
            }

            const loader = new GLTFLoader();
            const modelFile = TEMPLATE_MODEL_MAP[selectedTemplate];

            loader.load(
                `/models/${modelFile}`,
                (gltf: any) => {
                    const loadedModel = gltf.scene as THREE.Object3D;

                    loadedModel.position.set(0, 0.1, 0);
                    loadedModel.scale.set(1.3, 1.3, 1.3);
                    loadedModel.rotation.set(0, 0, 0);

                    scene!.add(loadedModel);
                    model = loadedModel;
                    updateTextureFromFabric();
                },
                undefined,
                (err: any) => {
                    console.error("Error load model:", err);
                }
            );

            const onResize = () => {
                if (!renderer || !camera) return;
                const { clientWidth, clientHeight } = container;
                camera.aspect = clientWidth / clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(clientWidth, clientHeight);
            };
            window.addEventListener("resize", onResize);

            const animate = () => {
                animationFrameId = requestAnimationFrame(animate);
                if (renderer && scene && camera) {
                    renderer.render(scene, camera);
                }
            };
            animate();

            return () => {
                window.removeEventListener("resize", onResize);
            };
        };

        let extraCleanup: (() => void) | undefined;

        init().then((fn) => {
            if (typeof fn === "function") extraCleanup = fn;
        });

        return () => {
            if (extraCleanup) extraCleanup();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            if (renderer) {
                renderer.dispose();
                renderer.domElement.parentNode?.removeChild(renderer.domElement);
            }
            if (fabricCanvas?.dispose) {
                fabricCanvas.dispose();
            }
        };
    }, [selectedTemplate]);

    const handleTemplateClick = (id: TemplateId) => {
        setSelectedTemplate(id);
    };

    const selectedLabel = TEMPLATE_LABEL_MAP[selectedTemplate];
    const selectedDesc = TEMPLATE_DESC_MAP[selectedTemplate];
    const selectedSize = TEMPLATE_SIZE_MAP[selectedTemplate];

    return (
        <div 
            className="w-full"
            id="gaya-kamu"
        >
            <div className="flex flex-col gap-5 md:flex-row">
                <aside className="w-full md:w-[260px] bg-[#f6e2c0] p-4 flex flex-col gap-3">
                {/* Container Motif */}
                    <div className="rounded-[18px] bg-[#E9D2A0] shadow-[0_10px_24px_rgba(0,0,0,0.25)] p-3">
                        <p className="mb-2 text-sm font-semibold text-[#5b2a0a]">Motif</p>
                        <div className="relative flex h-32 w-full items-center justify-center rounded-[14px] border border-dashed border-[#c79a63] bg-[#fbe5c7] ">
                            <canvas
                                ref={fabricCanvasRef}
                                width={220}
                                height={110}
                                className="absolute inset-2 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-[10px]"
                            />
                            <div className="pointer-events-none z-10 text-center text-[11px] text-[#8a5a2a]">
                                <p>Seret dan lepas gambar di sini</p>
                                <p className="mt-1 text-[10px] opacity-70">
                                    atau klik untuk unggah   
                                </p>
                            </div>
                        </div>
                    </div>

                {/* Container Warna */}
                    <div className="rounded-[18px] bg-[#E9D2A0] shadow-[0_10px_24px_rgba(0,0,0,0.25)] p-3">
                        <p className="mb-2 text-sm font-semibold text-[#5b2a0a]">Warna</p>
                        <div className="flex flex-wrap gap-2">
                            {["#f7d46b", "#f29f58", "#e35c3f", "#c3423f", "#71321f", "#171717"].map(
                                (c) => (
                                    <Button
                                        key={c}
                                        type="button"
                                        style={{ backgroundColor: c }}
                                        className="h-7 w-7 rounded-full border border-[#d6b58b]"
                                    />
                                )
                            )}
                        </div>
                    </div>

                {/* Container Template */}
                    <div className="rounded-[18px] bg-[#E9D2A0] shadow-[0_10px_24px_rgba(0,0,0,0.25)] p-3">
                        <p className="mb-2 text-sm font-semibold text-[#5b2a0a]">
                            Template
                        </p>
                        <div className="flex gap-2">
                            {(["kain", "kaos", "kemeja"] as TemplateId[]).map((id) => (
                                <button
                                    key={id}
                                    type="button"
                                    onClick={() => handleTemplateClick(id)}
                                    className={`flex h-12 flex-1 flex-col items-center justify-center rounded-[14px] text-[10px] font-medium shadow-[0_4px_10px_rgba(0,0,0,0.12)] ${
                                    selectedTemplate === id
                                        ? "bg-[#5b2a0a] text-[#fbe5c7]"
                                        : "bg-[#f6e2c0] text-[#8a5a2a]"
                                    }`}
                                >
                                    <div className="mb-1 h-4 w-4 rounded-[4px] border border-[#c79a63]" />
                                    {TEMPLATE_LABEL_MAP[id]}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* TENGAH = container kanvas model */}
                <section className="flex-1 px-6 py-8 flex flex-col items-center">
                    <div className="relative w-full max-w-md px-6 py-10">
                        <div
                            ref={threeContainerRef}
                            className="relative z-10 h-[260px] w-full"
                        />
                    </div>
                    <button
                        type="button"
                        className="mt-6 rounded-full bg-[#5b2a0a] px-10 py-2 text-sm font-semibold text-[#fbe5c7] shadow-[0_8px_16px_rgba(0,0,0,0.25)] hover:bg-[#4a2107]"
                    >
                        Lihat 3D
                    </button>
                </section>

                {/* SIDEBAR KANAN = 1 container */}
                <aside className="w-full md:w-[260px] p-4 flex flex-col gap-3">
                {/* Container info template */}
                    <div className="rounded-[18px] bg-[#E9D2A0] shadow-[0_10px_24px_rgba(0,0,0,0.25)] p-3">
                        <div className="mb-2 flex items-center justify-between">
                            <p className="text-sm font-semibold text-[#5b2a0a]">
                                Tampilan Template
                            </p>
                            <span className="rounded-full bg-[#f6e2c0] px-2 py-1 text-[10px] font-medium text-[#8a5a2a]">
                                {selectedLabel}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="h-16 w-24 rounded-[10px] border border-[#d0a56e] bg-[#f6e2c0]" />
                            <p className="text-center text-[10px] leading-snug text-[#8a5a2a]">
                                {selectedDesc}
                            </p>
                        </div>
                    </div>

                {/* Container ukuran & mode */}
                    <div className="rounded-[18px] bg-[#E9D2A0] p-3 text-[11px] shadow-[0_10px_24px_rgba(0,0,0,0.25)] text-[#5b2a0a]">
                        <div className="relative flex h-32 w-full items-center justify-center rounded-[14px] border border-dashed border-[#c79a63] bg-[#fbe5c7]">
                            <canvas
                                ref={previewCanvasRef}
                                width={220}
                                height={110}
                                className="absolute inset-2 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-[10px]"
                            />
                        </div>
                        <p className="mb-1 font-semibold">Ukuran Model</p>
                        <p>Lebar: {selectedSize.width} cm</p>   
                        <p>Panjang: {selectedSize.height} cm</p>

                        <p className="mt-2 font-semibold">Mode</p>
                        <p>Multiply</p>

                        <div className="mt-3 flex gap-2">
                            <button
                                type="button"
                                className="flex-1 rounded-full bg-[#5b2a0a] px-3 py-1 text-[11px] font-semibold text-[#fbe5c7] hover:bg-[#4a2107]"
                            >
                                Terapkan
                            </button>
                            <button
                                type="button"
                                className="flex flex-1 items-center justify-center rounded-full border border-[#c79a63] bg-[#f6e2c0] px-3 py-1 text-[11px] font-semibold text-[#8a5a2a] hover:bg-[#f0d3aa]"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>

                {/* Container ukuran cetak */}
                    <div className="rounded-[18px] bg-[#E9D2A0] p-3 text-[11px] shadow-[0_10px_24px_rgba(0,0,0,0.25)] text-[#5b2a0a]">
                        <p className="mb-1 font-semibold">Ukuran Cetak :</p>
                        <p>30 x 30 cm</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}
