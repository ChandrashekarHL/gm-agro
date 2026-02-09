"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Our Brands",
        href: "/products",
        dropdown: [
            { label: "Gemsip", subtitle: "Juices", href: "/brands/gemsip" },
            { label: "Gemberg", subtitle: "Carbonated Drinks", href: "/brands/gemberg" },
            { label: "GemJeera", subtitle: "Traditional Drinks", href: "/brands/gemjeera" },
            { label: "Gemneer", subtitle: "Water", href: "/brands/gemneer" },
            { label: "Gem Chips", subtitle: "Snacks", href: "/brands/gem-chips" },
        ]
    },
    { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-primary/5 py-3"
                        : "bg-gradient-to-b from-black/20 to-transparent py-5"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 group">
                        <div className="flex items-center space-x-2">
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                                isScrolled
                                    ? "bg-gradient-to-br from-primary to-primary-light"
                                    : "bg-gradient-to-br from-secondary to-secondary/80"
                            )}>
                                <span className="text-white font-serif text-lg font-bold">G</span>
                            </div>
                            <div>
                                <h1 className={cn(
                                    "font-serif text-2xl font-bold tracking-tight transition-colors",
                                    isScrolled ? "text-primary" : "text-white"
                                )}>
                                    GM AGRO
                                </h1>
                                <p className={cn(
                                    "text-xs uppercase tracking-widest transition-colors",
                                    isScrolled ? "text-secondary" : "text-white/80"
                                )}>
                                    Since 1958
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href;
                            const hasDropdown = item.dropdown && item.dropdown.length > 0;

                            return (
                                <div
                                    key={item.label}
                                    className="relative group"
                                    onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                                    onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className="relative flex items-center gap-1"
                                    >
                                        <span className={cn(
                                            "text-sm font-bold uppercase tracking-widest transition-colors",
                                            isScrolled
                                                ? (isActive ? "text-secondary" : "text-charcoal hover:text-secondary")
                                                : "text-white/90 hover:text-white"
                                        )}>
                                            {item.label}
                                        </span>
                                        {hasDropdown && (
                                            <ChevronDown className={cn(
                                                "w-3 h-3 transition-all",
                                                openDropdown === item.label ? "rotate-180" : "",
                                                isScrolled ? "text-charcoal" : "text-white/90"
                                            )} />
                                        )}
                                        {/* Active/Hover Underline */}
                                        <motion.div
                                            className={cn(
                                                "absolute -bottom-1 left-0 h-0.5 rounded-full",
                                                isScrolled ? "bg-secondary" : "bg-white"
                                            )}
                                            initial={{ width: isActive ? "100%" : 0 }}
                                            animate={{ width: isActive ? "100%" : 0 }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {hasDropdown && (
                                        <AnimatePresence>
                                            {openDropdown === item.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden border border-primary/10 min-w-[240px]"
                                                >
                                                    {item.dropdown.map((dropdownItem) => (
                                                        <Link
                                                            key={dropdownItem.href}
                                                            href={dropdownItem.href}
                                                            className="block px-6 py-4 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-colors group/item"
                                                        >
                                                            <div className="font-bold text-primary group-hover/item:text-secondary transition-colors">
                                                                {dropdownItem.label}
                                                            </div>
                                                            <div className="text-xs text-primary/50 uppercase tracking-wide mt-1">
                                                                {dropdownItem.subtitle}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            );
                        })}

                        {/* CTA Button */}
                        <Button
                            size="sm"
                            className={cn(
                                "transition-all duration-300",
                                isScrolled
                                    ? "bg-secondary text-primary hover:bg-primary hover:text-white"
                                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary border border-white/30"
                            )}
                        >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Shop Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className={cn(
                                "w-6 h-6 transition-colors",
                                isScrolled ? "text-charcoal" : "text-white"
                            )} />
                        ) : (
                            <Menu className={cn(
                                "w-6 h-6 transition-colors",
                                isScrolled ? "text-primary" : "text-white"
                            )} />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-gradient-to-br from-primary via-primary-light to-primary flex flex-col md:hidden overflow-y-auto"
                        style={{ paddingTop: "80px" }}
                    >
                        <div className="container mx-auto px-6 flex flex-col space-y-6 py-8">
                            {NAV_ITEMS.map((item, index) => {
                                const isActive = pathname === item.href;
                                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="space-y-2"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => !hasDropdown && setIsMobileMenuOpen(false)}
                                            className={cn(
                                                "block text-3xl font-serif font-medium transition-all",
                                                isActive
                                                    ? "text-secondary pl-4 border-l-4 border-secondary"
                                                    : "text-white hover:text-secondary hover:pl-4"
                                            )}
                                        >
                                            {item.label}
                                        </Link>

                                        {/* Mobile Dropdown Items */}
                                        {hasDropdown && (
                                            <div className="pl-8 space-y-3 mt-3">
                                                {item.dropdown.map((dropdownItem) => (
                                                    <Link
                                                        key={dropdownItem.href}
                                                        href={dropdownItem.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block text-white/80 hover:text-secondary transition-colors"
                                                    >
                                                        <div className="font-bold text-lg">{dropdownItem.label}</div>
                                                        <div className="text-xs text-white/50 uppercase tracking-wide">{dropdownItem.subtitle}</div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-8"
                            >
                                <Button
                                    size="lg"
                                    className="w-full bg-secondary text-primary hover:bg-white"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Shop Our Products
                                </Button>
                            </motion.div>

                            {/* Brand Tagline */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="pt-12 text-center"
                            >
                                <p className="text-white/60 text-sm italic">
                                    "Real fruit. Real fizz. Real impact."
                                </p>
                                <p className="text-white/40 text-xs mt-2">Since 1958</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
