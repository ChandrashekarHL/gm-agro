"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Droplet, Zap, Sparkles, Star } from "lucide-react";

const gembergProducts = products.filter(p => p.brand === "Gemberg");

export default function GembergPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Immersive Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800 overflow-hidden">
                {/* Bubbles Pattern */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                                width: `${Math.random() * 100 + 20}px`,
                                height: `${Math.random() * 100 + 20}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${Math.random() * 3 + 3}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Product Showcase */}
                        <div className="relative">
                            <div className="relative aspect-[3/4] max-w-md mx-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1581006663862-8c4d6c4f8c4e?q=80&w=1200"
                                    alt="Gemberg Carbonated Drink"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="text-white space-y-8">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-90">Gemberg Fizz</p>
                                <h1 className="font-serif text-6xl md:text-7xl mb-6 leading-tight">
                                    The Fizz with<br />Real Fruit
                                </h1>
                                <p className="text-xl opacity-90 leading-relaxed mb-8">
                                    India's first carbonated drink with 5% real fruit pulp. The perfect blend of fizz and fruit that refreshes like nothing else.
                                </p>
                            </div>

                            {/* Highlight Box */}
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                                <p className="text-6xl font-bold mb-2">5%</p>
                                <p className="text-lg opacity-90">Real Fruit Pulp in Every Sip</p>
                            </div>

                            <div className="flex gap-4">
                                <Button size="lg" className="bg-white text-orange-700 hover:bg-cream font-bold">
                                    Shop Now
                                </Button>
                                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold">
                                    Explore Flavors
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

            {/* Flavors Section */}
            <section className="py-32 bg-cream">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4">Gemberg Range</p>
                        <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6">Choose Your Fizz</h2>
                        <p className="text-xl text-primary/60 max-w-2xl mx-auto">
                            From classic cola to zesty lemon, each bottle is packed with real fruit pulp and fizz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {gembergProducts.map((product) => (
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
                        ))}
                    </div>
                </div>
            </section>

            {/* The Gemberg Difference */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4">What Makes Us Different</p>
                        <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                            The Gemberg Difference
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Droplet className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">5% Real Pulp</h3>
                            <p className="text-primary/60">
                                Actual fruit pulp in every bottle, not just flavor
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Perfect Fizz</h3>
                            <p className="text-primary/60">
                                Perfectly carbonated for that refreshing burst
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Great Taste</h3>
                            <p className="text-primary/60">
                                Unique flavor that's loved by millions
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Star className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Since 1958</h3>
                            <p className="text-primary/60">
                                Decades of trust and quality in every bottle
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-orange-600 to-amber-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-5xl md:text-6xl mb-8">
                        Feel the Real Fizz
                    </h2>
                    <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                        Experience the unique taste of carbonated refreshment with real fruit pulp
                    </p>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <Button size="lg" className="bg-white text-orange-700 hover:bg-cream font-bold px-8">
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
