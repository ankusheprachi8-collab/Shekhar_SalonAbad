"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-50 pt-20 pb-10 border-t border-bronze-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl tracking-tighter">
              SHEKHAR <span className="text-bronze-500 italic">SALON</span>
            </h2>
            <p className="text-cream-50/60 font-body text-sm leading-relaxed">
              Aurangabad's premier destination for luxury hair design and grooming. 
              Crafting confidence since 2010 through precision and art.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-bronze-500 transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-bronze-500 transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-bronze-500 transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-bronze-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">Navigation</h3>
            <ul className="space-y-4 font-body text-sm">
              <li><Link href="/" className="hover:pl-2 transition-all duration-300 opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link href="/about" className="hover:pl-2 transition-all duration-300 opacity-80 hover:opacity-100">Our Story</Link></li>
              <li><Link href="/services" className="hover:pl-2 transition-all duration-300 opacity-80 hover:opacity-100">Services</Link></li>
              <li><Link href="/book" className="hover:pl-2 transition-all duration-300 opacity-80 hover:opacity-100 font-bold text-bronze-400">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-bronze-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">Visit Us</h3>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex gap-3 opacity-80">
                <MapPin size={18} className="text-bronze-500 shrink-0" />
                <span>N-3, CIDCO, Opp. Nirala Bazar, Aurangabad, MH 431001</span>
              </li>
              <li className="flex gap-3 opacity-80">
                <Phone size={18} className="text-bronze-500 shrink-0" />
                <span>+91 98XXX XXXXX</span>
              </li>
              <li className="flex gap-3 opacity-80">
                <Mail size={18} className="text-bronze-500 shrink-0" />
                <span>hello@shekharsalon.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-bronze-500 uppercase tracking-[0.2em] text-xs font-bold mb-6">Hours</h3>
            <ul className="space-y-2 font-body text-sm opacity-80">
              <li className="flex justify-between"><span>Mon - Sat</span> <span>10:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>11:00 - 18:00</span></li>
              <li className="mt-6 p-4 border border-bronze-900/50 italic text-xs text-bronze-400">
                *Appointments are recommended for chemical treatments.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-cream-50/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">
          <p>© 2024 SHEKHAR SALON. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED BY [YOUR NAME/AGENCY]</p>
        </div>
      </div>
    </footer>
  );
}