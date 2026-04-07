import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin, Calendar, ArrowLeft, ArrowRight, Users, Clock,
  HeartHandshake, ChevronRight, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import foundationImg from "@/assets/foundation-outreach.jpg";
import heroClinicImg from "@/assets/hero-clinic.jpg";
import doctorImg from "@/assets/doctor-portrait.jpg";
import eyeCareImg from "@/assets/eye-care.jpg";
import dermatologyImg from "@/assets/dermatology.jpg";

/* ─── Data ──────────────────────────────────── */

export const outreaches = [
  {
    slug: "ajah-community-dental-outreach-2026",
    title: "Ajah Community Dental Outreach",
    location: "Ajah, Lagos",
    date: "February 2026",
    tag: "Dental Outreach",
    img: heroClinicImg,
    desc: "Free dental screenings, extractions, and oral health education for 280 residents of Ajah.",
    overview: {
      what: "A one-day outreach providing free dental screenings, basic extractions, and structured oral hygiene education to community members of all ages.",
      where: "Ajah Community Hall, Lekki-Epe Expressway, Lagos State",
      why: "Ajah's rapidly growing population has many low-income households with little access to preventive dental care. Most residents have never seen a dentist.",
    },
    numbers: [
      { value: "280", label: "Patients Treated" },
      { value: "3", label: "Dentists Deployed" },
      { value: "47", label: "Extractions Performed" },
      { value: "1 Day", label: "Duration" },
    ],
    services: [
      "Dental Screening",
      "Tooth Extractions",
      "Oral Hygiene Education",
      "Fluoride Treatment",
      "Referral Letters",
    ],
    galleryImgs: [heroClinicImg, foundationImg, doctorImg, heroClinicImg, foundationImg],
    testimonial: {
      quote:
        "I haven't seen a dentist in over 5 years. The team was so professional — they treated me with real dignity. I didn't expect this kind of care for free.",
      name: "Community Resident",
      role: "Ajah, Lagos",
    },
  },
  {
    slug: "mushin-school-health-fair-2025",
    title: "Mushin School Health Fair",
    location: "Mushin, Lagos",
    date: "October 2025",
    tag: "School Program",
    img: doctorImg,
    desc: "Oral health education, dental screenings, and basic vision tests for 420 primary school pupils across two Mushin schools.",
    overview: {
      what: "A structured two-day school health programme combining dental check-ups, vision screening, and interactive oral hygiene workshops for children ages 5–15.",
      where: "St. Peter's Primary School & Mushin Government LEA School, Lagos",
      why: "Early intervention in children's oral and eye health prevents long-term complications and builds lifelong healthy habits that extend to entire families.",
    },
    numbers: [
      { value: "420", label: "Children Reached" },
      { value: "2", label: "Schools Covered" },
      { value: "63+", label: "Referrals Issued" },
      { value: "2 Days", label: "Duration" },
    ],
    services: [
      "Dental Screening",
      "Vision Testing",
      "Oral Health Workshops",
      "Toothbrush Distribution",
      "Teacher Health Training",
    ],
    galleryImgs: [doctorImg, heroClinicImg, foundationImg, doctorImg, heroClinicImg],
    testimonial: {
      quote:
        "My son came home teaching me how to brush properly. This is exactly the kind of education our children need — practical, not just classroom talk.",
      name: "Parent",
      role: "Mushin, Lagos",
    },
  },
  {
    slug: "lekki-community-screening-2025",
    title: "Lekki Community Screening",
    location: "Lekki Phase 2, Lagos",
    date: "June 2025",
    tag: "Health Screening",
    img: eyeCareImg,
    desc: "Multi-specialty free screening covering eye health, ENT, and blood pressure for underserved Lekki Phase 2 residents.",
    overview: {
      what: "A multi-specialty free screening day combining eye examinations, ENT assessments, blood pressure, and blood sugar checks in a single community venue.",
      where: "Lekki Phase 2 Community Ground, Lagos",
      why: "Despite proximity to affluent areas, many Lekki Phase 2 residents lack the financial means to access specialist care. Early detection saves lives.",
    },
    numbers: [
      { value: "315", label: "Residents Screened" },
      { value: "4", label: "Specialists Deployed" },
      { value: "88", label: "Referrals Issued" },
      { value: "1 Day", label: "Duration" },
    ],
    services: [
      "Eye Examinations",
      "ENT Assessments",
      "Blood Pressure Checks",
      "Blood Sugar Testing",
      "Diabetes Counselling",
    ],
    galleryImgs: [eyeCareImg, foundationImg, heroClinicImg, eyeCareImg, foundationImg],
    testimonial: {
      quote:
        "I was told I have early-stage hypertension — I had absolutely no idea. This free screening may have saved my life. Thank you, Beaconhill Foundation.",
      name: "Community Resident",
      role: "Lekki Phase 2, Lagos",
    },
  },
  {
    slug: "lagos-island-community-health-day-2024",
    title: "Lagos Island Community Health Day",
    location: "Lagos Island, Lagos",
    date: "March 2024",
    tag: "Health Screening",
    img: foundationImg,
    desc: "Free multi-specialty health screening for over 320 community residents across Lagos Island, with dental, optical, and general health services.",
    overview: {
      what: "A full-day free healthcare event bringing dental, optical, and general health teams together to serve the people of Lagos Island — one of the state's most densely populated communities.",
      where: "Broad Street Community Centre, Lagos Island, Lagos",
      why: "Lagos Island hosts some of the most densely populated low-income communities in the state, with historically poor healthcare infrastructure and access.",
    },
    numbers: [
      { value: "320", label: "Patients Screened" },
      { value: "5", label: "Clinicians Deployed" },
      { value: "12", label: "Services Offered" },
      { value: "1 Day", label: "Duration" },
    ],
    services: [
      "Dental Screening",
      "Eye Examination",
      "Blood Pressure",
      "Blood Sugar Testing",
      "Nutrition Counselling",
    ],
    galleryImgs: [foundationImg, heroClinicImg, eyeCareImg, foundationImg, doctorImg],
    testimonial: {
      quote:
        "This was the first time I've had a dental check-up in my entire life. The doctors were kind and patient with everyone — young and old.",
      name: "Community Elder",
      role: "Lagos Island, Lagos",
    },
  },
  {
    slug: "ikeja-schools-oral-health-2023",
    title: "Ikeja Schools Oral Health Program",
    location: "Ikeja, Lagos",
    date: "November 2023",
    tag: "School Program",
    img: heroClinicImg,
    desc: "A 3-school oral health education and screening programme reaching 650+ students across government primaries in Ikeja.",
    overview: {
      what: "Multi-school dental screening and oral hygiene education programme covering preventive care, correct brushing technique, and the value of regular dental visits.",
      where: "3 Government Primary Schools, Ikeja, Lagos",
      why: "Oral hygiene habits formed in childhood last a lifetime. Reaching children at scale in schools is the most efficient path to long-term community oral health.",
    },
    numbers: [
      { value: "650+", label: "Students Reached" },
      { value: "3", label: "Schools Visited" },
      { value: "210+", label: "Referrals Issued" },
      { value: "3 Days", label: "Duration" },
    ],
    services: [
      "Dental Screening",
      "Oral Health Education",
      "Toothbrush & Paste Distribution",
      "Teacher Training",
      "Parent Information Sessions",
    ],
    galleryImgs: [heroClinicImg, foundationImg, doctorImg, heroClinicImg, foundationImg],
    testimonial: {
      quote:
        "The students were so engaged you could hear them asking questions and laughing. You could see them going home excited to teach their parents what they learned.",
      name: "School Principal",
      role: "Ikeja Primary School, Lagos",
    },
  },
  {
    slug: "surulere-wellness-outreach-2023",
    title: "Surulere Wellness Outreach",
    location: "Surulere, Lagos",
    date: "August 2023",
    tag: "Community Outreach",
    img: dermatologyImg,
    desc: "Community wellness day in Surulere combining skin health, dental checks, and nutrition guidance for 240 residents.",
    overview: {
      what: "A community wellness event bringing skin health consultations, dental screenings, and nutrition guidance together — with free take-home education materials for all attendees.",
      where: "Stadium Area Community Hall, Surulere, Lagos",
      why: "Skin conditions, dental decay, and malnutrition co-occur in dense urban communities. Addressing them together in one event maximises reach and community trust.",
    },
    numbers: [
      { value: "240", label: "Residents Attended" },
      { value: "3", label: "Specialties Covered" },
      { value: "80", label: "Consultations Given" },
      { value: "1 Day", label: "Duration" },
    ],
    services: [
      "Skin Health Consultations",
      "Dental Screening",
      "Nutrition Guidance",
      "Sun Protection Education",
      "Referral Letters",
    ],
    galleryImgs: [dermatologyImg, foundationImg, heroClinicImg, dermatologyImg, foundationImg],
    testimonial: {
      quote:
        "I came for my teeth and left with a skin diagnosis I didn't know I had. This is the kind of healthcare we never normally get access to.",
      name: "Community Resident",
      role: "Surulere, Lagos",
    },
  },
  {
    slug: "victoria-island-corporate-health-drive-2023",
    title: "Victoria Island Corporate Health Drive",
    location: "Victoria Island, Lagos",
    date: "May 2023",
    tag: "Corporate",
    img: foundationImg,
    desc: "Workplace health screening and oral health education for staff of 4 Victoria Island corporate offices.",
    overview: {
      what: "A workplace health initiative bringing free dental, blood pressure, and blood sugar screenings directly to corporate office environments on Victoria Island.",
      where: "4 Corporate Offices, Victoria Island, Lagos",
      why: "High-pressure corporate workers often neglect preventive health. Taking services to their workplace removes barriers and normalises regular screening.",
    },
    numbers: [
      { value: "180", label: "Staff Screened" },
      { value: "4", label: "Offices Visited" },
      { value: "35", label: "Referrals Made" },
      { value: "2 Days", label: "Duration" },
    ],
    services: [
      "Dental Screening",
      "Blood Pressure Checks",
      "Blood Sugar Testing",
      "BMI Assessment",
      "Wellness Packs Distributed",
    ],
    galleryImgs: [foundationImg, heroClinicImg, doctorImg, foundationImg, heroClinicImg],
    testimonial: {
      quote:
        "We're busy people — having the clinic come to us made all the difference. Most of us hadn't had a check-up in months or years.",
      name: "HR Manager",
      role: "Victoria Island, Lagos",
    },
  },
  {
    slug: "abeokuta-community-screening-2023",
    title: "Abeokuta Community Screening",
    location: "Abeokuta, Ogun State",
    date: "February 2023",
    tag: "Health Screening",
    img: foundationImg,
    desc: "First out-of-Lagos outreach — free dental and eye screenings for 260 Abeokuta residents, marking the Foundation's expansion beyond the state.",
    overview: {
      what: "A landmark multi-specialty screening event in Abeokuta — the Foundation's first state-expansion outreach — providing dental and eye care to residents with no local access to specialist services.",
      where: "Abeokuta North Community Health Centre, Ogun State",
      why: "Expanding beyond Lagos was a key strategic milestone. Ogun State has even fewer specialist clinics per capita, making community outreach critically important.",
    },
    numbers: [
      { value: "260", label: "Residents Screened" },
      { value: "2", label: "Specialties Covered" },
      { value: "55", label: "Referrals Issued" },
      { value: "1 Day", label: "Duration" },
    ],
    services: [
      "Dental Screening",
      "Eye Examination",
      "Oral Hygiene Education",
      "Basic ENT Checks",
      "Referral Letters",
    ],
    galleryImgs: [foundationImg, heroClinicImg, eyeCareImg, foundationImg, doctorImg],
    testimonial: {
      quote:
        "We've never had a dental clinic come here before. This is new for our community. We hope you come back every year.",
      name: "Community Leader",
      role: "Abeokuta, Ogun State",
    },
  },
];

/* ─── Component ─────────────────────────────── */

const FoundationOutreach = () => {
  const { slug } = useParams<{ slug: string }>();
  const outreach = outreaches.find((o) => o.slug === slug);

  if (!outreach) return <Navigate to="/foundation" replace />;

  const related = outreaches.filter((o) => o.slug !== slug).slice(0, 3);

  return (
    <Layout>
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden bg-foreground pt-8 pb-16 md:pb-20">
        <div className="absolute inset-0">
          <img src={outreach.img} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/50" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="mb-6">
            <Link to="/foundation" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Foundation
            </Link>
          </motion.div>
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wider">
                {outreach.tag}
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight mb-5">
              {outreach.title}
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-5 text-sm text-white/55">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-accent" /> {outreach.location}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent" /> {outreach.date}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="container py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 xl:gap-16">

          {/* LEFT COLUMN */}
          <div className="space-y-16">

            {/* 1. Event Overview */}
            <AnimatedSection>
              <h2 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full bg-accent inline-block" />
                Event Overview
              </h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { label: "What Was Done", content: outreach.overview.what },
                  { label: "Where",         content: outreach.overview.where },
                  { label: "Why It Matters", content: outreach.overview.why  },
                ].map((item) => (
                  <div key={item.label} className="bg-secondary rounded-2xl p-6">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-accent mb-2">{item.label}</span>
                    <p className="text-foreground/80 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* 2. Key Impact Numbers */}
            <AnimatedSection delay={0.05}>
              <h2 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full bg-accent inline-block" />
                Key Impact Numbers
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {outreach.numbers.map((n) => (
                  <div key={n.label} className="bg-background border border-border rounded-2xl p-5 text-center shadow-card">
                    <div className="font-display font-extrabold text-3xl text-accent mb-1">{n.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.14em]">{n.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* 3. Services Provided */}
            <AnimatedSection delay={0.08}>
              <h2 className="font-display font-bold text-2xl text-foreground mb-5 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full bg-accent inline-block" />
                Services Provided
              </h2>
              <div className="flex flex-wrap gap-3">
                {outreach.services.map((s) => (
                  <span key={s} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium text-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> {s}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* 4. Photo Gallery */}
            <AnimatedSection delay={0.1}>
              <h2 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full bg-accent inline-block" />
                Photo Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="col-span-2 row-span-2 rounded-xl overflow-hidden aspect-[4/3]">
                  <img src={outreach.galleryImgs[0]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                {outreach.galleryImgs.slice(1, 5).map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-square">
                    <img src={img} alt={`Gallery ${i + 2}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* 5. Testimonial */}
            <AnimatedSection delay={0.12}>
              <h2 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full bg-accent inline-block" />
                From the Community
              </h2>
              <blockquote className="relative bg-accent/5 border border-accent/20 rounded-2xl p-8">
                <span className="absolute top-5 left-6 text-5xl text-accent/20 font-serif leading-none select-none">"</span>
                <p className="text-foreground/80 text-lg leading-relaxed italic pt-4 mb-6">
                  {outreach.testimonial.quote}
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                    <Users className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{outreach.testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{outreach.testimonial.role}</div>
                  </div>
                </footer>
              </blockquote>
            </AnimatedSection>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">

            {/* CTA card */}
            <AnimatedSection delay={0.1}>
              <div className="bg-foreground rounded-2xl p-7 text-center sticky top-8">
                <HeartHandshake className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-display font-bold text-white text-lg mb-3">Support Our Next Outreach</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  Partner, volunteer, or donate to help us bring healthcare to more communities like this one.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white rounded-full font-semibold">
                    <Link to="/contact">Get Involved <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-full border-white/15 text-white hover:bg-white/5 hover:text-white">
                    <Link to="/partners">Become a Partner</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* More outreaches */}
            <AnimatedSection delay={0.14}>
              <div className="bg-secondary rounded-2xl p-6">
                <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">More Outreaches</h4>
                <div className="space-y-3">
                  {outreaches
                    .filter((o) => o.slug !== slug)
                    .slice(0, 4)
                    .map((o) => (
                      <Link key={o.slug} to={`/foundation/outreach/${o.slug}`}
                        className="flex items-start gap-3 group">
                        <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg overflow-hidden bg-background">
                          <img src={o.img} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                            {o.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{o.date}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent shrink-0 mt-1" />
                      </Link>
                    ))}
                </div>
                <Button asChild variant="ghost" size="sm" className="mt-4 w-full text-accent hover:text-accent hover:bg-accent/5">
                  <Link to="/foundation">View All Outreaches</Link>
                </Button>
              </div>
            </AnimatedSection>

          </aside>
        </div>
      </div>

      {/* ── RELATED ── */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display font-bold text-2xl text-foreground mb-8">More from the Foundation</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((item, i) => (
              <AnimatedSection key={item.slug} delay={i * 0.08}>
                <Link to={`/foundation/outreach/${item.slug}`} className="block group">
                  <div className="rounded-2xl overflow-hidden border border-border bg-background hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 shadow-card hover:shadow-card-hover">
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img src={item.img} alt={item.title} loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-accent text-white px-2.5 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-[15px] text-foreground leading-snug mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                        <MapPin className="w-3.5 h-3.5 shrink-0" /> {item.location}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FoundationOutreach;
