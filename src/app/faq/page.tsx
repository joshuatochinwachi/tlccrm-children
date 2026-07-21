"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "Who can attend this camp?",
    answer: (
      <p>
        The camp is open to three categories:
        <br />
        • <strong>Children:</strong> Young kids who will experience age-appropriate scripture teachings, bible stories, and fun fellowship activities.
        <br />
        • <strong>Students:</strong> Teenagers and older youths looking to grow deeper in faith, biblical wisdom, and Christian leadership.
        <br />• <strong>Camp Officers:</strong> Trained volunteers, teachers, and children workers who assist in running the camp.
      </p>
    ),
  },
  {
    question: "Do Camp Officers pay the ₦2,000 registration fee?",
    answer: (
      <p>
        No. Camp Officer registration is completely free. Camp Officers register directly through the admin-contact path on WhatsApp without a payment step.
      </p>
    ),
  },
  {
    question: "How do I pay the registration fee for Children/Students?",
    answer: (
      <p>
        After filling the short details form on the <strong>Register</strong> page, you will see bank account details (Fidelity Bank) and a reference code. Transfer the ₦2,000 fee, then click the &quot;Send Proof of Payment&quot; button to launch WhatsApp with pre-filled details. Paste your bank transfer receipt/screenshot into that chat to verify.
      </p>
    ),
  },
  {
    question: "How do I know my registration is confirmed?",
    answer: (
      <p>
        Registration is confirmed manually once Harrison (our admin) verifies your pre-filled WhatsApp message and bank transfer proof. You will receive a direct confirmation text from him on WhatsApp. The website itself does not store your information; it is a direct conversation handoff.
      </p>
    ),
  },
  {
    question: "What should participants bring to camp?",
    answer: (
      <p>
        Participants should bring:
        <br />
        • A Bible, notebooks, and writing materials (pens/pencils).
        <br />
        • Personal toiletries (towel, soap, sponge, toothbrush, toothpaste).
        <br />
        • Bedding (bedsheets, pillowcase, and a blanket).
        <br />
        • Clean, modest clothing suitable for lectures, prayers, and light recreation.
        <br />• Personal medications if applicable (please notify camp officers upon arrival).
      </p>
    ),
  },
  {
    question: "Is there a refund policy?",
    answer: (
      <p>
        Registration fees are non-refundable as they immediately go toward food preparation, accommodation setup, and utility arrangements for the child. However, if a registered child cannot attend, the slot can be transferred to another participant. Please message Harrison on WhatsApp to arrange a transfer.
      </p>
    ),
  },
  {
    question: "What time should we arrive at camp?",
    answer: (
      <p>
        Arrival is scheduled for <strong>Wednesday, August 19, 2026, between 3:00 PM and 6:00 PM</strong> at the TLCCRM Delta State Headquarters, Warri.
      </p>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex-grow bg-neutral-cream py-20 px-4 sm:px-6 lg:px-8 text-primary">
      <div className="mx-auto max-w-4xl">
        
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-green">
            Have Questions?
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-primary">
            Frequently Asked Questions
          </h1>
          <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full" />
          <p className="font-body text-sm sm:text-base text-primary/70 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about eligibility, registration, payment steps, and requirements.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-neutral-light border border-primary/5 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm sm:text-base text-primary focus:outline-none hover:text-accent-gold transition-colors"
                >
                  <span className="flex items-center pr-4">
                    <HelpCircle size={18} className="text-accent-green mr-3 shrink-0" />
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-primary shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-primary shrink-0" />
                  )}
                </button>

                {/* Smooth Expandable Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-primary/5 p-5" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="font-body text-xs sm:text-sm text-primary/75 leading-relaxed space-y-2">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact fallback notice */}
        <div className="mt-16 text-center bg-primary text-neutral-cream rounded-3xl p-8 border border-accent-gold/20 shadow-lg">
          <h3 className="font-display text-lg font-bold text-accent-gold mb-2">
            Still have questions?
          </h3>
          <p className="font-body text-xs sm:text-sm text-neutral-cream/70 leading-relaxed mb-6 max-w-md mx-auto">
            If you need further clarification on lodging, food, or custom arrangements, feel free to call or message the admin directly.
          </p>
          <Link href="/contact">
            <button className="rounded-full bg-accent-gold px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary hover:bg-neutral-cream hover:text-primary transition-all duration-300">
              Get Contact Details
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
