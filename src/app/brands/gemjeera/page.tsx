"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Leaf, Heart, Sparkles, Droplet } from "lucide-react";

const gemjeeraProducts = products.filter(p => p.brand === "GemJeera");

export default function GemJeeraPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Immersive Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 overflow-hidden">
                {/* Subtle Leaf Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M50 10 Q60 30 50 50 Q40 30 50 10z M30 50 Q40 65 50 65 Q40 55 30 50z M70 50 Q60 65 50 65 Q60 55 70 50z" fill="%23ffffff" fill-opacity="0.3"/%3E%3C/svg%3E")' }} />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Product Showcase */}
                        <div className="relative">
                            <div className="relative aspect-[3/4] max-w-md mx-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=1200"
                                    alt="GemJeera Masala Drink"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="text-white space-y-8">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-90">GemJeera</p>
                                <h1 className="font-serif text-6xl md:text-7xl mb-6 leading-tight">
                                    Traditional<br />Wellness Drink
                                </h1>
                                <p className="text-xl opacity-90 leading-relaxed mb-8">
                                    Made with authentic cumin (jeera) and traditional spices. A refreshing drink that aids digestion and keeps you cool.
                                </p>
                            </div>

                            {/* Benefits Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                                    <p className="text-sm mb-1 opacity-80">Natural</p>
                                    <p className="font-bold text-lg">Cumin Seeds</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                                    <p className="text-sm mb-1 opacity-80">Aids</p>
                                    <p className="font-bold text-lg">Digestion</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                                    <p className="text-sm mb-1 opacity-80">Traditional</p>
                                    <p className="font-bold text-lg">Recipe</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                                    <p className="text-sm mb-1 opacity-80">Instantly</p>
                                    <p className="font-bold text-lg">Refreshing</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button size="lg" className="bg-white text-green-700 hover:bg-cream font-bold">
                                    Shop Now
                                </Button>
                                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
                    <p className="text-xs uppercase tracking-widest mb-2">Scroll</p>
                    <div className="w-px h-12 bg-white/40 mx-auto" />
                </div>
            </section>

            {/* Products Section */}
            <section className="py-32 bg-cream">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4">GemJeera Range</p>
                        <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6">Available Variants</h2>
                        <p className="text-xl text-primary/60 max-w-2xl mx-auto">
                            Experience the authentic taste of traditional jeera in convenient, ready-to-drink formats.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {gemjeeraProducts.length > 0 ? (
                            gemjeeraProducts.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/products/${product.id}`}
                                    className="group text-center"
                                >
                                    <div className="relative aspect-[3/4] mb-6 bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <h3 className="font-serif text-2xl text-primary mb-2 group-hover:text-secondary transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-primary/60 mb-4">{product.description}</p>
                                    <p className="text-2xl font-bold text-secondary">{product.price}</p>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-3 text-center text-primary/60">
                                <p className="text-xl">Coming Soon</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Benefits of Jeera */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4">Why Jeera</p>
                        <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                            Benefits of Cumin
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-10 h-10 text-green-700" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Aids Digestion</h3>
                            <p className="text-primary/60">
                                Helps improve digestive health naturally
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Droplet className="w-10 h-10 text-green-700" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Cooling Effect</h3>
                            <p className="text-primary/60">
                                Naturally cools the body from within
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Leaf className="w-10 h-10 text-green-700" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Natural Spices</h3>
                            <p className="text-primary/60">
                                Made with authentic, natural ingredients
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-10 h-10 text-green-700" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Traditional</h3>
                            <p className="text-primary/60">
                                Time-tested recipe for generations
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-green-700 to-emerald-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-5xl md:text-6xl mb-8">
                        Traditional Goodness, Modern Convenience
                    </h2>
                    <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                        Experience the authentic taste and wellness benefits of jeera, anytime, anywhere
                    </p>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <Button size="lg" className="bg-white text-green-700 hover:bg-cream font-bold px-8">
                            Find in Stores
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-8">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
