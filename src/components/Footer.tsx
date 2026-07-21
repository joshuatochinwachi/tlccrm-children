import Link from "next/link";
import { Phone, Mail, MapPin, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-neutral-dark text-white border-t border-accent-gold/20 overflow-hidden">
      
      {/* Glow highlight background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-gold/10 blur-[120px] pointer-events-none" />

      {/* Top Banner CTA */}
      <div className="relative border-b border-white/10 bg-primary/40 backdrop-blur-xl py-14 px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
            <Sparkles size={12} className="animate-pulse" />
            <span>JOIN US THIS HOLIDAY</span>
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ready for the <span className="gold-gradient-text">2026 Holiday Bible Camp?</span>
          </h3>
          <p className="font-body text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Register your child, student, or apply as a camp officer today and experience a glorious time in God&apos;s presence.
          </p>
          <div className="pt-2">
            <Link href="/register" className="inline-flex">
              <button className="rounded-full bg-gradient-to-r from-accent-gold via-amber-400 to-accent-gold px-8 py-4 text-sm font-black uppercase tracking-wider text-primary shadow-[0_0_25px_rgba(242,183,5,0.4)] hover:shadow-[0_0_40px_rgba(242,183,5,0.7)] hover:scale-105 transition-all duration-300">
                Start Registration Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Col 1: About Organization */}
          <div className="space-y-4">
            <h4 className="font-display text-xl font-bold gold-gradient-text">
              TLCCRM Children Dept
            </h4>
            <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed max-w-xs">
              Committed to raising godly children in a decaying world, nurturing faith, character, and spiritual growth in Jesus Christ.
            </p>
            <div className="pt-2 text-[10px] font-mono tracking-widest uppercase text-accent-green font-bold flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green mr-2 animate-ping" />
              Official Ministry of TLCCRM Delta State HQ
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-accent-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 font-body text-xs sm:text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-accent-gold transition-colors duration-200">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/camp/2026" className="hover:text-accent-gold transition-colors duration-200">
                  2026 Holiday Bible Camp
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent-gold transition-colors duration-200">
                  Past Camp Photo Memories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-gold transition-colors duration-200">
                  Our Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent-gold transition-colors duration-200">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-accent-gold">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 font-body text-xs sm:text-sm text-white/70">
              <li className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-accent-gold/15 border border-accent-gold/30 flex items-center justify-center text-accent-gold shrink-0">
                  <Phone size={16} />
                </div>
                <a href="tel:07031563837" className="hover:text-accent-gold transition-colors font-bold">
                  0703 156 3837 (Harrison)
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-lg bg-accent-green/15 border border-accent-green/30 flex items-center justify-center text-accent-green shrink-0">
                  <Mail size={16} />
                </div>
                <a href="mailto:hello@tlccrmdeltachildrencamp.com" className="hover:text-accent-gold transition-colors break-all">
                  hello@tlccrmdeltachildrencamp.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent-gold shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed">
                  The Lord&apos;s Chosen CRM, Delta State HQ, Warri, Delta State, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-body text-white/40">
          <p>© {new Date().getFullYear()} TLCCRM Delta State Children Department. All rights reserved.</p>
          <div className="flex items-center space-x-2 font-display text-sm font-black text-accent-gold tracking-wider uppercase">
            <span>Jesus is Lord!!!</span>
            <Heart size={14} className="text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
