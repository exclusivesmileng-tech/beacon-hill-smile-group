import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-surface-blue text-foreground border-t border-foreground/8">
    <div className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

        {/* Col 1 — Logo, brief, social */}
        <div>
          <div className="mb-4">
            <img
              src="/images/logo_white.png"
              alt="Beaconhill Smile Group"
              className="w-44 h-auto object-contain"
            />
          </div>
          <p className="text-sm text-foreground/60 leading-relaxed mb-6">
            A purpose-driven healthcare group transforming lives through clinical excellence, social impact, and pan-African expansion.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2 — Beaconhill Smile Group (7 businesses) */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-brand-green">Beaconhill Smile Group</h4>
          <div className="flex flex-col gap-2.5 text-sm text-primary">
            <Link to="/businesses" className="hover:text-foreground transition-colors">Beaconhill Smile</Link>
            <Link to="/businesses" className="hover:text-foreground transition-colors">Exclusive Smile</Link>
            <Link to="/businesses" className="hover:text-foreground transition-colors">Vision Craft</Link>
            <Link to="/businesses" className="hover:text-foreground transition-colors">Phoenix Derma</Link>
            <Link to="/businesses" className="hover:text-foreground transition-colors">Prima Medical</Link>
            <Link to="/businesses" className="hover:text-foreground transition-colors">ClearSound ENT</Link>
            <Link to="/businesses" className="hover:text-foreground transition-colors">BeaconHealth Plus</Link>
          </div>
        </div>

        {/* Col 3 — Impact Arm */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-brand-green">Impact Arm</h4>
          <div className="flex flex-col gap-2.5 text-sm text-primary">
            <Link to="/foundation" className="hover:text-foreground transition-colors font-medium">Beaconhill Foundation</Link>
            <Link to="/foundation" className="hover:text-foreground transition-colors">1 Million Smiles Initiative</Link>
            <Link to="/foundation" className="hover:text-foreground transition-colors">Community Outreach</Link>
            <Link to="/foundation" className="hover:text-foreground transition-colors">School Programs</Link>
            <Link to="/foundation" className="hover:text-foreground transition-colors">Partner Campaigns</Link>
            <Link to="/foundation" className="hover:text-foreground transition-colors">Donate</Link>
            <Link to="/foundation" className="hover:text-foreground transition-colors">Volunteer</Link>
          </div>
        </div>

        {/* Col 4 — Get In Touch */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-brand-green">Get In Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-primary">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                12, Agoro Odiyan Street,<br />
                Off Adeola Odeku,<br />
                Victoria Island, Lagos, Nigeria
              </span>
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
  </footer>
);

export default Footer;
