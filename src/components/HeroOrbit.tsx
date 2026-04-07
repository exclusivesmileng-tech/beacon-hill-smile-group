import { motion } from "framer-motion";

/** Reusable right-column orbit animation used across all interior page heroes. */
export default function HeroOrbit() {
  return (
    <div className="relative w-[380px] h-[380px]">

      {/* Outermost slow-spin dashed ring */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        animate={{ rotate: 360 }} transition={{ duration: 90, ease: "linear", repeat: Infinity }}>
        <circle cx="190" cy="190" r="178" stroke="#7AC143" strokeWidth="1" strokeDasharray="12 18" strokeOpacity="0.18" />
      </motion.svg>

      {/* Counter-spin ring */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        animate={{ rotate: -360 }} transition={{ duration: 60, ease: "linear", repeat: Infinity }}>
        <circle cx="190" cy="190" r="148" stroke="white" strokeWidth="0.8" strokeDasharray="6 20" strokeOpacity="0.12" />
      </motion.svg>

      {/* Pulse rings expanding from centre */}
      {[0, 1.4, 2.8].map((delay, i) => (
        <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
          initial={{ scale: 0.4, opacity: 0.5 }}
          animate={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 3.5, delay, ease: "easeOut", repeat: Infinity }}>
          <circle cx="190" cy="190" r="100" stroke="#7AC143" strokeWidth="1.5" strokeOpacity="0.5" />
        </motion.svg>
      ))}

      {/* Inner dashed ring */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        animate={{ rotate: 360 }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
        <circle cx="190" cy="190" r="108" stroke="#7AC143" strokeWidth="1.2" strokeDasharray="3 10" strokeOpacity="0.3" />
      </motion.svg>

      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.svg key={`od-${i}`} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
          animate={{ rotate: 360 }} transition={{ duration: 28 + i * 4, ease: "linear", repeat: Infinity }}>
          <circle
            cx={190 + 148 * Math.cos((deg * Math.PI) / 180)}
            cy={190 + 148 * Math.sin((deg * Math.PI) / 180)}
            r={i % 2 === 0 ? 3.5 : 2.5}
            fill={i % 2 === 0 ? "#7AC143" : "white"}
            opacity={i % 2 === 0 ? 0.7 : 0.4}
          />
        </motion.svg>
      ))}

      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-24 h-24 rounded-full bg-brand-green/10 blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      {/* Centre icon — medical cross */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg viewBox="0 0 80 80" fill="none" className="w-20 h-20"
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <rect x="30" y="12" width="20" height="56" rx="4" fill="#7AC143" fillOpacity="0.25" />
          <rect x="12" y="30" width="56" height="20" rx="4" fill="#7AC143" fillOpacity="0.25" />
          <rect x="32" y="14" width="16" height="52" rx="3" fill="#7AC143" fillOpacity="0.5" />
          <rect x="14" y="32" width="52" height="16" rx="3" fill="#7AC143" fillOpacity="0.5" />
          <circle cx="40" cy="40" r="7" fill="#7AC143" opacity="0.9" />
        </motion.svg>
      </div>

      {/* Connecting spokes */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x2 = 190 + 108 * Math.cos(rad);
          const y2 = 190 + 108 * Math.sin(rad);
          return (
            <motion.line key={i} x1="190" y1="190" x2={x2} y2={y2}
              stroke={i % 2 === 0 ? "#7AC143" : "white"} strokeWidth="0.8" strokeOpacity="0.2"
              strokeDasharray="3 5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
            />
          );
        })}
      </motion.svg>

    </div>
  );
}
