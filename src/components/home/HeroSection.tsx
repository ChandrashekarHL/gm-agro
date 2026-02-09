"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import gsap from "gsap";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
    {
        id: 1,
        title: "Since 1958",
        subtitle: "A Legacy of Trust",
        description: "Founded by Late Mr. G. Mallikarjunappa, Member of Parliament, our heritage spans over 65 years of integrity and excellence.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop",
        theme: "heritage",
        badge: "65+ Years",
    },
    {
        id: 2,
        title: "Real Fruit Promise",
        subtitle: "Innovation with Purpose",
        description: "The first to add 5% real fruit pulp to carbonated drinks, supporting PM Modi's vision and local farmers.",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=2574&auto=format&fit=crop",
        theme: "innovation",
        badge: "5% Real Fruit",
    },
    {
        id: 3,
        title: "Supporting Farmers",
        subtitle: "Creating Markets, Building Lives",
        description: "Every bottle creates new opportunities for local farmers. Together, we're building a sustainable future.",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2670&auto=format&fit=crop",
        theme: "impact",
        badge: "Make in India",
    },
    {
        id: 4,
        title: "Taste the Difference",
        subtitle: "Every Sip, A Gem",
        description: "From refreshing Gemsip juices to fizzy Gemberg drinks and crunchy Gem Chips - discover your perfect moment.",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=2574&auto=format&fit=crop",
        theme: "products",
        badge: "Premium Quality",
    },
];

export const HeroSection = () => {
    const [activeStory, setActiveStory] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    // Auto-advance carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveStory((prev) => (prev + 1) % stories.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Animate transitions
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(contentRef.current, {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            }).from(
                imageRef.current,
                {
                    x: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.6"
            );
        }, containerRef);

        return () => ctx.revert();
    }, [activeStory]);

    const currentStory = stories[activeStory];

    const goToStory = (index: number) => {
        setActiveStory(index);
        setIsAutoPlaying(false);
    };

    const nextStory = () => {
        setActiveStory((prev) => (prev + 1) % stories.length);
        setIsAutoPlaying(false);
    };

    const prevStory = () => {
        setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
        setIsAutoPlaying(false);
    };

    return (
        <section
            ref={containerRef}
            className={`relative min-h-[90vh] w-full flex items-center pt-24 pb-12 overflow-hidden transition-colors duration-1000 ${currentStory.theme === "heritage"
                    ? "bg-gradient-to-br from-[#8B7355] to-[#D4C4B0]"
                    : currentStory.theme === "innovation"
                        ? "bg-gradient-to-br from-[#FF9933] via-[#FF5722] to-[#E91E63]"
                        : currentStory.theme === "impact"
                            ? "bg-gradient-to-br from-[#8BC34A] to-[#03A9F4]"
                            : "bg-cream"
                }`}
        >
            {/* Decorative Wavy Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z"
                        fill="currentColor"
                        className="text-white animate-[wave_8s_ease-in-out_infinite]"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full relative z-10">
                {/* Left: Story Content */}
                <div ref={contentRef} className="space-y-8">
                    <div className="space-y-2">
                        <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full">
                            {currentStory.badge}
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-white drop-shadow-lg">
                            {currentStory.title}
                        </h1>
                        <h2 className="font-serif text-2xl md:text-3xl text-white/90 italic">
                            {currentStory.subtitle}
                        </h2>
                    </div>

                    <p className="text-white/90 text-lg md:text-xl max-w-md font-light leading-relaxed backdrop-blur-sm bg-white/10 p-4 rounded-lg">
                        {currentStory.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {activeStory === 3 ? (
                            <>
                                <Button size="lg" variant="primary" className="bg-white text-primary hover:bg-white/90">
                                    Explore Products
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="gap-2 border-white text-white hover:bg-white/10"
                                >
                                    <Play size={16} className="fill-current" /> Watch Our Story
                                </Button>
                            </>
                        ) : (
                            <Button
                                size="lg"
                                variant="primary"
                                className="bg-white text-primary hover:bg-white/90"
                                onClick={nextStory}
                            >
                                Continue Journey →
                            </Button>
                        )}
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex gap-2 pt-4">
                        {stories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToStory(index)}
                                className={`h-1 rounded-full transition-all duration-500 ${index === activeStory ? "w-12 bg-white" : "w-6 bg-white/30 hover:bg-white/50"
                                    }`}
                                aria-label={`Go to story ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Story Image */}
                <div ref={imageRef} className="relative h-full min-h-[500px] w-full flex items-center justify-center">
                    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={currentStory.image}
                            fill
                            alt={currentStory.title}
                            className="object-cover transition-transform duration-1000 hover:scale-105"
                        />

                        {/* Image Overlay for better text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                        {/* Floating Badge */}
                        {activeStory === 1 && (
                            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-[150px]">
                                <p className="font-serif text-3xl font-bold text-primary">100%</p>
                                <p className="text-xs text-primary/70 uppercase tracking-widest mt-1">Real Pulp</p>
                            </div>
                        )}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevStory}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                        aria-label="Previous story"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextStory}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                        aria-label="Next story"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};
