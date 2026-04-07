import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Handshake, Building, Stethoscope, ArrowRight, Check,
  Network, Shield, Eye, Layers, GraduationCap, Globe2,
  MapPin, Activity, Star, ClipboardList, SearchCheck, Rocket,
  Send, Mail, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";
import HeroOrbit from "@/components/hero-animations/PartnersHero";
import heroClinicImg from "@/assets/hero-clinic.jpg";
import { useToast } from "@/hooks/use-toast";

const partnerTypes = [
  { icon: Stethoscope,   title: "Clinical Partnerships",             desc: "Collaborate on healthcare delivery, referrals, and specialised services to strengthen the quality and reach of care." },
  { icon: Globe2,        title: "Outreach & Foundation Partnerships", desc: "Support or co-execute community healthcare initiatives that expand access to underserved populations." },
  { icon: Building,      title: "Corporate Partnerships",            desc: "Develop employee health programmes, sponsorships, and wellness initiatives that benefit your workforce and communities." },
  { icon: GraduationCap, title: "Institutional Partnerships",        desc: "Engage in training, research, and knowledge exchange that elevates standards across the healthcare ecosystem." },
];

const valueProps = [
  { icon: Network, title: "Access to Healthcare Network",          desc: "Tap into a growing ecosystem of specialised clinics, healthcare professionals, and community health touchpoints across our network." },
  { icon: Shield,  title: "Brand Alignment With a Trusted Group",  desc: "Associate your organisation with a credible, established healthcare group recognised for quality, integrity, and impact." },
  { icon: Eye,     title: "Visibility and Impact",                 desc: "Gain meaningful exposure across Beaconhill's patient communities, digital platforms, and foundation outreach programmes." },
  { icon: Layers,  title: "Structured Collaboration System",       desc: "Operate within a defined partnership framework that ensures clarity, accountability, and measurable outcomes for all parties." },
];

const impactPoints = [
  { stat: "50,000+",    label: "Lives Reached Through Outreach",  icon: MapPin,   desc: "Our community-focused programmes have touched tens of thousands of lives across multiple states." },
  { stat: "3+ States",  label: "Active Programme Footprint",      icon: Activity, desc: "Active healthcare access initiatives running across several states and growing communities." },
  { stat: "20+",        label: "Community Health Programmes",     icon: Star,     desc: "A portfolio of successful outreach campaigns, screenings, and foundation-led health interventions." },
];

const processSteps = [
  { icon: ClipboardList, step: "01", title: "Submit Partnership Request", desc: "Fill in a short form telling us about your organisation and the type of partnership you're interested in." },
  { icon: SearchCheck,   step: "02", title: "Review & Alignment",         desc: "Our partnerships team reviews your request, assesses fit, and schedules a meeting to align on goals and scope." },
  { icon: Rocket,        step: "03", title: "Launch Collaboration",        desc: "We formalise the agreement and activate the partnership — with clear milestones and a dedicated point of contact." },
];

const reasons = [
  "Established healthcare group with proven operations",
  "Multi-specialty network spanning clinical care",
  "Growing footprint from Nigeria to global markets",
  "Proven impact through the Beaconhill Foundation",
];

const Partners = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    org: "", contact: "", email: "", phone: "", type: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Request Received",
      description: "Our partnerships team will be in touch within 2 business days.",
    });
    setForm({ org: "", contact: "", email: "", phone: "", type: "", message: "" });
  };

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
                Partnerships
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
              className="font-display font-extrabold text-4xl md:text-5xl xl:text-6xl text-white leading-[1.08] mb-5">
              Partner With Us to<br />
              <span className="gradient-text-light">Expand Access to Quality Healthcare</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }}
              className="text-white/65 text-lg leading-relaxed max-w-xl mb-8">
              We collaborate with forward-thinking organisations to deliver impactful healthcare solutions across communities.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-3 mb-12">
              {[
                { icon: Stethoscope,   label: "Clinical" },
                { icon: Globe2,        label: "Outreach" },
                { icon: Building,      label: "Corporate" },
                { icon: GraduationCap, label: "Institutional" },
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
                <Link to="/contact">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white/65 hover:text-white hover:bg-white/5 rounded-full px-6">
                <Link to="/about">About Beaconhill</Link>
              </Button>
            </motion.div>
          </div>
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <HeroOrbit />
          </div>
        </div>
      </div>
    </section>

    {/* ── WHY PARTNER ── */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Why Partner With Beaconhill</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-6">
              A Healthcare Ecosystem Built for Collaboration
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Partnering with Beaconhill Smile Group gives you access to a structured healthcare ecosystem, a growing network of specialised clinics, and a shared commitment to expanding access to quality care.
            </p>
            <div className="grid gap-3.5">
              {reasons.map((r, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm">{r}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="bg-background rounded-2xl p-8 md:p-10 shadow-elevated">
              <Handshake className="w-12 h-12 text-primary mb-5" />
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Ready to Explore a Partnership?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Reach out to our partnerships team and let's identify the right model for your organisation.
              </p>
              <Button asChild className="w-full" size="lg">
                <Link to="/contact">Start a Conversation <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ── PARTNERSHIP TYPES ── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          label="Partnership Opportunities"
          title={<>Ways to <span className="text-primary">Partner With Us</span></>}
          description="Whether you are a clinical provider, a corporate organisation, or an academic institution, there is a structured partnership model designed for you."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="bg-secondary rounded-2xl p-7 h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── WHAT YOU GET ── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          label="What You Get"
          title={<>The Value of <span className="text-primary">Partnering With Us</span></>}
          description="We want every partner to succeed. Here is what a collaboration with Beaconhill Smile Group unlocks for your organisation."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="rounded-2xl border border-border p-7 h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-brand-green" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── IMPACT THROUGH COLLABORATION ── */}
    <section className="py-20 md:py-28 bg-foreground">
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-brand-green mb-3">Impact Through Collaboration</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-5">
            Partnerships That <span className="gradient-text-light">Deliver Results</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            Every partnership we enter contributes to a measurable expansion of healthcare access. This is what collaboration with Beaconhill has already achieved.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {impactPoints.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-green/15 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-5 h-5 text-brand-green" />
                </div>
                <div className="font-display font-extrabold text-4xl text-white mb-1">{item.stat}</div>
                <div className="text-brand-green text-xs font-semibold uppercase tracking-[0.15em] mb-4">{item.label}</div>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── PARTNERSHIP PROCESS ── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          label="How It Works"
          title={<>The Partnership <span className="text-primary">Process</span></>}
          description="Getting started is straightforward. Three steps from interest to active collaboration."
        />
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-border" aria-hidden="true" />
          {processSteps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-20 h-20 rounded-full bg-secondary border-4 border-background shadow-sm flex items-center justify-center mb-6">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">{s.step}</span>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── PARTNERSHIP FORM ── */}
    <section className="py-20 md:py-28 bg-secondary" id="partnership-form">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 xl:gap-20 items-start">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">Submit a Request</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mb-3">
              Partnership Request Form
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fill in the form and our partnerships team will review your submission and reach out within 2 business days.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Organisation Name *</label>
                  <Input placeholder="e.g. Apex Health Ltd" required value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Contact Person *</label>
                  <Input placeholder="Full name" required value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <Input type="email" placeholder="you@organisation.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input type="tel" placeholder="+234 xxx xxx xxxx" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Type of Partnership *</label>
                <select
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                >
                  <option value="">Select partnership type</option>
                  <option value="clinical">Clinical Partnership</option>
                  <option value="outreach">Outreach &amp; Foundation Partnership</option>
                  <option value="corporate">Corporate Partnership</option>
                  <option value="institutional">Institutional Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea
                  placeholder="Briefly describe your organisation and what you hope to achieve through this partnership…"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <Button type="submit" size="lg" className="font-semibold rounded-full px-8">
                <Send className="mr-2 w-4 h-4" /> Submit Partnership Request
              </Button>
            </form>
          </AnimatedSection>

          {/* sidebar */}
          <AnimatedSection delay={0.15}>
            <div className="bg-background rounded-2xl p-8 shadow-elevated space-y-8">
              <div>
                <Handshake className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl text-foreground mb-2">What Happens Next?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">After submitting, here is what to expect from our team.</p>
              </div>
              <div className="space-y-5">
                {[
                  { step: "1", label: "Acknowledgement",    desc: "You'll receive a confirmation email within 24 hours." },
                  { step: "2", label: "Initial Review",     desc: "Our team reviews your submission for alignment and fit." },
                  { step: "3", label: "Introductory Call",  desc: "We schedule a call to discuss goals and next steps." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-0.5">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-6 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href="mailto:partnerships@beaconhillsmile.com" className="hover:text-primary transition-colors">
                    partnerships@beaconhillsmile.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a href="tel:+2341234567890" className="hover:text-primary transition-colors">+234 123 456 7890</a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ── FINAL CTA ── */}
    <section className="py-20 md:py-24 overflow-hidden relative">
      <img src={heroClinicImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-foreground/40 pointer-events-none" />
      <div className="container relative z-10">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <Handshake className="w-12 h-12 text-brand-green mx-auto mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-5">
            Let's Build Meaningful Partnerships That Drive{" "}
            <span className="gradient-text-light">Real Healthcare Impact</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            If you share our commitment to expanding access to quality healthcare, we want to hear from you.
          </p>
          <Button
            size="lg"
            className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-10 font-semibold shadow-lg"
            onClick={() => document.getElementById("partnership-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Submit Partnership Request <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
  );
};

export default Partners;
