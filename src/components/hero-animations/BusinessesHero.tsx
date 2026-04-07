import { motion } from "framer-motion";

const C = 190; // centre
const ICONS = [
  // path data (simplified glyph silhouettes) + orbit radius + label
  { label: "Dental",    r: 148, startDeg: 0,    dur: 32, icon: "M40 18c-8 0-14 6-14 14 0 5 3 10 7 13v17h14V45c4-3 7-8 7-13 0-8-6-14-14-14z" },
  { label: "Eye",       r: 148, startDeg: 51,   dur: 36, icon: "M40 26C27 26 16 40 16 40s11 14 24 14 24-14 24-14-11-14-24-14zm0 22a8 8 0 110-16 8 8 0 010 16z" },
  { label: "Skin",      r: 148, startDeg: 102,  dur: 29, icon: "M40 14c-14 0-26 12-26 26s12 26 26 26 26-12 26-26S54 14 40 14zm0 44c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z" },
  { label: "ENT",       r: 148, startDeg: 154,  dur: 34, icon: "M36 14v14h-8l12 16 12-16h-8V14H36zm-10 28H14v16h48V42H50" },
  { label: "Mental",    r: 148, startDeg: 205,  dur: 38, icon: "M40 14a18 18 0 00-18 18c0 8 5 15 12 17v9h12v-9c7-2 12-9 12-17a18 18 0 00-18-18z" },
  { label: "FMCG",      r: 148, startDeg: 257,  dur: 31, icon: "M28 16h24l4 12H24L28 16zm-4 16h32v28H24V32zm8 8v12m8-12v12" },
  { label: "Premium",   r: 148, startDeg: 308,  dur: 35, icon: "M40 14l6 12 14 2-10 10 2 14-12-6-12 6 2-14L20 28l14-2 6-12z" },
];

export default function BusinessesHero() {
  return (
    <div className="relative w-[380px] h-[380px]" aria-hidden="true">

      {/* Outer orbit track */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
        <circle cx={C} cy={C} r="148" stroke="white" strokeWidth="0.6" strokeOpacity="0.08" />
        <circle cx={C} cy={C} r="80"  stroke="#7AC143" strokeWidth="0.6" strokeOpacity="0.12" strokeDasharray="4 8" />
      </svg>

      {/* Spinning outer ring */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        animate={{ rotate: 360 }} transition={{ duration: 120, ease: "linear", repeat: Infinity }}>
        <circle cx={C} cy={C} r="165" stroke="#7AC143" strokeWidth="1" strokeDasharray="8 20" strokeOpacity="0.14" />
      </motion.svg>

      {/* 7 orbiting business icons */}
      {ICONS.map((item, i) => {
        const rad = (item.startDeg * Math.PI) / 180;
        const dotX = C + item.r * Math.cos(rad);
        const dotY = C + item.r * Math.sin(rad);
        return (
          <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
            animate={{ rotate: 360 }} transition={{ duration: item.dur, ease: "linear", repeat: Infinity }}>
            {/* Dot marker */}
            <circle cx={dotX} cy={dotY} r="14" fill="#7AC143" fillOpacity="0.12" stroke="#7AC143" strokeWidth="0.8" strokeOpacity="0.4" />
            {/* Counter-rotate the icon so it stays upright */}
            <g transform={`translate(${dotX - 10}, ${dotY - 10}) scale(0.25)`}>
              <motion.path d={item.icon} stroke="#7AC143" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
            </g>
          </motion.svg>
        );
      })}

      {/* Spoke lines from centre to each icon (static) */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}>
        {ICONS.map((item, i) => {
          const rad = (item.startDeg * Math.PI) / 180;
          return (
            <motion.line key={i}
              x1={C} y1={C}
              x2={C + item.r * Math.cos(rad)}
              y2={C + item.r * Math.sin(rad)}
              stroke="#7AC143" strokeWidth="0.6" strokeOpacity="0.15" strokeDasharray="3 6"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            />
          );
        })}
      </motion.svg>

      {/* Centre hub glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="w-28 h-28 rounded-full bg-brand-green/10 blur-2xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }} />
      </div>

      {/* Centre hub circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg viewBox="0 0 80 80" fill="none" className="w-20 h-20"
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <circle cx="40" cy="40" r="30" fill="#7AC143" fillOpacity="0.1" stroke="#7AC143" strokeWidth="1" strokeOpacity="0.4" />
          {/* Network hub icon */}
          <circle cx="40" cy="40" r="6" fill="#7AC143" opacity="0.9" />
          {[0, 72, 144, 216, 288].map((deg, i) => {
            const r = (deg * Math.PI) / 180;
            return <line key={i} x1="40" y1="40" x2={40 + 20 * Math.cos(r)} y2={40 + 20 * Math.sin(r)}
              stroke="#7AC143" strokeWidth="1.5" strokeOpacity="0.5" />;
          })}
          {[0, 72, 144, 216, 288].map((deg, i) => {
            const r = (deg * Math.PI) / 180;
            return <circle key={i} cx={40 + 20 * Math.cos(r)} cy={40 + 20 * Math.sin(r)} r="3"
              fill="#7AC143" opacity="0.6" />;
          })}
        </motion.svg>
      </div>

    </div>
  );
}
