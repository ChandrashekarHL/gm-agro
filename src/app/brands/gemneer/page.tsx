"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Instagram, Facebook, Twitter, Droplet, Sparkles, Waves, Star, Award, Shield, Smile, Beaker } from "lucide-react";

const gemneerProducts = products.filter(p => p.brand === "Gemneer");

export default function GemneerPage() {
    const [bottleHovered, setBottleHovered] = useState(false);

    return (
        <div className="bg-[#FAFAFA] min-h-screen overflow-x-hidden font-sans text-slate-800">
            {/* Hero Section with Cinematic Vibe */}
            <section className="relative h-[85vh]">
                <Image
                    src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=2000"
                    alt="Lifestyle moment"
                    fill
                    className="object-cover brightness-[0.85]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 flex flex-col items-center justify-center">
                    <div className="text-center text-white px-6 max-w-4xl opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                            <Sparkles className="w-4 h-4 text-cyan-300" />
                            <span className="text-sm font-medium tracking-widest uppercase">Premium Hydration</span>
                        </div>
                        <h1 className="font-serif text-6xl md:text-8xl mb-6 leading-tight tracking-tight drop-shadow-xl">
                            Pure & <span className="text-cyan-300 italic">Natural</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Experience the crisp taste of nature in every drop. Perfectly balanced, naturally refreshing.
                        </p>
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-cyan-50 font-semibold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                            Explore Collection
                        </Button>
                    </div>
                </div>
            </section>

            {/* Scrolling Marquee / Tagline Section */}
            <section className="bg-[#EAF4F4] py-24 px-6 overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="w-16 h-1 bg-cyan-600 mx-auto mb-10 rounded-full opacity-40"></div>
                        <p className="font-serif text-4xl md:text-5xl text-slate-800 mb-8 leading-snug">
                            "Crisp for the soul when <br />
                            <span className="text-cyan-700 italic relative inline-block">
                                hydration calls
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-300 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>"
                        </p>
                        <p className="text-lg text-slate-500 uppercase tracking-[0.3em] font-medium">There is Gemneer</p>
                    </div>
                </div>
            </section>

            {/* Interactive Bottle Section - Creative Transformation */}
            <section className="bg-[#eefcfc] py-24 px-6 relative overflow-hidden transition-colors duration-700">
                <div className="container mx-auto">
                    <div
                        className="relative max-w-6xl mx-auto min-h-[700px] flex items-center justify-center"
                        onMouseEnter={() => setBottleHovered(true)}
                        onMouseLeave={() => setBottleHovered(false)}
                    >
                        {/* Organic Blob Background - Abstract & Smaller */}
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${bottleHovered ? 'scale-75 rotate-90 opacity-40' : 'scale-100 rotate-0 opacity-20'}`}
                        >
                            <svg viewBox="0 0 200 200" className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] text-[#22d3ee]" fill="currentColor">
                                <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.7C91.4,-34.3,98.1,-19.6,98.6,-4.5C99.1,10.6,93.4,26.1,84.1,39.3C74.8,52.5,61.9,63.4,48,70.8C34.1,78.2,19.2,82.1,4.1,75C-11,67.9,-26.3,49.8,-39.3,36.5C-52.3,23.2,-63,14.7,-68.6,2.2C-74.2,-10.3,-74.7,-26.8,-66.6,-40.4C-58.5,-54,-41.8,-64.7,-26.1,-70.8C-10.4,-76.9,4.3,-78.4,19.3,-79.9C34.3,-81.4,49.6,-82.9,44.7,-76.4Z" transform="translate(100 100)" />
                            </svg>
                        </div>

                        {/* Central Bottle with Tilt & Large Zoom Effect */}
                        <div className={`relative z-20 w-64 md:w-80 h-[500px] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${bottleHovered ? 'rotate-[-6deg] scale-[2]' : 'rotate-0 scale-100'}`}>
                            <Image
                                src="/gemneer-bottle-removebg-preview.png"
                                alt="Gemneer Water Bottle"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Arrows & Benefits Container */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Top Left - Hydration Hero */}
                            <div className={`absolute top-16 left-4 md:left-16 lg:left-24 transition-all duration-700 delay-100 ${bottleHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full border border-cyan-200 flex items-center justify-center bg-white shadow-sm mb-3 text-cyan-600">
                                        <Droplet className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-slate-800 text-lg font-medium text-center leading-tight">Hydration Hero<br /><span className="text-sm text-slate-500 font-sans font-normal">Perfect Mixer</span></h3>
                                </div>
                                <svg className="absolute top-1/2 -right-24 w-24 h-24 text-cyan-300 hidden md:block" viewBox="0 0 100 100" style={{ transform: 'rotate(10deg)' }}>
                                    <path d="M10,20 Q60,20 90,80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
                                    <path d="M80,70 L90,80 L100,70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>

                            {/* Top Right - Refreshing */}
                            <div className={`absolute top-16 right-4 md:right-16 lg:right-24 transition-all duration-700 delay-200 ${bottleHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full border border-cyan-200 flex items-center justify-center bg-white shadow-sm mb-3 text-cyan-600">
                                        <Smile className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-slate-800 text-lg font-medium text-center leading-tight">Refreshing<br /><span className="text-sm text-slate-500 font-sans font-normal">10 Flavors</span></h3>
                                </div>
                                <svg className="absolute top-1/2 -left-24 w-24 h-24 text-cyan-300 hidden md:block" viewBox="0 0 100 100" style={{ transform: 'rotate(-10deg)' }}>
                                    <path d="M90,20 Q40,20 10,80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
                                    <path d="M20,70 L10,80 L0,70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>

                            {/* Bottom Left - Zero Sugar */}
                            <div className={`absolute bottom-24 left-4 md:left-16 lg:left-24 transition-all duration-700 delay-300 ${bottleHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full border border-cyan-200 flex items-center justify-center bg-white shadow-sm mb-3 text-cyan-600">
                                        <Beaker className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-slate-800 text-lg font-medium text-center leading-tight">Zero Sugar<br /><span className="text-sm text-slate-500 font-sans font-normal">Zero Calories</span></h3>
                                </div>
                                <svg className="absolute bottom-full -right-24 w-24 h-24 text-cyan-300 hidden md:block" viewBox="0 0 100 100" style={{ transform: 'rotate(-5deg)' }}>
                                    <path d="M10,90 Q60,90 90,20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
                                    <path d="M80,30 L90,20 L100,30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>

                            {/* Bottom Right - No Guilt */}
                            <div className={`absolute bottom-24 right-4 md:right-16 lg:right-24 transition-all duration-700 delay-400 ${bottleHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full border border-cyan-200 flex items-center justify-center bg-white shadow-sm mb-3 text-cyan-600">
                                        <Shield className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-slate-800 text-lg font-medium text-center leading-tight">No Aftertaste<br /><span className="text-sm text-slate-500 font-sans font-normal">No Guilt</span></h3>
                                </div>
                                <svg className="absolute bottom-full -left-24 w-24 h-24 text-cyan-300 hidden md:block" viewBox="0 0 100 100" style={{ transform: 'rotate(5deg)' }}>
                                    <path d="M90,90 Q40,90 10,20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
                                    <path d="M20,30 L10,20 L0,30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lifestyle Transition Banner with Parallax Feel */}
            <section className="relative h-[60vh] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2000"
                    alt="Happy moments"
                    fill
                    className="object-cover fixed-attachment"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white p-10 border border-white/30 backdrop-blur-sm bg-white/10 max-w-2xl mx-4">
                        <h2 className="font-serif text-4xl md:text-5xl mb-4 italic">"Pure water, pure life"</h2>
                        <p className="opacity-90 tracking-wider font-light">ELEVATE YOUR EVERYDAY MOMENTS</p>
                    </div>
                </div>
            </section>

            {/* Technical Specs - Clean & Minimal */}
            <section className="py-24 bg-white px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3">
                            <h2 className="font-serif text-4xl text-slate-900 mb-6">What's Inside Matters.</h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                We believe in transparency. Every bottle of Gemneer goes through rigorous 10-step quality checks to ensure optimal mineral balance and zero impurities.
                            </p>
                            <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-none px-8">
                                View Full Report
                            </Button>
                        </div>
                        <div className="md:w-2/3 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { label: "pH Level", value: "7.4", sub: "Perfectly Alkaline" },
                                    { label: "TDS", value: "110", sub: "mg/L Balanced" },
                                    { label: "Magnesium", value: "22", sub: "mg/L Essential" },
                                    { label: "Calcium", value: "35", sub: "mg/L Strong Bones" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="p-8 bg-slate-50 border border-slate-100 hover:border-cyan-200 transition-colors duration-300">
                                        <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">{stat.label}</p>
                                        <p className="text-4xl font-serif text-slate-900 mb-1">{stat.value}</p>
                                        <p className="text-cyan-600 text-sm font-medium">{stat.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shop Section - Minimal Collection */}
            <section className="py-24 bg-[#F8FAFC] px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-cyan-600 font-medium tracking-widest uppercase text-sm">Our Collection</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-3">Choose Your Hydration</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { size: "500ml", price: "₹10", image: "/gemneer-bottle-removebg-preview.png", dimensions: "h-[60%] w-[60%]" },
                            { size: "1 Liter", price: "₹20", image: "/gemneer-bottle-removebg-preview.png", dimensions: "h-[80%] w-[80%]" },
                            { size: "2 Liters", price: "₹35", image: "/gemneer-bottle-removebg-preview.png", dimensions: "h-full w-full" }
                        ].map((product, index) => (
                            <div key={index} className="group cursor-pointer flex flex-col items-center">
                                {/* Card Image Area */}
                                <div className={`bg-white w-full aspect-square flex items-center justify-center mb-8 hover:shadow-xl transition-shadow duration-500 ease-out border border-slate-100/50 relative overflow-hidden`}>
                                    <div className={`relative transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 ${product.dimensions}`}>
                                        <Image
                                            src={product.image}
                                            alt={product.size}
                                            fill
                                            className="object-contain drop-shadow-lg"
                                        />
                                    </div>
                                </div>

                                {/* Typography Area */}
                                <div className="text-center space-y-2">
                                    <h3 className="font-serif text-3xl text-slate-900">{product.size}</h3>
                                    <p className="text-slate-500 text-lg">Starts at <span className="text-slate-900 font-semibold">{product.price}</span></p>
                                    <div className="pt-4">
                                        <button
                                            suppressHydrationWarning
                                            className="text-cyan-700 font-bold text-sm tracking-[0.2em] uppercase border-b-2 border-cyan-700/0 hover:border-cyan-700/100 transition-all duration-300 pb-1"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social - Minimalist Feed */}
            <section className="py-24 bg-white px-6">
                <div className="container mx-auto text-center max-w-6xl">
                    <div className="flex items-center justify-center gap-6 mb-12">
                        <div className="h-px bg-slate-200 w-20"></div>
                        <h2 className="font-serif text-3xl text-slate-900">@GemneerWater</h2>
                        <div className="h-px bg-slate-200 w-20"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {[
                            "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=400",
                            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=400",
                            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
                            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400",
                            "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=400",
                            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=400"
                        ].map((img, index) => (
                            <div key={index} className="aspect-square relative group overflow-hidden cursor-pointer">
                                <Image
                                    src={img}
                                    alt={`Social post ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Instagram className="text-white w-6 h-6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer - Elegant & Clean */}
            <footer className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400"></div>
                <div className="container mx-auto text-center relative z-10">
                    <div className="flex justify-center items-center gap-3 mb-8">
                        <Sparkles className="text-cyan-400 w-6 h-6" />
                        <span className="font-serif text-2xl tracking-wide">Gemneer</span>
                    </div>
                    <p className="text-slate-400 max-w-lg mx-auto mb-10 font-light leading-relaxed">
                        Purity isn't just a promise, it's our heritage. Delivering the finest packaged drinking water since 1958.
                    </p>
                    <div className="flex justify-center gap-8 mb-12">
                        {[Facebook, Instagram, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all duration-300">
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                    <div className="text-xs text-slate-600 uppercase tracking-widest">
                        © 2024 GM Enterprises • Crafted with Purity
                    </div>
                </div>
            </footer>
        </div>
    );
}
