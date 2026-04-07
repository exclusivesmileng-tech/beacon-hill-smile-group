import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const leaders = [
  {
    name: "Dr. Oluwaseun Akinbobola",
    title: "Chairman & Co-Founder",
    role: "CO-FOUNDER",
    image: "/images/dr-akinbobola.webp",
    href: "/leadership/dr-akinbobola",
  },
  {
    name: "Mrs. Ibitayo Akinbobola",
    title: "CEO & Co-Founder",
    role: "CO-FOUNDER",
    image: "/images/mrs-akinbobola.webp",
    href: "/leadership/mrs-akinbobola",
  },
];

const LeadershipSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(198,72%,14%) 0%, hsl(198,72%,18%) 50%, hsl(212,68%,16%) 100%)" }}>
    {/* Subtle grid texture */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(198 72% 70%) 1px, transparent 1px), linear-gradient(90deg, hsl(198 72% 70%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    {/* Ambient glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(84_55%_40%)]/6 blur-[120px] pointer-events-none" />

    <div className="container relative z-10">

      {/* ── Header ── */}
      <motion.div
        className="mb-16 md:mb-20"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div>
          {/* Over-label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-green/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-green/80">
              The People Behind the Vision
            </span>
            <div className="h-px w-8 bg-brand-green/60" />
          </div>

          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
            Meet the People{" "}
            <span className="text-brand-green">Driving Our Vision</span>
          </h2>
        </div>
      </motion.div>

      {/* ── Side-by-side photo grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {leaders.map((leader, i) => (
          <Link key={leader.href} to={leader.href}>
          <motion.div
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: i * 0.15, ease }}
          >
            {/* Photo */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.img
                src={leader.image}
                alt={leader.name}
                loading="lazy"
                className="w-full h-full object-cover object-top"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease }}
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Hover overlay with CTA */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-green text-white text-sm font-bold shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  View Biography <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Role badge — top */}
              <div className="absolute top-4 left-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] px-2.5 py-1.5 border border-white/30 text-white/80 bg-black/30 backdrop-blur-sm rounded-sm">
                  {leader.role}
                </span>
              </div>

              {/* Accent line — appears on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-green origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35, ease }}
              />
            </div>

            {/* Info overlay at bottom of photo */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="h-px w-6 bg-brand-green mb-3 transition-all duration-300 group-hover:w-10" />
              <h3 className="font-display font-bold text-lg text-white leading-tight mb-1">
                {leader.name}
              </h3>
              <p className="text-white/55 text-xs uppercase tracking-[0.12em] font-semibold">
                {leader.title}
              </p>
            </div>
          </motion.div>
          </Link>
        ))}
      </div>

    </div>
  </section>
);

export default LeadershipSection;
