import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, Clock, Send, ArrowRight,
  Building2, Globe2, CheckCircle2, ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";
import { useToast } from "@/hooks/use-toast";
import heroClinicImg from "@/assets/hero-clinic.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const locations = [
  {
    label: "Victoria Island, Lagos",
    address: "97 Ahmadu Bello Way, Victoria Island, Lagos",
    phone: "+234 1 461 2345",
    hours: "Mon – Sun: 8am – 6pm",
    color: "#7AC143",
    flag: "🇳🇬",
  },
  {
    label: "Ikeja, Lagos",
    address: "50–52 Toyin Street, Ikeja, Lagos",
    phone: "+234 1 461 2346",
    hours: "Mon – Sun: 8am – 6pm",
    color: "#7AC143",
    flag: "🇳🇬",
  },
  {
    label: "Morrow, Georgia — USA",
    address: "5916 Jonesboro Road, Morrow, GA 30260",
    phone: "+1 770-961-4967",
    hours: "Mon – Fri: 9am – 5pm",
    color: "#0369A1",
    flag: "🇺🇸",
  },
];

const services = [
  { value: "dental", label: "Dental Care", brand: "Beaconhill Smile" },
  { value: "premium-dental", label: "Premium Dental", brand: "Exclusive Smile" },
  { value: "eye", label: "Eye Care", brand: "Vision Craft / Beaconhill Global" },
  { value: "dermatology", label: "Dermatology & Aesthetics", brand: "Phoenix Derma" },
  { value: "ent", label: "ENT", brand: "ClearSound" },
  { value: "behavioral", label: "Behavioral Health", brand: "Prima Medical" },
  { value: "wellness", label: "Wellness Products", brand: "Northshore Health" },
  { value: "general", label: "General Inquiry", brand: "" },
];

const faqs = [
  {
    q: "Do you accept walk-ins?",
    a: "Yes, walk-ins are welcome at all our clinic locations. However, booking an appointment in advance ensures a shorter wait time and helps us prepare for your visit.",
  },
  {
    q: "What insurance plans do you accept?",
    a: "We work with a wide range of HMO partners across Nigeria. Please contact your nearest clinic or call us to confirm your specific plan.",
  },
  {
    q: "How soon can I get an appointment?",
    a: "For most services, we can schedule you within 24–48 hours. Urgent cases are accommodated on the same day where possible.",
  },
  {
    q: "Can I book for the US clinic online?",
    a: "Yes. The Beaconhill Global Eye Clinic in Morrow, Georgia accepts appointments by phone at +1 770-961-4967 or via their website.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/60 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-secondary/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display font-semibold text-foreground text-sm">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

const mapLocations = [
  {
    label: "Victoria Island",
    sublabel: "Lagos, Nigeria",
    color: "#7AC143",
    flag: "🇳🇬",
    embed: "https://maps.google.com/maps?q=97+Ahmadu+Bello+Way+Victoria+Island+Lagos+Nigeria&output=embed&z=15",
  },
  {
    label: "Ikeja",
    sublabel: "Lagos, Nigeria",
    color: "#7AC143",
    flag: "🇳🇬",
    embed: "https://maps.google.com/maps?q=50+Toyin+Street+Ikeja+Lagos+Nigeria&output=embed&z=15",
  },
  {
    label: "Morrow, Georgia",
    sublabel: "United States",
    color: "#0369A1",
    flag: "🇺🇸",
    embed: "https://maps.google.com/maps?q=5916+Jonesboro+Road+Morrow+GA+30260&output=embed&z=15",
  },
];

function MapSection() {
  const [active, setActive] = useState(0);
  const loc = mapLocations[active];
  return (
    <section className="py-20 md:py-24 bg-background border-t border-border/40">
      <div className="container">
        <AnimatedSection className="mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Find Us</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
            We're on the <span className="gradient-text">Map</span>
          </h2>
        </AnimatedSection>

        {/* Location tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {mapLocations.map((m, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200"
              style={{
                backgroundColor: active === i ? `${m.color}15` : "transparent",
                borderColor: active === i ? `${m.color}50` : "hsl(214 20% 82%)",
                color: active === i ? m.color : "hsl(215 16% 47%)",
              }}
            >
              <span>{m.flag}</span>
              {m.label}
              <span className="text-xs font-normal opacity-70">· {m.sublabel}</span>
            </button>
          ))}
        </div>

        {/* Map iframe */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="relative rounded-2xl overflow-hidden border border-border/50 shadow-card"
          style={{ height: 420 }}
        >
          {/* Coloured top strip matching active location */}
          <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ backgroundColor: loc.color }} />
          <iframe
            title={`Map — ${loc.label}`}
            src={loc.embed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Address line below map */}
        <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 shrink-0" style={{ color: loc.color }} />
            <span>{locations[active].address}</span>
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(locations[active].address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
            style={{ color: loc.color }}
          >
            Open in Google Maps
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", location: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Request Sent!", description: "We'll get back to you within 24 hours." });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", location: "", service: "", message: "" });
    }, 3000);
  };

  const field = "flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors";

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative flex items-center overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <img src={heroClinicImg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/92 to-foreground/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/40" />
        </div>
        <LeadershipHeroBg />

        <div className="container relative z-10 py-24">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

            {/* Left — text */}
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/25 text-primary-foreground/90 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Contact Us
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-white leading-[1.08] mb-6"
              >
                Book an Appointment<br />
                <span className="gradient-text-light">We're Here for You</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg"
              >
                Whether you're booking a routine check-up or a specialist consultation, our team across Nigeria and the US is ready to assist you.
              </motion.p>

              {/* Quick contact pills */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <a href="tel:+2341612345" className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/8 border border-white/15 text-white/75 text-sm hover:bg-white/14 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary" /> +234 1 461 2345
                </a>
                <a href="tel:+17709614967" className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/8 border border-white/15 text-white/75 text-sm hover:bg-white/14 hover:text-white transition-colors">
                  <Globe2 className="w-3.5 h-3.5 text-[#0369A1]" /> +1 770-961-4967 (US)
                </a>
                <a href="mailto:info@beaconhillsmile.com" className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/8 border border-white/15 text-white/75 text-sm hover:bg-white/14 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary" /> info@beaconhillsmile.com
                </a>
              </motion.div>
            </div>

            {/* Right — animated vector graphic */}
            <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
              <div className="relative w-[380px] h-[380px]">

                {/* Outer slow-spin dashed ring */}
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                  animate={{ rotate: 360 }} transition={{ duration: 90, ease: "linear", repeat: Infinity }}>
                  <circle cx="190" cy="190" r="178" stroke="hsl(212,68%,55%)" strokeWidth="1" strokeDasharray="12 18" strokeOpacity="0.18" />
                </motion.svg>

                {/* Counter-spin ring */}
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                  animate={{ rotate: -360 }} transition={{ duration: 60, ease: "linear", repeat: Infinity }}>
                  <circle cx="190" cy="190" r="148" stroke="white" strokeWidth="0.8" strokeDasharray="6 20" strokeOpacity="0.12" />
                </motion.svg>

                {/* Pulse rings */}
                {[0, 1.4, 2.8].map((delay, i) => (
                  <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                    initial={{ scale: 0.4, opacity: 0.5 }}
                    animate={{ scale: 1.05, opacity: 0 }}
                    transition={{ duration: 3.5, delay, ease: "easeOut", repeat: Infinity }}>
                    <circle cx="190" cy="190" r="100" stroke="hsl(212,68%,55%)" strokeWidth="1.5" strokeOpacity="0.5" />
                  </motion.svg>
                ))}

                {/* Inner spinning ring */}
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                  animate={{ rotate: 360 }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
                  <circle cx="190" cy="190" r="108" stroke="hsl(212,68%,55%)" strokeWidth="1.2" strokeDasharray="3 10" strokeOpacity="0.3" />
                </motion.svg>

                {/* Orbiting dots */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <motion.svg key={`od-${i}`} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                    animate={{ rotate: 360 }} transition={{ duration: 28 + i * 4, ease: "linear", repeat: Infinity }}>
                    <circle
                      cx={190 + 148 * Math.cos((deg * Math.PI) / 180)}
                      cy={190 + 148 * Math.sin((deg * Math.PI) / 180)}
                      r={i % 2 === 0 ? 4 : 2.5}
                      fill={i % 2 === 0 ? "hsl(212,68%,55%)" : "white"}
                      opacity={i % 2 === 0 ? 0.7 : 0.4}
                    />
                  </motion.svg>
                ))}

                {/* Connecting spokes */}
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180;
                    const x2 = 190 + 108 * Math.cos(rad);
                    const y2 = 190 + 108 * Math.sin(rad);
                    return (
                      <motion.line key={i} x1="190" y1="190" x2={x2} y2={y2}
                        stroke={i % 2 === 0 ? "hsl(212,68%,55%)" : "white"} strokeWidth="0.8" strokeOpacity="0.2"
                        strokeDasharray="3 5"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                      />
                    );
                  })}
                </motion.svg>

                {/* Centre glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 rounded-full blur-2xl"
                    style={{ backgroundColor: "hsl(212,68%,55%)" }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                  />
                </div>

                {/* Centre icon — phone + envelope cross */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 80 80" fill="none" className="w-20 h-20"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {/* Envelope body */}
                    <rect x="10" y="22" width="60" height="40" rx="5" fill="hsl(212,68%,55%)" fillOpacity="0.2" stroke="hsl(212,68%,55%)" strokeOpacity="0.5" strokeWidth="1.5" />
                    {/* Envelope flap */}
                    <path d="M10 26 L40 46 L70 26" stroke="hsl(212,68%,55%)" strokeOpacity="0.7" strokeWidth="1.5" fill="none" />
                    {/* Centre dot */}
                    <circle cx="40" cy="40" r="5" fill="hsl(212,68%,55%)" opacity="0.9" />
                  </motion.svg>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FORM + CONTACT INFO ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 xl:gap-16 items-start">

            {/* ── LEFT: Form ── */}
            <AnimatedSection>
              <div className="bg-background rounded-2xl border border-border/50 shadow-card p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-1">Send a Request</h2>
                  <p className="text-muted-foreground text-sm">Fill in the form below and we'll confirm your booking within 24 hours.</p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">Request Sent!</h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Thank you. A member of our team will reach out within 24 hours to confirm your appointment.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Full Name <span className="text-accent">*</span></label>
                        <Input className="h-11 rounded-xl" placeholder="Your full name" required
                          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Email Address <span className="text-accent">*</span></label>
                        <Input className="h-11 rounded-xl" type="email" placeholder="your@email.com" required
                          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Phone Number</label>
                        <Input className="h-11 rounded-xl" type="tel" placeholder="+234 xxx xxx xxxx"
                          value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Preferred Location</label>
                        <select className={field}
                          value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })}>
                          <option value="">Select a location</option>
                          <option value="vi">Victoria Island, Lagos</option>
                          <option value="ikeja">Ikeja, Lagos</option>
                          <option value="usa">Morrow, Georgia (USA)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Service Required</label>
                      <select className={field}
                        value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}{s.brand ? ` — ${s.brand}` : ""}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Message / Additional Notes</label>
                      <Textarea
                        className="rounded-xl resize-none"
                        placeholder="Tell us about your needs, preferred dates, or any other details…"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto font-semibold h-12 px-10 rounded-xl">
                      <Send className="mr-2 w-4 h-4" /> Send Appointment Request
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* ── RIGHT: Contact Info ── */}
            <AnimatedSection delay={0.15} className="space-y-5">

              <h3 className="font-display font-bold text-xl text-foreground">Our Locations</h3>

              {locations.map((loc, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="bg-background rounded-2xl border border-border/50 shadow-card overflow-hidden"
                >
                  <div className="h-1 w-full" style={{ backgroundColor: loc.color }} />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-base">{loc.flag}</span>
                      <span className="font-display font-semibold text-sm text-foreground">{loc.label}</span>
                    </div>
                    <div className="space-y-2.5 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: loc.color }} />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 shrink-0" style={{ color: loc.color }} />
                        <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
                          {loc.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 shrink-0" style={{ color: loc.color }} />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Email */}
              <div className="bg-secondary/60 rounded-2xl p-5 border border-border/40">
                <div className="flex items-center gap-3 mb-1">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-display font-semibold text-sm text-foreground">Email Us</span>
                </div>
                <a href="mailto:info@beaconhillsmile.com" className="text-sm text-muted-foreground hover:text-primary transition-colors ml-7">
                  info@beaconhillsmile.com
                </a>
              </div>

            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MAPS ── */}
      <MapSection />

      {/* ── FAQ ── */}
      <section className="py-20 md:py-24" style={{ backgroundColor: "hsl(198 72% 98%)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_560px] gap-12 xl:gap-20 items-start">

            <AnimatedSection>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">FAQs</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">
                Common <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Everything you need to know before your first visit. Still have questions? Reach out and we'll help.
              </p>
              <Button asChild variant="outline" className="rounded-xl">
                <Link to="/clinics">View All Locations <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 overflow-hidden relative">
        <img src={heroClinicImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
        <div className="container text-center relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-[0.18em] mb-6">
              <Building2 className="w-3.5 h-3.5" /> 7 Healthcare Brands
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Your Health Is Our Priority
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg">
              From Lagos to Georgia — premium, compassionate care is always within reach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/clinics">Find a Clinic <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" className="font-semibold bg-transparent border border-white/30 text-white hover:bg-white/10">
                <Link to="/businesses">Our Businesses</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
