import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";
import LeadershipSection from "@/components/LeadershipSection";
import doctorImg from "@/assets/doctor-portrait.jpg";
import heroClinicImg from "@/assets/hero-clinic.jpg";

const milestones = [
  {
    year: "2014",
    title: "Founded in Lagos",
    desc: "Beaconhill Smile Group opens its flagship dental practice in Lagos, establishing a new standard of patient experience in Nigeria.",
  },
  {
    year: "2016",
    title: "Multi-Specialty Expansion",
    desc: "Ophthalmology and dermatology departments are added, enabling the group to address diverse patient needs under one trusted roof.",
  },
  {
    year: "2018",
    title: "Beaconhill Foundation Launched",
    desc: "The Foundation is established to deliver free health outreach programs, school screenings, and community care to underserved populations.",
  },
  {
    year: "2020",
    title: "Additional Clinic Locations",
    desc: "New clinics open across Lagos, significantly reducing travel barriers and bringing specialist care closer to more communities.",
  },
  {
    year: "2022",
    title: "25,000+ Patients Served",
    desc: "A landmark milestone — over 25,000 patients treated across all specialties, with 40+ communities reached through outreach programs.",
  },
  {
    year: "2024",
    title: "Pan-African Vision Announced",
    desc: "Beaconhill launches a continent-wide expansion strategy, with plans to open premium multi-specialty clinics across Nigeria and beyond.",
  },
];

const values = [
  { icon: Shield, title: "Excellence", desc: "We set the highest standards in clinical care and patient experience." },
  { icon: Heart, title: "Compassion", desc: "Every patient is treated with empathy, dignity, and respect." },
  { icon: Target, title: "Innovation", desc: "We embrace modern technology and evidence-based practices." },
  { icon: Eye, title: "Integrity", desc: "Transparency and ethical practice guide every decision we make." },
];

const About = () => (
  <Layout>
    {/* ── HERO ── */}
    <section className="relative flex items-center overflow-hidden bg-foreground">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroClinicImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/92 to-foreground/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/40" />
      </div>

      <LeadershipHeroBg />

      <div className="container relative z-10 py-24 flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/25 text-brand-green text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                About Beaconhill
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-white leading-[1.08] mb-6"
            >
              Building Africa's<br />
              <span className="gradient-text-light">Premier Healthcare</span><br />
              Group
            </motion.h1>

            {/* Identity pillars */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              {[
                { icon: Shield, label: "Clinical Excellence" },
                { icon: Heart,  label: "Social Impact" },
                { icon: Globe,  label: "Pan-African Vision" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.12] text-white/65 text-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-brand-green" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Button
                asChild
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 font-semibold shadow-lg"
              >
                <Link to="/partners">Partner With Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-white/65 hover:text-white hover:bg-white/5 rounded-full px-6"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right — vector animation */}
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <div className="relative w-[380px] h-[380px]">

              {/* Outermost slow-spin dashed ring */}
              <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                animate={{ rotate: 360 }} transition={{ duration: 90, ease: "linear", repeat: Infinity }}>
                <circle cx="190" cy="190" r="178" stroke="#7AC143" strokeWidth="1" strokeDasharray="12 18" strokeOpacity="0.18" />
              </motion.svg>

              {/* Second counter-spin ring */}
              <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                animate={{ rotate: -360 }} transition={{ duration: 60, ease: "linear", repeat: Infinity }}>
                <circle cx="190" cy="190" r="148" stroke="white" strokeWidth="0.8" strokeDasharray="6 20" strokeOpacity="0.12" />
              </motion.svg>

              {/* Pulse rings expanding from centre */}
              {[0, 1.4, 2.8].map((delay, i) => (
                <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                  initial={{ scale: 0.4, opacity: 0.5 }}
                  animate={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 3.5, delay, ease: "easeOut", repeat: Infinity }}>
                  <circle cx="190" cy="190" r="100" stroke="#7AC143" strokeWidth="1.5" strokeOpacity="0.5" />
                </motion.svg>
              ))}

              {/* Inner solid ring */}
              <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                animate={{ rotate: 360 }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
                <circle cx="190" cy="190" r="108" stroke="#7AC143" strokeWidth="1.2" strokeDasharray="3 10" strokeOpacity="0.3" />
              </motion.svg>

              {/* Orbiting dots on outer ring */}
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

              {/* Centre glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-24 h-24 rounded-full bg-brand-green/10 blur-2xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                />
              </div>

              {/* Centre icon cluster */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.svg
                  viewBox="0 0 80 80" fill="none" className="w-20 h-20"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Medical cross */}
                  <rect x="30" y="12" width="20" height="56" rx="4" fill="#7AC143" fillOpacity="0.25" />
                  <rect x="12" y="30" width="56" height="20" rx="4" fill="#7AC143" fillOpacity="0.25" />
                  <rect x="32" y="14" width="16" height="52" rx="3" fill="#7AC143" fillOpacity="0.5" />
                  <rect x="14" y="32" width="52" height="16" rx="3" fill="#7AC143" fillOpacity="0.5" />
                  {/* Bright centre dot */}
                  <circle cx="40" cy="40" r="7" fill="#7AC143" opacity="0.9" />
                </motion.svg>
              </div>

              {/* Connecting spokes */}
              <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
                {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180;
                  const x2 = 190 + 108 * Math.cos(rad);
                  const y2 = 190 + 108 * Math.sin(rad);
                  return (
                    <motion.line key={i} x1="190" y1="190" x2={x2} y2={y2}
                      stroke={i % 2 === 0 ? "#7AC143" : "white"} strokeWidth="0.8" strokeOpacity="0.2"
                      strokeDasharray="3 5"
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

    {/* Story */}
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <img src={doctorImg} alt="Beaconhill leadership" loading="lazy" width={800} height={1024} className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/5]" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Our Story</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-6">
              From Vision to Impact
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beaconhill Smile Group was born from a simple yet powerful belief: that every African deserves access to world-class healthcare. What began as a single dental practice has evolved into a multi-specialty healthcare group with departments spanning dental care, ophthalmology, dermatology, and general medicine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our founder envisioned a healthcare ecosystem that combines clinical excellence with community impact — where premium care and social responsibility go hand in hand.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Beaconhill operates multiple clinics across Lagos and is rapidly expanding to serve communities across Nigeria and the broader African continent.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ── Timeline ── */}
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <SectionHeading
          label="Our Journey"
          title={<>Milestones That <span className="text-primary">Shaped Us</span></>}
          description="From a single practice to a multi-specialty healthcare group — each step driven by purpose."
        />

        <div className="relative max-w-2xl mx-auto mt-12 md:mt-16">
          {/* Vertical guide line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-green via-brand-green/30 to-transparent rounded-full" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  {/* Dot on the line */}
                  <div className="shrink-0 relative z-10 w-3 h-3 rounded-full bg-brand-green ring-4 ring-brand-green/15 ring-offset-[3px] ring-offset-background mt-[5px]" />
                  {/* Content */}
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-green mb-1.5">
                      {m.year}
                    </span>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card h-full">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Our Mission</span>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Delivering World-Class Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, patient-centered multi-specialty healthcare services that combine clinical excellence with compassionate care, while expanding access to underserved communities across Africa.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="bg-background rounded-2xl p-8 md:p-10 shadow-card h-full">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Our Vision</span>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Africa's Leading Healthcare Group</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and impactful multi-specialty healthcare group in Africa — setting new standards in clinical outcomes, patient experience, and community health transformation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading label="Our Values" title={<>What <span className="text-primary">Drives</span> Us</>} description="The principles that guide every decision, every treatment, and every interaction." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center p-6 md:p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <LeadershipSection />

    {/* CTA */}
    <section className="py-16 md:py-20 overflow-hidden relative">
      <img src={heroClinicImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
      <div className="container text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-6">Join Our Mission</h2>
          <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto mb-8">Partner with us to expand world-class healthcare across Africa.</p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/partners">Partner With Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default About;
