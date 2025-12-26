"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    {
        id: "01",
        title: "Orchard Sourcing",
        desc: "We select the finest fruits from heritage orchards, ensuring every harvest meets our gold standard of quality.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Fresh Harvest",
        desc: "Hand-picked at peak ripeness to capture the natural sweetness and vital nutrients of the fruit.",
        image: "https://images.unsplash.com/photo-1595855709940-fa198305c6d9?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Pulp Extraction",
        desc: "Using advanced cold-press technology to extract rich, flavorful pulp while preserving freshness.",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Sparkling Infusion",
        desc: "For Gemberg, we infuse the real fruit pulp with perfectly balanced carbonation for a refreshing fizz.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "05",
        title: "Mineral Water Blend",
        desc: "We obtain the purest water, treated via Gemneer's rigorous filtration process, to blend into our beverages.",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2576&auto=format&fit=crop"
    },
    {
        id: "06",
        title: "Master Formulation",
        desc: "Our recipes are perfected to ensure every sip delivers the consistent, premium taste GM Agro is known for.",
        image: "https://images.unsplash.com/photo-1606914502283-a9d9e6027419?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "07",
        title: "Hygienic Bottling",
        desc: "Automated, touch-free bottling lines ensure maximum hygiene and seal in the freshness.",
        image: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?q=80&w=2574&auto=format&fit=crop" // Changed to bottle line related
    },
    {
        id: "08",
        title: "Global Delivery",
        desc: "From our factory to your fridge, our efficient logistics network ensures you get the freshest product.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop"
    }
];

export const JourneySection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const pin = gsap.fromTo(
                sectionRef.current,
                {
                    translateX: 0,
                },
                {
                    translateX: "-700vw", // Move horizontally by 7 screen widths (8 items - 1 view)
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "+=6000", // Increased scroll distance
                        scrub: 0.6,
                        pin: true,
                    },
                }
            );
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="overflow-hidden bg-primary text-cream">
            {/* Trigger Container */}
            <div ref={triggerRef}>
                {/* Horizontal Strip */}
                <div ref={sectionRef} className="flex h-screen w-[800vw]">
                    {STEPS.map((step, index) => (
                        <div key={index} className="w-screen h-full flex flex-col md:flex-row relative">

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20" />
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-8 md:p-24 bg-primary relative border-r border-white/10">
                                <div className="space-y-6 max-w-xl">
                                    <span className="text-9xl font-serif text-white/5 absolute top-10 right-10 select-none">
                                        {step.id}
                                    </span>
                                    <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm relative z-10">
                                        Our Process
                                    </span>
                                    <h2 className="font-serif text-5xl md:text-6xl text-white relative z-10">
                                        {step.title}
                                    </h2>
                                    <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed relative z-10">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Progress Indicator */}
                                <div className="absolute bottom-10 left-8 md:left-24 flex gap-2">
                                    {STEPS.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-12 bg-secondary' : 'w-4 bg-white/20'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
