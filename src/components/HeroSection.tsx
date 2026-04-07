import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Heart, Users, Building, Stethoscope, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessNetwork from "@/components/BusinessNetwork";

// Slideshow — commented out for now
// import { useState, useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import heroClinic from "@/assets/hero-clinic.jpg";
// import dermatology from "@/assets/dermatology.jpg";
// import eyeCare from "@/assets/eye-care.jpg";
// const slides = [heroClinic, dermatology, eyeCare];

const stats = [
  { value: "50,000+", label: "Patients Treated",      icon: Stethoscope, accent: "hsl(212,68%,55%)" },
  { value: "7",       label: "Healthcare Businesses", icon: Building,    accent: "hsl(200,60%,52%)" },
  { value: "25,000+", label: "Smiles Restored",       icon: Heart,       accent: "hsl(350,72%,58%)" },
  { value: "40+",     label: "Communities Reached",   icon: Users,       accent: "hsl(145,45%,48%)" },
  { value: "10+",     label: "Years of Excellence",   icon: Award,       accent: "hsl(40,80%,55%)"  },
  { value: "1M",      label: "Smiles Mission Goal",   icon: Target,      accent: "hsl(260,50%,62%)" },
];
const marqueeItems = [...stats, ...stats, ...stats];

const pillars = [
  { icon: Shield, label: "Clinical Care" },
  { icon: Heart, label: "Social Impact" },
  { icon: Globe, label: "Global Expansion" },
];

const HeroSection = () => {
  // Slideshow state — commented out for now
  // const [current, setCurrent] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => setCurrent((i) => (i + 1) % slides.length), 5000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
    {/* Background image */}
    <div className="absolute inset-0">
      <motion.img
        src="/images/hero3.png"
        alt="Hero background"
        className="w-full h-full object-cover scale-x-[-1]"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/75 to-foreground/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
    </div>

    {/* Decorative blurs */}
    <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
    <div className="absolute bottom-20 right-[30%] w-56 h-56 rounded-full bg-accent/8 blur-[80px]" />

    {/* Slide dots — commented out for now */}
    {/* <div className="absolute bottom-24 right-8 z-20 flex flex-col gap-2">
      {slides.map((_, i) => (
        <button key={i} onClick={() => setCurrent(i)}
          className={`rounded-full transition-all duration-300 ${i === current ? "w-2 h-6 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
        />
      ))}
    </div> */}

    {/* Content */}
    <div className="container relative z-10 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
        {/* Left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 backdrop-blur-sm border border-primary/20 text-primary-foreground/90 text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Healthcare Ecosystem · Africa & Beyond
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-primary-foreground leading-[1.1] mb-6"
          >
            Transforming Lives Through{" "}
            <br />
            <span className="gradient-text-light">
              Integrated, Accessible Healthcare
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-foreground/55 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Beaconhill Smile Group is a purpose-driven healthcare ecosystem delivering high-quality clinical care, concierge behavioral health services, wellness products, and community impact — building a healthier future across Africa and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button asChild size="lg" className="font-semibold h-14 px-10 text-lg rounded-xl shadow-hero">
              <Link to="/businesses">
                Explore Our Ecosystem
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="font-semibold h-14 px-10 text-lg rounded-xl bg-transparent border border-white/50 text-white hover:bg-white/10 hover:border-white/80">
              <Link to="/foundation">Our Impact</Link>
            </Button>
          </motion.div>

          {/* Pillar badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {pillars.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-full"
              >
                <p.icon className="w-4 h-4 text-primary-foreground/50" />
                <span className="text-sm font-medium text-primary-foreground/60">{p.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — animated business network */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center mt-24"
        >
          <BusinessNetwork />
        </motion.div>
      </div>
    </div>

    {/* Impact marquee — pinned to bottom inside the hero */}
    <style>{`
      @keyframes marquee-scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-33.333%); }
      }
      @keyframes shimmer {
        from { transform: translateX(-100%); }
        to   { transform: translateX(400%); }
      }
      .marquee-track {
        animation: marquee-scroll 32s linear infinite;
        width: max-content;
        display: flex;
        align-items: center;
      }
      .marquee-track:hover { animation-play-state: paused; }
    `}</style>
    <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(212_68%_16%)] via-[hsl(212_68%_22%)] to-[hsl(200_60%_20%)]" />

      {/* Top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent overflow-hidden">
        <div
          className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          style={{ animation: "shimmer 3s ease-in-out infinite" }}
        />
      </div>

      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[hsl(212_68%_16%)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[hsl(200_60%_20%)] to-transparent pointer-events-none" />

      <div className="relative overflow-hidden py-5">
        <div className="marquee-track">
          {marqueeItems.map((s, i) => {
            const Icon = s.icon;
            const isLast = i === marqueeItems.length - 1;
            return (
              <div key={i} className="flex items-center shrink-0">
                {/* Stat item */}
                <div className="flex items-center gap-3.5 px-8">
                  {/* Icon badge with per-stat accent color */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm"
                    style={{ backgroundColor: `${s.accent}28`, border: `1px solid ${s.accent}40` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: s.accent }} />
                  </div>

                  {/* Value + label stacked */}
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display font-extrabold text-xl text-white tracking-tight leading-none">
                      {s.value}
                    </span>
                    <span className="text-[10px] font-medium text-white/45 whitespace-nowrap leading-none uppercase tracking-[0.08em]">
                      {s.label}
                    </span>
                  </div>
                </div>

                {/* Diamond separator */}
                {!isLast && (
                  <div className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
