import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight, Globe2, ExternalLink, Building2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";
import heroClinicImg from "@/assets/hero-clinic.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

interface Location {
  logo: string;
  color: string;
  brand: string;
  sublabel: string;
  address: string;
  phone?: string;
  hours: string;
  services: string[];
  website?: string;
  type: "clinic" | "distribution";
  mapsUrl?: string;
}

const viLocations: Location[] = [
  {
    logo: "/images/business_logo/beaconhill_smile.png",
    color: "#7AC143",
    brand: "Beaconhill Smile Clinic",
    sublabel: "Victoria Island",
    address: "97 Ahmadu Bello Way, Victoria Island, Lagos",
    phone: "+234 1 461 2345",
    hours: "Mon–Sun: 8am – 6pm",
    services: ["Dental", "Cosmetic", "Family Care"],
    type: "clinic",
    mapsUrl: "https://maps.google.com/?q=97+Ahmadu+Bello+Way+Victoria+Island+Lagos",
  },
  {
    logo: "/images/business_logo/exclusive_smile.png",
    color: "#5B21B6",
    brand: "Exclusive Smile",
    sublabel: "Victoria Island",
    address: "12 Agoro Odiyan Street, Off Adeola Odeku, Victoria Island, Lagos",
    hours: "Mon–Fri: 9am – 5pm",
    services: ["Premium Dental", "Executive Care", "Anxiety-Free"],
    type: "clinic",
    mapsUrl: "https://maps.google.com/?q=12+Agoro+Odiyan+Street+Victoria+Island+Lagos",
  },
  {
    logo: "/images/business_logo/Vision_Craft.png",
    color: "#0EA5E9",
    brand: "Vision Craft Eye Clinic",
    sublabel: "Victoria Island",
    address: "97 Ahmadu Bello Way, Victoria Island, Lagos",
    hours: "Mon–Sat: 8am – 5pm",
    services: ["Eye Exams", "Prescriptions", "Optical Surgery"],
    type: "clinic",
    mapsUrl: "https://maps.google.com/?q=97+Ahmadu+Bello+Way+Victoria+Island+Lagos",
  },
  {
    logo: "/images/business_logo/phoenix.png",
    color: "#A65E3B",
    brand: "Phoenix Derma Aesthetics",
    sublabel: "Victoria Island",
    address: "12b Agoro Odiyan Street, Off Adeola Odeku, Victoria Island, Lagos",
    hours: "Mon–Sat: 9am – 5pm",
    services: ["Dermatology", "Aesthetics", "Skin Health"],
    type: "clinic",
    mapsUrl: "https://maps.google.com/?q=12b+Agoro+Odiyan+Street+Victoria+Island+Lagos",
  },
  {
    logo: "/images/business_logo/clearsound.png",
    color: "#1F6F78",
    brand: "ClearSound ENT",
    sublabel: "Victoria Island",
    address: "Victoria Island, Lagos",
    hours: "Mon–Fri: 8am – 5pm",
    services: ["ENT", "Hearing Care", "Diagnosis"],
    type: "clinic",
    mapsUrl: "https://maps.google.com/?q=Victoria+Island+Lagos",
  },
  {
    logo: "/images/business_logo/prima.png",
    color: "#2563EB",
    brand: "Prima Medical",
    sublabel: "Victoria Island",
    address: "Victoria Island, Lagos",
    hours: "By Appointment",
    services: ["Behavioral Health", "Mental Wellness", "Concierge"],
    type: "clinic",
    mapsUrl: "https://maps.google.com/?q=Victoria+Island+Lagos",
  },
];

const ikejaLocations: Location[] = [
  {
    logo: "/images/business_logo/beaconhill_smile.png",
    color: "#7AC143",
    brand: "Beaconhill Smile Clinic",
    sublabel: "Ikeja",
    address: "50–52 Toyin Street, Ikeja, Lagos",
    phone: "+234 1 461 2346",
    hours: "Mon–Sun: 8am – 6pm",
    services: ["Dental", "Cosmetic", "Family Care"],
    type: "clinic",
    mapsUrl: "https://maps.google.com/?q=50+Toyin+Street+Ikeja+Lagos",
  },
  {
    logo: "/images/business_logo/northshore.png",
    color: "#0E7490",
    brand: "Northshore Health",
    sublabel: "Ikeja",
    address: "Lagos, Nigeria",
    hours: "Mon–Fri: 9am – 5pm",
    services: ["FMCG Distribution", "Wellness Products", "Consumer Health"],
    type: "distribution",
    mapsUrl: "https://maps.google.com/?q=Ikeja+Lagos+Nigeria",
  },
];

const usaLocations: Location[] = [
  {
    logo: "/images/logo.png",
    color: "#0369A1",
    brand: "Beaconhill Global LLC",
    sublabel: "Morrow, Georgia",
    address: "5916 Jonesboro Road, Morrow, GA 30260",
    phone: "+1 770-961-4967",
    hours: "Mon–Fri: 9am – 5pm",
    services: ["Vision Care", "Eye Exams", "Optical", "Glaucoma Management", "Pediatric Eye Care"],
    type: "clinic",
    website: "https://beaconhillglobaleye.com",
    mapsUrl: "https://maps.google.com/?q=5916+Jonesboro+Road+Morrow+GA+30260",
  },
];

function LocationCard({ loc }: { loc: Location }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: `0 20px 48px -8px ${loc.color}22` }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="relative bg-background rounded-2xl border border-border/50 overflow-hidden flex flex-col shadow-card"
    >
      {/* Top color strip */}
      <div className="h-1 w-full" style={{ backgroundColor: loc.color }} />

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">

        {/* Header: logo + brand + type badge */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center p-2 shrink-0 border"
              style={{ backgroundColor: `${loc.color}12`, borderColor: `${loc.color}22` }}
            >
              <img src={loc.logo} alt={loc.brand} className="w-full h-full object-contain" />
            </div>
            <h3 className="font-display font-bold text-base text-foreground leading-snug">{loc.brand}</h3>
          </div>
          <span
            className="shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mt-0.5"
            style={{
              backgroundColor: loc.type === "distribution" ? "hsl(198 72% 14% / 0.08)" : `${loc.color}12`,
              color: loc.type === "distribution" ? "hsl(198 72% 32%)" : loc.color,
              border: `1px solid ${loc.color}22`,
            }}
          >
            {loc.type === "distribution" ? "Distribution" : "Clinic"}
          </span>
        </div>

        {/* Details */}
        <div className="space-y-2.5 text-sm text-muted-foreground mb-5 flex-1">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: loc.color }} />
            <span className="leading-snug">{loc.address}</span>
          </div>
          {loc.phone && (
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 shrink-0" style={{ color: loc.color }} />
              <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
                {loc.phone}
              </a>
            </div>
          )}
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 shrink-0" style={{ color: loc.color }} />
            <span>{loc.hours}</span>
          </div>
        </div>

        {/* Service tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {loc.services.map((s) => (
            <span
              key={s}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full"
              style={{ backgroundColor: `${loc.color}10`, color: loc.color }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-2 mt-auto">
          <Button asChild className="flex-1 h-9 text-sm font-semibold rounded-xl text-white border-0"
            style={{ backgroundColor: loc.color }}
          >
            <Link to="/contact">
              Book <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
          </Button>
          {loc.mapsUrl && (
            <a
              href={loc.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-xl border border-border hover:border-primary hover:text-primary transition-colors shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const Clinics = () => (
  <Layout>
    {/* ── HERO ── */}
    <section className="relative flex items-center overflow-hidden bg-foreground">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroClinicImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/92 to-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/40" />
      </div>

      <LeadershipHeroBg />

      <div className="container relative z-10 py-24 flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/25 text-primary-foreground/90 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Our Locations
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-white leading-[1.08] mb-6"
            >
              Premium Care,<br />
              <span className="gradient-text-light">Close to You</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-white/55 text-lg md:text-xl leading-relaxed max-w-lg mb-10"
            >
              Seven specialised healthcare brands across Nigeria and the United States — each designed to deliver exceptional care at every touchpoint.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              {[
                { icon: Building2, label: "7 Healthcare Brands" },
                { icon: Globe2,    label: "Nigeria · USA" },
                { icon: Heart,     label: "50,000+ Patients" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.12] text-white/65 text-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-semibold shadow-lg"
              >
                <Link to="/contact">Book an Appointment <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-white/65 hover:text-white hover:bg-white/5 rounded-full px-6"
              >
                <Link to="/businesses">Our Businesses</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right — animated location ring graphic */}
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

              {/* Inner ring */}
              <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                animate={{ rotate: 360 }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
                <circle cx="190" cy="190" r="108" stroke="hsl(212,68%,55%)" strokeWidth="1.2" strokeDasharray="3 10" strokeOpacity="0.3" />
              </motion.svg>

              {/* Orbiting dots — each represents a location */}
              {[0, 51, 102, 153, 204, 255, 306, 357].map((deg, i) => (
                <motion.svg key={`od-${i}`} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                  animate={{ rotate: 360 }} transition={{ duration: 28 + i * 3, ease: "linear", repeat: Infinity }}>
                  <circle
                    cx={190 + 148 * Math.cos((deg * Math.PI) / 180)}
                    cy={190 + 148 * Math.sin((deg * Math.PI) / 180)}
                    r={i % 2 === 0 ? 4 : 2.5}
                    fill={i % 2 === 0 ? "hsl(212,68%,55%)" : "white"}
                    opacity={i % 2 === 0 ? 0.7 : 0.4}
                  />
                </motion.svg>
              ))}

              {/* Spokes */}
              <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180;
                  const x2 = 190 + 108 * Math.cos(rad);
                  const y2 = 190 + 108 * Math.sin(rad);
                  return (
                    <motion.line key={i} x1="190" y1="190" x2={x2} y2={y2}
                      stroke={i % 2 === 0 ? "hsl(212,68%,55%)" : "white"} strokeWidth="0.8" strokeOpacity="0.2"
                      strokeDasharray="3 5"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.08 }}
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

              {/* Centre MapPin icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center justify-center w-20 h-20"
                >
                  <MapPin className="w-12 h-12" style={{ color: "hsl(212,68%,65%)", opacity: 0.85 }} strokeWidth={1.5} />
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ── NIGERIA LOCATIONS ── */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container">

        {/* Country header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#008751]/10 flex items-center justify-center shrink-0">
              <div className="flex gap-0.5 items-center">
                <div className="w-1.5 h-4 rounded-sm bg-[#008751]" />
                <div className="w-1.5 h-4 rounded-sm bg-white border border-border/40" />
                <div className="w-1.5 h-4 rounded-sm bg-[#008751]" />
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Nigeria · Lagos</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
            Our Lagos <span className="gradient-text">Network</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Seven specialised brands operating across Victoria Island and Ikeja — bringing world-class healthcare within reach of every Lagosian.
          </p>
        </AnimatedSection>

        {/* Victoria Island */}
        <AnimatedSection className="mb-6">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-border/60" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/6 border border-primary/15">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Victoria Island</span>
            </div>
            <div className="h-px flex-1 bg-border/60" />
          </div>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {viLocations.map((loc, i) => (
            <LocationCard key={`vi-${i}`} loc={loc} />
          ))}
        </motion.div>

        {/* Ikeja */}
        <AnimatedSection className="mb-6">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-border/60" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/6 border border-primary/15">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Ikeja</span>
            </div>
            <div className="h-px flex-1 bg-border/60" />
          </div>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {ikejaLocations.map((loc, i) => (
            <LocationCard key={`ikeja-${i}`} loc={loc} />
          ))}
        </motion.div>

      </div>
    </section>

    {/* ── USA LOCATIONS ── */}
    <section className="py-20 md:py-24" style={{ backgroundColor: "hsl(198 72% 98%)" }}>
      <div className="container">
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#0369A1]/10 flex items-center justify-center shrink-0">
              {/* USA flag simplified */}
              <div className="flex flex-col gap-px">
                {[0,1,2].map((i) => (
                  <div key={i} className="flex gap-px">
                    <div className="w-1.5 h-1 rounded-sm" style={{ backgroundColor: i % 2 === 0 ? "#B22234" : "white", border: i % 2 !== 0 ? "0.5px solid #ccc" : "none" }} />
                    <div className="w-1.5 h-1 rounded-sm" style={{ backgroundColor: i % 2 === 0 ? "white" : "#B22234", border: i % 2 === 0 ? "0.5px solid #ccc" : "none" }} />
                  </div>
                ))}
              </div>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">United States · Georgia</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
            Our US <span className="gradient-text">Presence</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Beaconhill Global LLC extends our mission to the United States, delivering premium vision care to the Morrow, Georgia community.
          </p>
        </AnimatedSection>

        <motion.div
          className="max-w-xl"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {usaLocations.map((loc, i) => (
            <LocationCard key={`us-${i}`} loc={loc} />
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── EXPANSION CTA ── */}
    <section className="py-16 md:py-20 overflow-hidden relative">
      <img src={heroClinicImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
      <div className="container text-center relative z-10">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-[0.18em] mb-6">
            <Globe2 className="w-3.5 h-3.5" />
            Expanding Globally
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Growing Across Africa & Beyond
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg">
            New clinics and partnerships are in development. Join us as we build the continent's most trusted healthcare network.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link to="/contact">Book an Appointment <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" className="font-semibold bg-transparent border border-white/30 text-white hover:bg-white/10">
              <Link to="/partners">Partner With Us</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Clinics;
