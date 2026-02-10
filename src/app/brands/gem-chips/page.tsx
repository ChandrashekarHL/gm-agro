"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { JaggedBubble, LightningBolt, HalftonePattern, SpeedLines } from "@/components/GemChipAssets";
import { Star, Zap, Flame } from "lucide-react";

const gemChipsProducts = products.filter(p => p.brand === "Gem Chips");

// Helper for "Star Rating" styled stats
const StatBar = ({ label, value, color }: { label: string, value: number, color: string }) => (
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
        <span className="w-12 text-right">{label}</span>
        <div className="flex-1 h-3 bg-black/10 rounded-full overflow-hidden border border-black">
            <div
                className={`h-full ${color}`}
                style={{ width: `${value}%` }}
            />
        </div>
    </div>
);

export default function GemChipsPage() {
    return (
        <div className="bg-yellow-400 min-h-screen font-sans selection:bg-black selection:text-white overflow-x-hidden">

            {/* --- HERO: COMIC EXPLOSION --- */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-8 border-black">
                {/* Background Sunburst (Rotating) */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-[200vw] h-[200vw] bg-[conic-gradient(from_0deg,theme('colors.red.500')_0deg_15deg,theme('colors.yellow.400')_15deg_30deg,theme('colors.red.500')_30deg_45deg,theme('colors.yellow.400')_45deg_60deg,theme('colors.red.500')_60deg_75deg,theme('colors.yellow.400')_75deg_90deg,theme('colors.red.500')_90deg_105deg,theme('colors.yellow.400')_105deg_120deg,theme('colors.red.500')_120deg_135deg,theme('colors.yellow.400')_135deg_150deg,theme('colors.red.500')_150deg_165deg,theme('colors.yellow.400')_165deg_180deg,theme('colors.red.500')_180deg_195deg,theme('colors.yellow.400')_195deg_210deg,theme('colors.red.500')_210deg_225deg,theme('colors.yellow.400')_225deg_240deg,theme('colors.red.500')_240deg_255deg,theme('colors.yellow.400')_255deg_270deg,theme('colors.red.500')_270deg_285deg,theme('colors.yellow.400')_285deg_300deg,theme('colors.red.500')_300deg_315deg,theme('colors.yellow.400')_315deg_330deg,theme('colors.red.500')_330deg_345deg,theme('colors.yellow.400')_345deg_360deg)] opacity-20"
                    />
                </div>

                {/* Halftone Overlay */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <HalftonePattern />
                </div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left: Text & Action */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                            className="inline-block relative mb-6"
                        >
                            <JaggedBubble className="w-64 h-40 md:w-80 md:h-48 text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]" text="" />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-black italic text-black rotate-[-5deg] whitespace-nowrap">
                                IT'S CRUNCH<br />TIME!
                            </span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black text-black mb-6 uppercase tracking-tighter drop-shadow-sm leading-[0.9]">
                            Snap.<br />
                            <span className="text-white text-stroke-3 text-stroke-black">Crackle.</span><br />
                            Pop Art.
                        </h1>

                        <p className="text-xl md:text-2xl font-bold text-black mb-8 max-w-md mx-auto md:mx-0 bg-white border-4 border-black p-4 rotate-1 shadow-[4px_4px_0px_black]">
                            Potatoes so good, they belong in a museum. (Or your mouth).
                        </p>

                        <div className="flex gap-4 justify-center md:justify-start">
                            <Button className="bg-blue-600 text-white border-4 border-black shadow-[6px_6px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_black] transition-all font-black text-xl px-8 py-6 rounded-none uppercase">
                                Grab a Bag <Zap className="ml-2 fill-yellow-400 text-black" />
                            </Button>
                        </div>
                    </div>

                    {/* Right: Floating Chips Hero */}
                    <div className="w-full md:w-1/2 relative h-[500px]">
                        <motion.div
                            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[100%] z-20"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200"
                                alt="Gem Chips Bag"
                                fill
                                className="object-contain drop-shadow-[10px_10px_0px_rgba(0,0,0,0.5)]"
                            />
                        </motion.div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.2 }}
                            className="absolute top-0 right-10 z-30"
                        >
                            <JaggedBubble className="w-32 h-24 text-red-500 drop-shadow-[4px_4px_0px_black]" />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-black text-white italic rotate-12">YUM!</span>
                        </motion.div>

                        <LightningBolt className="absolute bottom-10 left-10 w-24 h-24 text-blue-500 drop-shadow-[4px_4px_0px_black] animate-pulse z-30" />
                        <LightningBolt className="absolute top-10 left-20 w-16 h-16 text-yellow-300 drop-shadow-[4px_4px_0px_black] rotate-45 z-10" />
                    </div>
                </div>
            </section>


            {/* --- SECTION 2: THE TRADING CARDS (Products) --- */}
            <section className="py-24 bg-blue-500 border-b-8 border-black relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <SpeedLines className="w-full h-full text-black opacity-20" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20 bg-black text-white inline-block px-8 py-4 border-4 border-white shadow-[8px_8px_0px_rgba(0,0,0,0.5)] rotate-[-2deg] mx-auto w-auto">
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-wider">
                            Choose Your Fighter
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {gemChipsProducts.map((product, i) => {
                            // Mock stats for fun
                            const crunchLevel = 80 + (i * 2) % 20;
                            const spiceLevel = product.name.includes("Masala") || product.name.includes("Spice") ? 90 : 40;
                            const bgColor = i % 3 === 0 ? "bg-red-500" : i % 3 === 1 ? "bg-yellow-400" : "bg-purple-500";

                            return (
                                <motion.div
                                    key={product.id}
                                    whileHover={{ y: -10, rotate: 2, scale: 1.02 }}
                                    className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_black] group relative overflow-hidden"
                                >
                                    {/* Card Header */}
                                    <div className={`p-2 border-b-4 border-black mb-4 flex justify-between items-center ${bgColor}`}>
                                        <span className="font-black uppercase text-sm tracking-tighter bg-white px-2 border-2 border-black">#0{i + 1}</span>
                                        <div className="flex gap-1">
                                            {[...Array(3)].map((_, stars) => <Star key={stars} className="w-4 h-4 text-black fill-white" />)}
                                        </div>
                                    </div>

                                    {/* Image Area */}
                                    <div className="relative aspect-square mb-4 border-4 border-black bg-slate-100 overflow-hidden">
                                        <HalftonePattern className="absolute inset-0 text-slate-300 pointer-events-none" />
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-black text-2xl uppercase mb-1 leading-none">{product.name.replace("Gem ", "")}</h3>
                                    <p className="text-xs font-bold mb-4 border-b-2 border-black pb-2">{product.description}</p>

                                    {/* Stats */}
                                    <div className="space-y-2 mb-4 bg-slate-100 p-2 border-2 border-black">
                                        <StatBar label="CRUNCH" value={crunchLevel} color="bg-yellow-500" />
                                        <StatBar label="SPICE" value={spiceLevel} color="bg-red-500" />
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="font-black text-2xl">{product.price}</span>
                                        <Link href={`/products/${product.id}`}>
                                            <Button size="sm" className="bg-black text-white rounded-none font-bold uppercase hover:bg-white hover:text-black border-2 border-black transition-colors">
                                                Select
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* --- SECTION 3: FLAVOR BLAST (Text/Info) --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-[100px] opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>

                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 relative">
                        <div className="border-8 border-black p-8 bg-yellow-400 shadow-[16px_16px_0px_black] rotate-3">
                            <h2 className="text-5xl font-black uppercase mb-6 leading-none">
                                Warning:<br />High Voltage<br />Flavor.
                            </h2>
                            <p className="text-xl font-bold border-l-8 border-black pl-6">
                                We don't do boring. We fry potatoes until they scream "EAT ME". Then we shower them in spices that make your tongue dance.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-2 gap-6">
                        {[
                            { icon: Flame, title: "HOT!", text: "Spices that bite back." },
                            { icon: Zap, title: "LOUD!", text: "Crunch audible from space." },
                            { icon: Star, title: "FRESH!", text: "Made daily. Eaten hourly." },
                            { icon: Star, title: "REAL!", text: "Potatoes, not science experiments." },
                        ].map((feat, i) => (
                            <div key={i} className="bg-white border-4 border-black p-6 hover:bg-blue-100 transition-colors">
                                <feat.icon className="w-10 h-10 mb-4 stroke-[3px]" />
                                <h3 className="font-black text-xl mb-2 uppercase">{feat.title}</h3>
                                <p className="font-bold text-sm leading-tight">{feat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
