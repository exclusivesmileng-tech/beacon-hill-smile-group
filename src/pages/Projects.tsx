import { Link } from "react-router-dom";
import { Rocket, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import heroClinicImg from "@/assets/hero-clinic.jpg";

const projects = [
  { status: "In Progress", title: "Abuja Flagship Clinic", desc: "A 10,000 sq ft multi-specialty healthcare facility in Nigeria's capital, featuring all four service departments.", location: "Abuja, Nigeria", timeline: "Q3 2026" },
  { status: "Planning", title: "Port Harcourt Clinic", desc: "Expanding our reach to the Niger Delta region with comprehensive dental and medical services.", location: "Port Harcourt, Nigeria", timeline: "Q1 2027" },
  { status: "Vision", title: "Accra, Ghana", desc: "Our first international clinic, bringing the Beaconhill standard of care to West Africa's growing healthcare market.", location: "Accra, Ghana", timeline: "2027" },
];

const Projects = () => (
  <Layout>
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <AnimatedSection className="max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Projects & Expansion</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight mb-6">Scaling Healthcare Across Africa</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">From Lagos to the continent — our expansion roadmap is designed to bring premium healthcare to millions.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading label="Growth Roadmap" title={<>Upcoming <span className="text-primary">Projects</span></>} />
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-background border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all h-full flex flex-col">
                <span className={`inline-block self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
                  p.status === "In Progress" ? "bg-primary/10 text-primary" :
                  p.status === "Planning" ? "bg-accent/10 text-accent" :
                  "bg-muted text-muted-foreground"
                }`}>{p.status}</span>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{p.location}</span>
                  <span className="flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" />{p.timeline}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20 overflow-hidden relative">
      <img src={heroClinicImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
      <div className="container text-center relative z-10">
        <AnimatedSection>
          <Rocket className="w-10 h-10 text-primary-foreground/40 mx-auto mb-4" />
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4">Want to Be Part of Our Growth?</h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto mb-6">We're actively seeking partners and investors to accelerate our pan-African expansion.</p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/partners">Explore Partnership <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Projects;
