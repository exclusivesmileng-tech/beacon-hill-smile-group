import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Smile, Eye, Sparkles, Clock, ArrowRight, Heart, Activity,
  Mail, Search, Brain, Ear, Building2, CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";
import HeroOrbit from "@/components/hero-animations/InsightsHero";
import heroClinicImg from "@/assets/hero-clinic.jpg";
import { posts } from "./InsightArticle";

const categories = [
  { label: "All",               icon: Activity  },
  { label: "Dental Health",     icon: Smile     },
  { label: "Eye Care",          icon: Eye       },
  { label: "Skin & Aesthetics", icon: Sparkles  },
  { label: "ENT Health",        icon: Ear       },
  { label: "Mental Health",     icon: Brain     },
  { label: "General Wellness",  icon: Heart     },
  { label: "Company Updates",   icon: Building2 },
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");

  const featured = posts.find((p) => p.featured)!;

  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter((p) =>
      search.trim() === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    );

  return (
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
                  Health Insights
                </span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
                className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-white leading-[1.08] mb-5">
                Insights, Knowledge &<br />
                <span className="gradient-text-light">Perspectives on Healthcare</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }}
                className="text-white/65 text-lg leading-relaxed max-w-xl mb-8">
                Stay informed with expert insights, health education, and updates from across the Beaconhill healthcare network.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }}
                className="flex flex-wrap gap-3 mb-12">
                {[
                  { icon: Smile,    label: "Dental" },
                  { icon: Eye,      label: "Eye Care" },
                  { icon: Sparkles, label: "Skin" },
                  { icon: Brain,    label: "Mental Health" },
                  { icon: Heart,    label: "Wellness" },
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
                  <Link to="/services">Our Services</Link>
                </Button>
              </motion.div>
            </div>
            <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
              <HeroOrbit />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED INSIGHT ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <AnimatedSection className="mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">Featured Insight</span>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <Link to={`/insights/${featured.slug}`} className="block group">
              <article className="bg-background rounded-2xl shadow-elevated overflow-hidden">
                <div className="grid lg:grid-cols-[1fr_420px]">
                  <div className="relative min-h-[260px] lg:min-h-0 overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
                      {featured.category}
                    </span>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground leading-snug mb-4 group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                      <span>{featured.author}</span>
                      <span>·</span>
                      <span>{featured.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime} read</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="All Articles"
            title={<>Latest <span className="text-primary">Health Insights</span></>}
            description="Browse our library of expert-written articles across all our specialties."
          />

          {/* search + filter */}
          <AnimatedSection className="space-y-6 mb-12">
            {/* search bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                type="search"
                placeholder="Search articles…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 h-10 rounded-full border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            {/* category pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(({ label }) => (
                <button
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                    activeCategory === label
                      ? "bg-primary text-white border-primary"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-background"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <AnimatedSection key={`${activeCategory}-${search}-${i}`} delay={i * 0.07}>
                <Link to={`/insights/${post.slug}`} className="block group h-full">
                  <article className="bg-background border border-border rounded-2xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-background/90 backdrop-blur-sm text-primary text-[10px] font-semibold uppercase tracking-wider border border-border">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display font-bold text-base text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">
              {search ? `No articles matching "${search}".` : "No articles in this category yet. Check back soon."}
            </p>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container">
          <AnimatedSection className="max-w-xl mx-auto text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-4">
              Get the Latest <span className="text-primary">Health Insights</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Get the latest health insights and updates from Beaconhill delivered directly to your inbox.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" className="rounded-full px-7 shrink-0">
                Subscribe <Activity className="ml-2 w-4 h-4" />
              </Button>
            </form>
            <p className="text-muted-foreground/60 text-xs mt-4">No spam. Unsubscribe at any time.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-24 overflow-hidden relative">
        <img src={heroClinicImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
        <div className="container relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-5">
              Ready to Take the <span className="gradient-text-light">Next Step?</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Our specialists are here to help — whether you need a routine check-up, a specialist consultation, or just want to learn more.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 font-semibold shadow-lg">
                <Link to="/contact"><CalendarCheck className="mr-2 w-4 h-4" /> Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/5 hover:text-white">
                <Link to="/services">Explore Our Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-8 text-white/65 hover:text-white hover:bg-white/5">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
