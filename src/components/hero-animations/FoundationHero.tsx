import { motion } from "framer-motion";

const C = 190;
const W = 380;

// EKG / heartbeat path
const EKG = `M20,190 L70,190 L85,155 L100,230 L115,145 L130,235 L145,190 L360,190`;

export default function FoundationHero() {
  return (
    <div className="relative w-[380px] h-[380px]" aria-hidden="true">

      {/* Outer pulse rings */}
      {[0, 1.2, 2.4].map((delay, i) => (
        <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox={`0 0 ${W} ${W}`} fill="none"
          initial={{ scale: 0.3, opacity: 0.6 }}
          animate={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 3, delay, ease: "easeOut", repeat: Infinity }}>
          <circle cx={C} cy={C} r="140" stroke="#e45b5b" strokeWidth="1.5" strokeOpacity="0.5" />
        </motion.svg>
      ))}

      {/* Static guide circles */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${W} ${W}`} fill="none">
        <circle cx={C} cy={C} r="155" stroke="white" strokeWidth="0.5" strokeOpacity="0.07" />
        <circle cx={C} cy={C} r="100" stroke="#e45b5b" strokeWidth="0.6" strokeDasharray="4 8" strokeOpacity="0.15" />
      </svg>

      {/* Rotating dashed outer ring */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${W} ${W}`} fill="none"
        animate={{ rotate: 360 }} transition={{ duration: 80, ease: "linear", repeat: Infinity }}>
        <circle cx={C} cy={C} r="170" stroke="#e45b5b" strokeWidth="0.8" strokeDasharray="10 18" strokeOpacity="0.14" />
      </motion.svg>

      {/* EKG heartbeat line — draws then fades, loops */}
      <motion.svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${W} ${W}`} fill="none">
        <motion.path d={EKG}
          stroke="#e45b5b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
          strokeOpacity="0.7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 0.8, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, times: [0, 0.5, 0.8, 1] }}
        />
      </motion.svg>

      {/* Orbiting heart icons */}
      {[0, 120, 240].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = C + 130 * Math.cos(rad);
        const y = C + 130 * Math.sin(rad);
        return (
          <motion.svg key={i} className="absolute inset-0 w-full h-full" viewBox={`0 0 ${W} ${W}`} fill="none"
            animate={{ rotate: 360 }} transition={{ duration: 40 + i * 8, ease: "linear", repeat: Infinity }}>
            <circle cx={x} cy={y} r="16" fill="#e45b5b" fillOpacity="0.1" stroke="#e45b5b" strokeWidth="0.8" strokeOpacity="0.4" />
            {/* Heart shape */}
            <g transform={`translate(${x - 8}, ${y - 7})`}>
              <path d="M8 13 C8 13 2 8 2 5a3 3 0 016 0 3 3 0 016 0c0 3-6 8-6 8z"
                fill="#e45b5b" fillOpacity="0.7" />
            </g>
          </motion.svg>
        );
      })}

      {/* Floating hands / community nodes */}
      {[60, 180, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = C + 100 * Math.cos(rad);
        const y = C + 100 * Math.sin(rad);
        return (
          <motion.svg key={`n-${i}`} className="absolute inset-0 w-full h-full" viewBox={`0 0 ${W} ${W}`} fill="none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}>
            <circle cx={x} cy={y} r="5" fill="white" opacity="0.25" />
            <line x1={C} y1={C} x2={x} y2={y} stroke="#e45b5b" strokeWidth="0.7" strokeOpacity="0.2" strokeDasharray="3 5" />
          </motion.svg>
        );
      })}

      {/* Centre glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="w-28 h-28 rounded-full bg-red-500/10 blur-2xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }} />
      </div>

      {/* Centre heart */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg viewBox="0 0 80 80" fill="none" className="w-20 h-20"
          initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: [1, 1.08, 1] }}
          transition={{ opacity: { duration: 0.6, delay: 0.3 }, scale: { duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.3 } }}>
          <path d="M40 62 C40 62 14 44 14 28a14 14 0 0126 0 14 14 0 0126 0c0 16-26 34-26 34z"
            fill="#e45b5b" fillOpacity="0.3" stroke="#e45b5b" strokeWidth="1.5" strokeOpacity="0.8" />
          <circle cx="40" cy="40" r="5" fill="#e45b5b" opacity="0.9" />
        </motion.svg>
      </div>

    </div>
  );
}
