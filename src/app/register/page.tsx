"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, ArrowLeft, Send, Phone, Award, ShieldCheck, Heart, Sparkles } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

type Category = "CHILD" | "STUDENT" | "OFFICER";
type Step = "CATEGORY" | "DETAILS" | "PAYMENT";

const detailsSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  age: z.string().optional().refine((val) => {
    if (!val) return true;
    const num = parseInt(val);
    return !isNaN(num) && num > 0 && num < 100;
  }, "Please enter a valid age"),
  guardianName: z.string().optional(),
  guardianPhone: z.string().optional(),
  churchBranch: z.string().optional(),
  officerRole: z.string().optional(),
});

type FormValues = z.infer<typeof detailsSchema>;

export default function Register() {
  const [category, setCategory] = useState<Category | null>(null);
  const [step, setStep] = useState<Step>("CATEGORY");
  const [refCode, setRefCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      fullName: "",
      age: "",
      guardianName: "",
      guardianPhone: "",
      churchBranch: "",
      officerRole: "",
    },
  });

  const generateReference = (cat: Category) => {
    const code = cat === "CHILD" ? "CH" : cat === "STUDENT" ? "ST" : "CO";
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `TLCCRM-2026-${code}-${rand}`;
  };

  const handleCategorySelect = (selected: Category) => {
    setCategory(selected);
    if (selected === "OFFICER") {
      setValue("guardianName", "");
      setValue("guardianPhone", "");
    }
    setStep("DETAILS");
  };

  const handleDetailsSubmit = async () => {
    setIsSubmitting(true);
    let isValid = false;
    if (category === "OFFICER") {
      isValid = await trigger(["fullName", "churchBranch", "officerRole"]);
    } else {
      isValid = await trigger(["fullName", "age", "guardianName", "guardianPhone"]);
    }

    if (isValid) {
      if (category) {
        setRefCode(generateReference(category));
      }
      setStep("PAYMENT");
    }
    setIsSubmitting(false);
  };

  const getWhatsAppLink = () => {
    const values = getValues();
    const adminNumber = "2347031563837";
    
    if (category === "OFFICER") {
      const text = `Hello Harrison. I'd like to register as a Camp Officer for the 2026 Children Holiday Bible Camp. Name: ${values.fullName}. Role: ${values.officerRole || "Volunteer"}. Church Branch: ${values.churchBranch || "Delta HQ"}.`;
      return `https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`;
    } else {
      const catText = category === "CHILD" ? "Child" : "Student";
      const text = `Hello Harrison. I'd like to register ${values.fullName} (age ${values.age}) as a ${catText} for the 2026 Children Holiday Bible Camp. Reference: ${refCode}. Guardian: ${values.guardianName}. Phone: ${values.guardianPhone}.${values.churchBranch ? ` Branch: ${values.churchBranch}.` : ""} I'll send proof of payment shortly.`;
      return `https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`;
    }
  };

  const handleWhatsAppRedirect = () => {
    const link = getWhatsAppLink();
    window.open(link, "_blank");
  };

  return (
    <section className="relative z-10 min-h-[85vh] flex items-center justify-center px-4 py-20 text-white">
      <div className="mx-auto max-w-xl w-full">
        
        {/* Step Progress Bar */}
        <div className="mb-8 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-white/50">
          <div className="flex items-center space-x-2">
            <span className={`h-7 w-7 rounded-full flex items-center justify-center font-display text-xs border ${step === "CATEGORY" ? "border-accent-gold bg-accent-gold text-primary font-black shadow-[0_0_15px_rgba(242,183,5,0.5)]" : "border-white/20 bg-white/5"}`}>1</span>
            <span>Category</span>
          </div>
          <div className="h-px bg-white/10 flex-grow mx-4" />
          <div className="flex items-center space-x-2">
            <span className={`h-7 w-7 rounded-full flex items-center justify-center font-display text-xs border ${step === "DETAILS" ? "border-accent-gold bg-accent-gold text-primary font-black shadow-[0_0_15px_rgba(242,183,5,0.5)]" : "border-white/20 bg-white/5"}`}>2</span>
            <span>Details</span>
          </div>
          <div className="h-px bg-white/10 flex-grow mx-4" />
          <div className="flex items-center space-x-2">
            <span className={`h-7 w-7 rounded-full flex items-center justify-center font-display text-xs border ${step === "PAYMENT" ? "border-accent-gold bg-accent-gold text-primary font-black shadow-[0_0_15px_rgba(242,183,5,0.5)]" : "border-white/20 bg-white/5"}`}>3</span>
            <span>Confirm</span>
          </div>
        </div>

        {/* Glass Card Container */}
        <div className="glass-card border-accent-gold/25 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          
          {/* STEP 1: Select Category */}
          {step === "CATEGORY" && (
            <div className="space-y-6">
              <div className="text-center space-y-2 mb-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-gold">STEP 1 OF 3</span>
                <h2 className="font-display text-3xl font-black gold-gradient-text">Who is Registering?</h2>
                <p className="font-body text-xs sm:text-sm text-white/70">Select your registration category to begin.</p>
              </div>

              <div className="space-y-4">
                {/* Child Option */}
                <button
                  onClick={() => handleCategorySelect("CHILD")}
                  className="w-full text-left p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent-gold transition-all duration-300 group flex items-start space-x-4 hover:shadow-[0_0_20px_rgba(242,183,5,0.15)]"
                >
                  <div className="h-11 w-11 rounded-xl bg-accent-gold/15 border border-accent-gold/30 flex items-center justify-center text-accent-gold shrink-0 group-hover:scale-110 transition-transform">
                    <Heart size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-accent-gold transition-colors">Child Attendee</h3>
                    <p className="font-body text-xs text-white/65 mt-1 leading-relaxed">
                      For children attending the camp. Features scripture teachings, bible stories, and fun fellowship activities. (₦2,700 fee)
                    </p>
                  </div>
                </button>

                {/* Student Option */}
                <button
                  onClick={() => handleCategorySelect("STUDENT")}
                  className="w-full text-left p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent-green transition-all duration-300 group flex items-start space-x-4 hover:shadow-[0_0_20px_rgba(46,139,87,0.2)]"
                >
                  <div className="h-11 w-11 rounded-xl bg-accent-green/15 border border-accent-green/30 flex items-center justify-center text-accent-green shrink-0 group-hover:scale-110 transition-transform">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-accent-green transition-colors">Student Attendee</h3>
                    <p className="font-body text-xs text-white/65 mt-1 leading-relaxed">
                      For older participants and teenagers attending to grow in faith, sound biblical wisdom, and Christian leadership. (₦2,700 fee)
                    </p>
                  </div>
                </button>

                {/* Camp Officer Option */}
                <button
                  onClick={() => handleCategorySelect("OFFICER")}
                  className="w-full text-left p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent-gold transition-all duration-300 group flex items-start space-x-4 hover:shadow-[0_0_20px_rgba(242,183,5,0.15)]"
                >
                  <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-accent-gold shrink-0 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-accent-gold transition-colors">Camp Officer</h3>
                    <p className="font-body text-xs text-white/65 mt-1 leading-relaxed">
                      For trained volunteers, teachers, and children workers serving as coordinators or staff. (Free registration)
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Details Input */}
          {step === "DETAILS" && (
            <form onSubmit={handleSubmit(handleDetailsSubmit)} className="space-y-5">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-white/60 mb-2">
                <button
                  type="button"
                  onClick={() => setStep("CATEGORY")}
                  className="hover:text-accent-gold flex items-center space-x-1.5 focus:outline-none transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
                <span>/</span>
                <span className="text-accent-gold">
                  {category === "CHILD" ? "Child Details" : category === "STUDENT" ? "Student Details" : "Officer Details"}
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
                    {category === "OFFICER" ? "Full Name" : "Participant Full Name"}
                  </label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="Enter full name"
                    className="w-full rounded-xl border border-white/15 bg-neutral-dark/80 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-gold transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 font-bold">{errors.fullName.message}</p>
                  )}
                </div>

                {category !== "OFFICER" && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
                      Participant Age
                    </label>
                    <input
                      type="number"
                      {...register("age")}
                      placeholder="e.g. 10 (Soft split: Children < 13 / Students 13+)"
                      className="w-full rounded-xl border border-white/15 bg-neutral-dark/80 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-gold transition-colors"
                    />
                    {errors.age && (
                      <p className="text-xs text-red-400 font-bold">{errors.age.message}</p>
                    )}
                  </div>
                )}

                {category !== "OFFICER" && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
                      Guardian Full Name
                    </label>
                    <input
                      type="text"
                      {...register("guardianName")}
                      placeholder="Enter parent/guardian name"
                      className="w-full rounded-xl border border-white/15 bg-neutral-dark/80 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-gold transition-colors"
                    />
                  </div>
                )}

                {category !== "OFFICER" && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
                      Guardian Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      {...register("guardianPhone")}
                      placeholder="e.g. 08012345678"
                      className="w-full rounded-xl border border-white/15 bg-neutral-dark/80 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-gold transition-colors"
                    />
                  </div>
                )}

                {category === "OFFICER" && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
                      Role / Responsibility at Camp
                    </label>
                    <input
                      type="text"
                      {...register("officerRole")}
                      placeholder="e.g. Teacher, Usher, Choir Instructor, Coordinator"
                      className="w-full rounded-xl border border-white/15 bg-neutral-dark/80 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-gold transition-colors"
                    />
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-accent-gold">
                    Home Church Branch {category !== "OFFICER" && "(Optional)"}
                  </label>
                  <input
                    type="text"
                    {...register("churchBranch")}
                    placeholder="e.g. Warri Headquarters, Effurun Branch"
                    className="w-full rounded-xl border border-white/15 bg-neutral-dark/80 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-gold transition-colors"
                  />
                </div>
              </div>

              <div className="pt-3">
                <MagneticButton
                  type="submit"
                  loading={isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-accent-gold to-amber-500 py-4 text-xs font-black uppercase tracking-wider text-primary shadow-[0_0_20px_rgba(242,183,5,0.4)] transition-all"
                >
                  Continue to Confirmation
                  <ArrowRight size={16} className="ml-2 inline" />
                </MagneticButton>
              </div>
            </form>
          )}

          {/* STEP 3: Payment & Hand-off */}
          {step === "PAYMENT" && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-white/60 mb-2">
                <button
                  onClick={() => setStep("DETAILS")}
                  className="hover:text-accent-gold flex items-center space-x-1.5 focus:outline-none transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
                <span>/</span>
                <span className="text-accent-green">Confirm Registration</span>
              </div>

              {category === "OFFICER" ? (
                <div className="space-y-6">
                  <div className="glass-card-green p-6 rounded-2xl space-y-3">
                    <h3 className="font-display text-lg font-bold text-accent-green flex items-center">
                      <ShieldCheck size={20} className="mr-2" />
                      Camp Officer Path
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed">
                      Thank you for volunteering. Registration is completely free for Camp Officers. 
                      Click the button below to message Harrison (admin) on WhatsApp and confirm your role/schedule.
                    </p>
                  </div>

                  <MagneticButton
                    onClick={handleWhatsAppRedirect}
                    className="w-full rounded-full bg-gradient-to-r from-accent-gold to-amber-500 py-4 text-xs font-black uppercase tracking-wider text-primary shadow-[0_0_25px_rgba(242,183,5,0.4)] hover:shadow-[0_0_40px_rgba(242,183,5,0.7)] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send size={16} />
                    <span>Message Admin on WhatsApp</span>
                  </MagneticButton>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-neutral-dark/90 border border-accent-gold/40 p-4 rounded-xl text-center space-y-1 shadow-[0_0_20px_rgba(242,183,5,0.15)]">
                    <span className="text-[10px] font-mono uppercase font-bold text-white/50 tracking-wider">Your Reference Code</span>
                    <p className="font-display text-xl font-black tracking-widest gold-gradient-text text-glow-gold">{refCode}</p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl space-y-4 border-white/15">
                    <h3 className="font-display text-base font-bold text-accent-gold">Bank Payment Details</h3>
                    
                    <div className="space-y-3 font-body text-xs text-white/80">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/60">Amount Due:</span>
                        <strong className="text-accent-gold font-bold text-sm">₦2,700</strong>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/60">Bank Name:</span>
                        <strong className="text-white font-bold">Fidelity Bank</strong>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/60">Account Number:</span>
                        <strong className="text-accent-gold font-mono font-bold tracking-widest">4150052240</strong>
                      </div>
                      <div className="flex flex-col space-y-1 pt-1">
                        <span className="text-white/60">Account Name:</span>
                        <strong className="text-white font-bold leading-normal">
                          The Lord&apos;s Chosen CRM Children Dept Warri
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-4 rounded-xl flex items-start space-x-3 text-xs leading-relaxed text-white/80 border-accent-gold/20">
                    <Phone size={16} className="text-accent-gold shrink-0 mt-0.5" />
                    <p>
                      <strong>Important:</strong> Click the button below to message Harrison (admin) on WhatsApp with your registration details. After making the bank transfer, send your payment confirmation screenshot in that same chat to verify.
                    </p>
                  </div>

                  <MagneticButton
                    onClick={handleWhatsAppRedirect}
                    className="w-full rounded-full bg-gradient-to-r from-accent-gold via-amber-400 to-accent-gold py-4 text-xs font-black uppercase tracking-wider text-primary shadow-[0_0_25px_rgba(242,183,5,0.4)] hover:shadow-[0_0_40px_rgba(242,183,5,0.7)] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send size={16} />
                    <span>Send Proof on WhatsApp</span>
                  </MagneticButton>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
