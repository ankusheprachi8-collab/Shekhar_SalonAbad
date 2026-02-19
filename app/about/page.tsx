"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Award, Scissors, Heart } from "lucide-react";

// --- TEAM DATA ---
const team = [
  {
    name: "Shekhar [Lastname]",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop", // Male stylist placeholder
    bio: "With over 15 years of experience, Shekhar has trained with the biggest names in London and Mumbai."
  },
  {
    name: "Priya Sharma",
    role: "Senior Colorist",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1780&auto=format&fit=crop", // Female stylist
    bio: "Specializing in Balayage and color correction, Priya brings art to hair chemistry."
  },
  {
    name: "Rahul Deshmukh",
    role: "Master Barber",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop", // Barber
    bio: "Precision fades and beard sculpting expert with a focus on classic gentleman grooming."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream-50 pt-20">

      {/* 1. HERO: The Story */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-bronze-500 text-xs uppercase tracking-[0.2em] font-bold mb-4 block">
              Est. 2010 • Aurangabad
            </span>
            <h1 className="text-5xl md:text-7xl font-heading text-charcoal-900 mb-8 leading-tight">
              More than just <br />
              <span className="italic text-bronze-500">A Salon.</span>
            </h1>
            <p className="text-charcoal-800/80 font-body text-lg leading-relaxed mb-6">
              Welcome to Shekhar Salon. What started as a small chair in 2010 has grown into Aurangabad’s premier destination for luxury hair care and education.
            </p>
            <p className="text-charcoal-800/80 font-body text-lg leading-relaxed">
              We believe that hair is the most versatile accessory you wear every day. It shouldn't just look good when you leave the salon; it should look good when you wake up the next morning. That is the <strong>Shekhar Signature</strong>.
            </p>
            
            <div className="mt-10 p-6 bg-white border border-bronze-100 relative">
              <Quote className="absolute -top-3 -left-3 text-bronze-500 bg-white p-1" size={32} />
              <p className="font-heading text-xl italic text-charcoal-900">
                "We don't just cut hair. We design confidence."
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-bronze-600">— Shekhar, Founder</p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-bronze-500 translate-x-4 translate-y-4 z-0" />
            <img 
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop" 
              alt="Shekhar Salon Interior" 
              className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-luxury"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. THE STATS STRIP */}
      <section className="bg-charcoal-900 text-cream-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Scissors className="mx-auto text-bronze-500 mb-4" size={32} />
            <h3 className="text-4xl font-heading">15+</h3>
            <p className="text-xs uppercase tracking-widest opacity-60 mt-2">Years Experience</p>
          </div>
          <div>
            <Heart className="mx-auto text-bronze-500 mb-4" size={32} />
            <h3 className="text-4xl font-heading">10k+</h3>
            <p className="text-xs uppercase tracking-widest opacity-60 mt-2">Happy Clients</p>
          </div>
          <div>
            <Award className="mx-auto text-bronze-500 mb-4" size={32} />
            <h3 className="text-4xl font-heading">25+</h3>
            <p className="text-xs uppercase tracking-widest opacity-60 mt-2">Awards Won</p>
          </div>
          <div>
            <span className="block mx-auto text-bronze-500 mb-4 text-2xl font-bold">4.9★</span>
            <h3 className="text-4xl font-heading">Google</h3>
            <p className="text-xs uppercase tracking-widest opacity-60 mt-2">Top Rated</p>
          </div>
        </div>
      </section>

      {/* 3. MEET THE ARTISTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-bronze-500 text-xs uppercase tracking-widest font-bold">The Team</span>
          <h2 className="text-4xl md:text-5xl font-heading text-charcoal-900 mt-3">Meet The Artists</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-[400px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-luxury transform group-hover:scale-105" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-charcoal-900 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">{member.bio}</p>
                </div>
              </div>
              <h3 className="text-2xl font-heading text-charcoal-900">{member.name}</h3>
              <p className="text-bronze-600 uppercase text-xs tracking-widest mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VALUES / FOOTER CTA */}
      <section className="bg-sage-100 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading text-sage-900 mb-6">Experience the Difference</h2>
          <p className="text-sage-800/80 mb-10 leading-relaxed">
            Whether you are looking for a complete transformation or a simple trim, our doors are open. Come sit in our chair and let us take care of you.
          </p>
          <a href="/book" className="inline-block bg-sage-900 text-cream-50 px-10 py-4 uppercase tracking-widest text-xs hover:bg-bronze-500 transition-colors">
            Book an Appointment
          </a>
        </div>
      </section>

    </main>
  );
}