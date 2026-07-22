"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Heart, Users, Calendar, MapPin, Award, Sparkles, ShieldCheck, Play, X, Film, Image as ImageIcon, ArrowLeft } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

/* ── Looping glitch text hook ── */
function useGlitchText(target: string, delay = 0) {
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&*";
  const [text, setText] = useState(() => target.replace(/[^ ]/g, CHARS[0]));

  useEffect(() => {
    let outerTimer: ReturnType<typeof setTimeout>;
    let iv: ReturnType<typeof setInterval>;

    function runGlitch(afterDelay: number) {
      outerTimer = setTimeout(() => {
        let frame = 0;
        const maxFrames = 22;
        iv = setInterval(() => {
          if (frame < maxFrames) {
            setText(
              target
                .split("")
                .map((ch) => {
                  if (ch === " ") return " ";
                  const p = frame / maxFrames;
                  return Math.random() < p ? ch : CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("")
            );
            frame++;
          } else {
            setText(target);
            clearInterval(iv);
            // Schedule next glitch cycle in ~4.5s
            runGlitch(4500);
          }
        }, 45);
      }, afterDelay);
    }

    runGlitch(delay);
    return () => {
      clearTimeout(outerTimer);
      clearInterval(iv);
    };
  }, [target, delay]);

  return { text };
}

/* ── Home Video Card with Live Hover Preview & No Writeup ── */
function HomeVideoCard({ onClick }: { onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      className="glass-card glass-card-hover group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col h-72"
    >
      <div className="relative h-full w-full overflow-hidden bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          src="/videos/VID-20260721-WA0006.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover opacity-75 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />

        <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 ${isPlaying ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}>
          <div className="h-16 w-16 rounded-full bg-accent-gold/25 border border-accent-gold/50 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(242,183,5,0.4)]">
            <Play size={28} className="ml-1 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { text: glitchLine } = useGlitchText("RAISING GODLY CHILDREN", 300);
  const { text: glitchMotto } = useGlitchText("CATCH THEM YOUNG FOR CHRIST", 900);
  const [activePreview, setActivePreview] = useState<{ type: "image" | "video"; url: string; title: string; category: string } | null>(null);

  return (
    <div className="relative w-full overflow-hidden text-white">
      
      {/* 1. Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:py-24 sm:px-6 lg:px-8 overflow-hidden" style={{ minHeight: "100svh" }}>
        
        {/* Ambient glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-green/10 rounded-full blur-[160px] pointer-events-none" />

        {/* ── Atmospheric watermarks — hidden on mobile to avoid cluttering centered content ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.09] select-none hidden sm:block">
          <div className="absolute top-[8%] left-[4%] font-mono text-[9px] text-white/80 rotate-[-4deg] space-y-1">
            <div>TLCCRM · DELTA STATE HQ</div>
            <div>REF: CHD-2026-001</div>
          </div>
          <div className="absolute top-[12%] right-[6%] font-mono text-[8px] text-white/70 rotate-[3deg] space-y-1">
            <div>||||||||||||||||||||||</div>
            <div>CAMP ID: BC-AUG-2026</div>
          </div>
          <div className="absolute top-[30%] left-[2%] font-mono text-[7px] text-white/60 rotate-[-2deg] space-y-1">
            <div>2 TIM 3:15 — HOLY SCRIPTURES</div>
            <div>PROVERBS 22:6 — TRAIN UP</div>
          </div>
          {/* "VERIFIED" stamp — only show on larger screens where it won't overlap hero text */}
          <div className="absolute top-[22%] right-[18%] font-mono text-[10px] text-white/50 rotate-[7deg] hidden lg:block">
            <div className="border border-white/30 px-2 py-1">VERIFIED</div>
          </div>
          <div className="absolute top-[48%] left-[3%] font-mono text-[8px] text-white/55 rotate-[4deg] space-y-0.5">
            <div>HOLIDAY BIBLE CAMP</div>
            <div>AUG 19 – 22 · WARRI</div>
            <div>||||||||||||||​</div>
          </div>
          <div className="absolute top-[55%] right-[4%] font-mono text-[9px] text-white/50 rotate-[-5deg] space-y-1">
            <div>REGISTRATION FEE: ₦4,000</div>
            <div>STATUS: OPEN</div>
          </div>
          <div className="absolute top-[68%] left-[20%] font-mono text-[7px] text-white/40 rotate-[2deg] space-y-0.5 hidden md:block">
            <div>ROMANS 12:2 · BE TRANSFORMED</div>
            <div>PSALM 119:9 · STAY PURE</div>
          </div>
          <div className="absolute top-[75%] right-[20%] font-mono text-[8px] text-white/45 rotate-[-3deg] space-y-1 hidden md:block">
            <div>CHILDREN DEPT · AUTHORIZED</div>
            <div>||| |||| ||| |||| |||</div>
          </div>
          <div className="absolute top-[18%] left-[38%] w-16 h-16 border border-white/25 rounded-full flex items-center justify-center rotate-[-12deg] hidden lg:flex">
            <div className="text-[6px] text-white/50 font-mono text-center leading-tight">
              <div>MINISTRY</div>
              <div>APPROVED</div>
            </div>
          </div>
          <div className="absolute bottom-[15%] left-[40%] font-mono text-[6px] text-white/35 rotate-[1deg] space-y-0.5 hidden lg:block">
            <div>SIGNATURE REQUIRED · TLCCRM</div>
            <div>DELIVERY: IN PERSON · WARRI</div>
          </div>
          <div className="absolute bottom-[8%] right-[8%] font-mono text-[8px] text-white/45 rotate-[6deg] space-y-0.5">
            <div>BATCH: AUG-2026-A</div>
            <div>ZONE: DELTA-01</div>
          </div>
        </div>

        {/* ── Core Hero content — centered ── */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-5 sm:space-y-8">

          {/* Logo with scan-ring + orbiting dots */}
          <div className="relative flex items-center justify-center">
            {/* Outer rotating dashed ring */}
            <div
              className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-dashed border-accent-gold/30"
              style={{ animation: "spin 12s linear infinite", willChange: "transform" }}
            />
            {/* Middle pulsing glow ring */}
            <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-accent-gold/10 blur-xl animate-pulse" />
            {/* Inner glow ring */}
            <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-accent-gold/40 shadow-[0_0_30px_rgba(242,183,5,0.3)]" />

            {/* Gold orbiting satellite dot (clockwise, 4s) */}
            <div
              className="absolute w-[128px] h-[128px] sm:w-[144px] sm:h-[144px]"
              style={{ animation: "spin 4s linear infinite", willChange: "transform" }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent-gold"
                style={{ boxShadow: "0 0 10px 3px rgba(242,183,5,0.8)" }}
              />
            </div>

            {/* Green orbiting satellite dot (counter-clockwise, 7s) */}
            <div
              className="absolute w-[132px] h-[132px] sm:w-[148px] sm:h-[148px]"
              style={{ animation: "spin 7s linear infinite reverse", willChange: "transform" }}
            >
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-green"
                style={{ boxShadow: "0 0 8px 3px rgba(46,139,87,0.8)" }}
              />
            </div>

            {/* Logo */}
            <Image
              src="/logo.png"
              alt="TLCCRM Children Department"
              width={80}
              height={80}
              className="relative z-10 rounded-full object-cover ring-2 ring-accent-gold/60 shadow-[0_0_40px_rgba(242,183,5,0.5)]"
              priority
            />
          </div>

          {/* Glitch ministry tag — truncated on mobile to prevent overflow */}
          <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.3em] uppercase text-accent-green/80 animate-pulse px-2 text-center leading-relaxed">
            ✦ TLCCRM CHILDREN DEPT · DELTA HQ · WARRI ✦
          </div>

          {/* Glitch headline */}
          <div className="space-y-2">
            <h1
              className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05]"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              <span className="font-mono text-accent-gold tracking-[0.05em] drop-shadow-[0_0_30px_rgba(242,183,5,0.6)]">
                {glitchLine}
              </span>
            </h1>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white/50 tracking-wide">
              in a <span className="green-gradient-text">Decaying World</span>
            </h2>
          </div>

          {/* Motto glitch line */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-accent-gold/40" />
            <span className="font-mono text-xs tracking-[0.2em] text-accent-gold/70 uppercase">
              {glitchMotto}
            </span>
            <div className="h-px w-8 bg-accent-gold/40" />
          </div>

          {/* Sub copy */}
          <p className="font-body text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            Welcome to the official digital home of The Lord&apos;s Chosen Charismatic Revival Ministries, Children&apos;s Department — nurturing children and students through faith, fellowship, and scripture.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full">
            <Link href="/camp/2026">
              <MagneticButton className="rounded-full bg-gradient-to-r from-accent-gold via-amber-400 to-accent-gold px-8 py-4 text-sm font-black uppercase tracking-wider text-primary shadow-[0_0_25px_rgba(242,183,5,0.4)] hover:shadow-[0_0_45px_rgba(242,183,5,0.7)] hover:scale-105 transition-all">
                Explore 2026 Bible Camp
                <ArrowRight size={16} className="ml-2 inline" />
              </MagneticButton>
            </Link>
            <Link href="/gallery">
              <button className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-accent-gold hover:text-accent-gold">
                View Past Camps
              </button>
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="flex flex-col items-center gap-2 pt-4 animate-bounce">
            <span className="text-[10px] text-white/30 font-mono tracking-widest">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Continuous Marquee Ticker ── */}
      <div className="relative z-10 w-full overflow-hidden border-y border-accent-gold/20 bg-primary-light/60 backdrop-blur-md py-3">
        {/* Fade masks on edges */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="flex w-max hover:[animation-play-state:paused] cursor-pointer" style={{ animation: "marquee 20s linear infinite" }}>
          {/* Duplicate the content for seamless loop */}
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0 gap-0">
              {[
                { text: "✦ HOLIDAY BIBLE CAMP 2026", gold: true },
                { text: "AUG 19–22 · WARRI, DELTA STATE", gold: false },
                { text: "✦ CATCH THEM YOUNG FOR CHRIST", gold: true },
                { text: "REGISTRATION: ₦4,000", gold: false },
                { text: "✦ TLCCRM CHILDREN DEPT", gold: true },
                { text: "2 TIM 3:15 · TRAIN THEM IN THE WORD", gold: false },
                { text: "✦ PROV 22:6 · TRAIN UP A CHILD", gold: true },
                { text: "CAMP OFFICER APPLICATIONS OPEN", gold: false },
                { text: "✦ FAITH · FELLOWSHIP · SCRIPTURE", gold: true },
                { text: "DELTA STATE HQ · AUTHORIZED", gold: false },
              ].map((item, i) => (
                <span
                  key={i}
                  className={`font-mono text-[10px] tracking-[0.18em] uppercase whitespace-nowrap px-6 ${
                    item.gold ? "text-accent-gold" : "text-white/50"
                  }`}
                >
                  {item.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

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
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-gold">PHOTOS & VIDEO CLIPS</span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                Moments From Past Camps
              </h2>
            </div>
            <Link href="/gallery" className="font-body text-sm font-bold text-accent-gold hover:text-white transition-colors flex items-center space-x-1 shrink-0">
              <span>View Full Gallery ({'9 items'})</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Video Preview with Live Hover Play */}
            <HomeVideoCard
              onClick={() => setActivePreview({
                type: "video",
                url: "/videos/VID-20260721-WA0006.mp4",
                title: "Camp Praise & Worship Session",
                category: "Worship Clip"
              })}
            />

            {/* Card 2: Real Photo WA 0014 */}
            <div
              onClick={() => setActivePreview({
                type: "image",
                url: "/pictures/IMG-20260720-WA0014.jpg",
                title: "Children & Camp Officers Group Photo",
                category: "Group Assembly"
              })}
              className="glass-card glass-card-hover group relative h-72 overflow-hidden rounded-3xl p-6 flex flex-col justify-end cursor-pointer border border-white/10"
            >
              <Image
                src="/pictures/IMG-20260720-WA0014.jpg"
                alt="Children & Camp Officers Group Photo"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/30 to-transparent z-10 opacity-80" />
              <div className="relative z-20 space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-accent-gold">Group Assembly</span>
                <h4 className="font-display text-lg font-bold text-white group-hover:text-accent-gold transition-colors">
                  Campers & Officers
                </h4>
              </div>
            </div>

            {/* Card 3: Real Photo WA 0016 */}
            <div
              onClick={() => setActivePreview({
                type: "image",
                url: "/pictures/IMG-20260720-WA0016.jpg",
                title: "Joyful Campers & Youth Fellowship",
                category: "Camp Fellowship"
              })}
              className="glass-card glass-card-hover group relative h-72 overflow-hidden rounded-3xl p-6 flex flex-col justify-end cursor-pointer border border-white/10 sm:col-span-2 lg:col-span-1"
            >
              <Image
                src="/pictures/IMG-20260720-WA0016.jpg"
                alt="Joyful Campers & Youth Fellowship"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/30 to-transparent z-10 opacity-80" />
              <div className="relative z-20 space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-accent-green">Camp Fellowship</span>
                <h4 className="font-display text-lg font-bold text-white group-hover:text-accent-gold transition-colors">
                  Joyful Victory Pose
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Homepage Quick Preview Modal */}
      {activePreview && (
        <div
          onClick={() => setActivePreview(null)}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-neutral-dark/98 p-4 sm:p-6 backdrop-blur-2xl animate-[fadeIn_0.2s_ease-out]"
        >
          {/* Single Top-Left Return Back Button */}
          <button
            onClick={() => setActivePreview(null)}
            className="fixed top-6 left-6 z-[100000] flex items-center space-x-2 rounded-full bg-accent-gold text-primary font-black px-5 py-2.5 text-xs font-mono uppercase tracking-wider hover:bg-amber-400 transition-all duration-200 shadow-[0_0_25px_rgba(242,183,5,0.6)] active:scale-95 cursor-pointer"
            aria-label="Return back"
          >
            <ArrowLeft size={18} />
            <span>Return Back</span>
          </button>

          {/* Main Media Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col justify-center items-center"
          >
            {activePreview.type === "image" ? (
              <div className="relative w-full h-[60vh] sm:h-[65vh]">
                <Image
                  src={activePreview.url}
                  alt={activePreview.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="relative w-full max-h-[80vh] flex items-center justify-center">
                <video
                  src={activePreview.url}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="rounded-2xl max-w-full max-h-[78vh] border border-white/10 bg-black shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
