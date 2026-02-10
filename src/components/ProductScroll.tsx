"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 205; // Estimated from directory listing

export default function ProductScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [framesLoaded, setFramesLoaded] = useState(0);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT - 1]);

    // Section opacity transforms for text
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
    const opacity4 = useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 1]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    // Pad number with leading zeros (001, 002, etc.)
                    const paddedIndex = i.toString().padStart(3, "0");
                    img.src = `/scroll animation splits/ezgif-frame-${paddedIndex}.jpg`;
                    img.onload = () => {
                        loadedImages[i - 1] = img;
                        setFramesLoaded((prev) => prev + 1);
                        resolve();
                    };
                    img.onerror = () => {
                        // If image fails, just resolve to keep going, maybe log it
                        console.warn(`Failed to load frame ${i}`);
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Set canvas dimensions to match window or image aspect ratio
        // Ideally, we want to cover the screen
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Draw image centered and cover
        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        // Clear and draw
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Fill background to match image if needed (Gemsip bottle has white bg)
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        const frameIndex = Math.round(latest);
        if (images.length > 0) {
            requestAnimationFrame(() => renderFrame(frameIndex));
        }
    });

    // Initial render once loaded
    useEffect(() => {
        if (framesLoaded === FRAME_COUNT && images.length > 0) {
            renderFrame(1);
        }
    }, [framesLoaded, images]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-white">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {framesLoaded < FRAME_COUNT ? (
                    <div className="h-full w-full flex items-center justify-center bg-white text-slate-900 font-sans absolute inset-0 z-50">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                            <p className="tracking-widest uppercase text-sm opacity-60">Loading Experience... {Math.round((framesLoaded / FRAME_COUNT) * 100)}%</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <canvas ref={canvasRef} className="block w-full h-full object-cover" />

                        {/* Overlay Content Wrapper */}
                        <div className="absolute inset-0 z-10 pointer-events-none">

                            {/* 0% Section */}
                            <motion.div
                                style={{ opacity: opacity1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-white/30 backdrop-blur-[2px]"
                            >
                                <h1 className="font-serif text-5xl md:text-7xl text-slate-900 mb-4 tracking-tight drop-shadow-sm">
                                    Gemsip Mango.<br /><span className="text-orange-600 italic">The Golden Standard.</span>
                                </h1>
                                <p className="text-slate-600 text-lg uppercase tracking-[0.3em] font-medium">Pure. Authentic. Timeless.</p>
                            </motion.div>

                            {/* 30% Section */}
                            <motion.div
                                style={{ opacity: opacity2 }}
                                className="absolute inset-0 flex items-center p-12 md:p-24"
                            >
                                <div className="max-w-xl text-left bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/40">
                                    <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-6 leading-tight">
                                        Hand-picked<br />Ratnagiri Alphonsos.
                                    </h2>
                                    <p className="text-slate-700 text-xl font-light leading-relaxed">
                                        Sourced directly from the orchards. Only the finest, sun-ripened mangoes make the cut.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 60% Section */}
                            <motion.div
                                style={{ opacity: opacity3 }}
                                className="absolute inset-0 flex items-center justify-end p-12 md:p-24"
                            >
                                <div className="max-w-xl text-right bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/40">
                                    <h2 className="font-serif text-4xl md:text-6xl text-slate-900 mb-6 leading-tight">
                                        Thick, Pulpy,<br />& 100% Real.
                                    </h2>
                                    <p className="text-slate-700 text-xl font-light leading-relaxed">
                                        No shortcuts. Just the pure, fibrous goodness of real fruit in every bottle.
                                    </p>
                                </div>
                            </motion.div>

                            {/* 90% Section */}
                            <motion.div
                                style={{ opacity: opacity4 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-white/30 backdrop-blur-[2px]"
                            >
                                <h2 className="font-serif text-6xl md:text-8xl text-slate-900 mb-8 tracking-tighter drop-shadow-sm">
                                    Sip the Sunshine.
                                </h2>
                                <button className="bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-slate-900 transition-all duration-300 pointer-events-auto shadow-xl hover:shadow-2xl hover:scale-105 transform">
                                    Order Now
                                </button>
                            </motion.div>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
