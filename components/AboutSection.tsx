"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* IMAGE SIDE */}
                    <div className="relative">
                        {/* Pattern/Decoration */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-bronze-100 rounded-full blur-3xl opacity-50" />

                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-12">
                                <img
                                    src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop"
                                    alt="Salon Interior"
                                    className="rounded-none shadow-lg w-full h-64 object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1000&auto=format&fit=crop"
                                    alt="Styling Tool"
                                    className="rounded-none shadow-lg w-full h-48 object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <img
                                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop"
                                    alt="Happy Client"
                                    className="rounded-none shadow-lg w-full h-80 object-cover"
                                />

                                {/* Stats Card */}
                                <div className="bg-charcoal-900 p-6 text-cream-50 flex flex-col justify-center items-center text-center">
                                    <span className="text-4xl font-heading text-bronze-400 mb-2">15+</span>
                                    <span className="text-xs uppercase tracking-widest">Years of<br />Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TEXT SIDE */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-bronze-500 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                                About Shekhar Salon
                            </span>
                            <h2 className="text-4xl md:text-5xl font-heading text-charcoal-900 leading-tight">
                                Where Structure <br />
                                <span className="italic text-bronze-600">Meets Artistry</span>
                            </h2>
                        </div>

                        <p className="text-charcoal-800/70 font-body leading-relaxed text-lg">
                            Established in 2010, Shekhar Salon has been the hallmark of luxury grooming in Aurangabad.
                            We believe that hair styling is not just about cutting hair – it's about sculpting confidence and
                            enhancing your natural features.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Personalized Consultation for Every Client",
                                "Internationally Certified Stylists",
                                "Premium Products (L'Oreal, Schwarzkopf)",
                                "Relaxing, Hygienic & Luxurious Ambience"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <CheckCircle2 size={20} className="text-bronze-500 group-hover:scale-110 transition-transform" />
                                    <span className="text-charcoal-900 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-3 text-bronze-600 font-bold uppercase tracking-widest text-sm hover:gap-5 transition-all duration-300"
                            >
                                Read Our Story <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
