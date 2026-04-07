import { Users, Heart, Building, Stethoscope, Award, Target } from "lucide-react";

const stats = [
  { value: "50,000+", label: "Patients Treated",         icon: Stethoscope },
  { value: "7",       label: "Healthcare Businesses",    icon: Building },
  { value: "25,000+", label: "Smiles Restored",          icon: Heart },
  { value: "40+",     label: "Communities Reached",      icon: Users },
  { value: "10+",     label: "Years of Excellence",      icon: Award },
  { value: "1M",      label: "Smiles Mission Goal",      icon: Target },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...stats, ...stats, ...stats];

const ImpactStats = () => (
  <>
    <style>{`
      @keyframes marquee-scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-33.333%); }
      }
      .marquee-track {
        animation: marquee-scroll 28s linear infinite;
        width: max-content;
        display: flex;
      }
      .marquee-track:hover {
        animation-play-state: paused;
      }
    `}</style>

    <section
      className="relative overflow-hidden py-0"
      aria-label="Impact statistics"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(212_68%_20%)] via-[hsl(212_68%_26%)] to-[hsl(200_60%_24%)]" />
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[hsl(212_68%_20%)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[hsl(200_60%_24%)] to-transparent pointer-events-none" />

      <div className="relative overflow-hidden py-4">
        <div className="marquee-track">
          {marqueeItems.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-10 border-r border-white/10 last:border-0 shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-white/80" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-extrabold text-2xl text-white tracking-tight leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs font-medium text-white/55 whitespace-nowrap leading-none">
                    {s.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default ImpactStats;
