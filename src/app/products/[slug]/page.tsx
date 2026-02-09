"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ShoppingCart, Sparkles, Heart, Share2 } from "lucide-react";

// Product personality mappings
const productPersonalities: Record<string, { personality: string; story: string; tagline: string }> = {
    Gemsip: {
        personality: "The Nostalgia Sipper",
        story: "Every sip takes you back to carefree summer afternoons, when life was simple and joy came in a glass. Gemsip isn't just juice—it's bottled memories.",
        tagline: "Taste the memories of summer"
    },
    Gemberg: {
        personality: "The Fizz Revolutionary",
        story: "Why settle for ordinary carbonated drinks? Gemberg gives you the fizz you love PLUS 5% real fruit pulp. It's the revolutionary drink that doesn't compromise.",
        tagline: "Real fizz. Real fruit. Real difference."
    },
    GemJeera: {
        personality: "The Digestive Companion",
        story: "Ancient wisdom meets modern refreshment. GemJeera brings you the traditional benefits of jeera masala in a sparkling, delicious format your whole family will love.",
        tagline: "Tradition in every bubble"
    },
    Gemneer: {
        personality: "The Pure Essential",
        story: "In a world of complexity, Gemneer offers simplicity. Crystal clear, perfectly pure, just the way nature intended. Because purity never goes out of style.",
        tagline: "Pure. Simple. Essential."
    },
    "Gem Chips": {
        personality: "The Crunch Companion",
        story: "Every celebration, every movie night, every moment of hunger—Gem Chips is there. Your crunchy companion through life's little moments.",
        tagline: "Crunch into happiness"
    },
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    const product = products.find(p => p.id === params.slug);

    if (!product) {
        notFound();
    }

    const personality = productPersonalities[product.brand];

    return (
        <div className="bg-cream min-h-screen pt-24 pb-24">
            {/* Back Button */}
            <div className="container mx-auto px-6 mb-8">
                <Link
                    href="/products"
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold uppercase tracking-wider text-sm">Back to Products</span>
                </Link>
            </div>

            {/* Product Details */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Product Image */}
                    <div className="relative">
                        <div className="sticky top-32">
                            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white to-cream shadow-2xl">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Floating Badge */}
                                <div className="absolute top-6 right-6 bg-gradient-to-br from-secondary to-primary px-6 py-3 rounded-full shadow-xl">
                                    <p className="text-white font-bold text-sm uppercase tracking-wide">
                                        {product.brand}
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 mt-6">
                                <button className="flex-1 bg-white border-2 border-primary/10 text-primary hover:border-secondary hover:text-secondary transition-all p-4 rounded-full">
                                    <Heart className="w-5 h-5 mx-auto" />
                                </button>
                                <button className="flex-1 bg-white border-2 border-primary/10 text-primary hover:border-secondary hover:text-secondary transition-all p-4 rounded-full">
                                    <Share2 className="w-5 h-5 mx-auto" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        {/* Category Badge */}
                        <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full">
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">
                                <Sparkles className="inline w-3 h-3 mr-1" />
                                {product.category}
                            </span>
                        </div>

                        {/* Product Name */}
                        <div>
                            <h1 className="font-serif text-5xl md:text-6xl text-primary mb-4">
                                {product.brand} <span className="text-secondary">{product.name}</span>
                            </h1>
                            <p className="text-2xl text-primary/60 italic">
                                {personality?.tagline}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-bold text-secondary">{product.price}</span>
                            <span className="text-sm text-primary/50 line-through">₹{parseInt(product.price.replace(/\D/g, '')) + 10}</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                                SAVE ₹10
                            </span>
                        </div>

                        {/* Description */}
                        <div className="border-l-4 border-secondary pl-6 py-2">
                            <p className="text-lg text-primary/80 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Personality Story */}
                        {personality && (
                            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10">
                                <h3 className="font-serif text-2xl text-primary mb-4 flex items-center">
                                    <Sparkles className="w-5 h-5 mr-2 text-secondary" />
                                    {personality.personality}
                                </h3>
                                <p className="text-primary/70 leading-relaxed italic">
                                    "{personality.story}"
                                </p>
                            </div>
                        )}

                        {/* CTA Buttons */}
                        <div className="space-y-4 pt-4">
                            <Button size="lg" className="w-full bg-secondary text-primary hover:bg-primary hover:text-white text-lg py-6">
                                <ShoppingCart className="w-5 h-5 mr-3" />
                                Add to Cart - {product.price}
                            </Button>
                            <Button size="lg" variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg py-6">
                                Buy Now
                            </Button>
                        </div>

                        {/* Product Highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-8">
                            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                                <p className="text-3xl font-bold text-secondary mb-2">100%</p>
                                <p className="text-sm text-primary/60 uppercase tracking-wide">Natural</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                                <p className="text-3xl font-bold text-secondary mb-2">0</p>
                                <p className="text-sm text-primary/60 uppercase tracking-wide">Preservatives</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                                <p className="text-3xl font-bold text-secondary mb-2">1958</p>
                                <p className="text-sm text-primary/60 uppercase tracking-wide">Since</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                                <p className="text-3xl font-bold text-secondary mb-2">5%</p>
                                <p className="text-sm text-primary/60 uppercase tracking-wide">Real Fruit</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-24">
                    <h2 className="font-serif text-4xl text-primary mb-8 text-center">
                        You Might Also Like
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products
                            .filter(p => p.brand === product.brand && p.id !== product.id)
                            .slice(0, 3)
                            .map(relatedProduct => (
                                <Link
                                    key={relatedProduct.id}
                                    href={`/products/${relatedProduct.id}`}
                                    className="group bg-white rounded-2xl overflow-hidden border-2 border-primary/5 hover:border-secondary hover:shadow-xl transition-all"
                                >
                                    <div className="relative aspect-square bg-cream">
                                        <Image
                                            src={relatedProduct.image}
                                            alt={relatedProduct.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-serif text-xl text-primary group-hover:text-secondary transition-colors">
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-secondary font-bold mt-2">{relatedProduct.price}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
