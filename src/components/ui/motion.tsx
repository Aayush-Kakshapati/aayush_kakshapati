import { motion, HTMLMotionProps, Variants } from "framer-motion";

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fadeUpTransition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const MotionDiv: React.FC<HTMLMotionProps<"div">> = motion.div;
