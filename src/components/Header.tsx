"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Bible Camp 2026", href: "/camp/2026" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent-gold/15 bg-primary/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo with sleek glow */}
        <Link href="/" className="flex flex-col group">
          <div className="flex items-center space-x-2">
            <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-accent-gold transition-colors duration-300">
              TLCCRM <span className="gold-gradient-text">Children</span>
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-accent-gold/15 text-accent-gold border border-accent-gold/30 shadow-[0_0_10px_rgba(242,183,5,0.2)]">
              <Sparkles size={10} className="mr-1 animate-pulse" />
              DELTA HQ
            </span>
          </div>
          <span className="text-[10px] tracking-widest uppercase text-white/50 font-bold mt-0.5">
            Warri, Delta State Headquarters
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-neutral-dark/50 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-full font-body text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-accent-gold text-primary font-black shadow-[0_0_15px_rgba(242,183,5,0.4)]"
                    : "text-white/80 hover:text-accent-gold hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/register">
            <MagneticButton className="rounded-full bg-gradient-to-r from-accent-gold via-amber-400 to-accent-gold px-6 py-2.5 text-xs font-black tracking-wider uppercase text-primary transition-all duration-300 hover:shadow-[0_0_25px_rgba(242,183,5,0.6)] hover:scale-105">
              Register Now
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-accent-gold p-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-primary/95 backdrop-blur-2xl px-6 py-6 space-y-3 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-xl font-body text-sm font-bold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-accent-gold text-primary font-black shadow-[0_0_15px_rgba(242,183,5,0.4)]"
                    : "text-white/80 hover:bg-white/5 hover:text-accent-gold border border-white/5"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link href="/register" onClick={() => setIsOpen(false)} className="block pt-2">
            <button className="w-full rounded-full bg-gradient-to-r from-accent-gold to-amber-500 py-3.5 text-center text-sm font-black uppercase tracking-wider text-primary shadow-[0_0_20px_rgba(242,183,5,0.4)]">
              Register Now
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
