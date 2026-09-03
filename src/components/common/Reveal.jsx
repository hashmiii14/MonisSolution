import { motion } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
};

// Scroll reveal wrapper.
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

// Stagger container for lists.
export function Stagger({ children, className = "", stagger = 0.12, once = true }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", variant = "up" }) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
