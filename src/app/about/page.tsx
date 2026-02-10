"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { philosophy } from "@/lib/data";
import { Wheat, Droplet, Users, Target, ArrowDown } from "lucide-react";

const timelineEvents = [
    {
        year: "1958",
        title: "The Seed is Sown",
        desc: "Late Mr. G. Mallikarjunappa (MP) lays the foundation of the GM Group in Davanagere, creating a legacy of integrity and community service.",
        icon: <Wheat className="w-6 h-6" />
    },
    {
        year: "2010s",
        title: "Diversification",
        desc: "The group expands into Education, Finance, and Sugar industries, becoming a pillar of Central Karnataka's economy.",
        icon: <Users className="w-6 h-6" />
    },
    {
        year: "2016",
        title: "GM Agro & Beverages",
        desc: "Established with a vision to support local farmers by integrating real fruit pulp into carbonated drinks.",
        icon: <Droplet className="w-6 h-6" />
    },
    {
        year: "Today",
        title: "Global Vision",
        desc: "Delivering premium refreshments like Gemsip, Gemberg, and Gemneer while championing the 'Make in India' initiative.",
        icon: <Target className="w-6 h-6" />
    }
];

export default function AboutPage() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    return (
        <div className="bg-[#fcfaf7] min-h-screen text-[#2c1810] selection:bg-secondary selection:text-white pt-20">

            {/* --- HERO: CINEMATIC LEGACY --- */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2670&auto=format&fit=crop"
                        alt="Lush Fields of Davanagere"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#fcfaf7] mix-blend-multiply" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-white/90 font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6 block drop-shadow-md"
                    >
                        Since 1958
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="font-serif text-5xl md:text-8xl text-white mb-8 leading-tight drop-shadow-lg"
                    >
                        Roots Deep.<br />
                        <span className="italic text-yellow-100">Vision Wide.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-white/90 text-xl md:text-2xl font-light leading-relaxed drop-shadow-md"
                    >
                        From the heart of Davanagere to households everywhere,<br className="hidden md:block" />
                        we craft refreshment with integrity.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
                >
                    <ArrowDown className="w-8 h-8" />
                </motion.div>
            </section>


            {/* --- FOUNDER & VISION --- */}
            <section className="py-24 container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 relative">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-none border-8 border-white shadow-2xl rotate-[-2deg]">
                            <Image
                                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2669&auto=format&fit=crop" // Placeholder for Founder
                                alt="Founder Vision"
                                fill
                                className="object-cover sepia-[0.3]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-serif text-2xl">Late Mr. G. Mallikarjunappa</p>
                                <p className="text-sm uppercase tracking-widest opacity-80">Founder & MP</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="font-serif text-4xl md:text-5xl text-[#2c1810]">A Legacy of Trust</h2>
                        <p className="text-lg leading-relaxed text-[#5d4037] border-l-4 border-secondary pl-6">
                            "The true measure of success is not just business growth, but the lives we touch and the community we build."
                        </p>
                        <p className="text-[#5d4037]/80 leading-relaxed text-lg">
                            Founded on the principles of social responsibility and ethical business, GM Group has grown into a diverse conglomerate. Our foray into Agro-Beverages is driven by a singular mission: <strong>To uplift local farmers</strong> while providing healthy, fruit-rich beverages to the nation.
                        </p>
                    </div>
                </div>
            </section>


            {/* --- TIMELINE --- */}
            <section ref={targetRef} className="py-24 bg-[#e8e4dc] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-[#2c1810]/10" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="font-serif text-4xl text-[#2c1810] mb-4">Our Journey</h2>
                        <p className="text-[#5d4037] uppercase tracking-widest text-sm">Decades of progress</p>
                    </div>

                    <div className="space-y-24">
                        {timelineEvents.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                                    <span className="font-black text-6xl text-[#2c1810]/5 overflow-hidden block -mb-8 relative z-0">
                                        {event.year}
                                    </span>
                                    <h3 className="font-serif text-3xl text-[#2c1810] relative z-10">{event.title}</h3>
                                </div>

                                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-[#2c1810] text-[#fcfaf7] rounded-full flex items-center justify-center border-4 border-[#e8e4dc] shadow-xl">
                                    {event.icon}
                                </div>

                                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "pl-0 md:pl-12" : "pr-0 md:pr-12 text-left md:text-right"}`}>
                                    <div className="md:hidden">
                                        <span className="text-secondary font-bold">{event.year}</span>
                                        <h3 className="font-serif text-2xl text-[#2c1810] mb-2">{event.title}</h3>
                                    </div>
                                    <p className="text-[#5d4037] leading-relaxed max-w-md ml-0 md:ml-auto md:mr-0 inline-block">
                                        {event.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- PHILOSOPHY: MAKE IN INDIA --- */}
            <section className="py-24 bg-[#2c1810] text-[#fcfaf7]">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
                        <h2 className="font-serif text-4xl md:text-6xl mb-8 text-white">Fruit in Every Fizz.</h2>
                        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                            <p>
                                Inspired by the vision of supporting Indian agriculture, we ensure our beverages aren't just empty calories.
                            </p>
                            <p>
                                We integrate <strong>real fruit pulp</strong> into our carbonated drinks, creating a stronger demand for local produce and providing a healthier alternative for our consumers.
                            </p>
                            <div className="flex gap-4 mt-8">
                                <div className="text-center">
                                    <span className="block text-3xl font-bold text-secondary mb-1">100%</span>
                                    <span className="text-xs uppercase tracking-widest">Indian</span>
                                </div>
                                <div className="w-px h-12 bg-white/20" />
                                <div className="text-center">
                                    <span className="block text-3xl font-bold text-secondary mb-1">5%+</span>
                                    <span className="text-xs uppercase tracking-widest">Fruit Content</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square">
                        <Image
                            src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1200"
                            alt="Fresh Mango Harvest"
                            fill
                            className="object-cover rounded-full border-8 border-white/5"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-secondary text-[#2c1810] p-6 rounded-2xl shadow-xl max-w-xs">
                            <p className="font-serif italic text-lg">"Empowering the hands that feed the nation."</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
