import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Smile, Eye, Sparkles, Stethoscope, ArrowRight, Check, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";
import HeroOrbit from "@/components/hero-animations/ServicesHero";
import heroClinic from "@/assets/hero-clinic.jpg";
import eyeCare from "@/assets/eye-care.jpg";
import dermatology from "@/assets/dermatology.jpg";

const departments = [
  {
    icon: Smile,
    title: "Dental Care",
    subtitle: "Flagship Department",
    desc: "Comprehensive dental solutions from preventive care to advanced restorative and cosmetic dentistry.",
    features: ["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Oral Surgery", "Paediatric Dentistry", "Implantology"],
    image: heroClinic,
  },
  {
    icon: Eye,
    title: "Eye Care — VisionCraft",
    subtitle: "Advanced Ophthalmology",
    desc: "State-of-the-art vision care combining diagnostic precision with advanced surgical capabilities.",
    features: ["Comprehensive Eye Exams", "Glaucoma Management", "Cataract Surgery", "Retinal Care", "Pediatric Ophthalmology", "Contact Lens Fitting"],
    image: eyeCare,
  },
  {
    icon: Sparkles,
    title: "Dermatology",
    subtitle: "Skin Health Experts",
    desc: "Expert care for all skin conditions, combining medical dermatology with aesthetic treatments.",
    features: ["Medical Dermatology", "Skin Cancer Screening", "Acne Treatment", "Aesthetic Procedures", "Laser Therapy", "Hair & Nail Disorders"],
    image: dermatology,
  },
  {
    icon: Stethoscope,
    title: "Medical Services",
    subtitle: "General & Specialist Care",
    desc: "Comprehensive primary and specialist medical services delivered by experienced physicians.",
    features: ["Primary Care", "Health Screenings", "Chronic Disease Management", "Vaccinations", "Lab Services", "Specialist Referrals"],
    image: heroClinic,
  },
];

const Services = () => (
  <Layout>
    {/* ── HERO ── */}
    <section className="relative flex items-center overflow-hidden bg-foreground">
      <div className="absolute inset-0">
        <img src={heroClinic} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-30" />
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
                Our Services
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
              className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-white leading-[1.08] mb-5">
              Multi-Specialty<br />
              <span className="gradient-text-light">Healthcare Excellence</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }}
              className="text-white/65 text-lg leading-relaxed max-w-xl mb-8">
              From dental and eye care to dermatology and general medicine — expert, compassionate care across every specialty, all under one trusted group.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-3 mb-12">
              {[
                { icon: Smile,       label: "Dental Care" },
                { icon: Eye,         label: "Eye Care" },
                { icon: Sparkles,    label: "Dermatology" },
                { icon: Stethoscope, label: "Medical" },
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
                <Link to="/book">Book Appointment <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white/65 hover:text-white hover:bg-white/5 rounded-full px-6">
                <Link to="/businesses">Our Businesses</Link>
              </Button>
            </motion.div>
          </div>
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <HeroOrbit />
          </div>
        </div>
      </div>
    </section>

    {departments.map((dept, i) => (
      <section key={i} className={`py-20 md:py-28 ${i % 2 === 1 ? "bg-secondary" : ""}`}>
        <div className="container">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
            <AnimatedSection className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img src={dept.image} alt={dept.title} loading="lazy" width={800} height={600} className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/3]" />
            </AnimatedSection>
            <AnimatedSection delay={0.15} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                  <dept.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{dept.subtitle}</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">{dept.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{dept.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {dept.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/book">Book Appointment <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    ))}
    {/* ── BOOKING CTA ── */}
    <section className="py-20 md:py-24 overflow-hidden relative">
      <img src={heroClinic} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
      <div className="container relative z-10">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <CalendarCheck className="w-12 h-12 text-brand-green mx-auto mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-5">
            Ready to Book Your <span className="gradient-text-light">Appointment?</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Our specialists are available across all clinics. Book online, by phone, or walk in — whichever works best for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 font-semibold shadow-lg">
              <Link to="/contact">Book an Appointment <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white/65 hover:text-white hover:bg-white/5 rounded-full px-6">
              <Link to="/businesses">View Our Clinics</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>  </Layout>
);

export default Services;
