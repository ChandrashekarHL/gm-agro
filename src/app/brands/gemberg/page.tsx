"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Droplet, Zap, Sparkles, Star, ChevronRight, ArrowRight } from "lucide-react";
import FizzHero from "@/components/FizzHero";
import { motion, useScroll, useTransform } from "framer-motion";
import { LemonSlice, OrangeZest, AbstractBlob, StarBurst } from "@/components/EditorialAssets";


const gembergProducts = products.filter(p => p.brand === "Gemberg");

export default function GembergPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Creative Parallax Hero */}
            <FizzHero />

            {/* Flavors Section: Editorial Splash (Refined) */}
            <section className="relative py-12 md:py-20 overflow-hidden bg-white">

                {/* Giant Typography Background */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden h-full">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 0.1 }}
                        transition={{ duration: 1 }}
                        className="absolute top-10 -left-10 font-serif text-[10rem] md:text-[18rem] text-orange-900 leading-none opacity-5 rotate-[-10deg] whitespace-nowrap z-0"
                    >
                        FIZZ
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 0.1 }}
                        transition={{ duration: 1 }}
                        className="absolute bottom-10 -right-10 font-serif text-[10rem] md:text-[18rem] text-yellow-500 leading-none opacity-5 rotate-[5deg] whitespace-nowrap z-0"
                    >
                        POP.
                    </motion.div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="font-serif text-5xl md:text-7xl text-slate-900 mb-4 relative inline-block"
                        >
                            Gemberg <span className="italic text-orange-600">Rising.</span>
                            <StarBurst className="absolute -top-6 -right-6 w-12 h-12 text-yellow-400 animate-spin-slow opacity-80" />
                        </motion.h2>
                        <p className="text-lg text-slate-500 max-w-xl mx-auto font-light">
                            A chaotic symphony of fruit and bubbles.
                        </p>
                    </div>

                    {/* Staggered Grid Layout (No Overlap) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-7xl mx-auto">

                        {gembergProducts.map((product, index) => {
                            // Stagger effect using margin-top logic (simulated by flex/grid placement or transform)
                            const isEven = index % 2 === 0;
                            const rotateVal = index % 2 === 0 ? -3 : 3;
                            const yOffset = (index % 3) * 40; // 0px, 40px, 80px staggered down

                            return (
                                <Link key={product.id} href={`/products/${product.id}`} className="block">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.05, rotate: 0 }}
                                        transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                                        className="relative flex flex-col items-center group w-full"
                                        style={{ marginTop: `${index % 3 === 0 ? 0 : (index % 3) * 3}rem` }} // Stagger via margin on large screens
                                    >
                                        {/* Abstract Shape Behind */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[280px] md:h-[280px] -z-10 group-hover:scale-110 transition-transform duration-500">
                                            {index % 3 === 0 && <AbstractBlob className="text-orange-100 w-full h-full rotate-45" />}
                                            {index % 3 === 1 && <LemonSlice className="text-yellow-100 w-full h-full animate-pulse-slow" />}
                                            {index % 3 === 2 && <OrangeZest className="text-red-50 w-full h-full rotate-90" />}
                                        </div>

                                        {/* Product Image */}
                                        <div className="relative w-40 md:w-56 aspect-[1/2.5] mb-4 drop-shadow-xl transform transition-transform duration-300 group-hover:-translate-y-2">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* Huge Overlay Typography for Name (Behind/Blend) */}
                                        <h3 className="font-serif text-4xl md:text-6xl text-slate-900/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap z-0 scale-150 group-hover:scale-125 transition-transform duration-500 uppercase tracking-tighter">
                                            {// Show part of name like "LEMON", "ORANGE", "COLA"
                                                product.name.split(" ")[0].substring(0, 5)
                                            }
                                        </h3>

                                        {/* Minimal Label below */}
                                        <div className="text-center bg-white/95 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm border border-slate-100 mt-2 z-20 relative">
                                            <p className="font-bold text-slate-900 uppercase tracking-widest text-xs md:text-sm">{product.name}</p>
                                        </div>

                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* The Gemberg Difference: Glassmorphism on Gradient */}
            <section className="py-32 bg-gradient-to-br from-orange-600 via-red-500 to-pink-600 text-white relative overflow-hidden">
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-orange-200 font-bold uppercase tracking-[0.2em] mb-4">Why We Fizz</p>
                            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-none">
                                Not Just<br />Another Soda.
                            </h2>
                            <p className="text-xl text-orange-100/90 leading-relaxed mb-10 max-w-md">
                                Most sodas are just sugar and water. Gemberg is different. We blend the fun of fizz with the goodness of real fruit pulp.
                            </p>
                            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold rounded-full px-8 py-6">
                                The Gemberg Story
                            </Button>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Droplet, title: "5% Real Pulp", desc: "You can see it. You can taste it." },
                                { icon: Zap, title: "Perfect Fizz", desc: "Engineered for maximum refreshment." },
                                { icon: Sparkles, title: "Bold Flavor", desc: "Recipes perfected for decades." },
                                { icon: Star, title: "Since 1958", desc: "A legacy of trust & quality." },
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
                                >
                                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-white/70 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section: High Energy */}
            <section className="py-40 bg-slate-900 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900 to-slate-900 z-10"></div>
                {/* Glow behind logo area */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px]"></div>

                <div className="container mx-auto px-6 relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="font-serif text-6xl md:text-9xl text-white mb-8"
                    >
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Fizz?</span>
                    </motion.h2>
                    <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
                        Join the revolution of fruit-filled refreshment.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl px-12 py-8 rounded-full shadow-[0_0_40px_rgba(255,69,0,0.5)] hover:shadow-[0_0_60px_rgba(255,69,0,0.7)] border-none transition-all">
                            Find Nearest Store <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
