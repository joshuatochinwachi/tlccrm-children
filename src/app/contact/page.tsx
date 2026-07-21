import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  const adminWhatsAppLink = "https://wa.me/2347031563837?text=Hello%20Harrison%2C%20I%20have%20a%20question%20about%20the%20Children%20Holiday%20Bible%20Camp.";

  return (
    <section className="flex-grow bg-neutral-cream py-20 px-4 sm:px-6 lg:px-8 text-primary">
      <div className="mx-auto max-w-7xl">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
            Connect With Us
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-primary">
            Contact Information
          </h1>
          <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full" />
          <p className="font-body text-sm sm:text-base text-primary/70 leading-relaxed">
            Have questions about the camp details, registration, or volunteering? Reach out to our department administrators directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Main Admin (Harrison) */}
          <div className="bg-neutral-light border border-primary/5 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest uppercase font-bold text-accent-green block">Admin Coordinator</span>
                <h3 className="font-display text-2xl font-black">Harrison</h3>
                <p className="font-body text-xs sm:text-sm text-primary/60 leading-relaxed">
                  Harrison coordinates registration confirmations, payment verifications, logistics setup, and volunteer roles.
                </p>
              </div>

              <div className="h-px bg-primary/5" />

              <ul className="space-y-4 font-body text-sm">
                <li className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-lg bg-accent-gold/15 flex items-center justify-center text-primary shrink-0">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <a href="tel:07031563837" className="hover:text-accent-gold transition-colors font-bold">
                    0703 156 3837
                  </a>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-lg bg-accent-green/15 flex items-center justify-center text-primary shrink-0">
                    <MessageCircle size={16} className="text-accent-green" />
                  </div>
                  <a href={adminWhatsAppLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors font-bold">
                    Message Harrison on WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a href={adminWhatsAppLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <MagneticButton className="w-full rounded-full bg-primary py-4 text-sm font-bold uppercase tracking-wider text-neutral-cream hover:bg-accent-green transition-colors duration-300 shadow-md">
                  <Send size={16} className="mr-2 inline" />
                  Chat on WhatsApp
                </MagneticButton>
              </a>
            </div>
          </div>

          {/* Card 2: Venue and General Office */}
          <div className="bg-primary text-neutral-cream rounded-3xl p-8 flex flex-col justify-between shadow-lg border border-accent-gold/20">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest uppercase font-bold text-accent-gold block">HQ Venue</span>
                <h3 className="font-display text-2xl font-black text-accent-gold">Delta State Headquarters</h3>
                <p className="font-body text-xs sm:text-sm text-neutral-cream/70 leading-relaxed">
                  All bible camps are hosted at the permanent state headquarters premises of The Lord&apos;s Chosen Charismatic Revival Ministries in Warri.
                </p>
              </div>

              <div className="h-px bg-neutral-cream/10" />

              <ul className="space-y-4 font-body text-sm text-neutral-cream/80">
                <li className="flex items-start space-x-3">
                  <div className="h-9 w-9 rounded-lg bg-neutral-dark/30 border border-neutral-cream/5 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin size={16} className="text-accent-gold" />
                  </div>
                  <span className="leading-relaxed">
                    The Lord&apos;s Chosen CRM, <br />
                    Delta State Headquarters, <br />
                    Warri, Delta State, Nigeria
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-lg bg-neutral-dark/30 border border-neutral-cream/5 flex items-center justify-center text-primary shrink-0">
                    <Mail size={16} className="text-accent-gold" />
                  </div>
                  <a href="mailto:harrytendency@gmail.com" className="hover:text-accent-gold transition-colors break-all font-mono text-xs">
                    harrytendency@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-8 text-center text-[10px] tracking-widest uppercase text-neutral-cream/30 font-bold border-t border-neutral-cream/10 mt-6">
              Official Children Ministry Portal
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
