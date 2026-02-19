"use client";

import { useState } from "react";
import { CheckCircle2, BookOpen, Users, Award, ArrowRight } from "lucide-react";

// --- DATA: The Courses ---
const courses = [
  {
    title: "Diploma in Hair Designing",
    duration: "6 Months",
    level: "Beginner to Pro",
    description: "The complete foundation. Learn cuts, color science, chemical treatments, and salon management. Perfect for starting your own salon.",
    modules: ["Scissor Techniques", "Color Theory (L'Oreal)", "Client Consultation", "Salon Hygiene"],
  },
  {
    title: "Advanced Creative Cuts",
    duration: "2 Months",
    level: "Experienced Stylists",
    description: "Master the art of texture and geometric cuts. Designed for stylists who want to upgrade their skills and charge premium rates.",
    modules: ["Texturizing", "Bob Variations", "Pixie Cuts", "Men's Fades"],
  },
  {
    title: "Pro Bridal Makeup Artistry",
    duration: "3 Months",
    level: "All Levels",
    description: "Specialize in the booming wedding market of Maharashtra. Learn HD Makeup, Airbrush, and traditional Saree Draping.",
    modules: ["Skin Prep", "Contouring", "Eye Makeup", "Saree Draping (Nauvari & Paithani)"],
  },
];

export default function AcademyPage() {
  const [activeCourse, setActiveCourse] = useState(0);

  return (
    <main className="min-h-screen bg-sage-50 pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="bg-sage-900 text-cream-50 py-24 px-6 relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs uppercase tracking-widest mb-6">
            Admissions Open for 2024 Batch
          </span>
          <h1 className="text-5xl md:text-7xl font-heading mb-8">
            Turn Your Passion <br />
            <span className="text-bronze-400 italic">Into a Career.</span>
          </h1>
          <p className="max-w-xl text-lg text-white/70 font-body mb-10">
            Join Aurangabad's premier beauty academy. 100% hands-on training, government certification assistance, and placement support in top salons.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-3xl font-heading text-bronze-400">500+</h3>
              <p className="text-xs uppercase opacity-60">Students Graduated</p>
            </div>
            <div>
              <h3 className="text-3xl font-heading text-bronze-400">100%</h3>
              <p className="text-xs uppercase opacity-60">Placement Support</p>
            </div>
            <div>
              <h3 className="text-3xl font-heading text-bronze-400">15+</h3>
              <p className="text-xs uppercase opacity-60">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT (Split Layout) */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT: Course Details */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-heading text-charcoal-900 mb-10">Our Curriculum</h2>
          
          <div className="space-y-12">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-none border border-charcoal-900/5 hover:border-bronze-500/30 transition-all shadow-sm group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <h3 className="text-2xl font-heading text-charcoal-900 group-hover:text-bronze-600 transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex gap-3">
                    <span className="bg-sage-100 text-sage-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {course.duration}
                    </span>
                    <span className="border border-charcoal-900/20 text-charcoal-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {course.level}
                    </span>
                  </div>
                </div>

                <p className="text-charcoal-800/70 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {course.modules.map((mod, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-charcoal-900/80">
                      <CheckCircle2 size={16} className="text-bronze-500" />
                      {mod}
                    </div>
                  ))}
                </div>

                <button className="text-sm font-bold uppercase tracking-widest text-charcoal-900 border-b border-charcoal-900 pb-1 hover:text-bronze-500 hover:border-bronze-500 transition-all">
                  Download Syllabus PDF
                </button>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-charcoal-900 text-cream-50 p-6">
              <BookOpen className="text-bronze-500 mb-4" size={32} />
              <h4 className="font-heading text-xl mb-2">Live Models</h4>
              <p className="text-sm opacity-70">Practice on real clients, not just dummy heads.</p>
            </div>
            <div className="bg-charcoal-900 text-cream-50 p-6">
              <Users className="text-bronze-500 mb-4" size={32} />
              <h4 className="font-heading text-xl mb-2">Small Batches</h4>
              <p className="text-sm opacity-70">Only 10 students per batch for personal attention.</p>
            </div>
            <div className="bg-charcoal-900 text-cream-50 p-6">
              <Award className="text-bronze-500 mb-4" size={32} />
              <h4 className="font-heading text-xl mb-2">Certification</h4>
              <p className="text-sm opacity-70">Government recognized certificate valid across India.</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Sticky Enquiry Form */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32 bg-white p-8 border border-charcoal-900/5 shadow-xl">
            <h3 className="text-2xl font-heading text-charcoal-900 mb-2">Apply Now</h3>
            <p className="text-sm text-charcoal-900/60 mb-6">Fill the form to get a callback from our counselor.</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal-900 mb-2">Full Name</label>
                <input type="text" className="w-full bg-sage-50 border-none p-3 text-charcoal-900 focus:ring-1 focus:ring-bronze-500 outline-none" placeholder="Enter your name" />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal-900 mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-sage-50 border-none p-3 text-charcoal-900 focus:ring-1 focus:ring-bronze-500 outline-none" placeholder="+91 99999 99999" />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal-900 mb-2">Interested Course</label>
                <select className="w-full bg-sage-50 border-none p-3 text-charcoal-900 focus:ring-1 focus:ring-bronze-500 outline-none">
                  <option>Diploma in Hair Designing</option>
                  <option>Advanced Creative Cuts</option>
                  <option>Pro Bridal Makeup</option>
                </select>
              </div>

              <button className="w-full bg-charcoal-900 text-white py-4 text-xs uppercase tracking-widest hover:bg-bronze-500 transition-colors flex items-center justify-center gap-2">
                Request Callback <ArrowRight size={16} />
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-charcoal-900/50">Prefer to chat?</p>
              <a href="https://wa.me/911234567890" className="text-sm font-bold text-green-600 hover:underline">Chat on WhatsApp</a>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}