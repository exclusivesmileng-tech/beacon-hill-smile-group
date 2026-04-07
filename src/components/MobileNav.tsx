import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Heart,
  LayoutGrid,
  CalendarPlus,
  X,
  Users,
  Handshake,
  BookOpen,
  Phone,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const moreLinks = [
  { path: "/about",     icon: Users,     label: "About",    desc: "Our story & leadership" },
  { path: "/partners",  icon: Handshake, label: "Partners", desc: "Strategic alliances"     },
  { path: "/insights",  icon: BookOpen,  label: "Insights", desc: "News & articles"         },
  { path: "/contact",   icon: Phone,     label: "Contact",  desc: "Get in touch"            },
];

interface TabItemProps {
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
}

function TabItem({ path, icon: Icon, label, active }: TabItemProps) {
  return (
    <Link
      to={path}
      className="flex-1 flex flex-col items-center justify-end pb-2 gap-0.5 relative pt-2"
    >
      {active && (
        <motion.span
          layoutId="tab-pill"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full bg-brand-green"
          transition={{ duration: 0.3, ease }}
        />
      )}
      <Icon
        className={`w-[22px] h-[22px] transition-colors duration-200 ${
          active ? "text-brand-green" : "text-muted-foreground"
        }`}
      />
      <span
        className={`text-[10px] font-medium leading-none transition-colors duration-200 ${
          active ? "text-brand-green" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}

export default function MobileNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const location  = useLocation();
  const isActive  = (path: string) => location.pathname === path;
  const moreActive = moreLinks.some((l) => location.pathname === l.path);

  return (
    <>
      {/* ── Bottom Tab Bar ── */}
      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      >
        <div
          className="bg-background/96 backdrop-blur-xl border-t border-border shadow-[0_-4px_28px_-4px_hsl(215_25%_12%/0.1)]"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="flex items-end h-16">
            {/* Home */}
            <TabItem path="/" icon={Home} label="Home" active={isActive("/")} />

            {/* Businesses */}
            <TabItem
              path="/businesses"
              icon={Building2}
              label="Businesses"
              active={isActive("/businesses")}
            />

            {/* ── Center CTA — Book ── */}
            <div className="flex-1 flex flex-col items-center justify-end pb-2">
              <Link
                to="/contact"
                aria-label="Book an appointment"
                className="relative -mt-4 mb-1 w-[52px] h-[52px] rounded-full bg-brand-green flex items-center justify-center shadow-[0_4px_20px_0_hsl(84_55%_38%/0.5)] transition-transform duration-150 active:scale-90"
              >
                {/* Subtle pulse ring */}
                <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-20 pointer-events-none" />
                <CalendarPlus className="w-5 h-5 text-white relative z-10" />
              </Link>
              <span className="text-[10px] font-semibold text-brand-green leading-none">
                Book
              </span>
            </div>

            {/* Foundation */}
            <TabItem
              path="/foundation"
              icon={Heart}
              label="Foundation"
              active={isActive("/foundation")}
            />

            {/* More */}
            <button
              onClick={() => setMoreOpen(true)}
              aria-label="More pages"
              className="flex-1 flex flex-col items-center justify-end pb-2 gap-0.5 relative pt-2"
            >
              {moreActive && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full bg-brand-green"
                  transition={{ duration: 0.3, ease }}
                />
              )}
              <LayoutGrid
                className={`w-[22px] h-[22px] transition-colors duration-200 ${
                  moreActive ? "text-brand-green" : "text-muted-foreground"
                }`}
              />
              <span
                className={`text-[10px] font-medium leading-none transition-colors duration-200 ${
                  moreActive ? "text-brand-green" : "text-muted-foreground"
                }`}
              >
                More
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── "More" Bottom Sheet ── */}
      <AnimatePresence>
        {moreOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-foreground/55 backdrop-blur-sm lg:hidden"
              onClick={() => setMoreOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              key="sheet"
              drag="y"
              dragConstraints={{ top: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 80) setMoreOpen(false);
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease }}
              className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background rounded-t-[28px] overflow-hidden"
              style={{ paddingBottom: "env(safe-area-inset-bottom, 16px)" }}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing">
                <div className="w-10 h-1 rounded-full bg-border" />
              </div>

              <div className="px-5 pb-5">
                {/* Header */}
                <div className="flex items-center justify-between py-3 mb-4 border-b border-border">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-0.5">
                      Beaconhill Smile Group
                    </p>
                    <span className="font-display font-bold text-lg text-foreground leading-tight">
                      Navigate
                    </span>
                  </div>
                  <button
                    onClick={() => setMoreOpen(false)}
                    aria-label="Close"
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center active:scale-90 transition-transform duration-150"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                {/* Links grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {moreLinks.map((link) => {
                    const active = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMoreOpen(false)}
                        className={`flex items-center gap-3 p-4 rounded-2xl border transition-colors duration-150 active:scale-[0.97] ${
                          active
                            ? "border-brand-green/30 bg-brand-green/10 text-brand-green"
                            : "border-border bg-muted/40 text-foreground"
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            active ? "bg-brand-green/15" : "bg-background"
                          }`}
                        >
                          <link.icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-sm leading-tight">{link.label}</div>
                          <div className="text-[11px] text-muted-foreground leading-tight truncate">
                            {link.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Book Appointment CTA */}
                <Link
                  to="/contact"
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center justify-between w-full bg-brand-green text-white rounded-2xl px-5 py-4 font-semibold text-sm active:scale-[0.97] transition-transform duration-150 mb-3"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </Link>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/2348023016600"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center justify-between w-full border border-[#25D366]/40 bg-[#25D366]/5 text-[#128c4e] rounded-2xl px-5 py-4 font-semibold text-sm active:scale-[0.97] transition-transform duration-150"
                >
                  <span>Chat on WhatsApp</span>
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
