"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Users, Calendar, MapPin, Award, Sparkles, ShieldCheck } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden text-white">
      
      {/* 1. Hero Section with Glow Orbs */}
      <section className="relative flex min-h-[90vh] flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        
        {/* Glow ambient background lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl w-full relative z-10">
          <div className="max-w-3xl space-y-8">
            
            {/* Live Pulsing Badge & Motto */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center space-x-2 rounded-full border border-accent-gold/30 bg-primary-light/80 backdrop-blur-md px-4 py-2 text-xs font-mono font-bold tracking-wider text-accent-gold shadow-[0_0_20px_rgba(242,183,5,0.25)]">
                <span className="h-2 w-2 rounded-full bg-accent-gold animate-ping" />
                <span>OFFICIAL CHILDREN MINISTRY PORTAL</span>
              </div>
              <div className="inline-flex items-center space-x-2 rounded-full border border-accent-green/40 bg-accent-green/15 backdrop-blur-md px-4 py-2 text-xs font-mono font-bold tracking-wider text-accent-green">
                <Sparkles size={14} className="animate-pulse" />
                <span>MOTTO: CATCH THEM YOUNG FOR CHRIST</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
              Raising <span className="gold-gradient-text text-glow-gold">Godly Children</span> <br className="hidden sm:inline" />
              in a <span className="green-gradient-text text-glow-green">Decaying World</span>
            </h1>

            {/* Subtext */}
            <p className="font-body text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Welcome to the digital home of The Lord&apos;s Chosen Charismatic Revival Ministries (TLCCRM), Children&apos;s Department, Delta State Headquarters. We nurture children and students through faith, fellowship, and scripture.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4">
              <Link href="/camp/2026">
                <MagneticButton className="w-full sm:w-auto rounded-full bg-gradient-to-r from-accent-gold via-amber-400 to-accent-gold px-8 py-4 text-base font-black uppercase tracking-wider text-primary shadow-[0_0_25px_rgba(242,183,5,0.4)] hover:shadow-[0_0_40px_rgba(242,183,5,0.7)] hover:scale-105 transition-all">
                  Explore 2026 Bible Camp
                  <ArrowRight size={18} className="ml-2 inline" />
                </MagneticButton>
              </Link>
              
              <Link href="/gallery" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3.5 text-base font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-accent-gold hover:text-accent-gold">
                  View Past Camps
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Mission / What We Do */}
      <section className="relative z-10 border-t border-white/10 bg-primary-light/40 backdrop-blur-xl py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-green">
              OUR SPIRITUAL FOUNDATION
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
              What We Build In Our Children
            </h2>
            <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full shadow-[0_0_10px_#F2B705]" />
            <p className="font-body text-base text-white/70 leading-relaxed">
              We believe in laying a strong Christian foundation early. Through structured teachings, camp activities, and interactive fellowships, we guide kids to walk in truth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl space-y-4">
              <div className="h-14 w-14 rounded-2xl bg-accent-gold/15 border border-accent-gold/30 flex items-center justify-center text-accent-gold mb-6 shadow-[0_0_20px_rgba(242,183,5,0.2)]">
                <BookOpen size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Scriptural Foundation</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                Nurturing a deep love for God&apos;s Word, equipping children with strong biblical values to navigate challenges in today&apos;s world.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl space-y-4">
              <div className="h-14 w-14 rounded-2xl bg-accent-green/15 border border-accent-green/30 flex items-center justify-center text-accent-green mb-6 shadow-[0_0_20px_rgba(46,139,87,0.2)]">
                <Users size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Faith & Fellowship</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                Building a joyful community of young believers where they form meaningful friendships, pray together, and grow in faith.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl space-y-4">
              <div className="h-14 w-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-accent-gold mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <Heart size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Character & Service</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                Teaching accountability, respect, and helping students transition to sound leaders and volunteers ready to serve God and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Current Event Teaser */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl glass-card border-accent-gold/30 p-8 sm:p-12 md:p-16 shadow-2xl">
            
            {/* Shimmer line effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-75" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>FEATURED CURRENT EVENT</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  2026 Children Holiday <br />
                  <span className="gold-gradient-text">Bible Camp</span>
                </h2>
                <p className="font-body text-sm sm:text-base text-white/75 leading-relaxed max-w-xl">
                  Join hundreds of children and students for four days of spiritual refreshing, lessons, interactive activities, and character development under God&apos;s guidance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-body text-xs sm:text-sm text-white/80">
                  <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
                    <Calendar size={20} className="text-accent-gold shrink-0" />
                    <span>August 19 – 22, 2026</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
                    <MapPin size={20} className="text-accent-green shrink-0" />
                    <span>TLCCRM Delta HQ, Warri</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 flex justify-start lg:justify-end">
                <div className="w-full max-w-sm rounded-2xl bg-neutral-dark/80 border border-accent-gold/30 p-6 space-y-6 shadow-2xl backdrop-blur-xl">
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-green">THEME</div>
                    <div className="font-display text-xl sm:text-2xl font-black gold-gradient-text uppercase tracking-wide">
                      &quot;GODLY CHILDREN IN A DECAYING WORLD&quot;
                    </div>
                    <div className="text-xs italic text-white/60">— Romans 12:2</div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <Link href="/camp/2026" className="block">
                    <button className="w-full rounded-full bg-gradient-to-r from-accent-gold to-amber-500 py-3.5 text-center text-xs font-black uppercase tracking-wider text-primary shadow-[0_0_20px_rgba(242,183,5,0.4)] hover:shadow-[0_0_30px_rgba(242,183,5,0.7)] transition-all duration-300">
                      View Event & Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust Strip / Credibility Block */}
      <section className="relative z-10 py-12 bg-primary-light/50 border-y border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-display text-xl font-bold gold-gradient-text">
              Rooted in Leadership & Faith
            </h4>
            <p className="font-body text-xs sm:text-sm text-white/60">
              Guided by Pastor Lazarus Muoka (G.O.) and Pastor Nnamdi Ikechukwu (State Pastor)
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono font-bold text-accent-gold tracking-wider uppercase">
            <span className="flex items-center"><ShieldCheck size={14} className="mr-1 text-accent-green" /> Safe Environment</span>
            <span className="flex items-center"><Award size={14} className="mr-1 text-accent-gold" /> Sound Biblical Teachings</span>
            <span className="flex items-center"><Sparkles size={14} className="mr-1 text-accent-green" /> Joyful Fellowship</span>
          </div>
        </div>
      </section>

      {/* 5. Gallery Preview Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-gold">PHOTO HIGHLIGHTS</span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                Moments From Past Camps
              </h2>
            </div>
            <Link href="/gallery" className="font-body text-sm font-bold text-accent-gold hover:text-white transition-colors flex items-center space-x-1 shrink-0">
              <span>View Full Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card glass-card-hover group relative h-72 overflow-hidden rounded-3xl p-6 flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-transparent to-transparent opacity-80" />
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-accent-gold">Assembly Worship</span>
                <h4 className="font-display text-lg font-bold text-white">Glorious Praise</h4>
              </div>
            </div>

            <div className="glass-card glass-card-hover group relative h-72 overflow-hidden rounded-3xl p-6 flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-transparent to-transparent opacity-80" />
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-accent-green">Scripture Study</span>
                <h4 className="font-display text-lg font-bold text-white">Learning God&apos;s Word</h4>
              </div>
            </div>

            <div className="glass-card glass-card-hover group relative h-72 overflow-hidden rounded-3xl p-6 flex flex-col justify-end sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-transparent to-transparent opacity-80" />
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-accent-gold">Recreation</span>
                <h4 className="font-display text-lg font-bold text-white">Team Games & Fellowship</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
