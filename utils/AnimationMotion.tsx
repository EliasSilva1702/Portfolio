import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
