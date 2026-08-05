"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Residential", "Commercial", "Hospitality"];

const projects = [
  { id: 1, title: "Modern Minimalist Villa", category: "Residential", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", size: "large" },
  { id: 2, title: "Executive Tech Office", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", size: "small" },
  { id: 3, title: "Artisan Coffee House", category: "Hospitality", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop", size: "small" },
  { id: 4, title: "Luxury Penthouse", category: "Residential", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop", size: "medium" },
  { id: 5, title: "Boutique Hotel Lobby", category: "Hospitality", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop", size: "large" },
  { id: 6, title: "Creative Studio Workspace", category: "Commercial", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop", size: "medium" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    project => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-12 md:py-16 bg-white dark:bg-slate-900 border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron"></span>
              <span className="text-sm font-semibold text-navy/80 dark:text-slate-300 tracking-wide">PORTFOLIO</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy dark:text-white tracking-tight leading-[1.1]"
            >
              A Curated Selection of our <span className="italic font-light text-saffron">Finest Projects</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-navy text-white border-navy dark:bg-white dark:text-navy dark:border-white"
                    : "bg-transparent text-navy/70 dark:text-slate-400 border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const rowSpan = project.size === "large" ? "md:row-span-2" : project.size === "medium" ? "row-span-1" : "row-span-1";
              
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800 ${rowSpan} shadow-sm hover:shadow-xl transition-all duration-500`}
                >
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                    <span className="text-saffron text-xs font-bold tracking-widest uppercase mb-2 block opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
                      {project.title}
                      <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                        <ArrowUpRight size={20} className="text-white" />
                      </span>
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
