import { motion } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
  left: { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } },
};

// High-performance scroll reveal wrapper with GPU compositing.
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  as = "div",
  style = {},
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px" }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity", ...style }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

// Stagger container for lists.
export function Stagger({ children, className = "", stagger = 0.08, once = true, style = {} }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px" }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      style={{ willChange: "transform, opacity", ...style }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", variant = "up", style = {} }) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity", ...style }}
    >
      {children}
    </motion.div>
  );
}
