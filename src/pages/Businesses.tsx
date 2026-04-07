import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Smile, Eye, Sparkles, Ear, Brain, Package, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";
import HeroOrbit from "@/components/hero-animations/BusinessesHero";
import heroClinicImg from "@/assets/hero-clinic.jpg";

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

const Businesses = () => (
  <Layout>
    {/* ── HERO ── */}
    <section className="relative flex items-center overflow-hidden bg-foreground">
      <div className="absolute inset-0">
        <img src={heroClinicImg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/92 to-foreground/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/40" />
      </div>
      <LeadershipHeroBg />
      <div className="container relative z-10 py-24 flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/25 text-brand-green text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                Our Healthcare Ecosystem
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
              className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-white leading-[1.08] mb-6">
              A Network of Specialized<br />
              <span className="gradient-text-light">Healthcare Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-8"
            >
              Beaconhill Smile Group operates a portfolio of specialized healthcare brands, each dedicated to delivering exceptional care across key areas of medicine and wellness.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-3 mb-12">
              {[
                { icon: Smile,  label: "Dental Care" },
                { icon: Eye,    label: "Eye & Vision" },
                { icon: Brain,  label: "Mental Health" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.12] text-white/65 text-sm">
                  <Icon className="w-3.5 h-3.5 text-brand-green" />
                  {label}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.48 }}
              className="flex items-center gap-4 flex-wrap">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 font-semibold shadow-lg">
                <Link to="/contact">Book Appointment <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white/65 hover:text-white hover:bg-white/5 rounded-full px-6">
                <Link to="/about">Our Story</Link>
              </Button>
            </motion.div>
          </div>
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <HeroOrbit />
          </div>
        </div>
      </div>
    </section>

    {/* Business Cards */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          label="Healthcare Ecosystem"
          title={<>Seven Specialised Businesses, One <span className="text-primary">Vision</span></>}
          description="Each of our businesses is built with a clear focus — combining expert care, modern technology, and a patient-first approach to deliver outstanding outcomes across different areas of healthcare."
        />

        <div className="space-y-16">
          {businessGroups.map((group, gi) => (
            <div key={group.category}>
              {/* Group header */}
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-8">
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">{group.category}</h3>
                    <p className="text-muted-foreground text-sm mt-0.5">{group.description}</p>
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    {group.items.length} {group.items.length === 1 ? "business" : "businesses"}
                  </span>
                </div>
              </AnimatedSection>

              {/* Cards — 2-col horizontal split */}
              <div className="grid md:grid-cols-2 gap-5">
                {group.items.map((biz, i) => (
                  <AnimatedSection key={biz.name} delay={i * 0.07}>
                    <a href={biz.url} target="_blank" rel="noopener noreferrer" className="block group relative bg-background rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-green/30 transition-all duration-300 flex overflow-hidden min-h-[160px]">

                      {/* Left — logo panel */}
                      <div className="relative shrink-0 w-[140px] flex items-center justify-center bg-secondary group-hover:bg-brand-green/5 transition-colors duration-300 px-5">
                        {/* Vertical accent bar */}
                        <div className="absolute right-0 top-6 bottom-6 w-px bg-border group-hover:bg-brand-green/20 transition-colors duration-300" />
                        <img
                          src={biz.logo}
                          alt={biz.name}
                          className="max-h-16 max-w-[96px] object-contain"
                        />
                      </div>

                      {/* Right — content */}
                      <div className="flex flex-col flex-1 px-5 py-5">
                        {/* Tag */}
                        <span className="self-start text-[10px] font-bold uppercase tracking-wider text-brand-green bg-brand-green/8 border border-brand-green/20 px-2.5 py-1 rounded-full mb-3">
                          {biz.tag}
                        </span>

                        <h3 className="font-display font-bold text-[15px] leading-snug text-foreground mb-2">
                          {biz.name}
                        </h3>
                        <p className="text-muted-foreground text-[13px] leading-relaxed flex-1">
                          {biz.desc}
                        </p>

                        {/* Learn More */}
                        <div className="mt-4 flex items-center gap-1.5 text-brand-green text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                    </a>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Unifying statement */}
        <AnimatedSection delay={0.1}>
          <div className="mt-20 relative rounded-2xl overflow-hidden bg-foreground px-8 py-10 md:px-14 md:py-12 text-center">
            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(198 72% 70%) 1px, transparent 1px), linear-gradient(90deg, hsl(198 72% 70%) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Ambient glow */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[200px] bg-brand-green/10 blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-10 bg-brand-green/50" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green/80">
                  One Ecosystem
                </span>
                <div className="h-px w-10 bg-brand-green/50" />
              </div>
              <p className="font-display font-semibold text-xl md:text-2xl lg:text-3xl text-white leading-snug max-w-3xl mx-auto">
                Together, these businesses form a unified ecosystem{" "}
                <span className="text-brand-green">delivering comprehensive healthcare solutions</span>{" "}
                across Africa.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Global Expansion */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Global Expansion</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-6">
              Expanding Our Reach Globally
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              In 2022, Beaconhill Smile Group entered the international stage by acquiring a leading optometry practice in Georgia, United States. This marked the beginning of our global footprint and our ongoing plan to expand into dental care in the U.S., bringing the same commitment to quality, innovation, and compassion that defines our African operations.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View our growth roadmap <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 overflow-hidden relative">
      <img src={heroClinicImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
      <div className="container text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground leading-tight mb-6 max-w-2xl mx-auto">
            Partner With a Healthcare Ecosystem Built for Scale
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto mb-8">
            Whether you're an investor, medical partner, or corporate organisation — there's a place for you in our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/partners"
              className="inline-flex items-center justify-center rounded-md bg-background text-foreground font-semibold px-6 py-3 hover:bg-background/90 transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/20 text-primary-foreground font-semibold px-6 py-3 hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Businesses;
