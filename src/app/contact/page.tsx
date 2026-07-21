import { Phone, Mail, MapPin, Send, MessageCircle, Sparkles } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  const adminWhatsAppLink = "https://wa.me/2347031563837?text=Hello%20Harrison%2C%20I%20have%20a%20question%20about%20the%20Children%20Holiday%20Bible%20Camp.";

  return (
    <section className="relative z-10 flex-grow py-20 px-4 sm:px-6 lg:px-8 text-white min-h-screen">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
            <Sparkles size={14} className="animate-pulse" />
            <span>CONNECT WITH US</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white">
            Contact <span className="gold-gradient-text">Information</span>
          </h1>
          <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full shadow-[0_0_10px_#F2B705]" />
          <p className="font-body text-sm sm:text-base text-white/70 leading-relaxed">
            Have questions about camp details, registration, or volunteering? Reach out to our department administrators directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Main Admin (Harrison) */}
          <div className="glass-card glass-card-hover border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-accent-green block">ADMIN COORDINATOR</span>
                <h3 className="font-display text-2xl font-black text-white">Harrison</h3>
                <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                  Harrison coordinates registration confirmations, payment verifications, logistics setup, and volunteer roles.
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <ul className="space-y-4 font-body text-sm">
                <li className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-xl bg-accent-gold/20 border border-accent-gold/40 flex items-center justify-center text-accent-gold shrink-0">
                    <Phone size={16} />
                  </div>
                  <a href="tel:07031563837" className="hover:text-accent-gold transition-colors font-mono font-bold text-white">
                    0703 156 3837
                  </a>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-xl bg-accent-green/20 border border-accent-green/40 flex items-center justify-center text-accent-green shrink-0">
                    <MessageCircle size={16} />
                  </div>
                  <a href={adminWhatsAppLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors font-bold text-white">
                    Message Harrison on WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a href={adminWhatsAppLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <MagneticButton className="w-full rounded-full bg-gradient-to-r from-accent-gold via-amber-400 to-accent-gold py-4 text-sm font-bold uppercase tracking-wider text-primary shadow-[0_0_20px_rgba(242,183,5,0.4)] hover:shadow-[0_0_35px_rgba(242,183,5,0.7)] transition-all duration-300">
                  <Send size={16} className="mr-2 inline" />
                  Chat on WhatsApp
                </MagneticButton>
              </a>
            </div>
          </div>

          {/* Card 2: Venue and General Office */}
          <div className="glass-card border-accent-gold/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-accent-gold block">HQ VENUE</span>
                <h3 className="font-display text-2xl font-black gold-gradient-text">Delta State Headquarters</h3>
                <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                  All bible camps are hosted at the permanent state headquarters premises of The Lord&apos;s Chosen Charismatic Revival Ministries in Warri.
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <ul className="space-y-4 font-body text-sm text-white/80">
                <li className="flex items-start space-x-3">
                  <div className="h-9 w-9 rounded-xl bg-accent-gold/20 border border-accent-gold/40 flex items-center justify-center text-accent-gold shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <span className="leading-relaxed">
                    The Lord&apos;s Chosen CRM, <br />
                    Delta State Headquarters, <br />
                    Warri, Delta State, Nigeria
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-xl bg-accent-green/20 border border-accent-green/40 flex items-center justify-center text-accent-green shrink-0">
                    <Mail size={16} />
                  </div>
                  <a href="mailto:harrytendency@gmail.com" className="hover:text-accent-gold transition-colors break-all font-mono text-xs text-white">
                    harrytendency@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-8 text-center text-[10px] tracking-widest font-mono uppercase text-white/40 font-bold border-t border-white/10 mt-6">
              Official Children Ministry Portal
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
