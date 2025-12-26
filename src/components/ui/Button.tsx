"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-secondary-light hover:bg-primary-light border border-transparent",
            secondary: "bg-secondary text-primary hover:bg-secondary/90 border-transparent",
            outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
            ghost: "bg-transparent text-primary hover:bg-primary/5 border-transparent",
        };

        const sizes = {
            sm: "px-5 py-2 text-xs uppercase tracking-widest",
            md: "px-8 py-3 text-sm uppercase tracking-widest",
            lg: "px-10 py-4 text-base uppercase tracking-widest",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-cream disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading ? (
                    <span className="mr-2 animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                ) : null}
                {children as React.ReactNode}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
