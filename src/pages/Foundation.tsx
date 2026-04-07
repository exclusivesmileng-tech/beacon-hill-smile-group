import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Smile, Eye, GraduationCap, ArrowRight, MapPin, Calendar, HandHeart, Megaphone, Handshake, Gift, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";
import HeroOrbit from "@/components/hero-animations/FoundationHero";
import foundationImg from "@/assets/foundation-outreach.jpg";
import { outreaches } from "./FoundationOutreach";
import heroClinicImg from "@/assets/hero-clinic.jpg";

const galleryImages = [
  "/images/foundation/foundation1.jpeg",
  "/images/foundation/foundation2.jpeg",
  "/images/foundation/foundation3.jpeg",
  "/images/foundation/foundation4.jpeg",
  "/images/foundation/foundation5.jpeg",
  "/images/foundation/foundation6.jpeg",
  "/images/foundation/foundation7.jpeg",
  "/images/foundation/foundation8.png",
  "/images/foundation/foundation9.jpg",
  "/images/foundation/foundation10.jpg",
  "/images/foundation/foundation11.jpg",
  "/images/foundation/foundation12.jpg",
  "/images/foundation/foundation13.png",
  "/images/foundation/foundation14.jpeg",
];

const timelineYears = [
  { year: "2026", count: 2,  status: "In Progress", note: "Ajah dental outreach and Mushin school health fair." },
  { year: "2025", count: 4,  status: "Complete",    note: "Lekki, Surulere, VI corporate, and Lagos Mainland." },
  { year: "2024", count: 3,  status: "Complete",    note: "Lagos Island health day and two Ikeja schools." },
  { year: "2023", count: 5,  status: "Complete",    note: "Abeokuta, Ikeja schools, Surulere and community drives." },
  { year: "2022", count: 2,  status: "Complete",    note: "First school programmes and community health screening." },
];

const Foundation = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i! - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setLightbox((i) => (i! + 1) % galleryImages.length);

  return (
  <Layout>
    {/* ── HERO ── */}
    <section className="relative flex items-center overflow-hidden bg-foreground">
      <div className="absolute inset-0">
        <img src={foundationImg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/92 to-foreground/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-foreground/40" />
      </div>
      <LeadershipHeroBg />
      <div className="container relative z-10 py-24 flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Beaconhill Foundation
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
              className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-white leading-[1.08] mb-6">
              Expanding Access to<br />
              <span className="gradient-text-light">Quality Healthcare</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-8"
            >
              The Beaconhill Foundation is committed to improving lives by increasing access to essential healthcare services across underserved communities.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-3 mb-12">
              {[
                { icon: Heart,         label: "Health Access" },
                { icon: GraduationCap, label: "Health Education" },
                { icon: Users,         label: "Community Programs" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.12] text-white/65 text-sm">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                  {label}
                </span>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.48 }}
              className="flex items-center gap-4 flex-wrap">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 font-semibold shadow-lg">
                <Link to="/partners">Partner With Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white/65 hover:text-white hover:bg-white/5 rounded-full px-6">
                <Link to="/contact">Get Involved</Link>
              </Button>
            </motion.div>
          </div>
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <HeroOrbit />
          </div>
        </div>
      </div>
    </section>

    {/* ── WHAT WE DO ── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          label="What We Do"
          title={<>Structured Focus, <span className="text-accent">Real Impact</span></>}
          description="Our programmes are purposefully designed across four core pillars — not random charity, but organised, measurable change."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Smile,
              title: "Medical & Dental Outreach",
              desc: "Free dental screenings, extractions, and oral hygiene education brought directly to communities that lack clinic access.",
              color: "text-accent",
              bg: "bg-accent/10 border-accent/20",
            },
            {
              icon: Eye,
              title: "Eye & ENT Screening",
              desc: "Vision tests, glaucoma checks, and ENT consultations for early detection and timely referrals to specialist care.",
              color: "text-primary",
              bg: "bg-primary/10 border-primary/20",
            },
            {
              icon: GraduationCap,
              title: "Preventive Health Education",
              desc: "Structured workshops in schools and communities that build lasting hygiene habits and health literacy from childhood.",
              color: "text-brand-green",
              bg: "bg-brand-green/10 border-brand-green/20",
            },
            {
              icon: Users,
              title: "Community Wellness Programs",
              desc: "Multi-specialty wellness days combining dental, skin, nutrition, and general health services under one convenient roof.",
              color: "text-accent",
              bg: "bg-accent/10 border-accent/20",
            },
          ].map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.09}>
              <div className={`h-full rounded-2xl border bg-background p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all ${pillar.bg}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pillar.bg}`}>
                  <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── FLAGSHIP INITIATIVE ── */}
    <section className="py-20 md:py-28 bg-foreground relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[300px] bg-accent/8 blur-[100px] pointer-events-none" />
      <div className="container relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-5 justify-center">
            <div className="h-px w-8 bg-accent/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">Flagship Initiative</span>
            <div className="h-px w-8 bg-accent/60" />
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-[1.08] mb-4 text-center">
            1 Million <span className="text-accent">Smiles</span> Initiative
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            Our long-term commitment to expand oral health access to one million individuals across Africa — community by community, outreach by outreach.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "What It Is",
              icon: "📌",
              content: "A long-term structured programme delivering free dental screenings, extractions, and oral hygiene education to underserved communities across Nigeria and beyond.",
            },
            {
              label: "Why It Exists",
              icon: "💡",
              content: "Over 90% of Nigerians have experienced tooth decay — yet fewer than 2% see a dentist annually. Oral disease is a silent epidemic, and we are responding at scale.",
            },
            {
              label: "What It Has Achieved",
              icon: "🏆",
              content: "Thousands treated, hundreds of schools reached, dozens of communities transformed — building the case that quality oral care can reach every corner of Africa.",
            },
          ].map((card, i) => (
            <AnimatedSection key={card.label} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
                <span className="text-2xl block mb-4">{card.icon}</span>
                <h3 className="font-display font-bold text-white text-lg mb-3">{card.label}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{card.content}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: "5,000+", label: "Lives Touched" },
              { value: "20+",    label: "Communities" },
              { value: "16+",    label: "Outreaches" },
              { value: "2021",   label: "Year Launched" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-5 text-center shadow-md">
                <div className="font-display font-extrabold text-3xl text-accent mb-1">{s.value}</div>
                <div className="text-foreground/50 text-xs uppercase tracking-[0.14em]">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ── FEATURED MOMENTS ── */}
    <section className="py-16 md:py-20 bg-surface-blue">
      <div className="container">
        <SectionHeading
          label="In The Field"
          title={<>Faces of <span className="text-accent">Impact</span></>}
          description="A glimpse into the people and moments that define our mission."
        />
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
              <img
                src="/images/foundation/foundation14.jpeg"
                alt="Foundation community outreach"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
              <img
                src="/images/foundation/foundation1.jpeg"
                alt="Foundation outreach moment"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ── GALLERY ── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          label="Gallery"
          title={<>Moments of <span className="text-accent">Impact</span></>}
          description="Scenes from our outreaches, screenings, and community programmes across Nigeria."
        />

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryImages.map((src, i) => (
            <AnimatedSection key={src} delay={i * 0.04} className="break-inside-avoid">
              <button
                onClick={() => setLightbox(i)}
                className="block w-full overflow-hidden rounded-xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={src}
                  alt={`Foundation outreach ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
                />
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── LIGHTBOX ── */}
    <AnimatePresence>
      {lightbox !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.img
            key={lightbox}
            src={galleryImages[lightbox]}
            alt={`Foundation outreach ${lightbox + 1}`}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightbox + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* ── GET INVOLVED ── */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <SectionHeading
          label="Get Involved"
          title={<>Be Part of the <span className="text-accent">Mission</span></>}
          description="There are multiple ways to contribute — your skills, resources, or voice can help us expand our reach."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: HandHeart,
              title: "Volunteer",
              desc: "Join our network of healthcare professionals and community volunteers. Your time and skills directly power our outreach programmes.",
              cta: "Become a Volunteer",
              href: "/contact",
            },
            {
              icon: Megaphone,
              title: "Advocate",
              desc: "Help us raise awareness about healthcare access. Share our mission within your network and amplify the impact of every programme.",
              cta: "Spread the Word",
              href: "/contact",
            },
            {
              icon: Handshake,
              title: "Partner With Us",
              desc: "Organisations, corporates, and NGOs can co-deliver programmes, fund initiatives, or contribute resources and specialist expertise.",
              cta: "Explore Partnership",
              href: "/partners",
            },
            {
              icon: Gift,
              title: "Donate or Sponsor",
              desc: "Fund a full outreach, sponsor a school programme, or contribute to the 1 Million Smiles Initiative. Every naira transforms lives.",
              cta: "Make a Donation",
              href: "/contact",
            },
          ].map((card, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-background rounded-2xl p-8 shadow-card h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{card.desc}</p>
                <Button asChild size="sm" className="mt-6 self-start bg-accent hover:bg-accent/90 text-white rounded-full px-5">
                  <Link to={card.href}>{card.cta} <ArrowRight className="ml-1.5 w-3.5 h-3.5" /></Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24 overflow-hidden relative">
      <img src={heroClinicImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
      <div className="container relative z-10">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Be Part of the <span className="text-accent">Change</span>
          </h2>
          <p className="text-white/55 text-lg max-w-lg mx-auto mb-10">Your support helps us restore smiles and transform communities across Africa.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-semibold bg-accent hover:bg-accent/90 text-white rounded-full px-8">
              <Link to="/contact">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold rounded-full px-8 border-white/20 text-white hover:bg-white/5 hover:text-white">
              <Link to="/contact">Volunteer <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="font-semibold rounded-full px-8 text-white/60 hover:text-white hover:bg-white/5">
              <Link to="/partners">Partner With Us</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
  );
};

export default Foundation;
