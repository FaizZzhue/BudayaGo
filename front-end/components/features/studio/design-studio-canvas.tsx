"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useState } from "react";

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

    useEffect(() => {
        if (!threeContainerRef.current) return;

        let renderer: THREE.WebGLRenderer | null = null;
        let camera: THREE.PerspectiveCamera;
        let scene: THREE.Scene;
        let model: THREE.Object3D | null = null;
        let animationFrameId: number;
        let fabricCanvas: any = null;

        const init = async () => {
            const [{ GLTFLoader }, fabricModule] = await Promise.all([
                import("three/examples/jsm/loaders/GLTFLoader.js"),
                import("fabric"),
            ]);

            const fabric =
                (fabricModule as any).fabric || (fabricModule as any).default;
                (fabricModule as any).default?.fabric ??
                (fabricModule as any).default;

                if (!fabric || !fabric.Canvas) {
                    console.error("Gagal memuat Fabric.js, modul:", fabricModule);
                    return;
                }

            // --- THREE SETUP ---
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

            // Lights
            const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.9);
            hemiLight.position.set(0, 2, 0);
            scene.add(hemiLight);

            const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
            dirLight.position.set(3, 5, 5);
            scene.add(dirLight);

        // Fabric canvas untuk motif (2D)
            if (fabricCanvasRef.current) {
                fabricCanvas = new fabric.Canvas(fabricCanvasRef.current, {
                    backgroundColor: "#ffffff",
                    selection: true,
                });

                // contoh objek awal
                const rect = new fabric.Rect({
                    width: 150,
                    height: 80,
                    fill: "#f29f58",
                });
                fabricCanvas.add(rect);
                fabricCanvas.centerObject(rect);
                fabricCanvas.renderAll();
            }

        // helper: ambil texture dari fabric canvas lalu tempel ke model
        const updateTextureFromFabric = () => {
            if (!fabricCanvas || !model) return;

            const c: HTMLCanvasElement = fabricCanvas.getElement();
            const texture = new THREE.CanvasTexture(c);
            texture.needsUpdate = true;

            model!.traverse((obj: any) => {
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
                fabricCanvas.on("object:modified", updateTextureFromFabric);
                fabricCanvas.on("object:added", updateTextureFromFabric);
            }

            const loader = new GLTFLoader();
            loader.load(
                "/models/shirt.gltf",
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

        // Resize
            const onResize = () => {
                if (!renderer || !camera) return;
                const { clientWidth, clientHeight } = container;
                camera.aspect = clientWidth / clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(clientWidth, clientHeight);
            };
            window.addEventListener("resize", onResize);

        // Animate
            const animate = () => {
                animationFrameId = requestAnimationFrame(animate);
                if (model) {
                    model.rotation.y += 0.004;
                }
                renderer!.render(scene, camera);
            };
            animate();

            // cleanup
            return () => {
                window.removeEventListener("resize", onResize);
            };
        };

        let cleanupResize: (() => void) | undefined;

        init().then((fn) => {
            cleanupResize = fn as any;
        });

        return () => {
            if (cleanupResize) cleanupResize();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            if (renderer) {
                renderer.dispose();
                const canvas = renderer.domElement;
                canvas.parentNode?.removeChild(canvas);
            }
            if (fabricCanvas) {
                fabricCanvas.dispose?.();
            }
        };
    }, []);

    return (
        <div className="w-full">
      {/* GRID: kiri - tengah - kanan */}
      <div className="grid gap-5 md:grid-cols-[260px_minmax(0,1fr)_260px]">
        {/* SIDEBAR KIRI */}
        <aside className="flex flex-col gap-4 rounded-[24px] bg-[#f6e2c0] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
          {/* Motif */}
          <div>
            <p className="mb-2 text-sm font-semibold text-[#5b2a0a]">Motif</p>
            <div className="relative flex h-32 w-full items-center justify-center rounded-[18px] border border-dashed border-[#c79a63] bg-[#fbe5c7]">
              <canvas
                ref={fabricCanvasRef}
                width={220}
                height={110}
                className="absolute inset-2 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-[14px] bg-white"
              />
              <div className="pointer-events-none z-10 text-center text-[11px] text-[#8a5a2a]">
                <p>Seret dan lepas gambar di sini</p>
                <p className="mt-1 text-[10px] opacity-70">
                  atau klik untuk unggah
                </p>
              </div>
            </div>
          </div>

          {/* Warna */}
          <div>
            <p className="mb-2 text-sm font-semibold text-[#5b2a0a]">Warna</p>
            <div className="flex flex-wrap gap-2">
              {["#f7d46b", "#f29f58", "#e35c3f", "#c3423f", "#71321f", "#171717"].map(
                (c) => (
                  <Button
                    key={c}
                    style={{ backgroundColor: c }}
                    className="h-7 w-7 rounded-full border border-[#d6b58b]"
                  />
                )
              )}
            </div>
          </div>

          {/* Template */}
          <div>
            <p className="mb-2 text-sm font-semibold text-[#5b2a0a]">
              Template
            </p>
            <div className="flex gap-2">
              {["Kain", "Kaos", "Kemeja"].map((label) => (
                <button
                  key={label}
                  className="flex h-12 flex-1 flex-col items-center justify-center rounded-[14px] bg-[#fbe5c7] text-[10px] font-medium text-[#8a5a2a] shadow-[0_4px_10px_rgba(0,0,0,0.12)]"
                >
                  <div className="mb-1 h-4 w-4 rounded-[4px] border border-[#c79a63]" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* BAGIAN TENGAH (KANVAS KEMEJA) */}
        <section className="flex flex-col items-center justify-center rounded-[28px] bg-[#f6e2c0] px-6 py-8 shadow-[0_14px_30px_rgba(0,0,0,0.25)]">
          <div className="relative w-full max-w-md rounded-[28px] bg-[#f0d3aa] px-6 py-10">
            {/* border inner buat efek tekstur */}
            <div className="pointer-events-none absolute inset-4 rounded-[24px] border border-[rgba(0,0,0,0.05)]" />

            {/* Three.js mount area */}
            <div
              ref={threeContainerRef}
              className="relative z-10 h-[260px] w-full"
            />
          </div>

          {/* Tombol Lihat 3D */}
          <button className="mt-6 rounded-full bg-[#5b2a0a] px-10 py-2 text-sm font-semibold text-[#fbe5c7] shadow-[0_8px_16px_rgba(0,0,0,0.25)] hover:bg-[#4a2107]">
            Lihat 3D
          </button>
        </section>

        {/* SIDEBAR KANAN */}
        <aside className="flex flex-col gap-4 rounded-[24px] bg-[#f6e2c0] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
          {/* Tampilan Template */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-[#5b2a0a]">
                Tampilan Template
              </p>
              <button className="rounded-full bg-[#fbe5c7] px-2 py-1 text-[10px] font-medium text-[#8a5a2a]">
                Default ▾
              </button>
            </div>
            <div className="flex h-24 w-full items-center justify-center rounded-[18px] bg-[#fbe5c7]">
              <div className="h-16 w-24 rounded-[10px] border border-[#d0a56e] bg-[#f6e2c0]" />
            </div>
          </div>

          {/* Ukuran & Mode */}
          <div className="rounded-[18px] bg-[#fbe5c7] p-3 text-[11px] text-[#5b2a0a]">
            <p className="mb-1 font-semibold">Ukuran</p>
            <p>Lebar: 30 cm</p>
            <p>Tinggi: 32 cm</p>

            <p className="mt-2 font-semibold">Mode</p>
            <p>Multiply</p>

            <div className="mt-3 flex gap-2">
              <button className="flex-1 rounded-full bg-[#5b2a0a] px-3 py-1 text-[11px] font-semibold text-[#fbe5c7] hover:bg-[#4a2107]">
                Terapkan
              </button>
              <button className="flex flex-1 items-center justify-center rounded-full border border-[#c79a63] bg-[#f6e2c0] px-3 py-1 text-[11px] font-semibold text-[#8a5a2a] hover:bg-[#f0d3aa]">
                Hapus
              </button>
            </div>
          </div>

          {/* Ukuran Cetak */}
          <div className="rounded-[18px] bg-[#fbe5c7] p-3 text-[11px] text-[#5b2a0a]">
            <p className="mb-1 font-semibold">Ukuran Cetak :</p>
            <p>30 x 30 cm</p>
          </div>
        </aside>
      </div>
    </div>
    );
}
