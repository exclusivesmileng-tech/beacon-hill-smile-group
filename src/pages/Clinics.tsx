import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import heroClinicImg from "@/assets/hero-clinic.jpg";

const clinics = [
  { name: "Victoria Island Clinic", address: "Plot 12, Adeola Odeku Street, Victoria Island, Lagos", phone: "+234 123 456 7890", hours: "Mon–Sat: 8am – 6pm", services: ["Dental", "Eye Care", "Dermatology", "Medical"] },
  { name: "Lekki Clinic", address: "15 Admiralty Way, Lekki Phase 1, Lagos", phone: "+234 123 456 7891", hours: "Mon–Sat: 8am – 6pm", services: ["Dental", "Eye Care", "Medical"] },
  { name: "Ikeja Clinic", address: "32 Allen Avenue, Ikeja, Lagos", phone: "+234 123 456 7892", hours: "Mon–Sat: 8am – 6pm", services: ["Dental", "Dermatology", "Medical"] },
];

const Clinics = () => (
  <Layout>
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <AnimatedSection className="max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Our Clinics</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight mb-6">Our Locations</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">Premium healthcare facilities designed for your comfort and care.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {clinics.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-background rounded-2xl border border-border p-8 shadow-card hover:shadow-card-hover transition-all h-full flex flex-col">
                <h3 className="font-display font-bold text-xl text-foreground mb-4">{c.name}</h3>
                <div className="space-y-3 text-sm text-muted-foreground mb-6 flex-1">
                  <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />{c.address}</div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" />{c.phone}</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" />{c.hours}</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.services.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 bg-secondary text-foreground rounded-full">{s}</span>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Book Here <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
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
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4">Expanding Across Nigeria & Africa</h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-6">New clinics are in development. Stay connected for updates on our growth.</p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/projects">View Expansion Plans</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Clinics;
