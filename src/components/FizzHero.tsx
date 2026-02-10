"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function FizzHero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });

    // Parallax for main content
    const yContent = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;
        mouseX.set(x);
        mouseY.set(y);
    }

    // Layers movement based on mouse
    const moveBackground = useTransform(springX, (val) => val / 40); // Subtle
    const moveMidground = useTransform(springX, (val) => val / 20);  // Medium
    const moveForeground = useTransform(springX, (val) => val / 10); // Fast

    return (
        <section
            ref={ref}
            className="relative h-[110vh] overflow-hidden bg-gradient-to-br from-[#FF8C00] via-[#FF4500] to-[#8B0000] text-white"
            onMouseMove={handleMouseMove}
        >
            {/* --- BACKGROUND LAYERS (Bubbles) --- */}

            {/* Deep Layer (Slow, Blurry) */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ x: moveBackground, opacity: 0.4 }}
            >
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`deep-${i}`}
                        className="absolute rounded-full bg-white blur-sm"
                        initial={{
                            width: Math.random() * 50 + 20,
                            height: Math.random() * 50 + 20,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100 + 100}%`,
                        }}
                        animate={{
                            y: [0, -1000],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 20
                        }}
                    />
                ))}
            </motion.div>

            {/* Mid Layer (Clearer, Faster) */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ x: moveMidground }}
            >
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`mid-${i}`}
                        className="absolute rounded-full bg-white/20 border border-white/40"
                        initial={{
                            width: Math.random() * 30 + 10,
                            height: Math.random() * 30 + 10,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100 + 100}%`,
                        }}
                        animate={{
                            y: [0, -1200],
                            x: [0, Math.sin(i) * 50], // Wiggle
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                    />
                ))}
            </motion.div>

            {/* Foreground (Very Fast Fizz) */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ x: moveForeground }}
            >
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={`fore-${i}`}
                        className="absolute rounded-full bg-white/60"
                        initial={{
                            width: Math.random() * 6 + 2,
                            height: Math.random() * 6 + 2,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100 + 100}%`,
                        }}
                        animate={{
                            y: [0, -1500]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </motion.div>


            {/* --- MAIN CONTENT --- */}
            <motion.div
                style={{ y: yContent, opacity: opacityContent }}
                className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
            >
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Text Area */}
                    <div className="lg:col-span-7 text-center lg:text-left pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold tracking-[0.2em] mb-6 shadow-xl">
                                EST. 1958
                            </span>
                        </motion.div>

                        <motion.h1
                            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 drop-shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, type: "spring" }}
                        >
                            Feel The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white italic relative inline-block">
                                Real Fizz.
                                {/* Underline decoration */}
                                <motion.span
                                    className="absolute bottom-2 left-0 w-full h-3 bg-white/30 skew-x-12 -z-10"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            India's first carbonated drink with <strong className="text-white font-bold">5% real fruit pulp</strong>.
                            Experience the burst of authentic flavor.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                Taste the Fizz
                            </Button>
                            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full border border-white/30 backdrop-blur-sm">
                                View Flavors
                            </Button>
                        </motion.div>
                    </div>

                    {/* Hero Image (Product) */}
                    <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-center justify-center pointer-events-auto">
                        {/* Glowing Orb Behind Bottle */}
                        <div className="absolute w-[400px] h-[400px] bg-yellow-400 rounded-full blur-[100px] opacity-20 animate-pulse"></div>

                        <motion.div
                            style={{ x: moveMidground, y: moveForeground, rotate: -5 }}
                            whileHover={{ scale: 1.1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1581006663862-8c4d6c4f8c4e?q=80&w=1200"
                                alt="Gemberg Bottle"
                                fill
                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                priority
                            />
                        </motion.div>
                    </div>

                </div>
            </motion.div>

            {/* Bottom Fade Gradient to merge with next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
        </section>
    );
}
