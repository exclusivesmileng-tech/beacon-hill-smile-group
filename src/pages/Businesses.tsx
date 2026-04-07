import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Smile, Eye, Sparkles, Ear, Brain, Package, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";
import HeroOrbit from "@/components/hero-animations/BusinessesHero";
import SectionHeading from "@/components/SectionHeading";
import heroClinicImg from "@/assets/hero-clinic.jpg";

/* ─── Data ───────────────────────────────────────────────── */

const businessGroups = [
  {
    category: "Core Health Services",
    description: "Frontline clinical care across dental, vision, and ENT — the backbone of the Beaconhill ecosystem.",
    items: [
      {
        logo: "/images/business_logo/exclusive_smile.png",
        fallback: Smile,
        name: "Exclusive Smile",
        tag: "Premium Dental",
        desc: "Premium, anxiety-free dental care for high-net-worth individuals, expatriates, and senior executives — in a state-of-the-art facility.",
        url: "https://www.exclusivesmileng.com/",
      },
      {
        logo: "/images/business_logo/beaconhill_smile.png",
        fallback: Smile,
        name: "Beaconhill Smile Clinic",
        tag: "Dental Care",
        desc: "Africa's first 7-day dental practice in Victoria Island and Ikeja, Lagos — delivering high-quality cosmetic and family dental care.",
        url: "https://www.beaconhillsmile.com/",
      },
      {
        logo: "/images/business_logo/Vision_Craft.png",
        fallback: Eye,
        name: "Vision Craft Eye Clinic",
        tag: "Eye Care",
        desc: "Full-spectrum eye care — from routine checks to advanced treatment of glaucoma, cataracts, and complex vision conditions.",
        url: "https://www.visioncraftng.com/",
      },
      {
        logo: "/images/business_logo/clearsound.png",
        fallback: Ear,
        name: "ClearSound ENT",
        tag: "Ear, Nose & Throat",
        desc: "Expert diagnosis and treatment of ear, nose, and throat conditions — for patients of all ages in a dedicated specialist clinic.",
        url: "https://www.clearsoundent.org/",
      },
    ],
  },
  {
    category: "Specialised Care",
    description: "Targeted expertise in aesthetics and behavioural health for patients who demand precision and discretion.",
    items: [
      {
        logo: "/images/business_logo/phoenix.png",
        fallback: Sparkles,
        name: "Phoenix Derma Aesthetics",
        tag: "Skin & Aesthetics",
        desc: "Medically backed skin and aesthetic treatments, personalised for professionals who demand precision, results, and discretion.",
        url: "https://www.phoenixderma.com/",
      },
      {
        logo: "/images/business_logo/prima.png",
        fallback: Brain,
        name: "Prima Medical",
        tag: "Mental Health",
        desc: "An outpatient behavioural health centre in Victoria Island — providing discreet, expert mental health care for high-pressure lives.",
        url: "https://www.primamedical.org/",
      },
    ],
  },
  {
    category: "Support & Distribution",
    description: "Enabling the ecosystem through supply chain, wellness products, and healthcare logistics.",
    items: [
      {
        logo: "/images/business_logo/northshore.png",
        fallback: Package,
        name: "Northshore Health",
        tag: "Health & Wellness FMCG",
        desc: "A trusted distributor of quality health and wellness consumer goods across Nigeria, supporting everyday wellbeing at scale.",
        url: "https://www.northshorehealthng.com/",
      },
    ],
  },
];

/* ─── Animation Primitives ───────────────────────────────── */

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const stagger = (delay = 0, gap = 0.1) => ({
  hidden: {},
  show:   { transition: { staggerChildren: gap, delayChildren: delay } },
});

const viewport = { once: true, margin: "-60px" } as const;

/* ─── Page ───────────────────────────────────────────────── */

const Businesses = () => (
  <Layout>

    {/* ══════════════════════════════════════════════
        HERO
    ══════════════════════════════════════════════ */}
    <section className="relative flex items-center overflow-hidden bg-foreground">
      <div className="absolute inset-0">
        <img src={heroClinicImg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/92 to-foreground/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/40" />
      </div>
      <LeadershipHeroBg />

      <div className="container relative z-10 py-28 md:py-36">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">

          {/* Text */}
          <motion.div variants={stagger(0, 0.12)} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/25 text-brand-green text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                Our Healthcare Ecosystem
              </span>
            </motion.div>

            <div className="mb-6">
              {["A Network of Specialised", "Healthcare Excellence"].map((line, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 44 },
                    show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease, delay: i * 0.09 } },
                  }}
                >
                  <h1 className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-white leading-[1.1]">
                    {i === 1 ? <span className="gradient-text-light">{line}</span> : line}
                  </h1>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Beaconhill Smile Group operates a portfolio of specialized healthcare brands, each dedicated to delivering exceptional care across key areas of medicine and wellness.
            </motion.p>

            <motion.div variants={stagger(0, 0.08)} className="flex flex-wrap gap-3 mb-12">
              {[
                { icon: Smile, label: "Dental Care" },
                { icon: Eye,   label: "Eye & Vision" },
                { icon: Brain, label: "Mental Health" },
              ].map(({ icon: Icon, label }) => (
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

            <motion.div variants={fadeUp} className="flex items-center gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 font-semibold shadow-lg">
                  <Link to="/book">Book Appointment <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <Button asChild variant="ghost" size="lg" className="text-white/65 hover:text-white hover:bg-white/5 rounded-full px-6">
                  <Link to="/about">Our Story</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* SVG orbit */}
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <HeroOrbit />
          </div>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        BUSINESS CARDS
    ══════════════════════════════════════════════ */}
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <SectionHeading
            label="Healthcare Ecosystem"
            title={<>Seven Specialised Businesses, One <span className="text-primary">Vision</span></>}
            description="Each of our businesses is built with a clear focus — combining expert care, modern technology, and a patient-first approach to deliver outstanding outcomes."
          />
        </motion.div>

        <div className="space-y-20">
          {businessGroups.map((group, gi) => (
            <div key={group.category}>

              {/* Group header — line draws in from left */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="flex items-center gap-4 mb-8"
              >
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">{group.category}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">{group.description}</p>
                </div>
                <motion.div
                  className="flex-1 h-px bg-border origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease, delay: 0.2 }}
                />
                <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  {group.items.length} {group.items.length === 1 ? "business" : "businesses"}
                </span>
              </motion.div>

              {/* Cards */}
              <motion.div
                className="grid md:grid-cols-2 gap-5"
                variants={stagger(0, 0.09)}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {group.items.map((biz) => (
                  <motion.div
                    key={biz.name}
                    variants={{
                      hidden: { opacity: 0, y: 28, scale: 0.97 },
                      show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.6, ease } },
                    }}
                  >
                    <motion.a
                      href={biz.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex group relative bg-background rounded-2xl border border-border shadow-card overflow-hidden min-h-[160px]"
                      whileHover={{ y: -4, boxShadow: "0 16px 40px -8px hsl(145 40% 38% / 0.16)", borderColor: "hsl(145 40% 38% / 0.3)" }}
                      transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    >
                      {/* Left — logo */}
                      <div className="relative shrink-0 w-[140px] flex items-center justify-center bg-secondary group-hover:bg-brand-green/5 transition-colors duration-300 px-5">
                        <div className="absolute right-0 top-6 bottom-6 w-px bg-border group-hover:bg-brand-green/20 transition-colors duration-300" />
                        <motion.img
                          src={biz.logo}
                          alt={biz.name}
                          className="max-h-16 max-w-[96px] object-contain"
                          whileHover={{ scale: 1.06 }}
                          transition={{ type: "spring", stiffness: 320, damping: 22 }}
                        />
                      </div>

                      {/* Right — content */}
                      <div className="flex flex-col flex-1 px-5 py-5">
                        <span className="self-start text-[10px] font-bold uppercase tracking-wider text-brand-green bg-brand-green/8 border border-brand-green/20 px-2.5 py-1 rounded-full mb-3">
                          {biz.tag}
                        </span>
                        <h3 className="font-display font-bold text-[15px] leading-snug text-foreground mb-2">{biz.name}</h3>
                        <p className="text-muted-foreground text-[13px] leading-relaxed flex-1">{biz.desc}</p>
                        <motion.div
                          className="mt-4 flex items-center gap-1.5 text-brand-green text-sm font-semibold"
                          whileHover={{ gap: "10px" }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </motion.div>
                      </div>
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Unifying statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="mt-24 relative rounded-2xl overflow-hidden bg-foreground px-8 py-12 md:px-14 md:py-14 text-center"
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(hsl(198 72% 70%) 1px, transparent 1px), linear-gradient(90deg, hsl(198 72% 70%) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[200px] bg-brand-green/10 blur-[80px] pointer-events-none"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10">
            <motion.div
              className="flex items-center justify-center gap-3 mb-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="h-px w-10 bg-brand-green/50" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green/80">One Ecosystem</span>
              <div className="h-px w-10 bg-brand-green/50" />
            </motion.div>
            <motion.p
              className="font-display font-semibold text-xl md:text-2xl lg:text-3xl text-white leading-snug max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              Together, these businesses form a unified ecosystem{" "}
              <span className="text-brand-green">delivering comprehensive healthcare solutions</span>{" "}
              across Africa.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        GLOBAL EXPANSION
    ══════════════════════════════════════════════ */}
    <section className="py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
            Global Expansion
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-6">
            Expanding Our Reach Globally
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
            In 2022, Beaconhill Smile Group entered the international stage by acquiring a leading optometry practice in Georgia, United States. This marked the beginning of our global footprint and our ongoing plan to expand into dental care in the U.S., bringing the same commitment to quality, innovation, and compassion that defines our African operations.
          </motion.p>
          <motion.div variants={fadeUp}>
            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="inline-flex">
              <Link to="/projects" className="inline-flex items-center text-primary font-semibold hover:underline">
                View our growth roadmap <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        CTA
    ══════════════════════════════════════════════ */}
    <section className="py-24 md:py-32 overflow-hidden relative">
      <img src={heroClinicImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
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
          <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl md:text-4xl text-primary-foreground leading-tight mb-6 max-w-2xl mx-auto">
            Partner With a Healthcare Ecosystem Built for Scale
          </motion.h2>
          <motion.p variants={fadeUp} className="text-primary-foreground/70 text-lg max-w-lg mx-auto mb-10">
            Whether you're an investor, medical partner, or corporate organisation — there's a place for you in our mission.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <Link to="/partners" className="inline-flex items-center justify-center rounded-xl bg-background text-foreground font-semibold px-8 py-3 hover:bg-background/90 transition-colors shadow-md">
                Partner With Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-xl border border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3 hover:bg-primary-foreground/10 transition-colors">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>

  </Layout>
);

export default Businesses;
