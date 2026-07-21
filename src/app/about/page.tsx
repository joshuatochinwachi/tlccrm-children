import Link from "next/link";
import { BookOpen, ShieldCheck, Heart, Award, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function About() {
  return (
    <section className="flex-grow bg-neutral-cream py-20 px-4 sm:px-6 lg:px-8 text-primary">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
            Our Story & Mission
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight">
            About TLCCRM Children Department
          </h1>
          <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full" />
        </div>

        {/* Two-Column Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-primary">
              Raising a Holy and Righteous Generation
            </h2>
            <p className="font-body text-base text-primary/70 leading-relaxed">
              At the Children&apos;s Department of The Lord&apos;s Chosen Charismatic Revival Ministries (TLCCRM), Delta State Headquarters (Warri), we are driven by a single vision: **nurturing holy, obedient, and scripturally grounded children** in a rapidly changing world.
            </p>
            <p className="font-body text-base text-primary/70 leading-relaxed">
              Our Holiday Bible Camps are designed as immersive retreats where kids and students pause their regular schedules to spend dedicated quality time in the presence of God. We balance strict scriptural focus with joyful fellowship, creating memories that ground their faith for life.
            </p>
          </div>

          <div className="lg:col-span-5 glass-card border-accent-gold/30 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-green">MINISTRY MOTTO</span>
              <h3 className="font-display text-xl sm:text-2xl font-black gold-gradient-text uppercase">
                &quot;Catch Them Young for Christ&quot;
              </h3>
            </div>
            <blockquote className="border-l-4 border-accent-gold pl-4 italic text-xs sm:text-sm text-white/80 leading-relaxed">
              &quot;And that from a child thou hast known the holy scriptures, which are able to make thee wise unto salvation through faith which is in Christ Jesus.&quot;
            </blockquote>
            <p className="text-xs text-right text-accent-gold font-bold font-mono">— 2 Timothy 3:15</p>
            <div className="pt-2 text-xs font-body text-white/70 leading-relaxed border-t border-white/10">
              Guided by the vision of our General Overseer, <strong>Pastor Lazarus Muoka</strong>, and the leadership of our Delta State Pastor, <strong>Pastor Nnamdi Ikechukwu</strong>, we raise standards of integrity and scriptural excellence.
            </div>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="bg-neutral-light border border-primary/5 rounded-3xl p-8 sm:p-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display text-2xl font-bold">What We Stand For</h3>
            <p className="font-body text-sm text-primary/60">The foundation upon which every camp experience is built</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex space-x-4">
              <div className="h-10 w-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-primary shrink-0 mt-1">
                <BookOpen size={20} className="text-primary" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-lg font-bold">Sound Scriptural Doctrine</h4>
                <p className="font-body text-sm text-primary/70 leading-relaxed">
                  We teach the Word of God in its pure, uncompromised form. Children learn absolute truths, salvation, and guidelines for practical daily living.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="h-10 w-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-primary shrink-0 mt-1">
                <ShieldCheck size={20} className="text-accent-green" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-lg font-bold">Safe & Structured Care</h4>
                <p className="font-body text-sm text-primary/70 leading-relaxed">
                  Your child&apos;s spiritual and physical safety is our priority. Experienced Camp Officers supervise lodging, feeding, lectures, and play intervals.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                <Heart size={20} className="text-primary" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-lg font-bold">Joyful Christian Fellowship</h4>
                <p className="font-body text-sm text-primary/70 leading-relaxed">
                  Faith is exciting. We integrate singing, bible quizzes, recreational sports, and team tasks that prove walking with Jesus is full of joy.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="h-10 w-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-primary shrink-0 mt-1">
                <Award size={20} className="text-primary" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-lg font-bold">Leadership Development</h4>
                <p className="font-body text-sm text-primary/70 leading-relaxed">
                  For our Students and Camp Officers, the camp acts as a training ground for public speaking, responsibility, and service organization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Link Banner */}
        <div className="mt-16 text-center">
          <Link href="/camp/2026">
            <MagneticButton className="rounded-full bg-primary px-8 py-4 text-base font-bold uppercase tracking-wider text-neutral-cream transition-all hover:bg-accent-green shadow-lg">
              Explore 2026 Camp
              <ArrowRight size={18} className="ml-2 inline" />
            </MagneticButton>
          </Link>
        </div>

      </div>
    </section>
  );
}
