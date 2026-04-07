import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Phone, Mail, MessageCircle, X, Headphones } from "lucide-react";

const PHONE = "+2348012345678";
const WHATSAPP = "+2348012345678";
const EMAIL = "hello@beaconhillsmilegroup.com";

const contactItems = [
  {
    id: "phone",
    icon: Phone,
    label: "Call Us",
    href: `tel:${PHONE}`,
    bg: "bg-brand-green",
    tooltip: PHONE,
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP.replace(/\D/g, "")}`,
    bg: "bg-[#25D366]",
    tooltip: "Chat on WhatsApp",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Us",
    href: `mailto:${EMAIL}`,
    bg: "bg-primary",
    tooltip: EMAIL,
  },
];

export default function FloatingActions() {
  const [showBackTop, setShowBackTop] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── Back to top (bottom-left) ── */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            key="back-top"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 left-6 z-50 hidden lg:flex group items-center gap-2 bg-brand-green border border-brand-green text-white rounded-full pl-4 pr-5 py-2.5 shadow-xl hover:bg-brand-green/85 hover:border-brand-green/85 transition-colors duration-300"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="text-sm font-medium">Back to top</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Contact launcher (bottom-right) — desktop only ── */}
      <div className="fixed bottom-6 right-6 z-50 hidden lg:flex flex-col items-end gap-3">

        {/* Expanded contact items */}
        <AnimatePresence>
          {contactOpen && (
            <>
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ duration: 0.22, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 group"
                >
                  {/* Tooltip label */}
                  <span className="hidden sm:block bg-foreground border border-white/[0.12] text-white/80 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.tooltip}
                  </span>

                  <a
                    href={item.href}
                    target={item.id === "whatsapp" ? "_blank" : undefined}
                    rel={item.id === "whatsapp" ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className={`w-12 h-12 ${item.bg} text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200`}
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.button
          onClick={() => setContactOpen((o) => !o)}
          aria-label={contactOpen ? "Close contact options" : "Open contact options"}
          className="relative w-14 h-14 bg-brand-green text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-green/90 transition-colors duration-200"
          whileTap={{ scale: 0.93 }}
        >
          {/* Pulse ring when closed */}
          {!contactOpen && (
            <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-30" />
          )}

          <AnimatePresence mode="wait">
            {contactOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Headphones className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

      </div>
    </>
  );
}
