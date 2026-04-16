import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ChevronDown, CalendarDays } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────── */

type FooterLink = { label: string; href: string; external?: boolean };

/* ─── Data ───────────────────────────────────────────────── */

const sections: { label: string; links: FooterLink[] }[] = [
  {
    label: "Beaconhill Smile Group",
    links: [
      { label: "Beaconhill Smile",  href: "https://www.beaconhillsmile.com/",  external: true },
      { label: "Exclusive Smile",   href: "https://www.exclusivesmileng.com/", external: true },
      { label: "Vision Craft",      href: "https://www.visioncraftng.com/",    external: true },
      { label: "Phoenix Derma",     href: "https://www.phoenixderma.com/",     external: true },
      { label: "Prima Medical",     href: "https://www.primamedical.org/",     external: true },
      { label: "ClearSound ENT",    href: "https://www.clearsoundent.org/",    external: true },
      { label: "BeaconHealth Plus", href: "/businesses" },
    ],
  },
  {
    label: "Impact Arm",
    links: [
      { label: "Beaconhill Foundation",      href: "/foundation" },
      { label: "1 Million Smiles Initiative", href: "/foundation" },
      { label: "Community Outreach",         href: "/foundation" },
      { label: "School Programs",            href: "/foundation" },
      { label: "Partner Campaigns",          href: "/foundation" },
      { label: "Donate",                     href: "/foundation" },
      { label: "Volunteer",                  href: "/foundation" },
    ],
  },
];

const socials = [
  { icon: Facebook,  href: "https://facebook.com",  label: "Facebook"  },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter,   href: "https://twitter.com",   label: "X/Twitter" },
  { icon: Linkedin,  href: "https://linkedin.com",  label: "LinkedIn"  },
];

/* ─── Shared link renderer ───────────────────────────────── */

function FooterNavLink({ link, className }: { link: FooterLink; className: string }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.href} className={className}>
      {link.label}
    </Link>
  );
}

/* ─── Accordion section (mobile only) ───────────────────── */

function AccordionSection({ label, links }: { label: string; links: FooterLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-foreground/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-display font-semibold text-sm uppercase tracking-wider text-brand-green">
          {label}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown className="w-4 h-4 text-foreground/40" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 flex flex-col gap-3">
              {links.map((l) => (
                <FooterNavLink
                  key={l.label}
                  link={l}
                  className="text-sm text-primary hover:text-foreground transition-colors py-0.5 active:opacity-60"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Footer ─────────────────────────────────────────────── */

const Footer = () => (
  <footer className="bg-surface-blue text-foreground border-t border-foreground/8">

    {/* ── MOBILE LAYOUT ── */}
    <div className="lg:hidden">
      <div className="container pt-10 pb-6 flex flex-col gap-8">

        {/* Logo */}
        <div className="flex justify-center">
          <img src="/images/logo_white.png" alt="Beaconhill Smile Group" className="w-40 h-auto object-contain" />
        </div>

        {/* Tagline */}
        <p className="text-sm text-foreground/55 leading-relaxed text-center max-w-xs mx-auto">
          Transforming lives through clinical excellence, social impact, and pan-African expansion.
        </p>

        {/* Book CTA — prominent mobile button */}
        <Link
          to="/book"
          className="flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-2xl py-4 active:scale-[0.97] transition-transform duration-150 shadow-md"
        >
          <CalendarDays className="w-4 h-4" />
          Book an Appointment
        </Link>

        {/* Contact — large tap targets */}
        <div className="flex flex-col gap-3">
          <a
            href="tel:08023016600"
            className="flex items-center gap-3 bg-primary/8 border border-primary/15 rounded-2xl px-5 py-4 active:bg-primary/15 transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/12 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-primary/60 mb-0.5">Call Us</div>
              <div className="text-sm font-semibold text-foreground">0802 301 6600</div>
            </div>
          </a>

          <a
            href="mailto:hello@beaconhillsmilegroup.org"
            className="flex items-center gap-3 bg-primary/8 border border-primary/15 rounded-2xl px-5 py-4 active:bg-primary/15 transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/12 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-primary/60 mb-0.5">Email Us</div>
              <div className="text-sm font-semibold text-foreground truncate">hello@beaconhillsmilegroup.org</div>
            </div>
          </a>

          <div className="flex items-center gap-3 bg-primary/8 border border-primary/15 rounded-2xl px-5 py-4">
            <div className="w-9 h-9 rounded-xl bg-primary/12 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-primary/60 mb-0.5">Visit Us</div>
              <div className="text-sm text-foreground/80 leading-snug">12, Agoro Odiyan St, Victoria Island, Lagos</div>
            </div>
          </div>
        </div>

        {/* Accordion link sections */}
        <div className="border-t border-foreground/10">
          {sections.map((s) => (
            <AccordionSection key={s.label} label={s.label} links={s.links} />
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center active:bg-primary/20 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-foreground/10 pt-6 flex flex-col items-center gap-3 text-xs text-foreground/40">
          <p>© {new Date().getFullYear()} Beaconhill Smile Group. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>

    {/* ── DESKTOP LAYOUT ── */}
    <div className="hidden lg:block">
      <div className="container py-20">
        <div className="grid grid-cols-4 gap-10 xl:gap-12">

          {/* Col 1 — Brand */}
          <div>
            <div className="mb-4">
              <img src="/images/logo_white.png" alt="Beaconhill Smile Group" className="w-44 h-auto object-contain" />
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
              A purpose-driven healthcare group transforming lives through clinical excellence, social impact, and pan-African expansion.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 & 3 — Link sections */}
          {sections.map((s) => (
            <div key={s.label}>
              <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-brand-green">{s.label}</h4>
              <div className="flex flex-col gap-2.5 text-sm text-primary">
                {s.links.map((l) => (
                  <FooterNavLink
                    key={l.label}
                    link={l}
                    className="hover:text-foreground transition-colors"
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-brand-green">Get In Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-primary">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>12, Agoro Odiyan Street,<br />Off Adeola Odeku,<br />Victoria Island, Lagos, Nigeria</span>
              </div>
              <a href="tel:08023016600" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> 0802 301 6600
              </a>
              <a href="mailto:hello@beaconhillsmilegroup.org" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> hello@beaconhillsmilegroup.org
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} Beaconhill Smile Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
