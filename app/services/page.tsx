"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

// --- DATA DEFINITION ---
const categories = [
  {
    id: "hair",
    name: "Hair & Styling",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1926&auto=format&fit=crop",
    items: [
      {
        name: "Precision Haircut",
        price: "₹800 - ₹1,500",
        description: "A bespoke cut designed to suit your face shape and lifestyle.",
      },
      {
        name: "Signature Blowout",
        price: "₹500+",
        description: "Perfect for events or a weekly treat.",
      },
      {
        name: "Men's Grooming",
        price: "₹400 - ₹800",
        description: "Classic barbering techniques meets modern styling.",
      },
    ],
  },
  {
    id: "color",
    name: "Color & Chemistry",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
    items: [
      {
        name: "Global Color",
        price: "₹3,500+",
        description: "Root-to-tip color using ammonia-free products.",
      },
      {
        name: "Balayage",
        price: "₹5,000+",
        description: "Hand-painted highlights for a natural look.",
      },
    ],
  },
  {
    id: "bridal",
    name: "Bridal Studio",
    image: "https://images.unsplash.com/photo-1610173824056-2b47cc51398b?q=80&w=1974&auto=format&fit=crop",
    items: [
      {
        name: "Maharashtrian Bridal",
        price: "₹12,000+",
        description: "Traditional Nauvari draping and HD Makeup.",
      },
      {
        name: "Reception Glam",
        price: "₹8,000+",
        description: "High-glamour look with bold eyes.",
      },
    ],
  },
];

// --- MAIN COMPONENT ---
export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // If data is missing for some reason, return simple loading
  if (!activeCategory) return <div>Loading...</div>;

  return (
    <main className="min-h-screen bg-cream-50 pt-20">
      
      {/* HEADER */}
      <div className="bg-charcoal-900 text-cream-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-widest text-bronze-400 text-xs mb-4">The Menu</p>
          <h1 className="text-5xl md:text-7xl font-heading">Our Services</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT SIDE: Image */}
        <div className="hidden lg:block w-1/2 h-screen sticky top-0 bg-charcoal-900">
             <img
              src={activeCategory.image}
              className="w-full h-full object-cover filter brightness-75 transition-opacity duration-500"
              alt={activeCategory.name}
            />
             <div className="absolute bottom-10 left-10 z-10">
                <h2 className="text-4xl text-white font-heading">{activeCategory.name}</h2>
             </div>
        </div>

        {/* RIGHT SIDE: List */}
        <div className="w-full lg:w-1/2 bg-cream-50 px-6 py-12 lg:px-20 lg:py-24">
          
          {/* TABS */}
          <div className="flex overflow-x-auto gap-8 mb-16 border-b border-charcoal-900/10 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-sm uppercase tracking-widest pb-2 transition-colors ${
                  activeCategory.id === cat.id 
                    ? "text-bronze-500 border-b-2 border-bronze-500" 
                    : "text-charcoal-900/40"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* LIST */}
          <div className="space-y-8">
            {activeCategory.items.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-charcoal-900/10 pb-8 cursor-pointer"
                onClick={() => setExpandedService(expandedService === item.name ? null : item.name)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-heading text-charcoal-900">{item.name}</h3>
                  <button className="text-charcoal-900">
                    {expandedService === item.name ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                </div>

                {/* EXPANDABLE AREA */}
                {expandedService === item.name && (
                  <div className="pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-charcoal-800/70">{item.description}</p>
                    <p className="text-bronze-600 font-bold mt-2">{item.price}</p>
                    <Link href="/book" className="inline-block mt-4 text-xs uppercase bg-charcoal-900 text-white px-6 py-3">
                      Book Now
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}