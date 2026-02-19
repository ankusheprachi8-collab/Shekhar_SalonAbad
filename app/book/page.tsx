"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Check, ChevronRight, ChevronLeft, Scissors } from "lucide-react";

// --- MOCK DATA: SERVICES ---
const SERVICES = [
  { id: 1, name: "Signature Haircut", price: "₹800", duration: "45 min" },
  { id: 2, name: "Beard Sculpting", price: "₹400", duration: "30 min" },
  { id: 3, name: "Royal Shave", price: "₹600", duration: "45 min" },
  { id: 4, name: "Hair Color & Style", price: "₹2500+", duration: "120 min" },
  { id: 5, name: "Facial Treatment", price: "₹1500", duration: "60 min" },
  { id: 6, name: "Full Grooming Package", price: "₹4000", duration: "180 min" },
];

// --- MOCK DATA: TIME SLOTS ---
const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:30 PM", "02:00 PM", "03:30 PM", "05:00 PM", "06:30 PM", "08:00 PM"
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: null as any,
    date: "",
    time: "",
    name: "",
    phone: "",
  });

  // Handle Selection
  const updateForm = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Next Step Logic
  const handleNext = () => {
    if (step === 1 && !formData.service) return alert("Please select a service.");
    if (step === 2 && (!formData.date || !formData.time)) return alert("Please select date and time.");
    if (step === 3 && (!formData.name || !formData.phone)) return alert("Please fill in your details.");
    
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <main className="min-h-screen bg-cream-50 pt-28 pb-12 px-4 flex items-center justify-center">
      
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-sm overflow-hidden border border-bronze-100">
        
        {/* PROGRESS HEADER */}
        <div className="bg-charcoal-900 p-6 flex items-center justify-between text-cream-50">
          <div>
            <h1 className="font-heading text-2xl">Book Appointment</h1>
            <p className="text-xs text-bronze-400 uppercase tracking-widest mt-1">
              Step {step} of 4
            </p>
          </div>
          <Scissors className="text-bronze-500" />
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 h-1">
          <motion.div 
            className="h-full bg-bronze-500"
            initial={{ width: "25%" }}
            animate={{ width: `${step * 25}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* DYNAMIC FORM AREA */}
        <div className="p-8 min-h-[400px] relative">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: SELECT SERVICE */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-heading text-charcoal-900 mb-6">Select Treatment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => updateForm("service", service)}
                      className={`p-4 border text-left transition-all duration-300 group
                        ${formData.service?.id === service.id 
                          ? "border-bronze-500 bg-bronze-50" 
                          : "border-gray-200 hover:border-bronze-300"
                        }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-charcoal-900 group-hover:text-bronze-600 transition-colors">
                          {service.name}
                        </span>
                        {formData.service?.id === service.id && <Check size={16} className="text-bronze-500" />}
                      </div>
                      <div className="text-sm text-gray-500 flex justify-between">
                        <span>{service.duration}</span>
                        <span>{service.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-heading text-charcoal-900 mb-6">Choose Date & Time</h2>
                
                {/* Date Input */}
                <div className="mb-8">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Select Date</label>
                  <div className="relative">
                    <Calendar className="absolute top-3 left-3 text-bronze-500" size={20} />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-bronze-500 font-body"
                      onChange={(e) => updateForm("date", e.target.value)}
                      value={formData.date}
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3">Available Slots</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => updateForm("time", slot)}
                        className={`py-2 px-1 text-sm border transition-all duration-200
                          ${formData.time === slot
                            ? "bg-bronze-500 text-white border-bronze-500"
                            : "border-gray-200 text-gray-600 hover:border-bronze-500 hover:text-bronze-500"
                          }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: DETAILS */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-heading text-charcoal-900 mb-6">Your Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute top-3 left-3 text-bronze-500" size={20} />
                      <input 
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-bronze-500 bg-gray-50"
                        value={formData.name}
                        onChange={(e) => updateForm("name", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                    <div className="relative">
                      <span className="absolute top-3 left-3 text-bronze-500 font-bold">+91</span>
                      <input 
                        type="tel"
                        placeholder="98765 43210"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-bronze-500 bg-gray-50"
                        value={formData.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* Summary Box */}
                  <div className="bg-cream-100 p-4 border border-bronze-100 mt-8">
                    <h3 className="font-heading text-lg mb-2 text-bronze-800">Booking Summary</h3>
                    <p className="text-sm text-gray-600 flex justify-between">
                      <span>Service:</span> 
                      <span className="font-bold">{formData.service?.name}</span>
                    </p>
                    <p className="text-sm text-gray-600 flex justify-between mt-1">
                      <span>Time:</span> 
                      <span className="font-bold">{formData.date} at {formData.time}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-heading text-charcoal-900 mb-4">Request Received</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. We have received your request for a <strong>{formData.service?.name}</strong>.
                  <br /><br />
                  Our team will call you at <span className="text-bronze-600 font-bold">{formData.phone}</span> shortly to confirm your appointment.
                </p>
                <a 
                  href="/" 
                  className="inline-block bg-charcoal-900 text-cream-50 px-8 py-3 uppercase tracking-widest text-xs hover:bg-bronze-500 transition-colors"
                >
                  Return Home
                </a>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* FOOTER ACTIONS */}
        {step < 4 && (
          <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-between">
            <button 
              onClick={handleBack}
              disabled={step === 1}
              className={`flex items-center gap-2 text-sm uppercase tracking-widest font-bold transition-colors
                ${step === 1 ? "text-gray-300 cursor-not-allowed" : "text-charcoal-600 hover:text-bronze-600"}`}
            >
              <ChevronLeft size={16} /> Back
            </button>
            
            <button 
              onClick={handleNext}
              className="flex items-center gap-2 bg-charcoal-900 text-cream-50 px-8 py-3 uppercase tracking-widest text-xs hover:bg-bronze-500 transition-colors"
            >
              {step === 3 ? "Confirm Booking" : "Next Step"} <ChevronRight size={16} />
            </button>
          </div>
        )}

      </div>
    </main>
  );
}