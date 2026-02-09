"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="relative bg-primary text-cream overflow-hidden">
            {/* Smooth Wavy Transition - Better Blending */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(-1px)' }}>
                <svg
                    className="relative block w-full h-24 md:h-32"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    {/* Gradient Definition */}
                    <defs>
                        <linearGradient id="footerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#F2F0E9', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: '#E5E1D8', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#0D2D24', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>

                    {/* Multiple layered waves for smooth blend */}
                    <path
                        d="M0,20 C200,60 400,0 600,40 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"
                        fill="url(#footerGradient)"
                        opacity="0.3"
                    />
                    <path
                        d="M0,40 C240,80 480,20 720,60 C960,100 1200,40 1200,70 L1200,120 L0,120 Z"
                        className="fill-primary"
                        opacity="0.5"
                    />
                    <path
                        d="M0,60 C150,90 350,40 600,70 C850,100 1050,50 1200,80 L1200,120 L0,120 Z"
                        className="fill-primary"
                    />
                </svg>
            </div>

            {/* Main Footer Content */}
            <div className="relative pt-32 md:pt-40 pb-12">
                <div className="container mx-auto px-6">
                    {/* Brand Showcase Section - Inspired by Reference */}
                    <div className="mb-16 text-center">
                        <h2 className="font-serif text-3xl md:text-4xl mb-4 text-secondary">Our Family of Brands</h2>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-8">
                            <div className="group text-center transform hover:scale-110 transition-transform duration-300">
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream group-hover:text-secondary transition-colors">
                                    GEMSIP
                                </h3>
                                <p className="text-xs uppercase tracking-wider text-cream/60 mt-1">Ready To Serve</p>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-secondary/30" />
                            <div className="group text-center transform hover:scale-110 transition-transform duration-300">
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream group-hover:text-secondary transition-colors">
                                    GEMBERG
                                </h3>
                                <p className="text-xs uppercase tracking-wider text-cream/60 mt-1">Carbonated Drinks</p>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-secondary/30" />
                            <div className="group text-center transform hover:scale-110 transition-transform duration-300">
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream group-hover:text-secondary transition-colors">
                                    GEMNEER
                                </h3>
                                <p className="text-xs uppercase tracking-wider text-cream/60 mt-1">Pure Water</p>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-secondary/30" />
                            <div className="group text-center transform hover:scale-110 transition-transform duration-300">
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream group-hover:text-secondary transition-colors">
                                    GEM CHIPS
                                </h3>
                                <p className="text-xs uppercase tracking-wider text-cream/60 mt-1">Snacks</p>
                            </div>
                        </div>

                        {/* Decorative Wave Accent - Subtle */}
                        <div className="mt-12 flex justify-center">
                            <svg width="200" height="20" viewBox="0 0 200 20" className="opacity-30">
                                <path
                                    d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className="text-secondary"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Footer Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        {/* Brand Column */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-3xl font-bold tracking-tight text-cream">GM AGRO</h2>
                            <p className="text-cream/70 font-light max-w-xs leading-relaxed">
                                Real fruit. Real fizz. Real impact. Crafting premium beverages and snacks since 1958.
                            </p>
                            <div className="flex space-x-6 pt-4">
                                <a
                                    href="#"
                                    className="text-secondary hover:text-white transition-all hover:-translate-y-1 transform duration-300"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-secondary hover:text-white transition-all hover:-translate-y-1 transform duration-300"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-secondary hover:text-white transition-all hover:-translate-y-1 transform duration-300"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="text-secondary hover:text-white transition-all hover:-translate-y-1 transform duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="font-serif text-lg font-bold mb-6 text-secondary tracking-wide">Company</h3>
                            <ul className="space-y-3 text-cream/80">
                                <li>
                                    <Link
                                        href="/about"
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/sustainability"
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        Sustainability
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Products Links */}
                        <div>
                            <h3 className="font-serif text-lg font-bold mb-6 text-secondary tracking-wide">Products</h3>
                            <ul className="space-y-3 text-cream/80">
                                <li>
                                    <Link
                                        href="/products"
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        Gemsip Juices
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products"
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        Gemberg Fizz
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products"
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        Gemneer Water
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products"
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        Gem Chips
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Column */}
                        <div>
                            <h3 className="font-serif text-lg font-bold mb-6 text-secondary tracking-wide">
                                Stay Updated
                            </h3>
                            <p className="text-cream/60 mb-6 font-light">
                                Subscribe for the latest updates and offers.
                            </p>
                            <form className="flex flex-col space-y-4">
                                <input
                                    suppressHydrationWarning
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-primary-light border border-white/10 text-white px-6 py-3 w-full focus:border-secondary outline-none rounded-full transition-colors placeholder:text-white/30"
                                    aria-label="Email address"
                                />
                                <button
                                    suppressHydrationWarning
                                    type="submit"
                                    className="bg-secondary text-primary font-bold px-8 py-3 hover:bg-white hover:scale-105 transition-all rounded-full uppercase tracking-widest text-sm"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Bar with Wavy Divider */}
                    <div className="relative pt-8">
                        {/* Subtle Wavy Divider */}
                        <div className="absolute top-0 left-0 w-full h-px overflow-visible">
                            <svg className="w-full h-4" viewBox="0 0 1200 4" preserveAspectRatio="none">
                                <path
                                    d="M0,2 Q300,0 600,2 T1200,2"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                    className="text-secondary/30"
                                />
                            </svg>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-cream/40 pt-4">
                            <p>&copy; {new Date().getFullYear()} GM Agro & Beverages. All rights reserved.</p>
                            <div className="flex space-x-8 mt-6 md:mt-0">
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                                <Link href="/sitemap" className="hover:text-white transition-colors">
                                    Sitemap
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Bottom Wave Accent */}
                    <div className="mt-8 flex justify-center opacity-20">
                        <svg width="300" height="30" viewBox="0 0 300 30">
                            <path
                                d="M0,15 Q37.5,5 75,15 T150,15 T225,15 T300,15"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                className="text-secondary animate-[wave_8s_ease-in-out_infinite]"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
};
