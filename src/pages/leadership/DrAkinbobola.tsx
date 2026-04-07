import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin, Globe, ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import LeadershipHeroBg from "@/components/LeadershipHeroBg";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const credentials = [
  "Wharton School Executive Education",
  "Strathmore Business School",
  "Lagos Business School — Owner-Manager Programme",
  "Co-Founder, Beaconhill Smile Group",
];

const DrAkinbobola = () => (
  <Layout>
    {/* ── HERO ── */}
    <section className="relative min-h-[90vh] flex items-stretch bg-foreground overflow-hidden">
      <LeadershipHeroBg />
      <div className="container relative z-10 flex flex-col lg:flex-row items-stretch w-full py-20 lg:py-0 gap-0">

        {/* Left — text content */}
        <div className="flex flex-col justify-center flex-1 lg:pr-16 xl:pr-24 py-16 lg:py-24">
          {/* Breadcrumb */}
          <motion.div {...fadeUp(0.05)} className="mb-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Leadership
            </Link>
          </motion.div>

          {/* Label with decorative lines */}
          <motion.div {...fadeUp(0.15)} className="flex items-center gap-3 mb-6">
            <span className="flex-1 h-px bg-brand-green/40 max-w-[40px]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
              Leadership &amp; Governance
            </span>
            <span className="flex-1 h-px bg-brand-green/40 max-w-[40px]" />
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.25)}
            className="font-display font-bold text-4xl md:text-5xl xl:text-6xl text-white leading-tight mb-4"
          >
            Dr. Oluwaseun
            <br />
            Akinbobola
          </motion.h1>

          {/* Role */}
          <motion.p
            {...fadeUp(0.32)}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green mb-6"
          >
            Chairman &amp; Co-Founder, Beaconhill Smile Group
          </motion.p>

          {/* Short bio */}
          <motion.p
            {...fadeUp(0.38)}
            className="text-white/65 text-base md:text-lg leading-relaxed max-w-lg mb-10"
          >
            Healthcare entrepreneur and strategic investor providing governance
            and long-term direction across the Group.
          </motion.p>

          {/* Social icons */}
          <motion.div {...fadeUp(0.44)} className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <Link
              to="/"
              aria-label="Website"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Right — portrait image (desktop) */}
        <div className="hidden lg:block relative w-[42%] xl:w-[45%] flex-shrink-0 -mr-8">
          {/* Gradient blend on left edge */}
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-foreground via-foreground/70 to-transparent pointer-events-none" />
          <motion.img
            src="/images/dr-akinbobola.webp"
            alt="Dr. Oluwaseun Akinbobola"
            className="w-full h-full object-cover object-top"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
          />
        </div>

        {/* Mobile portrait — full bleed */}
        <motion.div
          className="block lg:hidden -mx-8 overflow-hidden mt-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <img
            src="/images/dr-akinbobola.webp"
            alt="Dr. Oluwaseun Akinbobola"
            className="w-full aspect-[3/4] object-cover object-top"
          />
        </motion.div>
      </div>
    </section>

    {/* ── BODY ── */}
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-10 lg:gap-16">

          {/* Left — biography */}
          <div>
            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
              className="mb-12"
            >
              <span
                className="block font-display font-bold text-[6rem] md:text-[8rem] leading-none text-primary/15 select-none -mb-6"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="font-display font-semibold text-xl md:text-2xl xl:text-3xl text-foreground leading-snug pl-2">
                Healthcare entrepreneur and strategic investor providing
                governance and long-term direction across the Group.
              </blockquote>
            </motion.div>

            {/* Full bio */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                Full Biography
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Dr. Oluwaseun Akinbobola is a healthcare entrepreneur, business
                strategist, and investor with a proven track record of building
                and scaling multi-sector businesses across healthcare, real
                estate, and consumer markets. As Chairman, he provides strategic
                direction and governance oversight, ensuring the Group's growth
                is anchored in disciplined execution, structured expansion, and
                long-term value creation. He is the Co-Founder of Beaconhill
                Smile Group.
              </p>
            </motion.div>
          </div>

          {/* Right — credentials + CTA */}
          <div className="flex flex-col gap-6">
            {/* Credentials card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="rounded-2xl bg-foreground text-white p-7 md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green mb-6">
                Credentials &amp; Qualifications
              </p>
              <ol className="space-y-4">
                {credentials.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/80 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Meet Our Leadership CTA */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
            >
              <Link
                to="/about"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-card-hover transition-all duration-400"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    Explore
                  </p>
                  <p className="font-display font-semibold text-foreground text-base">
                    Meet Our Leadership
                  </p>
                </div>
                <span className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default DrAkinbobola;
