import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Hair & Styling",
    subtitle: "Precision cuts & color transformations",
    link: "/services",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
    colSpan: "md:col-span-2", // Large Card
  },
  {
    title: "Bridal Studio",
    subtitle: "The Maharashtrian Wedding Specialist",
    link: "/bridal",
    image: "https://images.unsplash.com/photo-1610173824056-2b47cc51398b?q=80&w=1974&auto=format&fit=crop", // Updated Image
    colSpan: "md:col-span-1",
  },
  {
    title: "The Academy",
    subtitle: "Launch your career in beauty",
    link: "/academy",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    isDark: true, // Special styling for Academy
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-cream-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm tracking-widest uppercase text-bronze-500 mb-2">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-charcoal-900">
              Curated Services
            </h3>
          </div>
          <Link href="/services" className="hidden md:flex items-center gap-2 text-charcoal-900 border-b border-charcoal-900 pb-1 hover:text-bronze-500 hover:border-bronze-500 transition-all">
            View Full Menu <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[400px] md:auto-rows-fr h-auto md:h-[600px]">
          {services.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`group relative overflow-hidden rounded-none ${item.colSpan} h-[400px] md:h-full block`}
            >
              {/* IMAGE BACKDROP */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10 duration-500" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-luxury"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-cream-100 text-xs uppercase tracking-widest mb-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.subtitle}
                    </p>
                    <h4 className="text-3xl font-heading text-white group-hover:text-bronze-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}