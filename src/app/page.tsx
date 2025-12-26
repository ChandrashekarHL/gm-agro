import { HeroSection } from "@/components/home/HeroSection";
import { JourneySection } from "@/components/home/JourneySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Ticker / Scrolling Text */}
      <div className="bg-primary text-secondary-light py-4 overflow-hidden border-y border-secondary/20">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm font-bold uppercase tracking-[0.2em]">
          <span>Gemberg: Carbonated Fruit Drink</span> • <span>Gemsip: Ready To Serve</span> • <span>Gemneer: Pure Water</span> •
          <span>Gemberg: Carbonated Fruit Drink</span> • <span>Gemsip: Ready To Serve</span> • <span>Gemneer: Pure Water</span> •
          <span>Gemberg: Carbonated Fruit Drink</span> • <span>Gemsip: Ready To Serve</span> • <span>Gemneer: Pure Water</span> •
          <span>Gemberg: Carbonated Fruit Drink</span> • <span>Gemsip: Ready To Serve</span> • <span>Gemneer: Pure Water</span> •
        </div>
      </div>

      <TestimonialsSection />

      {/* Horizontal Journey Section */}
      <JourneySection />

      {/* Full Bleed CTA */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
          fill
          alt="Field background"
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-2xl px-6 space-y-8">
          <h2 className="font-serif text-5xl md:text-7xl text-white">
            Taste the <span className="text-secondary italic">Difference</span>
          </h2>
          <Link href="/products" className="inline-block px-12 py-4 bg-white text-primary font-bold uppercase tracking-widest rounded-full hover:bg-secondary hover:text-white transition-colors">
            View Catalog
          </Link>
        </div>
      </section>
    </>
  );
}
