"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-slate-50 dark:bg-[#050B14] text-navy dark:text-white pt-12 pb-4 overflow-hidden border-t border-black/10 dark:border-white/10 mt-auto">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-saffron/20 dark:bg-saffron/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/3 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Newsletter Section */}
        <div className="mb-12 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 via-blue-500/10 to-saffron/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
          <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl rounded-2xl px-6 py-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-saffron to-transparent opacity-50"></div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-navy to-navy/70 dark:from-white dark:to-white/70">
                Interior Design Insights
              </h3>
              <p className="text-slate-600 dark:text-white/60 mt-1 text-sm md:text-base">
                Join our newsletter for the latest in luxury interior trends, design tips, and bespoke residential projects.
              </p>
            </div>
            <form className="flex w-full md:w-auto relative" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full md:w-[320px] bg-white dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 text-slate-800 dark:text-white pl-5 pr-[110px] py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron/50 transition placeholder:text-slate-400 dark:placeholder:text-white/40 shadow-inner text-sm"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-saffron hover:bg-saffron/90 text-white px-4 rounded-full font-semibold transition hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md shadow-saffron/20 text-sm"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20">
          <div className="w-full lg:w-[75%] grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-navy dark:text-white tracking-wider flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-saffron shadow-[0_0_10px_rgba(255,153,51,0.8)]"></span>
                STUDIO
              </h4>
              <ul className="space-y-4">
                {["Our Story", "Philosophy", "Design Team", "Careers", "Contact Us"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="group flex items-center gap-2 text-slate-600 dark:text-white/70 hover:text-navy dark:hover:text-white transition-colors duration-300 w-fit">
                      <span className="h-px w-0 bg-saffron transition-[width] duration-300 group-hover:w-4"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-navy dark:text-white tracking-wider flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                SERVICES
              </h4>
              <ul className="space-y-4">
                {["Residential Design", "Commercial Spaces", "Bespoke Furniture", "Lighting Design", "Consultation", "Styling"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="group flex items-center gap-2 text-slate-600 dark:text-white/70 hover:text-navy dark:hover:text-white transition-colors duration-300 w-fit">
                      <span className="h-px w-0 bg-saffron transition-[width] duration-300 group-hover:w-4"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-navy dark:text-white tracking-wider flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                PORTFOLIO
              </h4>
              <ul className="space-y-4">
                {["Luxury Villas", "Penthouses", "Corporate Offices", "Hospitality", "Retail Boutiques"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="group flex items-center gap-2 text-slate-600 dark:text-white/70 hover:text-navy dark:hover:text-white transition-colors duration-300 w-fit">
                      <span className="h-px w-0 bg-saffron transition-[width] duration-300 group-hover:w-4"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="#" className="group flex items-center gap-2 text-saffron hover:text-saffron/80 font-medium transition-colors mt-2">
                    View All Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-navy dark:text-white tracking-wider flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                VISIT US
              </h4>
              <address className="not-italic text-slate-600 dark:text-white/70 space-y-6">
                <div className="group">
                  <div className="flex items-center gap-2 font-semibold text-navy dark:text-white mb-2">
                    <MapPin className="w-4 h-4 text-saffron group-hover:animate-bounce transition-transform" /> 
                    Global HQ
                  </div>
                  <p className="pl-6 text-sm leading-relaxed">
                    124 Luxury Avenue,<br />
                    Design District, NY 10012
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-2 font-semibold text-navy dark:text-white mb-2">
                    <MapPin className="w-4 h-4 text-saffron group-hover:animate-bounce transition-transform" /> 
                    London Studio
                  </div>
                  <p className="pl-6 text-sm leading-relaxed">
                    45 Mayfair Square,<br />
                    London W1J 5QE
                  </p>
                </div>
              </address>
            </div>
            
          </div>
          
          {/* Right side graphic or summary (Replacing the India Map) */}
          <div className="w-full lg:w-[25%] flex flex-col items-start lg:items-center xl:items-end">
            <div className="w-full max-w-[220px]">
               <h4 className="font-bold text-lg mb-6 text-navy dark:text-white tracking-wider flex items-center gap-3 w-full text-left">
                <span className="w-2 h-2 rounded-full bg-saffron shadow-[0_0_10px_rgba(255,153,51,0.8)]"></span>
                OUR PRESENCE
              </h4>
              <div className="w-full transition-transform duration-500 p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center aspect-square shadow-inner relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-saffron/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <Globe className="w-24 h-24 text-saffron/40 group-hover:text-saffron/70 transition-colors duration-500" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
