import { Link } from "react-router-dom";
import { Shield, Mail, MapPin } from "lucide-react";
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
        Beaconhill Smile Group ("we", "our", "us") is committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, disclose, and safeguard your information when
        you interact with our website and services. Please read this policy carefully. If you
        disagree with its terms, please discontinue use of our website.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    content: (
      <div className="space-y-5">
        <p>We may collect the following categories of information:</p>
        <div className="space-y-3">
          {[
            {
              label: "Personal Information",
              desc: "Name, email address, and phone number when you submit a form or book an appointment.",
            },
            {
              label: "Health-Related Information",
              desc: "Any health details you voluntarily provide when requesting clinical services or appointments.",
            },
            {
              label: "Usage Data",
              desc: "IP address, browser type, operating system, pages visited, and time spent on our site — collected automatically through standard web technologies.",
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <p>
                <strong className="text-foreground">{item.label}:</strong>{" "}
                <span className="text-muted-foreground">{item.desc}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use-information",
    number: "03",
    title: "How We Use Your Information",
    content: (
      <div className="space-y-3">
        <p>We use the information we collect to:</p>
        {[
          "Respond to inquiries and provide customer support",
          "Schedule and manage healthcare appointments",
          "Improve our website, products, and services",
          "Send relevant updates, newsletters, or communications (with your consent)",
          "Comply with legal and regulatory obligations",
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
    id: "sharing-of-information",
    number: "04",
    title: "Sharing of Information",
    content: (
      <div className="space-y-4">
        <p className="font-medium text-foreground">
          We do not sell, trade, or rent your personal data to third parties.
        </p>
        <p>We may share your information only with:</p>
        {[
          "Authorized clinical staff and healthcare providers within the Beaconhill Smile Group",
          "Trusted third-party service providers (e.g., hosting platforms, email systems) who are contractually bound to protect your data",
          "Regulatory or government authorities where required by law",
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
    id: "data-protection",
    number: "05",
    title: "Data Protection",
    content: (
      <p>
        We implement appropriate technical and organizational security measures to protect your
        personal data from unauthorized access, disclosure, alteration, or destruction. However,
        no data transmission over the internet can be guaranteed to be 100% secure. We encourage
        you to take precautions to protect your personal information when online.
      </p>
    ),
  },
  {
    id: "international-data-use",
    number: "06",
    title: "International Data Use",
    content: (
      <p>
        As a global organization with operations in Nigeria and the United States (through{" "}
        <strong className="text-foreground">Beaconhill Global LLC</strong>), your data may be
        processed across jurisdictions. We ensure that any cross-border data transfers comply with
        applicable data protection laws and that equivalent safeguards are in place wherever your
        data is processed.
      </p>
    ),
  },
  {
    id: "your-rights",
    number: "07",
    title: "Your Rights",
    content: (
      <div className="space-y-3">
        <p>Depending on your location, you may have the right to:</p>
        {[
          "Request access to the personal data we hold about you",
          "Request correction of inaccurate or incomplete data",
          "Request deletion of your personal data (subject to legal obligations)",
          "Withdraw consent at any time where processing is based on consent",
          "Lodge a complaint with your local data protection authority",
        ].map((item) => (
          <div key={item} className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
            <p className="text-muted-foreground">{item}</p>
          </div>
        ))}
        <p className="pt-1">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:hello@beaconhillsmilegroup.org"
            className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
          >
            hello@beaconhillsmilegroup.org
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: "cookies",
    number: "08",
    title: "Cookies",
    content: (
      <p>
        Our website may use cookies and similar tracking technologies to enhance your browsing
        experience and analyze traffic patterns. You can control cookie settings through your
        browser preferences. Disabling cookies may affect the functionality of certain pages. We do
        not use cookies to collect health-related information.
      </p>
    ),
  },
  {
    id: "policy-updates",
    number: "09",
    title: "Updates to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or
        applicable laws. When we do, we will revise the "Last Updated" date at the top of this
        page. We encourage you to review this policy periodically to stay informed about how we
        protect your information.
      </p>
    ),
  },
  {
    id: "contact",
    number: "10",
    title: "Contact",
    content: (
      <div className="space-y-3">
        <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
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

const PrivacyPolicy = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-foreground py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-brand-green/5 pointer-events-none" />
      <div className="container relative z-10 max-w-3xl">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/15 border border-primary/20 rounded-full mb-6">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Legal</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
            Privacy Policy
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            We take your privacy seriously. This policy explains what data we collect, why we
            collect it, and how you can control it.
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
                    <span className="font-display font-bold text-4xl text-primary/15 leading-none select-none tabular-nums">
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
            <h3 className="font-display font-bold text-xl mb-6">Questions about this policy?</h3>
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

          {/* Back link */}
          <div className="mt-10 text-center">
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

export default PrivacyPolicy;
