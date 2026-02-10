import React from "react";

export const LemonSlice = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <circle cx="50" cy="50" r="48" fill="#FEF08A" />
        <circle cx="50" cy="50" r="42" fill="#FBBF24" />
        <path d="M50 50 L50 10 A40 40 0 0 1 85 30 Z" fill="#FEF9C3" />
        <path d="M50 50 L90 50 A40 40 0 0 1 78 85 Z" fill="#FEF9C3" />
        <path d="M50 50 L50 90 A40 40 0 0 1 15 70 Z" fill="#FEF9C3" />
        <path d="M50 50 L10 50 A40 40 0 0 1 22 15 Z" fill="#FEF9C3" />
    </svg>
);

export const OrangeZest = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 100" className={className} style={{ fill: "none", stroke: "currentColor", strokeWidth: 15, strokeLinecap: "round" }}>
        <path d="M10 50 C 40 10, 60 90, 90 50 C 120 10, 140 90, 190 20" />
    </svg>
);

export const AbstractBlob = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor">
        <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.7C60.4,46.5,49.9,56.5,38.1,64.4C26.3,72.3,13.1,78.1,0.5,77.2C-12.1,76.3,-24.2,68.7,-35.3,60.2C-46.4,51.7,-56.5,42.3,-65.3,30.8C-74.1,19.3,-81.6,5.7,-80.4,-7.3C-79.1,-20.3,-69.1,-32.7,-58.3,-43.3C-47.5,-53.9,-35.9,-62.7,-23.4,-67.7C-10.9,-72.7,2.5,-73.9,15.8,-73.9" transform="translate(100 100)" />
    </svg>
);

export const StarBurst = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" />
    </svg>
);
