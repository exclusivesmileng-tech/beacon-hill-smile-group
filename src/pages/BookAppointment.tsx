import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin, Smile, Eye, Sparkles, Ear, Stethoscope, Brain, Leaf,
  ChevronRight, ChevronLeft, CheckCircle2, Clock, User, Mail,
  Phone, FileText, CalendarDays, Lock, ArrowRight, Shield,
  Zap, Star, Sun, Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import Layout from "@/components/Layout";

/* ─── Data ───────────────────────────────────────────────── */

const clinics = [
  {
    id: "vi",
    name: "Victoria Island Clinic",
    address: "97 Ahmadu Bello Way, VI",
    city: "Lagos, Nigeria",
    flag: "🇳🇬",
    hours: "Mon – Sun · 8 am – 6 pm",
    color: "hsl(212,68%,32%)",
  },
  {
    id: "ikeja",
    name: "Ikeja Clinic",
    address: "50–52 Toyin Street",
    city: "Lagos, Nigeria",
    flag: "🇳🇬",
    hours: "Mon – Sun · 8 am – 6 pm",
    color: "hsl(212,68%,32%)",
  },
  {
    id: "morrow",
    name: "Beaconhill Global",
    address: "5916 Jonesboro Road",
    city: "Morrow, GA 30260",
    flag: "🇺🇸",
    hours: "Mon – Fri · 9 am – 5 pm",
    color: "hsl(198,72%,32%)",
  },
];

const services = [
  {
    id: "dental",
    label: "Dental Care",
    icon: Smile,
    brand: "Beaconhill Smile Clinic",
    logo: "/images/business_logo/beaconhill_smile.png",
    tag: "General Dentistry",
    desc: "Check-ups, fillings, whitening, orthodontics & implants — open 7 days a week.",
  },
  {
    id: "premium",
    label: "Premium Dental",
    icon: Smile,
    brand: "Exclusive Smile",
    logo: "/images/business_logo/exclusive_smile.png",
    tag: "Luxury Dental",
    desc: "Advanced restorative & cosmetic dentistry for those who demand the very best.",
    premium: true,
  },
  {
    id: "eye",
    label: "Eye Care",
    icon: Eye,
    brand: "Vision Craft Eye Clinic",
    logo: "/images/business_logo/Vision_Craft.png",
    tag: "Ophthalmology",
    desc: "Full-spectrum eye care — exams, optical services, glaucoma & cataract treatment.",
  },
  {
    id: "derma",
    label: "Dermatology & Aesthetics",
    icon: Sparkles,
    brand: "Phoenix Derma Aesthetics",
    logo: "/images/business_logo/phoenix.png",
    tag: "Skin & Aesthetics",
    desc: "Medically backed skin health and cosmetic treatments tailored to your skin type.",
  },
  {
    id: "ent",
    label: "ENT",
    icon: Ear,
    brand: "ClearSound ENT",
    logo: "/images/business_logo/clearsound.png",
    tag: "Ear, Nose & Throat",
    desc: "Expert diagnosis and treatment of ear, nose, and throat conditions.",
  },
  {
    id: "general",
    label: "General Medical",
    icon: Stethoscope,
    brand: "Beaconhill Smile Clinic",
    logo: "/images/business_logo/beaconhill_smile.png",
    tag: "Primary Care",
    desc: "Routine check-ups, consultations, and specialist referrals.",
  },
  {
    id: "behavioral",
    label: "Behavioral Health",
    icon: Brain,
    brand: "Prima Medical",
    logo: "/images/business_logo/prima.png",
    tag: "Mental Wellness",
    desc: "Discreet, concierge-level mental health care — by invitation only.",
    premium: true,
  },
  {
    id: "wellness",
    label: "Wellness",
    icon: Leaf,
    brand: "Northshore Health",
    logo: "/images/business_logo/northshore.png",
    tag: "Preventive Health",
    desc: "Preventive care and quality health & wellness consumer products.",
  },
];

const morningSlots    = ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];
const afternoonSlots  = ["12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"];

const STEPS = ["Clinic", "Service", "Date & Time", "Your Details"];

/* ─── Animations ─────────────────────────────────────────── */

const ease = [0.16, 1, 0.3, 1] as const;

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
  exit:   (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48, transition: { duration: 0.25, ease } }),
};

const stagger = { show: { transition: { staggerChildren: 0.07 } } };
const fadeUp  = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

/* ─── Helpers ────────────────────────────────────────────── */

function isWeekend(d: Date) { const n = d.getDay(); return n === 0 || n === 6; }
function generateRef()      { return "BHG-" + Math.random().toString(36).substring(2, 8).toUpperCase(); }

/* ─── Types ──────────────────────────────────────────────── */

type Details = { name: string; email: string; phone: string; notes: string };

/* ─── Step Indicator ─────────────────────────────────────── */

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-4">
        {STEPS.map((label, i) => {
          const done   = i < current;
          const active = i === current;
          return (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                <div className="flex-1 flex flex-col items-center">
                  <motion.div
                    animate={active ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.4 }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      done   ? "bg-primary text-primary-foreground shadow-md" :
                      active ? "bg-primary text-primary-foreground ring-4 ring-primary/20 shadow-lg" :
                               "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {done ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                  </motion.div>
                  <span className={`text-[11px] font-semibold mt-1.5 text-center leading-tight transition-colors ${
                    active ? "text-primary" : done ? "text-foreground" : "text-muted-foreground"
                  }`}>{label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="h-px flex-1 mx-1 mt-[-18px]">
                    <motion.div
                      className="h-full bg-primary rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: done ? 1 : 0 }}
                      transition={{ duration: 0.5, ease }}
                      style={{ background: done ? "hsl(212,68%,32%)" : "hsl(214,20%,88%)" }}
                    />
                    <div className="h-full bg-border rounded-full -mt-full" style={{ marginTop: "-1px" }} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          animate={{ width: `${((current) / total) * 100}%` }}
          transition={{ duration: 0.5, ease }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[11px] text-muted-foreground">Step {current + 1} of {total}</span>
        <span className="text-[11px] text-primary font-semibold">{Math.round((current / total) * 100)}% complete</span>
      </div>
    </div>
  );
}

/* ─── Booking Summary Sidebar ────────────────────────────── */

function BookingSummary({
  clinicId, serviceId, date, time, step,
}: {
  clinicId: string; serviceId: string;
  date: Date | undefined; time: string; step: number;
}) {
  const clinic  = clinics.find((c) => c.id === clinicId);
  const service = services.find((s) => s.id === serviceId);

  const rows = [
    {
      icon: MapPin,
      label: "Clinic",
      value: clinic ? `${clinic.flag} ${clinic.name}` : null,
      sub: clinic?.city,
      show: step >= 0,
    },
    {
      icon: service?.icon ?? Stethoscope,
      label: "Service",
      value: service?.label ?? null,
      sub: service?.brand ?? null,
      show: step >= 1,
    },
    {
      icon: CalendarDays,
      label: "Date",
      value: date ? date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }) : null,
      sub: null,
      show: step >= 2,
    },
    {
      icon: Clock,
      label: "Time",
      value: time || null,
      sub: null,
      show: step >= 2,
    },
  ];

  return (
    <div className="bg-secondary/40 border border-border/50 rounded-2xl p-6 sticky top-24">
      <h3 className="font-display font-bold text-sm text-foreground mb-5 uppercase tracking-wider">Your Booking</h3>

      <div className="space-y-4 mb-6">
        {rows.map((row, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
              row.value ? "bg-primary/10" : "bg-secondary"
            }`}>
              <row.icon className={`w-4 h-4 transition-colors ${row.value ? "text-primary" : "text-muted-foreground/30"}`} />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{row.label}</div>
              <AnimatePresence mode="wait">
                {row.value ? (
                  <motion.div
                    key={row.value}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    <div className="text-sm font-semibold text-foreground mt-0.5">{row.value}</div>
                    {row.sub && <div className="text-xs text-muted-foreground">{row.sub}</div>}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-muted-foreground/50 mt-0.5"
                  >
                    —
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div className="border-t border-border/40 pt-5 space-y-2.5">
        {[
          { icon: Zap,    text: "Confirmation within 24 hours" },
          { icon: Shield, text: "Free cancellation anytime" },
          { icon: Star,   text: "Trusted by 50,000+ patients" },
        ].map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="text-xs text-muted-foreground">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Step 1: Clinic ─────────────────────────────────────── */

function StepClinic({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <div className="mb-7">
        <h2 className="font-display font-bold text-2xl text-foreground mb-1">Choose a Clinic</h2>
        <p className="text-muted-foreground text-sm">Select the location most convenient for you.</p>
      </div>
      <motion.div className="grid gap-3" variants={stagger} initial="hidden" animate="show">
        {clinics.map((c) => {
          const active = value === c.id;
          return (
            <motion.button
              key={c.id}
              variants={fadeUp}
              onClick={() => onChange(c.id)}
              whileHover={{ y: -2, boxShadow: "0 8px 24px -4px hsl(212 68% 32% / 0.12)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
              className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 ${
                active
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border/60 hover:border-primary/40 bg-background"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all ${
                    active ? "bg-primary/10 shadow-sm" : "bg-secondary"
                  }`}>
                    {c.flag}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">{c.name}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                      <MapPin className="w-3 h-3" />{c.address}, {c.city}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Clock className="w-3 h-3" /> {c.hours}
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ─── Step 2: Service ────────────────────────────────────── */

function ServiceCard({
  s, active, onClick,
}: {
  s: typeof services[0];
  active: boolean;
  onClick: () => void;
}) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <motion.button
      variants={fadeUp}
      onClick={onClick}
      whileHover={{ y: -2, boxShadow: s.premium
        ? "0 10px 30px -6px hsl(40 80% 55% / 0.18)"
        : "0 10px 30px -6px hsl(212 68% 32% / 0.14)"
      }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
      className={`w-full text-left rounded-2xl border-2 p-4 transition-all duration-200 ${
        s.premium
          ? active ? "border-amber-400 bg-amber-50/70 shadow-lg"    : "border-amber-200/50 hover:border-amber-300 bg-background"
          : active ? "border-primary bg-primary/5 shadow-lg"         : "border-border/60 hover:border-primary/30 bg-background"
      }`}
    >
      <div className="flex items-center gap-4">

        {/* Brand logo */}
        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 p-2 transition-all ${
          active
            ? s.premium ? "bg-amber-50 border-amber-200" : "bg-white border-primary/20 shadow-sm"
            : "bg-secondary border-border/40"
        }`}>
          {!imgErr ? (
            <img
              src={s.logo}
              alt={s.brand}
              className="w-full h-full object-contain"
              onError={() => setImgErr(true)}
            />
          ) : (
            <s.icon className={`w-6 h-6 ${s.premium ? "text-amber-500" : "text-primary"}`} />
          )}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <span className="font-display font-bold text-sm text-foreground">{s.label}</span>
            {s.premium && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full border border-amber-200/70">
                <Lock className="w-2.5 h-2.5" /> Premium
              </span>
            )}
          </div>
          <div className={`text-xs font-semibold mb-1 ${s.premium ? "text-amber-600" : "text-primary"}`}>
            {s.brand}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{s.desc}</p>
        </div>

        {/* Tag + check */}
        <div className="flex flex-col items-end gap-2 shrink-0 ml-1">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full transition-colors ${
            active
              ? s.premium ? "bg-amber-200/60 text-amber-800" : "bg-primary/12 text-primary"
              : "bg-secondary text-muted-foreground"
          }`}>
            {s.tag}
          </span>
          <motion.div
            initial={false}
            animate={{ scale: active ? 1 : 0.4, opacity: active ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
          >
            <CheckCircle2 className={`w-5 h-5 ${s.premium ? "text-amber-500" : "text-primary"}`} />
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
}

function StepService({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display font-bold text-2xl text-foreground mb-1">Choose a Service</h2>
        <p className="text-muted-foreground text-sm">
          Each service is delivered by a specialist brand within the Beaconhill Group.
        </p>
      </div>
      <motion.div className="grid gap-2.5" variants={stagger} initial="hidden" animate="show">
        {services.map((s) => (
          <ServiceCard
            key={s.id}
            s={s}
            active={value === s.id}
            onClick={() => onChange(s.id)}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Step 3: Date & Time ────────────────────────────────── */

function SlotGroup({
  label, icon: Icon, slots, selected, onSelect,
}: {
  label: string;
  icon: React.ElementType;
  slots: string[];
  selected: string;
  onSelect: (t: string) => void;
}) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-1.5 mb-2.5">
        <Icon className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {slots.map((t) => (
          <motion.button
            key={t}
            onClick={() => onSelect(t)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 440, damping: 24 }}
            className={`py-2 rounded-xl text-xs font-semibold border-2 transition-all duration-150 ${
              selected === t
                ? "border-primary bg-primary text-primary-foreground shadow-md"
                : "border-border/60 hover:border-primary/50 text-foreground bg-background"
            }`}
          >
            {t}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function StepDateTime({
  date, time, clinicId, onDate, onTime,
}: {
  date: Date | undefined; time: string; clinicId: string;
  onDate: (d: Date | undefined) => void; onTime: (t: string) => void;
}) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const disableDay = (d: Date) => d < today || (clinicId === "morrow" && isWeekend(d));

  return (
    <div>
      <div className="mb-7">
        <h2 className="font-display font-bold text-2xl text-foreground mb-1">Pick a Date & Time</h2>
        <p className="text-muted-foreground text-sm">Choose your preferred appointment slot.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <div className="bg-secondary/40 border border-border/40 rounded-2xl p-4 flex flex-col items-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => { onDate(d); onTime(""); }}
            disabled={disableDay}
            className="rounded-xl"
          />
          {clinicId === "morrow" && (
            <p className="text-[11px] text-muted-foreground text-center mt-2">
              Morrow, GA clinic is open Mon – Fri only.
            </p>
          )}
        </div>

        {/* Time slots */}
        <div>
          <div className="flex items-center gap-2 h-8 mb-4">
            <AnimatePresence mode="wait">
              {date ? (
                <motion.div
                  key="date-label"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    {date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}
                  </span>
                </motion.div>
              ) : (
                <motion.span
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-muted-foreground"
                >
                  Select a date to see available slots
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            {date ? (
              <motion.div
                key="slots"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease }}
              >
                <SlotGroup label="Morning"   icon={Sun}  slots={morningSlots}   selected={time} onSelect={onTime} />
                <SlotGroup label="Afternoon" icon={Moon} slots={afternoonSlots} selected={time} onSelect={onTime} />
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-52 rounded-2xl bg-secondary/40 border border-dashed border-border/60 text-muted-foreground gap-3"
              >
                <CalendarDays className="w-10 h-10 opacity-25" />
                <span className="text-sm">Pick a date first</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 4: Details ────────────────────────────────────── */

function StepDetails({ value, onChange }: { value: Details; onChange: (v: Details) => void }) {
  const set = (k: keyof Details) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange({ ...value, [k]: e.target.value });

  return (
    <div>
      <div className="mb-7">
        <h2 className="font-display font-bold text-2xl text-foreground mb-1">Your Details</h2>
        <p className="text-muted-foreground text-sm">Almost done — a few details so we can prepare for your visit.</p>
      </div>

      <motion.div className="space-y-5" variants={stagger} initial="hidden" animate="show">
        <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-2">
              <User className="w-3 h-3" /> Full Name <span className="text-accent normal-case font-normal tracking-normal">*</span>
            </label>
            <Input
              placeholder="e.g. Adaeze Okafor"
              value={value.name}
              onChange={set("name")}
              className="rounded-xl h-11 border-border/60 focus:border-primary"
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-2">
              <Phone className="w-3 h-3" /> Phone Number <span className="text-accent normal-case font-normal tracking-normal">*</span>
            </label>
            <Input
              type="tel"
              placeholder="+234 800 000 0000"
              value={value.phone}
              onChange={set("phone")}
              className="rounded-xl h-11 border-border/60 focus:border-primary"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-2">
            <Mail className="w-3 h-3" /> Email Address <span className="text-accent normal-case font-normal tracking-normal">*</span>
          </label>
          <Input
            type="email"
            placeholder="you@example.com"
            value={value.email}
            onChange={set("email")}
            className="rounded-xl h-11 border-border/60 focus:border-primary"
          />
          <p className="text-[11px] text-muted-foreground mt-1.5">Your confirmation will be sent here.</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-2">
            <FileText className="w-3 h-3" /> Notes <span className="text-muted-foreground normal-case font-normal tracking-normal">(optional)</span>
          </label>
          <Textarea
            placeholder="Symptoms, concerns, or anything helpful for your care team…"
            value={value.notes}
            onChange={set("notes")}
            rows={4}
            className="rounded-xl resize-none border-border/60 focus:border-primary"
          />
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-start gap-2 p-3 bg-secondary/60 rounded-xl">
          <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            Your information is kept strictly confidential and used only to prepare for your visit.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── Confirmation ───────────────────────────────────────── */

function StepConfirmed({
  clinicId, serviceId, date, time, name,
}: {
  clinicId: string; serviceId: string;
  date: Date | undefined; time: string; name: string;
}) {
  const clinic  = clinics.find((c) => c.id === clinicId);
  const service = services.find((s) => s.id === serviceId);
  const [ref]   = useState(generateRef);

  const nextSteps = [
    { step: "1", title: "Confirmation Call",    desc: "Our team will call or WhatsApp you within a few hours to confirm." },
    { step: "2", title: "Reminder Sent",         desc: "You'll receive a reminder 24 hours before your appointment." },
    { step: "3", title: "Arrive & Get Care",     desc: "Show up, check in at reception, and receive world-class care." },
  ];

  return (
    <div className="text-center py-4">
      {/* Animated checkmark */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.05 }}
          className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.2 }}
          >
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </motion.div>
        </motion.div>
        {/* Ripple rings */}
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-primary/20"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 1.4, delay: 0.3 + i * 0.4, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease, delay: 0.3 }}
      >
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-2">
          You're all set{name ? `, ${name.split(" ")[0]}` : ""}!
        </h2>
        <p className="text-muted-foreground text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          Your appointment request has been received. We'll confirm within 24 hours.
        </p>

        {/* Summary card */}
        <div className="bg-secondary/60 border border-border/40 rounded-2xl p-5 text-left max-w-sm mx-auto mb-8 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Clinic",   value: `${clinic?.flag} ${clinic?.name}` },
              { label: "Service",  value: service?.label },
              { label: "Date",     value: date?.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }) },
              { label: "Time",     value: time },
            ].map(({ label, value }) => (
              <div key={label} className="bg-background rounded-xl p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">{label}</div>
                <div className="text-sm font-semibold text-foreground">{value}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-muted-foreground">Reference</span>
            <span className="text-xs font-mono font-bold text-primary bg-primary/8 px-2.5 py-1 rounded-lg">{ref}</span>
          </div>
        </div>

        {/* What happens next */}
        <div className="max-w-sm mx-auto text-left mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">What Happens Next</h3>
          <div className="space-y-4">
            {nextSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.5 + i * 0.12, ease }}
                className="flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-[11px] font-bold text-primary-foreground shrink-0 mt-0.5">
                  {s.step}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{s.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" className="rounded-xl font-semibold">
            <Link to="/">Back to Home <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl font-semibold">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */

const BookAppointment = () => {
  const [step,      setStep]      = useState(0);
  const [dir,       setDir]       = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const [clinic,  setClinic]  = useState("");
  const [service, setService] = useState("");
  const [date,    setDate]    = useState<Date | undefined>(undefined);
  const [time,    setTime]    = useState("");
  const [details, setDetails] = useState<Details>({ name: "", email: "", phone: "", notes: "" });

  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Auto-advance on clinic / service selection */
  function pickClinic(v: string) {
    setClinic(v);
    autoAdvanceTimer.current = setTimeout(() => { setDir(1); setStep(1); }, 520);
  }
  function pickService(v: string) {
    setService(v);
    autoAdvanceTimer.current = setTimeout(() => { setDir(1); setStep(2); }, 520);
  }
  useEffect(() => () => { if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current); }, []);

  const canNext = [
    !!clinic,
    !!service,
    !!date && !!time,
    !!details.name && !!details.email && !!details.phone,
  ];

  function go(next: number) {
    if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    setDir(next > step ? 1 : -1);
    setStep(next);
  }

  function submit() {
    setDir(1);
    setConfirmed(true);
  }

  return (
    <Layout>
      <title>Book an Appointment — Beaconhill Smile Group</title>

      {/* ── Hero ── */}
      <div className="bg-primary pt-24 pb-14 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(198,72%,15%)] pointer-events-none" />
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/4 blur-[80px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
              <CalendarDays className="w-3.5 h-3.5 text-primary-foreground" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground">Book Appointment</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground leading-tight mb-4">
              Schedule Your Visit
            </h1>
            <p className="text-primary-foreground/65 text-base md:text-lg max-w-xl mx-auto mb-8">
              Quality care is a few steps away. Choose your clinic, service, and preferred time.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Zap,    label: "Takes ~2 minutes"       },
                { icon: Shield, label: "Free cancellation"      },
                { icon: Star,   label: "50,000+ patients served" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-primary-foreground/80 font-medium">
                  <Icon className="w-3 h-3" /> {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Form area ── */}
      <div className="bg-background">
        <div className="container py-12 md:py-16">
          {!confirmed ? (
            <div className="grid lg:grid-cols-[1fr_320px] gap-10 max-w-5xl mx-auto">

              {/* Left — steps */}
              <div>
                <StepIndicator current={step} total={STEPS.length} />
                <div className="bg-background border border-border/50 rounded-3xl shadow-card p-6 md:p-10 overflow-hidden">
                  <AnimatePresence mode="wait" custom={dir}>
                    <motion.div key={step} custom={dir} variants={slide} initial="enter" animate="center" exit="exit">
                      {step === 0 && <StepClinic  value={clinic}  onChange={pickClinic}  />}
                      {step === 1 && <StepService value={service} onChange={pickService} />}
                      {step === 2 && (
                        <StepDateTime
                          date={date} time={time} clinicId={clinic}
                          onDate={setDate} onTime={setTime}
                        />
                      )}
                      {step === 3 && <StepDetails value={details} onChange={setDetails} />}
                    </motion.div>
                  </AnimatePresence>

                  {/* Nav */}
                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/40">
                    <Button
                      variant="ghost"
                      onClick={() => go(step - 1)}
                      disabled={step === 0}
                      className="gap-2 rounded-xl font-semibold text-muted-foreground"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </Button>

                    {step < 3 ? (
                      <Button
                        onClick={() => go(step + 1)}
                        disabled={!canNext[step]}
                        className="gap-2 rounded-xl font-semibold px-8 h-11"
                      >
                        Continue <ChevronRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button
                        onClick={submit}
                        disabled={!canNext[3]}
                        className="gap-2 rounded-xl font-semibold px-8 h-11"
                      >
                        Confirm Booking <CheckCircle2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Right — sidebar */}
              <div className="hidden lg:block">
                <BookingSummary
                  clinicId={clinic} serviceId={service}
                  date={date} time={time} step={step}
                />
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="bg-background border border-border/50 rounded-3xl shadow-card p-6 md:p-10 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key="confirmed" custom={1} variants={slide} initial="enter" animate="center" exit="exit">
                    <StepConfirmed
                      clinicId={clinic} serviceId={service}
                      date={date} time={time} name={details.name}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BookAppointment;
