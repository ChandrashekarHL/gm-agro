"use client";

import React from "react";
import Image from "next/image";
import { philosophy } from "@/lib/data";

export default function AboutPage() {
    return (
        <div className="bg-cream min-h-screen pt-24">
            {/* Header / Heritage */}
            <section className="container mx-auto px-6 py-12 md:py-24 text-center">
                <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Since 1958</span>
                <h1 className="font-serif text-4xl md:text-6xl text-primary mb-8 leading-tight">
                    From Davanagere to the World:<br /> A Legacy of <span className="italic">Excellence</span>.
                </h1>
                <div className="max-w-3xl mx-auto space-y-6 text-lg text-primary/80 font-light leading-relaxed text-left md:text-center">
                    <p>
                        The roots of <strong>GM Group of Companies</strong> date back to 1958 when Late <strong>Mr. G. Mallikarjunappa</strong>,
                        Member of Parliament (Davanagere constituency, Central Karnataka), laid the foundation of the Group.
                    </p>
                    <p>
                        Over the decades, the group has diversified into a wide array of businesses including
                        Manufacturing Industries, Finance, Education, Trading, and Import & Export.
                    </p>
                </div>
            </section>

            {/* Inception & Vision Section */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?q=80&w=2574&auto=format&fit=crop"
                            alt="Fruit Harvest"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10"></div>
                    </div>
                    <div className="space-y-8">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Inception</span>
                        <h2 className="font-serif text-4xl text-primary">Building a Future<br /> in FMCG</h2>
                        <div className="space-y-6 text-primary/70 leading-relaxed">
                            <p>
                                <strong>GM AGRO AND BEVERAGES (India) PVT LTD.</strong> was started in 2016 with the intention of building a strong brand
                                in FMCG and providing high-quality products to consumers.
                            </p>
                            <div className="p-6 bg-cream border-l-4 border-secondary rounded-r-lg">
                                <p className="italic text-primary font-serif text-lg">
                                    "Our products are a close realization of Prime Minister Shree Narendra Modi’s vision (2014)
                                    of adding at least 5% fruit juice to carbonated drinks to help farmers find a new market for their produce."
                                </p>
                            </div>
                            <p>
                                We are proud to embody the concepts of <strong>Make in India</strong> and <strong>Swachh Bharat</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands Portfolio */}
            <section className="py-24 bg-primary text-cream">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Portfolio</h2>
                    <p className="max-w-2xl mx-auto text-cream/70">Delivering quality through three distinct pillars of refreshment.</p>
                </div>

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* GEMSIP */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="font-serif text-3xl mb-4 text-secondary">GEMSIP</h3>
                        <p className="text-sm font-bold uppercase tracking-widest mb-6">Ready To Serve Juices</p>
                        <p className="text-cream/70 leading-relaxed">
                            Experience the pure joy of <strong>Mango, Apple, and Guava</strong>.
                            Crafted to retain the goodness of real fruit in every sip.
                        </p>
                    </div>

                    {/* GEMBERG */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="font-serif text-3xl mb-4 text-secondary">GEMBERG</h3>
                        <p className="text-sm font-bold uppercase tracking-widest mb-6">Carbonated Fruit Drinks</p>
                        <p className="text-cream/70 leading-relaxed">
                            A unique blend of fruit pulp and fizz. Flavors include
                            <strong> Limon Dew, Misty Limon, Classic Cola, Orange Crush, Gem Jeera Masala, and Gem Nimbu Masala</strong>.
                        </p>
                    </div>

                    {/* GEMNEER */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="font-serif text-3xl mb-4 text-secondary">GEMNEER</h3>
                        <p className="text-sm font-bold uppercase tracking-widest mb-6">Packaged Drinking Water</p>
                        <p className="text-cream/70 leading-relaxed">
                            Pure, safe, and refreshing packaged drinking water processed to meet the highest hygiene standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* R&D Section */}
            <section className="container mx-auto px-6 py-24">
                <div className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-primary/5 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-2/3 space-y-6">
                        <h2 className="font-serif text-3xl md:text-4xl text-primary">Commitment to Quality</h2>
                        <p className="text-primary/70 text-lg leading-relaxed">
                            GM Agro has a self-sustained <strong>R&D Department</strong> to maintain food safety and quality as a top priority.
                            Very high standards of hygiene and cleanliness are maintained throughout the plant to meet global requirements.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-48 h-48">
                            {/* Abstract Quality Badge/Icon representation */}
                            <div className="absolute inset-0 border-2 border-dashed border-secondary rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center text-center p-4">
                                <span className="font-serif text-secondary text-xl italic">Premium<br />Quality<br />Assured</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}
