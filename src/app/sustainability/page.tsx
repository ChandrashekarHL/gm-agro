"use client";

import React from "react";
import Image from "next/image";

export default function SustainabilityPage() {
    return (
        <div className="bg-cream min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2670&auto=format&fit=crop"
                    alt="Green field"
                    fill
                    className="object-cover brightness-75"
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="font-serif text-5xl md:text-7xl mb-6">Green at Heart</h1>
                    <p className="text-xl max-w-2xl mx-auto font-light">Sustainable practices for a better tomorrow.</p>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {[
                        { title: "Zero Waste", desc: "Our production facilities aim for zero waste by 2030." },
                        { title: "Water Conservation", desc: "Advanced drip irrigation saves 40% more water." },
                        { title: "Fair Trace", desc: "Digitally traceable supply chain ensuring fair pay." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-primary/5 hover:border-secondary/50 transition-colors">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🌱</div>
                            <h3 className="font-serif text-2xl text-primary mb-4">{item.title}</h3>
                            <p className="text-primary/70">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
