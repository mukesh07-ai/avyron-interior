"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, ChevronDown, Globe, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`pointer-events-auto w-full max-w-[1400px] flex items-center justify-between gap-4 rounded-full transition duration-500 whitespace-nowrap bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shadow-lg border border-white/40 dark:border-white/10 h-16 px-6 md:px-8`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 lg:gap-4 group shrink-0">
          <div className="relative rounded-full overflow-hidden bg-white dark:bg-slate-800 shadow-md flex items-center justify-center group-hover:shadow-lg transition duration-300 group-hover:scale-105 border border-black/5 dark:border-white/5 z-10 w-12 h-12 font-heading font-bold text-xl md:text-2xl text-navy dark:text-slate-100">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl text-navy dark:text-slate-100 tracking-tight group-hover:text-saffron transition-colors leading-none">
              AVYRON<span className="text-saffron">.</span>
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-navy/60 dark:text-slate-400 tracking-wider uppercase mt-0.5 md:mt-1 group-hover:text-saffron/80 transition-colors">
              Luxury Interiors
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {[
            { name: "Studio", href: "/about-us" },
            { name: "Residential Design", href: "/services/residential" },
            { name: "Commercial Interiors", href: "/services/commercial" },
            { name: "Portfolio", href: "/projects" },
            { name: "Design Journal", href: "/blog" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <div key={item.name} className="relative px-2 xl:px-3 py-2 group whitespace-nowrap">
              <Link href={item.href} className="relative z-10 flex items-center gap-1 group outline-none">
                <span className="text-sm font-semibold transition-colors duration-300 text-navy/70 dark:text-slate-400 group-hover:text-navy dark:group-hover:text-slate-200">
                  {item.name}
                </span>
              </Link>
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 pointer-events-none"></div>
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground text-navy dark:text-slate-300 rounded-full relative w-10 h-10 hidden sm:inline-flex"
              type="button"
              aria-label="Toggle theme"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 opacity-100 transition dark:-rotate-90 dark:scale-95 dark:opacity-0 text-navy" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-95 opacity-0 transition dark:rotate-0 dark:scale-100 dark:opacity-100 text-slate-100" />
            </button>
          )}

          {/* Language Selector */}
          <div className="relative hidden sm:block">
            <button type="button" className="flex items-center gap-2 px-3 py-2 rounded-full transition duration-300 outline-none group border bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border-transparent hover:border-black/10 dark:hover:border-white/10" aria-label="Select Language">
              <Globe className="w-4 h-4 text-navy/70 dark:text-slate-400 group-hover:text-navy dark:group-hover:text-slate-200 transition-colors" />
              <span className="text-sm font-semibold text-navy/80 dark:text-slate-300 group-hover:text-navy dark:group-hover:text-slate-100 hidden sm:inline-block">EN</span>
              <ChevronDown className="w-3 h-3 text-navy/50 dark:text-slate-500 transition-transform duration-300" />
            </button>
          </div>

          {/* CTA Button */}
          <Link href="/contact" className="hidden sm:block">
            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 rounded-full bg-navy text-white hover:bg-saffron hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg shadow-navy/20 hover:shadow-saffron/20 px-4 h-9 text-xs sm:px-5 sm:h-10 sm:text-sm">
              Consultation
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button type="button" className="lg:hidden p-2 rounded-full bg-navy/5 dark:bg-white/5 text-navy dark:text-slate-300 hover:bg-navy/10 dark:hover:bg-white/10 transition-colors" aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>
    </div>
  );
}
