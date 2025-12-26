import { HeroSection } from "@/components/home/HeroSection";
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
          <span>Sustainable Sourcing</span> • <span>Global Standards</span> • <span>Premium Quality</span> •
          <span>Sustainable Sourcing</span> • <span>Global Standards</span> • <span>Premium Quality</span> •
          <span>Sustainable Sourcing</span> • <span>Global Standards</span> • <span>Premium Quality</span> •
        </div>
      </div>

      {/* Editorial Grid Section */}
      <section className="py-24 bg-cream text-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* Left Text Block */}
            <div className="md:col-span-4 space-y-8 sticky top-32 self-start">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Ethical Farming,<br /> Exceptionally Delivered.
              </h2>
              <p className="text-primary/70 leading-relaxed font-light">
                We don't just supply ingredients; we curate experiences.
                GM Agro partners with heritage farms to bring you flavors
                that tell the story of their origin.
              </p>
              <Link href="/sustainability" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors group">
                Our Impact <span className="ml-2 w-8 h-[1px] bg-current group-hover:w-12 transition-all" />
              </Link>
            </div>

            {/* Right Grid Image Collage */}
            <div className="md:col-span-8 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-white p-6 rounded-2xl border border-primary/5 shadow-sm">
                  <Star className="text-secondary w-8 h-8 mb-4 fill-current" />
                  <h3 className="font-serif text-xl mb-2">Purity First</h3>
                  <p className="text-sm text-primary/60">No additives, just nature as intended.</p>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2680&auto=format&fit=crop"
                    fill
                    alt="Farmer hands"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
                    fill
                    alt="Produce market"
                    className="object-cover"
                  />
                </div>
                <div className="bg-primary text-cream p-6 rounded-2xl">
                  <h3 className="font-serif text-xl mb-2">Global Logistics</h3>
                  <p className="text-sm text-white/70">Seamless supply chain management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
