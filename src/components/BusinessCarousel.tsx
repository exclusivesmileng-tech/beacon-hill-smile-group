import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Business {
  logo: string;
  color: string;
  tag: string;
  title: string;
  desc: string;
  link: string;
}

const businesses: Business[] = [
  {
    logo: "/images/business_logo/beaconhill_smile.png",
    color: "#7AC143",
    tag: "Dental Care",
    title: "Beaconhill Smile Clinic",
    desc: "Africa's first 7-day dental practice, located in Victoria Island and Ikeja, Lagos. Specialising in high-quality cosmetic and family dental care.",
    link: "/businesses",
  },
  {
    logo: "/images/business_logo/exclusive_smile.png",
    color: "#5B21B6",
    tag: "Premium Dental",
    title: "Exclusive Smile",
    desc: "Premium, anxiety-free dental care tailored for high-net-worth individuals and executives who demand the best in a private, discreet setting.",
    link: "/businesses",
  },
  {
    logo: "/images/business_logo/Vision_Craft.png",
    color: "#0EA5E9",
    tag: "Eye Care",
    title: "Vision Craft Eye Clinic",
    desc: "Full-spectrum eye care — from routine sight checks and prescriptions to advanced surgical treatments for patients of all ages.",
    link: "/businesses",
  },
  {
    logo: "/images/business_logo/phoenix.png",
    color: "#A65E3B",
    tag: "Aesthetics",
    title: "Phoenix Derma Aesthetics",
    desc: "Advanced skin and aesthetic care with personalised, medically backed treatments tailored to professionals and individuals who prioritise their skin health.",
    link: "/businesses",
  },
  {
    logo: "/images/business_logo/clearsound.png",
    color: "#1F6F78",
    tag: "ENT",
    title: "ClearSound ENT",
    desc: "Specialised ear, nose, and throat diagnosis and treatment for patients of all ages, using state-of-the-art diagnostic equipment.",
    link: "/businesses",
  },
  {
    logo: "/images/business_logo/prima.png",
    color: "#2563EB",
    tag: "Mental Health",
    title: "Prima Medical",
    desc: "An outpatient behavioral mental health center providing discreet, expert care for individuals navigating high-pressure professional lives.",
    link: "/businesses",
  },
  {
    logo: "/images/business_logo/northshore.png",
    color: "#0E7490",
    tag: "Wellness",
    title: "Northshore Health",
    desc: "A leading distributor of quality FMCG products across Nigeria, delivering trusted brands that support everyday wellness and household needs.",
    link: "/businesses",
  },
];

export default function BusinessCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[idx] as HTMLElement | undefined;
    if (!card) return;
    // Centre the card in the scroll container
    const offset = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left: offset, behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    let closest = 0;
    let minDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const card = child as HTMLElement;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const viewCenter = el.scrollLeft + el.clientWidth / 2;
      const dist = Math.abs(cardCenter - viewCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const prev = () => scrollToIndex(Math.max(0, active - 1));
  const next = () => scrollToIndex(Math.min(businesses.length - 1, active + 1));

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210_40%_98%)] to-background pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Businesses</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-[1.08] max-w-2xl">
            Delivering Quality Healthcare,{" "}
            <span className="gradient-text">Shaping the Future</span>{" "}
            of Wellness
          </h2>
        </div>

        {/* Scroll-snap carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 md:-mx-8 md:px-8"
          style={{ scrollbarWidth: "none" }}
        >
          {businesses.map((b) => (
            <div
              key={b.title}
              className="snap-center shrink-0 w-[82vw] sm:w-[60vw] md:w-[44vw] lg:w-[30vw] xl:w-[28vw] rounded-3xl p-7 md:p-8 flex flex-col cursor-default"
              style={{
                background: `linear-gradient(145deg, ${b.color}18 0%, ${b.color}06 100%)`,
                border: `1px solid ${b.color}22`,
              }}
            >
              {/* Decorative glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] pointer-events-none opacity-20"
                style={{ backgroundColor: b.color }}
              />

              {/* Logo */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center p-2.5 mb-6 border"
                style={{ backgroundColor: `${b.color}12`, borderColor: `${b.color}20` }}
              >
                <img src={b.logo} alt={b.title} className="w-full h-full object-contain" />
              </div>

              {/* Tag */}
              <span
                className="inline-flex self-start text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full mb-4"
                style={{ backgroundColor: `${b.color}15`, color: b.color }}
              >
                {b.tag}
              </span>

              {/* Title */}
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground leading-tight mb-3">
                {b.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                {b.desc}
              </p>

              {/* CTA */}
              <Link
                to={b.link}
                className="inline-flex items-center gap-2 self-start text-sm font-bold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:brightness-110 hover:shadow-lg"
                style={{ backgroundColor: b.color }}
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between gap-4 mt-6">
          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={active === 0}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={active === businesses.length - 1}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {businesses.map((b, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className="rounded-full transition-all duration-300 h-1.5"
                style={{
                  width: i === active ? 28 : 8,
                  backgroundColor: i === active ? b.color : "hsl(214 20% 82%)",
                }}
              />
            ))}
          </div>

          {/* View all */}
          <Link
            to="/businesses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border border-border rounded-full px-5 py-2.5 hover:border-primary hover:text-primary transition-colors duration-200"
          >
            View all
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

