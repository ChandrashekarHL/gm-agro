import React from "react";

// SVG Components for "Pop Art / Crunch" Theme

export const JaggedBubble = ({ className, text }: { className?: string, text?: string }) => (
    <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-current" fill="currentColor">
            <path d="M10,50 L20,40 L15,30 L30,35 L40,20 L50,30 L65,15 L70,35 L85,30 L80,45 L95,55 L80,65 L85,80 L70,75 L60,90 L50,80 L40,90 L30,75 L15,85 L25,65 L10,60 Z" />
        </svg>
        {text && <span className="relative z-10 font-bold font-sans italic">{text}</span>}
    </div>
);

export const LightningBolt = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M40 0 L15 60 L45 60 L30 100 L85 30 L55 30 Z" />
    </svg>
);

export const HalftonePattern = ({ className }: { className?: string }) => (
    <svg width="100%" height="100%" className={className}>
        <pattern id="halftone" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="4" className="text-current" fill="currentColor" opacity="0.2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#halftone)" />
    </svg>
);

export const SpeedLines = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="50" y1="50" x2="50" y2="0" />
        <line x1="50" y1="50" x2="85" y2="15" />
        <line x1="50" y1="50" x2="100" y2="50" />
        <line x1="50" y1="50" x2="85" y2="85" />
        <line x1="50" y1="50" x2="50" y2="100" />
        <line x1="50" y1="50" x2="15" y2="85" />
        <line x1="50" y1="50" x2="0" y2="50" />
        <line x1="50" y1="50" x2="15" y2="15" />
    </svg>
);
