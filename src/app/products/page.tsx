"use client";

import React, { useState } from "react";
import Image from "next/image";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const CATEGORIES = ["All", "Beverages", "Spices", "Grains", "Organic"];

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category.includes(activeCategory) || (activeCategory === "Organic" && p.name.includes("Organic")));

    return (
        <div className="bg-cream min-h-screen pt-24 pb-24">
            {/* Header */}
            <section className="container mx-auto px-6 mb-16 text-center">
                <h1 className="font-serif text-5xl text-primary mb-6">Our Harvest</h1>
                <p className="text-primary/70 max-w-xl mx-auto">
                    Browse our selection of premium, ethically sourced products.
                </p>
            </section>

            {/* Filters */}
            <div className="container mx-auto px-6 mb-12 overflow-x-auto">
                <div className="flex justify-center min-w-max gap-4 p-2">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeCategory === cat
                                    ? "bg-primary text-secondary-light"
                                    : "bg-white text-primary border border-primary/10 hover:border-primary"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-primary/5 hover:shadow-xl transition-all duration-500">
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                                {product.category}
                            </div>
                        </div>
                        <div className="p-8 space-y-4">
                            <div className="flex justify-between items-start">
                                <h3 className="font-serif text-2xl text-primary">{product.name}</h3>
                                <span className="font-bold text-lg text-secondary">{product.price}</span>
                            </div>
                            <p className="text-primary/60 text-sm leading-relaxed">{product.description}</p>
                            <Button variant="outline" size="sm" className="w-full mt-4">Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
