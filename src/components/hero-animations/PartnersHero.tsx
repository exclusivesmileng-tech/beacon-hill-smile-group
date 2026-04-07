import { motion } from "framer-motion";

const C = 190;

export default function PartnersHero() {
  return (
    <div className="relative w-[380px] h-[380px]" aria-hidden="true">

      {/* Two slowly overlapping Venn-style rings */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        animate={{ x: [-12, 0, -12] }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}>
        <circle cx="165" cy={C} r="110" stroke="#7AC143" strokeWidth="1.2" strokeOpacity="0.25"
          fill="#7AC143" fillOpacity="0.04" />
      </motion.svg>
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        animate={{ x: [12, 0, 12] }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}>
        <circle cx="215" cy={C} r="110" stroke="#60a5fa" strokeWidth="1.2" strokeOpacity="0.25"
          fill="#60a5fa" fillOpacity="0.04" />
      </motion.svg>

      {/* Outer slow-spin ring */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        animate={{ rotate: 360 }} transition={{ duration: 90, ease: "linear", repeat: Infinity }}>
        <circle cx={C} cy={C} r="170" stroke="#7AC143" strokeWidth="0.8" strokeDasharray="10 20" strokeOpacity="0.12" />
      </motion.svg>

      {/* Orbiting partnership nodes */}
      {[
        { deg: 0,   color: "#7AC143", label: "Investors" },
        { deg: 60,  color: "#60a5fa", label: "Medical" },
        { deg: 120, color: "#7AC143", label: "Corporate" },
        { deg: 180, color: "#60a5fa", label: "NGO" },
        { deg: 240, color: "#7AC143", label: "Gov" },
        { deg: 300, color: "#60a5fa", label: "Research" },
      ].map((node, i) => {
        const rad = (node.deg * Math.PI) / 180;
        const x = C + 148 * Math.cos(rad);
        const y = C + 148 * Math.sin(rad);
        return (
          <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
            animate={{ rotate: 360 }} transition={{ duration: 50 + i * 5, ease: "linear", repeat: Infinity }}>
            <circle cx={x} cy={y} r="10" fill={node.color} fillOpacity="0.15"
              stroke={node.color} strokeWidth="1" strokeOpacity="0.5" />
            <circle cx={x} cy={y} r="3" fill={node.color} opacity="0.8" />
          </motion.svg>
        );
      })}

      {/* Connection lines between symmetric nodes */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <motion.line key={i}
              x1={C} y1={C}
              x2={C + 148 * Math.cos(rad)}
              y2={C + 148 * Math.sin(rad)}
              stroke={i % 2 === 0 ? "#7AC143" : "#60a5fa"} strokeWidth="0.7" strokeOpacity="0.18"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
            />
          );
        })}
      </motion.svg>

      {/* Handshake geometry — two arcs meeting */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
        <motion.path d="M155 190 Q190 155 225 190" stroke="#7AC143" strokeWidth="1.5" fill="none"
          strokeOpacity="0.35" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }} />
        <motion.path d="M155 190 Q190 225 225 190" stroke="#60a5fa" strokeWidth="1.5" fill="none"
          strokeOpacity="0.35" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }} />
      </motion.svg>

      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="w-28 h-28 rounded-full bg-brand-green/10 blur-2xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }} />
      </div>

      {/* Centre handshake icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg viewBox="0 0 80 80" fill="none" className="w-20 h-20"
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <circle cx="40" cy="40" r="28" fill="#7AC143" fillOpacity="0.1" stroke="#7AC143" strokeWidth="1" strokeOpacity="0.3" />
          {/* Left & right hands */}
          <path d="M20 44 L32 38 L38 42 L48 36 L60 44" stroke="#7AC143" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.8" />
          <circle cx="40" cy="40" r="4" fill="#7AC143" opacity="0.9" />
        </motion.svg>
      </div>

    </div>
  );
}
