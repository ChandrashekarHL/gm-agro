import React from "react";
import { motion } from "framer-motion";

// SVG Components for "Masala Explosion"

export const CuminSeed = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        {/* Teardrop shape for cumin seed */}
        <path d="M50 0 C20 0 10 30 10 50 C10 80 30 100 50 100 C70 100 90 80 90 50 C90 30 80 0 50 0 Z" />
        {/* Texture lines */}
        <path d="M50 10 L50 90 M30 30 L30 70 M70 30 L70 70" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" />
    </svg>
);

export const MintLeaf = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        {/* Simple leaf shape */}
        <path d="M50 95 C50 95 10 70 10 40 C10 15 35 5 50 5 C65 5 90 15 90 40 C90 70 50 95 50 95 Z" />
        <path d="M50 5 L50 95 M50 30 L80 15 M50 50 L80 40 M50 70 L80 65 M50 30 L20 15 M50 50 L20 40 M50 70 L20 65" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
    </svg>
);

export const RockSalt = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        {/* Irregular crystal shape */}
        <path d="M50 5 L80 20 L95 50 L70 90 L30 85 L5 50 L20 15 Z" />
        <path d="M50 5 L50 90 M5 50 L95 50" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
    </svg>
);

export const MasalaBurst = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        {/* Starburst/Explosion shape */}
        <path d="M50 0 L60 35 L95 35 L65 60 L75 95 L50 75 L25 95 L35 60 L5 35 L40 35 Z" />
    </svg>
);

export const FizzBubble = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <circle cx="50" cy="50" r="45" />
        <circle cx="35" cy="35" r="10" fill="white" fillOpacity="0.4" />
    </svg>
);
