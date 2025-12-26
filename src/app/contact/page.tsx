"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="bg-cream min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left: Info */}
                    <div className="space-y-8">
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">Get in Touch</span>
                        <h1 className="font-serif text-5xl text-primary">Let's Grow Together.</h1>
                        <p className="text-primary/70 text-lg leading-relaxed">
                            Whether you are a distributor, retailer, or a customer who loves our products,
                            we'd love to hear from you.
                        </p>

                        <div className="space-y-4 pt-8">
                            <div className="p-6 bg-white rounded-xl border border-primary/5">
                                <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">Headquarters</p>
                                <p className="text-primary text-lg">123 Green Valley, Agri Park, India</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl border border-primary/5">
                                <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">Email Us</p>
                                <p className="text-primary text-lg">hello@gmagro.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-primary/5">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-primary">Name</label>
                                <input type="text" className="w-full bg-cream border-none p-4 rounded-lg focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-primary">Email</label>
                                <input type="email" className="w-full bg-cream border-none p-4 rounded-lg focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-primary">Message</label>
                                <textarea rows={4} className="w-full bg-cream border-none p-4 rounded-lg focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="How can we help?"></textarea>
                            </div>
                            <Button size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
