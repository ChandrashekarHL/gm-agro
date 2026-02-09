"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

const FILTERS = ["All", "Gemsip", "GemJeera", "Gemneer", "Gemberg", "Gem Chips"];

// Product personality mappings
const productPersonalities: Record<string, { personality: string; story: string; color: string }> = {
    Gemsip: {
        personality: "The Nostalgia Sipper",
        story: "Reminds you of summer afternoons and childhood memories",
        color: "from-[#FF9933] to-[#E91E63]",
    },
    Gemberg: {
        personality: "The Fizz Revolutionary",
        story: "Not your ordinary fizz - packed with 5% real fruit!",
        color: "from-[#FF5722] to-[#3E2723]",
    },
    GemJeera: {
        personality: "The Digestive Companion",
        story: "Traditional wellness meets sparkling refreshment",
        color: "from-[#8BC34A] to-[#689F38]",
    },
    Gemneer: {
        personality: "The Pure Essential",
        story: "Crystal clear purity in every drop",
        color: "from-[#03A9F4] to-[#0288D1]",
    },
    "Gem Chips": {
        personality: "The Crunch Companion",
        story: "Your perfect sidekick for every moment",
        color: "from-[#FFC107] to-[#FF9800]",
    },
};

export default function ProductsPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

    const filteredProducts =
        activeFilter === "All"
            ? products
            : products.filter(
                (p) =>
                    p.brand === activeFilter ||
                    (activeFilter === "Gemberg" && p.brand === "Gemberg") ||
                    (activeFilter === "Gem Chips" && p.brand === "Gem Chips")
            );

    return (
        <div className="bg-cream min-h-screen pt-24 pb-24">
            {/* Header */}
            <section className="container mx-auto px-6 mb-16 text-center relative">
                {/* Decorative Bubbles */}
                <div className="absolute top-0 left-1/4 w-8 h-8 bg-secondary/20 rounded-full animate-[bubble_3s_ease-in-out_infinite]" />
                <div
                    className="absolute top-10 right-1/3 w-6 h-6 bg-primary/10 rounded-full animate-[bubble_3s_ease-in-out_infinite]"
                    style={{ animationDelay: "1s" }}
                />

                <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary font-bold uppercase tracking-[0.2em] text-xs rounded-full mb-4">
                    <Sparkles className="inline w-3 h-3 mr-1" />
                    Every Sip, A Gem
                </span>
                <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">Discover Our Gems</h1>
                <p className="text-primary/70 max-w-2xl mx-auto text-lg">
                    Each product has a personality, a story, and a promise of quality. Find your perfect match.
                </p>
            </section>

            {/* Filters */}
            <div className="container mx-auto px-6 mb-12 overflow-x-auto">
                <div className="flex justify-center min-w-max gap-4 p-2">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeFilter === filter
                                ? "bg-primary text-secondary-light shadow-xl scale-105"
                                : "bg-white text-primary border-2 border-primary/10 hover:border-primary hover:bg-primary/5 hover:scale-105"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => {
                    const personality = productPersonalities[product.brand];
                    return (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="group relative bg-white rounded-3xl overflow-hidden border-2 border-primary/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-cream to-paper">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Brand Badge with Gradient */}
                                <div
                                    className={`absolute top-4 right-4 bg-gradient-to-br ${personality?.color || "from-secondary to-primary"
                                        } px-4 py-2 rounded-full shadow-lg`}
                                >
                                    <p className="text-xs font-bold text-white uppercase tracking-wide">
                                        {product.brand}
                                    </p>
                                </div>

                                {/* Personality Badge (shows on hover) */}
                                {hoveredProduct === product.id && personality && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center p-6 animate-[fadeIn_0.3s_ease-out]">
                                        <div className="text-center text-white">
                                            <p className="font-serif text-xl italic mb-1">{personality.personality}</p>
                                            <p className="text-sm opacity-90">{personality.story}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-serif text-2xl text-primary group-hover:text-secondary transition-colors">
                                        {product.name}
                                    </h3>
                                    <span className="font-bold text-xl text-secondary">{product.price}</span>
                                </div>
                                <p className="text-primary/60 text-sm leading-relaxed">{product.description}</p>

                                {/* View Details CTA */}
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-secondary font-bold group-hover:underline">View Details</span>
                                    <span className="text-primary/40 group-hover:text-primary transition-colors">→</span>
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 left-0 w-20 h-20 bg-secondary/5 rounded-br-full transform -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
                        </Link>
                    );
                })}
            </div>

            {/* Bottom CTA Section */}
            <section className="container mx-auto px-6 mt-24 text-center">
                <div className="bg-gradient-to-br from-primary via-primary-light to-primary p-12 md:p-16 rounded-3xl shadow-2xl">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        Can't find what you're looking for?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Get in touch with us and we'll help you find the perfect Gem for your needs.
                    </p>
                    <Button size="lg" variant="primary" className="bg-secondary text-primary hover:bg-white">
                        Contact Us
                    </Button>
                </div>
            </section>
        </div>
    );
}
