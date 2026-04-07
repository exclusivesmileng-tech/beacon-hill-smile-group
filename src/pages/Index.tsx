import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, MapPin, Users, Building, ShieldCheck, Globe2, Stethoscope, Eye, Sparkles, Leaf, Brain, Lock, Smile, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import BusinessCarousel from "@/components/BusinessCarousel";
import LeadershipSection from "@/components/LeadershipSection";
import SectionHeading from "@/components/SectionHeading";
import FoundationGallery from "@/components/FoundationGallery";
import foundationImg from "@/assets/foundation-outreach.jpg";
import doctorImg from "@/assets/doctor-portrait.jpg";
import heroClinicImg from "@/assets/hero-clinic.jpg";

const impactStats = [
  { value: "25,000+", label: "Smiles Restored",   icon: Heart },
  { value: "40+",     label: "Communities Reached", icon: Users },
  { value: "100+",    label: "School Programs",     icon: Building },
];

const pillars = [
  { icon: ShieldCheck, title: "Clinical Excellence", desc: "World-class dental, eye, dermatology, and medical services under one trusted group." },
  { icon: Heart,       title: "Compassion-Led Care",  desc: "Founded on excellence, compassion, and innovation — putting patients first always." },
  { icon: Globe2,      title: "Pan-African Vision",   desc: "Building a network of premium clinics that serve as beacons of quality healthcare across Africa and beyond." },
];

const ecosystemServices = [
  {
    icon: Smile,
    title: "Dental Care",
    desc: "Advanced, patient-centered oral healthcare — from routine check-ups to full smile transformations.",
    premium: false,
  },
  {
    icon: Eye,
    title: "Vision Care",
    desc: "Comprehensive eye care and optical services for clear, lasting vision.",
    premium: false,
  },
  {
    icon: Stethoscope,
    title: "Medical Services",
    desc: "Primary care and emerging specialty services, delivering trusted healthcare close to home.",
    premium: false,
  },
  {
    icon: Sparkles,
    title: "Dermatology & Aesthetics",
    desc: "Skin health and cosmetic solutions combining clinical expertise with aesthetic artistry.",
    premium: false,
  },
  {
    icon: Leaf,
    title: "Wellness & Consumer Health",
    desc: "Preventive care and everyday health products supporting long-term well-being.",
    premium: false,
  },
  {
    icon: Brain,
    title: "Concierge Behavioral Health",
    desc: "A highly selective, private service designed for high-net-worth individuals and leaders across Africa. We provide personalized guidance to help clients achieve alignment across spirituality, family, physical health, finances, career, social life, and emotional well-being — enabling sustained peak performance and long-term fulfillment. Access is intentionally limited.",
    badge: "By Invitation Only",
    premium: true,
  },
];

/* Shared easing curve */
const ease = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 32 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
};

const Index = () => (
  <Layout>
    <title>Beaconhill Smile Group — Transforming Lives Through Integrated, Accessible Healthcare</title>
    <meta name="description" content="Beaconhill Smile Group is a purpose-driven healthcare ecosystem delivering high-quality clinical care, concierge behavioral health services, wellness products, and community impact — building a healthier future across Africa and beyond." />

    {/* ── HERO ── */}
    <HeroSection />

    {/* ── WHO WE ARE ── bg: white */}
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(198_72%_99%)] to-background pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <AnimatedSection direction="right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Who We Are</span>
            </div>

            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-[1.08] mb-6">
              A Healthcare Group Built for{" "}
              <span className="gradient-text">Africa's Future</span>
            </h2>

            <div className="border-l-4 border-primary/30 pl-5 mb-8">
              <p className="text-foreground/70 text-lg leading-relaxed">
                Beaconhill Smile Group is a leading multi-specialty healthcare provider committed to delivering world-class care while expanding access to underserved communities across Africa.
              </p>
            </div>

            {/* Pillars — staggered */}
            <motion.div
              className="space-y-3 mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 4, backgroundColor: "hsl(212 68% 32% / 0.04)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="flex items-start gap-4 p-4 rounded-xl cursor-default"
                >
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center shrink-0 mt-0.5"
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(212 68% 32% / 0.14)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <p.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <div className="font-display font-semibold text-foreground text-sm mb-0.5">{p.title}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
              <Button asChild size="lg" className="rounded-xl font-semibold h-12 px-8">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>

          {/* Right — image + floating cards */}
          <AnimatedSection delay={0.15} direction="left">
            <div className="relative">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-elevated"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease }}
              >
                <img
                  src="/images/group.png"
                  alt="Beaconhill Smile Group team"
                  loading="lazy"
                  className="w-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-foreground/40 to-transparent" />
              </motion.div>

              {/* Floating card — top left */}
              <motion.div
                className="absolute -top-5 -left-5 bg-background rounded-2xl px-5 py-4 shadow-elevated border border-border/50 flex items-center gap-3"
                initial={{ opacity: 0, x: -20, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease }}
                whileHover={{ scale: 1.06, y: -2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-primary leading-none">50K+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Patients Treated</div>
                </div>
              </motion.div>

              {/* Floating card — bottom left */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-background rounded-2xl px-5 py-4 shadow-elevated border border-border/50 flex items-center gap-3"
                initial={{ opacity: 0, x: -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.6, ease }}
                whileHover={{ scale: 1.06, y: 2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-foreground leading-none">10+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Years of Excellence</div>
                </div>
              </motion.div>

              {/* Floating card — right */}
              <motion.div
                className="absolute top-1/2 -right-5 -translate-y-1/2 bg-background rounded-2xl px-5 py-4 shadow-elevated border border-border/50 flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease }}
                whileHover={{ scale: 1.06, x: 2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[hsl(145,40%,38%)]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[hsl(145,40%,38%)]" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-foreground leading-none">40+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Communities Reached</div>
                </div>
              </motion.div>

              {/* Dot grid */}
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(212,68%,32%) 1.5px, transparent 0)",
                  backgroundSize: "12px 12px",
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ── CONNECTED ECOSYSTEM ── bg: dark teal gradient */}
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(198,72%,14%) 0%, hsl(198,72%,18%) 50%, hsl(212,68%,16%) 100%)" }}>
      <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-white/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/4 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <AnimatedSection className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 border border-primary-foreground/25 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">Our Ecosystem</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-primary-foreground leading-tight mb-4">
            A Connected Healthcare Ecosystem
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl">
            Our integrated model brings together specialized brands and services under one unified vision — delivering quality care across every dimension of health.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {ecosystemServices.map((svc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`p-6 rounded-2xl border cursor-default relative overflow-hidden ${
                svc.premium
                  ? "border-amber-400/40 bg-amber-500/10"
                  : "border-primary-foreground/15 bg-primary-foreground/[0.07]"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                svc.premium ? "bg-amber-400/20" : "bg-primary-foreground/15"
              }`}>
                <svc.icon className={`w-5 h-5 ${svc.premium ? "text-amber-300" : "text-primary-foreground"}`} />
              </div>
              <h3 className="font-display font-semibold text-primary-foreground mb-2">{svc.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{svc.desc}</p>
              {svc.badge && (
                <span className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 bg-amber-400/20 text-amber-300 text-xs font-semibold rounded-full border border-amber-400/30">
                  <Lock className="w-3 h-3" />
                  {svc.badge}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── OUR BUSINESSES ── bg: faint teal */}
    <BusinessCarousel />

    {/* ── LEADERSHIP ── bg: white */}
    <LeadershipSection />

    {/* ── ACCESS MODEL ── bg: faint teal */}
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: "hsl(198 72% 98%)" }}>
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Access Model</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-tight">
            Expanding Access Across{" "}
            <span className="gradient-text">Every Segment of Society</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            We are intentionally structured to deliver quality healthcare across all income levels through a tiered, inclusive model.
          </p>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Tier 1 — Foundation */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, boxShadow: "0 16px 40px -8px hsl(350 72% 44% / 0.15)" }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="p-8 rounded-2xl bg-background border border-accent/20 shadow-card cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Community Tier</div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Beaconhill Foundation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Providing access to essential healthcare for underserved and vulnerable populations through outreach, subsidies, and community health initiatives.
            </p>
            <div className="text-xs font-semibold text-accent/70 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Underserved &amp; Vulnerable Populations
            </div>
          </motion.div>

          {/* Tier 2 — Beaconhill Smile */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, boxShadow: "0 16px 40px -8px hsl(212 68% 32% / 0.15)" }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="p-8 rounded-2xl bg-background border border-primary/20 shadow-card cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Essential Tier</div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Beaconhill Smile</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Delivering affordable, high-quality care to the middle class through strategic partnerships with HMOs and accessible pricing models.
            </p>
            <div className="text-xs font-semibold text-primary/70 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Middle Class · HMO Partners
            </div>
          </motion.div>

          {/* Tier 3 — Exclusive Smile */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, boxShadow: "0 20px 50px -10px hsl(40 80% 55% / 0.28)" }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="relative p-8 rounded-2xl border border-amber-500/30 shadow-card overflow-hidden cursor-default"
            style={{ backgroundColor: "hsl(198, 72%, 18%)" }}
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-amber-500/10 blur-[50px] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-5">
                <Crown className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">Premium Tier</div>
              <h3 className="font-display font-bold text-xl text-primary-foreground mb-3">Exclusive Smile</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
                A premium care offering for high-net-worth individuals, providing enhanced experiences through out-of-pocket services, international insurance, and retainer-based care.
              </p>
              <div className="text-xs font-semibold text-amber-400/70 uppercase tracking-wider flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5" /> High-Net-Worth · International Insurance
              </div>
            </div>
          </motion.div>
        </motion.div>

        <AnimatedSection className="text-center mt-14">
          <p className="text-muted-foreground text-lg italic max-w-xl mx-auto">
            "Delivering measurable impact through care, innovation, and inclusive access."
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* ── FOUNDATION / IMPACT ── bg: faint red/accent */}
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "hsl(350, 72%, 98.5%)" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Images */}
          <AnimatedSection direction="right">
            <FoundationGallery />
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.15} direction="left">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <Heart className="w-3.5 h-3.5" /> Beaconhill Foundation
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-6">
              1 Million <span className="gradient-text-foundation font-bold">Smiles</span> Initiative
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Through the Beaconhill Foundation, we're on a mission to deliver free dental and healthcare services to one million underserved individuals across Africa — reaching schools, communities, and those who need it most.
            </p>

            {/* Stats — staggered */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {impactStats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: "0 8px 24px -4px hsl(350 72% 44% / 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center p-4 bg-secondary rounded-xl cursor-default"
                >
                  <s.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="font-display font-bold text-xl text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeLeft}>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/foundation">Learn More</Link>
                </Button>
              </motion.div>
              <motion.div variants={fadeLeft}>
                <Button asChild variant="outline">
                  <Link to="/foundation">Donate</Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ── GROUP PHOTO ── */}
    <motion.section
      className="w-full overflow-hidden"
      initial={{ opacity: 0, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease }}
    >
      <img
        src="/images/group.png"
        alt="Beaconhill Smile Group team"
        loading="lazy"
        className="w-full h-auto block"
      />
    </motion.section>

    {/* ── LOCATIONS ── bg: faint green */}
    <section className="py-20 md:py-28" style={{ backgroundColor: "hsl(84, 55%, 97%)" }}>
      <div className="container">
        <SectionHeading
          label="Our Clinics"
          title={<>Growing Across <span className="text-primary">Africa</span></>}
          description="From Lagos to the continent — building a network of premium healthcare facilities."
        />
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {[
            { name: "Victoria Island Clinic", address: "Victoria Island", city: "Lagos, Nigeria", services: "Dental · Eye Care · Dermatology · Medical" },
            { name: "Ikeja Clinic", address: "Ikeja", city: "Lagos, Nigeria", services: "Dental · Eye Care · Dermatology · Medical" },
            { name: "Beaconhill Global LLC", address: "5916 Jonesboro Road", city: "Morrow, GA 30260", services: "Dental · Eye Care · Dermatology · Medical" },
          ].map((clinic, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 16px 40px -8px hsl(212 68% 32% / 0.12)" }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="bg-background rounded-xl p-6 shadow-card border border-border/40 cursor-default"
            >
              <div className="flex items-start gap-3 mb-3">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                </motion.div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{clinic.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{clinic.address}</p>
                  <p className="text-sm text-muted-foreground">{clinic.city}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{clinic.services}</p>
            </motion.div>
          ))}
        </motion.div>
        <AnimatedSection className="text-center">
          <p className="text-muted-foreground mb-4">Expanding across the US, Nigeria and Africa</p>
          <Button asChild variant="outline">
            <Link to="/clinics">View All Locations</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-20 md:py-28 bg-primary overflow-hidden relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroClinicImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-primary/30" />
      </div>
      {/* Subtle animated orb */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/5 blur-[60px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div className="container text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6 max-w-2xl mx-auto"
          >
            Your Health Deserves{" "}
            <span className="gradient-text-light">World-Class Care</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-primary-foreground/70 text-lg max-w-lg mx-auto mb-10"
          >
            Book an appointment today or partner with us to expand access to quality healthcare across Africa.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/contact">
                  Book Appointment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <Button asChild size="lg" variant="outline" className="font-semibold border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link to="/partners">Become a Partner</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
