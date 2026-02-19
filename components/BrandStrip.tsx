"use client";

// Replaced external images with styled typography for reliability.
// In a production environment, you would replace these containing <div>s with <Image /> using local SVGs.

const brands = [
    { name: "L'ORÉAL", className: "font-heading font-bold tracking-[0.2em] text-2xl" },
    { name: "SCHWARZKOPF", className: "font-body font-black tracking-tighter text-xl" },
    { name: "KÉRASTASE", className: "font-heading font-semibold tracking-[0.3em] text-lg" },
    { name: "WELLA", className: "font-body font-extrabold tracking-[0.25em] text-xl" },
    { name: "dyson", className: "font-body font-bold tracking-wider text-3xl lowercase" }
];

export default function BrandStrip() {
    return (
        <section className="bg-cream-100 py-16 border-y border-bronze-500/10">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs uppercase tracking-[0.3em] text-bronze-600 mb-12 font-bold">
                    Official Partners & Premium Products
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {brands.map((brand) => (
                        <span
                            key={brand.name}
                            className={`text-charcoal-800 opacity-40 hover:opacity-100 hover:text-bronze-600 transition-all duration-500 cursor-default select-none ${brand.className}`}
                        >
                            {brand.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
