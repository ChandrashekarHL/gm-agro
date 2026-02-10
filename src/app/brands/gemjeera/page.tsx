"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { CuminSeed, MintLeaf, RockSalt, MasalaBurst, FizzBubble } from "@/components/MasalaJeeraAssets";
import { products } from "@/lib/data";

const gemjeeraProduct = products.find(p => p.brand === "GemJeera");

export default function GemJeeraPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax Transforms for "Explosion"
    const yseeds = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const ysalt = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const ymint = useTransform(scrollYProgress, [0, 1], [0, -800]);
    const bottleRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const textParallax = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

    return (
        <div ref={containerRef} className="bg-[#1a472a] min-h-screen overflow-hidden text-cream-100 selection:bg-yellow-500 selection:text-black">

            {/* --- HERO: MASALA EXPLOSION --- */}
            <section className="relative h-[120vh] flex items-center justify-center overflow-hidden">

                {/* Background Chaos Patterns */}
                <div className="absolute inset-0 bg-[#0f2b19] opacity-100 z-0">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/hero-gemjeera.jpeg"
                            alt="GemJeera Hero Background"
                            fill
                            className="object-cover opacity-40 mix-blend-overlay" // Subtle overlay
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a472a]/40 to-[#1a472a] z-10"></div>
                </div>

                {/* Floating Spices (Parallax Layer) */}
                <motion.div style={{ y: yseeds }} className="absolute inset-0 z-10 pointer-events-none">
                    <CuminSeed className="absolute top-[20%] left-[10%] w-12 h-12 text-[#c2a373] opacity-80 rotate-12" />
                    <CuminSeed className="absolute top-[60%] left-[80%] w-16 h-16 text-[#c2a373] opacity-60 -rotate-45" />
                    <CuminSeed className="absolute top-[80%] left-[15%] w-10 h-10 text-[#a68b5e] opacity-70 rotate-90" />
                </motion.div>

                <motion.div style={{ y: ysalt }} className="absolute inset-0 z-10 pointer-events-none">
                    <RockSalt className="absolute top-[15%] right-[20%] w-8 h-8 text-white opacity-40 animate-ping-slow" />
                    <RockSalt className="absolute bottom-[30%] left-[25%] w-12 h-12 text-white opacity-30 rotate-45" />
                </motion.div>

                <motion.div style={{ y: ymint }} className="absolute inset-0 z-10 pointer-events-none">
                    <MintLeaf className="absolute top-[30%] right-[30%] w-24 h-24 text-green-400 opacity-20 rotate-[15deg] blur-sm" />
                    <MintLeaf className="absolute bottom-[10%] left-[10%] w-32 h-32 text-green-500 opacity-20 -rotate-[30deg] blur-md" />
                </motion.div>


                {/* GIANT BACKGROUND TYPOGRAPHY */}
                <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                    <motion.h1
                        style={{ y: textParallax }}
                        className="font-serif text-[15vw] leading-none text-[#e8f5e9]/5 whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg]"
                    >
                        MASALA KICK
                    </motion.h1>
                </div>


                {/* CENTRAL BOTTLE (The Eye of the Storm) */}
                <div className="relative z-20 flex flex-col items-center">
                    <div className="relative w-64 md:w-96 aspect-[1/3]">
                        {/* Burst Effect behind bottle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[100%] z-[-1]">
                            <MasalaBurst className="w-full h-full text-yellow-500 opacity-20 animate-spin-slower" />
                        </div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 100 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src={gemjeeraProduct?.image || "/gemberg_jeera_bottle_1770722409448.png"}
                                alt="GemJeera Bottle"
                                fill
                                className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>

                {/* SCROLL TEXT */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-30"
                >
                    <p className="text-sm tracking-[0.5em] text-yellow-400 uppercase mb-2">Taste the Chaos</p>
                    <div className="w-px h-12 bg-yellow-400/50 mx-auto animate-bounce" />
                </motion.div>

            </section>


            {/* --- SECTION 2: THE MIX (Visual Ingredients) --- */}
            <section className="py-24 bg-[#143d22] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="font-serif text-5xl md:text-7xl text-white mb-6"
                        >
                            The <span className="text-yellow-400 italic">Alchemy.</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <CuminSeed className="w-20 h-20 text-[#c2a373] mb-6" />,
                                title: "Roasted Jeera",
                                desc: "Earthy, warm, and digestive. The soul of the drink."
                            },
                            {
                                icon: <RockSalt className="w-20 h-20 text-white mb-6" />,
                                title: "Rock Salt",
                                desc: "A sharp, savory kick that wakes up your taste buds."
                            },
                            {
                                icon: <FizzBubble className="w-20 h-20 text-blue-300 mb-6" />,
                                title: "Violent Fizz",
                                desc: "Carbonation so strong it carries the flavor to your brain."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                                className="bg-[#1a472a] border border-[#ffffff10] p-10 rounded-3xl text-center group hover:bg-[#235c36] transition-colors"
                            >
                                <div className="group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                                <h3 className="font-serif text-2xl text-white mb-4">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- SECTION 3: CHAOS TO CALM --- */}
            <section className="py-32 bg-yellow-500 text-[#0f2b19] relative">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-serif text-6xl md:text-8xl leading-[0.9] mb-8">
                            Chaos<br />to <span className="text-white">Calm.</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed max-w-md">
                            It starts with a spicy punch, but ends with a cooling soothe.
                        </p>
                        <p className="opacity-80 text-lg mb-10 max-w-md">
                            GemJeera isn't just a soda. It's an ancient digestive remedy disguised as a party in your mouth. Perfect after a heavy meal.
                        </p>
                        <Link href="/products/gemjeera-masala">
                            <Button size="lg" className="bg-[#0f2b19] text-yellow-400 hover:bg-black font-bold px-10 py-6 rounded-full text-lg">
                                Grab a Bottle
                            </Button>
                        </Link>
                    </div>
                    <div className="relative h-[600px] w-full flex items-center justify-center">
                        {/* Spinning Mandala of Spices */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[500px] h-[500px] border border-[#0f2b19]/10 rounded-full flex items-center justify-center"
                        >
                            <CuminSeed className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 text-[#0f2b19]/20" />
                            <CuminSeed className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 text-[#0f2b19]/20 rotate-180" />
                            <MintLeaf className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 text-[#0f2b19]/20 -rotate-90" />
                            <MintLeaf className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 text-[#0f2b19]/20 rotate-90" />
                        </motion.div>

                        {/* Bottle in front */}
                        <div className="relative w-48 mx-auto z-10">
                            <Image
                                src={gemjeeraProduct?.image || "/Product Shot-gem jeera.png"}
                                alt="GemJeera Calm"
                                width={300}
                                height={900}
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
