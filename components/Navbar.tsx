"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detect scroll to toggle the "Glass" effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparentPage = ["/", "/academy", "/services"].includes(pathname);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${isScrolled
          ? "bg-charcoal-900/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5"
          : isTransparentPage ? "bg-transparent py-6" : "bg-charcoal-900 py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-heading text-cream-50 z-50 relative">
            SHEKHAR <span className="text-bronze-400 italic">Salon</span>
          </Link>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-10">
            {["Home", "About", "Services", "Academy", "Blog"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest text-cream-100 hover:text-bronze-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE: Call Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className="hidden md:flex items-center gap-2 px-5 py-2 border border-bronze-500 text-bronze-400 rounded-full text-xs uppercase tracking-widest hover:bg-bronze-500 hover:text-white transition-all"
            >
              <Phone size={14} />
              <span>+91 98900 XXXXX</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-cream-50"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-charcoal-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in-up">
          {["Home", "Services", "Academy", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-heading text-cream-50 hover:text-bronze-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}