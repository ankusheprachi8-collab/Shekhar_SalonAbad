"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        text: "The best salon experience I've had in Aurangabad. Shekhar's attention to detail is unmatched. My hair has never looked healthier.",
        author: "Priya Sharma",
        role: "Regular Client",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        text: "The Academy transformed my career. The hands-on training and mentorship gave me the confidence to open my own studio.",
        author: "Rahul Deshmukh",
        role: "Academy Graduate",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        text: "Luxury ambiance with affordable pricing. The bridal package was perfect – they made my special day truly magical.",
        author: "Anjali Patil",
        role: "Bride",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

export default function TestimonialSection() {
    return (
        <section className="py-24 bg-charcoal-900 text-cream-50 relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bronze-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <span className="text-bronze-400 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                        Client Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading text-cream-50">
                        Voices of <span className="italic text-bronze-400">Trust</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 p-8 relative group hover:bg-white/10 transition-colors duration-300 rounded-sm"
                        >
                            <Quote className="text-bronze-500 absolute top-8 right-8 opacity-20 group-hover:opacity-50 transition-opacity" size={40} />

                            <div className="flex gap-1 text-bronze-400 mb-6">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                            </div>

                            <p className="text-cream-100/90 font-body leading-relaxed mb-8 italic">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={item.image}
                                    alt={item.author}
                                    className="w-12 h-12 rounded-full object-cover border border-bronze-500/30"
                                />
                                <div>
                                    <h4 className="font-heading text-lg text-cream-50">{item.author}</h4>
                                    <p className="text-xs uppercase tracking-wider text-bronze-400">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
