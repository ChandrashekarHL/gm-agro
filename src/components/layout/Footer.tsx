import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-primary text-cream pt-24 pb-12 border-t border-primary/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-cream">GM AGRO</h2>
                        <p className="text-cream/70 font-light max-w-xs leading-relaxed">
                            Cultivating trust and quality in every harvest.
                            Pioneering the future of sustainable agri-products.
                        </p>
                        <div className="flex space-x-6 pt-4">
                            <a href="#" className="text-secondary hover:text-white transition-colors hover:-translate-y-1 transform duration-300"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-secondary hover:text-white transition-colors hover:-translate-y-1 transform duration-300"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-secondary hover:text-white transition-colors hover:-translate-y-1 transform duration-300"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-secondary hover:text-white transition-colors hover:-translate-y-1 transform duration-300"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-8 text-secondary tracking-wide">Company</h3>
                        <ul className="space-y-4 text-cream/80">
                            <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">Our Story</Link></li>
                            <li><Link href="/careers" className="hover:text-white hover:translate-x-1 inline-block transition-all">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-8 text-secondary tracking-wide">Products</h3>
                        <ul className="space-y-4 text-cream/80">
                            <li><Link href="/products/beverages" className="hover:text-white hover:translate-x-1 inline-block transition-all">Beverages</Link></li>
                            <li><Link href="/products/pulses" className="hover:text-white hover:translate-x-1 inline-block transition-all">Pulses & Grains</Link></li>
                            <li><Link href="/products/spices" className="hover:text-white hover:translate-x-1 inline-block transition-all">Spices</Link></li>
                            <li><Link href="/products/organic" className="hover:text-white hover:translate-x-1 inline-block transition-all">Organic Range</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-8 text-secondary tracking-wide">Stay Updated</h3>
                        <p className="text-cream/60 mb-6 font-light">Subscribe to our newsletter for latest updates.</p>
                        <form className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-primary-light border border-white/10 text-white px-6 py-4 w-full focus:border-secondary outline-none rounded-full transition-colors placeholder:text-white/20"
                            />
                            <button className="bg-secondary text-primary font-bold px-8 py-4 hover:bg-white transition-colors rounded-full uppercase tracking-widest text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-cream/40">
                    <p>&copy; {new Date().getFullYear()} GM Agro. All rights reserved.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
