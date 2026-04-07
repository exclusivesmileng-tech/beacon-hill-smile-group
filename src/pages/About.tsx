import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";
import LeadershipSection from "@/components/LeadershipSection";
import SectionHeading from "@/components/SectionHeading";
import heroClinicImg from "@/assets/hero-clinic.jpg";
import dermatologyImg from "@/assets/dermatology.jpg";
import eyeCareImg from "@/assets/eye-care.jpg";

/* ─── Data ───────────────────────────────────────────────── */

const heroSlides = [heroClinicImg, dermatologyImg, eyeCareImg];

const milestones = [
  { year: "2014", title: "Founded in Lagos",            desc: "Beaconhill Smile Group opens its flagship dental practice in Lagos, establishing a new standard of patient experience in Nigeria." },
  { year: "2016", title: "Multi-Specialty Expansion",   desc: "Ophthalmology and dermatology departments are added, enabling the group to address diverse patient needs under one trusted roof." },
  { year: "2018", title: "Beaconhill Foundation Launched", desc: "The Foundation is established to deliver free health outreach programs, school screenings, and community care to underserved populations." },
  { year: "2020", title: "Additional Clinic Locations", desc: "New clinics open across Lagos, significantly reducing travel barriers and bringing specialist care closer to more communities." },
  { year: "2022", title: "25,000+ Patients Served",     desc: "A landmark milestone — over 25,000 patients treated across all specialties, with 40+ communities reached through outreach programs." },
  { year: "2024", title: "Pan-African Vision Announced",desc: "Beaconhill launches a continent-wide expansion strategy, with plans to open premium multi-specialty clinics across Nigeria and beyond." },
];

const values = [
  { icon: Shield, title: "Excellence",  desc: "We set the highest standards in clinical care and patient experience." },
  { icon: Heart,  title: "Compassion",  desc: "Every patient is treated with empathy, dignity, and respect." },
  { icon: Target, title: "Innovation",  desc: "We embrace modern technology and evidence-based practices." },
  { icon: Eye,    title: "Integrity",   desc: "Transparency and ethical practice guide every decision we make." },
];

/* ─── Animation Primitives ───────────────────────────────── */

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

const stagger = (delay = 0, gap = 0.1) => ({
  hidden: {},
  show:   { transition: { staggerChildren: gap, delayChildren: delay } },
});

const viewport = { once: true, margin: "-60px" } as const;

/* ─── Page ───────────────────────────────────────────────── */

const About = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  /* Timeline line draw ref */
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineInView  = useInView(timelineRef, { once: true, margin: "-120px" });

  return (
    <Layout>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative flex items-center overflow-hidden bg-[hsl(212,68%,10%)]">
        {/* Sliding background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={current}
              src={heroSlides[current]}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 0.55, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(212,68%,10%)] via-[hsl(212,68%,14%)]/80 to-[hsl(212,68%,18%)]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(212,68%,10%)]/70 via-transparent to-[hsl(212,68%,14%)]/30" />
        </div>

        <LeadershipHeroBg />

        <div className="container relative z-10 py-28 md:py-36">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">

            {/* Text — staggered cascade */}
            <motion.div
              variants={stagger(0, 0.13)}
              initial="hidden"
              animate="show"
            >
              {/* Badge */}
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/25 text-brand-green text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  About Beaconhill
                </span>
              </motion.div>

              {/* Headline — each line staggers */}
              <div className="overflow-hidden mb-6">
                {["Building Africa's", "Premier Healthcare", "Group"].map((line, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 48 },
                      show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease, delay: i * 0.08 } },
                    }}
                  >
                    <h1 className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-white leading-[1.1]">
                      {i === 1 ? <span className="gradient-text-light">{line}</span> : line}
                    </h1>
                  </motion.div>
                ))}
              </div>

              {/* Pillars */}
              <motion.div variants={stagger(0, 0.09)} className="flex flex-wrap gap-3 mb-12">
                {[
                  { icon: Shield, label: "Clinical Excellence" },
                  { icon: Heart,  label: "Social Impact" },
                  { icon: Globe,  label: "Pan-African Vision" },
                ].map(({ icon: Icon, label }, i) => (
                  <motion.span
                    key={label}
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.12] text-white/65 text-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-brand-green" />
                    {label}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 flex-wrap">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                  <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 font-semibold shadow-lg">
                    <Link to="/partners">Partner With Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                  <Button asChild variant="ghost" size="lg" className="text-white/65 hover:text-white hover:bg-white/5 rounded-full px-6">
                    <Link to="/services">Our Services</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* SVG orbit — unchanged, just wrapped */}
            <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
              <div className="relative w-[380px] h-[380px]">
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                  animate={{ rotate: 360 }} transition={{ duration: 90, ease: "linear", repeat: Infinity }}>
                  <circle cx="190" cy="190" r="178" stroke="#7AC143" strokeWidth="1" strokeDasharray="12 18" strokeOpacity="0.18" />
                </motion.svg>
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                  animate={{ rotate: -360 }} transition={{ duration: 60, ease: "linear", repeat: Infinity }}>
                  <circle cx="190" cy="190" r="148" stroke="white" strokeWidth="0.8" strokeDasharray="6 20" strokeOpacity="0.12" />
                </motion.svg>
                {[0, 1.4, 2.8].map((delay, i) => (
                  <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                    initial={{ scale: 0.4, opacity: 0.5 }}
                    animate={{ scale: 1.05, opacity: 0 }}
                    transition={{ duration: 3.5, delay, ease: "easeOut", repeat: Infinity }}>
                    <circle cx="190" cy="190" r="100" stroke="#7AC143" strokeWidth="1.5" strokeOpacity="0.5" />
                  </motion.svg>
                ))}
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                  animate={{ rotate: 360 }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
                  <circle cx="190" cy="190" r="108" stroke="#7AC143" strokeWidth="1.2" strokeDasharray="3 10" strokeOpacity="0.3" />
                </motion.svg>
                {[0, 72, 144, 216, 288].map((deg, i) => (
                  <motion.svg key={`od-${i}`} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                    animate={{ rotate: 360 }} transition={{ duration: 28 + i * 4, ease: "linear", repeat: Infinity }}>
                    <circle
                      cx={190 + 148 * Math.cos((deg * Math.PI) / 180)}
                      cy={190 + 148 * Math.sin((deg * Math.PI) / 180)}
                      r={i % 2 === 0 ? 3.5 : 2.5}
                      fill={i % 2 === 0 ? "#7AC143" : "white"}
                      opacity={i % 2 === 0 ? 0.7 : 0.4}
                    />
                  </motion.svg>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div className="w-24 h-24 rounded-full bg-brand-green/10 blur-2xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.svg viewBox="0 0 80 80" fill="none" className="w-20 h-20"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}>
                    <rect x="30" y="12" width="20" height="56" rx="4" fill="#7AC143" fillOpacity="0.25" />
                    <rect x="12" y="30" width="56" height="20" rx="4" fill="#7AC143" fillOpacity="0.25" />
                    <rect x="32" y="14" width="16" height="52" rx="3" fill="#7AC143" fillOpacity="0.5" />
                    <rect x="14" y="32" width="52" height="16" rx="3" fill="#7AC143" fillOpacity="0.5" />
                    <circle cx="40" cy="40" r="7" fill="#7AC143" opacity="0.9" />
                  </motion.svg>
                </div>
                <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180;
                    return (
                      <motion.line key={i} x1="190" y1="190"
                        x2={190 + 108 * Math.cos(rad)} y2={190 + 108 * Math.sin(rad)}
                        stroke={i % 2 === 0 ? "#7AC143" : "white"} strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3 5"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                      />
                    );
                  })}
                </motion.svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image — scale + fade from left */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-elevated"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, ease }}
              >
                <img
                  src="/images/group.png"
                  alt="Beaconhill team"
                  loading="lazy"
                  className="w-full object-contain bg-foreground/5"
                />
              </motion.div>
            </motion.div>

            {/* Text — staggered paragraphs */}
            <motion.div
              variants={stagger(0.05, 0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.span variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
                Our Story
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-6">
                From Vision to Impact
              </motion.h2>
              {[
                "Beaconhill Smile Group was born from a simple yet powerful belief: that every African deserves access to world-class healthcare. What began as a single dental practice has evolved into a multi-specialty healthcare group with departments spanning dental care, ophthalmology, dermatology, and general medicine.",
                "Our founder envisioned a healthcare ecosystem that combines clinical excellence with community impact — where premium care and social responsibility go hand in hand.",
                "Today, Beaconhill operates multiple clinics across Lagos and is rapidly expanding to serve communities across Nigeria and the broader African continent.",
              ].map((text, i) => (
                <motion.p key={i} variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                  {text}
                </motion.p>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <motion.div
            variants={stagger(0, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                label="Our Journey"
                title={<>Milestones That <span className="text-primary">Shaped Us</span></>}
                description="From a single practice to a multi-specialty healthcare group — each step driven by purpose."
              />
            </motion.div>
          </motion.div>

          <div className="relative max-w-2xl mx-auto mt-12 md:mt-16" ref={timelineRef}>

            {/* Animated vertical line */}
            <motion.div
              className="absolute left-[5px] top-2 bottom-2 w-0.5 rounded-full bg-gradient-to-b from-brand-green via-brand-green/40 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: lineInView ? 1 : 0 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    show:   { opacity: 1, x: 0, transition: { duration: 0.65, ease, delay: i * 0.08 } },
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <div className="flex gap-6 items-start">
                    {/* Dot — pops in with spring */}
                    <motion.div
                      className="shrink-0 relative z-10 w-3 h-3 rounded-full bg-brand-green ring-4 ring-brand-green/15 ring-offset-[3px] ring-offset-background mt-[5px]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 360, damping: 18, delay: i * 0.08 + 0.1 }}
                    />
                    {/* Content */}
                    <div>
                      <motion.span
                        className="block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-green mb-1.5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                      >
                        {m.year}
                      </motion.span>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">{m.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission — slides from left */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div
                className="bg-background rounded-2xl p-8 md:p-10 shadow-card h-full"
                whileHover={{ y: -4, boxShadow: "0 16px 40px -8px hsl(212 68% 32% / 0.12)" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Target className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Our Mission</span>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">Delivering World-Class Care</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional, patient-centered multi-specialty healthcare services that combine clinical excellence with compassionate care, while expanding access to underserved communities across Africa.
                </p>
              </motion.div>
            </motion.div>

            {/* Vision — slides from right */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div
                className="bg-background rounded-2xl p-8 md:p-10 shadow-card h-full"
                whileHover={{ y: -4, boxShadow: "0 16px 40px -8px hsl(198 72% 32% / 0.12)" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Globe className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Our Vision</span>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">Africa's Leading Healthcare Group</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and impactful multi-specialty healthcare group in Africa — setting new standards in clinical outcomes, patient experience, and community health transformation.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          VALUES
      ══════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <SectionHeading
              label="Our Values"
              title={<>What <span className="text-primary">Drives</span> Us</>}
              description="The principles that guide every decision, every treatment, and every interaction."
            />
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={stagger(0, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.94 },
                  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.65, ease } },
                }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px -8px hsl(212 68% 32% / 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="text-center p-6 md:p-8 rounded-2xl bg-background border border-border/40"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-5"
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 18, delay: i * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.12, rotate: 6 }}
                >
                  <v.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          LEADERSHIP
      ══════════════════════════════════════════════ */}
      <LeadershipSection />

      {/* ══════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 overflow-hidden relative">
        <img
          src={heroClinicImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />

        {/* Subtle animated orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-green/10 blur-[80px] pointer-events-none"
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container text-center relative z-10">
          <motion.div
            variants={stagger(0, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-6 leading-tight"
            >
              Join Our Mission
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-primary-foreground/70 text-lg max-w-lg mx-auto mb-8"
            >
              Partner with us to expand world-class healthcare across Africa.
            </motion.p>
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-block"
            >
              <Button asChild size="lg" variant="secondary" className="font-semibold rounded-xl px-10">
                <Link to="/partners">Partner With Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
