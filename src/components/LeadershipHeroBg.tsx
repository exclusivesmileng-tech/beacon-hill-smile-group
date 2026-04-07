import { motion } from "framer-motion";

/**
 * Decorative animated SVG background for leadership hero sections.
 * Renders absolutely-positioned, pointer-events-none vector elements.
 */
export default function LeadershipHeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* ── Large rotating arc ring ── */}
      <motion.svg
        className="absolute -top-32 -left-32 w-[560px] h-[560px] opacity-[0.06]"
        viewBox="0 0 560 560"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, ease: "linear", repeat: Infinity }}
      >
        <circle cx="280" cy="280" r="240" stroke="#7AC143" strokeWidth="1.5" strokeDasharray="18 10" />
        <circle cx="280" cy="280" r="180" stroke="white" strokeWidth="0.8" strokeDasharray="6 14" />
      </motion.svg>

      {/* ── Counter-rotating arc (bottom right) ── */}
      <motion.svg
        className="absolute -bottom-24 -right-24 w-[420px] h-[420px] opacity-[0.05]"
        viewBox="0 0 420 420"
        fill="none"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        <circle cx="210" cy="210" r="180" stroke="#7AC143" strokeWidth="1.2" strokeDasharray="10 16" />
        <circle cx="210" cy="210" r="130" stroke="white" strokeWidth="0.7" strokeDasharray="4 12" />
      </motion.svg>

      {/* ── Floating particles ── */}
      {[
        { x: "12%",  y: "20%", size: 3,   delay: 0,    color: "#7AC143" },
        { x: "28%",  y: "75%", size: 2,   delay: 1.2,  color: "white" },
        { x: "55%",  y: "14%", size: 2.5, delay: 0.6,  color: "#7AC143" },
        { x: "70%",  y: "60%", size: 3,   delay: 1.8,  color: "white" },
        { x: "82%",  y: "30%", size: 2,   delay: 0.9,  color: "#7AC143" },
        { x: "40%",  y: "85%", size: 2,   delay: 2.1,  color: "white" },
        { x: "92%",  y: "78%", size: 2.5, delay: 0.4,  color: "#7AC143" },
        { x: "6%",   y: "56%", size: 2,   delay: 1.5,  color: "white" },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size, backgroundColor: p.color }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.5, 0.2, 0.5], scale: [0, 1, 1, 1], y: [0, -12, 0, -8, 0] }}
          transition={{ duration: 6, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ── Animated corner lines (top-left) ── */}
      <motion.svg
        className="absolute top-10 left-10 w-40 h-40 opacity-[0.07]"
        viewBox="0 0 160 160"
        fill="none"
      >
        <motion.path
          d="M0 80 L80 0"
          stroke="white"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M0 40 L40 0"
          stroke="#7AC143"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M0 120 L120 0"
          stroke="white"
          strokeWidth="0.7"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.svg>

      {/* ── Vertical breathing line (centre-left) ── */}
      <motion.svg
        className="absolute left-[8%] top-1/2 -translate-y-1/2 w-px h-48 opacity-10"
        viewBox="0 0 2 192"
        fill="none"
      >
        <motion.line
          x1="1" y1="0" x2="1" y2="192"
          stroke="white"
          strokeWidth="1"
          initial={{ scaleY: 0, originY: "50%" }}
          animate={{ scaleY: [0, 1, 0.4, 1] }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* ── Abstract DNA-like curved paths ── */}
      <motion.svg
        className="absolute right-[6%] top-1/2 -translate-y-1/2 w-16 h-72 opacity-[0.08]"
        viewBox="0 0 64 288"
        fill="none"
      >
        {[0, 48, 96, 144, 192, 240].map((yOff, i) => (
          <motion.path
            key={i}
            d={`M 8 ${yOff} Q 56 ${yOff + 24} 8 ${yOff + 48}`}
            stroke={i % 2 === 0 ? "#7AC143" : "white"}
            strokeWidth="1.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        {[24, 72, 120, 168, 216, 264].map((yOff, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={i % 2 === 0 ? 8 : 56}
            cy={yOff}
            r="2"
            fill={i % 2 === 0 ? "#7AC143" : "white"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </motion.svg>

      {/* ── Plus / cross marks ── */}
      {[
        { x: "22%", y: "15%", size: 14, delay: 1.0 },
        { x: "75%", y: "82%", size: 10, delay: 1.6 },
        { x: "48%", y: "48%", size: 8,  delay: 0.7 },
      ].map((m, i) => (
        <motion.svg
          key={i}
          className="absolute opacity-[0.06]"
          style={{ left: m.x, top: m.y, width: m.size, height: m.size }}
          viewBox="0 0 14 14"
          fill="none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 0.8, delay: m.delay, ease: [0.22, 1, 0.36, 1] }}
        >
          <line x1="7" y1="0" x2="7" y2="14" stroke="white" strokeWidth="1.5" />
          <line x1="0" y1="7" x2="14" y2="7" stroke="white" strokeWidth="1.5" />
        </motion.svg>
      ))}

      {/* ── Horizontal scan line that sweeps once ── */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-20"
        initial={{ top: "0%", opacity: 0 }}
        animate={{ top: "100%", opacity: [0, 0.2, 0.2, 0] }}
        transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
      />

    </div>
  );
}
