"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 bg-cream-50 flex flex-col items-center justify-center text-center">
            <span className="text-bronze-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                Our Journal
            </span>
            <h1 className="text-5xl md:text-7xl font-heading text-charcoal-900 mb-6">
                Coming Soon
            </h1>
            <p className="text-charcoal-800/70 max-w-md mx-auto mb-10 font-body">
                We are crafting insightful articles on hair care, styling trends, and salon culture. Stay tuned!
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-bronze-600 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
            >
                <ArrowLeft size={18} /> Back to Home
            </Link>
        </main>
    );
}
