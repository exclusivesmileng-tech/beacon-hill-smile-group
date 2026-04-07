import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const directionMap = {
  up:    { y: 32, x: 0 },
  down:  { y: -32, x: 0 },
  left:  { y: 0, x: 40 },
  right: { y: 0, x: -40 },
};

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: Props) => {
  const { x, y } = directionMap[direction];
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom spring-like ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
