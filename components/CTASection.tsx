"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-20 bg-bronze-500 text-white text-center relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
                    Ready for your <span className="italic text-charcoal-900">Transformation?</span>
                </h2>
                <p className="text-white/90 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10">
                    Experience the art of luxury grooming. Book your appointment today or visit our academy to start your journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/book"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-charcoal-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <Calendar size={18} /> Book Appointment
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-bronze-500 transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
