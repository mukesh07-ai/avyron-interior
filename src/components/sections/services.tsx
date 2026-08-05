"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Residential Spaces",
    desc: "Bespoke home interiors that reflect your personal style and elevate everyday living.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    tags: ["Luxury", "Bespoke"],
    href: "/services/residential"
  },
  {
    title: "Commercial Offices",
    desc: "Inspiring workspaces designed for productivity, collaboration, and brand identity.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    tags: ["Corporate", "Modern"],
    href: "/services/commercial"
  },
  {
    title: "Hospitality & Hotels",
    desc: "Unforgettable atmospheres for restaurants, cafes, and hotels that keep guests coming back.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Experiential", "Elegant"],
    href: "/services/hospitality"
  },
  {
    title: "Retail Boutiques",
    desc: "Strategic design that enhances customer experience and drives brand engagement.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    tags: ["Commercial", "Strategic"],
    href: "/services/retail"
  }
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-offwhite dark:bg-slate-900/50 relative overflow-hidden border-t border-black/5 dark:border-white/5">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,153,51,0.03)_0%,transparent_70%)] pointer-events-none blur-3xl"></div>
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron"></span>
              <span className="text-sm font-semibold text-navy/80 dark:text-slate-300 tracking-wide">EXPERTISE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-navy dark:text-white tracking-tight leading-[1.1]">
              Our <span className="italic font-light">Services</span>
            </h2>
          </div>
          
          <Link href="/services">
            <button className="hidden md:inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 rounded-full border border-black/10 dark:border-white/10 bg-transparent text-navy dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 h-10 px-6 sm:h-12 sm:px-8">
              View All Services
            </button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12 md:mt-20">
          {services.map((service, idx) => (
            <Link key={idx} href={service.href} className="group relative rounded-[2rem] overflow-hidden bg-white dark:bg-slate-800 border border-black/5 dark:border-white/5 aspect-[4/3] md:aspect-[21/9] lg:aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-500">
              
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex justify-between items-end gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-white/80 line-clamp-2 text-sm md:text-base max-w-sm">
                        {service.desc}
                      </p>
                    </div>
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white text-navy flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <Link href="/services" className="md:hidden mt-8 block w-full">
          <button className="w-full inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 rounded-full border border-black/10 dark:border-white/10 bg-transparent text-navy dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 h-12 px-8">
            View All Services
          </button>
        </Link>

      </div>
    </section>
  );
}
