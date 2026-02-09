"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Droplet, Shield, Sparkles, Heart, Leaf, Apple } from "lucide-react";

const gemsipProducts = products.filter(p => p.brand === "Gemsip");

export default function GemsipPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Immersive Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-500 to-pink-500 overflow-hidden">
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Product Showcase */}
                        <div className="relative">
                            {/* Large Product Image */}
                            <div className="relative aspect-[3/4] max-w-md mx-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1589988986885-f7eb429c9db9?q=80&w=1200"
                                    alt="Gemsip Mango Juice"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="text-white space-y-8">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-90">Gemsip Juices</p>
                                <h1 className="font-serif text-6xl md:text-7xl mb-6 leading-tight">
                                    Pure Mango<br />Perfection
                                </h1>
                                <p className="text-xl opacity-90 leading-relaxed mb-8">
                                    Made from 100% real Alphonso mangoes. No water added, no preservatives, just pure fruit goodness in every sip.
                                </p>
                            </div>

                            {/* Quick Features */}
                            <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/20">
                                <div>
                                    <p className="text-4xl font-bold mb-1">100%</p>
                                    <p className="text-sm opacity-80 uppercase tracking-wide">Real Fruit</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold mb-1">0g</p>
                                    <p className="text-sm opacity-80 uppercase tracking-wide">Added Sugar</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold mb-1">Vitamin C</p>
                                    <p className="text-sm opacity-80 uppercase tracking-wide">Rich Source</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button size="lg" className="bg-white text-orange-600 hover:bg-cream font-bold">
                                    Shop Now
                                </Button>
                                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold">
                                    View All Flavors
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

            {/* Available Sizes Section */}
            <section className="py-32 bg-cream">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4">Gemsip Range</p>
                        <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6">Available Flavors</h2>
                        <p className="text-xl text-primary/60 max-w-2xl mx-auto">
                            Choose from our range of 100% pure fruit juices, each crafted to perfection.
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {gemsipProducts.map((product, index) => (
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

            {/* Benefits Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4">Why Gemsip</p>
                        <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6">The Gemsip Promise</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Droplet className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">100% Juice</h3>
                            <p className="text-primary/60">
                                Pure fruit juice with absolutely no water added
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">No Preservatives</h3>
                            <p className="text-primary/60">
                                Fresh and natural, without any artificial preservatives
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">No Artificial Colors</h3>
                            <p className="text-primary/60">
                                Natural fruit colors, nothing artificial
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-10 h-10 text-orange-600" />
                            </div>
                            <h3 className="font-serif text-2xl text-primary mb-3">Rich in Vitamins</h3>
                            <p className="text-primary/60">
                                Packed with natural vitamins and minerals
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nutritional Benefits */}
            <section className="py-32 bg-gradient-to-br from-orange-50 to-pink-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20">
                            <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4">Nutrition</p>
                            <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                                Nutritious & Delicious
                            </h2>
                            <p className="text-xl text-primary/60">
                                Discover the vitamins and minerals in every glass of Gemsip
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Sparkles className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="font-serif text-3xl text-primary mb-4">Vitamin C</h3>
                                <p className="text-primary/70 leading-relaxed">
                                    Boosts immunity and helps protect your body from infections
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="font-serif text-3xl text-primary mb-4">Potassium</h3>
                                <p className="text-primary/70 leading-relaxed">
                                    Supports heart health and maintains healthy blood pressure
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-10 text-center shadow-lg">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Leaf className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="font-serif text-3xl text-primary mb-4">Folate</h3>
                                <p className="text-primary/70 leading-relaxed">
                                    Essential for cell growth and overall body function
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-5xl md:text-6xl mb-8">
                        Experience Pure Refreshment
                    </h2>
                    <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                        Join thousands who choose Gemsip for pure, authentic fruit juice since 1958
                    </p>
                    <div className="flex gap-6 justify-center flex-wrap">
                        <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold px-8">
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
