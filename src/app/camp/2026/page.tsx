"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Award, ArrowDown, Users, CheckCircle, Sparkles, ChevronDown } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const beats = [
  { id: 1, text: "The Lord's Chosen Charismatic Revival Ministries", size: "sm" },
  { id: 2, text: "Delta State Headquarters — Warri", size: "md" },
  { id: 3, text: "Children's Ministry Presents", size: "sm" },
  { id: 4, text: "2026 Children Holiday Bible Camp", size: "lg" },
  {
    id: 5,
    text: (
      <div className="text-center space-y-4">
        <span className="text-xs font-mono tracking-widest uppercase text-accent-gold block">Theme:</span>
        <h2 className="font-display text-3xl sm:text-6xl md:text-7xl font-black gold-gradient-text uppercase leading-tight text-glow-gold">
          &quot;Godly Children in a Decaying World&quot;
        </h2>
        <span className="text-sm sm:text-base italic text-white/70 block">— Romans 12:2</span>
      </div>
    ),
    size: "custom",
  },
  { id: 6, text: "Wednesday 19th – Saturday 22nd August, 2026", size: "md" },
  { id: 7, text: "Wednesday Arrival: 3PM – 6PM", size: "md" },
  { id: 8, text: "It's going to be a glorious time spending in the presence of God.", size: "md" },
  { id: 9, text: "Come and be blessed.", size: "lg" },
  { id: 10, text: "Jesus is Lord!!!", size: "xl" },
];

export default function Camp2026() {
  const containerRef = useRef<HTMLDivElement>(null);
  const beatsContainerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Detect mobile viewport & motion preference
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const campDate = new Date("2026-08-19T15:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = campDate - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // GSAP desktop animation logic
  useEffect(() => {
    if (isMobile || prefersReducedMotion || !containerRef.current || !beatsContainerRef.current) return;

    const beatsElements = beatsContainerRef.current.children;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    Array.from(beatsElements).forEach((el) => {
      gsap.set(el, { opacity: 0, y: 40, filter: "blur(10px)" });

      tl.to(el, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
      })
      .to(el, {
        opacity: 0,
        y: -40,
        filter: "blur(10px)",
        duration: 1.5,
        delay: 1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile, prefersReducedMotion]);

  const handleSkip = (e: React.MouseEvent) => {
    e.preventDefault();
    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full text-white">
      
      {/* Skip Button */}
      <div className="fixed top-24 left-4 sm:left-6 z-40">
        <button
          onClick={handleSkip}
          className="rounded-full bg-accent-gold/20 border border-accent-gold/40 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-accent-gold backdrop-blur-md shadow-[0_0_15px_rgba(242,183,5,0.3)] hover:bg-accent-gold hover:text-primary transition-all duration-300 flex items-center space-x-1.5"
        >
          <span>Skip to details</span>
          <ArrowDown size={14} />
        </button>
      </div>

      {/* MOBILE / REDUCED MOTION VIEW */}
      {isMobile || prefersReducedMotion ? (
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
          {/* Mobile Announcement Banner */}
          <div className="text-center space-y-4 pt-8">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
              <Sparkles size={14} className="animate-pulse" />
              <span>THE LORD&apos;S CHOSEN CRM DELTA HQ</span>
            </span>
            
            <h1 className="font-display text-3xl sm:text-5xl font-black gold-gradient-text uppercase leading-tight text-glow-gold">
              2026 Children Holiday Bible Camp
            </h1>
            
            <p className="text-sm sm:text-base font-body max-w-xl mx-auto text-white/80 leading-relaxed">
              It&apos;s going to be a glorious time spending in the presence of God. Come and be blessed. Jesus is Lord!!!
            </p>
          </div>
          
          {/* Announcement Card */}
          <div className="glass-card border-accent-gold/30 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-gold">FEATURED ANNOUNCEMENT</span>
              <h3 className="font-display text-2xl font-bold gold-gradient-text">Announcement Details</h3>
            </div>
            
            <div className="space-y-4 font-body text-sm sm:text-base text-white/85 text-center leading-relaxed">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-xs font-mono font-bold text-accent-green uppercase tracking-wider block">THEME</span>
                <p className="font-display font-black text-lg gold-gradient-text uppercase">
                  &quot;GODLY CHILDREN IN A DECAYING WORLD&quot;
                </p>
                <p className="text-xs italic text-white/60">— Romans 12:2</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <span className="text-white/50 text-[10px] font-mono uppercase block">DATES</span>
                  <strong>Wednesday, Aug 19 – Saturday, Aug 22, 2026</strong>
                </div>
                <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <span className="text-white/50 text-[10px] font-mono uppercase block">ARRIVAL TIME</span>
                  <strong>Wednesday 3:00 PM – 6:00 PM</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* DESKTOP PINNED CINEMATIC SCROLL REVEAL */
        <div ref={containerRef} className="relative h-[800vh] w-full">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            
            <div ref={beatsContainerRef} className="relative z-10 w-full max-w-5xl px-6 text-center">
              {beats.map((beat) => (
                <div
                  key={beat.id}
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center pointer-events-none"
                  style={{ opacity: 0 }}
                >
                  {beat.size === "custom" ? (
                    beat.text
                  ) : (
                    <p
                      className={`font-display font-black tracking-tight leading-tight uppercase max-w-4xl mx-auto ${
                        beat.size === "sm" ? "text-xs sm:text-sm font-mono tracking-widest text-accent-green font-bold" : ""
                      } ${
                        beat.size === "md" ? "text-xl sm:text-2xl md:text-3xl text-white/90" : ""
                      } ${
                        beat.size === "lg" ? "text-4xl sm:text-6xl md:text-7xl gold-gradient-text text-glow-gold" : ""
                      } ${
                        beat.size === "xl" ? "text-5xl sm:text-7xl md:text-8xl gold-gradient-text text-glow-gold" : ""
                      }`}
                    >
                      {beat.text}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 opacity-70">
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-accent-gold">Scroll to reveal</span>
              <ChevronDown className="animate-bounce text-accent-gold" size={18} />
            </div>
          </div>
        </div>
      )}

      {/* Static Camp Details & Countdown Block */}
      <section ref={detailsRef} className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-primary/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>2026 BIBLE CAMP OVERVIEW</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight">
                  Camp Details & Schedule
                </h2>
                <div className="h-1 w-20 bg-accent-gold rounded-full shadow-[0_0_10px_#F2B705]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-5 rounded-2xl flex items-start space-x-4 border-white/10">
                  <div className="h-10 w-10 rounded-xl bg-accent-gold/20 border border-accent-gold/40 flex items-center justify-center text-accent-gold shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold">Dates & Duration</h4>
                    <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                      Wed, Aug 19 – Sat, Aug 22, 2026
                    </p>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl flex items-start space-x-4 border-white/10">
                  <div className="h-10 w-10 rounded-xl bg-accent-green/20 border border-accent-green/40 flex items-center justify-center text-accent-green shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold">Venue Location</h4>
                    <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                      TLCCRM Delta HQ, Warri, Delta State
                    </p>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl flex items-start space-x-4 border-white/10">
                  <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-accent-gold shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold">Who Can Attend</h4>
                    <p className="font-body text-xs sm:text-sm text-white/70 mt-1">
                      Children, Students, and Camp Officers
                    </p>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl flex items-start space-x-4 border-white/10">
                  <div className="h-10 w-10 rounded-xl bg-accent-gold/20 border border-accent-gold/40 flex items-center justify-center text-accent-gold shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold">Ministering Pastors</h4>
                    <p className="font-body text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
                      Pastor Nnamdi Ikechukwu <br />
                      G.O.: Pastor Lazarus Muoka
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-4 border-accent-green/30">
                <h4 className="font-display text-lg font-bold text-accent-green">Eligibility and Categories</h4>
                <ul className="space-y-2 text-xs sm:text-sm font-body text-white/80 list-disc list-inside">
                  <li><strong>Children:</strong> Focus on fun activities, bible stories, and faith.</li>
                  <li><strong>Students:</strong> Training in leadership, biblical wisdom, and character.</li>
                  <li><strong>Camp Officers:</strong> Trained volunteers/teachers running the camp (no fee).</li>
                </ul>
              </div>
            </div>

            {/* Countdown & Card */}
            <div className="lg:col-span-5">
              <div className="glass-card border-accent-gold/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="text-center space-y-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-accent-gold">CAMP BEGINS IN</span>
                  
                  <div className="grid grid-cols-4 gap-2 pt-2">
                    <div className="bg-neutral-dark/80 p-3 rounded-xl border border-white/10">
                      <div className="font-display text-2xl font-black text-accent-gold">{countdown.days}</div>
                      <div className="text-[8px] font-mono uppercase text-white/50 font-bold">Days</div>
                    </div>
                    <div className="bg-neutral-dark/80 p-3 rounded-xl border border-white/10">
                      <div className="font-display text-2xl font-black text-accent-gold">{countdown.hours}</div>
                      <div className="text-[8px] font-mono uppercase text-white/50 font-bold">Hours</div>
                    </div>
                    <div className="bg-neutral-dark/80 p-3 rounded-xl border border-white/10">
                      <div className="font-display text-2xl font-black text-accent-gold">{countdown.minutes}</div>
                      <div className="text-[8px] font-mono uppercase text-white/50 font-bold">Mins</div>
                    </div>
                    <div className="bg-neutral-dark/80 p-3 rounded-xl border border-white/10">
                      <div className="font-display text-2xl font-black text-accent-gold">{countdown.seconds}</div>
                      <div className="text-[8px] font-mono uppercase text-white/50 font-bold">Secs</div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-accent-gold">Registration Fee</h3>
                    <p className="font-body text-3xl font-black mt-1 gold-gradient-text">₦4,000</p>
                    <p className="font-body text-xs text-white/60 mt-1">
                      Applicable to Children & Students. Camp Officers register free.
                    </p>
                  </div>

                  <div className="space-y-2.5 font-body text-xs text-white/80">
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent-green shrink-0" />
                      <span>Direct handoff to WhatsApp admin</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-accent-green shrink-0" />
                      <span>Instant payment instruction access</span>
                    </div>
                  </div>

                  <Link href="/register" className="block pt-2">
                    <MagneticButton className="w-full rounded-full bg-gradient-to-r from-accent-gold to-amber-500 py-4 text-center text-xs font-black uppercase tracking-wider text-primary shadow-[0_0_20px_rgba(242,183,5,0.4)] hover:shadow-[0_0_35px_rgba(242,183,5,0.7)] transition-all">
                      Register Now
                    </MagneticButton>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
