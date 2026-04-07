import { Link } from "react-router-dom";
import { FileText, Mail, MapPin, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const lastUpdated = "April 2026";

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    content: (
      <p>
        These Terms of Service ("Terms") govern your access to and use of the Beaconhill Smile
        Group website and services. By accessing or using our website, you confirm that you have
        read, understood, and agree to be bound by these Terms. If you do not agree, please
        discontinue use immediately.
      </p>
    ),
  },
  {
    id: "use-of-website",
    number: "02",
    title: "Use of Website",
    content: (
      <div className="space-y-3">
        <p>By using this website, you agree to the following:</p>
        {[
          "You will only use the website for lawful purposes and in a manner consistent with all applicable local, national, and international laws.",
          "You will not engage in any conduct that restricts or inhibits any other person's use or enjoyment of the website.",
          "You will not attempt to gain unauthorized access to any part of the website or its related systems or networks.",
          "You will not transmit any unsolicited or unauthorized advertising or promotional material, or any other form of spam.",
        ].map((item) => (
          <div key={item} className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <p className="text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "medical-disclaimer",
    number: "03",
    title: "Medical Disclaimer",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/8 border border-accent/20">
          <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-foreground font-medium text-sm leading-relaxed">
            The information provided on this website is for general informational purposes only.
            It does not constitute professional medical advice, diagnosis, or treatment.
          </p>
        </div>
        <p>
          Always seek the advice of a qualified healthcare provider with any questions you may
          have regarding a medical condition. Never disregard professional medical advice or
          delay seeking treatment because of something you have read on this website.
        </p>
        <p>
          Beaconhill Smile Group does not recommend or endorse any specific tests, physicians,
          products, procedures, or opinions mentioned on this site.
        </p>
      </div>
    ),
  },
  {
    id: "appointments-and-services",
    number: "04",
    title: "Appointments & Services",
    content: (
      <div className="space-y-3">
        {[
          "Appointment requests submitted through this website are subject to confirmation by our team and do not constitute a guaranteed booking.",
          "Service availability may vary across our clinic locations and may change without prior notice.",
          "We reserve the right to decline appointment requests at our discretion.",
          "For urgent medical needs, please contact our clinics directly or visit an emergency facility.",
        ].map((item) => (
          <div key={item} className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
            <p className="text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "privacy",
    number: "05",
    title: "Privacy",
    content: (
      <p>
        Your use of this website is also governed by our{" "}
        <Link
          to="/privacy-policy"
          className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
        >
          Privacy Policy
        </Link>
        , which is incorporated into these Terms by reference. By using this website, you also
        consent to the collection and use of your information as described in the Privacy Policy.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    number: "06",
    title: "Limitation of Liability",
    content: (
      <div className="space-y-4">
        <p>
          To the fullest extent permitted by law, Beaconhill Smile Group and its affiliates,
          directors, employees, and agents shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising from:
        </p>
        {[
          "Your access to or use of (or inability to access or use) this website",
          "Any content obtained from this website",
          "Unauthorized access to or alteration of your transmissions or data",
          "Any errors or omissions in any content on the website",
        ].map((item) => (
          <div key={item} className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-muted-foreground/40 flex-shrink-0" />
            <p className="text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "international-use",
    number: "07",
    title: "International Use",
    content: (
      <p>
        Beaconhill Smile Group operates in Nigeria and through{" "}
        <strong className="text-foreground">Beaconhill Global LLC</strong> in the United States.
        Users accessing this website from other jurisdictions do so on their own initiative and
        are responsible for compliance with applicable local laws. The availability of services
        described on this website may vary by location.
      </p>
    ),
  },
  {
    id: "changes-to-terms",
    number: "08",
    title: "Changes to Terms",
    content: (
      <p>
        We reserve the right to modify these Terms at any time. Changes will be effective
        immediately upon posting to this page. Your continued use of the website after any changes
        constitutes your acceptance of the revised Terms. We encourage you to review these Terms
        periodically.
      </p>
    ),
  },
  {
    id: "contact",
    number: "09",
    title: "Contact",
    content: (
      <div className="space-y-3">
        <p>For questions about these Terms, please reach out to us:</p>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="mt-0.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <p><strong className="text-foreground">Email:</strong>{" "}
              <a href="mailto:hello@beaconhillsmilegroup.org" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">hello@beaconhillsmilegroup.org</a>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <p><strong className="text-foreground">Nigeria (Main Operations):</strong>{" "}
              <span className="text-muted-foreground">12, Agoro Odiyan Street, Off Adeola Odeku, Victoria Island, Lagos, Nigeria</span>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
            <p><strong className="text-foreground">United States:</strong>{" "}
              <span className="text-muted-foreground">Beaconhill Global LLC, 5916 Jonesboro Road, Morrow, GA 30260, USA</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const TermsOfService = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-foreground py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/8 via-transparent to-primary/10 pointer-events-none" />
      <div className="container relative z-10 max-w-3xl">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-green/15 border border-brand-green/20 rounded-full mb-6">
            <FileText className="w-3.5 h-3.5 text-brand-green" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Legal</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
            Terms of Service
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            Please read these terms carefully before using our website or services. They set out
            your rights and responsibilities as a user.
          </p>
          <p className="mt-6 text-white/30 text-sm">Last updated: {lastUpdated}</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Content */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">

          {/* Table of contents */}
          <AnimatedSection className="bg-surface-blue rounded-2xl p-6 md:p-8 mb-14 border border-border">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Contents
            </p>
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-primary hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span className="text-muted-foreground/50 tabular-nums text-xs">{s.number}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </AnimatedSection>

          {/* Sections */}
          <div className="space-y-14">
            {sections.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.05}>
                <div id={s.id} className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-display font-bold text-4xl text-brand-green/20 leading-none select-none tabular-nums">
                      {s.number}
                    </span>
                    <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mt-1">
                      {s.title}
                    </h2>
                  </div>
                  <div className="pl-[3.25rem] text-muted-foreground leading-relaxed">
                    {s.content}
                  </div>
                  {i < sections.length - 1 && (
                    <div className="mt-14 h-px bg-border" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact */}
          <AnimatedSection className="mt-16 rounded-2xl bg-foreground text-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-3">
              Contact Us
            </p>
            <h3 className="font-display font-bold text-xl mb-6">Questions about these terms?</h3>
            <div className="space-y-3 text-sm text-white/65">
              <a
                href="mailto:hello@beaconhillsmilegroup.org"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                hello@beaconhillsmilegroup.org
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>12, Agoro Odiyan Street, Off Adeola Odeku</p>
                  <p>Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-brand-green font-medium">Beaconhill Global LLC</p>
                  <p>5916 Jonesboro Road, Morrow, GA 30260, USA</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Related link + back */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/privacy-policy"
              className="text-sm text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
            >
              View our Privacy Policy →
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Return to Homepage
            </Link>
          </div>

        </div>
      </div>
    </section>
  </Layout>
);

export default TermsOfService;
