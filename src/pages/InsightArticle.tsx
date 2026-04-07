import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroClinicImg from "@/assets/hero-clinic.jpg";
import eyeCareImg from "@/assets/eye-care.jpg";
import dermatologyImg from "@/assets/dermatology.jpg";
import foundationImg from "@/assets/foundation-outreach.jpg";
import doctorImg from "@/assets/doctor-portrait.jpg";

// Shared article data — single source of truth
export const posts = [
  {
    slug: "5-signs-you-need-to-see-a-dentist",
    category: "Dental Health",
    title: "5 Signs You Need to See a Dentist",
    excerpt: "Don't wait for pain. Here are the early warning signs that indicate it's time for a dental check-up.",
    date: "Mar 28, 2026", readTime: "4 min", featured: true, image: heroClinicImg,
    author: "Dr. Akinbobola", clinic: "Beaconhill Dental",
    body: `Many people only visit the dentist when they're in pain — but by then, minor issues have often become serious ones. Regular check-ups catch problems early, saving you time, discomfort, and money.

**1. Tooth Sensitivity**
Sudden sensitivity to hot or cold foods can signal enamel erosion or an exposed root. A dentist can identify the cause and recommend a treatment plan.

**2. Bleeding Gums**
Occasional bleeding when brushing may indicate gingivitis, the early stage of gum disease. Left untreated, this can progress to periodontitis — a leading cause of tooth loss.

**3. Persistent Bad Breath**
Bad breath that doesn't resolve with brushing may point to deeper issues like gum disease, cavities, or even systemic conditions.

**4. Jaw Pain or Clicking**
Discomfort in the jaw joint can indicate TMJ disorder. Early diagnosis improves outcomes significantly.

**5. Visible Discolouration or Spots**
Dark spots, white patches, or visible holes in teeth are signs of decay that should be evaluated promptly.`,
  },
  {
    slug: "understanding-your-skin-type",
    category: "Skin & Aesthetics",
    title: "Understanding Your Skin Type: A Complete Guide",
    excerpt: "Knowing your skin type is the first step to building an effective skincare routine.",
    date: "Mar 20, 2026", readTime: "6 min", featured: false, image: dermatologyImg,
    author: "Dermatology Team", clinic: "Beaconhill Dermatology",
    body: `Using the wrong products for your skin type can cause breakouts, dryness, or irritation — even with premium skincare. Here's how to identify yours.

**Normal Skin**
Balanced sebum levels, minimal imperfections, and no severe sensitivity. Products formulated for all skin types work well.

**Oily Skin**
Excess sebum production leads to shine and enlarged pores. Use lightweight, non-comedogenic products and avoid heavy creams.

**Dry Skin**
Tight, flaky, or rough texture after cleansing. Rich moisturisers and gentle cleansers are key.

**Combination Skin**
Oily T-zone (forehead, nose, chin) with normal or dry cheeks. Requires targeted product application.

**Sensitive Skin**
Prone to redness, itching, or reactions. Stick to fragrance-free, hypoallergenic formulas and patch-test new products.`,
  },
  {
    slug: "digital-eye-strain-prevention-treatment",
    category: "Eye Care",
    title: "Digital Eye Strain: Prevention & Treatment",
    excerpt: "Screen time is taking a toll on our eyes. Learn practical strategies to protect your vision in the digital age.",
    date: "Mar 15, 2026", readTime: "5 min", featured: false, image: eyeCareImg,
    author: "VisionCraft Team", clinic: "Beaconhill VisionCraft",
    body: `The average adult spends over 10 hours per day looking at screens. Digital eye strain — also called computer vision syndrome — affects millions worldwide.

**Symptoms to Watch For**
Headaches, blurred vision, dry eyes, neck and shoulder pain, and difficulty focusing are all common indicators.

**The 20-20-20 Rule**
Every 20 minutes, look at something 20 feet away for at least 20 seconds. This simple habit dramatically reduces fatigue.

**Optimise Your Environment**
Position screens at arm's length, slightly below eye level. Reduce glare with matte screen filters. Adjust brightness to match ambient lighting.

**Blink More Consciously**
We blink up to 60% less when staring at screens. Conscious blinking lubricates the eye surface and reduces dryness.

**Schedule Regular Eye Exams**
Annual check-ups can detect refractive errors that worsen strain. Blue light lenses may also help for heavy screen users.`,
  },
  {
    slug: "future-of-healthcare-sub-saharan-africa",
    category: "Company Updates",
    title: "The Future of Healthcare in Sub-Saharan Africa",
    excerpt: "How innovative healthcare models are bridging the gap in access and quality across the continent.",
    date: "Mar 8, 2026", readTime: "7 min", featured: false, image: foundationImg,
    author: "Beaconhill Editorial", clinic: "Beaconhill Group",
    body: `Sub-Saharan Africa faces a profound healthcare challenge — a growing population, a rising burden of non-communicable diseases, and a shortage of healthcare infrastructure.

Yet this constraint has also driven innovation. From mobile health clinics to telemedicine platforms, the region is developing solutions that the rest of the world is beginning to study.

**Multi-Specialty Hubs**
Concentrating dental, ophthalmological, dermatological, and general medical services under one roof reduces patient travel time and cost while improving continuity of care.

**Foundation-Driven Outreach**
Healthcare groups with social mandates — like the Beaconhill Foundation — are extending services to underserved communities through free screenings, mobile clinics, and health education.

**Technology-Enabled Diagnosis**
AI-assisted diagnostic tools are helping clinicians in resource-limited settings detect conditions earlier and more accurately.

**The Road Ahead**
Sustainable healthcare in Africa requires investment in training, infrastructure, and cross-sector partnerships. Beaconhill Smile Group's model — quality clinical care paired with community outreach — is one example of how the gap can be closed.`,
  },
  {
    slug: "everything-about-dental-implants",
    category: "Dental Health",
    title: "Everything You Need to Know About Dental Implants",
    excerpt: "A comprehensive guide to dental implants — from candidacy to recovery and long-term care.",
    date: "Feb 28, 2026", readTime: "8 min", featured: false, image: doctorImg,
    author: "Dr. Akinbobola", clinic: "Beaconhill Dental",
    body: `Dental implants are widely regarded as the gold standard for replacing missing teeth. Unlike dentures or bridges, they integrate with the jawbone, providing a stable, natural-looking result that can last a lifetime.

**Am I a Candidate?**
Most adults with good general health and sufficient bone density qualify. Conditions like uncontrolled diabetes or heavy smoking may require management before proceeding.

**The Procedure**
Step 1: Consultation and 3D imaging. Step 2: Implant placement (titanium post inserted into the jawbone). Step 3: Osseointegration — the bone fuses with the implant over 3–6 months. Step 4: Abutment and crown placement.

**Recovery**
Mild swelling and discomfort for a few days post-surgery is normal. Most patients return to daily activities within 48 hours.

**Long-Term Care**
Brush twice daily, floss regularly, and attend routine dental check-ups. With proper care, implants can last 20+ years.`,
  },
  {
    slug: "building-healthy-habits-that-stick",
    category: "General Wellness",
    title: "Building Healthy Habits That Stick",
    excerpt: "Small changes, big impact. Evidence-based strategies for creating sustainable health routines.",
    date: "Feb 20, 2026", readTime: "5 min", featured: false, image: heroClinicImg,
    author: "Wellness Team", clinic: "Beaconhill Medical",
    body: `Most health resolutions fail within weeks — not because of lack of motivation, but because of poor habit design. Behavioural science offers a better approach.

**Start Ridiculously Small**
James Clear's research on atomic habits shows that habits under 2 minutes are almost impossible to skip. Start with flossing one tooth, a 5-minute walk, or a single glass of water at breakfast.

**Attach to Existing Routines**
Habit stacking — pairing a new behaviour with an established one — dramatically improves follow-through. "After I pour my morning coffee, I will do 5 minutes of stretching."

**Track Visible Progress**
A simple calendar or habit tracker creates a "don't break the chain" motivation. Seeing a streak builds identity-based commitment.

**Manage the Environment**
Design your surroundings to make healthy choices the default. Place medications in view, keep healthy snacks at eye level, and charge your phone outside the bedroom.

**Forgive Slip-Ups Quickly**
Missing once is an accident. Missing twice is the start of a new habit. Recover fast — don't let one bad day become two.`,
  },
  {
    slug: "understanding-ent-health",
    category: "ENT Health",
    title: "When to See an ENT Specialist",
    excerpt: "Persistent sore throats, ringing ears, or sinus issues — knowing when to escalate to a specialist can make all the difference.",
    date: "Feb 10, 2026", readTime: "4 min", featured: false, image: heroClinicImg,
    author: "Medical Team", clinic: "Beaconhill Medical",
    body: `Ear, nose, and throat conditions are among the most common reasons people visit a doctor. Many resolve with primary care treatment — but some require specialist intervention.

**When Primary Care Isn't Enough**
If symptoms persist for more than 2–3 weeks despite standard treatment, it's time to escalate. This includes recurring tonsillitis, chronic sinusitis, unexplained hearing loss, or a lump in the neck.

**Common ENT Conditions**
- Chronic sinusitis: persistent inflammation of the sinus cavities
- Tinnitus: ringing or buzzing in the ears
- Sleep apnoea: airway obstruction during sleep, often involving the tonsils or adenoids
- Vertigo: dizziness linked to inner ear dysfunction

**Don't Ignore Hearing Loss**
Early diagnosis of hearing loss enables early intervention — whether through hearing aids, medical treatment, or surgery. Delays worsen outcomes.`,
  },
  {
    slug: "mental-health-and-your-physical-wellbeing",
    category: "Mental Health",
    title: "The Connection Between Mental Health and Physical Wellbeing",
    excerpt: "Your mental and physical health are deeply intertwined. Understanding this link is the first step to treating the whole person.",
    date: "Jan 30, 2026", readTime: "6 min", featured: false, image: doctorImg,
    author: "Wellness Team", clinic: "Beaconhill Medical",
    body: `For decades, medicine treated the mind and body as separate systems. We now know they are profoundly interconnected — and that neglecting one undermines the other.

**Stress and Physical Health**
Chronic stress elevates cortisol, which suppresses the immune system, increases blood pressure, disrupts sleep, and accelerates inflammation throughout the body.

**Depression and Chronic Disease**
People living with depression have a significantly higher risk of heart disease, diabetes, and stroke. The relationship is bidirectional — chronic illness also increases depression risk.

**The Role of Sleep**
Poor mental health often disrupts sleep, and poor sleep worsens mental health. Prioritising sleep hygiene is one of the highest-leverage interventions for both.

**Small Steps That Help**
Regular physical activity, social connection, time in nature, and structured daily routines all have clinically proven effects on mood and mental health.

At Beaconhill, we believe healthcare must address the whole person — physical, mental, and social.`,
  },
];

/** Render simple markdown-like bold (**text**) and paragraph breaks */
const renderBody = (body: string) =>
  body.split("\n\n").map((para, i) => {
    const parts = para.split(/(\*\*[^*]+\*\*)/g).map((chunk, j) =>
      chunk.startsWith("**") ? (
        <strong key={j}>{chunk.replace(/\*\*/g, "")}</strong>
      ) : (
        chunk
      )
    );
    return (
      <p key={i} className="mb-5 last:mb-0">
        {parts}
      </p>
    );
  });

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/insights" replace />;

  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);
  const fallbackRelated = posts.filter((p) => p.slug !== slug).slice(0, 2);
  const relatedPosts = related.length >= 2 ? related : fallbackRelated;

  return (
    <Layout>
      {/* ── ARTICLE HERO ── */}
      <section className="relative overflow-hidden bg-foreground pt-24 pb-0">
        <div className="absolute inset-0">
          <img src={post.image} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/90 to-foreground" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/insights" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>
          </motion.div>
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
              className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-5"
            >
              {post.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.14 }}
              className="font-display font-extrabold text-3xl md:text-4xl xl:text-5xl text-white leading-[1.12] mb-6"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/55 text-sm pb-10"
            >
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5" /> {post.clinic}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime} read</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* featured image */}
      <div className="container relative z-10 -mt-4 mb-0">
        <AnimatedSection>
          <div className="max-w-3xl overflow-hidden rounded-2xl shadow-elevated">
            <img src={post.image} alt={post.title} className="w-full aspect-[16/7] object-cover" />
          </div>
        </AnimatedSection>
      </div>

      {/* ── ARTICLE BODY ── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 xl:gap-16 items-start max-w-5xl">
            {/* body */}
            <AnimatedSection>
              <div className="prose prose-lg prose-neutral max-w-none text-foreground leading-relaxed">
                {renderBody(post.body)}
              </div>

              {/* article CTA */}
              <div className="mt-12 p-7 rounded-2xl bg-secondary border border-border">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  Ready to speak to a specialist?
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  Our team at {post.clinic} is here to help. Book an appointment today.
                </p>
                <Button asChild className="rounded-full px-6">
                  <Link to="/contact"><CalendarCheck className="mr-2 w-4 h-4" /> Book Appointment</Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* sidebar */}
            <AnimatedSection delay={0.1} className="lg:sticky lg:top-28 space-y-8">
              <div className="bg-secondary rounded-2xl p-6">
                <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-4">About the Author</h4>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{post.author}</div>
                    <div className="text-xs text-muted-foreground">{post.clinic}</div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
                <h4 className="font-display font-bold text-sm text-foreground mb-3">Need Expert Care?</h4>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  Speak directly with our specialists at Beaconhill.
                </p>
                <Button asChild size="sm" className="w-full rounded-full">
                  <Link to="/contact">Book Now <ArrowRight className="ml-2 w-3.5 h-3.5" /></Link>
                </Button>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-4">Explore Services</h4>
                <div className="space-y-2">
                  {["Dental Care", "Eye Care", "Dermatology", "Medical Services"].map((s) => (
                    <Link key={s} to="/services" className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      {s} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container">
            <AnimatedSection className="mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-2">Continue Reading</span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">Related Articles</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
              {relatedPosts.map((p, i) => (
                <AnimatedSection key={p.slug} delay={i * 0.1}>
                  <Link to={`/insights/${p.slug}`} className="block group">
                    <article className="bg-background border border-border rounded-2xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all">
                      <div className="relative overflow-hidden aspect-[16/9]">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-background/90 text-primary text-[10px] font-semibold uppercase tracking-wider border border-border">
                          {p.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display font-bold text-base text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{p.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.2} className="mt-10">
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link to="/insights">View All Insights <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default InsightArticle;
