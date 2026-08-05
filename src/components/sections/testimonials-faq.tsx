"use client";

import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner, Modern Villa",
    content: "AVYRON transformed our vision into reality. The attention to detail and the sheer luxury of the materials they curated exceeded all our expectations. It truly feels like a 5-star hotel.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "CEO, TechFlow",
    content: "The office redesign they executed for our headquarters was spectacular. Not only does it reflect our brand perfectly, but employee productivity and morale have noticeably improved.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "Emma Thompson",
    role: "Restaurant Owner",
    content: "Our new restaurant design is a masterpiece. The ambiance AVYRON created has become the talk of the town and our bookings have doubled since the reopening.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: "David & Laura Smith",
    role: "Homeowners, Penthouse",
    content: "Working with AVYRON was an absolute pleasure. Their team understood our lifestyle and designed a space that is both breathtakingly beautiful and incredibly functional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop"
  }
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on the scope of the project. A full residential turnkey project usually takes 4-6 months from initial concept to final execution, while commercial spaces might take 2-4 months. We provide a detailed schedule during the planning phase."
  },
  {
    question: "Do you offer virtual design consultations?",
    answer: "Yes, we offer comprehensive virtual design services for international clients, providing 3D renderings, material samples shipped directly to you, and remote project management."
  },
  {
    question: "How does the billing structure work?",
    answer: "We typically work with a phased payment structure: 30% upon signing the design agreement, 40% before material procurement and execution begins, and the final 30% upon project completion and handover."
  },
  {
    question: "Can you incorporate our existing furniture?",
    answer: "Absolutely. Our designers excel at blending your cherished existing pieces with new, bespoke elements to create a cohesive and personalized space."
  }
];

export function TestimonialsFAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900 border-t border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy dark:text-white">
              Client Experiences
            </h2>
          </div>
          
          <div className="relative flex overflow-hidden group w-full">
            {/* Gradient Mask for fading edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              className="flex gap-6 md:gap-8 px-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-[320px] md:w-[450px] shrink-0 bg-slate-50 dark:bg-slate-800 p-8 md:p-10 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-1 mb-6 text-saffron">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-navy/90 dark:text-white/90 text-lg font-light italic mb-8 leading-relaxed line-clamp-4">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image src={testimonial.image} alt={testimonial.name} fill sizes="48px" className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 md:py-16 bg-offwhite dark:bg-[#050B14] border-t border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
            <div className="md:w-1/3">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-saffron text-sm font-semibold tracking-widest uppercase mb-4 block"
              >
                Information
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-heading text-4xl font-bold text-navy dark:text-white mb-6"
              >
                Frequently Asked Questions
              </motion.h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Find answers to common questions about our design process, timelines, and services. If you need more specific information, feel free to contact us.
              </p>
            </div>
            
            <div className="md:w-2/3 space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  className="border border-black/10 dark:border-white/10 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-semibold text-lg text-navy dark:text-white pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`text-slate-500 shrink-0 transition-transform duration-300 ${openFaqIndex === idx ? "rotate-180 text-saffron" : ""}`} 
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaqIndex === idx ? "auto" : 0, opacity: openFaqIndex === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-black/5 dark:border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
