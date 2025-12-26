"use client";

import React from "react";
import Image from "next/image";
import { philosophy } from "@/lib/data";

export default function AboutPage() {
    return (
        <div className="bg-cream min-h-screen pt-24">
            {/* Header */}
            <section className="container mx-auto px-6 py-12 md:py-24 text-center">
                <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Story</span>
                <h1 className="font-serif text-5xl md:text-7xl text-primary mb-8">
                    Cultivating <span className="italic">Trust</span>,<br /> Harvesting Quality.
                </h1>
                <p className="text-xl text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
                    Founded on the principles of integrity and purity, GM Agro has grown from a local initiative
                    to a global standard-bearer in the FMCG sector.
                </p>
            </section>

            {/* Philosophy Section */}
            <section className="container mx-auto px-6 pb-24 space-y-32">
                {philosophy.map((item, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <h2 className="font-serif text-4xl text-primary">{item.title}</h2>
                            <div className="w-16 h-1 bg-secondary mb-4"></div>
                            <p className="text-primary/70 text-lg leading-relaxed">{item.text}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Stat Bar */}
            <section className="bg-primary text-cream py-24">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Partner Farms", val: "500+" },
                        { label: "Countries Served", val: "20+" },
                        { label: "Years of Trust", val: "15" },
                        { label: "Product Lines", val: "50+" },
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <p className="font-serif text-4xl md:text-5xl">{stat.val}</p>
                            <p className="text-sm font-bold uppercase tracking-widest text-secondary">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
