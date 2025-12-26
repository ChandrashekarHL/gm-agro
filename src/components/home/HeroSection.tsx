"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Initial Reveal
            tl.from(leftColRef.current, { x: -50, opacity: 0, duration: 1, ease: "power3.out" })
                .from(rightColRef.current, { x: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] w-full bg-cream text-primary flex items-center pt-24 pb-12 overflow-hidden bg-grid-pattern"
        >
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

                {/* Left: Typography */}
                <div ref={leftColRef} className="space-y-8 z-10">
                    <div className="space-y-2">
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">
                            Premium Agri-Products
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-primary">
                            Nurturing <br />
                            <span className="italic relative inline-block">
                                Nature's
                                <span className="absolute bottom-2 left-0 w-full h-1 bg-secondary/30 -z-10"></span>
                            </span>
                            <br /> Finest.
                        </h1>
                    </div>

                    <p className="text-primary/70 text-lg md:text-xl max-w-md font-light leading-relaxed">
                        From the heart of the earth to your home. We deliver purity,
                        sustainability, and unmatched quality in every grain.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button size="lg" variant="primary">
                            Discover Products
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2">
                            <Play size={16} className="fill-current" /> Watch Story
                        </Button>
                    </div>
                </div>

                {/* Right: Media Card */}
                <div ref={rightColRef} className="relative z-10 h-full min-h-[500px] w-full flex items-center justify-center">
                    <div className="relative w-full h-[500px] md:h-[600px] bg-primary/5 rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
                        {/* Main Image */}
                        <Image
                            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2671&auto=format&fit=crop"
                            fill
                            alt="Agricultural Landscape"
                            className="object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                        />

                        {/* Floating Badge */}
                        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-[150px]">
                            <p className="font-serif text-3xl font-bold text-primary">100%</p>
                            <p className="text-xs text-primary/70 uppercase tracking-widest mt-1">Organic Sourced</p>
                        </div>

                        {/* Stylized Grid Overlay (from reference) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/30 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};
