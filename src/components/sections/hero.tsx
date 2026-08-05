"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Trophy, Users } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner Area */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40 dark:from-slate-900/80 dark:to-slate-900/50 z-0"></div>
        
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-saffron animate-pulse"></span>
              Award Winning Interior Studio
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Designing Spaces That <span className="text-saffron italic">Inspire.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl pt-4">
              Luxury interiors crafted for modern living. We transform environments into timeless, breathtaking experiences tailored to your lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <Link href="/projects" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-saffron hover:bg-saffron/90 text-white font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-saffron/20 flex items-center justify-center gap-2">
                  Explore Portfolio <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold transition-all hover:scale-105 active:scale-95 text-center">
                  Consult With Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overlapping Stats Section */}
      <section className="relative z-30 -mt-10 md:-mt-16 pb-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-xl flex items-center"
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
              
              <div className="flex flex-col items-center justify-center space-y-2 text-center group">
                <div className="p-3 bg-saffron/10 rounded-2xl group-hover:bg-saffron/20 transition-colors mb-2">
                  <Star className="w-6 h-6 text-saffron" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-navy dark:text-white">15+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">Years Experience</p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2 text-center group">
                <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors mb-2">
                  <Trophy className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-navy dark:text-white">50+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">Awards Won</p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2 text-center group">
                <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500/20 transition-colors mb-2">
                  <Shield className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-navy dark:text-white">500+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">Projects Done</p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2 text-center group">
                <div className="p-3 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-colors mb-2">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-navy dark:text-white">100%</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">Client Satisfaction</p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
