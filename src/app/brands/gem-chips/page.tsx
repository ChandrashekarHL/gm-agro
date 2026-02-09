"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Zap, Smile, Star, Cookie } from "lucide-react";

const gemChipsProducts = products.filter(p => p.brand === "Gem Chips");

export default function GemChipsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Immersive Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 overflow-hidden">
                {/* Playful Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M20 20h10v10H20zM50 50h10v10H50zM10 50h10v10H10zM60 20h10v10H60z"/%3E%3C/g%3E%3C/svg%3E")' }} />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Product Showcase */}
                        <div className="relative">
                            <div className="relative aspect-[3/4] max-w-md mx-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1200"
                                    alt="Gem Chips Snacks"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="text-white space-y-8">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-90">Gem Chips</p>
                                <h1 className="font-serif text-6xl md:text-7xl mb-6 leading-tight">
                                    Crunch Your<br />Happy Moments
                                </h1>
                                <p className="text-xl opacity-90 leading-relaxed mb-8">
                                    From crispy potato chips to crunchy cheese balls, every bite is crafted for maximum deliciousness and fun.
                                </p>
                            </div>

                            {/* Features */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                                    <Zap className="w-6 h-6" />
                                    <div>
                                        <p className="font-bold">Fresh & Crispy</p>
                                        <p className="text-sm opacity-80">Made daily with quality ingredients</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                                    <Smile className="w-6 h-6" />
                                    <div>
                                        <p className="font-bold">Variety of Flavors</p>
                                        <p className="text-sm opacity-80">Classic to exciting new tastes</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                                    <Cookie className="w-6 h-6" />
                                    <div>
                                        <p className="font-bold">Perfect Snack</p>
                                        <p className="text-sm opacity-80">For any occasion or moment</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button size="lg" className="bg-white text-yellow-700 hover:bg-cream font-bold">
                                    Shop Now
                                </Button>
                                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold">
                                    View All Snacks
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
                        <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4">Snack Collection</p>
                        <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6">Our Range</h2>
                        <p className="text-xl text-primary/60 max-w-2xl mx-auto">
                            Discover our delicious variety of chips, cheese balls, and crunchy treats
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {gemChipsProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.id}`}
                                className="group text-center"
                            >
                                <div className="relative aspect-square mb-6 bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="font-serif text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-primary/60 text-sm mb-3 line-clamp-2">{product.description}</p>
                                <p className="text-xl font-bold text-secondary">{product.price}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4">Our Promise</p>
                        <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                            Why Choose Gem Chips
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-10 h-10 text-yellow-700" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Fresh Daily</h3>
                            <p className="text-primary/60">
                                Made fresh for perfect crunch every time
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Smile className="w-10 h-10 text-yellow-700" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Great Taste</h3>
                            <p className="text-primary/60">
                                Flavors that everyone loves
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Cookie className="w-10 h-10 text-yellow-700" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Any Occasion</h3>
                            <p className="text-primary/60">
                                Perfect for parties, movies, or snacking
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Star className="w-10 h-10 text-yellow-700" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Trusted Brand</h3>
                            <p className="text-primary/60">
                                Quality snacks since 1958
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-5xl md:text-6xl mb-8">
                        Snack Happy, Snack Gem Chips
                    </h2>
                    <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                        The crunch companion for all your happy moments
                    </p>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <Button size="lg" className="bg-white text-yellow-700 hover:bg-cream font-bold px-8">
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
