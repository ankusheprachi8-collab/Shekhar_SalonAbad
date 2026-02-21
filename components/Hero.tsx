import Link from "next/link";

export default function Hero() {

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-charcoal-900">

      {/* 
         BACKGROUND VIDEO 
         Use a muted, slow-motion video.
         Overlay a slight dark wash so text pops.
      */}
      <div className="absolute inset-0 z-0 bg-charcoal-900">
        {/* 1. BACKGROUND BLUR LAYER (Mobile Only) - Fills the vertical space elegantly */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 blur-2xl opacity-40 md:hidden scale-110"
        >
          <source src="salon_mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="salon_slowmo.mp4" type="video/mp4" />
        </video>

        {/* 2. FALLBACK IMAGE */}
        <img
          src="hero-placeholder.jpg"
          alt="Salon Ambience"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 md:opacity-100"
        />

        {/* 3. OVERLAY WASH */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* 4. MAIN FOREGROUND VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="absolute inset-0 w-full h-full object-contain md:object-cover z-0"
          poster="hero-placeholder.jpg"
        >
          {/* Mobile Optimized Video Hook */}
          <source src="salon_mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="salon_slowmo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 text-center max-w-4xl px-6">

        {/* Subtitle with wide letter spacing = Luxury */}
        <span className="block text-cream-100 text-sm md:text-base tracking-[0.2em] uppercase font-body mb-6 animate-fade-in-up">
          Est. 2010 • Aurangabad
        </span>

        {/* 
            Main Heading 
            Using our custom Serif font + Bronze accent 
        */}
        {/* 
            Main Heading 
            Using our custom Serif font + Bronze accent 
        */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading text-cream-50 mb-8 leading-tight">
          Redefining <br />
          <span className="italic text-bronze-400">Elegance</span> & Style
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-10 w-full md:w-auto">

          {/* Primary Button: Solid Bronze */}
          <Link href="/book" className="w-full sm:w-auto text-center px-8 py-4 bg-bronze-500 text-white font-body text-sm tracking-widest uppercase hover:bg-bronze-600 transition-colors duration-400 ease-luxury">
            Book Appointment
          </Link>

          {/* Secondary Button: Transparent/Glass */}
          <Link href="/academy" className="w-full sm:w-auto text-center px-8 py-4 border border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-charcoal-900 font-body text-sm tracking-widest uppercase transition-all duration-400 ease-luxury backdrop-blur-sm">
            Join The Academy
          </Link>

        </div>
      </div>
    </section>
  );
}