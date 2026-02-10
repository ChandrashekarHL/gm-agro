"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Droplet, Shield, Sparkles, Heart, Leaf, Apple } from "lucide-react";
import ProductScroll from "@/components/ProductScroll";

const gemsipProducts = products.filter(p => p.brand === "Gemsip");

export default function GemsipPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Scrollytelling Hero */}
            <ProductScroll />

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
