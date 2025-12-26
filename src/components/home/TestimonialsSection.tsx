"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        text: "The taste of Gemsip Mango is incredibly authentic. It feels like eating a real Alphonso mango. My kids love it, and I trust the quality.",
        author: "Aditi S.",
        role: "Homemaker, Bangalore",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 2,
        text: "Gemberg's Jeera Masala is my go-to drink after a heavy meal. It's refreshing and has that perfect traditional kick. Highly recommended!",
        author: "Rahul K.",
        role: "Software Engineer, Mysore",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 3,
        text: "I appreciate the transparency and the 'Make in India' initiative. Seeing a local brand produce world-class beverages like Gemneer is inspiring.",
        author: "Dr. Sharma",
        role: "Nutritionist, Davanagere",
        rating: 5,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
    }
];

export const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-paper text-primary relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">What People Say</span>
                    <h2 className="font-serif text-4xl md:text-5xl">Loved by Thousands</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((item) => (
                        <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-primary/5 flex flex-col items-center text-center group">

                            <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden border-2 border-secondary p-1">
                                <div className="relative w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-center gap-1 mb-3">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-primary/10 mx-auto mb-2" />
                                <p className="text-lg text-primary/70 leading-relaxed italic">
                                    "{item.text}"
                                </p>
                            </div>

                            <div className="mt-auto">
                                <h4 className="font-serif text-xl font-bold text-primary">{item.author}</h4>
                                <p className="text-xs uppercase tracking-widest text-secondary mt-1">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
